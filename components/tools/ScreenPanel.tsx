'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Maximize2 } from 'lucide-react'

interface ScreenPanelProps {
  color: { hex: string; label: string }
}

function isColorDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

export function ScreenPanel({ color }: ScreenPanelProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const dark = isColorDark(color.hex)
  const textColor = dark ? '#ffffff' : '#000000'
  const overlayBg = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'

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
    const onMove = () => resetHintTimer()
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isFullscreen, resetHintTimer])

  useEffect(() => () => { if (hintTimer.current) clearTimeout(hintTimer.current) }, [])

  return (
    <>
      <div
        className="relative w-full rounded-xl overflow-hidden select-none"
        style={{ backgroundColor: color.hex, minHeight: '280px' }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-sm font-semibold" style={{ color: textColor, opacity: 0.4 }}>
            {color.label}
          </p>
        </div>
        <button
          onClick={enterFullscreen}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
          style={{ backgroundColor: overlayBg, color: textColor }}
          aria-label="Enter fullscreen"
        >
          <Maximize2 size={13} />
          Full screen
        </button>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] select-none"
          style={{ backgroundColor: color.hex }}
          onMouseMove={resetHintTimer}
        >
          <div
            className="absolute inset-x-0 bottom-0 pb-8 flex flex-col items-center gap-1.5 transition-opacity duration-500 pointer-events-none"
            style={{ color: textColor, opacity: showHint ? 1 : 0 }}
          >
            <p className="text-sm font-semibold" style={{ opacity: 0.65 }}>{color.label}</p>
            <p className="text-xs" style={{ opacity: 0.45 }}>Press Esc to exit fullscreen</p>
          </div>
        </div>
      )}
    </>
  )
}
