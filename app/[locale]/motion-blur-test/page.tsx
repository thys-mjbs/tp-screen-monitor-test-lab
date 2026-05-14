import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { MotionBlurTest } from '@/components/tools/MotionBlurTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('motion-blur-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is monitor motion blur?',
    a: 'Monitor motion blur is the visible smearing or trailing that appears behind fast-moving objects on your screen. It occurs because LCD and OLED pixels take time to transition from one colour to another, and because sample-and-hold displays keep each pixel lit for the full duration of a frame. When an object moves faster than the pixel response time allows, adjacent frames blend together and create the appearance of a blurred or smeared trail.',
  },
  {
    q: 'What causes ghosting on a monitor?',
    a: 'Ghosting is caused by slow pixel response time. When a pixel cannot reach its target colour before the next frame arrives, the residual colour from the previous state remains visible as a faint duplicate image trailing the moving object. On VA panels, dark-to-dark transitions are particularly slow, producing a characteristic dark smear. On IPS panels, ghosting tends to appear as a brighter or oversaturated trail when overdrive is too aggressive.',
  },
  {
    q: 'How do I use this motion blur test?',
    a: 'Watch the moving bar as it travels across the screen. Look for a trailing smear or halo following the bar rather than a clean, sharp edge. Try increasing the speed to make any ghosting more obvious. Switch between dark, light, and grey backgrounds as ghosting characteristics differ between bright-on-dark and dark-on-bright transitions. Pause the bar to confirm any artifact you see is motion-related rather than a pixel defect.',
  },
  {
    q: 'What is pixel response time?',
    a: 'Pixel response time is the time in milliseconds it takes for a pixel to change from one colour to another, typically measured as grey-to-grey (GtG) or MPRT (moving picture response time). Faster response times mean less ghosting. Gaming monitors often advertise 1ms GtG, though actual measured performance varies. High refresh rate monitors benefit most from fast pixel response because the inter-frame window becomes very short at 144 Hz and above.',
  },
  {
    q: 'What is overdrive and how does it affect motion blur?',
    a: 'Overdrive is a monitor feature that applies extra voltage to pixels to speed up their colour transitions. When calibrated correctly, overdrive reduces ghosting significantly. When set too aggressively, it causes inverse ghosting, also called coronas or haloing, where a bright artifact appears ahead of the moving object rather than behind it. Most monitors offer multiple overdrive settings so you can tune the result for your preferences.',
  },
  {
    q: 'Does refresh rate affect motion blur?',
    a: 'Higher refresh rates reduce perceived motion blur by showing more distinct positions per second, which reduces the motion-to-frame-blur component. A 144 Hz monitor updates the display 144 times per second, so each frame represents a much smaller slice of motion than a 60 Hz display. However, sample-and-hold blur still exists even at very high refresh rates, which is why backlight strobing modes such as ULMB were developed.',
  },
  {
    q: 'What is ULMB and backlight strobing?',
    a: 'ULMB stands for Ultra Low Motion Blur. It is a technology on some gaming monitors that strobes the backlight off between frames so the pixel is only illuminated at the moment it has finished transitioning. This eliminates sample-and-hold motion blur almost entirely but cannot be used simultaneously with variable refresh rate technologies like G-Sync or FreeSync. Backlight strobing makes motion extremely clear but reduces overall brightness.',
  },
  {
    q: 'Which panel type has the worst motion blur?',
    a: 'VA panels are generally considered to have the worst motion blur due to their slow dark-to-dark pixel transitions. IPS panels perform better at moderate speeds but can show inverse ghosting if overdrive is too aggressive. TN panels traditionally had the fastest response times, though modern fast IPS panels now match or exceed them. OLED panels have sub-millisecond response times and produce the least motion blur of any currently available display technology.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How does the motion blur test work?</h2>
    <p>
      This test moves a high-contrast vertical bar across a solid background at a constant speed. Your
      eyes naturally track the bar as it moves, which is the same behaviour that occurs when watching
      fast-moving content. Any residual colour left behind by slow pixels becomes visible as a trailing
      smear or ghosting artifact. The test lets you observe pixel response at several speeds across
      backgrounds chosen to stress different transition types.
    </p>

    <h2 className="text-lg font-bold text-fg">What are you looking for?</h2>
    <p>
      On a fast, well-calibrated monitor, the bar appears as a clean sharp stripe with no visible tail.
      Signs of poor performance include: a blurred halo following the bar, a dark or bright echo image
      trailing behind the bar at a distance (ghosting), and a bright leading artifact ahead of the bar
      (inverse ghosting from aggressive overdrive).
    </p>
    <p>
      Use the dark background to stress bright-to-dark and dark-to-bright transitions. The grey
      background tests mid-tone transitions, where VA panels most commonly struggle. The light background
      reveals whether dark-on-light ghosting is present on your display.
    </p>

    <h2 className="text-lg font-bold text-fg">Comparing panel types</h2>
    <p>
      VA panels typically show the most obvious trailing on dark backgrounds. IPS and IPS-like panels
      generally perform better but can exhibit overshoot artifacts at aggressive overdrive settings.
      OLED displays produce near-zero ghosting due to their microsecond-level pixel response times. This
      test is most useful as a comparative tool: run it before and after adjusting your monitor&apos;s
      overdrive setting to observe the direct effect on ghosting behaviour.
    </p>

    <h2 className="text-lg font-bold text-fg">Limitations of this test</h2>
    <p>
      Browser-based tests cannot measure response time numerically. This tool is a visual diagnostic
      only. The pixel speed seen here is limited by your monitor&apos;s current refresh rate and the
      browser&apos;s rendering pipeline. For precise numerical measurements, dedicated software or hardware
      frame capture tools are required. Use this test to get a qualitative impression of your
      display&apos;s motion handling before deciding whether to adjust your monitor&apos;s overdrive setting.
    </p>
  </>
)

export default async function MotionBlurTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('motion-blur-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <MotionBlurTest />
    </ToolPageLayout>
  )
}
