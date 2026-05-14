import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Dead Pixel Test for VR Headsets: Check Your Quest, Vive, or PSVR'
const description = 'Test your VR headset for dead pixels and display defects. Works with Meta Quest, HTC Vive, PlayStation VR, and other headsets. Free online tool, no download required.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/dead-pixel-test/for-vr` },
  openGraph: {
    title, description,
    url: `${appUrl}/dead-pixel-test/for-vr`,
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
    q: 'Can VR headsets have dead pixels?',
    a: 'Yes. VR headsets use small high-density LCD or OLED microdisplays and are subject to the same pixel defects as any other display technology. Dead pixels (permanently dark), hot pixels (permanently bright), and stuck pixels (fixed at a colour) can all occur. Because VR lenses magnify the display, pixel defects may be more visible in VR than on a regular monitor viewed at normal distance.',
  },
  {
    q: 'How do I test my Meta Quest for dead pixels?',
    a: 'On a Meta Quest 2, 3, or Pro, open the browser application and navigate to this page. Alternatively, cast your Quest display to a PC and view the test in your browser while wearing the headset. In the headset, run the test in fullscreen mode and cycle through each colour. Look for any dot that stays the same regardless of the background colour. Black is the most effective background for spotting hot pixels on the OLED displays used in Quest Pro and the colour LCD panels in Quest 2 and 3.',
  },
  {
    q: 'How do I tell which eye has the dead pixel in my VR headset?',
    a: 'Close one eye at a time while viewing a solid-colour panel in the headset. If the defect disappears when you close the right eye, it is on the right display. If it disappears when you close the left eye, it is on the left display. Most VR headsets use separate left and right displays, so a pixel defect will only be visible from one eye. This distinction matters when describing the defect to manufacturer support.',
  },
  {
    q: 'Are dead pixels common in VR headsets?',
    a: 'Pixel defects are no more common in VR headsets than in other display devices, but they are potentially more noticeable because the display is magnified and viewed at very close range. The high pixel density of modern VR displays (1800x1920 or higher per eye) means individual pixels are very small, so mild defects may only be visible under specific conditions. Always test a new VR headset immediately upon unboxing while within the return window.',
  },
  {
    q: 'Is a dead pixel in a VR headset covered by warranty?',
    a: 'Most major VR headset manufacturers including Meta, Sony, HTC, and Valve include pixel defect policies in their warranty terms. Coverage depends on the number and visibility of defects relative to their defined thresholds. A clearly visible single dead pixel on a new headset is often grounds for replacement, particularly within the standard 30-day return window. Contact the manufacturer\'s support with a photo or video documenting the defect.',
  },
]

const related = ['dead-pixel-test', 'stuck-pixel-fixer', 'black-screen', 'fullscreen-colour-cycle']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Dead Pixel Test', item: `${appUrl}/dead-pixel-test` },
    { '@type': 'ListItem', position: 3, name: 'For VR', item: `${appUrl}/dead-pixel-test/for-vr` },
  ],
}

export default function DeadPixelVrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Dead Pixel Test', href: '/dead-pixel-test' }, { label: 'For VR' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Dead Pixel Test for VR Headsets
          </h1>
          <p className="text-fg-muted">
            Check your Meta Quest, HTC Vive, PlayStation VR, or other VR headset for dead pixels and display defects using solid-colour panels.
          </p>
          <div className="pt-1">
            <FullscreenPanel colors={COLORS} />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How dead pixels appear in VR</h2>
            <p>
              VR headsets use small displays positioned very close to the eyes, with lenses that magnify
              the image to fill the field of view. This magnification also enlarges any pixel defects,
              potentially making them more visible than a comparable defect on a desktop monitor viewed
              at normal distance. A dead pixel in a VR headset appears as a fixed dot that does not
              change with the displayed content. On headsets with OLED displays such as the original
              HTC Vive and Meta Quest Pro, hot pixels (stuck bright) are most visible against the true
              black that OLED produces.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Running this test inside a VR headset</h2>
            <p>
              For standalone headsets like Meta Quest, open the headset&apos;s built-in browser and navigate
              to this page. Use the fullscreen button and slowly cycle through each colour. For tethered
              headsets like SteamVR-based devices, open this page on your PC and use Virtual Desktop
              or a similar tool to view it inside the headset, or use SteamVR&apos;s desktop view.
              Alternatively, open this test on your PC and put on the headset to view the solid colours
              in the headset&apos;s pass-through or mirrored display mode if available.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Checking immediately after unboxing</h2>
            <p>
              VR headsets are expensive and pixel defects should be checked immediately upon unboxing.
              Most retailers and manufacturers have a return window of 14 to 30 days from purchase
              within which defective units can be exchanged. If you wait beyond this window, you may
              be limited to a warranty repair process which is slower. Cycled through all test colours
              in a few minutes in a dim room. That is all it takes to establish whether your headset
              has any visible pixel defects before the return window closes.
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
