import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('green-screen', locale))
}

const faqs: FAQ[] = [
  {
    q: 'Is this the same as a chroma key green screen for video?',
    a: 'No. This tool displays a solid green panel for monitor hardware testing purposes only. Chroma key green screens used in video production are a specific shade of green (often called chroma green or key green) selected for its separation from human skin tones in video software. This tool fills your display with green to help you inspect pixels and subpixels, not for video background removal.',
  },
  {
    q: 'What does a green screen test reveal on a monitor?',
    a: 'A solid green panel isolates the green subpixel channel across your entire display. Dead or faulty red and blue subpixels appear as dots that differ from the surrounding green. A pixel with a failed red subpixel stuck in an on state will appear cyan against a green background. A pixel with a dead green subpixel will appear as a dark dot. These faults are often missed by white or grey screen tests.',
  },
  {
    q: 'Why does my screen have a green tint?',
    a: 'A persistent green tint on your monitor during normal use usually indicates a colour calibration problem, incorrect white balance, or a misconfigured colour profile. It can also be caused by a loose or damaged display cable affecting signal quality. If the green tint appeared suddenly, check your cable connections before adjusting software settings. If it appeared gradually, a colour calibration reset or hardware calibration may help.',
  },
  {
    q: 'Why is green used so prominently in monitor testing?',
    a: 'Green occupies the largest portion of the visible spectrum that humans perceive as luminance. The human eye is most sensitive to green light, which is why the green subpixel contributes roughly 59 percent of perceived brightness in standard colour formulas. This sensitivity means green subpixel faults are often more noticeable than red or blue faults at equivalent severity levels, making the green channel particularly important to test.',
  },
  {
    q: 'How does the green screen compare to the Dead Pixel Test?',
    a: 'The Dead Pixel Test cycles through multiple colours automatically, making it a faster way to check for all types of pixel faults in one session. The green screen (and the other individual colour screens) gives you more time to carefully inspect a single colour channel without cycling. Use the individual colour screens if you want to study a specific area of the panel in detail, or to confirm a fault spotted during the Dead Pixel Test.',
  },
  {
    q: 'Should I test in fullscreen mode?',
    a: 'Yes. Clicking Full Screen fills your entire display with green rather than just the panel area within the page. This is the correct way to test your monitor, as the in-page panel only covers part of the display. Fullscreen mode lets you inspect every pixel on the panel, including areas near the screen edges that may be partially hidden by the browser window frame during in-page testing.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the green screen test checks</h2>
    <p>
      A fullscreen green panel is one of the most sensitive single-colour tests you can run on your display.
      Because the human eye is more sensitive to green than to red or blue, green subpixel faults produce a
      more noticeable visual difference against the uniform background. Dead, stuck, or weakened red and blue
      subpixels appear as coloured dots that stand out clearly from the surrounding green. This makes the
      green screen particularly effective for catching faults that might be overlooked on a white or grey
      background.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding subpixel faults on the green channel</h2>
    <p>
      Each pixel on your monitor has three subpixels: red, green, and blue. A solid green panel asks every
      green subpixel to turn fully on while red and blue subpixels remain off. Faults become visible in
      predictable ways depending on which subpixels are affected. A blue subpixel stuck in the on state
      causes a cyan dot. A red subpixel stuck on causes a yellow dot. A dead green subpixel causes a dark
      dot that is visible even at normal brightness. Combining the green screen test with the Red Screen and
      Blue Screen tests ensures comprehensive subpixel coverage.
    </p>

    <h2 className="text-lg font-bold text-fg">Green screen versus the Dead Pixel Test</h2>
    <p>
      The Dead Pixel Test cycles through colours automatically, giving you a fast overall check. Individual
      colour screen tests like this one give you time to study a specific channel without distraction. If the
      Dead Pixel Test revealed a suspect dot but you want to understand exactly which subpixels are affected,
      switching between the red, green, and blue screens in isolation tells you precisely which subpixel has
      failed. A dot that appears on the green screen but not on the red screen indicates a fault in the red
      or blue subpixel rather than the green subpixel itself.
    </p>

    <h2 className="text-lg font-bold text-fg">Getting the best results from this test</h2>
    <p>
      Run the test in fullscreen at your normal monitor brightness. Look at the panel straight on from your
      usual sitting position. Scan each quadrant of the screen methodically rather than the display as a
      whole. The green channel is particularly bright and can cause temporary eye adjustment if you have been
      looking at darker content. Allow a few seconds for your eyes to adjust before beginning your inspection.
      If you identify a fault, note its approximate position on the screen (distance from the top and left
      edges) so you can reference it when contacting your manufacturer or retailer.
    </p>
  </>
)

export default async function GreenScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('green-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#00FF00', label: 'Green' }} />
    </ToolPageLayout>
  )
}
