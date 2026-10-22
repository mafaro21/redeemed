'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Menu,
  X,
  Music,
  Tv,
  Disc,
  Radio,
  Sliders,
  Send,
  ExternalLink,
} from 'lucide-react';
import { Petit_Formal_Script } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Video {
  id: number;
  title: string;
  duration: string;
  artist: string;
  thumb: string;
}

const cookie = Petit_Formal_Script({
  weight: '400',
  subsets: ['latin'],
})

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(38);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);



  // Dynamic Scroll Header Effect
  useEffect(() => {
    const handleScroll = (): void => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen bg-[#fcfbf9] font-sans text-zinc-900 antialiased selection:bg-red-700 selection:text-white">
      <Navbar />

      {/* 
        ========================================================
        2. HERO SECTION
        ========================================================
      */}
      <section
        id="hero"
        className="relative flex min-h-[85vh] items-end overflow-hidden bg-zinc-950 px-6 pb-20 pt-36 text-white lg:min-h-screen lg:px-10 lg:pb-20"
      >
        {/* Stage Atmosphere Lighting */}
        <div className="absolute inset-0 z-0">
          <video
            src="/vid.webm"
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover object-center opacity-65 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-slate-900/20 to-transparent" />
          {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent" /> */}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* <div className="inline-flex items-center gap-2.5 border border-red-700/40 bg-red-950/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400 backdrop-blur-sm">
            <span className="size-2 animate-pulse rounded-full bg-red-700" /> Independent Audio
            Collective
          </div> */}

          <h1 className="mt-6 max-w-5xl font-display text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
            Redeemed by <br />
            <span className=" text-red-700 font-bold" ><span className={cookie.className}>harmony.</span></span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-relaxed text-zinc-300">
              Preserving the rich cultural heritage of Zimbabwean a cappella through soulful worship and rhythmic precision. Experience the power of the human voice in its purest form.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-zinc-500 lg:flex">
          <span className="h-px w-12 bg-zinc-700" /> Scroll
        </div>
      </section>

      {/* 
        ========================================================
        3. ARTISTIC MUSICAL MOTIF BANNER (Flowing Vector Art)
        ========================================================
      */}
      <section
        className="relative w-full overflow-hidden border-y border-zinc-200 bg-[#f9f8f6] "
        aria-label="Modular Musical Art Pattern"
      >
        <div className="w-full overflow-hidden">
          <svg
            viewBox="0 0 1500 130"
            className="h-20 w-full min-w-[1000px] sm:h-24 md:h-28 lg:h-32"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* TILE 1: Vinyl Groove Arcs */}
            <g transform="translate(0, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <path d="M 0 120 A 120 120 0 0 1 120 0 L 120 120 Z" fill="#dc2626" />
              <path d="M 0 120 A 85 85 0 0 1 85 0" fill="none" stroke="#ffffff" strokeWidth="8" />
              <path d="M 0 120 A 50 50 0 0 1 50 0" fill="none" stroke="#0f0f11" strokeWidth="12" />
              <circle cx="0" cy="120" r="18" fill="#ffffff" />
            </g>

            {/* TILE 2: Piano Keys Modular Abstract */}
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

            {/* TILE 3: Diamond Note Head / Staff Rhombus */}
            <g transform="translate(240, 0)">
              <rect width="120" height="120" fill="#dc2626" />
              <polygon points="60,15 105,60 60,105 15,60" fill="#0f0f11" />
              <polygon points="60,35 85,60 60,85 35,60" fill="#ffffff" />
              <circle cx="60" cy="60" r="8" fill="#dc2626" />
            </g>

            {/* TILE 4: Equalizer Block Array */}
            <g transform="translate(360, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <rect x="12" y="50" width="14" height="70" fill="#dc2626" />
              <rect x="32" y="20" width="14" height="100" fill="#ffffff" />
              <rect x="52" y="70" width="14" height="50" fill="#71717a" />
              <rect x="72" y="10" width="14" height="110" fill="#dc2626" />
              <rect x="92" y="35" width="14" height="85" fill="#991b1b" />
            </g>

            {/* TILE 5: Sliced Circle / Speaker Cone */}
            <g transform="translate(480, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <path d="M 0 0 L 120 120 L 0 120 Z" fill="#991b1b" />
              <circle cx="60" cy="60" r="35" fill="#0f0f11" />
              <circle cx="60" cy="60" r="20" fill="#dc2626" />
              <circle cx="60" cy="60" r="8" fill="#ffffff" />
            </g>

            {/* TILE 6: Quarter Note Abstract Angle */}
            <g transform="translate(600, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <polygon points="0,0 120,120 0,120" fill="#dc2626" />
              <circle cx="40" cy="80" r="18" fill="#ffffff" />
              <rect x="52" y="20" width="8" height="60" fill="#ffffff" />
              <circle cx="95" cy="30" r="5" fill="#ffffff" />
              <circle cx="80" cy="45" r="5" fill="#ffffff" />
              <circle cx="65" cy="60" r="5" fill="#ffffff" />
            </g>

            {/* TILE 7: Staff Lines & Treble Curve Arc */}
            <g transform="translate(720, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <line x1="0" y1="24" x2="120" y2="24" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="48" x2="120" y2="48" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="72" x2="120" y2="72" stroke="#0f0f11" strokeWidth="4" />
              <line x1="0" y1="96" x2="120" y2="96" stroke="#0f0f11" strokeWidth="4" />
              <path d="M 0 120 A 60 60 0 0 1 120 60 L 120 120 Z" fill="#dc2626" />
              <circle cx="60" cy="60" r="12" fill="#0f0f11" />
            </g>

            {/* TILE 8: Concentric Vinyl Record Center */}
            <g transform="translate(840, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <circle cx="60" cy="60" r="52" fill="#dc2626" />
              <circle cx="60" cy="60" r="36" fill="#991b1b" />
              <circle cx="60" cy="60" r="22" fill="#ffffff" />
              <circle cx="60" cy="60" r="8" fill="#0f0f11" />
            </g>

            {/* TILE 9: Diamond Note Head (Inverted Colors) */}
            <g transform="translate(960, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <polygon points="60,15 105,60 60,105 15,60" fill="#dc2626" />
              <polygon points="60,35 85,60 60,85 35,60" fill="#0f0f11" />
              <circle cx="60" cy="60" r="8" fill="#ffffff" />
            </g>

            {/* TILE 10: Slanted Beamed Notes Geometric Block */}
            <g transform="translate(1080, 0)">
              <rect width="120" height="120" fill="#0f0f11" />
              <polygon points="0,120 120,0 120,120" fill="#dc2626" />
              <circle cx="35" cy="85" r="14" fill="#ffffff" />
              <circle cx="85" cy="60" r="14" fill="#ffffff" />
              <rect x="43" y="25" width="6" height="60" fill="#ffffff" />
              <rect x="93" y="0" width="6" height="60" fill="#ffffff" />
              <polygon points="43,25 99,0 99,12 43,37" fill="#ffffff" />
            </g>

            {/* TILE 11: Speaker Cone / Half Arc Wave */}
            <g transform="translate(1200, 0)">
              <rect width="120" height="120" fill="#ffffff" />
              <path d="M 0 0 A 120 120 0 0 1 120 120 L 0 120 Z" fill="#0f0f11" />
              <path d="M 0 0 A 80 80 0 0 1 80 120 L 0 120 Z" fill="#dc2626" />
              <circle cx="30" cy="90" r="12" fill="#ffffff" />
            </g>

            {/* TILE 12: Vinyl Corner Arc */}
            <g transform="translate(1320, 0)">
              <rect width="120" height="120" fill="#dc2626" />
              <path d="M 120 0 A 120 120 0 0 1 0 120 L 120 120 Z" fill="#0f0f11" />
              <path d="M 120 0 A 85 85 0 0 1 35 120" fill="none" stroke="#ffffff" strokeWidth="8" />
              <circle cx="120" cy="0" r="20" fill="#ffffff" />
            </g>

            {/* TILE 13: Equalizer Inverted */}
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

      {/* 
  ========================================================
  4. DUAL SHOWCASE SECTION: NEXT EVENT, LATEST SONG & BOOKING
  ========================================================
*/}
      <section id="dual-feature" className="bg-[#F5F5F5] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
              01 / Highlights & Releases
            </p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
              Now Broadcasting
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 ">
            {/* LEFT CARD: Next Concert / Event (unchanged) */}
            <div className="group relative flex flex-col justify-between bg-white hover:bg-red-200 border border-white hover:border-red-800 hover:rounded-none p-8 hover:shadow-xl shadow-black transition-all duration-300 sm:p-10 rounded-sm ">
              {/* Event Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Next Live Show
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-700">
                  Oct 24, 2026
                </span>
              </div>

              {/* Main Event Content */}
              <div className="my-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700 ">
                  Harare Residency
                </p>
                <h3 className="mt-2 font-display text-3xl font-black uppercase text-zinc-950 sm:text-4xl">
                  After Hours / Midnight Soundclash
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                  Featuring live sets from Redeemed Family Sound resident producers and special guest synth
                  selectors. An intimate late-night acoustic experience.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-700">
                  <div className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5">
                    <MapPin className="size-3.5 text-red-700" /> The Mercury Lounge, NYC
                  </div>
                  <div className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5">
                    <Clock className="size-3.5 text-red-700" /> 10:00 PM EST
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-600">
                  Remaining Passes: <strong className="text-zinc-900">24</strong>
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-zinc-950 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-700"
                >
                  Reserve Spot <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Music Player (shorter) + Booking Card */}
            <div className="grid gap-8">
              {/* RIGHT CARD (TOP): Interactive Music Track Player — shorter, black bg */}
              <div className="flex flex-col justify-between bg-zinc-950 px-2 text-white shadow-sm transition-all duration-300 sm:px-2 rounded-md">

                <iframe className='my-auto' data-testid="embed-iframe" src="https://open.spotify.com/embed/track/6ouYHy6KwFMrPKyFbVGz3X?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

              </div>

              {/* RIGHT CARD (BOTTOM): Book the Group — red bg */}
              <div className="flex flex-col justify-between bg-[#6d071f] p-6 text-white shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8 rounded-sm">
                <div>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                    Book the Group
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-red-100">
                    Bring Redeemed Family Sound to your venue, festival, or private event. Full live band,
                    DJ sets, and custom sound installations available.
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-red-200">
                    Enquiries: <strong className="text-white">theredeemedfamily@gmail.com</strong>
                  </span>
                  <a
                    href="mailto:hello@Redeemed Familysnd.com"
                    className="inline-flex items-center uppercase bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-zinc-950 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    Get in Touch <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        5. MINI "ABOUT" SECTION (Light Mode Editorial Layout)
        ========================================================
      */}
      <section
        id="about"
        className="border-t border-zinc-200/80 bg-red-100 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
          {/* Section Kicker */}
          <div className="lg:col-span-6">
            <img src={'/redeemed.jpg'} className='rounded-md ' />
          </div>

          {/* Narrative Content */}
          <div className="space-y-6 lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
              02 / Our Philosophy
            </p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
              The soul of the nation
            </h2>
            <div className="mt-6 h-1 w-16 bg-red-700" />
            <p className="text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl">
              Born from the spirit of Harare and rooted in the deep traditions of Christian a cappella music, The Redeemed Family Zimbabwe is more than a musical group it is a brotherhood dedicated to vocal excellence.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              We believe that the human voice is the most sophisticated instrument ever created. Without the aid of electronics or backing tracks, we weave intricate layers of rhythm, bass, and harmony to create a sound that resonates with the soul.
            </p>

            {/* Key Stat Counters */}
            <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-3">
              <div className="border-l-2 border-red-700 pl-4">
                <span className="font-display text-3xl font-black text-zinc-950">10+</span>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Years
                </p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <span className="font-display text-3xl font-black text-zinc-950">5</span>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Albums
                </p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <span className="font-display text-3xl font-black text-zinc-950">200+</span>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Shows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        6. TOUR DATES & EVENTS LIST
        ========================================================
      */}
      <section
        id="events-list"
        className=" bg-[#6d071f] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            04 / Live Schedule
          </p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-zinc-50 sm:text-5xl">
            Upcoming Events
          </h2>

          <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
            {(
              [
                ['10/11', 'FRI', 'After Hours / Vol. 04', 'The Mercury Lounge, NYC'],
                ['21/11', 'SAT', 'Redeemed Family Sessions: Live', 'The Echo Room, Chicago'],
                ['11/12', 'FRI', 'Night Drive Radio', 'Studio 03 Broadcast'],
                ['19/12', 'SAT', 'End of Year Showcase', 'Brooklyn Steel, NY'],
              ] as const
            ).map(([date, day, title, venue]) => (
              <a
                href="#contact"
                key={title}
                className="group grid gap-2 sm:gap-7 py-8 transition-colors hover:bg-zinc-50 grid-cols-[50px_40px_1fr_1fr] md:grid-cols-[100px_100px_1fr_1fr] items-center px-2"
              >
                <span className="font-display sm:text-2xl text-md font-black tracking-tight text-zinc-100 group-hover:text-red-900">
                  {date}
                </span>
                <span className="text-sm font-bold uppercase  text-zinc-400 group-hover:text-zinc-800">
                  {day}
                </span>
                <span className="sm:text-xl text-md font-bold text-zinc-100 group-hover:text-red-900">{title}</span>
                <span className="flex items-center justify-between text-md font-bold text-zinc-400 group-hover:text-zinc-800">
                  {venue}
                  {/* <ArrowUpRight className="size-4 text-red-700 transition-transform group-hover:translate-x-1" /> */}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section id="videos" className=" bg-[#fff] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
                03 / Visual Sessions
              </p>
              <h2 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl">
                Featured Videos
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@theredeemedfamilyzimbabwe1141/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-red-700"
            >
              View Channel <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* 3-Column Video Card Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {(
              [
                {
                  id: 1,
                  title: 'Nditungamirei O Jehova featuring Josh Mtima',
                  duration: '14:20',
                  artist: 'The Midnight Trio',
                  youtubeId: 'CQaBf2El-PU',
                },
                {
                  id: 2,
                  title: 'Kugara Petyo Pemvura Yeupenyu featuring Shephard Dhlamini',
                  duration: '08:45',
                  artist: 'Marcus Vance',
                  youtubeId: 'Of9j54zpAC0',
                },
                {
                  id: 3,
                  title: 'I surrender all (Hymn 25) featuring Nchimunya Kaale',
                  duration: '11:02',
                  artist: 'Evelyn & The Frequencies',
                  youtubeId: 'tvDA3Q0MB08',
                },
              ] as Video[]
            ).map((vid) => (
              <div
                key={vid.id}
                className="group border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-700/40 hover:shadow-lg"
              >
                {/* YouTube Embed */}
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

                {/* Card Information */}
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
                      {/* {vid.artist} */}
                    </p>
                    {/* <span className="text-[10px] font-bold text-zinc-400">{vid.duration}</span> */}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-zinc-950 transition-colors group-hover:text-red-700">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PREVIEW MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl border border-zinc-800 bg-zinc-950 p-4 text-white">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-red-500"
            >
              <X className="size-4" /> Close
            </button>
            <div className="aspect-video w-full bg-zinc-900 flex items-center justify-center">
              <div className="text-center p-6">
                <Play className="size-12 text-red-700 mx-auto mb-3" />
                <p className="text-white font-bold text-lg">{selectedVideo.title}</p>
                <p className="text-xs text-zinc-400 mt-1">Video Modal Player Preview</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}