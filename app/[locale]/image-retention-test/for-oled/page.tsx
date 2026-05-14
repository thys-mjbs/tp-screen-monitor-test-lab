import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ImageRetentionTest } from '@/components/tools/ImageRetentionTest'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'OLED Burn-In Test: Check for Image Retention Online'
const description = 'Test your OLED display for burn-in and image retention using high-contrast patterns followed by a grey reveal panel. Free browser tool, no download required.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/image-retention-test/for-oled` },
  openGraph: {
    title, description,
    url: `${appUrl}/image-retention-test/for-oled`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'What is OLED burn-in?',
    a: 'OLED burn-in is the permanent degradation of organic light-emitting pixels in areas that have displayed bright, static content for extended periods. The organic compounds that produce light in each pixel have a finite lifespan, and pixels used more intensively age faster than surrounding pixels. Over time, this differential aging creates a visible ghost image of the previously displayed static element (such as a taskbar, navigation bar, or game HUD) that remains faintly visible regardless of what is being shown.',
  },
  {
    q: 'Is OLED burn-in permanent?',
    a: 'Yes. Once organic pixel degradation has occurred, it cannot be reversed. The affected pixels have genuinely lost some of their brightness capacity. This distinguishes true burn-in from temporary image retention, which fades after displaying varied content for a period. If you run this test and the ghost image disappears after a few minutes of normal use, it was temporary retention. If it remains visible after extended use, it is permanent burn-in.',
  },
  {
    q: 'How long does it take for OLED burn-in to occur?',
    a: 'The timeline varies significantly based on usage. For typical mixed-use scenarios with varied content and moderate brightness, most OLED displays maintain good uniformity for several years. Risk increases substantially with static UI elements at high brightness for many hours per day. Gaming with a fixed HUD at high brightness is the highest-risk use case. Streaming and video content, which changes constantly, poses much lower burn-in risk than static interfaces.',
  },
  {
    q: 'How do I use this test to check for OLED burn-in?',
    a: 'The test displays a high-contrast checkerboard pattern for a period, then switches to a uniform grey reveal panel. Any areas of uneven aging on your OLED will appear as faint light or dark patches against the grey background. Run the test in a dim room and allow time for your eyes to adapt. The grey reveal is most effective at a brightness level where the ghost content, if present, would have originally appeared. If you see a ghost of your taskbar or any static UI element, your display has image retention or burn-in.',
  },
  {
    q: 'Can I fix OLED burn-in?',
    a: 'Temporary image retention can often be reduced by running a pixel refresher cycle, which most OLED TVs and monitors perform automatically after shutdown or offer as a manual option in the service menu. True burn-in from permanent organic degradation cannot be reversed by any software technique. Some users report that extended display of varied moving content slightly reduces the apparent severity of mild burn-in by aging the surrounding pixels to a closer match, but this does not restore the affected pixels.',
  },
]

const related = ['image-retention-test', 'dead-pixel-test', 'fullscreen-colour-cycle', 'black-screen']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Image Retention Test', item: `${appUrl}/image-retention-test` },
    { '@type': 'ListItem', position: 3, name: 'For OLED', item: `${appUrl}/image-retention-test/for-oled` },
  ],
}

export default function ImageRetentionOledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Image Retention Test', href: '/image-retention-test' }, { label: 'For OLED' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            OLED Burn-In Test
          </h1>
          <p className="text-fg-muted">
            Check your OLED display for image retention and burn-in. The test displays a high-contrast pattern then reveals any uneven aging on a uniform grey background.
          </p>
          <div className="pt-1">
            <ImageRetentionTest />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How OLED burn-in occurs</h2>
            <p>
              Each pixel in an OLED display is made of organic light-emitting compounds that gradually
              lose efficiency with use. Pixels that are used more intensively, displaying bright content
              for long periods, age faster than surrounding pixels. Over time this creates measurable
              brightness differences across the panel. When the differential aging is large enough, it
              becomes visible as a ghost image in the shape of whatever static content was displayed most.
              The most common sources are desktop taskbars, game HUDs, streaming service logos, and
              navigation bars in phone and TV interfaces.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Burn-in versus temporary image retention</h2>
            <p>
              Temporary image retention is a normal OLED phenomenon where a recently displayed image
              leaves a faint ghost that disappears within minutes to hours after displaying varied
              content. It is caused by a temporary polarisation shift in the organic material rather
              than permanent degradation. True burn-in is permanent: the ghost image remains visible
              even after extended display of varied content. If you see a ghost image in this test that
              fades after 10 to 20 minutes of normal use, it is likely temporary retention rather than
              permanent burn-in.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How to reduce burn-in risk</h2>
            <p>
              Keep screen brightness at a moderate level rather than maximum. Enable your display&apos;s
              pixel shift or logo dimming features if available. Avoid leaving static content such as
              paused games, desktop interfaces, or news tickers on screen for extended periods at high
              brightness. Use screen savers or auto-sleep settings to blank the display during inactivity.
              Modern OLED TVs and monitors include automatic pixel refresher cycles that run at shutdown
              to partially compensate for differential aging.
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
