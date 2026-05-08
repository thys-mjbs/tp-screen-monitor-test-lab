'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Maximize2 } from 'lucide-react'

const PATTERNS = [
  {
    id: 'v1', label: 'Vertical 1px',
    style: { backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 1px, #fff 1px, #fff 2px)' } as React.CSSProperties,
  },
  {
    id: 'v2', label: 'Vertical 2px',
    style: { backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 2px, #fff 2px, #fff 4px)' } as React.CSSProperties,
  },
  {
    id: 'v4', label: 'Vertical 4px',
    style: { backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 4px, #fff 4px, #fff 8px)' } as React.CSSProperties,
  },
  {
    id: 'h1', label: 'Horizontal 1px',
    style: { backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 1px, #fff 1px, #fff 2px)' } as React.CSSProperties,
  },
  {
    id: 'h2', label: 'Horizontal 2px',
    style: { backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 2px, #fff 2px, #fff 4px)' } as React.CSSProperties,
  },
  {
    id: 'd1', label: 'Diagonal 45° 1px',
    style: { backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, #fff 1px, #fff 3px)' } as React.CSSProperties,
  },
]

export function MoirePatternTest() {
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
        e.preventDefault(); setActiveIdx(i => (i + 1) % PATTERNS.length); resetHintTimer()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault(); setActiveIdx(i => (i - 1 + PATTERNS.length) % PATTERNS.length); resetHintTimer()
      }
    }
    const onMove = () => resetHintTimer()
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('mousemove', onMove) }
  }, [isFullscreen, resetHintTimer])

  useEffect(() => () => { if (hintTimer.current) clearTimeout(hintTimer.current) }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  return (
    <>
      <div className="w-full rounded-xl overflow-hidden border border-border select-none">
        <div className="grid grid-cols-3">
          {PATTERNS.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActiveIdx(i)}
              className={`relative cursor-pointer border border-border transition-all ${activeIdx === i ? 'outline outline-2 outline-accent outline-offset-[-2px]' : ''}`}
              style={{ ...p.style, height: '80px' }}
            >
              <span
                className="absolute bottom-1.5 left-2 text-xs font-medium rounded px-1 py-0.5"
                style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: '#333' }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> View Fullscreen
        </button>
        <span className="text-xs text-fg-muted">Select a pattern and view fullscreen. Moire appears as wavy interference bands in fine-line patterns.</span>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] select-none cursor-pointer"
          style={PATTERNS[activeIdx].style}
          onClick={() => { setActiveIdx(i => (i + 1) % PATTERNS.length); resetHintTimer() }}
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
              <p className="text-sm font-semibold text-white/85">{PATTERNS[activeIdx].label}</p>
              <p className="text-xs text-white/55">Click or Space to cycle · Arrow keys to navigate · Esc to exit</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
