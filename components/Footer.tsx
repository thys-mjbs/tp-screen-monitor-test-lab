import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

const toolLinks = [
  { labelKey: 'Dead Pixel Test', href: '/dead-pixel-test' },
  { labelKey: 'Backlight Bleed Test', href: '/backlight-bleed-test' },
  { labelKey: 'Refresh Rate Checker', href: '/refresh-rate-checker' },
  { labelKey: 'White Screen', href: '/white-screen' },
  { labelKey: 'Black Screen', href: '/black-screen' },
]

export async function Footer() {
  const t = await getTranslations('footer')
  const tLinks = await getTranslations('footerLinks')

  const siteLinks = [
    { label: tLinks('allTools'), href: '/#tools' },
    { label: tLinks('blog'), href: '/blog' },
    { label: tLinks('about'), href: '/about' },
    { label: tLinks('contact'), href: '/contact' },
    { label: tLinks('privacy'), href: '/privacy' },
    { label: tLinks('terms'), href: '/terms' },
  ]

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-brand-800">

          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/icon-512.png"
                alt="Screen Test Lab icon"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-bold text-brand-50 text-base">
                Screen <span className="text-accent">Test</span> Lab
              </span>
            </Link>
            <p className="text-sm text-brand-300 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Popular tools */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">{t('popularTools')}</p>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-200 hover:text-accent transition-colors">
                    {link.labelKey}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">{t('site')}</p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-200 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="pt-8 text-xs text-brand-400 text-center">
          &copy; {new Date().getFullYear()} Screen Test Lab. {t('copyright')}
        </p>

      </div>
    </footer>
  )
}
