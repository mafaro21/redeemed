'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-[#0f0f11] px-6 pb-12 pt-20 text-white lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 border-b border-zinc-800 pb-16 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <a href="/" className="flex items-center gap-3">
                            <span className="flex size-9 items-center justify-center bg-red-700 text-sm font-black text-white">
                                CS
                            </span>
                            <span className="font-bold text-sm tracking-[0.24em] uppercase text-white">
                                Redeemed Family Sound
                            </span>
                        </a>
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
                            Independent music culture for the curious, the committed, and everyone in between.
                        </p>

                        <form className="mt-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-300 mb-3">
                                Stay in Tune
                            </p>
                            <div className="flex border-b border-zinc-700 pb-2">
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                                />
                                <button
                                    type="submit"
                                    className="text-xs font-bold uppercase tracking-[0.18em] text-red-500 hover:text-red-400"
                                >
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Navigation</p>
                        <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-zinc-400">
                            <a href="/" className="hover:text-white">Home</a>
                            <a href="/music" className="hover:text-white">Music</a>
                            <a href="/events" className="hover:text-white">Events</a>
                            <a href="/about" className="hover:text-white">About</a>
                            <a href="/contact" className="hover:text-white">Contact</a>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Location</p>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                            Harare Zimbabwe
                        </p>
                        <a
                            href="mailto:theredeemedfamily@gmail.com"
                            className="mt-4 inline-block text-sm font-bold text-white hover:text-red-500"
                        >
                            theredeemedfamily@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-4 pt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:items-center">
                    <span>© 2026 Redeemed Family Sound Collective. All Rights Reserved.</span>
                    <div className="flex items-center gap-5">
                        <a
                            href="https://www.facebook.com/profile.php?id=61565223512099"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-zinc-500 transition-colors hover:text-blue-600"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                        </a>
                        {/* <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-zinc-500 transition-colors hover:text-fuschia-400"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a> */}
                        <a
                            href="https://www.youtube.com/@theredeemedfamilyzimbabwe1141/featured"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="text-zinc-500 transition-colors hover:text-red-600"
                        >
                            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                        </a>
                        <a
                            href="https://open.spotify.com/artist/3ZuxtMik24M6UX1qnZoHh7?si=JChKza-fRxejckO0-TP4uQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Spotify"
                            className="text-zinc-500 transition-colors hover:text-green-600"
                        >
                            <FontAwesomeIcon icon={faSpotify} className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}