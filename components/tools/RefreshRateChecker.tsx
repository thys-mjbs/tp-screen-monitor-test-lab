'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { RefreshCw } from 'lucide-react'

type RateKey = 'cinema' | 'standardVideo' | 'highFrameRate' | 'standardDesktop' | 'standardPlus' | 'highRefresh' | 'gaming' | 'competitiveGaming' | 'proCompetitive'

const RATE_KEYS: Record<number, RateKey> = {
  24: 'cinema',
  30: 'standardVideo',
  48: 'highFrameRate',
  60: 'standardDesktop',
  75: 'standardPlus',
  100: 'highRefresh',
  120: 'highRefresh',
  144: 'gaming',
  165: 'gaming',
  180: 'gaming',
  240: 'competitiveGaming',
  360: 'proCompetitive',
}

function getRateKey(hz: number): RateKey | 'nonStandard' {
  const snap = Object.keys(RATE_KEYS)
    .map(Number)
    .reduce((prev, curr) => Math.abs(curr - hz) < Math.abs(prev - hz) ? curr : prev)
  return Math.abs(snap - hz) <= 2 ? RATE_KEYS[snap] : 'nonStandard'
}

export function RefreshRateChecker() {
  const t = useTranslations('tools.refreshRate')
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

  const rateKey = hz !== null ? getRateKey(hz) : null
  const rateLabel = rateKey ? t(`labels.${rateKey}` as Parameters<typeof t>[0]) : null

  return (
    <>
      <div className="w-full rounded-xl bg-surface border border-border p-6 flex flex-col items-center gap-3 select-none">
        {measuring ? (
          <>
            <div className="flex items-center gap-2 text-fg-muted">
              <RefreshCw size={16} className="animate-spin" />
              <span className="text-sm font-medium">{t('measuring')}</span>
            </div>
            <p className="text-xs text-fg-muted">{t('sampling')}</p>
          </>
        ) : hz !== null ? (
          <>
            <p className="text-7xl font-extrabold text-fg tracking-tight">{hz}<span className="text-3xl font-semibold text-fg-muted ml-1">Hz</span></p>
            {rateLabel && <p className="text-sm font-medium text-accent">{rateLabel}</p>}
          </>
        ) : null}
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={measure}
          disabled={measuring}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RefreshCw size={14} /> {t('measureAgain')}
        </button>
        <span className="text-xs text-fg-muted">{t('note')}</span>
      </div>
    </>
  )
}
