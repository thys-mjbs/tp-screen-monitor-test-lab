import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { ViewingAngleTest } from '@/components/tools/ViewingAngleTest'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const title = 'Laptop Screen Viewing Angle Test: Check Your Panel Colour and Brightness at Off-Angles'
const description = 'Test your laptop screen viewing angles and assess how colour, brightness, and contrast change when viewing from the side or above. Free online tool, works on all laptop panels.'
const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${appUrl}/viewing-angle-test/for-laptops` },
  openGraph: {
    title, description,
    url: `${appUrl}/viewing-angle-test/for-laptops`,
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', images: [ogImage] },
}

const faqs = [
  {
    q: 'Why do laptop screens look different from the side?',
    a: 'Laptop screens use LCD or OLED panel technologies that have different optical characteristics depending on the angle at which they are viewed. IPS LCD panels offer wide viewing angles with relatively consistent colour, but show a characteristic silver or golden glow (IPS glow) at extreme angles. TN (Twisted Nematic) panels have the most severe viewing angle issues — colour and brightness shift noticeably even at moderate off-axis angles. OLED panels generally offer excellent viewing angles with minimal colour shift, though some models show slight cool or warm tints at very steep angles.',
  },
  {
    q: 'What panel type is my laptop screen likely to be?',
    a: 'Most mainstream and premium laptops from 2019 onwards use IPS LCD panels, which offer good colour accuracy and acceptable viewing angles. Budget laptops and some gaming laptops still use TN panels, which have limited viewing angles but faster native response times. High-end laptops from Dell XPS, Samsung Galaxy Book, ASUS ZenBook, LG Gram, and MacBook Pro lines increasingly use OLED or AMOLED panels, which offer the widest viewing angles and best colour accuracy. Check your laptop&apos;s spec sheet for the panel type if unknown.',
  },
  {
    q: 'How do I run the viewing angle test on a laptop?',
    a: 'Open this test in your browser on the laptop you want to assess. Step through the solid colour and gradient panels, then slowly tilt the screen backward and forward from its default angle. Look for how colour, brightness, and contrast change as the viewing angle changes. Move to the side of the laptop and observe the screen from a 45-degree off-axis position. A good IPS panel should show only minimal colour shift from these angles; a TN panel will show significant colour and brightness inversion from extreme angles.',
  },
  {
    q: 'My laptop screen looks washed out from the side — is that normal?',
    a: 'Some degree of colour shift at extreme side angles is normal for all LCD-based laptop panels. IPS panels show relatively little shift up to around 45 degrees off-axis, then shift more noticeably toward 70-80 degrees. If the screen appears washed out or colour-shifted at a typical seated viewing angle rather than only at extreme angles, it may indicate either a TN panel (which is inherently limited) or an IPS panel that is not correctly calibrated. An OLED laptop screen should not appear washed out at any normal seated viewing angle.',
  },
  {
    q: 'Can poor viewing angles on a laptop screen be fixed?',
    a: 'The viewing angle performance of a laptop screen is determined by its panel technology, which cannot be changed in software. If you have a TN panel, the limited viewing angles are a fundamental characteristic of that technology. Colour calibration adjustments can improve how the panel looks straight-on but do not affect the viewing angle characteristic. If viewing angles are important for your use — presenting to others, working at unusual screen positions, or group viewing — upgrading to a laptop with an IPS or OLED panel is the only effective remedy.',
  },
]

const related = ['viewing-angle-test', 'colour-temperature-test', 'gamma-calibration-check', 'screen-uniformity-test']
  .map((s) => getToolBySlug(s)).filter(Boolean)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
    { '@type': 'ListItem', position: 2, name: 'Viewing Angle Test', item: `${appUrl}/viewing-angle-test` },
    { '@type': 'ListItem', position: 3, name: 'For Laptops', item: `${appUrl}/viewing-angle-test/for-laptops` },
  ],
}

export default function ViewingAngleLaptopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Viewing Angle Test', href: '/viewing-angle-test' }, { label: 'For Laptops' }]} />

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Laptop Screen Viewing Angle Test
          </h1>
          <p className="text-fg-muted">
            Assess how your laptop screen handles off-axis viewing. Check for colour shift, brightness loss, and contrast changes when the screen is tilted or viewed from the side.
          </p>
          <div className="pt-1">
            <ViewingAngleTest />
          </div>
        </section>

        <section className="space-y-6 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">IPS, TN, and OLED viewing angles explained</h2>
            <p>
              TN panels have the most limited viewing angles — viewing from above typically causes the
              image to appear brighter and washed out, while viewing from below inverts the colours.
              Horizontal viewing angles on TN are somewhat better but still restricted. IPS panels
              use a different liquid crystal orientation that allows light to pass consistently at wider
              angles, with colour and brightness remaining relatively stable up to around 40-50 degrees
              off-centre. OLED panels are inherently wide-angle because each pixel is its own light
              source rather than a backlight filtered through a crystal layer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Practical impact for laptop users</h2>
            <p>
              For most solo laptop users, viewing angle performance mainly matters when sharing the
              screen with someone next to you, when presenting to others, or when working in positions
              that place the screen at an angle from eye level. A laptop on a desk at a comfortable
              typing height positions the screen slightly above eye level for many users, which can
              cause a subtle viewing angle effect on TN panels. For photography, design, and
              colour-critical work, IPS or OLED panels are strongly preferable because the straight-on
              colour accuracy of TN panels is also generally inferior.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Using this test to assess your laptop panel</h2>
            <p>
              Display the grey and gradient panels from this tool and observe the screen from different
              positions. A grey panel that shifts toward blue, yellow, or pink as you move off-axis
              indicates colour shift from viewing angle. A panel that darkens significantly as you tilt
              it backward indicates limited vertical viewing angle performance. Note the angles at which
              you first notice a significant change — on a good IPS panel, this should be beyond 30-40
              degrees off-centre. On a TN panel, noticeable shift often begins within 15-20 degrees of
              the optimal viewing position.
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
