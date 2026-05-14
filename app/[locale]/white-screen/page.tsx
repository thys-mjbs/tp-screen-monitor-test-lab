import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('white-screen', locale))
}

const faqs: FAQ[] = [
  {
    q: 'What is a white screen used for in monitor testing?',
    a: 'A white screen is used to reveal dead pixels, check display uniformity, and inspect your monitor for brightness inconsistencies. Because white requires all subpixels to be active, any pixel that is dark or discoloured stands out immediately against the bright background. It is one of the most revealing single-colour tests you can run.',
  },
  {
    q: 'How do I use the white screen for monitor cleaning?',
    a: 'Click Full Screen to fill your display with white, then power off or lock your device and clean the screen normally with a dry microfibre cloth. The white background makes dust, smudges, and fingerprints far easier to see than when the screen is showing normal content. Use the white screen before and after cleaning to confirm results.',
  },
  {
    q: 'Can I use the white screen to find dead pixels?',
    a: 'Yes. Dead pixels appear as small dark or black dots against a white background, making them easy to spot. For a more thorough check, use the Dead Pixel Test tool, which cycles through eight colours including white, to catch different types of pixel defects including stuck pixels locked to a specific colour.',
  },
  {
    q: 'What is display uniformity and how does the white screen help?',
    a: 'Display uniformity refers to how evenly brightness is distributed across the panel. An ideal monitor shows the same brightness level at every point. A white fullscreen panel makes uneven brightness, cloudy patches, and vignetting visible immediately. These issues are often invisible during normal use but become obvious against a plain white background.',
  },
  {
    q: 'Why does the white screen look slightly grey or yellow on some monitors?',
    a: 'A screen that appears slightly grey, yellow, or warm on a white background is showing its colour temperature or backlight characteristics. Monitors with a warm colour temperature skew slightly yellow. Some IPS panels show slight glow near edges when viewed at an angle. These are normal display characteristics, not faults, although calibration can improve accuracy.',
  },
  {
    q: 'Is a fullscreen white panel safe for my monitor?',
    a: 'Yes, a static white screen is completely safe for all display types including LCD, IPS, OLED, and AMOLED. Unlike the rapid flashing used in stuck pixel fixers, a static solid colour causes no stress to the panel. You can leave the white screen displayed for as long as needed for cleaning or inspection purposes.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to use the white screen for display inspection</h2>
    <p>
      A plain white panel fills every pixel on your display to maximum brightness, making it one of the
      most useful tools for checking monitor quality. Dark or discoloured pixels that are invisible during
      normal use become obvious against a uniform white background. Bright-screen inspection is a standard
      step used by display technicians and reviewers before and after monitor testing.
    </p>

    <h2 className="text-lg font-bold text-fg">Cleaning your monitor with the white screen</h2>
    <p>
      White is the most effective background colour for spotting dust, fingerprints, and smudges on your
      screen surface. Click the Full Screen button, then use a dry microfibre cloth to clean your display.
      Avoid paper towels or any cloth that could scratch the panel coating. The white background makes it
      easy to see exactly which areas you have cleaned and which still need attention. For stubborn marks,
      use a cloth slightly dampened with distilled water only.
    </p>

    <h2 className="text-lg font-bold text-fg">What display problems does a white screen reveal?</h2>
    <p>
      A fullscreen white panel reveals several categories of display issues. Dead pixels appear as
      consistently dark spots. Dirty screen effect shows as cloudy or patchy brightness variations across
      the panel. Backlight uniformity issues appear as noticeably brighter or darker areas near panel
      edges or corners. IPS glow and backlight bleed are sometimes visible in the corners when the screen
      is viewed at an angle. For checking specifically for backlight bleed and glow, the Black Screen
      tool gives a more accurate result.
    </p>

    <h2 className="text-lg font-bold text-fg">Tips for getting the most from this test</h2>
    <p>
      Use the white screen in a room with moderate lighting and view the panel from directly in front at
      your normal sitting distance. Avoid testing with bright direct light falling on the screen surface,
      as reflections can mask display defects. Take a moment to scan each quadrant of the panel rather
      than the whole screen at once. If you spot a dark dot that stays in the same position regardless
      of what is shown on screen, run the Dead Pixel Test to confirm whether it is a dead or stuck pixel.
    </p>
  </>
)

export default async function WhiteScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('white-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#FFFFFF', label: 'White' }} />
    </ToolPageLayout>
  )
}
