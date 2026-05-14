import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { OverdriveTest } from '@/components/tools/OverdriveTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('overdrive-test', locale))
}

const faqs: FAQ[] = [
  {
    q: 'What is monitor overdrive?',
    a: 'Overdrive is a feature built into most modern monitors that applies extra voltage to liquid crystal pixels during a colour transition to speed up their movement. Without overdrive, pixels would transition at their natural speed, which is too slow at high refresh rates and causes motion blur and ghosting. Overdrive compensates by briefly pushing pixels beyond their target value so they reach the destination shade faster. Most monitors offer several overdrive levels in their on-screen display menu.',
  },
  {
    q: 'What is inverse ghosting?',
    a: 'Inverse ghosting, also called coronas or overshoot, is an artifact caused by excessive overdrive. When overdrive pushes a pixel too far past its target value, the pixel must then recover back to the correct shade. If this overshoot is large enough, the intermediate super-charged state is visible as a faint ghost image positioned ahead of the moving object in the direction of travel. On a white bar moving right on a black background, inverse ghosting appears as a faint dark halo just ahead of the leading edge of the bar.',
  },
  {
    q: 'How do I use this overdrive test?',
    a: 'Watch the moving bar carefully, focusing on the leading edge (the front of the bar in the direction it is moving). A faint ghost or halo just ahead of that edge indicates excessive overdrive. Smearing or a blurred wake trailing behind the bar indicates insufficient overdrive. At the correct overdrive level, the bar appears sharp on both edges with no visible artifacts. Test at Fast or Very Fast speed, as overdrive artifacts are more pronounced at higher pixel velocities.',
  },
  {
    q: 'What does overdrive artifact look like exactly?',
    a: 'For a white bar on black with excessive overdrive: a very faint dark grey band appears just ahead of the right edge of the bar, in the direction of movement. This is because the background pixels ahead of the bar have been pre-charged by the overdrive algorithm before the bar reaches them, causing a brief intermediate bright-to-dark artifact. For a black bar on white: a faint bright band appears ahead of the leading edge. The artifact matches the bar colour inverted, appearing on the side the bar is travelling toward.',
  },
  {
    q: 'How do I adjust overdrive on my monitor?',
    a: 'Open your monitor\'s on-screen display menu (usually accessed via a button on the back or bottom bezel). Look for settings labelled Overdrive, Response Time, OD, Trace Free, AMA, or similar depending on the manufacturer. Common levels are Off, Normal, and Extreme, or numbered levels 1 through 5. Start from the lowest level and increase until ghosting behind the bar is eliminated, then stop before coronas appear ahead of the bar.',
  },
  {
    q: 'What is the correct overdrive setting?',
    a: 'The correct setting is the highest level that eliminates trailing ghosting without producing visible coronas ahead of the bar. This is the sweet spot where pixel transitions complete within one frame window without overshooting. The optimal setting often changes with refresh rate: at 60 Hz the frame window is longer so less overdrive is needed, while at 144 Hz or higher a stronger setting may be required to clear transitions in the shorter frame window. Some monitors handle this automatically with variable overdrive.',
  },
  {
    q: 'Does variable refresh rate affect overdrive?',
    a: 'Yes, significantly. G-Sync and FreeSync vary the frame interval dynamically based on GPU frame rate. A fixed overdrive level calibrated for 144 Hz will apply too much voltage when the frame rate drops to 60 Hz, because the longer frame window gives pixels more time to transition naturally, making the overdrive overshoot visible. Some monitors include variable overdrive that scales the compensation with the current frame rate. Without it, enabling VRR may introduce overdrive coronas at low frame rates even when the fixed-rate setting looked clean.',
  },
  {
    q: 'Can overdrive cause permanent damage?',
    a: 'No. Overdrive applies only to the electrical signals controlling the liquid crystal transitions and does not cause any physical damage or wear to the panel. You can freely experiment with all overdrive settings without any risk. The only practical downside of excessive overdrive is the visual artifact of inverse ghosting during motion, which disappears immediately when you lower the overdrive setting.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How overdrive works</h2>
    <p>
      Liquid crystal pixels do not snap instantly between colour states. At a target shade, the crystals
      must physically rotate to the correct angle, which takes time. Overdrive injects a brief burst of
      extra voltage at the start of each transition to accelerate the crystal movement. The pixel
      overshoots slightly past the target shade, then decays back. When calibrated correctly, the
      overshoot is too small and brief to be visible, and the pixel arrives at the correct shade within
      one frame. When overdrive is too aggressive, the overshoot is large enough to be visible as a
      distinct artifact on the leading edge of any moving object.
    </p>

    <h2 className="text-lg font-bold text-fg">What to look for in this test</h2>
    <p>
      Focus on the leading edge of the bar, the side facing the direction of travel. A monitor with
      excessive overdrive shows a faint inverse-coloured band just ahead of that edge. For a white bar
      on black, this appears as a slightly darker band ahead of the white. For a black bar on white,
      it appears as a slightly brighter band ahead of the black. The trailing edge may show normal
      ghosting if overdrive is insufficient, or appear clean if overdrive is working correctly.
    </p>
    <p>
      Running this test at Very Fast speed makes artifacts most visible. Test both modes: white on
      black stresses the dark-to-bright transition, while black on white stresses the bright-to-dark
      transition, which some monitors handle with different overdrive characteristics.
    </p>

    <h2 className="text-lg font-bold text-fg">Finding the right overdrive level</h2>
    <p>
      Use your monitor&apos;s OSD menu to step through overdrive settings one level at a time. At each
      level, run this test at your typical gaming refresh rate. The ideal setting is the highest level
      that produces no visible coronas ahead of the bar. If you see haloing at the current level, drop
      one step down. If you see smearing behind the bar, step one level up. Most monitors have a clear
      sweet spot where both artifacts are absent. Document the setting that works best, as firmware
      updates or resolution changes can sometimes reset the OSD.
    </p>

    <h2 className="text-lg font-bold text-fg">Overdrive and variable refresh rate</h2>
    <p>
      If your monitor supports G-Sync or FreeSync and you use it with variable frame rates, check
      whether your monitor offers adaptive or variable overdrive in its specifications. Fixed overdrive
      tuned for high frame rates will produce visible coronas when the frame rate drops, because the
      pixel has more time to transition naturally and the overdrive pulse overshoots. If your monitor
      does not have adaptive overdrive, running a slightly lower fixed overdrive setting is a reasonable
      compromise that reduces coronas at low frame rates while still controlling ghosting at high rates.
    </p>
  </>
)

export default async function OverdriveTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('overdrive-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <OverdriveTest />
    </ToolPageLayout>
  )
}
