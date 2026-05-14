import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { StuckPixelFixer } from '@/components/tools/StuckPixelFixer'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Stuck Pixel Fixer for Laptop Screens: Fix a Stuck Pixel on Your Laptop'
const description = 'Try to fix a stuck or hot pixel on your laptop screen using rapidly cycling colours. Works on IPS, TN, and OLED laptop panels. Free online tool, no download required.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/stuck-pixel-fixer/for-laptops` },
  openGraph: {
    title, description,
    url: `${appUrl}/stuck-pixel-fixer/for-laptops`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Can you fix a stuck pixel on a laptop screen?',
    a: 'Sometimes. A stuck pixel on a laptop screen behaves the same as on a desktop monitor, as it is a pixel whose liquid crystal layer or organic emitter has become fixed in a particular state. The rapid colour cycling technique works by repeatedly driving the pixel through all colour states, which can occasionally resolve a temporarily stuck crystal or driver circuit. Success rates vary and are higher for recently stuck pixels than for defects that have been present for months.',
  },
  {
    q: 'How do I position the fixer over the stuck pixel on my laptop?',
    a: 'On a laptop, use the tool in a browser window rather than fullscreen. Drag the browser window so the flashing area is positioned directly over the stuck pixel location. You can resize the browser window to a small size and position the fixer box precisely over the defect. Some users also enter fullscreen mode and scan the entire panel rather than targeting a specific area.',
  },
  {
    q: 'How long should I run the stuck pixel fixer on my laptop?',
    a: 'Run the fixer for 20 to 30 minutes per session. Check whether the pixel has resolved after each session. If there is no improvement after two or three sessions, the defect is likely permanent. Avoid running the fixer at maximum brightness for more than 30 minutes continuously, as sustained high-intensity cycling can stress the panel.',
  },
  {
    q: 'Is a stuck pixel on a laptop screen covered by warranty?',
    a: 'Most laptop manufacturers apply a pixel defect policy that specifies a minimum number or pattern of defective pixels required before a warranty repair or replacement is offered. A single stuck pixel may not qualify under the standard policy on lower-cost laptops, but premium business laptops and gaming laptops often have stricter policies. Check your warranty documentation and contact the manufacturer\'s support if the defect is visible and the laptop is within its warranty period.',
  },
  {
    q: 'What is the difference between a stuck pixel and a dead pixel on a laptop?',
    a: 'A stuck pixel displays a fixed colour (red, green, blue, or white) regardless of what the screen is showing. A dead pixel displays no colour at all, appearing as a permanently black dot. The stuck pixel fixer may help with stuck pixels but cannot fix dead pixels, as dead pixels have no functioning light source or emitter to stimulate. On a laptop, both types are more noticeable than on a large desktop monitor because the screen is typically viewed at close range.',
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
    { '@type': 'ListItem', position: 3, name: 'For Laptops', item: `${appUrl}/stuck-pixel-fixer/for-laptops` },
  ],
}

export default function StuckPixelFixerLaptopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Stuck Pixel Fixer', href: '/stuck-pixel-fixer' }, { label: 'For Laptops' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Stuck Pixel Fixer for Laptop Screens
          </h1>
          <p className="text-fg-muted">
            Attempt to fix a stuck or hot pixel on your laptop display. Position the flashing area over the affected pixel and run for 20 to 30 minutes. Results are not guaranteed.
          </p>
          <div className="pt-1">
            <StuckPixelFixer />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why laptop screens are prone to pixel defects</h2>
            <p>
              Laptop displays are manufactured in large volumes with thin panels designed to minimise
              weight and thickness. The combination of high pixel density and compact panel construction
              means quality control tolerances can allow a small number of pixel defects to pass
              inspection on lower-cost units. Laptop panels also experience more physical stress than
              desktop monitors, including repeated opening and closing, flexion, and temperature changes from
              portable use, all of which can cause a pixel that was borderline at manufacture to
              become visibly defective over time.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Using this tool on a laptop effectively</h2>
            <p>
              Run the fixer in a browser window and size it so the flashing box is positioned over the
              stuck pixel. A moderately lit environment is preferable, as the stuck pixel will be easier
              to see in normal lighting than in a very bright room. Check the pixel every few minutes
              while the tool is running. On IPS panels, stuck pixels are most visible against a
              white or grey background. On OLED laptop panels, hot pixels are most visible against
              the true black that OLED produces.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">When to use the Dead Pixel Test first</h2>
            <p>
              Before running the fixer, confirm that the defect is a stuck pixel rather than a dead
              pixel. Open the Dead Pixel Test and cycle through all colours including black and white.
              A stuck pixel will change appearance as the background colour changes, appearing most
              prominently when the background contrasts with the stuck colour. A dead pixel will appear
              as a fixed black dot visible only on light backgrounds. The fixer cannot fix dead pixels,
              so confirming the type saves time.
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
