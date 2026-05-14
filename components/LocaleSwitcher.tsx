'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LocaleSwitcher() {
  const pathname = usePathname()
  const isEs = pathname === '/es' || pathname.startsWith('/es/')

  const enPath = isEs ? pathname.slice(3) || '/' : pathname
  const esPath = isEs ? pathname : `/es${pathname === '/' ? '' : pathname}`

  return (
    <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-semibold">
      <Link
        href={enPath}
        className={`px-2.5 py-1.5 transition-colors ${!isEs ? 'bg-accent text-white' : 'text-fg-muted hover:text-fg hover:bg-elevated'}`}
      >
        EN
      </Link>
      <Link
        href={esPath}
        className={`px-2.5 py-1.5 transition-colors ${isEs ? 'bg-accent text-white' : 'text-fg-muted hover:text-fg hover:bg-elevated'}`}
      >
        ES
      </Link>
    </div>
  )
}
