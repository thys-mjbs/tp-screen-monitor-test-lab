'use client'

import { useState, useEffect } from 'react'
import { Maximize2 } from 'lucide-react'

// 16 near-white steps from 255 down to 196 (step of 4)
const STEPS = Array.from({ length: 16 }, (_, i) => {
  const val = 255 - i * 4
  const h = val.toString(16).padStart(2, '0')
  return { val, hex: `#${h}${h}${h}` }
})

export function WhiteSaturationTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  return (
    <>
      <div
        className="w-full rounded-xl p-4 select-none"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="flex gap-1.5">
          {STEPS.map((step) => (
            <div key={step.val} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full rounded"
                style={{ backgroundColor: step.hex, height: '48px' }}
              />
              <span
                className="font-mono text-center"
                style={{ color: 'rgba(0,0,0,0.3)', fontSize: '9px' }}
              >
                {step.val}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center mt-3 text-xs" style={{ color: 'rgba(0,0,0,0.25)' }}>
          Count how many steps you can distinguish from pure white
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> View Fullscreen
        </button>
        <span className="text-xs text-fg-muted">A well-calibrated display should show all 16 steps as distinct shades.</span>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="flex w-full px-10 gap-2">
            {STEPS.map((step) => (
              <div key={step.val} className="flex-1 flex flex-col items-center gap-3">
                <div
                  className="w-full rounded-lg"
                  style={{ backgroundColor: step.hex, height: '220px' }}
                />
                <span
                  className="font-mono"
                  style={{ color: 'rgba(0,0,0,0.3)', fontSize: '11px' }}
                >
                  {step.val}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs" style={{ color: 'rgba(0,0,0,0.2)' }}>
            Count how many steps you can distinguish from pure white · Esc to exit
          </p>
        </div>
      )}
    </>
  )
}
