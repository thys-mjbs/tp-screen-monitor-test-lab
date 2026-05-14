import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { FullscreenPanel } from '@/components/tools/FullscreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('fullscreen-colour-cycle', locale), locale)
}

const CYCLE_COLORS = [
  { hex: '#FF0000', label: 'Red' },
  { hex: '#00FF00', label: 'Green' },
  { hex: '#0000FF', label: 'Blue' },
  { hex: '#FFFFFF', label: 'White' },
  { hex: '#000000', label: 'Black' },
  { hex: '#FFFF00', label: 'Yellow' },
  { hex: '#00FFFF', label: 'Cyan' },
  { hex: '#FF00FF', label: 'Magenta' },
]

const faqs: FAQ[] = [
  {
    q: 'What is the fullscreen colour cycle test?',
    a: 'The Fullscreen Colour Cycle displays a sequence of eight solid colours across your entire screen, allowing you to manually step through each one at your own pace. It covers red, green, blue, white, black, yellow, cyan, and magenta. Each colour tests a different combination of subpixels, giving you comprehensive coverage for dead pixels, stuck subpixels, and colour accuracy in a single tool.',
  },
  {
    q: 'How do I advance between colours?',
    a: 'In fullscreen mode, click anywhere on the screen or press the spacebar or right arrow key to advance to the next colour. Press the left arrow key to go back to the previous colour. The colour name is shown briefly at the bottom of the screen when you move your mouse, then fades to let you focus on inspecting the panel.',
  },
  {
    q: 'What is the difference between this and the Dead Pixel Test?',
    a: 'The Dead Pixel Test and the Fullscreen Colour Cycle use the same eight colours and operate similarly. The key difference is control: the Dead Pixel Test cycles automatically so you can sit back and observe, while the Fullscreen Colour Cycle lets you advance at your own pace and spend more time on any colour where you think you see a fault. Use whichever suits your testing style.',
  },
  {
    q: 'Which colours are included in the cycle?',
    a: 'The cycle includes the three primary colours (red, green, blue), three secondary colours (yellow, cyan, magenta), white, and black. This set of eight colours covers all combinations of the three subpixels being fully on or fully off, which is the most thorough approach for revealing all types of subpixel faults.',
  },
  {
    q: 'Can I use this tool to check for colour accuracy?',
    a: 'You can use it as an informal colour accuracy check. On a well-calibrated display, each colour should appear saturated and clean without obvious casts. Red should look pure red without orange or pink shifts. Green should look vivid without yellow or blue tinting. Blue should look true blue without purple or teal shifts. Significant deviation from expected colours can indicate a calibration issue worth investigating.',
  },
  {
    q: 'How long should I spend on each colour?',
    a: 'Spend at least 15 to 30 seconds on each colour, scanning the entire panel methodically from corner to corner. This gives enough time to spot faults that are easy to miss with a quick glance. Pay particular attention to areas where you have previously noticed issues, and look at both the centre and edges of the panel, as faults are not always located near the centre.',
  },
  {
    q: 'Does this tool work on all monitor types?',
    a: 'Yes. The tool works on LCD, IPS, VA, TN, OLED, AMOLED, and any other display technology. The fullscreen colour cycle is a universal technique because every display technology works by controlling subpixel output, and the same fault types (dead, stuck, and hot pixels) can occur on all panel types. OLED users should also pay attention to uniformity across each colour, as OLED panels can develop ageing-related unevenness over time.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the fullscreen colour cycle works</h2>
    <p>
      The Fullscreen Colour Cycle steps through eight solid colours that collectively test every combination
      of subpixel states across your display. The three primary colours (red, green, blue) test each channel
      individually. The three secondary colours (yellow, cyan, magenta) test each pair of channels together.
      White tests all three subpixels active simultaneously. Black tests all three subpixels off. This set
      of eight colours is the standard palette used in professional monitor acceptance testing because it
      reveals every possible category of subpixel fault.
    </p>

    <h2 className="text-lg font-bold text-fg">When to use colour cycle versus individual screens</h2>
    <p>
      The colour cycle is the most efficient option for a complete inspection because it covers all eight
      test colours in a single session. Individual colour screens such as the Red Screen, Green Screen, and
      Blue Screen are better when you have already identified a suspect area and want to study it in detail
      on a specific colour without the distraction of cycling. Use the colour cycle first for a broad check,
      then switch to individual screens to investigate anything you find.
    </p>

    <h2 className="text-lg font-bold text-fg">What each colour reveals</h2>
    <p>
      Red reveals dead green and blue subpixels as bright or coloured dots. Green reveals dead red and blue
      subpixels. Blue reveals dead red and green subpixels. Yellow reveals stuck blue subpixels. Cyan reveals
      stuck red subpixels. Magenta reveals stuck green subpixels. White reveals dead pixels where all
      subpixels are off, appearing as black dots. Black reveals hot pixels where subpixels are stuck on,
      appearing as bright coloured dots. Working through all eight colours methodically leaves no fault
      category unchecked.
    </p>

    <h2 className="text-lg font-bold text-fg">Tips for accurate inspection</h2>
    <p>
      Run the test in fullscreen at your standard monitor brightness. View the panel from directly in front
      at your normal sitting distance. Reduce room lighting slightly if reflections are masking part of the
      panel. Scan each quadrant of the screen separately rather than looking at the whole display at once,
      as small pixel faults are easy to overlook when scanning too broadly. If you spot a dot that seems
      unusual, advance to the next colour and come back to confirm whether it remains visible. Faults that
      appear on multiple colours are more significant than artefacts that only show on one.
    </p>
  </>
)

export default async function FullscreenColourCyclePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('fullscreen-colour-cycle', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <FullscreenPanel colors={CYCLE_COLORS} />
    </ToolPageLayout>
  )
}
