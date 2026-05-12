import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { PwmFlickerTest } from '@/components/tools/PwmFlickerTest'

const tool = getToolBySlug('pwm-flicker-test')!

export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What is PWM backlight flicker?',
    a: 'PWM (pulse width modulation) is a technique many LCD monitors use to control brightness by rapidly switching the backlight on and off hundreds of times per second. At full brightness the backlight stays on continuously. At 50% brightness it switches on and off equally. The speed of switching is the PWM frequency, typically between 200 Hz and 1,000 Hz on modern displays. The human eye cannot consciously detect flicker above about 60 Hz, but some people experience eye strain and headaches at frequencies up to 200 Hz or higher even without consciously seeing it.',
  },
  {
    q: 'Can PWM flicker cause eye strain?',
    a: 'Research suggests that PWM flicker at frequencies below roughly 200 Hz can cause eye strain, headaches, and visual fatigue in sensitive individuals even when not consciously perceived as flickering. The sensitivity threshold varies significantly between people. At lower brightness settings the on-off ratio becomes more extreme, increasing the intensity of the modulation. People who are sensitive to PWM often report significantly less fatigue when switching to a DC-dimmed display.',
  },
  {
    q: 'How do I use this PWM flicker test?',
    a: 'The panel is split into a flickering left side and a steady grey reference on the right. Both sides are matched in average brightness. Use the controls to adjust the flicker rate and the brightness of the off-phase. This visualises what PWM dimming looks like at lower, visible frequencies. For detecting your own monitor\'s PWM, use a smartphone camera pointed at the screen and reduce brightness — scrolling dark bands in the camera feed indicate PWM.',
  },
  {
    q: 'How do I test my monitor for PWM using a camera?',
    a: 'Point your smartphone camera at your monitor screen and reduce screen brightness to 30 to 70 percent. Watch the live camera viewfinder for horizontal dark bands scrolling through the image. If bands are visible, your monitor uses PWM dimming. The bands appear because the camera\'s shutter creates a beat pattern with the PWM cycle. A monitor using DC dimming shows no banding in the camera feed at any brightness level.',
  },
  {
    q: 'What is the difference between PWM and DC dimming?',
    a: 'DC dimming controls brightness by reducing the actual voltage supplied to the backlight so it stays on continuously at lower power. PWM keeps the backlight at full power but switches it on and off rapidly, creating the impression of dimness through timing. DC dimming is preferred for eye comfort but is technically harder to implement uniformly. Many premium monitors and OLED displays now offer DC dimming or very high frequency PWM above 1,000 Hz to reduce eye strain.',
  },
  {
    q: 'Do OLED monitors use PWM?',
    a: 'Most OLED displays use PWM for brightness control, but typically at higher frequencies than LCD backlights. The issue is more pronounced at low brightness where the duty cycle becomes very short. Some recent OLED monitors advertise "PWM-free" or "DC dimming" modes that achieve dimming by a different method. Where OLEDs do use PWM it is often at 240 Hz or higher, which is above the sensitivity threshold for most users.',
  },
  {
    q: 'What PWM frequency is considered safe?',
    a: 'TUV Rheinland Flicker Free certification and similar standards treat monitors with PWM frequencies above 1,000 Hz as low risk because flicker at that speed is beyond the perceptible threshold for the vast majority of users. Many users have no sensitivity to PWM above 400 Hz. The most sensitive individuals may notice effects up to 200 Hz or beyond. "Flicker-free" claims in monitor marketing typically mean DC dimming or PWM above 1,000 Hz.',
  },
  {
    q: 'How do I find out if my specific monitor uses PWM?',
    a: 'Check the manufacturer specification page for a "flicker-free" or "DC dimming" label. Perform the smartphone camera test described above. RTINGS.com independently measures and publishes PWM data for hundreds of monitors including the exact frequency used. Some monitor on-screen display menus also include a "Low Blue Light" or "Flicker Safe" mode that switches the dimming method at lower brightness levels.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How this PWM flicker test works</h2>
    <p>
      The panel is split into two halves rendered frame-by-frame. The left side alternates between full
      white and an adjustable dim level at a rate you control. The right side shows a steady grey
      calculated as the mathematical average of the on and off phases, so both halves appear at roughly
      equal perceived brightness. Observing both together lets you see the difference between a flickering
      backlight and a steady one at the same apparent brightness level.
    </p>

    <h2 className="text-lg font-bold text-fg">Why you cannot see monitor PWM with the naked eye</h2>
    <p>
      Modern monitors typically use PWM at 200 to 1,000 Hz. The human visual system stops consciously
      registering flicker at around 50 to 60 Hz, so typical monitor PWM is invisible at normal viewing
      distances. What can happen is subliminal stimulation: the visual cortex still responds to the
      flicker even though you are not aware of seeing it, which in sensitive individuals causes fatigue,
      eye strain, or headaches over long sessions. This is why this test operates at lower, visible
      frequencies for demonstration rather than claiming to replicate the exact monitor condition.
    </p>

    <h2 className="text-lg font-bold text-fg">Camera detection method</h2>
    <p>
      The most accessible way to detect PWM without hardware tools is a smartphone camera. Point your
      camera at the monitor screen and reduce brightness to 30 to 50 percent. Watch the live feed for
      horizontal dark bands scrolling through the image. These appear because the camera&apos;s electronic
      shutter creates a visible beat frequency with the PWM cycle. A monitor using DC dimming shows a
      uniform screen in the camera feed at all brightness levels. This method works reliably for PWM
      frequencies below about 2,000 Hz.
    </p>

    <h2 className="text-lg font-bold text-fg">What to do if your monitor uses PWM</h2>
    <p>
      If you experience eye strain and your monitor uses PWM, keeping brightness at or near 100 percent
      eliminates the PWM cycle on many monitors that switch to continuous backlight at maximum output.
      Bias lighting behind the monitor allows comfortable work at higher screen brightness settings.
      Longer term, upgrading to a DC-dimmed or high-frequency PWM display is the most effective solution.
      Some monitors also offer a low blue light or eye care mode that internally changes the dimming
      method at certain brightness ranges, which is worth testing before purchasing a replacement.
    </p>
  </>
)

export default function PwmFlickerTestPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <PwmFlickerTest />
    </ToolPageLayout>
  )
}
