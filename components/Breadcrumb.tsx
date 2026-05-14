import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export async function Breadcrumb({ items }: BreadcrumbProps) {
  const t = await getTranslations('breadcrumb')
  const allItems = [{ label: t('home'), href: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-fg-muted flex-wrap">
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1
        return (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight size={14} className="text-border shrink-0" />}
            {isLast || !item.href ? (
              <span className={isLast ? 'text-fg font-medium' : ''}>{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
