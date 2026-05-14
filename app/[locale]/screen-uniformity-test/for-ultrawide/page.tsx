import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ScreenUniformityTest } from '@/components/tools/ScreenUniformityTest'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Ultrawide Monitor Uniformity Test: Check for Brightness and Colour Uniformity'
const description = 'Test your ultrawide monitor for brightness uniformity, colour uniformity, and backlight consistency across its wide panel. Free online tool, works in any browser.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/screen-uniformity-test/for-ultrawide` },
  openGraph: {
    title, description,
    url: `${appUrl}/screen-uniformity-test/for-ultrawide`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Why is uniformity more important on ultrawide monitors?',
    a: 'Ultrawide monitors span a much greater horizontal distance than standard displays, which increases the likelihood of backlight and colour uniformity variation across the panel. A 34-inch or 49-inch ultrawide panel requires a backlight system that illuminates a much wider area than a 27-inch monitor, and manufacturing tolerances mean that brightness or colour temperature can vary noticeably between the centre and the edges or between the left and right halves of the display. This variation is most noticeable in productivity and content creation work where large areas of similar colour are displayed.',
  },
  {
    q: 'What does poor uniformity look like on an ultrawide monitor?',
    a: 'Poor uniformity on an ultrawide monitor typically appears as a visible brightness gradient, with one side or corner of the screen appearing brighter or dimmer than the opposite side. Colour uniformity issues appear as a slight colour tint shift, such as one half of the screen appearing slightly cooler (blue) and the other slightly warmer (yellow). Both types are most visible on grey or near-white solid-colour panels. Severe uniformity issues can also cause visible bands or blotches across the panel.',
  },
  {
    q: 'How do I use the uniformity test with my ultrawide monitor?',
    a: 'Open this page in fullscreen mode on your ultrawide monitor. Start with the grey panel at around 50% brightness on your monitor. Step back from the display to approximately your normal viewing distance and look at the panel as a whole rather than focusing on a specific area. Look for any gradient in brightness from left to right or top to bottom, and any area that appears to have a different colour temperature. Cycle through the white, black, and red panels to confirm any issues you observe.',
  },
  {
    q: 'Is some non-uniformity normal on ultrawide monitors?',
    a: 'Yes. Some degree of brightness and colour non-uniformity is present on virtually all monitors, including premium models. Industry standards allow for a certain tolerance, typically up to 10-15% brightness variation across the panel on consumer displays. Very slight variation that is only visible on solid-colour panels at close viewing distances is considered normal. Variation that is clearly visible at normal viewing distance during everyday use, particularly on curved ultrawide panels, may indicate a quality issue worth raising with the manufacturer.',
  },
  {
    q: 'Do curved ultrawide monitors have worse uniformity?',
    a: 'Curved panels can sometimes have slightly worse uniformity than flat panels because the curvature introduces additional manufacturing complexity. However, many curved ultrawide monitors use uniform backlighting and panel calibration that achieves good results. The curve can also make uniformity harder to assess because the angle of viewing varies across the panel width. Test from your normal seated viewing distance rather than at close range to get the most representative assessment.',
  },
]

const related = ['screen-uniformity-test', 'backlight-bleed-test', 'gamma-calibration-check', 'colour-temperature-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Screen Uniformity Test', item: `${appUrl}/screen-uniformity-test` },
    { '@type': 'ListItem', position: 3, name: 'For Ultrawide', item: `${appUrl}/screen-uniformity-test/for-ultrawide` },
  ],
}

export default function ScreenUniformityUltrawidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Screen Uniformity Test', href: '/screen-uniformity-test' }, { label: 'For Ultrawide' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Ultrawide Monitor Uniformity Test
          </h1>
          <p className="text-fg-muted">
            Check your ultrawide monitor for backlight brightness uniformity and colour consistency across its wide panel using solid-colour fullscreen patterns.
          </p>
          <div className="pt-1">
            <ScreenUniformityTest />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why ultrawide panels face greater uniformity challenges</h2>
            <p>
              Standard widescreen monitors (16:9) have a horizontal span of around 60 cm at 27 inches.
              Ultrawide monitors at 21:9 or 32:9 aspect ratios span 80 cm to over 110 cm horizontally.
              This greater span means the backlight must distribute light evenly over a much larger area,
              and the colour filter and panel layers must maintain consistent optical properties from edge
              to edge. At these widths, even small variations in LED brightness or colour temperature
              across the backlight array become visible as gradients or tint shifts on solid-colour content.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Setting up the test for accurate results</h2>
            <p>
              For the most accurate assessment, allow your ultrawide monitor to warm up for at least 30
              minutes before testing, as backlight uniformity often changes as the display reaches its
              operating temperature. Set your monitor brightness to around 50 to 70 percent of maximum,
              as uniformity issues are typically most visible at mid-range brightness levels. View the
              test in fullscreen from your normal seated distance, not from close up, to get a
              representative picture of how the display looks in actual use.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">What to do if you find uniformity issues</h2>
            <p>
              If the uniformity issue appeared when the monitor was new or has developed over time and
              is clearly visible during normal use, document it with photographs taken in a dim room
              from your normal viewing distance. Check the manufacturer&apos;s warranty policy. Some
              manufacturers offer calibration or panel replacement for uniformity issues that fall
              outside their published tolerance specifications. If your monitor is new and within its
              return window, a clearly visible uniformity defect is generally valid grounds for a
              replacement or refund.
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
