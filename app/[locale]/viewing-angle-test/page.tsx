import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ViewingAngleTest } from '@/components/tools/ViewingAngleTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('viewing-angle-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What does the viewing angle test check?',
    a: 'The test displays a panel divided into reference zones: a dark quadrant, a light quadrant, a mid-grey quadrant, a gradient, and a white centre square. By viewing the panel from different angles (leaning left, right, forward, and backward) you can observe how much the brightness and colour of each zone shifts with your viewing position. Panels with wide viewing angles show little change; narrow viewing angle panels show significant colour and brightness shifts.',
  },
  {
    q: 'How do IPS, VA, and TN panels compare for viewing angles?',
    a: 'IPS panels have the widest viewing angles, typically rated at 178 degrees horizontal and vertical with minimal colour shift. VA panels have good horizontal angles but can show noticeable brightness and gamma shifts at moderate vertical angles, particularly in the lower half of the image. TN panels have the narrowest viewing angles, with significant colour inversion and contrast loss when viewed at off-axis angles, particularly vertically. OLED panels generally match or exceed IPS panels for viewing angle performance.',
  },
  {
    q: 'What is colour shift and how does this test reveal it?',
    a: 'Colour shift is a change in the perceived colour or tint of the display content when viewed from an off-axis angle. On TN panels, grey areas often shift toward yellow or green when viewed from above and toward blue when viewed from below. On VA panels, dark tones can appear to fade out or crush at off-axis angles. The gradient quadrant in the test is particularly useful for revealing colour shift because changes in the appearance of grey tones are immediately visible.',
  },
  {
    q: 'Why does my VA panel look different from different heights?',
    a: 'VA panels have an asymmetric viewing angle characteristic where horizontal angles are wider than vertical angles. The gamma curve of VA panels also shifts more dramatically at vertical off-angles than IPS panels. This means that dark tones can appear to grey out or lose detail when viewed from above or below the panel centreline. This is a known characteristic of VA technology. Mounting the monitor at the correct height so your eyes are level with the upper third of the screen reduces this effect.',
  },
  {
    q: 'Does monitor height affect viewing angle performance?',
    a: 'Yes. The position of your eyes relative to the panel centreline determines the effective viewing angle. Sitting with your eyes level with or slightly above the monitor centre is ideal for most panels. Sitting well below the monitor centre (common when monitors are mounted high on a wall or stand) dramatically increases the effective vertical viewing angle, which can cause visible colour and brightness shifts on VA and TN panels.',
  },
  {
    q: 'Can viewing angle be improved on a TN or VA panel?',
    a: 'Hardware solutions include using a panel with a wider viewing angle specification (i.e., switching to IPS or OLED). Some monitors include anti-glare coatings that reduce the visibility of off-axis colour shift by diffusing the surface reflection. Software cannot improve the fundamental viewing angle characteristics of the panel technology. The most practical fix is to ensure you sit at your monitor\'s optimal viewing position rather than at a significant off-axis angle.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to use the viewing angle test</h2>
    <p>
      Enter fullscreen and sit at your normal viewing position directly in front of the monitor. Note the
      appearance of all four quadrants and the centre reference. Then slowly lean to the left and right,
      watching how the dark and gradient quadrants change. Lean forward and backward. The most informative
      observation is how much the dark quadrant shifts in colour or brightness, and whether the gradient
      maintains its smooth appearance or develops a colour cast. A well-performing wide-angle panel will
      show minimal change across moderate off-axis positions.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding panel technology differences</h2>
    <p>
      The viewing angle characteristics of your panel are determined by the panel technology chosen during
      manufacturing and cannot be changed. IPS panels achieve wide viewing angles by aligning the liquid
      crystal molecules parallel to the glass substrate, which produces consistent light transmission across
      a wide range of angles. VA panels use a vertical alignment that produces higher contrast at dead centre
      but shifts more dramatically at off-axis positions. TN panels use a twisted nematic alignment that is
      most efficient at narrow viewing angles, making them the most susceptible to colour shift.
    </p>

    <h2 className="text-lg font-bold text-fg">What the reference quadrants reveal</h2>
    <p>
      The dark quadrant is most sensitive to off-axis brightness changes, particularly on VA panels where
      dark tones can wash out at vertical angles. The light quadrant shows whether highlight rendering
      remains consistent. The mid-grey quadrant, like the grey screen test, is sensitive to luminance
      variation and reveals the overall tonal shift with angle. The gradient quadrant is the most visually
      informative because colour shifts in gradient tones are immediately apparent. The white centre
      reference square provides a neutral brightness anchor for comparing the overall tonal character of
      each quadrant.
    </p>

    <h2 className="text-lg font-bold text-fg">Practical implications of viewing angle</h2>
    <p>
      Viewing angle matters most for shared viewing situations such as presentations, collaborative work,
      or watching content with others. It also affects comfort when you need to look at the screen from
      a slightly off-centre position during normal use. For single-user desktop work where you always sit
      directly in front of the monitor, narrow viewing angles are less of a practical concern. For
      photographers, video editors, or anyone doing colour-accurate work, wide viewing angles are
      important to ensure the colours you see from your working position match what others will see.
    </p>
  </>
)

export default async function ViewingAngleTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('viewing-angle-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ViewingAngleTest />
    </ToolPageLayout>
  )
}
