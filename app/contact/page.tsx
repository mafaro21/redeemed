'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">


                <section className="bg-[#F5F5F5] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                        {/* Form */}
                        <div className="bg-white p-8 shadow-sm sm:p-10 border border-white hover:border-red-800 transition-all">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">01 / Send a Message</p>
                            <h2 className="mt-2 font-display text-3xl font-black uppercase text-zinc-950">
                                Get in touch
                            </h2>

                            {sent ? (
                                <div className="mt-10 border-l-2 border-red-700 pl-4">
                                    <p className="font-display text-xl font-bold text-zinc-950">Message received. 🔥</p>
                                    <p className="mt-2 text-sm text-zinc-600">We&apos;ll be in touch within 48 hours.</p>
                                </div>
                            ) : (
                                <form
                                    className="mt-8 space-y-5"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setSent(true);
                                    }}
                                >
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your name"
                                            className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-red-700"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="you@example.com"
                                            className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-red-700"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Topic</label>
                                        <select className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none focus:border-red-700">
                                            <option>Booking</option>
                                            <option>Demo Submission</option>
                                            <option>Press</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="What's on your mind?"
                                            className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-red-700 resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 bg-zinc-950 px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-700"
                                    >
                                        Send Message <Send className="size-3.5" />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info column */}
                        <div className="grid gap-8">
                            <div className="bg-zinc-950 p-8 text-white shadow-sm sm:p-10 rounded-md">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">02 / Reach Us</p>
                                <h2 className="mt-2 font-display text-3xl font-black uppercase">Direct Lines</h2>

                                <div className="mt-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Mail className="mt-1 size-5 text-red-500" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email</p>
                                            <a href="mailto:theredeemedfamily@gmail.com" className="text-sm font-bold text-white hover:text-red-400">
                                                theredeemedfamily@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="mt-1 size-5 text-red-500" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Phone</p>
                                            <a href="tel:+12125551234" className="text-sm font-bold text-white hover:text-red-400">
                                                077 655 5249
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="mt-1 size-5 text-red-500" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Studio</p>
                                            <p className="text-sm font-bold text-white">104 Franklin St. Brooklyn, Harare 11222</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#6d071f] p-8 text-white shadow-sm sm:p-10 rounded-sm">
                                <h3 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                                    Book the Group
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-red-100">
                                    Bring Redeemed Family Sound to your venue, festival, or private event. Full live band, DJ sets, and custom sound installations available.
                                </p>
                                <a
                                    href="mailto:bookings@redeemedfamilysound.com"
                                    className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-950 transition-colors hover:bg-red-700 hover:text-white"
                                >
                                    Bookings Inbox <ArrowUpRight className="size-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}