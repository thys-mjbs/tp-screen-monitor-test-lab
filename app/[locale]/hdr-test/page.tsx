import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { HdrTest } from '@/components/tools/HdrTest'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('hdr-test', locale))
}

const faqs: FAQ[] = [
  {
    q: 'What is HDR on a monitor?',
    a: 'HDR (High Dynamic Range) on a monitor refers to the ability to display a wider range of brightness levels than a standard display. Standard dynamic range (SDR) monitors are limited to a peak brightness of around 100 to 300 nits. HDR monitors can reach 400, 600, 1000, or even 2000 nits at peak, allowing bright highlights to be far more vivid while simultaneously showing deep shadow detail. HDR also typically requires a wider colour gamut and higher bit depth to fully realise its benefit.',
  },
  {
    q: 'What do the detected capabilities mean?',
    a: 'The HDR result reflects whether your browser detects a high dynamic range display environment. The P3 result shows whether your display covers the wider Display P3 colour space used in HDR content. The Rec. 2020 result shows whether your display covers the broadcast HDR colour space, which is rare on consumer hardware. A display that reports HDR but not P3 may have certification only for brightness without a true wide gamut.',
  },
  {
    q: 'My display says HDR but the test shows no HDR support. Why?',
    a: 'Several things can prevent browser HDR detection. Your operating system HDR mode may not be enabled: on Windows 10 and 11, HDR must be turned on in Settings > System > Display > HDR. On macOS, some displays require HDR to be enabled in System Settings > Displays. Additionally, not all browsers pass the HDR signal correctly even when the OS has HDR active. Chrome and Edge generally handle this better than Firefox on Windows.',
  },
  {
    q: 'What is the difference between HDR400, HDR600, and HDR1000?',
    a: 'These are VESA DisplayHDR certification levels that define minimum requirements for peak brightness, black level, colour gamut, and bit depth. HDR400 requires 400 nits peak brightness and is considered entry-level, and may not produce a visibly better result than a good SDR monitor. HDR600 and HDR1000 require 600 and 1000 nits respectively, along with wider gamut and local dimming, which produce a meaningfully different viewing experience for supported content.',
  },
  {
    q: 'What is Wide Colour Gamut and why does it matter for HDR?',
    a: 'Standard monitors cover the sRGB colour space, which represents about 72% of the visible colours in a standard CIE diagram. Wide Colour Gamut (WCG) displays cover Display P3, which adds approximately 25% more colours than sRGB, enabling much more vivid reds, greens, and blues. HDR content is typically mastered in P3 or Rec. 2020, so a monitor without wide gamut cannot display HDR colours correctly even if it has sufficient peak brightness. Full HDR requires both high brightness and a wide gamut.',
  },
  {
    q: 'What do the brightness step ramps test?',
    a: 'The shadow steps show ten shades from pure black up through dark grey. On a well-calibrated monitor, all ten steps should be individually distinguishable. If the darkest steps merge into black, your monitor has crushed blacks or your gamma is set too high. The highlight steps show ten shades from mid-grey up to pure white. If the lightest steps merge into white, your monitor is clipping highlights, often caused by excessive brightness or incorrect gamma. These are the same tests as the Contrast Black Level and White Saturation tools but presented together here for a combined HDR-relevant evaluation.',
  },
  {
    q: 'Can a browser actually display HDR content?',
    a: 'Limited browser HDR support exists. Chromium-based browsers including Chrome and Edge can pass HDR video content to HDR displays when the OS HDR mode is active, though this is handled by the video decoder rather than CSS. Standard CSS colours and gradients are still rendered in the SDR range. There is no current browser standard for specifying CSS colour values in luminance levels above SDR white. True HDR evaluation therefore requires dedicated HDR test content played in a media player or through a streaming service that supports HDR passthrough.',
  },
  {
    q: 'Should I enable HDR mode on Windows for daily use?',
    a: 'It depends on your monitor and workflow. HDR mode on Windows remaps the SDR content rendering pipeline to fit within the HDR output range, which can cause SDR content to appear washed out or differently toned on some monitors. High-quality HDR monitors with good SDR emulation handle this well; budget HDR monitors often look worse with HDR enabled for desktop use. A common approach is to enable HDR only when watching HDR video or playing HDR games, and disable it for general desktop and web browsing.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What this tool detects</h2>
    <p>
      The tool queries three CSS media features that browsers expose to report display capability. The
      <code> dynamic-range: high</code> query returns true when the browser is operating in an HDR
      display environment with HDR mode active at the operating system level. The
      <code> color-gamut: p3</code> and <code>color-gamut: rec2020</code> queries report whether the
      display hardware can represent colours beyond the sRGB gamut. These results reflect the browser&apos;s
      view of your current display configuration, not the display&apos;s hardware maximum capability.
    </p>

    <h2 className="text-lg font-bold text-fg">Reading the brightness ramps</h2>
    <p>
      The shadow step ramp shows ten brightness levels from pure black to dark grey. A correctly
      calibrated display shows all ten steps as distinct shades. If the first few steps appear
      identical, your display is crushing shadow detail, which makes dark scenes in games and films
      lose depth and texture. The highlight step ramp shows ten steps from mid-grey to pure white.
      Merged steps at the bright end indicate highlight clipping, which flattens out detail in
      bright areas. Both ramps are sensitive to brightness, gamma, and HDR mode settings.
    </p>

    <h2 className="text-lg font-bold text-fg">Enabling HDR in Windows</h2>
    <p>
      On Windows 10 and 11, open Settings and navigate to System, then Display. If your monitor
      supports HDR, a toggle labelled Use HDR or Windows HD Color will be available. Enabling this
      switches the display pipeline to HDR output. You can also enable Auto HDR, which attempts to
      upscale SDR games to HDR. After enabling, re-run this tool to confirm the browser detects the
      change. Note that some browsers may need to be relaunched after the OS HDR mode changes.
    </p>

    <h2 className="text-lg font-bold text-fg">Limitations of browser HDR testing</h2>
    <p>
      Browsers render standard web content in the SDR range regardless of whether HDR mode is active.
      This means the ramps and gradients on this page are displayed within the standard 0 to 100 nit
      range of SDR white, not the 400 to 1000 nit peak that HDR monitors are capable of reaching.
      Evaluating true HDR peak brightness requires dedicated HDR test footage played in a media player
      or through an HDR streaming service. Use this tool to confirm that your system is correctly
      configured for HDR and to evaluate shadow and highlight detail within the SDR range.
    </p>
  </>
)

export default async function HdrTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('hdr-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <HdrTest />
    </ToolPageLayout>
  )
}
