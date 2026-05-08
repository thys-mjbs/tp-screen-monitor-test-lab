'use client'

import { useState, useEffect, useCallback } from 'react'
import { RefreshCw } from 'lucide-react'

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

function aspectRatio(w: number, h: number): string {
  const g = gcd(w, h)
  return `${w / g}:${h / g}`
}

const RATIO_NAMES: Record<string, string> = {
  '16:9': 'Widescreen',
  '16:10': 'Widescreen 16:10',
  '4:3': 'Classic 4:3',
  '5:4': 'Classic 5:4',
  '21:9': 'Ultrawide',
  '32:9': 'Super ultrawide',
  '1:1': 'Square',
  '3:2': '3:2 (Surface / photography)',
}

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
    setData({
      screenW: sw, screenH: sh,
      physicalW: Math.round(sw * dpr), physicalH: Math.round(sh * dpr),
      viewportW: window.innerWidth, viewportH: window.innerHeight,
      dpr, colorDepth: window.screen.colorDepth,
      ratio, ratioName: RATIO_NAMES[ratio] ?? null,
    })
  }, [])

  useEffect(() => {
    update()
    // resize fires on window resize; focus fires after dragging to a different monitor
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
        Reading display properties...
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          label="Screen Resolution"
          value={`${data.screenW} × ${data.screenH}`}
          note="CSS pixels"
        />
        <StatCard
          label="Aspect Ratio"
          value={data.ratio}
          note={data.ratioName ?? undefined}
        />
        <StatCard
          label="Device Pixel Ratio"
          value={`${data.dpr}×`}
          note={data.dpr > 1 ? 'HiDPI / Retina display' : 'Standard density'}
        />
        <StatCard
          label="Physical Pixels"
          value={`${data.physicalW} × ${data.physicalH}`}
          note="Hardware pixel count"
        />
        <StatCard
          label="Browser Viewport"
          value={`${data.viewportW} × ${data.viewportH}`}
          note="Current window size"
        />
        <StatCard
          label="Colour Depth"
          value={`${data.colorDepth}-bit`}
          note={data.colorDepth >= 30 ? '10-bit / HDR capable' : 'Standard 8-bit'}
        />
      </div>
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={update}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <RefreshCw size={14} /> Re-check
        </button>
        <span className="text-xs text-fg-muted">Values auto-update on window resize and focus. Use Re-check after moving between monitors.</span>
      </div>
    </>
  )
}
