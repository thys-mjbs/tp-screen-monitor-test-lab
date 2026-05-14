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
  return toolMetadata(getToolByLocale('blue-screen', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'Is this the same as the Windows blue screen of death?',
    a: 'No. This tool displays a solid blue fullscreen panel for monitor hardware testing. The Windows blue screen of death (BSOD) is an error screen displayed by the operating system when a critical system failure occurs. If you are searching for help with a blue error screen on your computer, this tool is unrelated. This is purely a display inspection tool that shows a uniform blue background for pixel and subpixel testing.',
  },
  {
    q: 'What does a blue screen test reveal on a monitor?',
    a: 'A solid blue panel isolates the blue subpixel channel, making faults in the red and green subpixels immediately visible. A pixel with a stuck red subpixel will appear magenta against a blue background. A pixel with a stuck green subpixel will appear cyan. A dead pixel with all subpixels off appears as a dark dot. These faults are often invisible on white backgrounds but stand out clearly on a pure colour background.',
  },
  {
    q: 'Why does my screen have a blue tint?',
    a: 'A blue tint during normal use can indicate an incorrect colour temperature setting, a faulty colour profile, or a hardware issue with the display cable or backlight. A blue tint that only appears on certain content or applications may be a software colour management issue. If the blue tint is present across all content including desktop backgrounds and system interfaces, check your display cable connections and reset your monitor colour settings to factory defaults.',
  },
  {
    q: 'Does the blue screen test work differently on OLED displays?',
    a: 'Blue subpixels on OLED panels are known to degrade faster than red and green subpixels over time because the blue organic compounds have a shorter lifespan. A solid blue screen can reveal uneven ageing in the blue channel on OLED panels, appearing as subtle variations in uniformity. For a dedicated burn-in and retention check on OLED displays, use the Image Retention Test tool.',
  },
  {
    q: 'Should I test my monitor with all three primary colour screens?',
    a: 'Yes. Testing with red, green, and blue screens separately gives the most complete picture of subpixel health. A fault that is invisible on one colour may be clearly visible on another, depending on which specific subpixels are affected. Running all three tests takes only a few minutes and ensures you have not missed a fault that would only appear on a specific colour channel.',
  },
  {
    q: 'Can a blue screen test help me check for colour accuracy?',
    a: 'Informally, yes. On a well-calibrated display, pure blue should appear as a clean, saturated blue with no noticeable purple or teal cast. If the blue appears significantly different from what you would expect compared to other displays, your monitor colour profile may need adjustment. For precise colour accuracy verification, use a hardware colorimeter with calibration software.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the blue screen test checks</h2>
    <p>
      A fullscreen blue panel isolates the blue colour channel across every pixel on your display. By asking
      every blue subpixel to turn fully on while red and green remain off, you create the ideal conditions
      for spotting subpixel faults that would otherwise be invisible. Red and green subpixels stuck in an on
      state appear as magenta or cyan dots respectively. Dead subpixels appear as dark spots. The blue screen
      is particularly valuable when combined with the Red Screen and Green Screen tests to build a complete
      picture of subpixel health across all three colour channels.
    </p>

    <h2 className="text-lg font-bold text-fg">Blue subpixels and OLED longevity</h2>
    <p>
      On OLED panels, blue subpixels are the most prone to differential ageing. The organic compounds
      responsible for blue light emission degrade at a faster rate than red and green compounds, which means
      that over time the blue channel can lose relative brightness compared to other channels. A uniform blue
      screen viewed on an OLED panel that has seen heavy use may reveal subtle variations in intensity that
      reflect this ageing pattern. If you notice cloudy or patchy areas on a blue background that are not
      present on a white background, differential OLED ageing may be a factor.
    </p>

    <h2 className="text-lg font-bold text-fg">Blue screen versus the BSOD</h2>
    <p>
      This tool has no connection to the Windows blue screen of death. The Windows BSOD is an operating
      system error screen that appears when Windows encounters an unrecoverable system error. It is
      characterised by error codes, a QR code, and a sad face icon. The blue screen from this tool is a
      plain, uniform panel with no text or symbols, rendered entirely in the browser. If your monitor
      displays a blue screen outside of this tool, the cause is unrelated to monitor hardware testing.
    </p>

    <h2 className="text-lg font-bold text-fg">Getting accurate results</h2>
    <p>
      Test in fullscreen mode at your standard brightness level. The blue channel tends to be dimmer than
      green at equivalent input values, which is normal and expected. Allow your eyes a moment to adjust
      after switching from brighter content before scanning the panel. Inspect the screen systematically,
      working from corner to corner. Small subpixel faults are easier to spot when you look at a fixed area
      for a second or two rather than scanning quickly across the whole display.
    </p>
  </>
)

export default async function BlueScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('blue-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#0000FF', label: 'Blue' }} />
    </ToolPageLayout>
  )
}
