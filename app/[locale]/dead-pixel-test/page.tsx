import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('dead-pixel-test', locale))
}

const COLORS: ColorEntry[] = [
  { hex: '#FFFFFF', label: 'White' },
  { hex: '#000000', label: 'Black' },
  { hex: '#FF0000', label: 'Red' },
  { hex: '#00FF00', label: 'Green' },
  { hex: '#0000FF', label: 'Blue' },
  { hex: '#00FFFF', label: 'Cyan' },
  { hex: '#FF00FF', label: 'Magenta' },
  { hex: '#808080', label: 'Grey' },
]

const faqs: FAQ[] = [
  {
    q: 'What is a dead pixel?',
    a: 'A dead pixel is a display pixel that has permanently stopped functioning. It appears as a consistently black or dark dot on your screen, regardless of what is being displayed. Dead pixels occur when the thin-film transistor controlling that pixel fails, cutting off power to it entirely. Unlike stuck pixels, dead pixels cannot receive any colour signal.',
  },
  {
    q: 'What is the difference between a dead pixel and a stuck pixel?',
    a: 'A dead pixel is completely non-functional and stays black on every background colour. A stuck pixel is still receiving power but is locked to a fixed colour, most commonly red, green, or blue. Stuck pixels may respond to rapid colour flashing via the Stuck Pixel Fixer tool. Dead pixels are a physical hardware failure and cannot be fixed through software.',
  },
  {
    q: 'How do I use this dead pixel test?',
    a: 'Click the coloured panel above to cycle through solid background colours one at a time. For the most accurate results, click the Full Screen button and view your display in a dimly lit room. Look for any small dot that does not match the background colour. Use the arrow keys or spacebar to advance between colours, and press Escape to exit fullscreen when done.',
  },
  {
    q: 'What colours does the test cycle through?',
    a: 'The test cycles through white, black, red, green, blue, cyan, magenta, and grey. Each colour is designed to reveal a different type of pixel defect. White and grey show permanently dark pixels. Black reveals hot or bright pixels. The primary colours and their combinations expose subpixel failures where one of the three red, green, or blue subpixels within a pixel has stopped working.',
  },
  {
    q: 'Can a dead pixel be fixed?',
    a: 'Dead pixels cannot be reliably fixed. They are caused by a physical failure in the pixel transistor, which is a hardware problem with no software solution. Some users have reported temporary improvements using pressure or heat, but both methods carry a significant risk of causing further damage to surrounding pixels. If your display is under warranty, a dead pixel may qualify for a replacement.',
  },
  {
    q: 'How many dead pixels are acceptable on a new monitor?',
    a: 'This depends on your manufacturer and the display class they specify. ISO 13406-2 defines defect classes, and many budget monitors are shipped under Class II, which permits a small number of defects. Premium monitors and nearly all modern laptops now advertise a zero dead pixel guarantee. Check your warranty documentation to understand your coverage and the time window for making a claim.',
  },
  {
    q: 'Does this dead pixel test work on laptop screens and OLED displays?',
    a: 'Yes. This tool works on any display connected to a web browser, including laptop screens, desktop monitors, tablets, televisions, and OLED panels. OLED displays are particularly worth testing because they can develop hot pixels, which appear as bright dots against a black background. The black screen phase of this test is the most useful for checking OLED displays.',
  },
  {
    q: 'Is this test safe for my monitor?',
    a: 'Yes, this test is completely safe for all display types. Displaying static solid colours causes no harm to LCD, IPS, VA, OLED, or AMOLED panels. The test does not stress the panel in any way beyond showing standard background colours. You can run it as many times as you like without any risk to your display.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">How does the dead pixel test work?</h2>
    <p>
      This tool cycles your display through eight solid background colours one at a time. Each colour
      makes a different type of pixel fault visible. A dead pixel stays black regardless of the
      background, so it becomes obvious the moment the screen switches to a bright colour like white
      or red. A stuck subpixel, which is locked to a single colour, stands out against the backgrounds
      that contrast with it. Cycling through white, black, the three primary colours, cyan, magenta,
      and grey gives you the best coverage for every type of pixel defect.
    </p>

    <h2 className="text-lg font-bold text-fg">When should you run a dead pixel test?</h2>
    <p>
      The most important time to run this test is immediately after receiving a new monitor or laptop.
      Most manufacturers and retailers allow returns or replacements for dead pixel faults within a
      specific window, often 7 to 30 days from purchase. If you wait too long, you lose your right to
      a replacement under the dead pixel policy. Running this test takes under two minutes and should
      be part of any new display unboxing.
    </p>
    <p>
      It is also worth running this test any time you notice a persistent dot on your screen that does
      not disappear. A dot that changes with the content is likely an artefact from the source material.
      A dot that stays in the same position through different colours and different content is a pixel
      fault on your display hardware.
    </p>

    <h2 className="text-lg font-bold text-fg">What do each of the test colours reveal?</h2>
    <p>
      White and grey panels reveal pixels that are permanently dark or black. The black panel exposes
      hot pixels, which glow with a fixed colour against an otherwise dark background. Red, green, and
      blue panels each reveal subpixel failures in that specific colour channel. Cyan (blue and green
      combined) and magenta (red and blue combined) catch faults that single primary colour panels
      sometimes miss, particularly mixed subpixel defects.
    </p>

    <h2 className="text-lg font-bold text-fg">Tips for the most accurate test</h2>
    <p>
      Use the fullscreen button to expand the test to your entire display. Reduce room lighting or
      test in a dim environment so faint pixel faults are easier to spot. View the screen from directly
      in front at your normal sitting distance. Move slowly through each colour and give your eyes a
      moment to scan the full panel before advancing. For large monitors, systematically scan each
      quadrant rather than trying to check the whole screen at once.
    </p>
  </>
)

export default async function DeadPixelTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('dead-pixel-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <FullscreenPanel colors={COLORS} />
    </ToolPageLayout>
  )
}
