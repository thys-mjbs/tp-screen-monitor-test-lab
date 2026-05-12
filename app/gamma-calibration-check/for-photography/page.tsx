import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { GammaCalibrationCheck } from '@/components/tools/GammaCalibrationCheck'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Monitor Gamma Calibration for Photography: Check Your Display Gamma'
const description = 'Check and calibrate your monitor gamma for photo editing and photography work. A correctly calibrated gamma ensures photos print and display accurately. Free online gamma test.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/gamma-calibration-check/for-photography` },
  openGraph: {
    title, description,
    url: `${appUrl}/gamma-calibration-check/for-photography`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Why does gamma matter for photography and photo editing?',
    a: 'Gamma determines how the midtone values in an image are distributed between pure black and pure white on your monitor. If your monitor gamma is too high (above 2.2), the image will look darker and more contrasty than it really is, causing you to brighten photos during editing — which then appear too bright when viewed on other displays or sent for print. If gamma is too low, the image appears washed out, causing over-darkening during editing. The industry standard gamma of 2.2 (sRGB) ensures that photos edited on a calibrated display look correct on other calibrated displays and when printed using ICC profiles.',
  },
  {
    q: 'What is the correct gamma for photo editing?',
    a: 'The correct gamma for photo editing in sRGB colour space is 2.2, which is the standard for the Windows operating system and the sRGB colour profile used by web browsers and most photo editing software. On macOS, the system gamma is also effectively 2.2 (Apple previously used 1.8 but moved to 2.2 with Snow Leopard in 2009). If you work in a print workflow using a wider gamut colour space, consult your colour management workflow documentation, but 2.2 is correct for virtually all photography workflows.',
  },
  {
    q: 'How do I fix monitor gamma for photography?',
    a: 'The most accurate method is to use a hardware colorimeter such as the X-Rite i1Display or Datacolor SpyderX to profile your monitor and create a custom ICC profile. This measures and corrects both gamma and colour accuracy simultaneously. Without hardware, you can adjust the monitor gamma curve in Windows using the Colour Management or Display Colour Calibration tool, or through your monitor\'s OSD (On-Screen Display) settings. Use this online gamma check to verify that adjustments are heading in the correct direction.',
  },
  {
    q: 'How do I read the gamma test chart?',
    a: 'The gamma test displays alternating black and white fine lines or a dithered pattern alongside a solid grey reference patch. When viewed from normal distance, the dithered pattern should appear to match the solid grey reference at a value of approximately 50%. If the dithered pattern looks noticeably darker than the reference, your gamma is too high. If it appears lighter than the reference, your gamma is too low. The test works by using the visual blending of alternating pixels to simulate a neutral grey, which a correctly gamma-matched monitor will reproduce at the expected midtone value.',
  },
  {
    q: 'Should I use hardware or software calibration for a photography monitor?',
    a: 'Hardware calibration using a colorimeter and profiling software is strongly recommended for any monitor used in a professional or semi-professional photography workflow. Software-only calibration adjusts the GPU LUT (look-up table) and reduces the effective bit depth of the monitor. Hardware calibration on monitors that support it adjusts the internal panel processing, maintaining the full bit depth. For colour-critical photography work, a hardware-calibrated monitor with a current ICC profile is the most reliable setup.',
  },
]

const related = ['gamma-calibration-check', 'colour-temperature-test', 'white-saturation-test', 'contrast-black-level-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Gamma Calibration Check', item: `${appUrl}/gamma-calibration-check` },
    { '@type': 'ListItem', position: 3, name: 'For Photography', item: `${appUrl}/gamma-calibration-check/for-photography` },
  ],
}

export default function GammaCalibrationPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Gamma Calibration Check', href: '/gamma-calibration-check' }, { label: 'For Photography' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Monitor Gamma Calibration for Photography
          </h1>
          <p className="text-fg-muted">
            Check whether your monitor gamma is correctly set to 2.2 for accurate photo editing. A miscalibrated gamma causes photos to look different on other displays and in print.
          </p>
          <div className="pt-1">
            <GammaCalibrationCheck />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why gamma calibration matters for photo editing</h2>
            <p>
              When you edit a photo on a monitor with incorrect gamma, you are compensating for the
              monitor&apos;s error rather than editing the actual image data. A monitor with gamma set too
              high makes images appear too dark, leading editors to apply positive exposure adjustments
              that make the image overexposed when viewed on a correctly calibrated display or printed.
              The effect compounds through an editing workflow — a small gamma error in the display
              produces systematic brightness errors across an entire shoot.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">The sRGB standard and gamma 2.2</h2>
            <p>
              The sRGB colour space, which underpins virtually all consumer photography and web image
              delivery, specifies a gamma of approximately 2.2. This value was standardised to match
              the gamma characteristic of CRT monitors that were common when digital photography
              workflows were established, and has been maintained as the standard because the vast
              majority of display hardware and operating systems are designed around it. Setting your
              monitor to display sRGB content with gamma 2.2 ensures that images edited on your
              display match how they appear across the range of standard displays your audience uses.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Checking gamma after OSD adjustments</h2>
            <p>
              Many monitors include a gamma setting in their OSD (On-Screen Display) menu, typically
              offering options such as Gamma 1.8, 2.0, 2.2, 2.4, and sometimes sRGB mode. After
              changing the monitor gamma setting, run this checker to verify that the displayed gamma
              is actually closer to 2.2. Some monitors do not accurately implement their gamma
              settings. If the gamma test shows significant deviation even after setting the OSD
              to 2.2, hardware profiling with a colorimeter is the next step to achieve accurate
              gamma for photography work.
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
