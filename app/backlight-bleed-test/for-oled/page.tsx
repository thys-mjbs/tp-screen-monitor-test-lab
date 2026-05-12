import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Backlight Bleed on OLED Screens: What to Check Instead'
const description = 'OLED displays have no backlight and cannot exhibit backlight bleed. Learn what causes dark-panel glow on OLED, and which tests reveal real OLED display issues.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/backlight-bleed-test/for-oled` },
  openGraph: {
    title, description,
    url: `${appUrl}/backlight-bleed-test/for-oled`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Can OLED screens have backlight bleed?',
    a: 'No. Backlight bleed is a defect specific to LCD displays that use a separate backlight layer behind the liquid crystal panel. OLED screens generate light directly from individual organic pixels, so there is no backlight to bleed. If you are seeing uneven brightness on a dark panel from an OLED display, it is caused by a different mechanism entirely.',
  },
  {
    q: 'What causes the glow I see on dark scenes on my OLED?',
    a: 'The most common cause is OLED panel glow from near-black pixels that are not fully off. On WOLED (white OLED) panels used in many LG and Sony TVs and monitors, very dark near-black content can produce a slight haze because the white OLED emitter subpixel is never fully extinguished at low brightness. This is different from backlight bleed and is inherent to WOLED panel design. True black areas (where pixels are fully off) on any OLED will be completely dark.',
  },
  {
    q: 'Why do some OLED TVs have brighter patches in the corners on a black screen?',
    a: 'Corner or edge brightening on an OLED TV in a completely dark room is usually caused by the proximity compensation zone. OLED panels apply brightness boosts to areas far from the centre to maintain perceived uniformity, and these compensation zones sometimes become visible at very low ambient brightness. It can also be caused by reflections from the panel surface in certain lighting conditions, rather than light emission from the display itself.',
  },
  {
    q: 'Is OLED glow a defect that qualifies for warranty replacement?',
    a: 'OLED panel glow visible on near-black content is generally considered a panel characteristic rather than a defect for most manufacturers. It falls within their specified uniformity tolerances. Significant bright patches visible on a true black screen that are uniform and consistent may qualify depending on the manufacturer and severity. Contact your manufacturer with photos taken in a darkened room as evidence.',
  },
  {
    q: 'What should I test on an OLED display instead of backlight bleed?',
    a: 'For OLED health, the most important tests are the Image Retention Test (checks for burn-in), the Dead Pixel Test run with black first (checks for hot pixels), and the IPS Glow Test run on a black background (reveals panel uniformity issues). These tests target the failure modes specific to OLED technology rather than LCD-specific issues like backlight bleed.',
  },
]

const related = ['backlight-bleed-test', 'ips-glow-test', 'image-retention-test', 'black-screen']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Backlight Bleed Test', item: `${appUrl}/backlight-bleed-test` },
    { '@type': 'ListItem', position: 3, name: 'For OLED', item: `${appUrl}/backlight-bleed-test/for-oled` },
  ],
}

export default function BacklightBleedOledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Backlight Bleed Test', href: '/backlight-bleed-test' }, { label: 'For OLED' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Backlight Bleed on OLED Screens
          </h1>
          <p className="text-fg-muted">
            OLED displays cannot have backlight bleed — but they have their own dark-panel issues worth checking. Use a pure black panel to evaluate your OLED in a dark room.
          </p>
          <div className="pt-1">
            <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why OLED cannot have backlight bleed</h2>
            <p>
              Backlight bleed occurs when light from an LCD panel&apos;s backlight escapes around the edges
              of the liquid crystal layer and appears as bright patches in the corners or edges of a
              dark screen. OLED displays do not use a backlight at all. Each pixel in an OLED panel is
              an individual light-emitting diode that generates its own light. When an OLED pixel
              displays black, it simply switches off completely. There is no backlight that could bleed,
              so the phenomenon is physically impossible on OLED technology.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">What OLED dark-panel issues actually look like</h2>
            <p>
              OLED panels can still show visible non-uniformity on dark content, but for different
              reasons. WOLED (White OLED) panels, used in many LG and Sony displays and TVs, have a
              white subpixel emitter that can produce a slight haze on very dark near-black content
              because it is not fully extinguished at low output levels. This differs from backlight
              bleed in that it tends to be more evenly distributed rather than concentrated at edges.
            </p>
            <p>
              Hot pixels — individual pixels that are stuck emitting light — appear as bright dots
              against the true black that OLED produces. These are the OLED equivalent of stuck pixels
              on LCD and are more visible on OLED precisely because the surrounding black is genuinely
              dark. Panel aging non-uniformity can also cause faint bright patches over time in areas
              of high static content use.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How to evaluate your OLED on a black panel</h2>
            <p>
              Expand this panel to fullscreen in a completely darkened room and allow your eyes to
              adapt for about 30 seconds. Look for any bright dots (hot pixels), bright or dim patches,
              or any consistent glow along specific areas of the panel. Move your head position while
              observing: true emissive panel non-uniformity stays fixed relative to the screen, while
              reflections from room lighting or panel surface coatings shift as you move. Follow up
              with the Image Retention Test to check for burn-in using a grey reveal panel.
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
