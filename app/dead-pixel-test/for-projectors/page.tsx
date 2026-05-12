import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for Projectors: Check Your Projector Image'
const description = 'Test your DLP, LCD, or laser projector for dead pixels, dark spots, and image defects using solid-colour fullscreen panels. Free online tool, works in any browser.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-projectors` },
  openGraph: {
    title, description,
    url: `${appUrl}/dead-pixel-test/for-projectors`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const COLORS: ColorEntry[] = [
  { hex: '#FFFFFF', label: 'White' },
  { hex: '#000000', label: 'Black' },
  { hex: '#FF0000', label: 'Red' },
  { hex: '#00FF00', label: 'Green' },
  { hex: '#0000FF', label: 'Blue' },
  { hex: '#808080', label: 'Grey' },
]

const faqs = [
  {
    q: 'Can projectors have dead pixels?',
    a: 'Yes. Projectors that use LCD imaging panels or DLP micromirror chips can develop pixel-level defects. On a three-LCD projector, a failed pixel in one of the red, green, or blue panels appears as a fixed-colour dot on the projected image. On a DLP projector, a stuck micromirror produces either a bright dot (mirror stuck in the on-position) or a dark dot (mirror stuck off). These defects are visible in the projected image just as dead pixels appear on a direct-view display.',
  },
  {
    q: 'How does a projector dead pixel appear on screen?',
    a: 'A dead pixel on a projector typically appears as a small fixed dot that does not change with the projected content. On a DLP projector, a stuck-on micromirror produces a consistently bright dot, usually white or coloured, that is visible against dark content. A stuck-off mirror produces a dark dot visible against bright content. On an LCD projector, a pixel defect in one colour panel produces a dot in the corresponding colour that is visible when the screen background contrasts with it.',
  },
  {
    q: 'How do I use this test with a projector?',
    a: 'Connect your projector to the device running this test and set it to display from that source. Enter fullscreen mode and cycle through each solid colour. In a darkened room, look at the projected image on the screen from your normal viewing distance. Look for any consistent dot or spot that does not change with the background colour. White and grey panels are best for finding dark dead pixels. The black panel reveals stuck-on or bright pixels. Primary colours isolate colour channel defects.',
  },
  {
    q: 'Is a projector dead pixel covered by warranty?',
    a: 'Projector warranty policies on pixel defects vary significantly by manufacturer and price tier. Many projector manufacturers define acceptable defect counts that allow a small number of stuck pixels without offering a replacement. Professional and higher-priced projectors often have stricter pixel defect policies. Check your specific product\'s warranty documentation. For a brand-new projector, test immediately and document any defects within the return window.',
  },
  {
    q: 'Can a projector dead pixel be repaired?',
    a: 'DLP projector stuck micromirror defects are hardware failures in the DMD (Digital Micromirror Device) chip and cannot be repaired without replacing the chip itself. LCD projector pixel defects in the imaging panels similarly cannot be fixed by software methods. Some users attempt the rapid-colour pixel cycling technique (the Stuck Pixel Fixer tool) on projectors with limited success. If within warranty, a manufacturer replacement is the appropriate remedy for a visible defect on a new unit.',
  },
]

const related = ['dead-pixel-test', 'white-screen', 'black-screen', 'fullscreen-colour-cycle']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For Projectors', item: `${appUrl}/dead-pixel-test/for-projectors` },
  ],
}

export default function DeadPixelProjectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For Projectors' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for Projectors
          </h1>
          <p className="text-fg-muted">
            Cycle through solid-colour fullscreen panels to find dead pixels, stuck micromirrors, or imaging panel defects on your DLP, LCD, or laser projector.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How pixel defects occur in projectors</h2>
            <p>
              Projectors create images using one of two core technologies. LCD projectors pass light
              through three liquid crystal panels (one for each colour channel). A failed pixel in any
              of the three panels results in a coloured dot in the projected image. DLP projectors use
              a Digital Micromirror Device (DMD) chip containing hundreds of thousands of tiny mirrors,
              each of which tilts to direct light either through the lens (on) or away (off). A mirror
              that becomes stuck in either position produces a permanently bright or dark dot in the
              projected image.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Running the test effectively with a projector</h2>
            <p>
              Set up in a completely darkened room for the most revealing test. Project onto a clean,
              flat white surface — a projector screen or white wall — and allow the projector to warm
              up fully before testing. Use the fullscreen button and cycle through each colour slowly,
              scanning the entire projected image. A white panel most clearly shows dark dead pixels
              from a stuck-off DLP mirror or a failed LCD pixel. The black panel reveals stuck-on
              bright defects that are otherwise masked by bright content.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Distinguishing projector defects from screen artefacts</h2>
            <p>
              When you identify a suspicious spot, verify it is in the projector and not on your
              projection surface by slightly moving the projector to shift the image position on the
              screen. A true projector pixel defect will remain at the same relative position within
              the image as the image moves. A mark or defect on the projection surface will stay in
              the same absolute position on the screen while the projected image shifts around it.
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
