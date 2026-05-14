import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('red-screen', locale))
}

const faqs: FAQ[] = [
  {
    q: 'What does a red screen test reveal?',
    a: 'A red screen isolates the red subpixel channel, making faults in the green and blue subpixels immediately visible. Any pixel that cannot display pure red correctly will appear as a dark spot, a differently coloured dot, or a discoloured patch against the uniform red background. It is particularly effective for spotting dead subpixels that only affect one colour channel.',
  },
  {
    q: 'How do I use the red screen to check subpixels?',
    a: 'Click Full Screen and scan the entire panel from a normal viewing distance. Dead or faulty green and blue subpixels appear as visible dots that differ from the surrounding red. Because each pixel is made of three subpixels (red, green, blue), a subpixel fault that is invisible on white or grey screens often becomes visible when you isolate a single colour channel.',
  },
  {
    q: 'Why does my monitor have a red tint on a white or grey background?',
    a: 'A red tint on neutral colours usually indicates a colour temperature calibration issue or an incorrect white balance setting. It can also be caused by a failing backlight, damaged display cable, or a misconfigured colour profile in your operating system display settings. If the tint disappears when you use a colour-managed application, the issue is likely a software setting rather than a hardware fault.',
  },
  {
    q: 'Is looking at a red screen for extended periods safe for my eyes?',
    a: 'A solid red screen is not harmful to your eyes in the same way that staring at bright direct light might be. However, strong saturated red at high brightness can be uncomfortable for some people over extended periods. Reduce your monitor brightness before running any single-colour screen test if you find it uncomfortable. The test itself takes only a few minutes.',
  },
  {
    q: 'Can the red screen reveal image retention or burn-in on an OLED display?',
    a: 'Yes. On OLED panels, a solid red screen can reveal areas of differential ageing where the red organic compounds have degraded unevenly. Burnt-in content from previous use may appear as a faint shadow with a slightly different red intensity. For a dedicated burn-in test, use the Image Retention Test tool, which is designed specifically for this purpose.',
  },
  {
    q: 'Should I test with red, green, and blue screens separately?',
    a: 'Testing with all three primary colour screens gives the most complete subpixel check. A pixel fault that is invisible on one colour may be clearly visible on another, depending on which subpixels are affected. Running all three colour screens takes only a few minutes and gives you confidence that no subpixel faults have been missed by a single-colour check.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the red screen test reveals</h2>
    <p>
      A fullscreen red panel isolates the red colour channel across your entire display, making it one of the
      most targeted tests you can run for subpixel faults. When every pixel on your screen is asked to show
      pure red, any pixel that cannot do so correctly stands out immediately. Dead or weakened green and blue
      subpixels become visible as dots that differ in colour or brightness from the surrounding uniform red.
      These faults are often completely invisible during normal use or on white and grey backgrounds.
    </p>

    <h2 className="text-lg font-bold text-fg">How subpixel testing with primary colours works</h2>
    <p>
      Every pixel on your monitor is made up of three subpixels: red, green, and blue. When all three are
      active at full intensity, you see white. When none are active, you see black. By displaying a solid red
      panel, you are asking the red subpixel in every pixel to turn fully on while the green and blue
      subpixels remain off. Any green or blue subpixel that has failed in an on state will cause its pixel
      to show as yellow, magenta, or white rather than red. Any subpixel stuck off will cause a darker dot.
      Repeat the test with the Green Screen and Blue Screen tools to cover all three channels.
    </p>

    <h2 className="text-lg font-bold text-fg">Red screen and colour accuracy checks</h2>
    <p>
      The red screen is also a useful informal indicator of colour accuracy. On a well-calibrated monitor, pure
      red should appear as a clean, saturated red with no visible orange or pink cast. If the red appears
      noticeably orange or brick-coloured compared to other displays, your monitor may benefit from a colour
      profile adjustment or hardware calibration. These observations are qualitative rather than precise
      measurements, but they can flag an obvious calibration issue before you reach for a colorimeter.
    </p>

    <h2 className="text-lg font-bold text-fg">How to get accurate results</h2>
    <p>
      Run the red screen test with your monitor at its normal brightness setting and in a room with moderate
      ambient lighting. Avoid testing in very bright rooms where screen reflections can mask small pixel
      faults. View the panel straight on from your normal sitting position rather than at an angle. Scan each
      quadrant of the screen methodically rather than looking at the display as a whole, as small subpixel
      faults are easy to miss with a quick glance. If you find a suspect dot, confirm it by switching to the
      Green Screen and Blue Screen tools to determine which subpixels are affected.
    </p>
  </>
)

export default async function RedScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('red-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#FF0000', label: 'Red' }} />
    </ToolPageLayout>
  )
}
