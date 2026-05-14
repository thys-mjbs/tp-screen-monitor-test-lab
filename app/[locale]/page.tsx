import type { Metadata } from 'next'
import { tools, categoryMeta, getToolsByCategory } from '@/lib/tools'
import { ToolCard } from '@/components/ToolCard'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export const metadata: Metadata = {
  title: 'Free Monitor & Screen Tests Online: Dead Pixels, Backlight Bleed & More',
  description:
    'Free browser-based tools to test your monitor for dead pixels, backlight bleed, refresh rate, colour accuracy, and more. No download or sign-up required.',
  alternates: { canonical: appUrl },
  openGraph: {
    title: 'Free Monitor & Screen Tests Online',
    description:
      'Test your display for dead pixels, backlight bleed, refresh rate, and colour accuracy. 25 free tools, no download needed.',
    url: appUrl,
    type: 'website',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Screen & Monitor Test Lab',
  url: appUrl,
  logo: `${appUrl}/og-image.png`,
  description: 'Free browser-based monitor and screen testing tools.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${appUrl}/contact`,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Screen & Monitor Test Lab',
  url: appUrl,
}

const categories: Array<{ key: 'visual-test' | 'screen-state' | 'checker' }> = [
  { key: 'visual-test' },
  { key: 'screen-state' },
  { key: 'checker' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-fg tracking-tight leading-tight">
            Free Monitor &amp; Screen Tests Online
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed">
            Test your display for dead pixels, backlight bleed, refresh rate, colour accuracy, and more.
            Works in any browser. No download, no sign-up.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-fg-muted font-medium pt-1">
            <span>{tools.length} free tools</span>
            <span>No sign-up required</span>
            <span>Browser-based</span>
          </div>
        </section>

        {/* Tool grid by category */}
        <section id="tools" className="space-y-12">
          {categories.map(({ key }) => {
            const meta = categoryMeta[key]
            const categoryTools = getToolsByCategory(key)
            return (
              <div key={key} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-fg">{meta.label}</h2>
                  <p className="text-sm text-fg-muted">{meta.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Trust strip */}
        <section className="border-t border-border pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">{tools.length}</p>
              <p className="text-sm text-fg-muted">Free tools</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">100%</p>
              <p className="text-sm text-fg-muted">Browser-based, no install</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">0</p>
              <p className="text-sm text-fg-muted">Sign-ups or accounts needed</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
