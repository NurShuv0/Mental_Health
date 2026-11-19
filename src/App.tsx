import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import CustomCursor from './components/CustomCursor'

// Exact Google Form URL specified in requirements
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/1lCIbQBafsbp6BQCP7SCUfolggg8_Bakrul0j1Js0Ts4/edit?ts=6af9a996'

export default function App(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  // Transition settings respecting prefers-reduced-motion
  const transition = {
    duration: shouldReduceMotion ? 0.1 : 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <div className="relative min-h-screen w-full bg-[#F5F2ED] text-[#242424] flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 overflow-x-hidden selection:bg-[#A99BCB]/30 selection:text-[#242424]">
      {/* Custom Fluid Cursor Follower (Desktop only, respects prefers-reduced-motion) */}
      <CustomCursor />

      {/* Subtle organic ambient gradient blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full bg-[#A99BCB]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 md:w-[36rem] md:h-[36rem] rounded-full bg-[#A9BBCB]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E5DFD7]/50 blur-2xl"
      />

      {/* Subtle paper grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grain opacity-60"
      />

      {/* Main Container - Full Hero Experience */}
      <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col my-auto">
        {/* Minimal Brand Identity / Awareness Eyebrow (Non-clickable, understated) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="mb-8 md:mb-12 flex items-center gap-2.5"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#A99BCB] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.22em] text-[#64605C] font-medium">
            Mental Stress Awareness Initiative
          </span>
        </motion.div>

        {/* Two-Column Grid: Text & CTA on Left, Editorial Photograph on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
          {/* Left Column: Headline, Supporting Text & The Primary CTA Button */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#242424]"
            >
              Sometimes, the Mind{' '}
              <span className="italic font-light text-[#242424] underline decoration-[#A99BCB]/60 decoration-[1.5px] underline-offset-8">
                Needs a Moment.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#5A5752] leading-relaxed font-light max-w-xl"
            >
              Behind every smile, there may be a story left unheard. Take a moment
              to share what you feel. Your voice matters.
            </motion.p>

            {/* The Sole Interactive CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
              className="mt-8 sm:mt-11 flex flex-col items-start gap-4"
            >
              <div className="relative group inline-block">
                {/* Gentle ambient breathing pulse glow around the button */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#A99BCB]/40 via-[#A9BBCB]/35 to-[#A99BCB]/40 blur-md opacity-40 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none animate-aura"
                />

                {/* The Unique CTA Button */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share Your Thoughts - Opens Google Form in a new tab"
                  className="relative flex items-center justify-between gap-6 sm:gap-8 pl-7 sm:pl-9 pr-3 sm:pr-3.5 py-3.5 sm:py-4 rounded-full bg-[#242424] text-[#F5F2ED] shadow-xl shadow-[#242424]/12 transition-all duration-300 ease-out hover:bg-[#1E1E22] hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#A99BCB]/30 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A99BCB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F2ED]"
                >
                  <span className="text-base sm:text-lg font-medium tracking-wide">
                    Share Your Thoughts
                  </span>

                  {/* Circular arrow badge element */}
                  <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-white transition-all duration-300 ease-out group-hover:bg-[#A99BCB] group-hover:text-[#242424] group-hover:translate-x-1.5 shadow-sm">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out" />
                  </span>
                </a>
              </div>

              {/* Quiet confidentiality reassurance note (strictly plain text, non-clickable) */}
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#78746F] pl-2 font-light">
                <Lock className="w-3.5 h-3.5 text-[#A99BCB]" aria-hidden="true" />
                <span>100% anonymous &amp; secure · No sign-in required</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photograph Representing Mental Stress */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.25, duration: 1 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Decorative subtle border frame offset */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl md:rounded-[2.25rem] border border-[#A9BBCB]/35 pointer-events-none"
              />

              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-3xl md:rounded-[2.25rem] shadow-2xl shadow-stone-900/15 bg-stone-300/30 aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="/images/mental-stress-editorial.jpg"
                  alt="A person sitting in quiet reflection, overwhelmed by emotional stress"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                  loading="eager"
                />

                {/* Subtle cinematic gradient overlay for mood and depth */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/15 pointer-events-none"
                />

                {/* Subtle emotional caption tag in the corner of image */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-stone-200/90 font-light backdrop-blur-md bg-stone-900/40 px-4 py-2.5 rounded-full border border-white/10 pointer-events-none">
                  <span className="tracking-wide">Safe space for reflection</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A99BCB]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
