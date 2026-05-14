import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('pink-screen', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What does a pink screen test reveal?',
    a: 'Pink is a mix of red and blue subpixels with green reduced or off. A solid pink panel is useful for spotting green subpixel faults, which appear as bright or unexpected coloured dots against the pink background. It also reveals general colour accuracy issues, as monitors with poor colour calibration may show pink with an obvious red or magenta cast instead of a true balanced pink.',
  },
  {
    q: 'Why is my monitor showing a pink tint?',
    a: 'A pink tint on your display during normal use usually indicates a colour balance problem. It can result from a display cable fault, a failing backlight, an incorrect colour profile, or in some cases a hardware fault in the display panel itself. A pink cast that appeared suddenly is more likely to be a hardware issue. One that has always been present is more likely a calibration or colour profile setting. Check your cable connections and try resetting your monitor to factory colour settings as a first step.',
  },
  {
    q: 'How does pink reveal green subpixel faults?',
    a: 'Pink is produced by combining red and blue subpixels. Because the green subpixel contributes little to the pink colour, any green subpixel that is stuck in the on state will cause its pixel to appear noticeably brighter or shift toward white compared to the surrounding pink pixels. This makes green subpixel faults more apparent on a pink background than they might be on a standard grey or white screen.',
  },
  {
    q: 'Does the pink screen help with OLED testing?',
    a: 'On OLED panels, the pink screen combines the red and blue channels, both of which age at different rates. A pink screen can help reveal uneven ageing between the red and blue organic compounds, which may appear as subtle pink-to-purple or pink-to-red shifts across different areas of the panel. For a dedicated retention and burn-in check, the Image Retention Test tool is more appropriate.',
  },
  {
    q: 'Which monitors handle pink colour most accurately?',
    a: 'Wide colour gamut monitors with factory calibration or hardware calibration generally handle pink most accurately, as they have better control over the blending of red and blue output. Budget monitors may show pink with a noticeable cast, particularly toward magenta or salmon. If colour accuracy for print or design work is important to you, testing with individual colour screens including pink can help identify whether your display needs professional calibration.',
  },
  {
    q: 'Is there a standard pink used in display testing?',
    a: 'There is no single universally agreed pink shade for display testing, unlike the standardised test charts used in professional colour calibration. This tool uses a medium pink that balances red and blue output at representative levels. Professional display calibration uses precise spectrophotometer measurements rather than visual colour tests, so this screen is best treated as a practical visual check rather than a precision measurement tool.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the pink screen test checks</h2>
    <p>
      Pink is a mixed colour produced by combining the red and blue channels while suppressing green. This
      makes the pink screen particularly useful for revealing green subpixel faults, which become visible as
      unexpectedly bright dots against the uniform pink background. It also provides a useful informal check
      on colour balance, since a monitor that is poorly calibrated may render the pink with an obvious cast
      toward magenta, salmon, or lavender. In normal use, these issues are often too subtle to notice, but
      a uniform background makes them immediately apparent.
    </p>

    <h2 className="text-lg font-bold text-fg">Pink as a complementary colour screen test</h2>
    <p>
      The primary colour screens (red, green, blue) test each channel in isolation. Secondary and mixed
      colour screens like pink and yellow test combinations of channels, catching fault types that individual
      primary screens might miss. A green subpixel fault that is borderline on a pure green background
      can become clearly visible against a pink background where the green contribution is not expected.
      Running all available colour screen tests together builds the most complete picture of subpixel
      health across the full colour space.
    </p>

    <h2 className="text-lg font-bold text-fg">Pink tinting during normal use</h2>
    <p>
      If your monitor shows an unwanted pink tint on white or grey content during everyday use, the most
      likely causes are a colour temperature setting that is too warm combined with elevated red output, a
      faulty display cable carrying a degraded signal, or incorrect colour profile settings. Try resetting
      your monitor to factory defaults and checking that the colour profile in your operating system display
      settings matches your monitor model. If the pink cast persists after these steps, a hardware fault
      in the display connection or panel itself may be the cause.
    </p>

    <h2 className="text-lg font-bold text-fg">How to use this test effectively</h2>
    <p>
      Run the pink screen in fullscreen at your usual brightness level and viewing distance. Scan the entire
      panel systematically, paying attention to any dots that differ in colour or brightness from the
      surrounding pink. Compare what you see against a mental expectation of uniform colour with no visible
      variation. If you spot something suspect, confirm it by switching to the Green Screen and Red Screen
      tests to determine which specific subpixels are involved. Document any findings for warranty purposes
      before contacting your retailer or manufacturer.
    </p>
  </>
)

export default async function PinkScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('pink-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#FF69B4', label: 'Pink' }} />
    </ToolPageLayout>
  )
}
