'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface Cap {
  label: string
  detail: string
  supported: boolean
}

const SHADOW_STEPS = [0, 5, 10, 15, 20, 30, 45, 65, 90, 120]
const HIGHLIGHT_STEPS = [135, 165, 195, 210, 220, 230, 238, 244, 250, 255]

export function HdrTest() {
  const [caps, setCaps] = useState<Cap[] | null>(null)

  useEffect(() => {
    const hdr  = window.matchMedia('(dynamic-range: high)').matches
    const p3   = window.matchMedia('(color-gamut: p3)').matches
    const r2020 = window.matchMedia('(color-gamut: rec2020)').matches

    setCaps([
      {
        label: 'HDR (High Dynamic Range)',
        detail: hdr
          ? 'Your browser and display report HDR capability.'
          : 'Your browser or display does not report HDR support. An SDR display or a browser without HDR passthrough will show this.',
        supported: hdr,
      },
      {
        label: 'Wide Colour Gamut: Display P3',
        detail: p3
          ? 'Your display can render colours beyond the sRGB gamut. P3 covers about 25% more colour than sRGB.'
          : 'Your display is reporting standard sRGB gamut. Most non-HDR monitors are sRGB only.',
        supported: p3,
      },
      {
        label: 'Wide Colour Gamut: Rec. 2020',
        detail: r2020
          ? 'Your display reports Rec. 2020 colour gamut, the broadcast HDR standard. This is rare on consumer monitors.'
          : 'Rec. 2020 not detected. This is expected on nearly all consumer monitors including most HDR displays.',
        supported: r2020,
      },
    ])
  }, [])

  return (
    <>
      {/* Capability report */}
      <div className="w-full rounded-xl border border-border bg-surface overflow-hidden divide-y divide-border">
        {caps === null ? (
          <div className="px-5 py-4 text-sm text-fg-muted">Detecting display capabilities...</div>
        ) : (
          caps.map(({ label, detail, supported }) => (
            <div key={label} className="flex items-start gap-3 px-5 py-4">
              {supported
                ? <CheckCircle size={18} className="shrink-0 mt-0.5 text-green-500" />
                : <XCircle    size={18} className="shrink-0 mt-0.5 text-fg-muted" />
              }
              <div>
                <p className="text-sm font-semibold text-fg">{label}</p>
                <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Full brightness ramp */}
      <div>
        <p className="text-xs font-medium text-fg-muted mb-1.5">Full brightness ramp (black to white)</p>
        <div
          className="w-full rounded-lg border border-border overflow-hidden"
          style={{ height: '56px', background: 'linear-gradient(to right, #000000, #FFFFFF)' }}
        />
      </div>

      {/* Step ramps */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-fg-muted">Shadow steps: near-black detail</p>
        <div className="flex rounded-lg overflow-hidden border border-border" style={{ height: '44px' }}>
          {SHADOW_STEPS.map(v => (
            <div key={v} className="flex-1" style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
          ))}
        </div>
        <p className="text-xs font-medium text-fg-muted">Highlight steps: near-white detail</p>
        <div className="flex rounded-lg overflow-hidden border border-border" style={{ height: '44px' }}>
          {HIGHLIGHT_STEPS.map(v => (
            <div key={v} className="flex-1" style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
          ))}
        </div>
      </div>

      <p className="text-xs text-fg-muted">
        Each step in the shadow and highlight ramps should be individually visible. Merged steps indicate crushed blacks or clipped highlights. True HDR luminance above SDR white cannot be rendered in a standard browser page.
      </p>
    </>
  )
}
