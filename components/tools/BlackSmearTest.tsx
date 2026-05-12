'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

type Speed = 'slow' | 'medium' | 'fast'
type BarShade = 'very-dark' | 'dark' | 'medium'
type BgShade = 'black' | 'very-dark'

const SPEED_PX: Record<Speed, number> = { slow: 1, medium: 3, fast: 6 }
const BAR_RGB: Record<BarShade, number> = { 'very-dark': 25, dark: 55, medium: 100 }
const BG_RGB: Record<BgShade, number> = { black: 0, 'very-dark': 15 }

export function BlackSmearTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [speed, setSpeed] = useState<Speed>('slow')
  const [barShade, setBarShade] = useState<BarShade>('dark')
  const [bgShade, setBgShade] = useState<BgShade>('black')
  const [running, setRunning] = useState(true)

  const liveRef = useRef({ speed, barShade, bgShade, running, x: 0 })
  useEffect(() => { liveRef.current.speed = speed }, [speed])
  useEffect(() => { liveRef.current.barShade = barShade }, [barShade])
  useEffect(() => { liveRef.current.bgShade = bgShade }, [bgShade])
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

    const BAR_W = 40
    let rafId: number

    const tick = () => {
      const { speed: sp, barShade: bs, bgShade: bg, running: run } = liveRef.current
      const barVal = BAR_RGB[bs]
      const bgVal = BG_RGB[bg]
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
          <span className="text-xs font-medium text-fg-muted">Speed:</span>
          {(['slow', 'medium', 'fast'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                speed === s ? 'bg-accent text-bg border-accent' : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Bar:</span>
          {(['very-dark', 'dark', 'medium'] as const).map(b => (
            <button
              key={b}
              onClick={() => setBarShade(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                barShade === b ? 'bg-accent text-bg border-accent' : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {b === 'very-dark' ? 'Very Dark' : b.charAt(0).toUpperCase() + b.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Background:</span>
          {(['black', 'very-dark'] as const).map(b => (
            <button
              key={b}
              onClick={() => setBgShade(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                bgShade === b ? 'bg-accent text-bg border-accent' : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {b === 'black' ? 'Black' : 'Very Dark'}
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
        Smear is most visible at slow speed with a very dark bar on a black background. Dim your room lights for best results.
      </p>
    </>
  )
}
