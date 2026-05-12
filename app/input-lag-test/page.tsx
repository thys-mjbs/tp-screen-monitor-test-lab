import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { InputLagTest } from '@/components/tools/InputLagTest'

const tool = getToolBySlug('input-lag-test')!

export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What is display input lag?',
    a: 'Display input lag is the delay between a signal being sent to your monitor and the image actually appearing on screen. It is caused by the internal processing inside the monitor, including scaling, colour correction, and any game or picture enhancement modes. Input lag is measured in milliseconds and is separate from pixel response time. Monitors with a dedicated game mode typically reduce input lag significantly by bypassing most internal processing.',
  },
  {
    q: 'What does this test actually measure?',
    a: 'This test measures your total visual reaction time: the combined delay of display input lag, browser rendering overhead, and your own human reaction to the colour change. Human reaction time to a visual stimulus is typically 150 to 300 ms for most people. The system and display contribution is usually 5 to 50 ms on a modern setup. Because human reaction time dominates, this test cannot isolate monitor input lag precisely, but it gives you a consistent benchmark for comparing setups.',
  },
  {
    q: 'What is a good result?',
    a: 'Scores below 150 ms are excellent and suggest fast reflexes and a responsive display setup. Scores between 150 and 200 ms are good for most users. Scores between 200 and 250 ms are average and typical of casual users. Scores above 300 ms may indicate slow reactions, a high-latency display, or a slower browser pipeline. Consistent scores matter more than single attempts, so run five tests and look at the average.',
  },
  {
    q: 'How do I improve my score?',
    a: 'For a genuine comparison, ensure you run this test in the same conditions each time. Enable your monitor\'s game mode to minimise its internal processing delay. Use a wired mouse rather than a wireless one to reduce peripheral latency. Close background applications to reduce browser overhead. Keep in mind that human reaction time improves with practice and focus, so your first few attempts on any session tend to be slower.',
  },
  {
    q: 'What is the difference between input lag and response time?',
    a: 'Input lag is the delay between a signal being received by the monitor and the image appearing on screen. Response time is the speed at which individual pixels change colour, measured in milliseconds. A monitor can have low input lag but slow response time, which would show on the motion blur test as ghosting but not feel sluggish to inputs. For gaming, you ideally want both low input lag and fast pixel response time.',
  },
  {
    q: 'How does refresh rate affect input lag?',
    a: 'Higher refresh rates reduce the interval between frames, which reduces the maximum time a new frame must wait to be displayed. At 60 Hz, each frame window is 16.7 ms. At 144 Hz, it is 6.9 ms. At 240 Hz, it is 4.2 ms. This means a higher refresh rate monitor can display your input\'s result up to a full frame sooner on average, which contributes a small but real reduction in total perceived input latency in games.',
  },
  {
    q: 'What monitor settings reduce input lag?',
    a: 'Enable game mode or low latency mode in your monitor\'s on-screen display menu. This typically disables post-processing features like dynamic contrast, motion smoothing, and sharpness enhancement that add processing delay. Avoid using any upscaling or resolution override that requires the monitor to perform internal scaling. Connect via DisplayPort rather than HDMI where possible, as some monitors handle DisplayPort signals with lower internal latency.',
  },
  {
    q: 'Can this test measure my monitor\'s input lag precisely?',
    a: 'No. Precise monitor input lag measurement requires specialised hardware such as a Leo Bodnar input lag tester, which compares a reference signal directly against the monitor\'s output using a photodiode. Browser-based tests are subject to JavaScript timing precision, browser render pipeline overhead, and human reaction variance. Use this test as a consistent comparative benchmark rather than an absolute measurement of your monitor\'s input lag specification.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the input lag test works</h2>
    <p>
      The test displays a neutral panel and waits for a randomised delay between 1.5 and 4.5 seconds
      before switching the background to green. The moment the colour changes, a high-precision timer
      starts using <code>performance.now()</code>. When you click, the timer stops and the elapsed time
      is recorded. A randomised delay prevents you from anticipating the green signal, which would
      produce artificially fast times that do not reflect true reaction speed.
    </p>

    <h2 className="text-lg font-bold text-fg">What the score represents</h2>
    <p>
      Your result combines human reaction time, browser and operating system event processing overhead,
      and a small contribution from display input lag. For most modern setups with a responsive monitor
      and wired peripherals, the display and system overhead is between 5 and 30 ms. The remainder of
      your score reflects how quickly your visual cortex processed the colour change and your hand
      responded. Running multiple attempts and reviewing the average gives the most meaningful
      comparison between different configurations.
    </p>

    <h2 className="text-lg font-bold text-fg">Using this to compare display setups</h2>
    <p>
      The most useful way to use this test is comparatively. Run five attempts in your current monitor
      setup, note the average, then change one variable (enable game mode, switch to a different
      cable, or test on a second monitor) and run five more. A consistent improvement of 20 ms or more
      across attempts suggests the change had a real effect on your display pipeline&apos;s responsiveness.
      Smaller differences are likely within human reaction variance.
    </p>

    <h2 className="text-lg font-bold text-fg">Factors that affect your score</h2>
    <p>
      Time of day and fatigue have a measurable effect on human reaction time, typically adding
      20 to 50 ms when tired compared to alert. Caffeine has a modest positive effect for most people.
      Display distance matters slightly: the further away the screen, the longer it takes for the
      light to reach your retina. For competitive gaming purposes, the most controllable hardware
      factors are monitor input lag (use game mode), cable type, and peripheral wired vs wireless latency.
    </p>
  </>
)

export default function InputLagTestPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <InputLagTest />
    </ToolPageLayout>
  )
}
