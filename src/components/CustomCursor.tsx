import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor(): React.JSX.Element | null {
  const [isEnabled, setIsEnabled] = useState(false)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop/laptop) and without reduced motion preference
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!finePointer || prefersReducedMotion) {
      return
    }

    setIsEnabled(true)
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const dotEl = cursorDotRef.current
    const ringEl = cursorRingRef.current
    if (!dotEl || !ringEl) return

    // Position trackers
    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let isVisible = false
    let isHoveringCta = false
    let isHoveringImage = false
    let isHoveringInteractive = false

    let animationFrameId: number

    // Easing factor for the trailing ring (fluid lag)
    const LERP_FACTOR = 0.16

    const updateCursorMode = () => {
      if (isHoveringCta) {
        ringEl.setAttribute('data-mode', 'cta')
        dotEl.setAttribute('data-mode', 'cta')
      } else if (isHoveringImage) {
        ringEl.setAttribute('data-mode', 'image')
        dotEl.setAttribute('data-mode', 'image')
      } else if (isHoveringInteractive) {
        ringEl.setAttribute('data-mode', 'interactive')
        dotEl.setAttribute('data-mode', 'interactive')
      } else {
        ringEl.setAttribute('data-mode', 'default')
        dotEl.setAttribute('data-mode', 'default')
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isVisible) {
        isVisible = true
        ringX = mouseX
        ringY = mouseY
        dotEl.style.opacity = '1'
        ringEl.style.opacity = '1'
      }

      // Center dot follows directly with immediate translation
      dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // CTA button hover
      if (target.closest('a[href*="docs.google.com"]') || target.closest('.group')) {
        isHoveringCta = true
        isHoveringImage = false
        isHoveringInteractive = false
      }
      // Mental stress image hover
      else if (target.closest('img') || target.closest('.aspect-\\[3\\/4\\]') || target.closest('.aspect-\\[4\\/5\\]')) {
        isHoveringCta = false
        isHoveringImage = true
        isHoveringInteractive = false
      }
      // Other interactive elements
      else if (target.closest('button, a, [role="button"]')) {
        isHoveringCta = false
        isHoveringImage = false
        isHoveringInteractive = true
      } else {
        isHoveringCta = false
        isHoveringImage = false
        isHoveringInteractive = false
      }

      updateCursorMode()
    }

    const onMouseLeaveWindow = () => {
      isVisible = false
      dotEl.style.opacity = '0'
      ringEl.style.opacity = '0'
    }

    const onMouseEnterWindow = () => {
      isVisible = true
      dotEl.style.opacity = '1'
      ringEl.style.opacity = '1'
    }

    // Animation loop using requestAnimationFrame for 60/120fps performance
    const renderLoop = () => {
      // Lerp ring towards mouse position
      ringX += (mouseX - ringX) * LERP_FACTOR
      ringY += (mouseY - ringY) * LERP_FACTOR

      ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      animationFrameId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onMouseEnterWindow)

    animationFrameId = requestAnimationFrame(renderLoop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.documentElement.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', onMouseEnterWindow)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Outer Smooth Trailing Ring with Lavender Glow */}
      <div
        ref={cursorRingRef}
        data-mode="default"
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-[width,height,background-color,border-color,box-shadow,opacity] duration-300 ease-out will-change-transform data-[mode=default]:w-8 data-[mode=default]:h-8 data-[mode=default]:border data-[mode=default]:border-[#A99BCB]/60 data-[mode=default]:bg-[#A99BCB]/10 data-[mode=default]:shadow-[0_0_15px_rgba(169,155,203,0.3)] data-[mode=cta]:w-14 data-[mode=cta]:h-14 data-[mode=cta]:border-2 data-[mode=cta]:border-[#A99BCB] data-[mode=cta]:bg-[#A99BCB]/20 data-[mode=cta]:shadow-[0_0_24px_rgba(169,155,203,0.6)] data-[mode=image]:w-11 data-[mode=image]:h-11 data-[mode=image]:border data-[mode=image]:border-[#F5F2ED]/80 data-[mode=image]:bg-[#A99BCB]/25 data-[mode=image]:shadow-[0_0_20px_rgba(169,155,203,0.5)] data-[mode=interactive]:w-10 data-[mode=interactive]:h-10 data-[mode=interactive]:border data-[mode=interactive]:border-[#A9BBCB] data-[mode=interactive]:bg-[#A9BBCB]/15 data-[mode=interactive]:shadow-[0_0_16px_rgba(169,187,203,0.4)]"
      />

      {/* Inner Pinpoint Dot */}
      <div
        ref={cursorDotRef}
        data-mode="default"
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-[width,height,background-color,opacity] duration-200 ease-out will-change-transform data-[mode=default]:w-1.5 data-[mode=default]:h-1.5 data-[mode=default]:bg-[#A99BCB] data-[mode=cta]:w-2 data-[mode=cta]:h-2 data-[mode=cta]:bg-[#F5F2ED] data-[mode=image]:w-1.5 data-[mode=image]:h-1.5 data-[mode=image]:bg-[#F5F2ED] data-[mode=interactive]:w-2 data-[mode=interactive]:h-2 data-[mode=interactive]:bg-[#A9BBCB]"
      />
    </div>
  )
}
