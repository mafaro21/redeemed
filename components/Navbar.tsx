'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV = [
    ['Music', '/music'],
    ['Events', '/events'],
    ['About', '/about'],
    ['Contact', '/contact'],
] as const;

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 text-zinc-900 shadow-sm border-b border-zinc-200/80 backdrop-blur-md py-4'
                : 'bg-zinc-950/80 text-white backdrop-blur-md py-5'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
                <a href="/" className="group flex items-center gap-3 focus:outline-none">
                    <span
                        className={`flex size-10 items-center justify-center font-black text-sm tracking-wider transition-colors duration-300 ${isScrolled
                            ? 'bg-zinc-900 text-white group-hover:bg-red-700'
                            : 'bg-red-700 text-white'
                            }`}
                    >
                        CS
                    </span>
                    <span
                        className={`hidden sm:block font-bold text-sm tracking-[0.24em] uppercase transition-colors duration-300 ${isScrolled ? 'text-zinc-950' : 'text-white'
                            }`}
                    >
                        Redeemed Family Sound
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
                    {NAV.map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${isScrolled
                                ? 'text-zinc-600 hover:text-red-700'
                                : 'text-zinc-300 hover:text-red-400'
                                }`}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="/contact"
                        className={`hidden px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:inline-flex items-center gap-2 ${isScrolled
                            ? 'bg-red-700 text-white hover:bg-zinc-900'
                            : 'bg-white text-zinc-950 hover:bg-red-700 hover:text-white'
                            }`}
                    >
                        Join Us <ArrowUpRight className="size-3.5" />
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`flex size-10 items-center justify-center border md:hidden ${isScrolled ? 'border-zinc-300 text-zinc-900' : 'border-white/20 text-white'
                            }`}
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className={`border-b md:hidden ${isScrolled
                        ? 'bg-white border-zinc-200 text-zinc-900'
                        : 'bg-zinc-950 border-zinc-800 text-white'
                        }`}
                >
                    <div className="flex flex-col space-y-4 px-6 py-6 text-xs font-bold uppercase tracking-[0.2em]">
                        {NAV.map(([label, href]) => (
                            <a key={label} href={href} onClick={() => setMobileMenuOpen(false)}>
                                {label}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center gap-2 pt-2 text-red-700"
                        >
                            Join Us <ArrowUpRight className="size-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}