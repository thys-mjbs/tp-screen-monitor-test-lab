import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { RefreshRateChecker } from '@/components/tools/RefreshRateChecker'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = '240Hz Monitor Test: Confirm Your 240Hz Refresh Rate Online'
const description = 'Check that your 240Hz monitor is actually running at 240Hz. A wrong cable, driver issue, or Windows setting can silently cap you at a lower rate. Free instant browser test.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/refresh-rate-checker/240hz-test` },
  openGraph: {
    title, description,
    url: `${appUrl}/refresh-rate-checker/240hz-test`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'How do I know if my monitor is running at 240Hz?',
    a: 'This checker reads the actual frame rate your browser is presenting and displays it as Hz. A result of 240Hz confirms your system is operating at the correct rate. A result of 60Hz, 120Hz, or 144Hz indicates your monitor is not running at its full rated speed. The checker measures the real operating rate (not the hardware maximum), so it reflects your actual current configuration including Windows settings and cable bandwidth.',
  },
  {
    q: 'My monitor is 240Hz but the checker shows 144Hz or 60Hz. Why?',
    a: 'The most common reason is a Windows display setting that has not been updated to 240Hz. Right-click the desktop, select Display Settings, then Advanced Display, and check the refresh rate dropdown. If 240Hz is not listed, your cable may not support the required bandwidth. At 1080p, 240Hz requires DisplayPort 1.2 or HDMI 2.0 at minimum. At 1440p, 240Hz requires DisplayPort 1.4. A standard HDMI 1.4 cable will cap you at 120Hz at 1080p. Also verify you are using a GPU port, not a motherboard output.',
  },
  {
    q: 'What cable do I need for 240Hz?',
    a: 'For 1080p at 240Hz: DisplayPort 1.2 or HDMI 2.0. For 1440p at 240Hz: DisplayPort 1.4 or DisplayPort 2.0. For 4K at 240Hz: DisplayPort 2.0 or HDMI 2.1. Not all monitors advertised as 240Hz support that rate at all resolutions, so check your monitor&apos;s spec sheet for the maximum refresh rate at each supported resolution. Use DisplayPort where possible as it generally has higher bandwidth headroom than HDMI at equivalent versions.',
  },
  {
    q: 'Is 240Hz worth it over 144Hz for competitive gaming?',
    a: 'The difference between 144Hz and 240Hz is measurable but smaller than the jump from 60Hz to 144Hz. At 240Hz each frame is displayed for 4.2ms versus 6.9ms at 144Hz, a 39% reduction in frame time. For competitive first-person shooters at high skill levels, this additional smoothness and the corresponding reduction in display latency can be advantageous. Most casual and mid-level players find the difference less impactful than the resolution or panel type of the monitor. The benefit is most pronounced when the game consistently exceeds 200 frames per second.',
  },
  {
    q: 'Does Windows automatically set 240Hz when I connect a 240Hz monitor?',
    a: 'No. Windows defaults to 60Hz for any new display connection to ensure compatibility across all hardware. You must manually set the refresh rate to 240Hz in Windows Advanced Display Settings after connecting your monitor. This is a one-time configuration step that persists as long as you use the same connection. If you change cables, ports, or GPU settings, verify the refresh rate is still set correctly.',
  },
]

const related = ['refresh-rate-checker', 'motion-blur-test', 'input-lag-test', 'overdrive-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Refresh Rate Checker', item: `${appUrl}/refresh-rate-checker` },
    { '@type': 'ListItem', position: 3, name: '240Hz Test', item: `${appUrl}/refresh-rate-checker/240hz-test` },
  ],
}

export default function RefreshRate240hzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Refresh Rate Checker', href: '/refresh-rate-checker' }, { label: '240Hz Test' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            240Hz Monitor Test
          </h1>
          <p className="text-fg-muted">
            Instantly confirm whether your 240Hz monitor is running at its full rated refresh rate or has been capped by a Windows setting, cable limitation, or driver issue.
          </p>
          <div className="pt-1">
            <RefreshRateChecker />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why 240Hz monitors often run at lower rates</h2>
            <p>
              A 240Hz monitor will only operate at 240Hz when all three conditions are met: the correct
              cable is connected, the cable is plugged into a capable GPU port, and Windows has been
              manually set to 240Hz. Windows defaults to 60Hz for all new display connections regardless
              of the monitor&apos;s rated specification. Missing any one of these conditions results in a
              silently capped refresh rate that looks and feels noticeably different in fast-paced
              applications, even if you cannot immediately identify the cause.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Setting 240Hz in Windows</h2>
            <p>
              Right-click the Windows desktop and select Display Settings. Scroll down and click
              Advanced Display. In the refresh rate dropdown, select 240Hz. If 240Hz does not appear
              in the list, check your cable first. A DisplayPort 1.2 or HDMI 2.0 cable is the minimum
              for 1080p at 240Hz. Also verify the cable is connected to a port on your GPU, not the
              motherboard I/O panel. On laptops with a Nvidia GPU, also check the Nvidia Control Panel
              to confirm the external display is routed through the dedicated GPU output.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Verifying GPU output with the Nvidia or AMD control panel</h2>
            <p>
              After setting 240Hz in Windows, verify it in your GPU control panel. In Nvidia Control
              Panel, navigate to Display, then Change Resolution, select your monitor, and confirm the
              refresh rate shown matches 240Hz. In AMD Radeon Software, check Display and confirm the
              refresh rate. GPU control panels can sometimes retain an older setting that conflicts
              with the Windows display setting. If the conflict exists, set both to 240Hz and
              run this checker again to confirm the operating rate.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-fg">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="group rounded-xl border border-border bg-surface overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-medium text-fg text-sm list-none select-none hover:bg-elevated transition-colors">
                  {q}
                  <span className="shrink-0 text-fg-muted text-lg leading-none group-open:rotate-45 transition-transform duration-150">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-fg-muted leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-fg">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((tool) => <ToolCard key={tool!.slug} tool={tool!} />)}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
