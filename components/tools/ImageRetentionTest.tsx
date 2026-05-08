'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Square, RotateCcw, Maximize2 } from 'lucide-react'

const DURATIONS = [
  { label: '1 min', seconds: 60 },
  { label: '2 min', seconds: 120 },
  { label: '5 min', seconds: 300 },
]

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

// Large 64px B/W checkerboard via CSS
const checkerStyle: React.CSSProperties = {
  backgroundImage: [
    'linear-gradient(45deg, #000 25%, transparent 25%)',
    'linear-gradient(-45deg, #000 25%, transparent 25%)',
    'linear-gradient(45deg, transparent 75%, #000 75%)',
    'linear-gradient(-45deg, transparent 75%, #000 75%)',
  ].join(', '),
  backgroundSize: '64px 64px',
  backgroundPosition: '0 0, 0 32px, 32px -32px, -32px 0px',
  backgroundColor: '#fff',
}

type Phase = 'idle' | 'pattern' | 'grey'

export function ImageRetentionTest() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [durationIdx, setDurationIdx] = useState(1)
  const [remaining, setRemaining] = useState(DURATIONS[1].seconds)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  useEffect(() => {
    if (phase === 'pattern') {
      timerRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            clearInterval(timerRef.current!)
            setPhase('grey')
            return 0
          }
          return r - 1
        })
      }, 1000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const start = () => {
    setRemaining(DURATIONS[durationIdx].seconds)
    setPhase('pattern')
  }

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('idle')
    setRemaining(DURATIONS[durationIdx].seconds)
  }

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  return (
    <>
      {/* Pattern / grey preview panel */}
      <div
        className="relative w-full rounded-xl overflow-hidden select-none"
        style={{
          minHeight: '200px',
          ...(phase === 'grey' ? { backgroundColor: '#808080' } :
             phase === 'pattern' ? checkerStyle :
             { backgroundColor: '#f0f0f0' }),
        }}
      >
        {phase === 'idle' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm font-medium text-fg-muted">Press Start to begin the retention test</p>
          </div>
        )}
        {phase === 'pattern' && (
          <div className="absolute top-3 left-3 font-mono text-white text-sm font-semibold"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            {formatTime(remaining)}
          </div>
        )}
        {phase === 'grey' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>Can you see a faint checkerboard?</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Wait 30 seconds and check again. Any retained image should fade.</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {phase === 'idle' && (
          <button
            onClick={start}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
          >
            <Play size={14} /> Start
          </button>
        )}
        {phase === 'pattern' && (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
          >
            <Square size={14} /> Stop
          </button>
        )}
        {phase === 'grey' && (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
          >
            <RotateCcw size={14} /> Reset
          </button>
        )}
        <button
          onClick={() => { start(); enterFullscreen() }}
          disabled={phase !== 'idle'}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Maximize2 size={14} /> Start Fullscreen
        </button>
      </div>

      {/* Duration selector */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-fg-muted font-medium">Duration:</span>
        <div className="flex gap-1.5">
          {DURATIONS.map((d, i) => (
            <button
              key={i}
              onClick={() => { setDurationIdx(i); if (phase === 'idle') setRemaining(d.seconds) }}
              disabled={phase !== 'idle'}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-40 ${
                i === durationIdx ? 'bg-accent text-white' : 'bg-elevated border border-border text-fg-muted hover:text-fg'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-fg-muted leading-relaxed">
        After the pattern phase, a solid grey panel replaces it. Any visible ghosting of the checkerboard on the grey indicates image retention. It should fade within a few minutes on a healthy display.
      </p>

      {/* Fullscreen overlay */}
      {isFullscreen && phase === 'pattern' && (
        <div
          className="fixed inset-0 z-[9999] select-none"
          style={checkerStyle}
        >
          <div className="absolute top-4 left-4 font-mono text-white text-lg font-semibold"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            {formatTime(remaining)}
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-xs text-white/50">Press Esc to exit</span>
          </div>
        </div>
      )}
      {isFullscreen && phase === 'grey' && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{ backgroundColor: '#808080' }}
        >
          <p className="text-base font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>Can you see a faint checkerboard pattern?</p>
          <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Any retained image should fade within a few minutes · Press Esc to exit</p>
        </div>
      )}
    </>
  )
}
