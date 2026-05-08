import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { WhiteSaturationTest } from '@/components/tools/WhiteSaturationTest'

const tool = getToolBySlug('white-saturation-test')!
export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What does the white saturation test check?',
    a: 'The test displays 16 near-white patches stepping from pure white (255) down to a light grey (196) in increments of 4. By counting how many distinct shades you can see against the white background, you can assess your monitor\'s highlight detail and white saturation performance. A display with correct calibration should show all 16 steps as visibly different from pure white.',
  },
  {
    q: 'What does it mean if I cannot see the lightest steps?',
    a: 'If the first several swatches all look identical to the white background, your display may be clipping highlights, compressing near-white tones to pure white and losing detail in bright areas. This is called blown highlights and is the opposite of crushed blacks. Highlight clipping is often caused by contrast or brightness settings that are too high, or by limited colour range settings that compress the upper end of the tonal scale.',
  },
  {
    q: 'What causes highlight clipping on a monitor?',
    a: 'The most common causes are: monitor contrast setting too high, which can push near-white tones to pure white; incorrect colour range settings using a limited range (16-235) instead of full range (0-255), which clips both highlights and shadows; and gamma settings that are too low, which lightens the tonal curve and clips the bright end. Check your monitor contrast control first, then confirm you are using full RGB colour range in your GPU settings.',
  },
  {
    q: 'Is the white saturation test the opposite of the black level test?',
    a: 'Yes, they test opposite ends of the tonal scale. The Contrast Black Level Test checks your display\'s ability to distinguish near-black tones, which reveals issues like crushed blacks and poor shadow detail. The White Saturation Test checks the other end, testing whether near-white tones are preserved or compressed to pure white. A well-calibrated display should pass both tests, showing distinct steps at both ends of the tonal scale.',
  },
  {
    q: 'Does monitor brightness affect the white saturation test?',
    a: 'Yes. Increasing brightness raises the overall light output of the panel. While this makes the panel look brighter overall, it does not necessarily affect whether near-white tones are distinguishable; that is more a contrast and gamma setting issue. However, some monitors apply different tone curves at different brightness settings, which can affect how well near-white tones are separated. Testing at your normal brightness setting gives the most representative result.',
  },
  {
    q: 'How many steps should I be able to see on a good monitor?',
    a: 'On a well-calibrated 8-bit display with correct gamma and colour range settings, you should be able to distinguish all 16 steps, though the lightest two or three near pure white may require careful inspection. On a 10-bit display, near-white steps should be clearly visible across the full range. If you can only see 8 to 10 distinct steps, your highlight calibration may benefit from adjustment.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the white saturation test works</h2>
    <p>
      The test presents 16 near-white patches on a pure white background, stepping from pure white (value 255)
      down to a light grey (value 196) in steps of 4. These highlight tones represent the brightest range
      of the tonal scale, where many displays struggle to maintain separation. A display with correct gamma,
      contrast, and colour range settings will show each step as a visibly distinct shade slightly darker
      than the white background. A display with highlight clipping will merge the lightest patches together,
      making them indistinguishable from pure white.
    </p>

    <h2 className="text-lg font-bold text-fg">Why highlight detail matters</h2>
    <p>
      Highlight clipping affects how well you can see detail in bright areas of images, video, and documents.
      A display that clips highlights makes sky gradations in photographs appear as flat white, removes
      cloud texture, and loses detail in bright interior photography. For general office use this is less
      critical, but for photographers, video editors, and anyone doing colour-accurate work, proper highlight
      reproduction is as important as shadow detail.
    </p>

    <h2 className="text-lg font-bold text-fg">Fixing highlight clipping</h2>
    <p>
      If the test reveals highlight clipping, the first step is to reduce your monitor contrast setting.
      Many monitors ship with contrast set higher than is optimal for highlight retention. A contrast
      setting of 50 to 70 out of 100 is a reasonable starting point for most monitors. Next, confirm that
      your GPU colour output is set to full range (0-255 RGB) rather than limited range (16-235). Limited
      range compresses both ends of the tonal scale, causing simultaneous shadow crushing and highlight
      clipping. After adjusting these settings, re-run both the white saturation and black level tests to
      confirm both ends of the scale are correct.
    </p>

    <h2 className="text-lg font-bold text-fg">White saturation test and HDR content</h2>
    <p>
      If your display supports HDR, note that HDR content uses a different tone mapping curve (typically
      PQ or HLG) that extends the highlight range well beyond the 0-255 range used in SDR content. This
      test uses the standard SDR 0-255 range and is designed for checking SDR calibration. HDR monitors
      with local dimming may also display differently in HDR mode compared to SDR mode; run the test
      with your monitor in SDR mode for the most accurate baseline calibration check.
    </p>
  </>
)

export default function WhiteSaturationTestPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <WhiteSaturationTest />
    </ToolPageLayout>
  )
}
