import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { RefreshRateChecker } from '@/components/tools/RefreshRateChecker'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Refresh Rate Test for Gaming Monitors: Check Your Hz'
const description = 'Confirm your gaming monitor is actually running at 144Hz, 240Hz, or its rated speed. Common setup mistakes prevent high refresh rate from activating. Free browser test.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/refresh-rate-checker/for-gaming` },
  openGraph: {
    title, description,
    url: `${appUrl}/refresh-rate-checker/for-gaming`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'What refresh rate do I need for gaming?',
    a: '60Hz is the minimum for playable gaming. 144Hz is the standard for most competitive and enthusiast gaming, providing a meaningful improvement in motion clarity and perceived responsiveness. 240Hz offers further gains for fast-paced competitive titles. Beyond 240Hz, the perceptual returns diminish for most players. For single-player and casual gaming, 60Hz to 120Hz is perfectly adequate.',
  },
  {
    q: 'Is there a visible difference between 144Hz and 240Hz?',
    a: 'Yes, but it is smaller than the jump from 60Hz to 144Hz. The difference between 144Hz and 240Hz is most noticeable when moving a mouse cursor quickly or in games with very fast motion. For competitive players in fast-paced shooters, 240Hz provides a measurable advantage from lower display latency per frame. For most gaming scenarios, 144Hz is the point of diminishing returns.',
  },
  {
    q: 'My gaming monitor is rated 144Hz but the checker shows 60Hz. How do I fix it?',
    a: 'First check your Windows display settings: right-click the desktop, select Display Settings, then Advanced Display and confirm the refresh rate dropdown shows 144Hz. If it shows 60Hz, change it. Also check your cable, as HDMI 1.4 cannot carry 144Hz at 1080p; you need HDMI 2.0 or DisplayPort 1.2 or higher. Finally, check your monitor\'s own OSD menu for a refresh rate setting, as some monitors default to a lower rate.',
  },
  {
    q: 'Does a higher refresh rate reduce input lag?',
    a: 'Yes, indirectly. A higher refresh rate shortens the maximum delay between a frame being rendered and displayed. At 60Hz, a frame waits up to 16.7ms for the next display cycle. At 144Hz, that maximum wait drops to 6.9ms. At 240Hz it drops to 4.2ms. This reduces the average display latency contribution, though it does not affect monitor input processing lag or system latency. The combined effect makes high refresh rate monitors feel more responsive, particularly in mouse-driven games.',
  },
  {
    q: 'Should I use G-Sync or FreeSync for gaming?',
    a: 'Use whichever is compatible with your GPU. G-Sync works with NVIDIA GPUs; FreeSync works with AMD GPUs and is also supported by NVIDIA as G-Sync Compatible on many certified monitors. Both technologies synchronise the display refresh rate to your GPU frame output, eliminating screen tearing and the input lag of fixed VSync. For gaming, adaptive sync is strongly recommended over both VSync and no-sync.',
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
    { '@type': 'ListItem', position: 3, name: 'For Gaming', item: `${appUrl}/refresh-rate-checker/for-gaming` },
  ],
}

export default function RefreshRateGamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Refresh Rate Checker', href: '/refresh-rate-checker' }, { label: 'For Gaming' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Refresh Rate Test for Gaming Monitors
          </h1>
          <p className="text-fg-muted">
            Confirm your gaming monitor is running at its rated refresh rate. Many monitors default to 60Hz even when 144Hz or higher is available.
          </p>
          <div className="pt-1">
            <RefreshRateChecker />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Why gaming refresh rate matters</h2>
            <p>
              At 60Hz your monitor displays 60 frames per second, meaning each frame is shown for
              16.7 milliseconds before the next one appears. At 144Hz that window shrinks to 6.9ms,
              and at 240Hz to 4.2ms. For fast-paced gaming this means faster position updates for
              moving enemies, smoother tracking during mouse movement, and a lower contribution from
              display latency to your total input response time. The difference between 60Hz and 144Hz
              is immediately and clearly visible in virtually any game with fast motion.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">The most common reason gaming monitors run at 60Hz</h2>
            <p>
              The most frequent cause is an incorrect operating system display setting. Windows defaults
              to 60Hz for many monitors even when the monitor and cable support higher rates. Always
              verify the refresh rate in Settings after connecting a new monitor. The second most common
              cause is a cable that does not support the required bandwidth. HDMI 1.4 is limited to
              1080p at 60Hz for most monitors. DisplayPort 1.2 or HDMI 2.0 are the minimum for 1080p
              at 144Hz. Ensure you are using the correct cable and the correct port on both your GPU
              and monitor.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Getting the most from a high refresh rate monitor</h2>
            <p>
              To benefit from 144Hz or 240Hz, your GPU needs to consistently render above those frame
              rates in the games you play. Running at 100fps on a 240Hz display still provides a
              significant advantage over 60Hz from the adaptive sync technology eliminating tearing.
              Enable your monitor&apos;s game mode or low latency mode in the OSD to minimise internal
              processing delay. Pair a high refresh rate monitor with a fast-response panel to avoid
              the ghosting that diminishes the clarity benefit of high frame rates.
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
