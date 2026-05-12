'use client'

import { useState } from 'react'

interface Swatch {
  k: number
  hex: string
  isRef?: boolean
}

const SWATCHES: Swatch[] = [
  { k: 2700, hex: '#FFC59A' },
  { k: 3000, hex: '#FFD1AD' },
  { k: 3500, hex: '#FFDCBF' },
  { k: 4000, hex: '#FFE5CF' },
  { k: 4500, hex: '#FFEEDE' },
  { k: 5000, hex: '#FFF4EA' },
  { k: 5500, hex: '#FFF9F4' },
  { k: 6500, hex: '#FFFFFF', isRef: true },
  { k: 7500, hex: '#EDF2FF' },
  { k: 9000, hex: '#DEEAFF' },
  { k: 10000, hex: '#D3E3FF' },
]

function getResult(k: number): { text: string; classes: string } {
  if (k >= 5500 && k <= 7500) {
    return {
      text: `You selected ${k}K, which is close to the D65 standard (6500K). Your monitor's white balance appears well-calibrated for standard viewing.`,
      classes: 'text-green-900 bg-green-50 border-green-200',
    }
  }
  if (k < 5500) {
    const adj = k < 4000 ? 'strong cool or blue' : k < 5000 ? 'moderate cool' : 'mild cool'
    return {
      text: `You selected ${k}K (warm). A warm swatch appearing neutral suggests a ${adj} tint on your monitor. Try raising the colour temperature setting toward 6500K (D65) in your monitor's OSD menu.`,
      classes: 'text-amber-900 bg-amber-50 border-amber-200',
    }
  }
  const adj = k > 9000 ? 'strong warm or yellow' : 'moderate warm'
  return {
    text: `You selected ${k}K (cool). A cool swatch appearing neutral suggests a ${adj} tint on your monitor. Try lowering the colour temperature setting toward 6500K (D65) in your monitor's OSD menu.`,
    classes: 'text-amber-900 bg-amber-50 border-amber-200',
  }
}

export function ColourTemperatureTest() {
  const [selected, setSelected] = useState<number | null>(null)
  const result = selected !== null ? getResult(selected) : null

  return (
    <div className="w-full rounded-xl border border-border bg-surface overflow-hidden">
      <div className="bg-[#1c1c1c] px-4 pt-4 pb-5">
        <p className="text-xs text-white/60 text-center mb-4">
          Click the swatch that looks like the most neutral, pure white to you
        </p>
        <div className="flex gap-2 justify-center overflow-x-auto pb-1">
          {SWATCHES.map(({ k, hex, isRef }) => (
            <button
              key={k}
              onClick={() => setSelected(k)}
              className={`flex-shrink-0 flex flex-col items-center rounded-lg overflow-hidden border-2 transition-all ${
                selected === k
                  ? 'border-accent scale-105'
                  : 'border-white/10 hover:border-white/40'
              }`}
              style={{ width: '52px' }}
            >
              <div style={{ backgroundColor: hex, height: '72px', width: '100%' }} />
              <div className="w-full bg-[#0f0f0f] px-1 py-1.5 text-center">
                <p className="text-[10px] font-semibold text-white/80 leading-none">{k}</p>
                <p className="text-[9px] text-white/40 mt-0.5">K</p>
                {isRef && <p className="text-[9px] text-accent mt-0.5">D65</p>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`px-5 py-4 border-t border-border ${result ? result.classes : ''}`}>
        {result ? (
          <p className="text-sm leading-relaxed">{result.text}</p>
        ) : (
          <p className="text-xs text-fg-muted">
            For best results, view in a dimly lit room and allow your eyes to adapt for 30 seconds before selecting.
          </p>
        )}
      </div>
    </div>
  )
}
