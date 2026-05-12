'use client'

import { useState, useEffect, useRef } from 'react'

type Phase = 'idle' | 'waiting' | 'go' | 'result' | 'tooearly'

const DELAY_MIN = 1500
const DELAY_MAX = 4500
const MAX_HISTORY = 5

function randDelay() {
  return Math.floor(Math.random() * (DELAY_MAX - DELAY_MIN + 1)) + DELAY_MIN
}

function getLabel(ms: number): string {
  if (ms < 150) return 'Excellent'
  if (ms < 200) return 'Good'
  if (ms < 250) return 'Average'
  if (ms < 350) return 'Slow'
  return 'Very slow'
}

export function InputLagTest() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [lastMs, setLastMs] = useState<number | null>(null)
  const [history, setHistory] = useState<number[]>([])
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const goAtRef = useRef<number>(0)

  const beginWait = () => {
    setPhase('waiting')
    timeoutRef.current = setTimeout(() => {
      goAtRef.current = performance.now()
      setPhase('go')
    }, randDelay())
  }

  const handleAction = () => {
    if (phase === 'idle') { beginWait(); return }
    if (phase === 'waiting') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setPhase('tooearly')
      return
    }
    if (phase === 'go') {
      const ms = Math.round(performance.now() - goAtRef.current)
      setLastMs(ms)
      setHistory(h => [...h.slice(-(MAX_HISTORY - 1)), ms])
      setPhase('result')
      return
    }
    if (phase === 'result' || phase === 'tooearly') beginWait()
  }

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

  const avg = history.length > 1
    ? Math.round(history.reduce((a, b) => a + b, 0) / history.length)
    : null

  const panelBg =
    phase === 'go' ? '#16a34a' :
    phase === 'tooearly' ? '#dc2626' :
    undefined

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={handleAction}
        onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') handleAction() }}
        className="w-full rounded-xl border border-border overflow-hidden cursor-pointer select-none transition-colors bg-surface"
        style={{ height: '280px', ...(panelBg ? { backgroundColor: panelBg } : {}) }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
          {phase === 'idle' && (
            <>
              <p className="text-3xl font-extrabold text-fg">Click to Start</p>
              <p className="text-sm text-fg-muted max-w-xs">
                The screen will turn green after a random delay. Click as fast as you can the moment it changes.
              </p>
            </>
          )}

          {phase === 'waiting' && (
            <>
              <p className="text-3xl font-extrabold text-fg">Wait...</p>
              <p className="text-sm text-fg-muted">Do not click yet — wait for green</p>
            </>
          )}

          {phase === 'go' && (
            <p className="text-6xl font-extrabold text-white tracking-tight">CLICK!</p>
          )}

          {phase === 'tooearly' && (
            <>
              <p className="text-3xl font-extrabold text-white">Too Early</p>
              <p className="text-white/80 text-sm">Wait for the screen to turn green — click to try again</p>
            </>
          )}

          {phase === 'result' && lastMs !== null && (
            <>
              <p className="text-7xl font-extrabold text-fg tracking-tight">
                {lastMs}<span className="text-3xl font-semibold text-fg-muted ml-1.5">ms</span>
              </p>
              <p className="text-accent font-semibold text-sm">{getLabel(lastMs)}</p>
              <p className="text-xs text-fg-muted">Click to try again</p>
            </>
          )}
        </div>
      </div>

      {history.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 pt-1 text-sm text-fg-muted">
          <span>
            Results:{' '}
            <span className="text-fg font-medium">{history.map(ms => `${ms}ms`).join(', ')}</span>
          </span>
          {avg !== null && (
            <span>
              Average: <span className="text-accent font-bold">{avg}ms</span>
            </span>
          )}
        </div>
      )}
    </>
  )
}
