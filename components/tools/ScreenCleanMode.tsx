'use client'

import { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'

const COLORS = [
  { label: 'White', hex: '#FFFFFF', textColor: '#000000' },
  { label: 'Black', hex: '#000000', textColor: '#FFFFFF' },
  { label: 'Grey', hex: '#808080', textColor: '#FFFFFF' },
]

const LOCK_SECONDS = 15

export function ScreenCleanMode() {
  const [colorIdx, setColorIdx] = useState(0)
  const [active, setActive] = useState(false)
  const [lockRemaining, setLockRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const activate = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
    setActive(true)
    setLockRemaining(LOCK_SECONDS)
  }

  useEffect(() => {
    if (!active || lockRemaining <= 0) return
    timerRef.current = setInterval(() => {
      setLockRemaining(r => {
        if (r <= 1) { clearInterval(timerRef.current!); return 0 }
        return r - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [active])

  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement) {
        setActive(false)
        setLockRemaining(0)
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const exitClean = async () => {
    if (lockRemaining > 0) return
    setActive(false)
    try { await document.exitFullscreen() } catch {}
  }

  const color = COLORS[colorIdx]

  return (
    <>
      {/* Preview panel */}
      <div
        className="relative w-full rounded-xl overflow-hidden flex items-center justify-center select-none"
        style={{ backgroundColor: color.hex, minHeight: '180px' }}
      >
        <div className="flex flex-col items-center gap-1 pointer-events-none">
          <Sparkles size={22} style={{ color: color.hex === '#FFFFFF' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)' }} />
          <p className="text-xs font-medium" style={{ color: color.hex === '#FFFFFF' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)' }}>
            {color.label} panel preview
          </p>
        </div>
      </div>

      {/* Colour selector + activate */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fg-muted font-medium">Panel:</span>
          {COLORS.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setColorIdx(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                i === colorIdx ? 'bg-accent text-white' : 'bg-elevated border border-border text-fg-muted hover:text-fg'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <button
          onClick={activate}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
        >
          <Sparkles size={14} /> Enable Clean Mode
        </button>
      </div>

      <p className="text-xs text-fg-muted leading-relaxed">
        Fills your screen with a plain panel and locks it for {LOCK_SECONDS} seconds so you can clean safely. Use white to spot smudges most easily.
      </p>

      {/* Fullscreen overlay */}
      {active && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-end justify-end pb-8 select-none"
          style={{
            backgroundColor: color.hex,
            pointerEvents: lockRemaining > 0 ? 'none' : 'auto',
            cursor: lockRemaining === 0 ? 'pointer' : 'default',
          }}
          onClick={exitClean}
        >
          <div
            className="w-full flex justify-center pointer-events-none"
          >
            <span
              className="text-xs rounded-full px-5 py-2"
              style={{
                backgroundColor: color.hex === '#FFFFFF' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)',
                color: color.hex === '#FFFFFF' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
              }}
            >
              {lockRemaining > 0
                ? `Clean your screen now · Unlocks in ${lockRemaining}s`
                : 'Tap or click anywhere to exit clean mode · Esc also works'}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
