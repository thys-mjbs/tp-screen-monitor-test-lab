import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ContrastBlackLevelTest } from '@/components/tools/ContrastBlackLevelTest'

const tool = getToolBySlug('contrast-black-level-test')!
export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What does the contrast black level test check?',
    a: 'The test displays 16 near-black patches progressing from pure black (value 0) to a dark grey (value 60), in steps of 4 out of 255. By counting how many of these steps you can distinguish as separate shades, you can assess your monitor\'s shadow detail and black level performance. A display with good contrast and correct calibration should show all 16 steps as visibly different from one another.',
  },
  {
    q: 'What does it mean if I cannot see the darkest steps?',
    a: 'If the first few steps (values 0, 4, 8) all appear as identical black, your monitor may have crushed blacks: dark tones below a certain threshold are all rendered as pure black. This causes a loss of shadow detail in dark scenes. Crushed blacks are often caused by an incorrect brightness setting, a limited colour range (16-235 instead of full 0-255), or a gamma setting that is too high.',
  },
  {
    q: 'What causes crushed blacks on a monitor?',
    a: 'The most common causes of crushed blacks are: monitor brightness set too low, limited colour range settings (sometimes called studio swing or TV range) that should be set to full or PC range, gamma calibration that is too high, and in some cases incorrect colour profiles. Check your monitor\'s brightness control first, then your GPU colour output settings to confirm you are using full RGB range rather than limited range.',
  },
  {
    q: 'What is the correct gamma setting for this test?',
    a: 'Most monitors should be set to gamma 2.2 for standard desktop use. At gamma 2.2 and correct brightness, you should be able to distinguish all 16 steps in the test. If you are using a different gamma setting (for example gamma 2.4 which is recommended for video editing in dark rooms), the darkest steps may be harder to see. The Gamma Calibration Check tool can help you estimate your current display gamma.',
  },
  {
    q: 'Is this test affected by the display technology?',
    a: 'Yes. VA panels generally show better black level separation than IPS panels due to their higher native contrast ratios. OLED panels have perfect blacks because pixels turn off completely, giving them excellent near-black separation. TN panels typically have lower contrast and may struggle with the darkest steps. The test results give you a real-world impression of your specific panel\'s black level performance rather than just the manufacturer\'s stated contrast ratio.',
  },
  {
    q: 'Should I run this test in a dark or bright room?',
    a: 'A moderately dim room gives the most accurate results. In a very bright room, reflections and ambient light falling on the panel surface can make it harder to distinguish near-black tones. In a very dark room, your eyes adapt to the dark and you may perceive more shadow detail than you would during normal use. Testing in typical usage conditions (moderate ambient lighting, no direct sunlight on the screen) gives the most representative result.',
  },
  {
    q: 'What is the relationship between contrast ratio and black level?',
    a: 'Contrast ratio is the difference between the brightest white and darkest black a display can produce. A higher contrast ratio generally means deeper blacks and better shadow detail. However, stated contrast ratios from manufacturers are measured under specific conditions that may not reflect everyday use, particularly for local dimming monitors where the contrast varies across the screen. The black level test gives a practical view of shadow detail performance that complements the stated contrast ratio.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the contrast black level test works</h2>
    <p>
      The test displays 16 patches progressing from pure black (RGB 0) to a dark grey (RGB 60) in increments
      of 4. These near-black steps sit in the shadow range of the tonal scale, the area where many displays
      struggle most. A monitor with good black level performance and correct calibration will show each step
      as a visibly distinct shade. A monitor with crushed blacks or incorrect brightness calibration will
      merge the darkest steps together, making them indistinguishable from pure black.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding shadow detail and why it matters</h2>
    <p>
      Shadow detail refers to a display&apos;s ability to render subtle differences between dark tones. In
      practice, this affects how well you can see detail in dark video scenes, shadow areas in photography,
      and dark game environments. A display that crushes shadow tones loses detail that was present in the
      original content. Whether this matters for your use depends on how frequently you work with or view
      dark content, and how critical accurate shadow reproduction is for your workflow.
    </p>

    <h2 className="text-lg font-bold text-fg">Adjusting your display for better black levels</h2>
    <p>
      If the test reveals crushed blacks, start by checking your monitor brightness setting. Many monitors
      are shipped with brightness set higher than is needed, which can paradoxically make dark tones harder
      to distinguish by raising the overall black floor. Reduce brightness gradually until dark steps become
      visible. Next, check your GPU colour output settings and confirm you are using full RGB range (0-255)
      rather than limited range (16-235). Limited range causes the display to treat values below 16 as pure
      black, which directly causes the kind of shadow crushing this test reveals.
    </p>

    <h2 className="text-lg font-bold text-fg">Panel technology and black level performance</h2>
    <p>
      The type of panel technology in your monitor has a significant impact on black level performance.
      VA panels typically achieve contrast ratios of 3000:1 to 6000:1, giving them deep blacks and strong
      shadow detail. IPS panels typically achieve around 1000:1 to 1500:1, which means their blacks are
      slightly lifted compared to VA. OLED panels achieve near-infinite contrast because each pixel can turn
      completely off, giving them the deepest blacks and the best near-black shadow separation of any current
      display technology.
    </p>
  </>
)

export default function ContrastBlackLevelTestPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ContrastBlackLevelTest />
    </ToolPageLayout>
  )
}
