import React from 'react';
import { Eye, Target, Sparkles, ListChecks } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const VALUES = [
    { icon: Eye, title: 'Vision', text: 'TO SPREAD THE WORD OF GOD TO ALL THE WORLD.' },
    { icon: Target, title: 'Aim', text: 'TO BUILD THE CHARACTER OF INDIVIDUAL MEMBERS OF THE GROUP THROUGH SOCIAL RESPONSIBILITY.' },
    { icon: ListChecks, title: 'objective', text: 'TO PRESENT, RECORD AND DISTRIBUTE QUALITY MUSIC IN LINE WITH THE GOSPEL TRUTH.' },
    { icon: Sparkles, title: 'mission', text: 'TO SPREAD THE WORD OF GOD TO ALL THE WORLD THROUGH MUSIC AND PREACHING TILL THE SECOND COMING OF OUR LORD AND REDEEMER CHRIST JESUS.' },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">


                {/* Story */}
                <section className="bg-red-100 px-6 py-24 lg:px-10 lg:py-32">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-4">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">01 / The Story</p>
                            <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                                From a humble gathering to a national ministry.
                            </h2>
                            <div className="mt-6 h-1 w-16 bg-red-700" />
                        </div>
                        <div className="space-y-6 lg:col-span-8">
                            <p className="text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl">
                                The Redeemed Family Zimbabwe is a premier contemporary gospel music ministry based in Harare, Zimbabwe. Grounded in rich
                                vocal harmonies, spiritual praise, and traditional African acappella influences, the ministry has established
                                itself as an inspiring force within the regional gospel landscape.
                            </p>
                            <p className="text-base leading-relaxed text-zinc-600">
                                We have blended sacred traditional hymns with modern contemporary gospel dynamics through our authentic expressions of faith, rich vocal arrangements, and passionate live performances
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">02 / What We Stand For</p>
                            <h2 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                                Non-negotiables
                            </h2>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2">
                            {VALUES.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="border border-zinc-200 bg-[#f9f8f6] p-8 transition-all hover:border-red-700/40 hover:shadow-lg">
                                    <Icon className="size-7 text-red-700" />
                                    <h3 className="mt-4 font-display text-xl font-black uppercase text-zinc-950">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Background & Origins — image right, text wraps */}
                <section className="bg-red-100 px-6 py-24 lg:px-10 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
                                03 / Growth & Reach
                            </p>
                            <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                                Ministry in motion.
                            </h2>
                            <div className="mt-6 h-1 w-16 bg-red-700" />
                        </div>

                        {/* The wrapper that lets text wrap around the floated image */}
                        <div className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                            {/* Image: full-width on mobile, centered float on larger screens */}
                            <div className="mb-6 sm:float-right sm:mb-6 sm:ml-8 sm:mr-4 lg:mr-8 sm:w-96 lg:w-[28rem]">
                                <img
                                    src="/redeemed2.jpg"
                                    alt="Redeemed Family Sound studio session"
                                    className="w-full rounded-sm shadow-lg"
                                />
                            </div>


                            <p className="mb-4">
                                Through digital outreach notably our thriving Facebook presence serving over 56,000
                                active followers—and frequent live ministering, The Redeemed Family has expanded its
                                reach far beyond localized worship spaces. What started as a local sound has become a
                                movement that travels carried by listeners, shared by supporters, and amplified by
                                every room the collective steps into.
                            </p>
                            <p className="mb-4">
                                They regularly minister at major church programs, including prominent appearances at
                                Harare City Centre S.D.A Church, regional conventions, and national gospel music
                                gatherings. Each stage brings new audiences, new collaborations, and new energy and
                                the collective keeps growing without ever losing the intimacy of those first basement
                                sessions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}