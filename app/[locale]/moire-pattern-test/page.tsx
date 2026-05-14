import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { MoirePatternTest } from '@/components/tools/MoirePatternTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('moire-pattern-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is moire and when does it appear on a monitor?',
    a: 'Moire is an interference pattern that appears when two or more repetitive patterns with similar but not identical frequencies overlap. On a monitor, moire occurs when rendered content contains fine detail at a frequency close to the pixel pitch of the display. It appears as wavy bands or undulating patterns that are not present in the original content. Moire is most commonly caused by displaying content at a non-native resolution or viewing very fine printed material on screen.',
  },
  {
    q: 'How do I use the moire pattern test?',
    a: 'Select a line pattern from the grid, then click View Fullscreen. View the pattern from your normal sitting distance. If the pattern appears as clean, evenly spaced lines with a consistent appearance across the screen, moire is not a significant issue for that pattern type. If you see wavy interference bands, undulating brightness variations, or irregular-looking areas that vary across the screen, moire is present. Fine patterns (1px lines) are most likely to show moire.',
  },
  {
    q: 'Is moire always a sign of a display fault?',
    a: 'No. Some amount of moire in fine patterns is expected on any display when the pattern frequency approaches the Nyquist limit of the pixel pitch. Perfect anti-aliasing of all frequencies is not physically possible. Moire becomes a concern when it appears in content that should look clean at the display\'s native resolution, such as fine lines in UI elements or text at certain sizes. If moire only appears in the 1px test patterns and not in your normal content, the display is likely performing as expected.',
  },
  {
    q: 'What causes moire in real-world content?',
    a: 'In everyday use, moire most commonly appears when scanning printed materials such as newspapers or magazines (the printed halftone pattern interferes with the scanner or camera pixel grid), when capturing photographs of fine fabric textures, or when displaying screenshots or screen recordings captured at a different resolution than the display. Moire in rendered UI elements or text is less common but can occur at certain fractional scaling factors.',
  },
  {
    q: 'Can moire be fixed?',
    a: 'The most effective fix depends on the cause. Moire from scaling is resolved by ensuring your display runs at native resolution with no fractional scaling. Moire from scanned content can be reduced with post-processing blur or dithering in image editing software. Some monitors include an anti-moire filter or have de-moire settings in their OSD. If moire is only visible on the 1px test patterns and not during normal use, no fix is necessary.',
  },
  {
    q: 'Does monitor type or resolution affect moire?',
    a: 'Yes. Higher-resolution displays are less susceptible to moire in practice because their smaller pixel pitch means that most real-world content frequencies do not approach the Nyquist limit. A 4K monitor at 27 inches (163 PPI) has a much smaller chance of showing moire in everyday content than a 1080p monitor at 27 inches (82 PPI). Anti-glare screen coatings can also slightly diffuse patterns and reduce moire visibility, though this is a secondary effect.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What moire reveals about your display</h2>
    <p>
      Moire is an optical interference effect that occurs when a fine periodic pattern in the content
      interacts with the regular pixel grid of the display. The result is a visible secondary pattern of
      bands or undulations that is not present in the source content. In the context of monitor testing,
      moire patterns in fine line tests can reveal whether your display is applying any additional
      interpolation, whether it is running at a non-native resolution, or in rare cases whether the
      display has an unusual subpixel arrangement that causes interference at certain pattern frequencies.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding the Nyquist limit and aliasing</h2>
    <p>
      Every display has a pixel pitch, the physical distance between adjacent pixels. Patterns with a
      spatial frequency higher than half the pixel density (the Nyquist limit) cannot be reproduced
      accurately and will alias, producing interference artefacts. A 1px alternating black and white
      pattern is at the absolute limit of what a display can represent: one black pixel, one white pixel,
      repeating. At this extreme frequency, small variations in the rendering pipeline become visible as
      moire. This is why the 1px patterns in this test are the most revealing: they stress-test the
      display at its resolution limit.
    </p>

    <h2 className="text-lg font-bold text-fg">Moire from scaling</h2>
    <p>
      The most common source of visible moire in everyday monitor use is incorrect scaling. When your
      operating system applies fractional scaling (for example, 125 percent or 150 percent), the rendered
      pixels do not map one-to-one to the physical panel pixels. This misalignment creates an
      interference pattern between the rendered grid and the physical pixel grid. The moire pattern test
      can confirm whether scaling is the source of artefacts you see during normal use. If moire is only
      present at high pattern frequencies and not in scaled-UI content, the display is functioning
      correctly.
    </p>

    <h2 className="text-lg font-bold text-fg">What a passing result looks like</h2>
    <p>
      On a display running at native resolution with no fractional scaling, the 2px and 4px line patterns
      should appear as clean, evenly spaced lines with no wavy interference bands. The 1px pattern may show
      some irregularity because it is at the fundamental resolution limit of the display, and that is expected.
      If the 2px patterns show significant moire visible at normal viewing distance, check your display
      resolution and scaling settings before concluding the panel has a hardware issue.
    </p>
  </>
)

export default async function MoirePatternTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('moire-pattern-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <MoirePatternTest />
    </ToolPageLayout>
  )
}
