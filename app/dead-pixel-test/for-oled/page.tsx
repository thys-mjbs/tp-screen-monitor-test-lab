import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for OLED Screens: Free Online OLED Check'
const description = 'Test your OLED display for hot pixels, dead pixels, and uneven aging using solid-colour fullscreen panels. Free browser tool, no download required.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-oled` },
  openGraph: {
    title,
    description,
    url: `${appUrl}/dead-pixel-test/for-oled`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const COLORS: ColorEntry[] = [
  { hex: '#000000', label: 'Black' },
  { hex: '#FFFFFF', label: 'White' },
  { hex: '#FF0000', label: 'Red' },
  { hex: '#00FF00', label: 'Green' },
  { hex: '#0000FF', label: 'Blue' },
  { hex: '#808080', label: 'Grey' },
]

const faqs = [
  {
    q: 'Do OLED screens get dead pixels?',
    a: 'OLED screens do not typically develop dead pixels in the same way LCD panels do, because each OLED pixel generates its own light without a transistor-based liquid crystal layer. Instead, OLED displays are more likely to develop hot pixels (stuck bright), uneven subpixel aging, or localised brightness loss in areas that have displayed static content for extended periods. A fully non-functional pixel that shows as permanently black is possible but less common than on LCD displays.',
  },
  {
    q: 'What is a hot pixel on OLED?',
    a: 'A hot pixel on an OLED display is a pixel or subpixel that emits light at a higher brightness than surrounding pixels, appearing as a bright dot against a dark background. This can be caused by a manufacturing defect in the organic emitter layer or by differential aging from static content. Hot pixels are most visible during the black screen phase of this test.',
  },
  {
    q: 'How do I test my OLED for burn-in versus dead pixels?',
    a: 'Dead pixels appear as a fixed dot that is consistently different from the background on every colour. Burn-in on OLED appears as a faint ghost image, typically a shadow of a UI element like a taskbar or dock, that is only faintly visible against certain backgrounds. For burn-in testing, the grey panels in this test and the Image Retention Test tool are most effective. True pixel defects are visible consistently across all background colours.',
  },
  {
    q: 'Which test colour is most useful for OLED?',
    a: 'The black screen is the most revealing for OLED displays. Because OLED pixels switch off completely when showing black (producing true black), any pixel that remains illuminated stands out sharply. Hot pixels, stuck subpixels, and areas of uneven aging are most visible against the true black background that OLED produces.',
  },
  {
    q: 'Can OLED dead pixels be fixed?',
    a: 'No. A non-functional OLED pixel has either lost its ability to emit light or is emitting at an incorrect level due to organic material degradation. There is no software technique that can restore the organic emitters in a failed pixel. If your OLED display develops pixel defects during the warranty period, a replacement is the appropriate remedy.',
  },
]

const related = ['dead-pixel-test', 'image-retention-test', 'black-screen', 'fullscreen-colour-cycle']
  .map((s) => getToolBySlug(s))
  .filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For OLED', item: `${appUrl}/dead-pixel-test/for-oled` },
  ],
}

export default function DeadPixelTestOledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For OLED' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for OLED Screens
          </h1>
          <p className="text-fg-muted">
            Cycle through solid-colour panels to detect hot pixels, dead pixels, and uneven aging on your OLED display.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How OLED pixel defects differ from LCD</h2>
            <p>
              OLED (Organic Light-Emitting Diode) panels generate light from individual organic
              compound emitters in each pixel rather than from a shared backlight. This means an
              OLED pixel that stops functioning completely will appear as a black dot against bright
              backgrounds, just as on an LCD. However, the more common OLED defect is a hot pixel:
              an emitter that is stuck at full brightness and appears as a bright dot against the
              true black that OLED produces. The black panel is the most effective test colour for
              OLED displays precisely because OLED achieves a real, complete black.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Testing for uneven aging on OLED</h2>
            <p>
              OLED organic emitters gradually lose brightness with use, and this degradation happens
              faster in areas that display bright, static content for long periods. This is the mechanism
              behind OLED burn-in: the emitters in an area that previously displayed a bright static
              element, such as a desktop taskbar or navigation bar, age faster than the surrounding
              pixels and produce less light over time. On a grey or white background, this appears as
              a faint dark shadow in the shape of the previously displayed content.
            </p>
            <p>
              This test&apos;s grey panel at mid brightness is one of the best simple tools for spotting
              early-stage uneven aging. If you see a ghost image of your operating system interface
              on the grey background, your display has some degree of image retention or early burn-in.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Recommended test sequence for OLED</h2>
            <p>
              Start with the black panel and scan the entire display carefully for any bright dot or
              area. Then check the white panel for dark dots. Use the grey panel to look for faint
              ghosts of previously displayed content. The primary colour panels (red, green, blue)
              help identify which subpixels within a pixel have failed. For a complete OLED health
              check, follow this test with the Image Retention Test, which uses a high-contrast
              checkerboard pattern followed by a uniform grey panel to make retention visible.
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
              {related.map((tool) => (
                <ToolCard key={tool!.slug} tool={tool!} />
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  )
}
