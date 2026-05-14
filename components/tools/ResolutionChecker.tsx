'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { RefreshCw } from 'lucide-react'

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

function aspectRatio(w: number, h: number): string {
  const g = gcd(w, h)
  return `${w / g}:${h / g}`
}

const KNOWN_RATIOS = new Set(['16:9', '16:10', '4:3', '5:4', '21:9', '32:9', '1:1', '3:2'])

interface StatCardProps {
  label: string
  value: string
  note?: string
}

function StatCard({ label, value, note }: StatCardProps) {
  return (
    <div className="rounded-xl bg-surface border border-border p-4 flex flex-col gap-1">
      <p className="text-xs font-medium text-fg-muted uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-fg leading-tight">{value}</p>
      {note && <p className="text-xs text-fg-muted">{note}</p>}
    </div>
  )
}

export function ResolutionChecker() {
  const t = useTranslations('tools.resolution')
  const [data, setData] = useState<{
    screenW: number; screenH: number
    physicalW: number; physicalH: number
    viewportW: number; viewportH: number
    dpr: number; colorDepth: number
    ratio: string; ratioName: string | null
  } | null>(null)

  const update = useCallback(() => {
    const sw = window.screen.width
    const sh = window.screen.height
    const dpr = window.devicePixelRatio || 1
    const ratio = aspectRatio(sw, sh)
    const ratioName = KNOWN_RATIOS.has(ratio)
      ? t(`ratioNames.${ratio}` as Parameters<typeof t>[0])
      : null
    setData({
      screenW: sw, screenH: sh,
      physicalW: Math.round(sw * dpr), physicalH: Math.round(sh * dpr),
      viewportW: window.innerWidth, viewportH: window.innerHeight,
      dpr, colorDepth: window.screen.colorDepth,
      ratio, ratioName,
    })
  }, [t])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    window.addEventListener('focus', update)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('focus', update)
    }
  }, [update])

  if (!data) {
    return (
      <div className="w-full rounded-xl bg-surface border border-border p-6 text-center text-sm text-fg-muted">
        {t('reading')}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          label={t('labels.screenResolution')}
          value={`${data.screenW} × ${data.screenH}`}
          note={t('notes.cssPixels')}
        />
        <StatCard
          label={t('labels.aspectRatio')}
          value={data.ratio}
          note={data.ratioName ?? undefined}
        />
        <StatCard
          label={t('labels.devicePixelRatio')}
          value={`${data.dpr}×`}
          note={data.dpr > 1 ? t('notes.hidpi') : t('notes.standardDensity')}
        />
        <StatCard
          label={t('labels.physicalPixels')}
          value={`${data.physicalW} × ${data.physicalH}`}
          note={t('notes.hardwarePixels')}
        />
        <StatCard
          label={t('labels.browserViewport')}
          value={`${data.viewportW} × ${data.viewportH}`}
          note={t('notes.windowSize')}
        />
        <StatCard
          label={t('labels.colourDepth')}
          value={`${data.colorDepth}-bit`}
          note={data.colorDepth >= 30 ? t('notes.hdrCapable') : t('notes.standard8bit')}
        />
      </div>
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={update}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <RefreshCw size={14} /> {t('recheck')}
        </button>
        <span className="text-xs text-fg-muted">{t('note')}</span>
      </div>
    </>
  )
}
