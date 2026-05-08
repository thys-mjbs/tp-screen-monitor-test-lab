'use client'

import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const update = () => {
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
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  if (!data) {
    return (
      <div className="w-full rounded-xl bg-surface border border-border p-6 text-center text-sm text-fg-muted">
        Reading display properties...
      </div>
    )
  }

  return (
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
  )
}
