import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ImageRetentionTest } from '@/components/tools/ImageRetentionTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('image-retention-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is image retention?',
    a: 'Image retention is a temporary display artefact where a recently displayed image remains faintly visible after the content changes. On OLED panels, it is caused by temporary differential luminance in the organic compounds after sustained exposure to high-contrast content. On LCD panels, it can be caused by a charge buildup in the liquid crystal layer. Image retention is temporary and usually fades within minutes or hours. It is different from permanent burn-in.',
  },
  {
    q: 'What is the difference between image retention and burn-in?',
    a: 'Image retention is temporary. The ghost image fades on its own, typically within minutes to a few hours, once the display shows different content. Burn-in is permanent and caused by irreversible degradation of the display materials. On OLED panels, permanent burn-in occurs when the organic compounds in specific pixels degrade from sustained overexposure, and the affected area permanently shows different brightness or colour than surrounding pixels. This test detects temporary image retention, not permanent burn-in.',
  },
  {
    q: 'How does the image retention test work?',
    a: 'The test works in two phases. In the first phase, a high-contrast black and white checkerboard pattern is displayed for a set duration (1, 2, or 5 minutes). In the second phase, the display automatically switches to a solid mid-grey panel. If image retention is present, you will see a faint ghost of the checkerboard pattern on the grey background. The grey phase lets you check whether the retained pattern fades over time.',
  },
  {
    q: 'Is this test safe for my OLED display?',
    a: 'Yes. A few minutes of high-contrast content is well within the normal usage range for any display. OLED burn-in requires sustained exposure to high-brightness static content over many hours or months of accumulated use. Running this test for 1 to 5 minutes will not cause permanent damage to a healthy display. If you are concerned about long-term OLED health, avoid running the 5-minute test repeatedly as part of a regular routine.',
  },
  {
    q: 'My OLED shows retention after the test. Is my panel faulty?',
    a: 'Temporary image retention after 1 to 5 minutes of high-contrast content is not unusual on OLED panels, particularly under certain conditions such as high brightness levels or after extended use. What matters is whether the retention fades. On a healthy panel, the ghost image should disappear or become significantly less visible within 5 to 15 minutes of displaying normal varied content. Retention that persists for several hours may indicate accelerated panel ageing. Retention that is permanent is burn-in.',
  },
  {
    q: 'Does LCD image retention work differently from OLED?',
    a: 'Yes. LCD image retention is typically caused by a voltage build-up in the liquid crystal layer that temporarily biases the crystals in one direction. It usually clears quickly (within seconds to minutes) and is less common on modern LCD panels. OLED image retention is caused by temporary differential luminance of the organic compounds and can last longer. LCD panels can also develop a form of image ghosting called pixel walk, though this is uncommon in quality panels.',
  },
  {
    q: 'What should I do if I see permanent burn-in?',
    a: 'Permanent burn-in on an OLED panel is an irreversible hardware condition. Some manufacturers include burn-in in their warranty, though coverage varies by brand and product tier. Contact your manufacturer with photographic evidence. Some manufacturers also offer pixel refresh or compensation algorithms in the monitor firmware that can reduce the visual impact of minor burn-in, but these are partial mitigations rather than repairs.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to run the image retention test</h2>
    <p>
      Select a duration using the buttons below the panel, then click Start or Start Fullscreen. The
      checkerboard pattern will display for the selected time and then automatically switch to a solid
      grey panel. Look carefully at the grey panel for any faint ghost of the checkerboard. Allow a
      further few minutes and check again to see whether any retained image is fading. A healthy display
      should show no visible retention, or any retention that is present should fade clearly within a
      few minutes.
    </p>

    <h2 className="text-lg font-bold text-fg">OLED panel health and image retention</h2>
    <p>
      OLED displays are more susceptible to image retention than LCD displays because each pixel produces
      its own light through organic compounds that can temporarily shift in efficiency after sustained
      exposure. Modern OLED monitors include several countermeasures: pixel shift moves the displayed
      content by small increments to avoid sustained exposure to any single pixel; pixel refresh cycles
      equalise the organic compound state across the panel; and screen savers and sleep modes are enforced
      to prevent prolonged static content. Despite these measures, OLED panels used for content with
      persistent bright UI elements (such as taskbars, bright logos, or static overlays) will show more
      image retention than those used for varied content.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding temporary versus permanent retention</h2>
    <p>
      The critical distinction to understand when evaluating your result is whether what you observe is
      temporary or permanent. After the grey phase begins, watch the retained ghost image over several
      minutes. If it is clearly fading, even slowly, it is temporary retention. Temporary retention is
      normal behaviour for OLED panels that have been shown sustained high-contrast content. If the ghost
      pattern shows no sign of fading after 10 to 15 minutes of varied content, it may be approaching
      the boundary between temporary retention and early burn-in, which warrants monitoring over time.
    </p>

    <h2 className="text-lg font-bold text-fg">LCD versus OLED retention behaviour</h2>
    <p>
      On LCD panels, any image retention revealed by this test typically clears within seconds or minutes
      because the mechanism (temporary charge accumulation in the liquid crystal layer) reverses quickly
      with normal display operation. If you see persistent retention on an LCD panel that takes more than
      30 minutes to clear, the liquid crystal layer may have developed a permanent alignment bias, which
      is an uncommon but recognised LCD fault. LCD retention is not related to organic compound ageing
      and behaves quite differently from OLED retention.
    </p>
  </>
)

export default async function ImageRetentionTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('image-retention-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ImageRetentionTest />
    </ToolPageLayout>
  )
}
