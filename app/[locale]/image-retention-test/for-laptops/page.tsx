import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ImageRetentionTest } from '@/components/tools/ImageRetentionTest'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Laptop Screen Burn-In Test: Check for Image Retention on Your Laptop'
const description = 'Test your laptop display for image retention and screen burn-in. Works on IPS, TN, OLED, and AMOLED laptop panels. Free online tool, no download required.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/image-retention-test/for-laptops` },
  openGraph: {
    title, description,
    url: `${appUrl}/image-retention-test/for-laptops`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Can laptop screens get burn-in?',
    a: 'Yes, but it depends on the panel technology. OLED and AMOLED laptop panels (used in high-end laptops from Dell, Samsung, LG, and ASUS) can develop permanent burn-in over time, particularly from static elements like taskbars, browser toolbars, or dock icons displayed continuously at high brightness. IPS and TN LCD laptop panels can experience temporary image retention (a ghost image that fades after displaying varied content) but are generally not susceptible to permanent burn-in under normal usage.',
  },
  {
    q: 'How do I use this test on a laptop?',
    a: 'Open the test in your browser and allow the conditioning pattern to display for 10 to 15 minutes. Then switch to the solid grey panel and look for a faint ghost of the conditioning pattern. A ghost that fades within a few minutes is temporary image retention, which is normal for some IPS panels. A ghost that remains for hours or does not fade is either severe retention or permanent burn-in, indicating panel damage.',
  },
  {
    q: 'Which laptop panels are most at risk for burn-in?',
    a: 'OLED and AMOLED laptop panels carry the highest risk because organic emitters degrade over time, and static bright elements accelerate this degradation unevenly across the panel. High-brightness OLED laptop displays running at their peak brightness setting are at greater risk. IPS LCD panels, while susceptible to temporary retention, very rarely develop permanent burn-in under normal laptop usage patterns.',
  },
  {
    q: 'What causes image retention on a laptop IPS panel?',
    a: 'Temporary image retention on IPS panels is caused by a phenomenon called dielectric absorption, where the liquid crystal alignment layer retains a memory of a static image for a period after the content changes. It is most common when a high-contrast static image such as a browser window border or a spreadsheet grid has been displayed at the same position for several hours. It typically fades after displaying varied content or after the laptop has been off for some time.',
  },
  {
    q: 'How can I reduce burn-in risk on my OLED laptop?',
    a: 'Set the display brightness to the lowest comfortable level for daily use, as OLED burn-in is accelerated by high brightness. Enable automatic screen saver or sleep after a short idle period. Use a dark mode theme and dark browser theme to reduce the brightness of persistently displayed UI elements. Avoid leaving static content such as a paused video or spreadsheet at high brightness for extended periods. Some laptop manufacturers include pixel-shift or pixel-refresh features in OLED power settings that help manage panel longevity.',
  },
]

const related = ['image-retention-test', 'dead-pixel-test', 'stuck-pixel-fixer', 'black-screen']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Image Retention Test', item: `${appUrl}/image-retention-test` },
    { '@type': 'ListItem', position: 3, name: 'For Laptops', item: `${appUrl}/image-retention-test/for-laptops` },
  ],
}

export default function ImageRetentionLaptopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Image Retention Test', href: '/image-retention-test' }, { label: 'For Laptops' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Laptop Screen Burn-In Test
          </h1>
          <p className="text-fg-muted">
            Check your laptop display for image retention and screen burn-in. Display the conditioning pattern, then switch to grey to reveal any ghosting on your IPS, OLED, or AMOLED panel.
          </p>
          <div className="pt-1">
            <ImageRetentionTest />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Image retention vs. burn-in on laptop panels</h2>
            <p>
              Image retention and burn-in are different phenomena, though both produce a ghost image on
              the display. Image retention is temporary and refers to a faint echo of a previous image
              that fades after displaying varied content. It can occur on any panel type and is usually
              harmless. Burn-in is permanent degradation of the panel material, either uneven OLED
              organic emitter degradation or, rarely, permanent crystal alignment changes in LCD panels.
              This test can reveal both types: a ghost that fades over minutes indicates retention; a
              ghost that remains after 30 minutes of solid-colour display indicates likely burn-in.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Common sources of laptop screen burn-in</h2>
            <p>
              On OLED laptop panels, the most common burn-in sources are the Windows taskbar, the
              browser navigation bar, the system tray area, and persistent application toolbars such as
              those in image editing or spreadsheet software. These elements sit at maximum brightness
              against the dark panel for many hours each day. On IPS panels, temporary retention is
              most often caused by spreadsheets, code editors, or any application with a persistent
              high-contrast grid or border displayed for an extended session.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">What to do if you find burn-in on your laptop</h2>
            <p>
              If the ghosting does not fade after 30 minutes of displaying a solid grey or white panel,
              the damage may be permanent. Check whether your laptop is still within its warranty period
              and review the manufacturer&apos;s pixel defect and panel damage policy. Many manufacturers do
              not cover burn-in under standard warranty as it is classified as a result of usage patterns
              rather than a manufacturing defect. If the laptop is a recent purchase, document the
              defect with a photograph and contact support, as some manufacturers will address burn-in
              on clearly new units as a goodwill replacement.
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
