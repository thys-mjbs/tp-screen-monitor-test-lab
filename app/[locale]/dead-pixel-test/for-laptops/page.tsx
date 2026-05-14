import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for Laptops: Free Laptop Screen Check Online'
const description = 'Check your laptop screen for dead pixels, stuck pixels, and subpixel faults using solid-colour fullscreen panels. Free browser tool, works on any laptop.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-laptops` },
  openGraph: {
    title,
    description,
    url: `${appUrl}/dead-pixel-test/for-laptops`,
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
  { hex: '#00FFFF', label: 'Cyan' },
  { hex: '#FF00FF', label: 'Magenta' },
  { hex: '#808080', label: 'Grey' },
]

const faqs = [
  {
    q: 'How do I test my laptop screen for dead pixels?',
    a: 'Use the fullscreen mode of this test on your laptop. Close all other windows, click Full Screen, and cycle through each colour using the spacebar or arrow keys. Dim the room lighting slightly to make faint pixel defects more visible. Because laptop screens are often high resolution at a small physical size, individual pixels are very small, so take your time on each colour and scan the entire panel systematically.',
  },
  {
    q: 'Do laptops come with a dead pixel warranty?',
    a: 'Most modern laptops come with a zero dead pixel guarantee, meaning even a single dead pixel qualifies for a repair or replacement under warranty. This is in contrast to some budget desktop monitors where a small number of defects is permitted under ISO class standards. Check your laptop manufacturer\'s warranty documentation, and test your screen within the first few days after purchase to stay within the typical 14 to 30 day return window.',
  },
  {
    q: 'Are dead pixels common on laptop screens?',
    a: 'Dead pixels are relatively rare on modern laptops due to improved panel manufacturing, but they do occur. Higher-resolution laptop panels, such as those with 2K, 4K, or Retina resolutions, pack more pixels into a smaller area and are manufactured to tighter tolerances. Budget laptops occasionally ship with minor pixel defects, which is why testing at unboxing is important.',
  },
  {
    q: 'Can I fix a dead pixel on my laptop screen?',
    a: 'Dead pixels on laptop screens are generally not fixable through software. Stuck pixels may occasionally respond to rapid colour cycling via the Stuck Pixel Fixer, but dead pixels represent a hardware failure in the pixel transistor. For a laptop within its warranty period, contact the manufacturer. For an out-of-warranty laptop, professional display replacement is the practical option if the defect is significantly bothersome.',
  },
  {
    q: 'My laptop has HiDPI scaling. Does that affect the pixel test?',
    a: 'No. The test displays solid colours that fill the entire physical display regardless of the operating system scaling factor. HiDPI scaling affects how interface elements are sized relative to the physical pixels, but solid-colour fullscreen panels cover every physical pixel on the panel. The test is equally effective at any DPI or scaling setting.',
  },
]

const related = ['dead-pixel-test', 'stuck-pixel-fixer', 'resolution-checker', 'screen-clean-mode']
  .map((s) => getToolBySlug(s))
  .filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For Laptops', item: `${appUrl}/dead-pixel-test/for-laptops` },
  ],
}

export default function DeadPixelTestLaptopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For Laptops' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for Laptops
          </h1>
          <p className="text-fg-muted">
            Test your laptop screen for dead and stuck pixels immediately after purchase. Most laptops carry a zero dead pixel guarantee.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why laptop pixel tests matter at unboxing</h2>
            <p>
              Unlike desktop monitors, which sometimes carry a manufacturer tolerance for a small number
              of pixel defects, most laptop manufacturers and major retailers offer a zero dead pixel
              guarantee. This means a single confirmed dead pixel qualifies for a replacement. The catch
              is that this guarantee typically applies within a short window after purchase, often
              14 to 30 days. Testing your laptop screen the day you receive it protects your right to
              a replacement while you are still within that window.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">High-resolution laptop screens and pixel size</h2>
            <p>
              Modern laptop panels often have high pixel densities. A 13-inch display at 2560x1600
              has over 230 pixels per inch, making each individual pixel very small. At normal laptop
              viewing distances, a single dead pixel can be surprisingly hard to spot during regular
              use. This tool&apos;s fullscreen solid-colour panels make defects immediately obvious
              because they create maximum contrast between a faulty pixel and the uniform background.
              Take your time on each colour, particularly white and black, and check every area of
              the panel, including the edges and corners.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Laptop panel types and what to expect</h2>
            <p>
              Most mid-range and premium laptops now use IPS, OLED, or OLED-based AMOLED panels.
              Budget laptops often use TN or low-end IPS. OLED laptop screens are particularly
              important to test because they can also develop image retention from static desktop
              interfaces. If your laptop has an OLED display, run this test and follow it with the
              Image Retention Test to check for any early signs of uneven pixel aging.
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
