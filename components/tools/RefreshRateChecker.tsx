'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { RefreshCw } from 'lucide-react'

const RATE_LABELS: Record<number, string> = {
  24: 'Cinema',
  30: 'Standard video',
  48: 'High frame rate video',
  60: 'Standard desktop',
  75: 'Standard+',
  100: 'High refresh',
  120: 'High refresh',
  144: 'Gaming',
  165: 'Gaming',
  180: 'Gaming',
  240: 'Competitive gaming',
  360: 'Pro competitive',
}

function getRateLabel(hz: number): string {
  const snap = Object.keys(RATE_LABELS)
    .map(Number)
    .reduce((prev, curr) => Math.abs(curr - hz) < Math.abs(prev - hz) ? curr : prev)
  return Math.abs(snap - hz) <= 2 ? RATE_LABELS[snap] : 'Non-standard rate'
}

export function RefreshRateChecker() {
  const [hz, setHz] = useState<number | null>(null)
  const [measuring, setMeasuring] = useState(false)
  const rafRef = useRef<number | null>(null)

  const measure = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setMeasuring(true)
    setHz(null)

    const intervals: number[] = []
    let last = 0

    const tick = (ts: number) => {
      if (last > 0) intervals.push(ts - last)
      last = ts

      if (intervals.length < 60) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        const avg = intervals.reduce((a, b) => a + b) / intervals.length
        setHz(Math.round(1000 / avg))
        setMeasuring(false)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    measure()
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [measure])

  const label = hz !== null ? getRateLabel(hz) : null

  return (
    <>
      <div className="w-full rounded-xl bg-surface border border-border p-6 flex flex-col items-center gap-3 select-none">
        {measuring ? (
          <>
            <div className="flex items-center gap-2 text-fg-muted">
              <RefreshCw size={16} className="animate-spin" />
              <span className="text-sm font-medium">Measuring refresh rate...</span>
            </div>
            <p className="text-xs text-fg-muted">Sampling 60 frames</p>
          </>
        ) : hz !== null ? (
          <>
            <p className="text-7xl font-extrabold text-fg tracking-tight">{hz}<span className="text-3xl font-semibold text-fg-muted ml-1">Hz</span></p>
            {label && <p className="text-sm font-medium text-accent">{label}</p>}
          </>
        ) : null}
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={measure}
          disabled={measuring}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RefreshCw size={14} /> Measure Again
        </button>
        <span className="text-xs text-fg-muted">Result reflects the refresh rate your browser is currently using, not the hardware maximum.</span>
      </div>
    </>
  )
}
