import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ThemeToggle } from './ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'

export async function Header() {
  const t = await getTranslations('nav')

  const navLinks = [
    { label: t('tools'), href: '/#tools' },
    { label: t('blog'), href: '/blog' },
    { label: t('about'), href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/icon-512.png"
            alt="Screen Test Lab icon"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-bold text-fg text-sm sm:text-base leading-tight">
            Screen <span className="text-accent">Test</span> Lab
          </span>
        </Link>

        {/* Nav + Locale + Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-fg-muted hover:text-fg hover:bg-elevated transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}
