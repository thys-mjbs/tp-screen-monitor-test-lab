import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenUniformityTest } from '@/components/tools/ScreenUniformityTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('screen-uniformity-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is the screen uniformity test?',
    a: 'The screen uniformity test fills your display with a solid neutral grey colour and overlays a nine-zone grid. By examining each zone for differences in brightness, colour, or cloudiness, you can identify whether your panel has significant uniformity problems. Zones that appear noticeably brighter, darker, or differently tinted from adjacent zones indicate a uniformity issue. Mid grey is used because it is the most revealing tone for this type of problem.',
  },
  {
    q: 'What is dirty screen effect and how does this test reveal it?',
    a: 'Dirty screen effect (DSE) is a non-uniform brightness pattern across an LCD panel that looks like smudges, clouds, or patches of lighter or darker grey even when the panel is physically clean. It is caused by uneven pressure or manufacturing inconsistency in the LCD panel layers. A uniform mid-grey background makes DSE visible immediately because any variation in brightness appears as a visible tonal difference against the otherwise even field.',
  },
  {
    q: 'Which tone setting should I use?',
    a: 'Mid Grey is the most effective tone for revealing dirty screen effect and general panel uniformity because human eyes are most sensitive to luminance variation in the mid-tonal range. Dark Grey is useful for checking whether brightness variation is also present in shadow tones. Light Grey can reveal uniformity issues that only appear in the upper portion of the tonal range. Running all three and comparing the results gives the most complete picture.',
  },
  {
    q: 'How much uniformity variation is acceptable on a new monitor?',
    a: 'All LCD monitors exhibit some degree of brightness variation across the panel. A small amount of variation near the very edges is generally considered within normal tolerances. Variation that is clearly visible in zones 1, 3, 7, or 9 (the corners) and remains within about 10 percent of the brightness of the centre is typically within manufacturer tolerances. Variation that extends into the central zones or is clearly distracting during normal use may qualify for a warranty replacement.',
  },
  {
    q: 'Why is the centre of my monitor brighter than the edges?',
    a: 'LCD panels with edge-lit backlights (where LEDs are positioned along one or more edges of the panel) often show a slight centre-to-edge brightness fall-off because the light has to travel further to reach the panel centre from some angles. This is normal for edge-lit monitors. Direct-lit or full-array local dimming monitors place LEDs directly behind the panel and generally have better uniformity from edge to centre.',
  },
  {
    q: 'Can screen uniformity get worse over time?',
    a: 'Yes. Backlights can age unevenly, particularly on monitors with LEDs concentrated in certain areas. External stress such as mounting pressure, temperature extremes, or physical impacts can also alter uniformity. A monitor that had acceptable uniformity when new may develop noticeable DSE or brightness variation over time. If a new uniformity problem appears suddenly rather than gradually, physical stress to the panel is more likely to be the cause than natural ageing.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to check screen uniformity</h2>
    <p>
      Enter fullscreen and set your monitor brightness to the level you normally use. View the panel from
      directly in front at your normal sitting distance. Work through the nine zones systematically,
      comparing each zone to its neighbours. Brightness differences between adjacent zones are more
      significant than small absolute differences between distant zones. Pay particular attention to the
      edges and corners, which are the most common locations for uniformity problems on LCD panels.
    </p>

    <h2 className="text-lg font-bold text-fg">Dirty screen effect explained</h2>
    <p>
      Dirty screen effect is a characteristic of some LCD panels where the panel appears to have cloudy,
      patchy, or mottled areas even when the screen surface is physically clean. It originates inside the
      panel, not on its surface, and cannot be removed by cleaning. DSE is caused by variations in how the
      LCD diffuser layer transmits and scatters the backlight. It tends to be most visible on curved panels,
      large flat panels, and panels with thinner diffuser assemblies. A small amount of DSE in the corners
      is considered normal, but significant DSE covering large areas is a defect.
    </p>

    <h2 className="text-lg font-bold text-fg">Panel technology and uniformity expectations</h2>
    <p>
      Different panel technologies have different uniformity characteristics. IPS panels typically have good
      colour uniformity but may show moderate DSE. VA panels have excellent contrast but often show more
      significant DSE than IPS panels. TN panels vary widely. OLED panels have no backlight and
      therefore have no DSE, but can develop differential ageing patterns over time that appear as tonal
      variations across the panel. The screen uniformity test is useful for all panel types, though what
      you are checking for differs slightly between technologies.
    </p>

    <h2 className="text-lg font-bold text-fg">Documenting uniformity for a warranty claim</h2>
    <p>
      If your uniformity test reveals significant problems worth documenting for a warranty claim, photograph
      the screen in a darkened room with your monitor at a moderate, consistent brightness setting. Use a
      camera rather than a phone if possible, as phone cameras often apply HDR processing that can alter
      how uniformity appears in the photograph. Note which zones show the most significant variation and
      check your manufacturer&apos;s warranty documentation for the stated uniformity tolerance threshold before
      contacting support.
    </p>
  </>
)

export default async function ScreenUniformityTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('screen-uniformity-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenUniformityTest />
    </ToolPageLayout>
  )
}
