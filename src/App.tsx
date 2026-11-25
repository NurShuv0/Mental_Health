import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import CustomCursor from './components/CustomCursor'

// Exact Google Form URL specified in requirements
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/1lCIbQBafsbp6BQCP7SCUfolggg8_Bakrul0j1Js0Ts4/edit?ts=6af9a996'

export default function App(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const transition = {
    duration: shouldReduceMotion ? 0.1 : 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <div className="
      relative min-h-screen w-full overflow-x-hidden
      bg-[#F5F2ED] text-[#242424]
      flex flex-col
      selection:bg-[#A99BCB]/30 selection:text-[#242424]
    ">
      {/* Custom Fluid Cursor Follower (desktop / fine pointer only) */}
      <CustomCursor />

      {/* ── Ambient gradient blooms ─────────────────────────── */}
      <div aria-hidden="true" className="
        pointer-events-none absolute -top-40 -left-40
        w-72 h-72 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem]
        rounded-full bg-[#A99BCB]/15 blur-3xl
      " />
      <div aria-hidden="true" className="
        pointer-events-none absolute -bottom-40 -right-40
        w-72 h-72 sm:w-96 sm:h-96 md:w-[36rem] md:h-[36rem]
        rounded-full bg-[#A9BBCB]/15 blur-3xl
      " />
      <div aria-hidden="true" className="
        pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2
        w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#E5DFD7]/50 blur-2xl
      " />

      {/* Paper grain texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grain opacity-60" />

      {/* ── Main layout wrapper ─────────────────────────────── */}
      {/*
        Breakpoint strategy:
          xs  (< 480px)  → single col, compact, image below text
          sm  (480-767)  → single col, slightly more space
          md  (768-1023) → single col still, larger type, image more prominent
          lg  (1024-1279)→ two columns 7/5
          xl  (1280-1535)→ two columns, expanded type
          2xl (1536+)    → two columns, capped at 90rem to prevent over-stretch
      */}
      <main className="
        relative z-10 my-auto w-full
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24
        py-10 sm:py-12 md:py-16 lg:py-14 xl:py-20
        max-w-none 2xl:max-w-[90rem] 2xl:mx-auto
        flex flex-col
      ">
        {/* ── Eyebrow label ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-center gap-2.5"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#A99BCB] animate-pulse flex-shrink-0" />
          <span className="text-[10px] xs:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#64605C] font-medium">
            Mental Stress Awareness Initiative
          </span>
        </motion.div>

        {/* ── Hero grid ──────────────────────────────────────── */}
        <div className="
          grid grid-cols-1 lg:grid-cols-12
          gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20
          items-center
        ">

          {/* ── Left column: text + CTA ────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center w-full">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="
                font-serif font-normal leading-[1.07] tracking-[-0.025em] text-[#242424]
                text-[1.75rem]
                min-[380px]:text-[2rem]
                sm:text-4xl
                md:text-5xl
                lg:text-[3.5rem]
                xl:text-[4.25rem]
                2xl:text-[5rem]
              "
            >
              Sometimes, the Mind{' '}
              <span className="italic font-light text-[#242424] underline decoration-[#A99BCB]/60 decoration-[1.5px] underline-offset-8">
                Needs a Moment.
              </span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
              className="
                mt-4 sm:mt-5 md:mt-6 xl:mt-8
                text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl
                text-[#5A5752] leading-relaxed font-light
                max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl 2xl:max-w-2xl
              "
            >
              Behind every smile, there may be a story left unheard. Take a moment
              to share what you feel. Your voice matters.
            </motion.p>

            {/* CTA + reassurance */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
              className="mt-7 sm:mt-9 md:mt-10 xl:mt-12 flex flex-col gap-3 sm:gap-4"
            >
              {/* Button wrapper — full-width on xs/sm, auto on md+ */}
              <div className="relative group w-full sm:w-auto sm:inline-block">
                {/* Aura glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-1 rounded-full pointer-events-none animate-aura
                    bg-gradient-to-r from-[#A99BCB]/40 via-[#A9BBCB]/35 to-[#A99BCB]/40
                    blur-md opacity-40 group-hover:opacity-85 transition-opacity duration-700
                  "
                />

                {/* CTA anchor */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share Your Thoughts – Opens Google Form in a new tab"
                  className="
                    relative flex items-center justify-between
                    w-full sm:w-auto
                    pl-6 sm:pl-7 md:pl-8 xl:pl-9
                    pr-2.5 sm:pr-3 xl:pr-3.5
                    py-3.5 sm:py-4 xl:py-4.5
                    rounded-full
                    bg-[#242424] text-[#F5F2ED]
                    shadow-xl shadow-[#242424]/12
                    transition-all duration-300 ease-out
                    hover:bg-[#1E1E22] hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#A99BCB]/30
                    active:scale-[0.985]
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#A99BCB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F2ED]
                  "
                >
                  <span className="text-sm sm:text-base xl:text-lg font-medium tracking-wide">
                    Share Your Thoughts
                  </span>

                  {/* Arrow badge */}
                  <span className="
                    ml-5 sm:ml-6 md:ml-7 xl:ml-8
                    flex items-center justify-center
                    w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11
                    rounded-full bg-white/10 text-white
                    transition-all duration-300 ease-out
                    group-hover:bg-[#A99BCB] group-hover:text-[#242424]
                    group-hover:translate-x-1.5 shadow-sm flex-shrink-0
                  ">
                    <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 ease-out" />
                  </span>
                </a>
              </div>

              {/* Reassurance note */}
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#78746F] pl-1 font-light">
                <Lock className="w-3.5 h-3.5 text-[#A99BCB] flex-shrink-0" aria-hidden="true" />
                <span>100% anonymous &amp; secure · No sign-in required</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right column: editorial photograph ─────────── */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.25, duration: 1 }}
              className="
                relative w-full
                max-w-[22rem] sm:max-w-sm md:max-w-md
                lg:max-w-none
              "
            >
              {/* Decorative offset border */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3
                  rounded-3xl md:rounded-[2.25rem]
                  border border-[#A9BBCB]/35 pointer-events-none
                "
              />

              {/* Image frame */}
              <div className="
                relative overflow-hidden
                rounded-3xl md:rounded-[2.25rem]
                shadow-2xl shadow-stone-900/15 bg-stone-300/30
                aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[3/4] xl:aspect-[4/5]
              ">
                <img
                  src="/images/mental-stress-editorial.jpg"
                  alt="A person sitting in quiet reflection, overwhelmed by emotional stress"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                  loading="eager"
                />

                {/* Cinematic overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/15 pointer-events-none"
                />

                {/* Caption pill */}
                <div className="
                  absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5
                  flex items-center justify-between
                  text-[10px] sm:text-xs text-stone-200/90 font-light
                  backdrop-blur-md bg-stone-900/40
                  px-3 sm:px-4 py-2 sm:py-2.5
                  rounded-full border border-white/10 pointer-events-none
                ">
                  <span className="tracking-wide">Safe space for reflection</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A99BCB] flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
