import type { Metadata } from 'next'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

const tool = getToolBySlug('black-screen')!
export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What does a black screen test reveal?',
    a: 'A black screen test reveals backlight bleed, IPS glow, hot pixels, and any light leakage around the edges or corners of your panel. These defects are invisible during normal use when the screen shows bright content, but become obvious against a completely dark background. Testing in a dimly lit or dark room gives the most accurate results.',
  },
  {
    q: 'How do I test for backlight bleed using the black screen?',
    a: 'Click Full Screen and dim your room lights as much as possible. Look at the edges and corners of your panel. If you see patches of light bleeding through from behind the panel, particularly along the edges, that is backlight bleed. It is caused by the LED backlight leaking around the edges of the LCD layer. Some degree of bleed is normal on budget monitors.',
  },
  {
    q: 'What is IPS glow and how is it different from backlight bleed?',
    a: 'IPS glow is a soft, hazy brightness that appears in the corners of IPS panels when viewed at an angle or from a distance. It is caused by the way IPS panels transmit light and is present to some degree on nearly every IPS display. Backlight bleed is more localised and brighter, appearing as distinct patches of light along panel edges. Both are more visible on dark content.',
  },
  {
    q: 'What are hot pixels and how does the black screen reveal them?',
    a: 'Hot pixels are pixels that are stuck in an on state and glow with a fixed colour against a dark background. They appear as small bright coloured dots when your screen displays black or dark content. Hot pixels are essentially the opposite of dead pixels: where dead pixels stay dark on bright backgrounds, hot pixels stay bright on dark backgrounds. The black screen is the best way to find them.',
  },
  {
    q: 'Why should I test backlight bleed in a dark room?',
    a: 'Ambient room light competes with the glow from backlight bleed and makes it harder to see. In a bright room, bleed that would be noticeable during dark movie scenes or gaming may appear invisible. Testing in a dark or dimly lit room gives you a realistic impression of how the display will perform in real use conditions such as watching films with the lights off.',
  },
  {
    q: 'Is this the same as the Windows blue screen of death?',
    a: 'No. This tool displays a completely black panel for monitor testing purposes. The Windows blue screen of death (BSOD) is an error screen displayed by Windows when a critical system error occurs. If you are searching for information about a blue error screen on your computer, this tool is unrelated. This is purely a monitor inspection tool that shows a solid black background.',
  },
  {
    q: 'How much backlight bleed is acceptable on a new monitor?',
    a: 'A small amount of backlight bleed near the corners is considered normal and acceptable on most LCD panels, including many premium monitors. Significant bleed that covers a large portion of the screen edges or is distracting during normal dark content viewing is not acceptable and may qualify for a return or replacement under your manufacturer warranty. Check your warranty documentation for the specific policy.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the black screen test checks</h2>
    <p>
      A fullscreen black panel is the most effective way to assess your display in low-light conditions.
      It reveals issues that are completely invisible during normal use: backlight bleed along panel edges,
      IPS glow in the corners, and hot pixels that remain lit against a dark background. These issues
      matter most if you watch films, play games, or do any work that involves dark scenes or interfaces.
    </p>

    <h2 className="text-lg font-bold text-fg">How to identify backlight bleed</h2>
    <p>
      Enter fullscreen and reduce your room lighting as much as possible. Look along all four edges and
      particularly the corners. Backlight bleed appears as patches of white or grey light seeping in
      from the edges of the panel. A small amount near the very edges is expected on most LCD monitors.
      Bleed that extends noticeably inward or covers a wide area along the edges is considered excessive
      and may affect your viewing experience during dark content.
    </p>

    <h2 className="text-lg font-bold text-fg">Understanding IPS glow versus backlight bleed</h2>
    <p>
      IPS glow is a separate phenomenon from backlight bleed. It appears as a soft, shimmering brightness
      in the corners of the panel, typically most visible when viewed at an off-angle. Unlike backlight
      bleed, IPS glow fades significantly when you view the screen straight on from your normal sitting
      position. It is a characteristic of the IPS panel technology rather than a manufacturing defect.
      If the bright areas only appear when you tilt your head or move to one side, it is likely IPS glow
      rather than bleed.
    </p>

    <h2 className="text-lg font-bold text-fg">Checking for hot pixels on OLED displays</h2>
    <p>
      OLED panels are particularly worth checking with this test. Because OLED pixels produce their own
      light rather than relying on a backlight, individual pixels can develop faults that make them stay
      lit. A hot pixel on an OLED appears as a small, consistently bright dot against an otherwise perfect
      black background. If you spot any persistent bright dot during this test on an OLED panel, record
      its position and run the test again to confirm it is not a display artefact from the content above.
    </p>
  </>
)

export default function BlackScreenPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
    </ToolPageLayout>
  )
}
