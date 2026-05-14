import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('yellow-screen', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What does a yellow screen test reveal?',
    a: 'Yellow is produced by combining full red and full green subpixels with no blue. A solid yellow screen reveals dead or faulty blue subpixels, which appear as small bright spots (because the blue subpixel is stuck on, making the pixel appear white rather than yellow) or as dark dots (because the red or green subpixel alongside a failed blue subpixel shows an unexpected colour). It also makes yellow tinting and colour accuracy issues clearly visible.',
  },
  {
    q: 'Why does my monitor have a yellow tint?',
    a: 'A yellow tint on your display during normal use usually indicates an incorrect white balance or colour temperature setting. Many monitors have a warm colour temperature preset that pushes whites toward yellow. It can also result from a colour profile that is not matched to your display, or from software features like night mode or eye care filters that reduce blue light emission. Check your monitor colour temperature settings and disable any eye care features temporarily to isolate the cause.',
  },
  {
    q: 'Is yellow useful for checking blue subpixel faults?',
    a: 'Yes. Yellow is one of the best colours for revealing blue subpixel faults because yellow requires zero blue output. A blue subpixel stuck in the on state will cause its pixel to display white or cyan against the yellow background, making it easy to spot. Similarly, a dead blue subpixel that keeps the pixel from displaying true yellow might not be visible on this test, but pairing the yellow screen with the Blue Screen test covers both scenarios.',
  },
  {
    q: 'How does yellow screen compare to red and green screens?',
    a: 'Red and green screens test the individual red and green channels in isolation. Yellow combines both red and green channels simultaneously, making it useful for checking how these two channels work together and for isolating blue subpixel faults specifically. Running red, green, blue, and yellow screens together gives comprehensive coverage across all subpixel fault types.',
  },
  {
    q: 'Can I use the yellow screen to check for screen burn-in?',
    a: 'On OLED panels, a yellow screen can reveal areas where red and green organic compounds have aged at different rates, appearing as subtle tonal variations. For a structured burn-in and image retention test, use the Image Retention Test tool, which uses high-contrast patterns designed specifically to reveal differential ageing across the panel.',
  },
  {
    q: 'Does yellow look different on different types of monitors?',
    a: 'Yes. The appearance of saturated yellow varies noticeably between panel types and calibration states. Wide colour gamut displays may show a more intensely saturated yellow than sRGB displays. Displays with a warm colour temperature preset may show a slightly orange-tinged yellow. These are not necessarily faults, but they can indicate calibration differences that matter for colour-critical work.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the yellow screen test checks</h2>
    <p>
      Yellow is a secondary colour on displays, produced by combining the red and green subpixels at full
      intensity with the blue subpixel completely off. This makes a yellow panel one of the most targeted
      tests for blue subpixel faults. Any blue subpixel stuck in an on state causes its pixel to appear
      brighter than the surrounding yellow, showing as a white or bluish dot against the uniform background.
      Any pixel fault that affects the red or green channel will also become visible as a differently
      coloured dot that breaks the uniform yellow field.
    </p>

    <h2 className="text-lg font-bold text-fg">Yellow tinting and colour temperature</h2>
    <p>
      A yellow or warm cast on neutral content during normal use is one of the most common display
      complaints. The yellow screen test can help distinguish between a hardware fault and a calibration
      issue. If your display shows pure yellow uniformly on this test without any unusual cast or patches,
      the yellow tinting you see on white content is likely a colour temperature or white balance setting
      rather than a hardware failure. Check your monitor OSD for a colour temperature preset and consider
      switching to a cooler temperature (6500K is the standard for desktop use) or resetting to factory
      defaults.
    </p>

    <h2 className="text-lg font-bold text-fg">Using yellow alongside other colour screen tests</h2>
    <p>
      Yellow works best as part of a complete colour screen testing sequence. Running the Red Screen, Green
      Screen, Blue Screen, and Yellow Screen in order gives you the most thorough view of subpixel health
      across all three channels. The yellow screen specifically covers the scenario where a blue subpixel is
      stuck on, while the blue screen covers the scenario where red or green subpixels are stuck on. Together
      they provide complementary coverage that catches fault types each individual primary colour test might
      miss.
    </p>

    <h2 className="text-lg font-bold text-fg">What to do if you spot a fault</h2>
    <p>
      If you see a dot or spot that breaks the uniform yellow field, note its position on the screen as
      precisely as possible. Then test with the Blue Screen to confirm whether the fault involves the blue
      subpixel. Cross-reference with the Dead Pixel Test to see how the fault appears across all eight test
      colours. Document your findings with a photograph and check your monitor warranty. Most manufacturers
      have a pixel fault policy that specifies the number and position of acceptable faults before they will
      offer a repair or replacement.
    </p>
  </>
)

export default async function YellowScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('yellow-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#FFFF00', label: 'Yellow' }} />
    </ToolPageLayout>
  )
}
