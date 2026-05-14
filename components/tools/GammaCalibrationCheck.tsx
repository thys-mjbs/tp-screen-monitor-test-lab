'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Maximize2 } from 'lucide-react'

// Solid grey values that match a 50% B/W checkerboard at each gamma level
// Derived from: grey_value = 255 * 0.5^(1/gamma)
const GAMMA_REFS = [
  { gamma: 1.8, hex: '#ADADAD', labelKey: 'gamma18' as const },
  { gamma: 2.0, hex: '#B4B4B4', labelKey: 'gamma20' as const },
  { gamma: 2.2, hex: '#BABABA', labelKey: 'gamma22' as const, target: true },
  { gamma: 2.4, hex: '#BFBFBF', labelKey: 'gamma24' as const },
]

// 1px B/W checkerboard via CSS background
const checkerStyle: React.CSSProperties = {
  backgroundImage: [
    'linear-gradient(45deg, #000 25%, transparent 25%)',
    'linear-gradient(-45deg, #000 25%, transparent 25%)',
    'linear-gradient(45deg, transparent 75%, #000 75%)',
    'linear-gradient(-45deg, transparent 75%, #000 75%)',
  ].join(', '),
  backgroundSize: '2px 2px',
  backgroundPosition: '0 0, 0 1px, 1px -1px, -1px 0px',
  backgroundColor: '#fff',
}

export function GammaCalibrationCheck() {
  const t = useTranslations('tools.gamma')
  const [activeRef, setActiveRef] = useState(2) // default to 2.2
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const resetHintTimer = useCallback(() => {
    setShowHint(true)
    if (hintTimer.current) clearTimeout(hintTimer.current)
    hintTimer.current = setTimeout(() => setShowHint(false), 2500)
  }, [])

  useEffect(() => {
    const onChange = () => {
      const fs = !!document.fullscreenElement
      setIsFullscreen(fs)
      if (fs) resetHintTimer()
      else {
        setShowHint(true)
        if (hintTimer.current) clearTimeout(hintTimer.current)
      }
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [resetHintTimer])

  useEffect(() => {
    if (!isFullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setActiveRef(i => (i + 1) % GAMMA_REFS.length)
        resetHintTimer()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveRef(i => (i - 1 + GAMMA_REFS.length) % GAMMA_REFS.length)
        resetHintTimer()
      }
    }
    const onMove = () => resetHintTimer()
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousemove', onMove)
    }
  }, [isFullscreen, resetHintTimer])

  useEffect(() => () => { if (hintTimer.current) clearTimeout(hintTimer.current) }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  return (
    <>
      {/* In-page: checkerboard + reference swatches */}
      <div className="w-full rounded-xl overflow-hidden border border-border select-none">
        {/* Checkerboard row */}
        <div className="flex items-stretch" style={{ height: '80px' }}>
          <div className="flex-1 flex items-center justify-center" style={checkerStyle}>
            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.9)' }}>
              {t('checkerboard')}
            </span>
          </div>
        </div>

        {/* Reference swatches */}
        <div className="flex">
          {GAMMA_REFS.map((ref, i) => (
            <button
              key={ref.gamma}
              onClick={() => setActiveRef(i)}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-all ${activeRef === i ? 'ring-2 ring-inset ring-accent' : ''}`}
              style={{ backgroundColor: ref.hex }}
            >
              <span className="text-xs font-semibold" style={{ color: '#333' }}>
                {t(`labels.${ref.labelKey}`)}
              </span>
              {ref.target && (
                <span className="text-xs px-1 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.12)', color: '#333' }}>
                  {t('target')}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> {t('viewFullscreen')}
        </button>
        <span className="text-xs text-fg-muted">{t('hint')}</span>
      </div>

      {/* Fullscreen: split left=checkerboard, right=selected grey */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex select-none cursor-pointer"
          onClick={() => { setActiveRef(i => (i + 1) % GAMMA_REFS.length); resetHintTimer() }}
          onMouseMove={resetHintTimer}
        >
          <div className="flex-1" style={checkerStyle} />
          <div className="flex-1" style={{ backgroundColor: GAMMA_REFS[activeRef].hex }} />

          <div
            className="absolute inset-x-0 bottom-0 pb-8 flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none"
            style={{ opacity: showHint ? 1 : 0 }}
          >
            <div
              className="flex flex-col items-center gap-1.5 rounded-xl px-5 py-3"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
            >
              <p className="text-sm font-semibold text-white/85">
                {t(`labels.${GAMMA_REFS[activeRef].labelKey}`)}{GAMMA_REFS[activeRef].target ? ` (${t('standardTarget')})` : ''}
              </p>
              <p className="text-xs text-white/55">{t('fsHint')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
