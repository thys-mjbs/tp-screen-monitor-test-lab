import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for Gaming Monitors: Check Your Display Before Gaming'
const description = 'Test your gaming monitor for dead pixels, stuck pixels, and display defects using solid-colour fullscreen panels. Works with 144Hz, 240Hz, and OLED gaming monitors. Free online tool.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-gaming-monitors` },
  openGraph: {
    title, description,
    url: `${appUrl}/dead-pixel-test/for-gaming-monitors`,
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
    q: 'Do gaming monitors get dead pixels more often than regular monitors?',
    a: 'Gaming monitors are not inherently more susceptible to dead pixels than standard monitors, as both are manufactured using the same display panel technologies. However, because gaming monitors often push higher specifications (higher refresh rates, faster response times, OLED technology), the panel manufacturing process can have slightly higher defect rates. High-refresh-rate IPS and TN panels and OLED gaming displays all carry the same potential for pixel defects as their equivalent consumer panel types.',
  },
  {
    q: 'Can a dead pixel affect gaming performance?',
    a: 'A dead pixel does not affect the technical performance of a gaming monitor: frame rate, response time, and input lag are unaffected. The impact is purely visual. In fast-paced gaming where your focus is on moving content, a single dead pixel in the peripheral area of the screen may be barely noticeable. A dead pixel near the centre of the display, however, can be persistently distracting during gameplay, particularly in games with dark environments where a black dead pixel becomes more visible.',
  },
  {
    q: 'How do I check my new gaming monitor for dead pixels?',
    a: 'Connect your gaming monitor and run this test immediately after unboxing, before setting up your gaming system. Cycle through each solid colour in fullscreen mode and look for any dot that stays the same colour regardless of the background. Black and white panels reveal the most defects. Allow your eyes a few seconds to scan the full panel on each colour. A single pass is enough. If you find a defect, document it with a photo before the return window closes.',
  },
  {
    q: 'Do gaming monitor manufacturers cover dead pixels under warranty?',
    a: 'Most gaming monitor brands including ASUS ROG, LG UltraGear, Alienware, BenQ MOBIUZ, Acer Predator, and MSI Optix include pixel defect policies in their warranty terms. The threshold for a warranty claim varies by brand and panel price. Many premium gaming monitors, particularly OLED models, now offer zero-bright-pixel guarantees, meaning a single visible lit pixel is grounds for replacement. Standard IPS gaming monitors often require three or more visible dead pixels before a warranty claim is honoured.',
  },
  {
    q: 'Can dead pixels be fixed on a gaming monitor?',
    a: 'Dead pixels (permanently dark pixels) cannot be repaired by software methods. They represent a hardware failure of the pixel\'s transistor or backlight. Stuck pixels that display a fixed colour may sometimes respond to the Stuck Pixel Fixer tool, which cycles rapid colour changes over the affected area. The technique works more reliably on LCD gaming monitors than on OLED panels. If within the warranty or return period, replacement is the most reliable solution for a visible dead pixel on a gaming monitor.',
  },
]

const related = ['dead-pixel-test', 'stuck-pixel-fixer', 'refresh-rate-checker', 'motion-blur-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For Gaming Monitors', item: `${appUrl}/dead-pixel-test/for-gaming-monitors` },
  ],
}

export default function DeadPixelGamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For Gaming Monitors' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for Gaming Monitors
          </h1>
          <p className="text-fg-muted">
            Check your gaming monitor for dead pixels, stuck pixels, and display defects before your gaming setup is complete. Cycle through solid-colour panels to spot any pixel anomalies.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">When to run a dead pixel test on a gaming monitor</h2>
            <p>
              The best time to run a dead pixel test on a new gaming monitor is immediately after
              unboxing, before you route cables, mount the monitor, or install drivers. This ensures
              that any defect found is clearly pre-existing and not caused by handling. Most retailers
              have a 14 to 30 day return window, and many gaming monitor warranties require the defect
              to be reported within 30 days of purchase. Running the test on day one gives you maximum
              time to process a return or warranty claim without rushing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Dead pixels on OLED gaming monitors</h2>
            <p>
              OLED gaming monitors such as the LG UltraGear OLED series, ASUS ROG Swift OLED, and
              Alienware OLED displays use different panel technology from IPS or TN LCD monitors.
              On OLED panels, dead pixels are permanently dark because the organic emitter has failed to
              produce light. Hot pixels, which are stuck in an on-state, appear as a small bright dot
              and are most visible against the true black that OLED produces. OLED gaming monitor
              manufacturers are more likely to offer zero-bright-pixel policies given the premium price
              of these displays.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How to document a dead pixel for a warranty claim</h2>
            <p>
              Photograph the defect in a dim room against the background that makes the pixel most
              visible (usually black for a hot/stuck pixel or white for a dead pixel). Use a macro
              or close-up setting on your phone camera to capture a clear image of the defect. Note
              the approximate position on the panel (for example, centre-left, top-right quadrant)
              and the colour displayed. Include photos and a description when contacting the
              manufacturer&apos;s support team, as this significantly speeds up the warranty assessment process.
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
