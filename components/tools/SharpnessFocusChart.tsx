'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Maximize2 } from 'lucide-react'

const hLine1px: React.CSSProperties = {
  backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 1px, #fff 1px, #fff 2px)',
}
const vLine1px: React.CSSProperties = {
  backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 1px, #fff 1px, #fff 2px)',
}
const hLine2px: React.CSSProperties = {
  backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 2px, #fff 2px, #fff 4px)',
}
const vLine2px: React.CSSProperties = {
  backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 2px, #fff 2px, #fff 4px)',
}
const diag45: React.CSSProperties = {
  backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, #fff 1px, #fff 3px)',
}
const crosshatch: React.CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(to bottom, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 1px, transparent 1px, transparent 4px)',
    'repeating-linear-gradient(to right, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 1px, transparent 1px, transparent 4px)',
  ].join(', '),
  backgroundColor: '#fff',
}

const ZONES = [
  { id: 'h1', label: 'H Lines 1px', style: hLine1px },
  { id: 'v1', label: 'V Lines 1px', style: vLine1px },
  { id: 'h2', label: 'H Lines 2px', style: hLine2px },
  { id: 'v2', label: 'V Lines 2px', style: vLine2px },
  { id: 'd45', label: 'Diagonal 45°', style: diag45 },
  { id: 'cross', label: 'Cross-hatch', style: crosshatch },
]

export function SharpnessFocusChart() {
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
        e.preventDefault(); setActiveIdx(i => (i + 1) % ZONES.length); resetHintTimer()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault(); setActiveIdx(i => (i - 1 + ZONES.length) % ZONES.length); resetHintTimer()
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
      {/* In-page: 3x2 grid of pattern zones */}
      <div className="w-full rounded-xl overflow-hidden border border-border select-none">
        <div className="grid grid-cols-3">
          {ZONES.map((z, i) => (
            <div
              key={z.id}
              onClick={() => setActiveIdx(i)}
              className={`relative cursor-pointer border border-border transition-all ${activeIdx === i ? 'outline outline-2 outline-accent outline-offset-[-2px]' : ''}`}
              style={{ ...z.style, height: '80px' }}
            >
              <span
                className="absolute bottom-1.5 left-2 text-xs font-medium rounded px-1 py-0.5"
                style={{ backgroundColor: 'rgba(255,255,255,0.75)', color: '#333' }}
              >
                {z.label}
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
        <span className="text-xs text-fg-muted">Select a pattern and view fullscreen. Sharp lines indicate good resolution; soft or blurred lines indicate a sharpness issue.</span>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] select-none cursor-pointer"
          style={ZONES[activeIdx].style}
          onClick={() => { setActiveIdx(i => (i + 1) % ZONES.length); resetHintTimer() }}
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
              <p className="text-sm font-semibold text-white/85">{ZONES[activeIdx].label}</p>
              <p className="text-xs text-white/55">Click or Space to cycle · Arrow keys to navigate · Esc to exit</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
