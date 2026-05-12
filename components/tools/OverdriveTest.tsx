'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

type Speed = 'medium' | 'fast' | 'very-fast'
type Mode = 'light-on-dark' | 'dark-on-light'

const SPEED_PX: Record<Speed, number> = { medium: 5, fast: 10, 'very-fast': 20 }
const MODES: Record<Mode, { label: string; bgVal: number; barVal: number }> = {
  'light-on-dark': { label: 'White on Black', bgVal: 0,   barVal: 255 },
  'dark-on-light': { label: 'Black on White', bgVal: 255, barVal: 0   },
}

export function OverdriveTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [speed, setSpeed] = useState<Speed>('fast')
  const [mode, setMode] = useState<Mode>('light-on-dark')
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

    const BAR_W = 48
    let rafId: number

    const tick = () => {
      const { speed: sp, mode: m, running: run } = liveRef.current
      const { bgVal, barVal } = MODES[m]
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = `rgb(${bgVal},${bgVal},${bgVal})`
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = `rgb(${barVal},${barVal},${barVal})`
      ctx.fillRect(liveRef.current.x - BAR_W / 2, 0, BAR_W, h)

      if (run) {
        liveRef.current.x += SPEED_PX[sp]
        if (liveRef.current.x > w + BAR_W) liveRef.current.x = 0
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(rafId); ro.disconnect() }
  }, [])

  return (
    <>
      <div className="w-full rounded-xl overflow-hidden border border-border" style={{ height: '280px' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Mode:</span>
          {(['light-on-dark', 'dark-on-light'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                mode === m ? 'bg-accent text-bg border-accent' : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {MODES[m].label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Speed:</span>
          {(['medium', 'fast', 'very-fast'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                speed === s ? 'bg-accent text-bg border-accent' : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {s === 'very-fast' ? 'Very Fast' : s.charAt(0).toUpperCase() + s.slice(1)}
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

      <p className="text-xs text-fg-muted">
        Look ahead of the bar for a faint halo or ghost: that is excessive overdrive. A smear trailing behind the bar indicates insufficient overdrive.
      </p>
    </>
  )
}
