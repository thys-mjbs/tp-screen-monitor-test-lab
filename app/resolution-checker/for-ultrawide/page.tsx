import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ResolutionChecker } from '@/components/tools/ResolutionChecker'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Ultrawide Resolution Checker: Verify Your Ultrawide Monitor Resolution'
const description = 'Check that your ultrawide monitor is running at its correct native resolution. Confirm whether you have 2560x1080, 3440x1440, 3840x1600, or 5120x1440. Free instant browser tool.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/resolution-checker/for-ultrawide` },
  openGraph: {
    title, description,
    url: `${appUrl}/resolution-checker/for-ultrawide`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'What resolutions do ultrawide monitors come in?',
    a: 'Ultrawide monitors at 21:9 aspect ratio come in two main resolutions: 2560x1080 (Full HD ultrawide, found on budget and smaller 29-inch models) and 3440x1440 (QHD ultrawide, the most common premium ultrawide resolution found on 34-inch models). Super-ultrawide monitors at 32:9 aspect ratio use 3840x1080 (dual Full HD equivalent) or 5120x1440 (dual QHD equivalent). Some high-end 21:9 monitors reach 3840x1600 (WQHD+), offering near 4K density on a wide panel.',
  },
  {
    q: 'My ultrawide shows the wrong resolution. How do I fix it?',
    a: 'If your ultrawide monitor is not displaying at its native resolution, open Windows Display Settings and check the Resolution dropdown. Select the native resolution for your monitor, typically 3440x1440 for a QHD ultrawide. If the native resolution is not listed, the monitor may not be detected correctly. Try a different cable (DisplayPort is preferred over HDMI for ultrawide at high resolutions) or update your GPU drivers. HDMI 1.4 does not support 3440x1440 at 60Hz on all monitors, so check your monitor&apos;s spec sheet for cable requirements.',
  },
  {
    q: 'Does an ultrawide monitor need more GPU power than a standard 16:9 monitor?',
    a: 'Yes. A 3440x1440 ultrawide monitor has approximately 4.95 million pixels, compared to 3.69 million for a standard 2560x1440 QHD monitor, about 34% more pixels to render per frame. For gaming, this means a GPU that handles 2560x1440 at high frame rates may struggle to maintain the same frame rate at 3440x1440. For desktop productivity work, the additional pixels have minimal impact on GPU load. Super-ultrawide at 5120x1440 approaches 7.37 million pixels and requires a significantly more capable GPU for gaming.',
  },
  {
    q: 'What is the pixel density of common ultrawide resolutions?',
    a: 'At 34 inches with 3440x1440 resolution, pixel density is approximately 110 PPI (pixels per inch), which is comparable to a 27-inch 2560x1440 monitor at 109 PPI. At 29 inches with 2560x1080, density is approximately 97 PPI. At 49 inches with 5120x1440, density is approximately 109 PPI. These densities are lower than 4K monitors, which typically exceed 160 PPI at 27-32 inches. Ultrawide monitors prioritise horizontal workspace over pixel density.',
  },
  {
    q: 'Why does some software not fill my full ultrawide screen?',
    a: 'Some applications, particularly games and older software, do not natively support ultrawide aspect ratios (21:9 or 32:9). Games may render at a 16:9 resolution and add black bars to the sides, or may support ultrawide but show a stretched field of view. Many modern games include a native ultrawide or custom resolution setting. For productivity software, applications that do not support window resizing to ultrawide dimensions will leave unused screen space. Check the software documentation or community forums for ultrawide compatibility solutions specific to the application.',
  },
]

const related = ['resolution-checker', 'screen-uniformity-test', 'refresh-rate-checker', 'sharpness-focus-chart']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Resolution Checker', item: `${appUrl}/resolution-checker` },
    { '@type': 'ListItem', position: 3, name: 'For Ultrawide', item: `${appUrl}/resolution-checker/for-ultrawide` },
  ],
}

export default function ResolutionCheckerUltrawidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Resolution Checker', href: '/resolution-checker' }, { label: 'For Ultrawide' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Ultrawide Resolution Checker
          </h1>
          <p className="text-fg-muted">
            Instantly verify that your ultrawide monitor is running at its correct native resolution. Confirm your 2560x1080, 3440x1440, 3840x1600, or 5120x1440 display is set up correctly.
          </p>
          <div className="pt-1">
            <ResolutionChecker />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Common ultrawide resolution setup issues</h2>
            <p>
              Ultrawide monitors are more susceptible to incorrect resolution detection than standard
              16:9 displays because their resolutions are less commonly supported by default driver
              configurations. When an ultrawide monitor is connected for the first time, Windows may
              default to a lower standard resolution (1920x1080 or 2560x1080) rather than the
              monitor&apos;s native resolution. Some combinations of cable type, GPU port, and monitor
              model require the user to create a custom resolution profile in the GPU control panel
              before the correct native resolution appears as an option in Windows Display Settings.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Cable and connection requirements for ultrawide resolutions</h2>
            <p>
              For 2560x1080 at 60Hz: any DisplayPort 1.2 cable or HDMI 1.4 cable. For 3440x1440
              at 60Hz: DisplayPort 1.2 or HDMI 2.0. For 3440x1440 at 100Hz or higher: DisplayPort
              1.4. For 5120x1440 at 60Hz: DisplayPort 1.4. For 5120x1440 at 120Hz or higher:
              DisplayPort 2.0 or DisplayPort 1.4 with DSC (Display Stream Compression). HDMI 2.1 can
              support 5120x1440 at up to 120Hz. Always check your monitor&apos;s documentation for the
              specific cable requirements at your target resolution and refresh rate combination.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">What a correct ultrawide resolution looks like</h2>
            <p>
              At native resolution, your ultrawide monitor should display desktop icons, text, and
              interface elements at the correct scale with no horizontal or vertical bars at the panel
              edges. The Windows taskbar should span the full width of the display. If the taskbar
              ends before the edge of the screen, or if there are black bars on the sides of the
              desktop, the resolution is not set to the full native width of the panel. Use this
              checker to confirm the exact resolution values Windows is currently using, and compare
              them to your monitor&apos;s native resolution from its spec sheet.
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
