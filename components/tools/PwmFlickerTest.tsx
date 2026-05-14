'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Play, Square, TriangleAlert } from 'lucide-react'

type FlickerRate = 'f1' | 'f2' | 'f4' | 'f8'

const RATE_FRAMES: Record<FlickerRate, number> = { f1: 1, f2: 2, f4: 4, f8: 8 }

type DimKey = 'fullOff' | 'dim25' | 'dim50'
const DIM_OPTIONS: { value: number; key: DimKey }[] = [
  { value: 0,   key: 'fullOff' },
  { value: 64,  key: 'dim25' },
  { value: 128, key: 'dim50' },
]

export function PwmFlickerTest() {
  const t = useTranslations('tools.pwm')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rate, setRate] = useState<FlickerRate>('f2')
  const [dimBrightness, setDimBrightness] = useState(0)
  const [running, setRunning] = useState(false)

  const liveRef = useRef({ rate, dimBrightness, running, frame: 0 })
  useEffect(() => { liveRef.current.rate = rate }, [rate])
  useEffect(() => { liveRef.current.dimBrightness = dimBrightness }, [dimBrightness])
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

    let rafId: number

    const tick = () => {
      const { rate: r, dimBrightness: dim, running: run } = liveRef.current
      const frames = RATE_FRAMES[r]
      const w = canvas.width
      const h = canvas.height
      const divX = Math.floor(w / 2)
      const refVal = Math.round((255 + dim) / 2)

      if (run) {
        liveRef.current.frame++
        const isOn = Math.floor(liveRef.current.frame / frames) % 2 === 0
        const flickVal = isOn ? 255 : dim
        ctx.fillStyle = `rgb(${flickVal},${flickVal},${flickVal})`
        ctx.fillRect(0, 0, divX - 1, h)
      } else {
        liveRef.current.frame = 0
        ctx.fillStyle = `rgb(${refVal},${refVal},${refVal})`
        ctx.fillRect(0, 0, divX - 1, h)
      }

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
      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
        <TriangleAlert size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-xs leading-relaxed">
          <span className="font-semibold">{t('warning.title')}</span> {t('warning.body')}
        </p>
      </div>

      <div className="w-full rounded-xl overflow-hidden border border-border relative" style={{ height: '280px' }}>
        <canvas ref={canvasRef} className="w-full h-full block" />
        {!running && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-sm font-medium text-black/40">{t('pressStart')}</p>
          </div>
        )}
        <div className="absolute bottom-3 left-0 w-1/2 flex justify-center pointer-events-none">
          <span className="text-xs bg-black/50 text-white px-2 py-0.5 rounded">{t('flickering')}</span>
        </div>
        <div className="absolute bottom-3 right-0 w-1/2 flex justify-center pointer-events-none">
          <span className="text-xs bg-black/50 text-white px-2 py-0.5 rounded">{t('steadyRef')}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={() => setRunning(r => !r)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors min-w-[100px] justify-center"
        >
          {running ? <><Square size={14} /> Stop</> : <><Play size={14} /> Start</>}
        </button>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">{t('toggleEvery')}</span>
          {(Object.keys(RATE_FRAMES) as FlickerRate[]).map(r => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                rate === r
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {t(`rates.${r}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-fg-muted">{t('offPhase')}</span>
          {DIM_OPTIONS.map(({ value, key }) => (
            <button
              key={value}
              onClick={() => setDimBrightness(value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                dimBrightness === value
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-elevated border-border text-fg hover:bg-brand-100'
              }`}
            >
              {t(`dim.${key}`)}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-fg-muted">{t('note')}</p>
    </>
  )
}
