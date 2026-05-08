'use client'

import { useState, useEffect } from 'react'
import { Maximize2 } from 'lucide-react'

const BACKGROUNDS = [
  { label: 'Dark Grey', hex: '#404040', textColor: 'rgba(255,255,255,0.35)' },
  { label: 'Mid Grey', hex: '#808080', textColor: 'rgba(255,255,255,0.35)' },
  { label: 'Light Grey', hex: '#C0C0C0', textColor: 'rgba(0,0,0,0.3)' },
]

const ZONES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function ScreenUniformityTest() {
  const [bgIdx, setBgIdx] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  const bg = BACKGROUNDS[bgIdx]

  return (
    <>
      {/* In-page grid */}
      <div
        className="w-full rounded-xl overflow-hidden select-none"
        style={{ backgroundColor: bg.hex, minHeight: '240px' }}
      >
        <div className="grid grid-cols-3 h-full" style={{ minHeight: '240px' }}>
          {ZONES.map(n => (
            <div
              key={n}
              className="flex items-center justify-center"
              style={{ border: '1px solid rgba(128,128,128,0.2)' }}
            >
              <span className="text-sm font-semibold" style={{ color: bg.textColor }}>
                {n}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fg-muted font-medium">Tone:</span>
          {BACKGROUNDS.map((b, i) => (
            <button
              key={b.label}
              onClick={() => setBgIdx(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                i === bgIdx ? 'bg-accent text-white' : 'bg-elevated border border-border text-fg-muted hover:text-fg'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> View Fullscreen
        </button>
      </div>

      <p className="text-xs text-fg-muted leading-relaxed">
        Check each zone for patches, cloudiness, or brightness differences. Mid Grey is the most revealing tone for dirty screen effect.
      </p>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] grid grid-cols-3 select-none"
          style={{ backgroundColor: bg.hex }}
        >
          {ZONES.map(n => (
            <div
              key={n}
              className="flex items-center justify-center"
              style={{ border: '1px solid rgba(128,128,128,0.15)' }}
            >
              <span
                className="font-semibold"
                style={{ color: bg.textColor, fontSize: '28px', opacity: 0.6 }}
              >
                {n}
              </span>
            </div>
          ))}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
            <span
              className="text-xs rounded-full px-4 py-1.5"
              style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.55)' }}
            >
              Check each zone for brightness differences · Esc to exit
            </span>
          </div>
        </div>
      )}
    </>
  )
}
