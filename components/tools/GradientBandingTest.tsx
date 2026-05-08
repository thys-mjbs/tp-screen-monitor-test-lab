'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Maximize2 } from 'lucide-react'

const GRADIENTS = [
  { label: 'Black to White', css: 'linear-gradient(to right, #000000, #FFFFFF)' },
  { label: 'White to Black', css: 'linear-gradient(to right, #FFFFFF, #000000)' },
  { label: 'Black to Red', css: 'linear-gradient(to right, #000000, #FF0000)' },
  { label: 'Black to Green', css: 'linear-gradient(to right, #000000, #00FF00)' },
  { label: 'Black to Blue', css: 'linear-gradient(to right, #000000, #0000FF)' },
]

export function GradientBandingTest() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const resetHintTimer = useCallback(() => {
    setShowHint(true)
    if (hintTimer.current) clearTimeout(hintTimer.current)
    hintTimer.current = setTimeout(() => setShowHint(false), 2500)
  }, [])

  useEffect(() => {
    const onChange = () => {
      const fs = !!document.fullscreenElement
      setIsFullscreen(fs)
      if (fs) resetHintTimer()
      else {
        setShowHint(true)
        if (hintTimer.current) clearTimeout(hintTimer.current)
      }
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [resetHintTimer])

  useEffect(() => {
    if (!isFullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setActiveIdx(i => (i + 1) % GRADIENTS.length)
        resetHintTimer()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveIdx(i => (i - 1 + GRADIENTS.length) % GRADIENTS.length)
        resetHintTimer()
      }
    }
    const onMove = () => resetHintTimer()
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousemove', onMove)
    }
  }, [isFullscreen, resetHintTimer])

  useEffect(() => () => { if (hintTimer.current) clearTimeout(hintTimer.current) }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full rounded-xl overflow-hidden select-none">
        {GRADIENTS.map((g, i) => (
          <div
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`relative w-full cursor-pointer transition-all ${activeIdx === i ? 'outline outline-2 outline-accent outline-offset-[-2px]' : ''}`}
            style={{ background: g.css, height: '52px' }}
          >
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium rounded px-1.5 py-0.5"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)', color: 'rgba(255,255,255,0.9)' }}
            >
              {g.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> View Fullscreen
        </button>
        <span className="text-xs text-fg-muted">Select a gradient, then view fullscreen. Look for visible steps rather than a smooth blend.</span>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] select-none cursor-pointer"
          style={{ background: GRADIENTS[activeIdx].css }}
          onClick={() => { setActiveIdx(i => (i + 1) % GRADIENTS.length); resetHintTimer() }}
          onMouseMove={resetHintTimer}
        >
          <div
            className="absolute inset-x-0 bottom-0 pb-8 flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none"
            style={{ opacity: showHint ? 1 : 0 }}
          >
            <div
              className="flex flex-col items-center gap-1.5 rounded-xl px-5 py-3"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <p className="text-sm font-semibold text-white/80">{GRADIENTS[activeIdx].label}</p>
              <p className="text-xs text-white/55">Click or Space to cycle · Arrow keys to navigate · Esc to exit</p>
              <div className="flex gap-2 mt-0.5">
                {GRADIENTS.map((_, i) => (
                  <span
                    key={i}
                    className="block w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.4)',
                      outline: i === activeIdx ? '2px solid rgba(255,255,255,0.8)' : 'none',
                      outlineOffset: '1px',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
