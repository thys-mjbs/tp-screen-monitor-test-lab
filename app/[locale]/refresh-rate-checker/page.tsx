import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { RefreshRateChecker } from '@/components/tools/RefreshRateChecker'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('refresh-rate-checker', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is a monitor refresh rate?',
    a: 'Refresh rate is the number of times per second your monitor redraws the image on screen, measured in Hertz (Hz). A 60 Hz monitor redraws 60 times per second. A 144 Hz monitor redraws 144 times per second. Higher refresh rates produce smoother motion in games, video, and scrolling. The refresh rate of your monitor is a hardware property of the panel, though the actual rate your system uses depends on your GPU and operating system settings.',
  },
  {
    q: 'Why does the measured rate differ from my monitor\'s rated Hz?',
    a: 'The checker measures the refresh rate your browser is actually using, which may differ from your monitor\'s maximum rated Hz for several reasons. Your GPU may be outputting at a lower rate than the monitor\'s maximum. Your operating system display settings may have a lower refresh rate selected. Some browsers cap animation frame rates for power saving on laptops. The measurement reflects real-world operating conditions, not the hardware maximum.',
  },
  {
    q: 'My monitor is 144 Hz but the checker shows 60 Hz. How do I fix this?',
    a: 'First check your operating system display settings. On Windows, go to Settings > System > Display > Advanced Display and confirm the refresh rate is set to 144 Hz or your monitor\'s maximum. On macOS, go to System Settings > Displays and check the refresh rate dropdown. Also check that your cable supports the required bandwidth. HDMI 1.4 cannot carry 1080p at 144 Hz; you need HDMI 2.0 or DisplayPort. After changing settings, re-run the checker.',
  },
  {
    q: 'Does a higher refresh rate actually look different?',
    a: 'Yes, noticeably. The difference between 60 Hz and 120 Hz or 144 Hz is clearly visible in fast-moving content, game motion, and UI scrolling. The transition from 60 Hz to 120 Hz is generally considered the most impactful step. Going from 120 Hz to 240 Hz or above provides diminishing perceptual returns for most users, though competitive gamers benefit from the reduced input latency that accompanies higher frame rates.',
  },
  {
    q: 'What is the difference between refresh rate and frame rate?',
    a: 'Refresh rate is a hardware property of the monitor: how many times per second it is capable of updating the display. Frame rate (fps) is determined by your GPU and how many complete frames it can render per second. For smooth display, your GPU frame rate should ideally match or exceed your monitor\'s refresh rate. If your GPU renders 30 fps on a 144 Hz monitor, motion will not appear as smooth as the monitor is capable of showing.',
  },
  {
    q: 'What is VSync, G-Sync, or FreeSync in relation to refresh rate?',
    a: 'These are technologies that synchronise your GPU frame rate with your monitor refresh rate to eliminate screen tearing. VSync locks the GPU to the monitor\'s fixed refresh rate. G-Sync (NVIDIA) and FreeSync (AMD) are adaptive sync technologies that allow the monitor to dynamically match the GPU frame rate within a supported range, eliminating both tearing and the stuttering that fixed VSync can cause when frame rates drop.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How the refresh rate checker works</h2>
    <p>
      The checker uses the browser&apos;s <code>requestAnimationFrame</code> API to sample the time
      between consecutive display frames. By recording the interval between 60 frames and calculating
      the average, it derives the frames-per-second rate the browser is currently operating at and
      converts this to the equivalent Hz value. Because it measures real browser animation frames rather
      than reading a hardware register, it reflects the actual rate in use rather than the rated maximum.
    </p>

    <h2 className="text-lg font-bold text-fg">Why your active rate may be lower than rated</h2>
    <p>
      Several factors can cause your active refresh rate to be lower than your monitor&apos;s rated
      maximum. The most common is an incorrect operating system display setting, as many systems default
      to 60 Hz even when a higher-rated monitor is connected. Cable bandwidth limitations are another
      frequent cause; HDMI 1.4 cannot carry the signal for most high-refresh resolutions and silently
      falls back to 60 Hz. Battery-saving modes on laptops can also cap the refresh rate when the
      device is unplugged. If the checker shows 60 Hz on a 120 Hz or 144 Hz monitor, check all three
      of these factors before assuming a hardware fault.
    </p>

    <h2 className="text-lg font-bold text-fg">Which refresh rate is right for different uses</h2>
    <p>
      For general desktop work such as document editing, web browsing, and media consumption, 60 Hz
      is functional and widely supported. For video content, 60 Hz handles standard frame rates well,
      and 120 Hz handles high-frame-rate video and streaming. For gaming, 120 Hz or 144 Hz represents
      a significant improvement in motion clarity over 60 Hz and is widely available at mid-range
      monitor price points. Competitive multiplayer gaming benefits from 240 Hz or higher, where the
      combination of high frame rate and reduced display latency provides a measurable advantage.
    </p>

    <h2 className="text-lg font-bold text-fg">Checking your operating system refresh rate setting</h2>
    <p>
      On Windows 10 and 11, right-click the desktop and select Display Settings, then choose Advanced
      Display Settings to find the refresh rate dropdown. Set it to the highest value supported by your
      monitor. On macOS Ventura and later, open System Settings, click Displays, and look for the
      refresh rate option in the display settings panel. Some monitors also need to be switched into a
      high-refresh mode via their on-screen display menu, particularly when using HDMI connections
      where the monitor may default to a lower rate for compatibility.
    </p>
  </>
)

export default async function RefreshRateCheckerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('refresh-rate-checker', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <RefreshRateChecker />
    </ToolPageLayout>
  )
}
