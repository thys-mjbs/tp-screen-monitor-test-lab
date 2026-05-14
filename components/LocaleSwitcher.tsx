'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

export function LocaleSwitcher() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const isEs = pathname === '/es' || pathname.startsWith('/es/')
  const current = isEs ? 'es' : 'en'
  const currentLabel = LOCALES.find((l) => l.code === current)?.label ?? 'English'

  const getPath = (locale: string) => {
    if (locale === 'es') {
      return isEs ? pathname : `/es${pathname === '/' ? '' : pathname}`
    }
    return isEs ? pathname.slice(3) || '/' : pathname
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-fg-muted hover:text-fg hover:bg-elevated transition-colors"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe size={13} className="shrink-0" />
        <span>{currentLabel}</span>
        <ChevronDown size={11} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 bg-surface border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[7.5rem]">
          {LOCALES.map(({ code, label }) => (
            <a
              key={code}
              href={getPath(code)}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-xs transition-colors hover:bg-elevated ${
                code === current ? 'text-fg font-semibold' : 'text-fg-muted'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
