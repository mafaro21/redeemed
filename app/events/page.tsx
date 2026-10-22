import React from 'react';
import { MapPin, Clock, ArrowUpRight, Ticket } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const UPCOMING = [
    { date: '10/11', day: 'FRI', title: 'After Hours / Vol. 04', venue: 'The Mercury Lounge, NYC', time: '10:00 PM EST' },
    { date: '21/11', day: 'SAT', title: 'Redeemed Family Sessions: Live', venue: 'The Echo Room, Chicago', time: '9:00 PM CST' },
    { date: '11/12', day: 'FRI', title: 'Night Drive Radio', venue: 'Studio 03 Broadcast', time: '11:00 PM EST' },
    { date: '19/12', day: 'SAT', title: 'End of Year Showcase', venue: 'Brooklyn Steel, NY', time: '8:00 PM EST' },
];

const PAST = [
    { date: '09/2026', title: 'Summer Rooftop Session', venue: 'Brooklyn, NY' },
    { date: '07/2026', title: 'Analog Nights Vol. 03', venue: 'The Echo Room, Chicago' },
    { date: '05/2026', title: 'Crimson Warehouse Party', venue: 'Detroit, MI' },
];

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">


                {/* Upcoming list */}
                <section className="bg-[#6d071f] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">01 / Upcoming</p>
                        <h2 className="mt-2 font-display text-3xl font-black uppercase text-zinc-50 sm:text-5xl">
                            Upcoming Events
                        </h2>

                        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                            {UPCOMING.map((e) => (
                                <a
                                    key={e.title}
                                    href="/contact"
                                    className="group grid gap-2 sm:gap-7 py-8 transition-colors hover:bg-white/5 grid-cols-[50px_40px_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr] items-center px-2"
                                >
                                    <span className="font-display sm:text-2xl text-md font-black tracking-tight text-zinc-100 group-hover:text-red-300">
                                        {e.date}
                                    </span>
                                    <span className="text-sm font-bold uppercase text-zinc-400 group-hover:text-zinc-200">
                                        {e.day}
                                    </span>
                                    <span className="sm:text-xl text-md font-bold text-zinc-100 group-hover:text-red-300">
                                        {e.title}
                                    </span>
                                    <span className="flex items-center justify-between text-md font-bold text-zinc-400 group-hover:text-zinc-200">
                                        {e.venue}
                                        <ArrowUpRight className="size-4 text-red-500 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured event card */}
                <section className="bg-[#F5F5F5] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="relative overflow-hidden rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85"
                                    alt="Featured event"
                                    className="size-full min-h-[300px] object-cover"
                                />
                                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                    <Ticket className="size-3" /> Featured
                                </span>
                            </div>

                            <div className="flex flex-col justify-center bg-white p-8 shadow-sm sm:p-10 border border-white hover:border-red-800 transition-all">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Harare Residency</p>
                                <h3 className="mt-2 font-display text-3xl font-black uppercase text-zinc-950 sm:text-4xl">
                                    After Hours / Midnight Soundclash
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                                    An intimate late-night acoustic experience with Redeemed Family Sound resident producers and special guest synth selectors.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-zinc-700">
                                    <span className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5">
                                        <MapPin className="size-3.5 text-red-700" /> The Mercury Lounge, NYC
                                    </span>
                                    <span className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5">
                                        <Clock className="size-3.5 text-red-700" /> Oct 24 · 10:00 PM EST
                                    </span>
                                </div>
                                <a
                                    href="/contact"
                                    className="mt-8 inline-flex w-fit items-center gap-2 bg-zinc-950 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-700"
                                >
                                    Reserve Spot <ArrowUpRight className="size-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Past events */}
                <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">02 / Archive</p>
                        <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl">
                            Past Shows
                        </h2>
                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {PAST.map((p) => (
                                <div key={p.title} className="border border-zinc-200 bg-[#f9f8f6] p-6 transition-colors hover:border-red-700/40">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">{p.date}</span>
                                    <h3 className="mt-2 font-display text-lg font-bold text-zinc-950">{p.title}</h3>
                                    <p className="mt-1 text-xs text-zinc-500">{p.venue}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}