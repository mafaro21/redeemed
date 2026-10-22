'use client';

import React, { useState } from 'react';
import { Play, ExternalLink, Music as MusicIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ---- REPLACE THESE WITH YOUR ACTUAL LINKS ----
const SPOTIFY_EMBED_URLS = {
    single: 'https://open.spotify.com/track/6ouYHy6KwFMrPKyFbVGz3X?si=4ca46eb8786742e5',
    album: 'https://open.spotify.com/embed/album/YOUR_ALBUM_ID',
    playlist: 'https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID',
};
const APPLE_MUSIC_URL = 'https://music.apple.com/us/artist/the-redeemed-family-zimbabwe/1690143386';
const YOUTUBE_VIDEO_ID = 'WWruwiZ_Wmo';
// ------------------------------------------------

export default function MusicPage() {
    const [platform, setPlatform] = useState<'spotify' | 'apple'>('spotify');

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">


                {/* ============================================
            FEATURED VIDEO — the "biggest music video" slot
            ============================================ */}
                <section className="bg-zinc-950 px-6 py-16 text-white lg:px-10 lg:py-20">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-8 flex items-center gap-3">
                            {/* <Youtube className="size-5 text-red-500" /> */}
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                                Most Popular
                            </p>
                        </div>
                        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
                            Watch our biggest track.
                        </h2>
                        {/* <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                            The video that started it all — live from Studio 03.
                        </p> */}

                        {/* YouTube embed */}
                        <div className="mt-8 aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 shadow-2xl">
                            <iframe
                                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                                title="Redeemed Family Sound — Most Popular Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="size-full"
                            />
                        </div>
                    </div>
                </section>

                {/* ============================================
            PLATFORM TOGGLE + EMBEDS
            ============================================ */}
                <section className="bg-[#F5F5F5] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
                                01 / Releases
                            </p>
                            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                                Listen Here
                            </h2>
                        </div>

                        {/* Toggle */}
                        <div className="mb-10 flex items-center gap-1 border border-zinc-200 bg-white p-1 w-fit">
                            <button
                                onClick={() => setPlatform('spotify')}
                                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer ${platform === 'spotify'
                                    ? 'bg-green-600 text-white'
                                    : 'text-zinc-600 hover:text-green-600'
                                    }`}
                            >
                                Spotify
                            </button>
                            <button
                                onClick={() => setPlatform('apple')}
                                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer ${platform === 'apple'
                                    ? 'bg-rose-600 text-white'
                                    : 'text-zinc-600 hover:text-rose-600'
                                    }`}
                            >
                                Apple Music
                            </button>
                        </div>

                        {/* --- SPOTIFY PANEL: embedded, playable in-page --- */}
                        {platform === 'spotify' && (
                            <div className="space-y-8">
                                <div>
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Latest Single
                                    </p>
                                    <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/6ouYHy6KwFMrPKyFbVGz3X?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>

                                <div>
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Full Album
                                    </p>
                                    <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/6FqJ3rcWwpR1PbH3YtLTSU?utm_source=generator" width="100%" height="652" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>

                                {/* <div>
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                        Playlist
                                    </p>
                                    <iframe
                                        style={{ borderRadius: '12px' }}
                                        src={SPOTIFY_EMBED_URLS.playlist}
                                        width="100%"
                                        height="352"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        title="Spotify — Playlist"
                                    />
                                </div> */}
                            </div>
                        )}

                        {/* --- APPLE MUSIC PANEL: opens Apple Music in a new tab --- */}
                        {platform === 'apple' && (
                            <div className="border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
                                <MusicIcon className="size-8 text-red-700" />
                                <h3 className="mt-4 font-display text-2xl font-black uppercase text-zinc-950 sm:text-3xl">
                                    Listen on Apple Music
                                </h3>
                                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
                                    Apple Music requires an active subscription for full playback. Tap below to open
                                    The Redeemed Family on Apple Music and stream from there.
                                </p>
                                <a
                                    href={APPLE_MUSIC_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center gap-2 bg-zinc-950 px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-rose-600"
                                >
                                    Open in Apple Music <ExternalLink className="size-3.5" />
                                </a>
                                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                                    Opens music.apple.com — subscription required
                                </p>
                            </div>
                        )}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}