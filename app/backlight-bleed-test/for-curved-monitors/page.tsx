import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Backlight Bleed Test for Curved Monitors: Check for Light Leakage'
const description = 'Test your curved monitor for backlight bleed and light leakage using a fullscreen black panel. Works with all curved LCD and VA panel monitors. Free online tool.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/backlight-bleed-test/for-curved-monitors` },
  openGraph: {
    title, description,
    url: `${appUrl}/backlight-bleed-test/for-curved-monitors`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Do curved monitors have worse backlight bleed than flat monitors?',
    a: 'Curved monitors can exhibit different patterns of backlight bleed compared to flat panels, but the severity depends far more on the panel technology and manufacturing quality than on the curvature itself. VA-panel curved monitors often have excellent black levels and relatively low backlight bleed compared to IPS curved monitors, which are more prone to IPS glow, a characteristic brightening toward the corners when viewed straight-on. The curvature can redirect light toward the viewer from certain angles, which may make edge bleed slightly more visible on curved displays.',
  },
  {
    q: 'What is the difference between backlight bleed and IPS glow on a curved monitor?',
    a: 'Backlight bleed is light leaking through the LCD panel layers from the edges or corners of the display, appearing as bright patches in those areas regardless of viewing angle. IPS glow is a characteristic of IPS panel technology where off-axis light from the backlight scatters through the liquid crystal layer, creating a silvery or golden glow visible in the corners when viewed straight-on. IPS glow is inherent to the technology, while backlight bleed is a manufacturing variable that ranges from absent to severe. Both are most visible on a black screen in a dark room.',
  },
  {
    q: 'How do I test for backlight bleed on my curved monitor?',
    a: 'Use this test in a completely darkened room. Enter fullscreen mode to display a solid black panel on your curved monitor. Allow your eyes two minutes to adjust to the darkness, then look at the edges and corners of the display from your normal seated viewing distance. Any bright or glowing areas visible at the edges are backlight bleed. Patches that shift in intensity as you move your viewing position slightly are more likely to be IPS glow. Stable bright patches that do not change with viewing angle are backlight bleed.',
  },
  {
    q: 'Is some backlight bleed acceptable on a curved monitor?',
    a: 'A small amount of backlight bleed that is visible only in a completely dark room and only in extreme corner areas is considered within normal manufacturing tolerance by most monitor manufacturers. Backlight bleed that is visible in a moderately lit room, or that forms large bright patches across significant portions of the edge, is generally considered outside acceptable quality for a new display. If the bleed is clearly noticeable during everyday use (watching dark movies, gaming in dark environments), it warrants a warranty claim or return.',
  },
  {
    q: 'Can backlight bleed on a curved monitor be reduced?',
    a: 'Some users report that slightly loosening the screws on the monitor stand mounting bracket can reduce backlight bleed caused by panel pressure, though this is not recommended as it can void warranties and potentially cause damage. Reducing monitor brightness reduces the intensity of backlight bleed. Over time, some backlight bleed does improve slightly as the backlight and panel materials settle during use. Significant bleed on a new monitor should be addressed through the warranty process rather than physical modification.',
  },
]

const related = ['backlight-bleed-test', 'screen-uniformity-test', 'black-screen', 'contrast-black-level-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Backlight Bleed Test', item: `${appUrl}/backlight-bleed-test` },
    { '@type': 'ListItem', position: 3, name: 'For Curved Monitors', item: `${appUrl}/backlight-bleed-test/for-curved-monitors` },
  ],
}

export default function BacklightBleedCurvedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Backlight Bleed Test', href: '/backlight-bleed-test' }, { label: 'For Curved Monitors' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Backlight Bleed Test for Curved Monitors
          </h1>
          <p className="text-fg-muted">
            Check your curved monitor for backlight bleed and IPS glow using a fullscreen black panel. Test in a darkened room for the most accurate results.
          </p>
          <div className="pt-1">
            <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How backlight bleed occurs in curved monitors</h2>
            <p>
              LCD monitors use a backlight panel behind the liquid crystal display to illuminate the
              image. The backlight is a continuous light source that ideally only passes through pixels
              where the image is bright, blocked by the liquid crystal layer where the image is dark.
              In practice, some light escapes around the edges of the panel through gaps between the
              backlight diffuser, the LCD panel, and the bezel frame. Curved monitors have a slightly
              more complex frame-to-panel relationship because the panel itself is bent, which can
              change where and how the backlight edge meets the frame.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">VA vs. IPS curved monitors for backlight bleed</h2>
            <p>
              VA (Vertical Alignment) panel curved monitors, including many Samsung and MSI curved
              displays, typically have better native contrast ratios and lower backlight bleed than
              curved IPS monitors. VA panels block the backlight more effectively when displaying dark
              content. IPS curved monitors offer better colour accuracy and viewing angles but are more
              prone to IPS glow, a diffuse brightening in the corners that is visible straight-on.
              For use cases involving dark content (movies, dark-themed gaming), a VA curved monitor
              will typically show less light leakage than an equivalent IPS curved model.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Documenting bleed for a warranty claim</h2>
            <p>
              Photograph the black screen test in a completely darkened room using your phone camera.
              Set the camera to a low ISO (100-200) and a longer exposure if possible, or use the
              portrait mode for steady low-light capture. The photo should clearly show any edge or
              corner glow. Take photos from your normal seated viewing distance rather than at close
              range, as this better represents how the bleed appears in actual use, which is what
              matters for a warranty assessment. Include these photos when contacting the
              manufacturer&apos;s support team.
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
