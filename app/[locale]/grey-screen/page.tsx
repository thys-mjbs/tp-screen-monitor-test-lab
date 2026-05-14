import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('grey-screen', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is the dirty screen effect and how does grey reveal it?',
    a: 'The dirty screen effect (DSE) is an uneven brightness pattern that appears as cloudy, patchy, or smudged areas on the display panel. It is caused by uneven pressure or inconsistency in the LCD panel layers during manufacturing. A mid-grey background is the most effective colour for revealing DSE because it sits in the middle tonal range where brightness variation is most visible to the human eye. White and black screens tend to mask DSE, while grey makes it obvious.',
  },
  {
    q: 'What shade of grey should I use for display testing?',
    a: 'A medium neutral grey at roughly 50 percent brightness is the most commonly used shade for display uniformity and DSE testing. This tool uses a standard mid-grey. Avoid testing at very light or very dark grey values, as these extremes tend to hide the kinds of uniformity issues that mid-grey reveals. If you want to test at different grey levels, run the Gradient Banding Test to check across the full tonal range.',
  },
  {
    q: 'Can the grey screen reveal dead pixels?',
    a: 'Yes, though the grey screen is less effective for dead pixel detection than the individual colour screens. Dead pixels that are completely dark appear as small dark spots against the grey. Stuck pixels that are stuck at white or a primary colour may also be visible, though they are often more obvious against the complementary colour screen. For the most thorough dead pixel check, use the Dead Pixel Test which cycles through multiple colours.',
  },
  {
    q: 'Why does my grey screen look uneven with patches of different brightness?',
    a: 'Uneven brightness on a grey screen is typically caused by dirty screen effect (DSE), backlight uniformity issues, or in some cases a partially failing backlight. Budget monitors often exhibit some degree of DSE, and a small amount is considered normal. If the patches are significant in size or intensity, or if they interfere with your work on gradients or neutral backgrounds, you may have a panel uniformity issue that could qualify for a warranty claim.',
  },
  {
    q: 'Is the grey screen test the same as a screen uniformity test?',
    a: 'They are related but not identical. A grey screen test is a quick visual check using a mid-grey background. The Screen Uniformity Test tool provides a more structured approach with specific reference points and guidance for measuring uniformity systematically. The grey screen is a good starting point, while the Screen Uniformity Test is more appropriate when you need to document uniformity for a warranty claim or professional calibration reference.',
  },
  {
    q: 'Should I test in a bright or dark room?',
    a: 'Test in moderate ambient lighting for the grey screen. Unlike the black screen test which benefits from a darker room, the grey screen is about surface uniformity rather than backlight bleed detection. Testing in a very bright room can cause reflections that mask uniformity issues. Moderate, indirect room lighting gives the best conditions for seeing DSE and backlight variation clearly.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">Why grey is the most revealing test colour</h2>
    <p>
      Of all the solid colours you can display on a monitor, mid-grey is the most effective at revealing
      display uniformity problems. White backgrounds push all subpixels to maximum output, which tends to
      mask moderate brightness variations. Black backgrounds reveal backlight bleed but hide the internal
      panel inconsistencies that cause dirty screen effect. Grey sits at the midpoint where the human visual
      system is most sensitive to luminance differences, making even subtle variations in brightness across
      the panel clearly visible.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding dirty screen effect</h2>
    <p>
      Dirty screen effect (DSE) is a characteristic of some LCD panels where the display appears to have
      cloudy, smudged, or mottled areas even when the screen is physically clean. It is caused by
      inconsistencies in the LCD panel structure itself, specifically variations in how the liquid crystal
      layer or diffuser layers are assembled. DSE is most common on curved monitors and budget flat panels.
      A moderate amount of DSE near the edges is considered within normal tolerances for most consumer
      monitors, but significant DSE that covers large areas of the panel or is visible during normal desktop
      use is worth documenting for a potential warranty claim.
    </p>

    <h2 className="text-lg font-bold text-fg">Grey screen versus the Screen Uniformity Test</h2>
    <p>
      The grey screen gives you a quick visual impression of uniformity across your panel. The Screen
      Uniformity Test provides a more structured diagnostic framework with zones and reference points for
      comparing brightness across specific areas of the display. If the grey screen reveals something
      concerning, the Screen Uniformity Test is the appropriate next step before contacting your retailer
      or manufacturer with a warranty claim.
    </p>

    <h2 className="text-lg font-bold text-fg">What to do if you see uniformity problems</h2>
    <p>
      If you notice significant clouding, patches, or brightness variation on the grey screen, document it
      by photographing the display in a darkened room with your monitor at a consistent brightness level.
      Check whether the issue is consistent across different grey tones by running the Gradient Banding Test.
      Contact your monitor manufacturer or retailer with the evidence. Most manufacturers have a panel
      uniformity threshold beyond which they will offer a replacement, though the specific threshold varies
      by brand and monitor tier.
    </p>
  </>
)

export default async function GreyScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('grey-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#808080', label: 'Grey' }} />
    </ToolPageLayout>
  )
}
