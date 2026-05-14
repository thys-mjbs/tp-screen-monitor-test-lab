import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { BlackSmearTest } from '@/components/tools/BlackSmearTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('black-smear-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is black smear on a monitor?',
    a: 'Black smear is a motion artifact where slow-moving dark objects on a dark background leave a lighter or blurred trail behind them. It is caused by very slow pixel transition times in dark-to-dark colour changes, where the pixel cannot complete its transition before the next frame arrives. The result is a faint ghosting wake visible behind the moving object. Black smear is most strongly associated with VA panel technology.',
  },
  {
    q: 'Which monitor panel type has the worst black smear?',
    a: 'VA (vertical alignment) panels are most affected. VA panels achieve excellent contrast ratios and deep blacks, but their liquid crystal molecules move slowly during dark-to-dark transitions. While VA panels perform well for bright content and have fast bright-to-dark transitions, the dark-to-dark speed is their main weakness. IPS panels have more uniform response times across tonal ranges and exhibit less smear on dark content. OLED panels are effectively immune to smear due to their microsecond response times.',
  },
  {
    q: 'How do I use this black smear test?',
    a: 'Watch the dark bar moving across the black background. Look for a faint lighter trail or wake behind the bar rather than a clean sharp edge. Set the bar to Very Dark and speed to Slow for the most sensitive test, as this creates the exact low-contrast dark-to-dark transition that VA panels struggle with. Dim your room lighting and allow your eyes to adjust before testing. IPS and OLED monitors will typically show no visible smear even at the most sensitive settings.',
  },
  {
    q: 'Is black smear the same as ghosting?',
    a: 'Black smear is a specific type of ghosting. General ghosting refers to any residual image trailing a moving object, and can appear as a brighter or darker echo behind or ahead of the object. Black smear specifically refers to ghosting in dark tonal regions caused by slow dark-to-dark transitions. Standard motion blur tests using white bars on black backgrounds can miss VA panel smear entirely, because VA panels handle bright transitions quickly. This test isolates the dark transition problem specifically.',
  },
  {
    q: 'Can overdrive reduce black smear?',
    a: 'Yes, though with limitations. Overdrive applies extra voltage to speed up pixel transitions, which can reduce dark-to-dark smear on VA panels. However, VA panels often require very aggressive overdrive to push through dark transitions, which can cause inverse ghosting on brighter content. Many VA monitor manufacturers tune overdrive conservatively to avoid haloing, which leaves some smear present. Some monitors offer multiple overdrive levels, and finding the right balance between smear and inverse ghosting requires testing both this tool and the Overdrive Test.',
  },
  {
    q: 'Does black smear affect normal use?',
    a: 'It depends on the content. Black smear is most visible in dark scenes in games and films, particularly content with slow camera pans across dark environments such as space scenes, night scenes, or dark dungeon environments. It is less noticeable in bright or mixed-tone content. For gaming with fast action, other forms of ghosting may be more disruptive. For cinematic gaming or film viewing on a VA panel, dark smear can be a noticeable quality issue.',
  },
  {
    q: 'How does VA black smear compare to IPS ghosting?',
    a: 'IPS panels can exhibit their own form of ghosting, typically appearing as a brighter or oversaturated overshoot when overdrive is enabled. IPS ghosting is most visible with high-contrast content rather than dark-on-dark content. VA smear occurs specifically in dark transitions and produces a faint lighter trail rather than a bright overshoot. The two artifacts are different in character, with IPS overshoot being more intrusive in general gaming content and VA smear being more intrusive in dark cinematic content.',
  },
  {
    q: 'Should I avoid VA panels because of black smear?',
    a: 'Not necessarily. VA panels offer the best contrast ratios of any LCD technology, producing deep blacks that IPS panels cannot match. For cinema, dark atmosphere games, and content where black depth matters, a well-tuned VA panel often looks better overall despite the smear. Whether smear is acceptable depends on your use case. If you primarily play fast-paced competitive games in dark environments, IPS or OLED may suit you better. If you value contrast and deep blacks for mixed use, VA panels remain a strong choice.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What causes black smear?</h2>
    <p>
      VA panels achieve their high contrast ratios by using liquid crystal molecules that block light
      very effectively when perpendicular to the panel substrate. However, rotating these molecules
      between different dark states requires more force than transitioning through bright states. When
      a pixel needs to move from one dark shade to another, the crystals move slowly, taking several
      milliseconds longer than a bright transition on the same panel. If the next frame arrives before
      the transition completes, the residual intermediate colour is displayed for that frame, producing
      a visible wake behind the moving object.
    </p>

    <h2 className="text-lg font-bold text-fg">How to identify smear with this test</h2>
    <p>
      Set the bar to Very Dark and speed to Slow, then watch the trailing edge of the bar as it moves
      across the black background. On an affected panel, a faint lighter smear extends behind the bar,
      wider than the bar itself and fading as it trails further back. On a clean panel or OLED display,
      the bar appears sharp with no visible tail. Increasing the bar brightness to Dark or Medium makes
      the artifact easier to spot if your panel has only mild smear. A dimly lit room is essential as
      the artifact is subtle and easily masked by ambient glare.
    </p>

    <h2 className="text-lg font-bold text-fg">Why standard motion tests miss this</h2>
    <p>
      Most motion blur and ghosting tests use white objects on black backgrounds. VA panels transition
      quickly from dark to bright, so high-contrast tests often show excellent results on VA panels
      that still exhibit significant dark smear in real content. This test deliberately uses
      low-contrast dark-on-dark content to expose the specific transition type that causes problems in
      dark game scenes and cinematic content. Running both this test and a high-contrast motion test
      gives the most complete picture of a panel&apos;s response time characteristics.
    </p>

    <h2 className="text-lg font-bold text-fg">What to do if your monitor shows smear</h2>
    <p>
      First, check whether your monitor has multiple overdrive settings and try a more aggressive
      level. Some VA monitors ship with conservative overdrive tuning that leaves dark smear reduction
      headroom. Be aware that increasing overdrive on VA panels can introduce inverse ghosting on
      brighter content, so test both. If your monitor is showing severe smear that cannot be resolved
      through overdrive adjustment, this is a hardware characteristic of the panel and cannot be fixed
      in software. For content where dark smear is a serious concern, OLED or a fast IPS display
      would be a better fit.
    </p>
  </>
)

export default async function BlackSmearTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('black-smear-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <BlackSmearTest />
    </ToolPageLayout>
  )
}
