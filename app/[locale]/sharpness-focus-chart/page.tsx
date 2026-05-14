import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { SharpnessFocusChart } from '@/components/tools/SharpnessFocusChart'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('sharpness-focus-chart', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What does the sharpness focus chart test?',
    a: 'The chart presents several fine line patterns including horizontal lines, vertical lines, and diagonal patterns at different pixel widths, plus a cross-hatch grid. A sharp display renders these patterns as clean, distinct lines with clear edges. A soft display shows blurred or indistinct lines. Oversharpened displays show ringing, visible as bright halos along the edges of the lines. Each pattern type tests a different aspect of the display\'s rendering accuracy.',
  },
  {
    q: 'What is the difference between soft and oversharpened?',
    a: 'Softness appears as blurred or indistinct lines where sharp edges appear gradual rather than crisp. It is caused by low resolution relative to the display size, suboptimal scaling, or an anti-aliasing setting that is too aggressive. Oversharpening appears as halos or bright ringing along the edges of lines. It is caused by sharpening enhancement features in the monitor OSD (often called "clarity" or "sharpness" settings) or in the GPU driver. Both are unwanted and the sharpness test helps identify which issue, if any, is present.',
  },
  {
    q: 'How do I use the sharpness test?',
    a: 'Select a pattern from the grid, then click View Fullscreen to fill your display with the selected pattern. View from your normal sitting distance. The 1px horizontal and vertical line patterns should appear as a uniform grey tone with no visible individual lines at a normal viewing distance (if you can see individual lines, you are sitting too close). The cross-hatch pattern should appear as a fine grid with clean intersections. If lines appear wavy, irregular, or surrounded by halos, your display has a sharpness issue.',
  },
  {
    q: 'My sharpness pattern looks wavy. What does that mean?',
    a: 'Wavy or irregular-looking line patterns often indicate a pixel scaling issue. This occurs when the output resolution from your GPU does not match the native resolution of your monitor, forcing the display to scale the image. Always connect your monitor at its native resolution and set your operating system display resolution to match. Scaling reduces sharpness and can introduce the kind of irregular artefacts visible in fine line patterns.',
  },
  {
    q: 'What sharpness setting should I use on my monitor?',
    a: 'For most monitors, the factory sharpness setting is calibrated for the native panel resolution. Setting it too high introduces edge halos (oversharpening). Setting it too low softens the image. A good starting point is the monitor\'s default factory setting. Use the 1px vertical line pattern to check: if you see distinct bright halos alongside the black lines, reduce the sharpness setting. If lines appear blurred and lack definition, try increasing it slightly.',
  },
  {
    q: 'Does pixel density (PPI) affect the test results?',
    a: 'Yes. A high-PPI display such as a 4K monitor at 27 inches (around 163 PPI) will render the 1px line patterns much finer than a 1080p monitor at 27 inches (around 82 PPI). On a very high-PPI display, the 1px patterns may appear as a smooth uniform grey because the pixels are too small to resolve individually at normal viewing distance. The 2px patterns are better reference points on high-PPI displays.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the sharpness test reveals</h2>
    <p>
      Monitor sharpness is determined by a combination of native panel resolution, pixel density, the
      display scaling being applied, and any sharpening enhancements applied by the monitor or GPU. The
      sharpness focus chart uses fine line patterns that stress-test all of these factors simultaneously.
      Viewing the patterns in fullscreen at your normal viewing distance reveals whether your display is
      rendering detail cleanly, softening it, or adding artificial sharpening artefacts.
    </p>

    <h2 className="text-lg font-bold text-fg">Horizontal versus vertical sharpness</h2>
    <p>
      Most displays render horizontal and vertical resolution equally, but some scaled or rotated
      configurations can cause one axis to be sharper than the other. Testing both the horizontal and
      vertical 1px line patterns and comparing them tells you whether your display has consistent
      resolution across both axes. A difference in apparent sharpness between horizontal and vertical
      patterns can indicate an unusual pixel substructure (found on some low-cost or rotated panels)
      or a scaling configuration issue.
    </p>

    <h2 className="text-lg font-bold text-fg">Diagonal lines and anti-aliasing</h2>
    <p>
      Diagonal line patterns test how the display handles content that does not align with the
      pixel grid. A sharp display renders diagonal lines with subtle pixel stepping visible up close
      that blends into smooth lines at normal viewing distance. Excessive anti-aliasing can make
      diagonal lines appear blurry even in applications that should render them crisply. The diagonal
      pattern is also useful for checking for sub-pixel rendering issues on panels with non-standard
      subpixel arrangements.
    </p>

    <h2 className="text-lg font-bold text-fg">Connecting at native resolution</h2>
    <p>
      The single most important factor for display sharpness is connecting at the monitor&apos;s native
      resolution with no operating system scaling applied, or with integer-factor scaling on HiDPI
      displays. Fractional scaling (such as 125 percent or 150 percent) introduces softness because
      the OS must resample the rendered image to fit the display pixels. If the sharpness test reveals
      generally soft or irregular patterns, check that your display is set to its native resolution
      in your operating system display settings.
    </p>
  </>
)

export default async function SharpnessFocusChartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('sharpness-focus-chart', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <SharpnessFocusChart />
    </ToolPageLayout>
  )
}
