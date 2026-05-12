'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

type Speed = 'slow' | 'medium' | 'fast' | 'very-fast'
type BgMode = 'dark' | 'light' | 'grey'

const SPEED_PX: Record<Speed, number> = { slow: 2, medium: 5, fast: 10, 'very-fast': 20 }
const THEMES: Record<BgMode, { bg: string; bar: string; label: string }> = {
  dark:  { bg: '#000000', bar: '#FFFFFF', label: 'Dark' },
  light: { bg: '#FFFFFF', bar: '#000000', label: 'Light' },
  grey:  { bg: '#888888', bar: '#FFFFFF', label: 'Grey' },
}

export function MotionBlurTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [speed, setSpeed] = useState<Speed>('medium')
  const [mode, setMode] = useState<BgMode>('dark')
  const [running, setRunning] = useState(true)

  const liveRef = useRef({ speed, mode, running, x: 0 })

  useEffect(() => { liveRef.current.speed = speed }, [speed])
  useEffect(() => { liveRef.current.mode = mode }, [mode])
  useEffect(() => { liveRef.current.running = running }, [running])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const syncSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    syncSize()
    const ro = new ResizeObserver(syncSize)
    ro.observe(canvas)

    const BAR_W = 24
    let rafId: number

    const tick = () => {
      const { speed: sp, mode: m, running: run } = liveRef.current
      const { bg, bar } = THEMES[m]
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = bar
      ctx.fillRect(liveRef.current.x - BAR_W / 2, 0, BAR_W, h)

      if (run) {
        liveRef.current.x += SPEED_PX[sp]
        if (liveRef.current.x > w + BAR_W) liveRef.current.x = 0
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <>
      <div className="w-full rounded-xl overflow-hidden border border-border" style={{ height: '280px' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Speed:</span>
          {(['slow', 'medium', 'fast', 'very-fast'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                speed === s
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {s === 'very-fast' ? 'Very Fast' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Background:</span>
          {(['dark', 'light', 'grey'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                mode === m
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {THEMES[m].label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setRunning(r => !r)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-elevated text-fg hover:bg-brand-100 transition-colors"
        >
          {running ? <><Pause size={12} /> Pause</> : <><Play size={12} /> Resume</>}
        </button>
      </div>
    </>
  )
}
