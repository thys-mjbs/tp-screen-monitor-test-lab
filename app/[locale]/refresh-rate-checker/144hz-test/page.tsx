import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { RefreshRateChecker } from '@/components/tools/RefreshRateChecker'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = '144Hz Monitor Test: Confirm Your Refresh Rate Online'
const description = 'Check that your 144Hz monitor is actually running at 144Hz. A wrong cable, display setting, or resolution can silently cap you at 60Hz. Free instant browser test.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/refresh-rate-checker/144hz-test` },
  openGraph: {
    title, description,
    url: `${appUrl}/refresh-rate-checker/144hz-test`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'How do I know if my monitor is running at 144Hz?',
    a: 'This checker reads the actual frame rate your browser is using and displays it as Hz. If the result shows 144Hz, your system is running at the correct rate. If it shows 60Hz or another value, your monitor is not operating at its rated speed. The checker measures real operating rate, not the hardware maximum, so it reflects your actual configuration.',
  },
  {
    q: 'My monitor is 144Hz but the checker shows 60Hz. How do I fix this?',
    a: 'The most common cause is an incorrect Windows display setting. Right-click the desktop, select Display Settings, then Advanced Display Settings, and change the refresh rate dropdown to 144Hz. The second most common cause is the wrong cable: HDMI 1.4 cannot carry 144Hz at 1080p. Use DisplayPort 1.2 or HDMI 2.0 or higher. Also check that you are using the correct port on your graphics card, as some integrated or secondary GPU outputs have lower bandwidth limits.',
  },
  {
    q: 'Does running at 4K reduce maximum refresh rate?',
    a: 'Yes. Higher resolutions require more bandwidth, which limits the maximum refresh rate available over a given cable and connection. At 4K, DisplayPort 1.4 supports up to 144Hz with DSC (Display Stream Compression), while HDMI 2.1 supports 4K at 144Hz uncompressed. At 1440p, DisplayPort 1.2 supports 144Hz and DisplayPort 1.4 supports up to 240Hz. If you are running 1440p or 4K and seeing 60Hz, check your cable and connection standard.',
  },
  {
    q: 'Is 144Hz noticeably better than 120Hz?',
    a: 'The difference between 120Hz and 144Hz is small but present. At 120Hz, each frame is displayed for 8.3ms. At 144Hz, it is 6.9ms, a 17% reduction. In fast-paced gaming this produces marginally smoother cursor tracking and slightly lower display latency. Most users can detect the difference in direct comparison but would not notice it in everyday use. The jump from 60Hz to either 120Hz or 144Hz is far more impactful.',
  },
  {
    q: 'What resolution can I run at 144Hz on a 144Hz monitor?',
    a: 'For 1080p at 144Hz, you need DisplayPort 1.2 or HDMI 2.0. For 1440p at 144Hz, you need DisplayPort 1.2 or HDMI 2.0. For 4K at 144Hz, you need DisplayPort 1.4 with DSC or HDMI 2.1. Check both your monitor\'s port specifications and your graphics card\'s output specifications, as the connection must meet the bandwidth requirement at both ends.',
  },
]

const related = ['refresh-rate-checker', 'motion-blur-test', 'input-lag-test', 'overdrive-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Refresh Rate Checker', item: `${appUrl}/refresh-rate-checker` },
    { '@type': 'ListItem', position: 3, name: '144Hz Test', item: `${appUrl}/refresh-rate-checker/144hz-test` },
  ],
}

export default function RefreshRate144hzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Refresh Rate Checker', href: '/refresh-rate-checker' }, { label: '144Hz Test' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            144Hz Monitor Test
          </h1>
          <p className="text-fg-muted">
            Instantly confirm whether your 144Hz monitor is running at its full rated refresh rate or has been silently capped by a setting or cable issue.
          </p>
          <div className="pt-1">
            <RefreshRateChecker />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why 144Hz monitors often run at 60Hz out of the box</h2>
            <p>
              When you connect a new monitor, Windows does not automatically select its maximum refresh
              rate. It defaults to the safe 60Hz fallback that is guaranteed to work across all
              connections. A 144Hz monitor connected via an HDMI 1.4 cable will operate at 60Hz not
              because anything is broken, but because HDMI 1.4 does not have enough bandwidth to carry
              144Hz at 1080p. Switching to DisplayPort or HDMI 2.0 and then manually setting 144Hz in
              Windows display settings resolves this in most cases.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">The correct cable for 144Hz</h2>
            <p>
              For 1080p at 144Hz: any DisplayPort 1.2 cable, or an HDMI 2.0 cable. A standard
              HDMI 1.4 cable will cap you at 60Hz. For 1440p at 144Hz: DisplayPort 1.2 or HDMI 2.0.
              For 4K at 144Hz: DisplayPort 1.4 with Display Stream Compression, or HDMI 2.1. Always
              use the highest-rated cable available and connect to the DisplayPort or HDMI output on
              your graphics card rather than a motherboard video output, which is typically limited to
              lower refresh rates.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Setting 144Hz in Windows</h2>
            <p>
              Right-click the desktop and select Display Settings. Scroll down and click Advanced
              Display. In the refresh rate dropdown, select 144Hz. If 144Hz is not listed, check your
              cable and port first, as the option only appears when Windows detects a valid connection
              that supports the rate. On laptops, also check your GPU control panel software, as some
              laptops route external monitors through the integrated GPU at lower refresh rates unless
              configured to use the dedicated GPU output.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-fg">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="group rounded-xl border border-border bg-surface overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-medium text-fg text-sm list-none select-none hover:bg-elevated transition-colors">
                  {q}
                  <span className="shrink-0 text-fg-muted text-lg leading-none group-open:rotate-45 transition-transform duration-150">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-fg-muted leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-fg">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((tool) => <ToolCard key={tool!.slug} tool={tool!} />)}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
