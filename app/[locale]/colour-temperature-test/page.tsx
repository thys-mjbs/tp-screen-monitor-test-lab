import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ColourTemperatureTest } from '@/components/tools/ColourTemperatureTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('colour-temperature-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is colour temperature on a monitor?',
    a: 'Colour temperature describes the tint of the white point on your display, measured in Kelvin. Lower values such as 2700K produce a warm orange-white, similar to incandescent lighting. Higher values such as 9000K produce a cool blue-white. The standard monitor white point for most content is 6500K, known as D65. A monitor set to a lower colour temperature will appear warmer or yellower than intended, while one set higher will appear cooler or bluer.',
  },
  {
    q: 'What is the D65 standard?',
    a: 'D65 is the international standard white point for consumer displays, defined at a colour temperature of approximately 6500K. It represents average daylight in northern Europe and is the reference point for the sRGB, Display P3, and most other colour spaces used in consumer content. Nearly all photos, videos, and games are mastered assuming the viewer has a D65-calibrated display. Deviating from D65 causes content to appear with an unintended colour cast.',
  },
  {
    q: 'How do I use this colour temperature test?',
    a: 'Look at the row of swatches on a dark background and click the one that looks like the most neutral, pure white to you. The swatches range from very warm (2700K, orange-tinted) on the left to very cool (10000K, blue-tinted) on the right, with pure white D65 at 6500K. If the swatch you find neutral is warmer than 6500K, your monitor likely has a cool blue tint. If the neutral swatch is cooler than 6500K, your monitor likely has a warm yellow tint.',
  },
  {
    q: 'My selected swatch was warmer than D65. What does this mean?',
    a: 'If a warm swatch appeared most neutral to you, your monitor probably has a cool or blue-shifted white point. Your eyes are compensating by perceiving warm light as neutral. Try entering your monitor\'s on-screen display menu and reducing the colour temperature setting, or try the "Warm" or "6500K" preset if available. If the tint is severe, a hardware colorimeter and calibration software will give a more precise result.',
  },
  {
    q: 'My selected swatch was cooler than D65. What does this mean?',
    a: 'If a cool swatch appeared most neutral to you, your monitor probably has a warm or yellow-shifted white point. Try entering your monitor\'s on-screen display and increasing the colour temperature setting, or selecting a "Cool" or "6500K" preset. Warm monitor tints are common at lower brightness settings on some LCD panels, and are also common on monitors set to a "Warm" or "Reading" mode.',
  },
  {
    q: 'What colour temperature setting should I use for my monitor?',
    a: 'For general use including photo editing, video, and web browsing, 6500K (D65) is the correct standard. Some monitors label this as "6500K", "sRGB", or "Standard" mode. For work environments with warm incandescent lighting, some users prefer 5000K to 5500K for comfort. For night use, a warmer 3000K to 4000K setting reduces blue light exposure. These are not display calibration targets but personal comfort preferences for non-critical work.',
  },
  {
    q: 'Does room lighting affect what I see in this test?',
    a: 'Yes, significantly. Your visual system adapts to the dominant light source in your environment. If your room is lit with warm incandescent bulbs, your eyes will adapt to that warmth and cause cool monitor colours to appear more neutral. For the most accurate result, perform this test in a darkened room with no other significant light sources, or with neutral daylight-balanced lighting. Allow your eyes to adapt to the screen for 30 seconds before making a selection.',
  },
  {
    q: 'Is this test as accurate as hardware calibration?',
    a: 'No. This test is a subjective visual assessment and is affected by eye adaptation, ambient lighting, and individual colour perception differences. It is useful for identifying obvious white balance problems but cannot replace a hardware colorimeter such as an X-Rite i1Display or Datacolor Spyder. Hardware calibration measures your display\'s output objectively and creates an ICC profile that corrects the colour accuracy at every point in the tonal range.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the colour temperature test works</h2>
    <p>
      The test displays eleven colour swatches against a dark neutral surround, ranging from 2700K
      (warm, orange-tinted white) on the left to 10000K (cool, blue-tinted white) on the right. The
      6500K swatch is pure RGB white and represents the D65 standard. When you click the swatch that
      appears most neutral to you, the test infers the likely tint direction of your monitor. If a warm
      swatch looks neutral, your display is likely running cool. If a cool swatch looks neutral, your
      display is likely running warm.
    </p>

    <h2 className="text-lg font-bold text-fg">Why the dark surround matters</h2>
    <p>
      Colour perception is strongly influenced by surrounding colours, a phenomenon called simultaneous
      contrast. Viewing coloured swatches against a dark neutral background minimises this effect and
      gives the most accurate read of each swatch&apos;s colour. Viewing the test against a white or
      coloured page background would distort your perception. The dark panel in this test is deliberate
      and mimics the conditions used in professional colour evaluation environments.
    </p>

    <h2 className="text-lg font-bold text-fg">How to adjust your monitor colour temperature</h2>
    <p>
      Most monitors include a colour temperature setting in their on-screen display menu, often labelled
      as Warm, Normal, Cool, or a specific Kelvin value. For standard content the correct target is
      6500K. If your monitor offers custom RGB gain controls, you can fine-tune the individual red,
      green, and blue channels to shift the white point. Professional calibration using a hardware
      colorimeter produces a precise ICC profile that corrects colour throughout the full tonal range,
      which is particularly important for photo editing and colour-critical work.
    </p>

    <h2 className="text-lg font-bold text-fg">Limitations of subjective white balance testing</h2>
    <p>
      This test relies on your visual judgement, which is affected by eye adaptation, room lighting,
      fatigue, and individual differences in colour perception. Some people have naturally shifted
      colour perception that causes them to see warm or cool as neutral without any monitor error. For
      a definitive result, hardware calibration is the only reliable method. Use this test to identify
      whether an obvious tint problem exists and whether it is worth investigating further with proper
      measurement tools.
    </p>
  </>
)

export default async function ColourTemperatureTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('colour-temperature-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ColourTemperatureTest />
    </ToolPageLayout>
  )
}
