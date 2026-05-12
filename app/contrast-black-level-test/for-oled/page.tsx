import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ContrastBlackLevelTest } from '@/components/tools/ContrastBlackLevelTest'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'OLED Black Level Test: Check Contrast and Shadow Detail on Your OLED Display'
const description = 'Test your OLED monitor or TV for black level accuracy, shadow detail visibility, and contrast performance. OLED produces true black, so check if yours is correctly calibrated. Free online tool.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/contrast-black-level-test/for-oled` },
  openGraph: {
    title, description,
    url: `${appUrl}/contrast-black-level-test/for-oled`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'What makes OLED black levels different from LCD?',
    a: 'OLED displays produce true black by turning off individual pixels completely. When a pixel is displaying black, the organic emitter in that pixel produces no light. This gives OLED a theoretically infinite contrast ratio, as the denominator in the contrast measurement is effectively zero. LCD monitors use a backlight that remains on behind the entire panel, which means even pixels displaying black still allow some light to pass through the liquid crystal layer, resulting in a dark grey rather than true black. The difference is clearly visible when comparing the two technologies in a dark room.',
  },
  {
    q: 'What should I see on this test with an OLED display?',
    a: 'On an OLED display with correct calibration and settings, you should be able to see all the dark shadow steps near the bottom of the gradient ramp. The very darkest steps (near black) should be distinguishable from each other and from pure black, while still looking very dark. If you cannot see any shadow detail in the near-black range, your OLED may have an aggressive black level crush setting, or the ABCS (Automatic Brightness Control System) may be compressing the shadow detail. If the black areas appear grey, ensure you are not using any backlighting or ambient light correction mode.',
  },
  {
    q: 'What is OLED black crush and how do I check for it?',
    a: 'Black crush on an OLED display is when near-black tones are clipped or remapped to pure black, losing shadow detail that should be visible. It can be caused by an overly aggressive gamma curve, black level settings set below the correct level, or a feature called ABCS that adjusts pixel brightness based on content. To check for black crush, use this contrast test in a dark room and look at whether the darkest gradient steps are individually distinguishable from pure black. If several near-black steps all look the same as pure black, black crush is occurring.',
  },
  {
    q: 'What settings affect OLED black levels?',
    a: 'Several settings on OLED monitors and TVs can affect black level accuracy. Black Level or HDMI Black Level should be set to match the signal range from your source, typically Normal (for full range PC output) or Low (for limited range TV signals). Gamma should be set to 2.2 for PC use. Disable any ambient light sensor, auto-brightness control, or scene-based brightness adjustment for accurate black level testing. On LG OLED TVs, the Dynamic Tone Mapping and OLED Pixel Dimmer settings can affect shadow rendering.',
  },
  {
    q: 'How does OLED local dimming compare to LCD local dimming for black levels?',
    a: 'OLED does not require local dimming because each pixel is individually controlled: there is no backlight to dim. The per-pixel control of OLED is inherently superior to even the most advanced mini-LED local dimming LCD systems, which dim zones of many pixels together, resulting in halo artefacts around bright objects against dark backgrounds. OLED avoids this entirely because the transition between a lit pixel and an unlit pixel is at the sub-pixel level, with no light bleed between adjacent pixels. This is the defining advantage of OLED for dark content.',
  },
]

const related = ['contrast-black-level-test', 'backlight-bleed-test', 'gamma-calibration-check', 'black-screen']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Contrast and Black Level Test', item: `${appUrl}/contrast-black-level-test` },
    { '@type': 'ListItem', position: 3, name: 'For OLED', item: `${appUrl}/contrast-black-level-test/for-oled` },
  ],
}

export default function ContrastBlackLevelOledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Contrast and Black Level Test', href: '/contrast-black-level-test' }, { label: 'For OLED' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            OLED Black Level Test
          </h1>
          <p className="text-fg-muted">
            Check your OLED display&apos;s black level accuracy and shadow detail. OLED produces true black, so verify your settings are not crushing or clipping near-black shadow information.
          </p>
          <div className="pt-1">
            <ContrastBlackLevelTest />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">How OLED achieves true black</h2>
            <p>
              Each pixel in an OLED display is an independent light source. When the image data for
              a pixel is black (RGB 0,0,0), the driver circuit for that pixel supplies no current to
              the organic emitter, resulting in no light emission at all. This is the fundamental
              physics advantage of OLED over LCD: there is no backlight to leak through dark pixels.
              A perfectly calibrated OLED displaying a black frame in a pitch-dark room is
              indistinguishable from the panel being switched off. The contrast is not just high,
              it is technically infinite.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Settings to check before testing your OLED</h2>
            <p>
              Before running this test, disable the following features on your OLED display if present:
              Dynamic Contrast, Auto Brightness Control (ABCS), Ambient Light Compensation, and any
              scene-based tone mapping. These features adjust the pixel brightness dynamically based on
              content or ambient conditions, which will interfere with accurate black level testing.
              Set your display to a manual brightness level and a fixed gamma setting of 2.2 (or the
              equivalent sRGB or PC mode). On OLED TVs connected to a PC, ensure HDMI Black Level
              or Input Level is set to Full Range to avoid black level being lifted by the signal range mismatch.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Interpreting shadow detail on OLED</h2>
            <p>
              On a well-calibrated OLED, all visible gradient steps in the near-black range should be
              individually distinguishable from each other, though they will all appear very dark. If
              steps that should be distinct all merge into pure black, the gamma or black level setting
              is causing shadow detail to be clipped. If the gradient steps appear too bright or grey,
              the Black Level or HDMI Range setting may be incorrect, causing the signal&apos;s black point
              to be mapped above true black on the display. Both issues affect how shadow details in
              films, games, and photos are rendered on the display.
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
