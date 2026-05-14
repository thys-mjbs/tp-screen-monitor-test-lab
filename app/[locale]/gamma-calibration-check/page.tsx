import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { GammaCalibrationCheck } from '@/components/tools/GammaCalibrationCheck'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('gamma-calibration-check', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is display gamma?',
    a: 'Gamma describes the relationship between the digital input signal and the brightness a display outputs. A gamma of 2.2 is the standard for consumer displays and the sRGB colour space. At gamma 2.2, mid-grey input values produce roughly the expected mid-brightness output. Displays with incorrect gamma will appear too bright (low gamma) or too dark (high gamma) across the midtone range, affecting how images and video appear.',
  },
  {
    q: 'How does this gamma test work?',
    a: 'The test uses a 1-pixel black and white checkerboard pattern, which at normal viewing distance blends into a mid-grey. Because of how gamma encoding works, a physically 50/50 mix of black and white corresponds to a specific digital grey value depending on gamma. By comparing the checkerboard to reference grey swatches labelled by gamma value, you can estimate your display\'s gamma. The swatch that most closely matches the checkerboard in brightness indicates your display\'s approximate gamma.',
  },
  {
    q: 'What gamma should my monitor be set to?',
    a: 'For most desktop use, content consumption, and photo editing in a standard office environment, gamma 2.2 is the correct setting. This matches the sRGB standard used by virtually all web images, most software, and the majority of display content. Video editors working in cinema environments sometimes use gamma 2.4. Older Mac displays used gamma 1.8, though Apple has used 2.2 as standard since Mac OS X 10.6.',
  },
  {
    q: 'My display looks too dark in the midtones. What gamma does that indicate?',
    a: 'A display that appears too dark in the midtone range while whites and blacks look correct is likely running at a gamma higher than 2.2, such as 2.4 or higher. In the gamma test, the checkerboard will appear to match a darker swatch (further right in the list) than the gamma 2.2 reference. Reducing your monitor gamma setting or adjusting the tone curve in your display\'s OSD should bring it back toward 2.2.',
  },
  {
    q: 'Can I fix incorrect gamma through software?',
    a: 'Yes. On Windows, you can use the built-in Display Calibration Wizard (search for "Calibrate display colour") to adjust gamma through a software ICC colour profile. On macOS, use System Settings > Displays > Colour Profile > Calibrate. These software corrections create an ICC profile that your operating system applies to adjust the gamma. For more precise results, a hardware colorimeter and dedicated calibration software provides a more accurate correction.',
  },
  {
    q: 'Does gamma affect the result of other monitor tests?',
    a: 'Yes. The Contrast Black Level Test and White Saturation Test both depend on correct gamma for accurate results. A display with too-high gamma may show poor shadow detail not because of a contrast ratio limitation but because the gamma curve is compressing dark tones. Running the gamma check first gives you context for interpreting the results of other calibration tests.',
  },
  {
    q: 'Why do I need to step back from the screen for this test?',
    a: 'The checkerboard pattern uses individual pixels alternating between black and white. Viewed up close, you can see the individual pixels clearly and the pattern looks checkered. As you step back, the pixels become too small to resolve individually and your eye blends them into a single grey. This blending is what the test relies on for the comparison. At a normal monitor viewing distance of 50 to 80 cm, the blend should be complete and comparable to the reference solid grey swatches.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How gamma affects image quality</h2>
    <p>
      Gamma is one of the most important but least visible aspects of display calibration. A display with
      correct gamma at 2.2 renders the full range of tones in an image as the content creator intended.
      Midtones appear naturally bright, shadows have depth without being crushed, and highlights retain
      detail without clipping. Incorrect gamma causes the entire midtone range to shift lighter or darker,
      making images appear washed out (low gamma) or overly contrasty with muddy shadows (high gamma).
    </p>

    <h2 className="text-lg font-bold text-fg">The checkerboard comparison method</h2>
    <p>
      This gamma estimation method uses the physical properties of how your eye integrates fine pixel
      patterns. A 1-pixel alternating black and white checkerboard produces 50 percent physical luminance.
      On a gamma 2.2 display, the digital value that corresponds to 50 percent physical luminance is
      approximately 186 out of 255. By comparing the checkerboard to labelled solid grey swatches and
      finding the closest match, you can estimate your display gamma without any measurement hardware.
      The test is not a substitute for hardware calibration but provides a useful quick check.
    </p>

    <h2 className="text-lg font-bold text-fg">Interpreting your result</h2>
    <p>
      If the checkerboard most closely matches the Gamma 2.2 swatch, your display is well-calibrated for
      standard use. If the checkerboard appears to match the Gamma 1.8 swatch, your display is running
      too bright in the midtones and images may appear slightly washed out. If the checkerboard most
      closely matches the Gamma 2.4 swatch, your midtones are rendered slightly darker than standard,
      which can make shadow areas of images appear denser than intended. Adjust your monitor gamma
      setting accordingly, or use your operating system display calibration tool to create a corrected
      colour profile.
    </p>

    <h2 className="text-lg font-bold text-fg">Limitations of visual gamma testing</h2>
    <p>
      Visual gamma testing using the checkerboard method is an approximation. Ambient lighting, screen
      reflections, and individual eye sensitivity all affect the result. For content that requires accurate
      gamma, such as photography, professional video, or print production, a hardware colorimeter and
      calibration software provides a measurement-based correction that is significantly more precise.
      This test is best used for a quick sanity check, for confirming that a previous calibration has not
      drifted significantly, or for identifying obvious gamma problems on an uncalibrated display.
    </p>
  </>
)

export default async function GammaCalibrationCheckPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('gamma-calibration-check', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <GammaCalibrationCheck />
    </ToolPageLayout>
  )
}
