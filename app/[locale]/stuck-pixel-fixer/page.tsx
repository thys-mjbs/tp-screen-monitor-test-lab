import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { StuckPixelFixer } from '@/components/tools/StuckPixelFixer'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('stuck-pixel-fixer', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is a stuck pixel?',
    a: 'A stuck pixel is a pixel that is still receiving power but is locked to a single colour, most commonly red, green, or blue. Unlike a dead pixel, which stays permanently black, a stuck pixel glows with a fixed colour regardless of what is being displayed on screen. Stuck pixels are caused by a transistor fault that keeps one or more subpixels in a permanent on state.',
  },
  {
    q: 'How does the stuck pixel fixer work?',
    a: 'The tool rapidly cycles through a sequence of saturated colours at high speed. The theory is that the rapid electrical switching stimulates the stuck pixel transistor and may cause it to return to normal operation. The technique has a reported success rate of around 60 percent for genuinely stuck pixels when run for a sufficient length of time. It does not work on dead pixels, which are a different type of hardware failure.',
  },
  {
    q: 'How long should I run the stuck pixel fixer?',
    a: 'Run the tool for at least 20 to 30 minutes for best results. Some users have reported success after just a few minutes, while others have needed to run it for several hours. If there is no improvement after two or three hours of continuous running, the pixel is unlikely to respond to this technique. You can run the tool in fullscreen and leave it while you do other tasks.',
  },
  {
    q: 'What is the success rate for fixing a stuck pixel?',
    a: 'Results vary significantly. Some stuck pixels respond quickly and some never respond at all. Pixels that have been stuck for a shorter time tend to have a higher success rate than long-standing faults. The technique works best on pixels where the transistor has become temporarily jammed rather than physically damaged. There is no guarantee of success and the tool is best treated as a free first attempt before seeking a warranty replacement.',
  },
  {
    q: 'Can this tool fix dead pixels?',
    a: 'No. Dead pixels are caused by a complete failure of the pixel transistor, meaning no power reaches the pixel at all. Rapid colour flashing has no effect on dead pixels because there is no electrical activity to stimulate. The Stuck Pixel Fixer only works on stuck pixels, which are still powered but locked to a colour. Use the Dead Pixel Test to determine whether your pixel is dead or stuck.',
  },
  {
    q: 'Is rapid colour flashing safe for my screen?',
    a: 'Yes, the flashing is safe for your display panel. The electrical activity involved is within the normal operating range of the display. However, people with photosensitive epilepsy or sensitivity to flickering light should not use this tool or should have someone else run it and monitor progress. The Rapid speed setting produces very fast flashing, so use a slower speed if the visual is uncomfortable.',
  },
  {
    q: 'Which speed setting should I use?',
    a: 'Normal or Fast are the most commonly recommended settings. Normal (100ms intervals) provides a steady cycle that most displays respond to. Fast (50ms) is more aggressive and may be more effective for persistent stuck pixels. Rapid (25ms) is the most intense and should be used with caution by anyone sensitive to flickering. Slow (200ms) is useful if you want a milder approach or are sensitive to rapid visual changes.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the stuck pixel fixer works</h2>
    <p>
      The tool cycles rapidly through a sequence of eight saturated colours at high frequency. The
      electrical switching involved in rapidly changing pixel states can sometimes cause a stuck
      transistor to reset and return to normal operation. This technique has been used by display
      technicians and enthusiasts for many years. While results are not guaranteed, it is a safe and
      free option worth trying before pursuing a warranty replacement.
    </p>

    <h2 className="text-lg font-bold text-fg">How long to run the tool</h2>
    <p>
      Give the fixer at least 20 to 30 minutes of continuous running before evaluating results. Click
      the Fullscreen button to target the flash at your full display and then leave it running while
      you do other tasks. Check back periodically. If the stuck pixel has not improved after two to
      three hours of running, it is unlikely to respond to this approach. Pixels that have been stuck
      for a shorter period tend to respond more readily than faults that have been present for weeks
      or months.
    </p>

    <h2 className="text-lg font-bold text-fg">What to do if the fixer does not work</h2>
    <p>
      If the pixel does not respond after extended running, check your display warranty. Most monitor
      manufacturers have a dead and stuck pixel policy that allows for a replacement if the number or
      position of pixel faults exceeds their threshold. Contact your retailer or manufacturer with
      the results of this test and the Dead Pixel Test tool as evidence. For displays still within the
      return window at your retailer, a return or exchange may be the fastest resolution.
    </p>

    <h2 className="text-lg font-bold text-fg">Stuck pixels versus dead pixels</h2>
    <p>
      It is important to confirm that your pixel is stuck rather than dead before running this tool.
      A stuck pixel glows with a fixed colour (red, green, blue, or white) and is visible against most
      backgrounds. A dead pixel stays permanently dark and is most visible against a bright white
      background. Run the Dead Pixel Test and cycle through all eight colours. If the dot changes in
      appearance against different backgrounds, it is likely stuck. If it stays consistently dark
      regardless of background colour, it is likely dead and this tool will not help.
    </p>
  </>
)

export default async function StuckPixelFixerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('stuck-pixel-fixer', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <StuckPixelFixer />
    </ToolPageLayout>
  )
}
