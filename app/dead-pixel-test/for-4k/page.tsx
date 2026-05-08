import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for 4K Monitors: Free 4K Screen Check Online'
const description = 'Check your 4K monitor for dead pixels and subpixel faults using solid-colour fullscreen panels. Works at native 4K resolution in any browser. Free online tool.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-4k` },
  openGraph: {
    title,
    description,
    url: `${appUrl}/dead-pixel-test/for-4k`,
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
    q: 'Does a 4K monitor need a different pixel test?',
    a: 'The test method is the same regardless of resolution. This tool fills your entire screen with solid colours and works at any resolution including 4K (3840x2160) and 5K (5120x2880). However, a 4K panel has over 8.3 million pixels, which means individual pixels are extremely small on a typical 27 to 32-inch monitor. This makes pixel defects harder to spot visually than on lower-resolution panels, so scanning each test colour methodically is more important.',
  },
  {
    q: 'Do 4K monitors have more dead pixels due to higher pixel count?',
    a: 'Not proportionally. Higher resolution panels use manufacturing processes designed for finer pixel densities, and defect rates are controlled to similar levels per panel rather than per pixel. However, with 4 times as many pixels as a 1080p display, a random defect rate produces more total pixel faults on a 4K panel. Premium 4K monitors typically carry a higher manufacturing standard and often include a zero dead pixel guarantee.',
  },
  {
    q: 'My 4K monitor uses DPI scaling. Will this test still cover all pixels?',
    a: 'Yes. This test uses the browser Fullscreen API to cover the full physical display area. Operating system DPI scaling (for example, 150% or 200% scaling on Windows) affects how interface elements are sized, but it does not prevent fullscreen web content from covering the entire physical pixel grid. The solid-colour panel covers every hardware pixel on your 4K panel.',
  },
  {
    q: 'How close should I sit to a 4K monitor when testing for dead pixels?',
    a: 'For testing purposes, sit closer than your normal viewing distance, approximately 40 to 50 cm from the screen. At a 4K resolution on a 27-inch monitor, individual pixels are only about 0.16 mm in size, and they are difficult to see at a typical arm\'s length viewing distance of 70 to 80 cm. Testing closer ensures you can actually detect a defect if one is present.',
  },
  {
    q: 'Should I test a 4K monitor at native resolution?',
    a: 'Yes. For a pixel-accurate test, ensure your monitor is running at its native 3840x2160 resolution and that DPI scaling is configured to ensure the display is running at full physical pixel density. The Resolution Checker on this site can confirm your current resolution and device pixel ratio. Running below native resolution applies interpolation that can both create false visual artefacts and obscure real defects.',
  },
]

const related = ['dead-pixel-test', 'resolution-checker', 'screen-uniformity-test', 'sharpness-focus-chart']
  .map((s) => getToolBySlug(s))
  .filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For 4K', item: `${appUrl}/dead-pixel-test/for-4k` },
  ],
}

export default function DeadPixelTest4kPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For 4K' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for 4K Monitors
          </h1>
          <p className="text-fg-muted">
            Test all 8.3 million pixels on your 4K display at native resolution. Works directly in your browser with no install needed.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Testing a 4K monitor effectively</h2>
            <p>
              A 4K monitor (3840x2160) contains approximately 8.3 million pixels arranged across the
              panel surface. On a 27-inch display, this works out to roughly 163 pixels per inch,
              with each physical pixel measuring about 0.16 millimetres. At your normal sitting distance,
              a single faulty pixel is difficult to detect without systematic scanning. This tool&apos;s
              fullscreen solid-colour panels make defects visible by eliminating all visual noise and
              presenting a uniform reference background. Sit closer than usual during testing for the
              best results.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Running the test at native 4K resolution</h2>
            <p>
              For a complete pixel test, your monitor should be running at its native 4K resolution.
              Check Windows Display Settings or macOS System Settings to confirm the resolution is set
              to 3840x2160. Many systems apply DPI scaling at this resolution to make interface elements
              a comfortable size, which is fine: DPI scaling does not prevent this test from covering
              the full physical pixel grid. What matters is that the resolution output from your GPU
              matches the panel&apos;s native resolution rather than a lower-resolution signal being
              upscaled by the monitor.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">4K warranty and pixel defect policy</h2>
            <p>
              Premium 4K monitors from major manufacturers typically advertise zero dead pixel guarantees,
              though the exact terms vary. Budget 4K monitors may ship under ISO class standards that
              permit a small number of defects. If you find a defect on a new monitor, check your
              purchase receipt date and the warranty policy immediately, as most retailers and manufacturers
              require the claim to be made within 14 to 30 days of purchase. Document the defect with
              a photograph taken on a white screen from directly in front of the panel before contacting
              support.
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
