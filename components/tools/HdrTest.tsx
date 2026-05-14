'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle, XCircle } from 'lucide-react'

const SHADOW_STEPS = [0, 5, 10, 15, 20, 30, 45, 65, 90, 120]
const HIGHLIGHT_STEPS = [135, 165, 195, 210, 220, 230, 238, 244, 250, 255]

export function HdrTest() {
  const t = useTranslations('tools.hdr')
  const [caps, setCaps] = useState<{ labelKey: string; detailKey: string; supported: boolean }[] | null>(null)

  useEffect(() => {
    const hdr   = window.matchMedia('(dynamic-range: high)').matches
    const p3    = window.matchMedia('(color-gamut: p3)').matches
    const r2020 = window.matchMedia('(color-gamut: rec2020)').matches

    setCaps([
      { labelKey: 'caps.hdrLabel',     detailKey: hdr    ? 'caps.hdrSupported'     : 'caps.hdrUnsupported',     supported: hdr },
      { labelKey: 'caps.p3Label',      detailKey: p3     ? 'caps.p3Supported'      : 'caps.p3Unsupported',      supported: p3 },
      { labelKey: 'caps.rec2020Label', detailKey: r2020  ? 'caps.rec2020Supported' : 'caps.rec2020Unsupported', supported: r2020 },
    ])
  }, [])

  return (
    <>
      {/* Capability report */}
      <div className="w-full rounded-xl border border-border bg-surface overflow-hidden divide-y divide-border">
        {caps === null ? (
          <div className="px-5 py-4 text-sm text-fg-muted">{t('detecting')}</div>
        ) : (
          caps.map(({ labelKey, detailKey, supported }) => (
            <div key={labelKey} className="flex items-start gap-3 px-5 py-4">
              {supported
                ? <CheckCircle size={18} className="shrink-0 mt-0.5 text-green-500" />
                : <XCircle    size={18} className="shrink-0 mt-0.5 text-fg-muted" />
              }
              <div>
                <p className="text-sm font-semibold text-fg">{t(labelKey as Parameters<typeof t>[0])}</p>
                <p className="text-xs text-fg-muted mt-0.5 leading-relaxed">{t(detailKey as Parameters<typeof t>[0])}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Full brightness ramp */}
      <div>
        <p className="text-xs font-medium text-fg-muted mb-1.5">{t('fullRamp')}</p>
        <div
          className="w-full rounded-lg border border-border overflow-hidden"
          style={{ height: '56px', background: 'linear-gradient(to right, #000000, #FFFFFF)' }}
        />
      </div>

      {/* Step ramps */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-fg-muted">{t('shadowSteps')}</p>
        <div className="flex rounded-lg overflow-hidden border border-border" style={{ height: '44px' }}>
          {SHADOW_STEPS.map(v => (
            <div key={v} className="flex-1" style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
          ))}
        </div>
        <p className="text-xs font-medium text-fg-muted">{t('highlightSteps')}</p>
        <div className="flex rounded-lg overflow-hidden border border-border" style={{ height: '44px' }}>
          {HIGHLIGHT_STEPS.map(v => (
            <div key={v} className="flex-1" style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
          ))}
        </div>
      </div>

      <p className="text-xs text-fg-muted">{t('note')}</p>
    </>
  )
}
