'use client'

import { useState, useEffect } from 'react'
import { Maximize2 } from 'lucide-react'

export function ViewingAngleTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const enterFullscreen = async () => {
    try { await document.documentElement.requestFullscreen() } catch {}
  }

  const Panel = ({ fullscreen }: { fullscreen?: boolean }) => {
    const h = fullscreen ? '100vh' : '280px'
    const fontSize = fullscreen ? '13px' : '10px'
    const labelStyle = (bg: string, text: string): React.CSSProperties => ({
      position: 'absolute', bottom: 6, left: 8, fontSize,
      fontWeight: 600, padding: '2px 6px', borderRadius: 4,
      backgroundColor: bg, color: text,
    })

    return (
      <div
        className="w-full select-none"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: h }}
      >
        {/* Top-left: dark reference */}
        <div className="relative" style={{ backgroundColor: '#1A1A1A' }}>
          <span style={labelStyle('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.6)')}>Dark</span>
        </div>
        {/* Top-right: light reference */}
        <div className="relative" style={{ backgroundColor: '#E0E0E0' }}>
          <span style={labelStyle('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)')}>Light</span>
        </div>
        {/* Bottom-left: mid grey */}
        <div className="relative" style={{ backgroundColor: '#808080' }}>
          <span style={labelStyle('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.6)')}>Mid Grey</span>
        </div>
        {/* Bottom-right: horizontal gradient */}
        <div
          className="relative"
          style={{ background: 'linear-gradient(to right, #000000, #FFFFFF)' }}
        >
          <span style={labelStyle('rgba(0,0,0,0.35)', 'rgba(255,255,255,0.75)')}>Gradient</span>
        </div>
        {/* Centre reference square */}
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: fullscreen ? '80px' : '40px',
            height: fullscreen ? '80px' : '40px',
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(0,0,0,0.2)',
            borderRadius: 4,
          }}
        />
      </div>
    )
  }

  return (
    <>
      <div className="rounded-xl overflow-hidden border border-border">
        <Panel />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={enterFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-elevated border border-border text-fg text-sm font-medium hover:bg-brand-100 transition-colors"
        >
          <Maximize2 size={14} /> View Fullscreen
        </button>
        <span className="text-xs text-fg-muted">Enter fullscreen, then slowly lean left, right, forward, and backward. Watch for colour shifts in the dark and gradient quadrants.</span>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[9999]">
          <Panel fullscreen />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
            <span
              className="text-xs rounded-full px-4 py-1.5"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)', color: 'rgba(255,255,255,0.6)' }}
            >
              Lean left, right, forward, backward. Watch how each quadrant changes · Esc to exit
            </span>
          </div>
        </div>
      )}
    </>
  )
}
