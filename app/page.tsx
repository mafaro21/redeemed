'use client';

import React from 'react';
import {
  Play,
  MapPin,
  Clock,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { Petit_Formal_Script } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Video {
  id: number;
  title: string;
  youtubeId: string;
}

const cookie = Petit_Formal_Script({
  weight: '400',
  subsets: ['latin'],
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">
      <Navbar />

      {/* ========================================================
          2. HERO SECTION
          ======================================================== */}
      <section
        id="hero"
        className="relative flex min-h-[85vh] items-end overflow-hidden bg-zinc-950 px-5 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-screen lg:px-10"
      >
        <div className="absolute inset-0 z-0">
          <video
            src="/vid.webm"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="size-full object-cover object-center opacity-65 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-slate-900/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h1 className="mt-6 max-w-5xl font-display text-[2.5rem] font-black uppercase leading-[0.92] tracking-tight sm:text-6xl sm:leading-[0.9] md:text-7xl lg:text-8xl lg:leading-[0.88]">
            Redeemed by <br />
            <span className="text-red-700 font-bold">
              <span className={cookie.className}>harmony.</span>
            </span>
          </h1>

          <div className="mt-8 flex max-w-2xl flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
              Preserving the rich cultural heritage of Zimbabwean a cappella through soulful worship and rhythmic precision. Experience the power of the human voice in its purest form.
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:right-10 sm:bottom-8 lg:flex">
          <span className="h-px w-12 bg-zinc-700" /> Scroll
        </div>
      </section>

      {/* ========================================================
          3. ARTISTIC MUSICAL MOTIF BANNER
          ======================================================== */}
      <section
        className="relative w-full overflow-hidden border-y border-zinc-200 bg-[#f9f8f6]"
        aria-label="Modular Musical Art Pattern"
      >
        <div className="w-full overflow-hidden">
          <svg
            viewBox="0 0 1500 130"
            className="h-16 w-full min-w-[1000px] sm:h-24 md:h-28 lg:h-32"
            preserveAspectRatio="xMidYMid slice"
          >
            <g transform="translate(0, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <path d="M 0 120 A 120 120 0 0 1 120 0 L 120 120 Z" fill="#dc2626" />
              <path d="M 0 120 A 85 85 0 0 1 85 0" fill="none" stroke="#ffffff" strokeWidth="8" />
              <path d="M 0 120 A 50 50 0 0 1 50 0" fill="none" stroke="#0f0f11" strokeWidth="12" />
              <circle cx="0" cy="120" r="18" fill="#ffffff" />
            </g>
            <g transform="translate(120, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <rect x="0" y="0" width="24" height="120" fill="#0f0f11" />
              <rect x="32" y="0" width="24" height="120" fill="#0f0f11" />
              <rect x="64" y="0" width="24" height="120" fill="#0f0f11" />
              <rect x="96" y="0" width="24" height="120" fill="#0f0f11" />
              <rect x="18" y="0" width="12" height="70" fill="#dc2626" />
              <rect x="50" y="0" width="12" height="70" fill="#991b1b" />
              <rect x="82" y="0" width="12" height="70" fill="#dc2626" />
            </g>
            <g transform="translate(240, 0)">
              <rect width="120" height="120" fill="#dc2626" />
              <polygon points="60,15 105,60 60,105 15,60" fill="#0f0f11" />
              <polygon points="60,35 85,60 60,85 35,60" fill="#ffffff" />
              <circle cx="60" cy="60" r="8" fill="#dc2626" />
            </g>
            <g transform="translate(360, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <rect x="12" y="50" width="14" height="70" fill="#dc2626" />
              <rect x="32" y="20" width="14" height="100" fill="#ffffff" />
              <rect x="52" y="70" width="14" height="50" fill="#71717a" />
              <rect x="72" y="10" width="14" height="110" fill="#dc2626" />
              <rect x="92" y="35" width="14" height="85" fill="#991b1b" />
            </g>
            <g transform="translate(480, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <path d="M 0 0 L 120 120 L 0 120 Z" fill="#991b1b" />
              <circle cx="60" cy="60" r="35" fill="#0f0f11" />
              <circle cx="60" cy="60" r="20" fill="#dc2626" />
              <circle cx="60" cy="60" r="8" fill="#ffffff" />
            </g>
            <g transform="translate(600, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <polygon points="0,0 120,120 0,120" fill="#dc2626" />
              <circle cx="40" cy="80" r="18" fill="#ffffff" />
              <rect x="52" y="20" width="8" height="60" fill="#ffffff" />
              <circle cx="95" cy="30" r="5" fill="#ffffff" />
              <circle cx="80" cy="45" r="5" fill="#ffffff" />
              <circle cx="65" cy="60" r="5" fill="#ffffff" />
            </g>
            <g transform="translate(720, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <line x1="0" y1="24" x2="120" y2="24" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="48" x2="120" y2="48" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="72" x2="120" y2="72" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="96" x2="120" y2="96" stroke="#0f0f11" strokeWidth="4" />
              <path d="M 0 120 A 60 60 0 0 1 120 60 L 120 120 Z" fill="#dc2626" />
              <circle cx="60" cy="60" r="12" fill="#0f0f11" />
            </g>
            <g transform="translate(840, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <circle cx="60" cy="60" r="52" fill="#dc2626" />
              <circle cx="60" cy="60" r="36" fill="#991b1b" />
              <circle cx="60" cy="60" r="22" fill="#ffffff" />
              <circle cx="60" cy="60" r="8" fill="#0f0f11" />
            </g>
            <g transform="translate(960, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <polygon points="60,15 105,60 60,105 15,60" fill="#dc2626" />
              <polygon points="60,35 85,60 60,85 35,60" fill="#0f0f11" />
              <circle cx="60" cy="60" r="8" fill="#ffffff" />
            </g>
            <g transform="translate(1080, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <polygon points="0,120 120,0 120,120" fill="#dc2626" />
              <circle cx="35" cy="85" r="14" fill="#ffffff" />
              <circle cx="85" cy="60" r="14" fill="#ffffff" />
              <rect x="43" y="25" width="6" height="60" fill="#ffffff" />
              <rect x="93" y="0" width="6" height="60" fill="#ffffff" />
              <polygon points="43,25 99,0 99,12 43,37" fill="#ffffff" />
            </g>
            <g transform="translate(1200, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <path d="M 0 0 A 120 120 0 0 1 120 120 L 0 120 Z" fill="#0f0f11" />
              <path d="M 0 0 A 80 80 0 0 1 80 120 L 0 120 Z" fill="#dc2626" />
              <circle cx="30" cy="90" r="12" fill="#ffffff" />
            </g>
            <g transform="translate(1320, 0)">
              <rect width="120" height="120" fill="#dc2626" />
              <path d="M 120 0 A 120 120 0 0 1 0 120 L 120 120 Z" fill="#0f0f11" />
              <path d="M 120 0 A 85 85 0 0 1 35 120" fill="none" stroke="#ffffff" strokeWidth="8" />
              <circle cx="120" cy="0" r="20" fill="#ffffff" />
            </g>
            <g transform="translate(1440, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <rect x="12" y="30" width="14" height="90" fill="#991b1b" />
              <rect x="32" y="10" width="14" height="110" fill="#dc2626" />
              <rect x="52" y="55" width="14" height="65" fill="#0f0f11" />
              <rect x="72" y="20" width="14" height="100" fill="#991b1b" />
              <rect x="92" y="40" width="14" height="80" fill="#dc2626" />
            </g>
          </svg>
        </div>
      </section>

      {/* ========================================================
          4. DUAL SHOWCASE SECTION
          ======================================================== */}
      <section id="dual-feature" className="bg-[#F5F5F5] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
              01 / Highlights & Releases
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Now Broadcasting
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* LEFT CARD: Next Concert */}
            <div className="group relative flex flex-col justify-between rounded-sm border border-white bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-800 hover:bg-red-200 hover:shadow-xl sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Next Live Show
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-700 sm:text-xs">
                  Oct 24, 2026
                </span>
              </div>

              <div className="my-6 sm:my-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  Harare Residency
                </p>
                <h3 className="mt-2 font-display text-2xl font-black uppercase text-zinc-950 sm:text-3xl lg:text-4xl">
                  After Hours / Midnight Soundclash
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:mt-4">
                  Featuring live sets from Redeemed Family Sound resident producers and special guest synth selectors. An intimate late-night acoustic experience.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-700 sm:mt-6 sm:gap-4">
                  <div className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 sm:px-3">
                    <MapPin className="size-3.5 text-red-700" /> The Mercury Lounge, Harare
                  </div>
                  <div className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 sm:px-3">
                    <Clock className="size-3.5 text-red-700" /> 10:00 PM EST
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-zinc-100 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-600">
                  Remaining Passes: <strong className="text-zinc-900">24</strong>
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-700 sm:px-6"
                >
                  Reserve Spot <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid gap-6 sm:gap-8">
              {/* Spotify embed card */}
              <div className="flex flex-col justify-between rounded-md bg-zinc-950 px-2 py-3 text-white shadow-sm">
                <iframe
                  className="my-auto"
                  data-testid="embed-iframe"
                  src="https://open.spotify.com/embed/track/6ouYHy6KwFMrPKyFbVGz3X?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Book the Group card */}
              <div className="flex flex-col justify-between rounded-sm bg-[#6d071f] p-6 text-white shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8">
                <div>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                    Book the Group
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-red-100">
                    Bring Redeemed Family Sound to your venue, festival, or private event.
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-4 border-t border-white/20 pt-5 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
                  <span className="break-all text-xs font-bold uppercase tracking-[0.15em] text-red-200">
                    <span className="block text-[10px] text-red-300">Enquiries:</span>
                    <strong className="text-white">theredeemedfamily@gmail.com</strong>
                  </span>
                  <a
                    href="mailto:theredeemedfamily@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-950 transition-colors hover:bg-red-700 hover:text-white sm:shrink-0"
                  >
                    Get in Touch <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ABOUT SECTION
          ======================================================== */}
      <section
        id="about"
        className="border-t border-zinc-200/80 bg-red-100 px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <img
              src="/redeemed.jpg"
              alt="The Redeemed Family Zimbabwe"
              className="aspect-[4/3] w-full rounded-md object-cover shadow-lg"
            />
          </div>

          <div className="space-y-5 lg:col-span-6 lg:space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
              02 / Our Philosophy
            </p>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              The soul of the nation
            </h2>
            <div className="h-1 w-16 bg-red-700" />
            <p className="text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl lg:text-2xl">
              Born from the spirit of Harare and rooted in the deep traditions of Christian a cappella music, The Redeemed Family Zimbabwe is more than a musical group — it is a brotherhood dedicated to vocal excellence.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              We believe that the human voice is the most sophisticated instrument ever created. Without the aid of electronics or backing tracks, we weave intricate layers of rhythm, bass, and harmony to create a sound that resonates with the soul.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 sm:gap-6 sm:pt-6">
              <div className="border-l-2 border-red-700 pl-3 sm:pl-4">
                <span className="font-display text-2xl font-black text-zinc-950 sm:text-3xl">10+</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                  Years
                </p>
              </div>
              <div className="border-l-2 border-red-700 pl-3 sm:pl-4">
                <span className="font-display text-2xl font-black text-zinc-950 sm:text-3xl">5</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                  Albums
                </p>
              </div>
              <div className="border-l-2 border-red-700 pl-3 sm:pl-4">
                <span className="font-display text-2xl font-black text-zinc-950 sm:text-3xl">200+</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                  Shows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. EVENTS LIST
          ======================================================== */}
      <section
        id="events-list"
        className="bg-[#6d071f] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            04 / Live Schedule
          </p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-zinc-50 sm:text-4xl lg:text-5xl">
            Upcoming Events
          </h2>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10 sm:mt-10">
            {(
              [
                ['10/11', 'FRI', 'After Hours / Vol. 04', 'The Mercury Lounge, Harare'],
                ['21/11', 'SAT', 'Redeemed Family Sessions: Live', 'The Echo Room, Chicago'],
                ['11/12', 'FRI', 'Night Drive Radio', 'Studio 03 Broadcast'],
                ['19/12', 'SAT', 'End of Year Showcase', 'Brooklyn Steel, NY'],
              ] as const
            ).map(([date, day, title, venue]) => (
              <a
                href="#contact"
                key={title}
                className="group block py-5 transition-colors hover:bg-white/5 sm:py-6"
              >
                {/* Mobile layout */}
                <div className="flex flex-col gap-1.5 sm:hidden">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-black tracking-tight text-zinc-100 group-hover:text-red-300">
                      {date}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {day}
                    </span>
                  </div>
                  <span className="text-base font-bold text-zinc-100 group-hover:text-red-300">
                    {title}
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    {venue}
                  </span>
                </div>

                {/* Desktop layout */}
                <div className="hidden grid-cols-[100px_100px_1fr_1fr] items-center gap-4 sm:grid">
                  <span className="font-display text-2xl font-black tracking-tight text-zinc-100 group-hover:text-red-300">
                    {date}
                  </span>
                  <span className="text-sm font-bold uppercase text-zinc-400 group-hover:text-zinc-200">
                    {day}
                  </span>
                  <span className="text-lg font-bold text-zinc-100 group-hover:text-red-300">
                    {title}
                  </span>
                  <span className="flex items-center justify-between text-sm font-bold text-zinc-400 group-hover:text-zinc-200">
                    {venue}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. VIDEOS SECTION
          ======================================================== */}
      <section id="videos" className="bg-[#fff] px-5 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
                03 / Visual Sessions
              </p>
              <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Featured Videos
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@theredeemedfamilyzimbabwe1141/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-red-700"
            >
              View Channel <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {(
              [
                {
                  id: 1,
                  title: 'Nditungamirei O Jehova featuring Josh Mtima',
                  youtubeId: 'CQaBf2El-PU',
                },
                {
                  id: 2,
                  title: 'Kugara Petyo Pemvura Yeupenyu featuring Shephard Dhlamini',
                  youtubeId: 'Of9j54zpAC0',
                },
                {
                  id: 3,
                  title: 'I surrender all (Hymn 25) featuring Nchimunya Kaale',
                  youtubeId: 'tvDA3Q0MB08',
                },
              ] as Video[]
            ).map((vid) => (
              <div
                key={vid.id}
                className="group border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-700/40 hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="size-full"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-display text-sm font-bold text-zinc-950 transition-colors group-hover:text-red-700 sm:text-base">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}