'use client'

import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

export function LocaleSwitcher() {
  const pathname = usePathname()
  const isEs = pathname === '/es' || pathname.startsWith('/es/')
  const current = isEs ? 'es' : 'en'

  const getPath = (locale: string) => {
    if (locale === 'es') {
      return isEs ? pathname : `/es${pathname === '/' ? '' : pathname}`
    }
    return isEs ? pathname.slice(3) || '/' : pathname
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.href = getPath(e.target.value)
  }

  return (
    <div className="flex items-center gap-1 text-fg-muted">
      <Globe size={14} className="shrink-0" />
      <select
        value={current}
        onChange={handleChange}
        className="bg-transparent text-xs font-medium text-fg-muted hover:text-fg cursor-pointer outline-none border-none appearance-none pr-1"
        aria-label="Select language"
      >
        {LOCALES.map(({ code, label }) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
    </div>
  )
}
