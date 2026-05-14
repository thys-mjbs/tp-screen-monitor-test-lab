import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenCleanMode } from '@/components/tools/ScreenCleanMode'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('screen-clean-mode', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is screen clean mode?',
    a: 'Screen clean mode fills your display with a plain solid panel and locks it for 15 seconds so you can clean your screen surface safely. The brief lock period prevents accidental touches, swipes, or clicks from triggering links or inputs while your cloth is on the screen. After the lock period ends, you can tap or click anywhere, or press Esc, to exit clean mode.',
  },
  {
    q: 'Which panel colour is best for cleaning?',
    a: 'White is the most practical colour for cleaning because it makes dust, smudges, and fingerprints visibly obvious against the bright background. Use white to identify exactly where marks are before and after cleaning. Black is useful for spotting fibres or lint left by cleaning cloths. Grey is a neutral option if white is too bright in a dark room.',
  },
  {
    q: 'How should I clean my monitor screen?',
    a: 'Use a dry, clean microfibre cloth for routine dust and fingerprint removal. Wipe in gentle circular or straight strokes without pressing hard on the panel. For stubborn smudges, dampen a small area of the cloth with distilled water only. Never use tap water, glass cleaner, alcohol, or any solvent on a panel coating. Allow the screen to dry fully before exiting clean mode. Never spray liquid directly onto the screen.',
  },
  {
    q: 'Can I use this on a touchscreen?',
    a: 'Yes. Screen clean mode is particularly useful on touchscreens because touching the screen during cleaning without a lock would register as taps and swipes. The 15-second lock period prevents any touch input from being interpreted by the operating system. Note that on some touchscreen devices the operating system handles touch input below the browser level, so the lock may not suppress all touch events on all devices.',
  },
  {
    q: 'Why is there a 15-second lock period?',
    a: 'The lock period gives you time to pick up your cloth and wipe the screen without the first touch immediately deactivating clean mode. Without it, the act of cleaning would exit the mode immediately on a touchscreen, or the first accidental mouse movement would end the session. Fifteen seconds is enough for a single thorough wipe of a standard monitor. If you need more time, simply exit and re-enter clean mode.',
  },
  {
    q: 'Is it safe to touch the panel while in clean mode?',
    a: 'Physically cleaning the screen while clean mode is active is safe. Modern panel coatings are designed to withstand gentle wiping with a microfibre cloth. Avoid pressing firmly on LCD panels as this can cause temporary pressure marks. OLED panels are particularly sensitive to pressure and should be wiped with very light pressure only. In all cases, use a clean, dry microfibre cloth and avoid any abrasive materials.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to use screen clean mode</h2>
    <p>
      Select your preferred panel colour from the options below the preview, then click Enable Clean Mode.
      Your screen will enter fullscreen and lock for 15 seconds. Use this window to wipe your screen with
      a microfibre cloth. The plain background makes dust and smudges clearly visible so you can confirm
      each area has been cleaned. After 15 seconds, a tap, click, or Esc will return you to the browser.
    </p>

    <h2 className="text-lg font-bold text-fg">Cleaning tips for different screen types</h2>
    <p>
      LCD and IPS panels have a hard coating that withstands gentle wiping. Use a dry microfibre cloth
      for most cleaning and distilled water for stubborn marks. OLED panels are thinner and more fragile
      than LCD panels, so use particularly light pressure and ensure your cloth is completely free of
      particles that could scratch the surface. Laptop screens and all-in-one displays often have glossy
      coatings that show fingerprints more readily but clean easily with a single dry wipe. Matte anti-glare
      coatings can trap smudges in the textured surface; use a slightly firmer pressure with a dry cloth
      on matte coatings.
    </p>

    <h2 className="text-lg font-bold text-fg">What to avoid when cleaning screens</h2>
    <p>
      Never use paper towels, tissues, or rough cloths on a monitor panel as these materials contain
      abrasive fibres that can permanently scratch anti-reflective and anti-glare coatings. Never spray
      any liquid directly onto the screen, as liquid can enter the panel edges and cause permanent damage.
      Avoid glass cleaners, alcohol, ammonia, acetone, or any cleaning product not specifically listed
      as safe for monitor panels. When in doubt, a clean dry microfibre cloth alone removes the vast
      majority of dust and fingerprints without any risk.
    </p>

    <h2 className="text-lg font-bold text-fg">Using the white screen for cleaning inspection</h2>
    <p>
      After cleaning, use the White Screen tool to confirm the panel surface is clean. The white
      background at full brightness shows any remaining dust, fibres, or smear marks that may not
      be visible on normal content. Run a final check after cleaning and before exiting fullscreen.
      If marks remain, re-enter clean mode for another pass with a clean, dry area of the cloth.
    </p>
  </>
)

export default async function ScreenCleanModePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('screen-clean-mode', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenCleanMode />
    </ToolPageLayout>
  )
}
