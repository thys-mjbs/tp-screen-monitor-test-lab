'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Square, RotateCcw, Maximize2, TriangleAlert } from 'lucide-react'

const FLASH_COLORS = ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000', '#FFFF00', '#00FFFF', '#FF00FF']

const SPEEDS = [
  { label: 'Slow', ms: 200 },
  { label: 'Normal', ms: 100 },
  { label: 'Fast', ms: 50 },
  { label: 'Rapid', ms: 25 },
]

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export function StuckPixelFixer() {
  const [running, setRunning] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const [speedIndex, setSpeedIndex] = useState(1)
  const [elapsed, setElapsed] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const flashRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      flashRef.current = setInterval(
        () => setColorIndex(i => (i + 1) % FLASH_COLORS.length),
        SPEEDS[speedIndex].ms
      )
    } else {
      if (flashRef.current) clearInterval(flashRef.current)
    }
    return () => { if (flashRef.current) clearInterval(flashRef.current) }
  }, [running, speedIndex])

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => setElapsed(s => s + 1), 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [running])

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const reset = () => { setRunning(false); setElapsed(0); setColorIndex(0) }

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  const currentColor = running ? FLASH_COLORS[colorIndex] : '#94a3b8'

  return (
    <>
      {/* Photosensitivity warning */}
      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
        <TriangleAlert size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-xs leading-relaxed">
          <span className="font-semibold">Flashing imagery warning.</span> This tool displays rapidly cycling colours at high frequency. Do not use it if you have photosensitive epilepsy, are sensitive to flashing or flickering light, or have been advised to avoid such content. If you experience any discomfort, stop immediately by pressing Esc or the Stop button.
        </p>
      </div>

      {/* Flash panel */}
      <div
        className="relative w-full rounded-xl overflow-hidden transition-colors select-none"
        style={{ backgroundColor: currentColor, minHeight: '240px' }}
      >
        {!running && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-medium text-sm opacity-70">Press Start to begin flashing</p>
          </div>
        )}
        {running && (
          <div className="absolute top-3 left-3 text-white text-xs font-mono opacity-60">
            {formatTime(elapsed)}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => setRunning(r => !r)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors min-w-[100px] justify-center"
        >
          {running ? <><Square size={14} /> Stop</> : <><Play size={14} /> Start</>}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <RotateCcw size={14} /> Reset
        </button>
        <button
          onClick={() => { setRunning(true); enterFullscreen() }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> Fullscreen
        </button>
        {running && (
          <span className="text-sm text-fg-muted font-mono ml-1">
            Running: {formatTime(elapsed)}
          </span>
        )}
      </div>

      {/* Speed selector */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-fg-muted font-medium">Speed:</span>
        <div className="flex gap-1.5">
          {SPEEDS.map((speed, i) => (
            <button
              key={i}
              onClick={() => setSpeedIndex(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                i === speedIndex
                  ? 'bg-accent text-white'
                  : 'bg-elevated border border-border text-fg-muted hover:text-fg'
              }`}
            >
              {speed.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-fg-muted leading-relaxed">
        Run for 20 to 30 minutes for best results. Results are not guaranteed. This tool cannot fix dead pixels.
      </p>

      {/* Fullscreen overlay */}
      {isFullscreen && running && (
        <div
          className="fixed inset-0 z-[9999] select-none transition-colors"
          style={{ backgroundColor: currentColor }}
        >
          <div className="absolute top-4 left-4 text-white text-xs font-mono opacity-50">
            {formatTime(elapsed)} · Press Esc to exit
          </div>
        </div>
      )}
    </>
  )
}
