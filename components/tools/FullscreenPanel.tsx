'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Maximize2 } from 'lucide-react'

export interface ColorEntry {
  hex: string
  label: string
}

interface FullscreenPanelProps {
  colors: ColorEntry[]
}

function isColorDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

export function FullscreenPanel({ colors }: FullscreenPanelProps) {
  const t = useTranslations('tools.fullscreenPanel')
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const current = colors[index]
  const dark = isColorDark(current.hex)
  const textColor = dark ? '#ffffff' : '#000000'
  const overlayBg = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'

  const colorLabel = (label: string): string => {
    try { return t(`colors.${label}` as Parameters<typeof t>[0]) } catch { return label }
  }

  const next = useCallback(() => setIndex(i => (i + 1) % colors.length), [colors.length])
  const prev = useCallback(() => setIndex(i => (i - 1 + colors.length) % colors.length), [colors.length])

  const resetHintTimer = useCallback(() => {
    setShowHint(true)
    if (hintTimer.current) clearTimeout(hintTimer.current)
    hintTimer.current = setTimeout(() => setShowHint(false), 2500)
  }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

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
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); resetHintTimer() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); resetHintTimer() }
    }
    const onMove = () => resetHintTimer()
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousemove', onMove)
    }
  }, [isFullscreen, next, prev, resetHintTimer])

  useEffect(() => () => { if (hintTimer.current) clearTimeout(hintTimer.current) }, [])

  return (
    <>
      {/* In-page panel */}
      <div
        className="relative w-full rounded-xl overflow-hidden cursor-pointer select-none transition-colors duration-200"
        style={{ backgroundColor: current.hex, minHeight: '280px' }}
        onClick={next}
        role="button"
        aria-label={t('ariaCurrentColour', { colour: colorLabel(current.label) })}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          <p className="text-sm font-semibold" style={{ color: textColor, opacity: 0.55 }}>{colorLabel(current.label)}</p>
          <p className="text-xs" style={{ color: textColor, opacity: 0.35 }}>{t('cycleLabel')}</p>
        </div>

        {/* Colour dot picker */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {colors.map((c, i) => (
            <span
              key={i}
              className="block w-2.5 h-2.5 rounded-full border border-black/20 transition-transform duration-150"
              style={{
                backgroundColor: c.hex,
                transform: i === index ? 'scale(1.35)' : 'scale(1)',
                outline: i === index ? `2px solid ${textColor}` : 'none',
                outlineOffset: '1px',
              }}
            />
          ))}
        </div>

        {/* Fullscreen button */}
        <button
          onClick={(e) => { e.stopPropagation(); enterFullscreen() }}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
          style={{ backgroundColor: overlayBg, color: textColor }}
          aria-label="Enter fullscreen"
        >
          <Maximize2 size={13} />
          {t('fullscreen')}
        </button>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] cursor-pointer select-none"
          style={{ backgroundColor: current.hex }}
          onClick={() => { next(); resetHintTimer() }}
          role="button"
          aria-label={t('ariaAdvance')}
        >
          <div
            className="absolute inset-x-0 bottom-0 pb-8 flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none"
            style={{ color: textColor, opacity: showHint ? 1 : 0 }}
          >
            <p className="text-sm font-semibold" style={{ opacity: 0.7 }}>{colorLabel(current.label)}</p>
            <p className="text-xs" style={{ opacity: 0.5 }}>{t('hint')}</p>
            <div className="flex gap-2 mt-1">
              {colors.map((c, i) => (
                <span
                  key={i}
                  className="block w-2 h-2 rounded-full border border-black/20"
                  style={{
                    backgroundColor: c.hex,
                    outline: i === index ? `2px solid ${textColor}` : 'none',
                    outlineOffset: '1px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
