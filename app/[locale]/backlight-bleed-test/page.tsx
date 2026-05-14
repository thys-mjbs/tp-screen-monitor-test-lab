import type { Metadata } from 'next'
import { Moon } from 'lucide-react'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('backlight-bleed-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is backlight bleed?',
    a: 'Backlight bleed is light from an LCD monitor\'s backlight leaking around the edges or corners of the panel and showing through the LCD layer. Because LCD panels cannot completely block the backlight in dark areas, some light escapes around the panel edges. This appears as bright patches or glowing along the edges when the screen displays dark content. It is more noticeable on dark images, films with dark scenes, and in a dark room.',
  },
  {
    q: 'How do I test for backlight bleed?',
    a: 'Dim your room lights as much as possible, then click Full Screen to fill your display with pure black. Look carefully at all four edges and particularly the corners of the panel. Backlight bleed appears as patches of light or bright areas along the panel edges, often white or slightly warm-toned. Look from your normal viewing position rather than at an extreme angle, as this gives the most representative result.',
  },
  {
    q: 'How much backlight bleed is acceptable?',
    a: 'A small amount of light along the very corners and edges is normal and present to some degree on nearly all LCD panels. Bleed that stays confined to a few millimetres at the screen corners is generally considered within acceptable tolerances. Bleed that extends significantly inward from the edges, covers a wide band, or appears as a bright patch in the middle of an edge is considered excessive and may qualify for a warranty replacement.',
  },
  {
    q: 'What is the difference between backlight bleed and IPS glow?',
    a: 'Backlight bleed appears as fixed bright patches at specific locations on the screen edges regardless of your viewing angle. It is caused by physical light leakage around the panel frame. IPS glow is a soft shimmering brightness that appears in the corners of IPS panels when viewed at an off-angle or from a distance. IPS glow changes in intensity and position as you move your head, while backlight bleed stays in the same place. Use the IPS Glow Test to tell the difference.',
  },
  {
    q: 'Does backlight bleed get worse over time?',
    a: 'Backlight bleed can change over time in some monitors. It may decrease slightly as the panel warms up and components settle. It may also worsen if the panel is placed under physical stress, mounted incorrectly, or transported without adequate protection. Temperature changes can also temporarily affect bleed levels. If you notice a sudden significant increase in backlight bleed, check whether the monitor has been subjected to physical pressure.',
  },
  {
    q: 'Does the type of monitor panel affect backlight bleed?',
    a: 'Yes. IPS panels are generally more prone to backlight bleed than VA panels, which have much higher native contrast ratios and better light blocking. TN panels typically fall in between. OLED panels have no backlight at all and therefore cannot have backlight bleed, though they can have other uniformity issues. If backlight bleed is a critical concern, VA or OLED panels are worth considering for your next monitor purchase.',
  },
  {
    q: 'Can backlight bleed be fixed at home?',
    a: 'There are home remedies sometimes recommended online, such as loosening the bezel screws slightly or applying gentle pressure to certain areas. These are not recommended as they risk damaging the panel or voiding your warranty. If the bleed is within warranty and exceeds your manufacturer\'s stated threshold, the correct course of action is to contact your retailer or manufacturer for a replacement.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How to test for backlight bleed accurately</h2>
    <p>
      The backlight bleed test requires a completely dark panel and a dark room for accurate results. Even
      moderate ambient lighting can overpower the glow from backlight bleed and make it invisible during
      testing, then very noticeable when you watch films or play games in the dark. Dim your lights fully
      before entering fullscreen, and allow a moment for your eyes to adjust to the dark environment before
      inspecting the panel edges.
    </p>

    <h2 className="text-lg font-bold text-fg">What to look for during the test</h2>
    <p>
      Position yourself at your normal viewing distance and look straight at the panel. Start with the
      corners, as these are the most common locations for backlight bleed. Work your way along each edge.
      Bleed appears as a patch of light that is noticeably brighter than the rest of the black panel.
      It often has a slightly white or warm-toned quality. Some bleed is confined to a narrow strip at
      the very edge and is only visible at extreme angles, which is less significant than bleed that is
      clearly visible from a straight-on position.
    </p>

    <h2 className="text-lg font-bold text-fg">Backlight bleed versus IPS glow</h2>
    <p>
      Backlight bleed and IPS glow look similar at first glance but behave differently. To distinguish
      them, perform the test straight on and then tilt your head to view at a slight off-angle. IPS glow
      will shift in position and change in intensity as your viewing angle changes. Backlight bleed stays
      fixed at the same screen position regardless of angle. If the bright patches in the corners disappear
      or shift dramatically when you move your head, you are seeing IPS glow rather than bleed. Use the
      IPS Glow Test for a more detailed analysis of this distinction.
    </p>

    <h2 className="text-lg font-bold text-fg">Documenting bleed for a warranty claim</h2>
    <p>
      If your backlight bleed is significant enough to pursue a warranty claim, photograph the screen in a
      dark room with your monitor at its standard brightness. Take photos from straight on at your normal
      viewing distance. Most manufacturers have a written threshold for acceptable bleed levels. Contact
      your manufacturer or retailer with the photographs and your monitor model and serial number. Many
      manufacturers will arrange an exchange for excessive bleed within the warranty period.
    </p>
  </>
)

export default async function BacklightBleedTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('backlight-bleed-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <>
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
          <Moon size={16} className="mt-0.5 shrink-0 text-slate-500" />
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">Best results in a dark room.</span> Dim or switch off your room lights before entering fullscreen. Backlight bleed is significantly harder to see in a bright environment and may be completely invisible in a lit room.
          </p>
        </div>
        <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
      </>
    </ToolPageLayout>
  )
}
