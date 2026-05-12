'use client'

import { useState, useEffect, useRef } from 'react'

type FlickerRate = 'f1' | 'f2' | 'f4' | 'f8'

const RATE_FRAMES: Record<FlickerRate, number> = { f1: 1, f2: 2, f4: 4, f8: 8 }
const RATE_LABELS: Record<FlickerRate, string> = {
  f1: '1 frame',
  f2: '2 frames',
  f4: '4 frames',
  f8: '8 frames',
}

const DIM_OPTIONS: { value: number; label: string }[] = [
  { value: 0,   label: 'Full off' },
  { value: 64,  label: '25% dim' },
  { value: 128, label: '50% dim' },
]

export function PwmFlickerTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rate, setRate] = useState<FlickerRate>('f2')
  const [dimBrightness, setDimBrightness] = useState(0)

  const liveRef = useRef({ rate, dimBrightness, frame: 0 })
  useEffect(() => { liveRef.current.rate = rate }, [rate])
  useEffect(() => { liveRef.current.dimBrightness = dimBrightness }, [dimBrightness])

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

    let rafId: number

    const tick = () => {
      liveRef.current.frame++
      const { rate: r, dimBrightness: dim, frame: f } = liveRef.current
      const frames = RATE_FRAMES[r]
      const w = canvas.width
      const h = canvas.height
      const divX = Math.floor(w / 2)

      const isOn = Math.floor(f / frames) % 2 === 0
      const flickVal = isOn ? 255 : dim

      ctx.fillStyle = `rgb(${flickVal},${flickVal},${flickVal})`
      ctx.fillRect(0, 0, divX - 1, h)

      const refVal = Math.round((255 + dim) / 2)
      ctx.fillStyle = `rgb(${refVal},${refVal},${refVal})`
      ctx.fillRect(divX + 1, 0, w - divX - 1, h)

      ctx.fillStyle = '#444'
      ctx.fillRect(divX - 1, 0, 2, h)

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(rafId); ro.disconnect() }
  }, [])

  return (
    <>
      <div className="w-full rounded-xl overflow-hidden border border-border relative" style={{ height: '280px' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute bottom-3 left-0 w-1/2 flex justify-center pointer-events-none">
          <span className="text-xs bg-black/50 text-white px-2 py-0.5 rounded">Flickering</span>
        </div>
        <div className="absolute bottom-3 right-0 w-1/2 flex justify-center pointer-events-none">
          <span className="text-xs bg-black/50 text-white px-2 py-0.5 rounded">Steady Reference</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Toggle every:</span>
          {(Object.keys(RATE_LABELS) as FlickerRate[]).map(r => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                rate === r
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {RATE_LABELS[r]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">Off-phase:</span>
          {DIM_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setDimBrightness(value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                dimBrightness === value
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-fg-muted">
        Flicker rate is relative to your monitor&apos;s frame rate. Real monitor PWM runs at 200&ndash;1000 Hz and is invisible to the eye &mdash; use the camera method to detect it.
      </p>
    </>
  )
}
