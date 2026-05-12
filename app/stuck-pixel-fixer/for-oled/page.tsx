import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { StuckPixelFixer } from '@/components/tools/StuckPixelFixer'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Stuck Pixel Fixer for OLED Screens'
const description = 'Try to fix a stuck or hot pixel on your OLED display using rapidly cycling colours. Understand how OLED pixel defects differ from LCD and when to seek a replacement.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/stuck-pixel-fixer/for-oled` },
  openGraph: {
    title, description,
    url: `${appUrl}/stuck-pixel-fixer/for-oled`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'What is a stuck pixel on an OLED screen?',
    a: 'On an OLED display, a stuck pixel is an organic light-emitting pixel that has become fixed at a colour or brightness level and cannot change normally. Because OLED pixels generate their own light independently, a stuck OLED pixel is typically stuck in an on-state rather than off, appearing as a bright coloured dot — most commonly red, green, blue, or white — against dark content. This differs from LCD stuck pixels, which are stuck in a partially open or closed state of the liquid crystal layer.',
  },
  {
    q: 'What is a hot pixel on OLED?',
    a: 'A hot pixel on an OLED display is a pixel or subpixel that emits light at higher than normal brightness, appearing as a bright dot against dark backgrounds. Hot pixels are most visible against the true black that OLED produces, which is why they are more noticeable on OLED than on LCD displays where the backlight masks them against dark content. A hot pixel may be a manufacturing defect or may develop during use if a specific pixel is driven at high brightness for an extended period.',
  },
  {
    q: 'Does rapid colour flashing fix OLED pixel defects?',
    a: 'It may help in some cases, but with important limitations. The rapid colour cycling technique works on LCD displays by stimulating the liquid crystal molecules in a stuck state to move. On OLED, the mechanism is different: the flashing can sometimes resolve a temporarily stuck organic emitter by cycling its electrical state. However, if the defect is caused by actual degradation of the organic material or a failed transistor in the pixel circuit, flashing will not fix it. Results are unpredictable and OLED pixels are generally considered harder to fix than LCD stuck pixels.',
  },
  {
    q: 'How long should I run the pixel fixer on my OLED?',
    a: 'Run the tool over the stuck pixel area for 20 to 30 minutes. Some users report improvement within a few minutes; others see no change after longer sessions. Because OLED organic emitters are sensitive to sustained high-intensity driving, avoid running the fixer at maximum brightness for extended periods beyond 30 minutes on the same spot. If there is no improvement after one or two sessions, the defect is likely permanent and the tool will not help further.',
  },
  {
    q: 'When is an OLED pixel defect covered under warranty?',
    a: 'Warranty coverage for pixel defects varies by manufacturer and display class. Most manufacturers define a minimum number of defective pixels required before a replacement is offered, though premium OLED monitors and many OLED TVs now offer zero-bright-pixel guarantees. Check your specific warranty documentation. If you are within the return or warranty period, document the defect with a photograph taken in a darkened room against a black background and contact the manufacturer\'s support before the warranty period expires.',
  },
]

const related = ['stuck-pixel-fixer', 'dead-pixel-test', 'image-retention-test', 'black-screen']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Stuck Pixel Fixer', item: `${appUrl}/stuck-pixel-fixer` },
    { '@type': 'ListItem', position: 3, name: 'For OLED', item: `${appUrl}/stuck-pixel-fixer/for-oled` },
  ],
}

export default function StuckPixelFixerOledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Stuck Pixel Fixer', href: '/stuck-pixel-fixer' }, { label: 'For OLED' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Stuck Pixel Fixer for OLED Screens
          </h1>
          <p className="text-fg-muted">
            Attempt to fix a stuck or hot pixel on your OLED display. Position the flashing area over the affected pixel and run for 20 to 30 minutes. Results are not guaranteed on OLED.
          </p>
          <div className="pt-1">
            <StuckPixelFixer />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How OLED pixel defects differ from LCD</h2>
            <p>
              On an LCD display, stuck pixels occur when the liquid crystal layer in a pixel becomes
              unable to fully open or close, fixing the pixel at a particular colour. The rapid colour
              flashing technique works by repeatedly stimulating the crystal layer to cycle through
              states, which can sometimes jar a stuck crystal back into normal operation.
            </p>
            <p>
              On an OLED display, each pixel is an independent organic emitter with its own driver
              transistor. A stuck OLED pixel is usually a pixel whose driver circuit has become fixed
              in an on-state, causing continuous light emission at a specific colour. The flashing
              technique may help if the driver circuit is temporarily stuck rather than permanently
              failed, but OLED defects are more often hardware-level failures that do not respond to
              software stimulation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Identifying whether your pixel is stuck or hot</h2>
            <p>
              Run the Dead Pixel Test first and cycle through all colours including black. If the bright
              dot is visible against black and disappears against white, you likely have a hot pixel
              stuck in an on-state. If the dot is dark and visible on light backgrounds but not on
              black, it is a non-emitting dead pixel. The Stuck Pixel Fixer may help hot pixels but
              cannot fix non-emitting dead pixels on any display technology.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">When to seek a replacement</h2>
            <p>
              If the defect is clearly visible against dark content and has not responded after two
              sessions with this tool, it is likely permanent. Document it with a clear photograph
              in a darkened room and check your manufacturer&apos;s warranty terms. Many OLED monitor and
              TV manufacturers now offer zero bright pixel guarantees, meaning a single visible hot
              pixel qualifies for replacement. Act within the warranty period as pixel defect claims
              are typically time-limited from the date of purchase.
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
