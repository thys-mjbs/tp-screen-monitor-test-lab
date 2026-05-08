import type { Metadata } from 'next'
import { Eye } from 'lucide-react'
import { getToolBySlug } from '@/lib/tools'
import { toolMetadata } from '@/lib/metadata'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

const tool = getToolBySlug('ips-glow-test')!
export const metadata: Metadata = toolMetadata(tool)

const faqs: FAQ[] = [
  {
    q: 'What is IPS glow?',
    a: 'IPS glow is a soft, hazy brightness that appears in the corners of IPS panel monitors. It is caused by the way IPS panels transmit backlight through the liquid crystal layer at different efficiencies depending on the viewing angle. Unlike backlight bleed, IPS glow is an inherent characteristic of IPS panel technology and is present to some degree on virtually every IPS display. It is most visible in dark conditions and at off-axis viewing angles.',
  },
  {
    q: 'How is IPS glow different from backlight bleed?',
    a: 'The key difference is how each behaves when you change your viewing angle. IPS glow shifts in position and changes in brightness as you move your head — it follows your viewing angle. Backlight bleed is fixed and stays at the same location on the screen regardless of where you sit or tilt your head. If the bright corners disappear or move when you shift position, it is likely IPS glow. If the bright areas remain fixed regardless of your position, it is likely backlight bleed.',
  },
  {
    q: 'How do I perform the IPS glow test?',
    a: 'Enter fullscreen and dim your room lights. First, view the screen from directly in front at your normal sitting distance. Note the position and intensity of any bright areas in the corners. Then lean slowly to one side and watch the corners change. Lean forward and then backward. If the glow shifts or intensifies as you move, it is IPS glow. If nothing changes with your position, it is more consistent with backlight bleed.',
  },
  {
    q: 'Is IPS glow a manufacturing defect?',
    a: 'No. IPS glow is a characteristic of IPS panel technology, not a defect. All IPS panels exhibit some degree of glow. Manufacturers do not consider IPS glow a fault and will generally not replace a monitor because of it. The amount of glow varies between individual panels and monitor models. Some premium IPS panels have reduced glow through better panel engineering and anti-reflective coatings, but it cannot be eliminated entirely.',
  },
  {
    q: 'Can IPS glow be reduced?',
    a: 'You can reduce the visibility of IPS glow by reducing backlight brightness, increasing ambient room lighting slightly (which improves the signal-to-noise ratio for dark areas), and ensuring you are sitting directly in front of the monitor at the correct distance. Anti-glare screen protectors can sometimes reduce perceived glow. However, none of these fully eliminate IPS glow as it is inherent to the panel design.',
  },
  {
    q: 'Does IPS glow affect image quality during normal use?',
    a: 'For most normal tasks like web browsing, office work, and photography in well-lit conditions, IPS glow is not noticeable. It becomes most apparent when watching films in a dark room, playing games with dark scenes, or doing any work that involves dark interface elements in low ambient light. If this type of use is common for you, a VA panel (which has near-zero glow due to its high native contrast) or an OLED panel may be a better choice.',
  },
  {
    q: 'Why do some IPS monitors have more glow than others?',
    a: 'The amount of IPS glow varies with panel quality, anti-reflective coating, backlight type, and monitor construction. Edge-lit monitors (where LEDs are positioned along the edges) tend to have more glow than full-array local dimming (FALD) monitors. The viewing distance also matters — glow is less visible when you sit closer. Some monitor brands and models are known for lower-than-average IPS glow due to tighter panel selection during manufacturing.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">Understanding IPS glow</h2>
    <p>
      IPS glow is a soft brightness that appears in the corners of IPS panels when displaying dark content,
      particularly visible in low ambient light conditions. It originates from the way IPS panel technology
      works: the liquid crystal molecules in an IPS panel are arranged parallel to the glass substrate,
      which is excellent for wide viewing angles and colour accuracy but causes the backlight to transmit
      more efficiently at off-axis angles than at dead-centre. The result is a characteristic brightening
      in the corners that changes with viewing angle.
    </p>

    <h2 className="text-lg font-bold text-fg">The viewing angle test</h2>
    <p>
      The defining characteristic of IPS glow is that it moves with your viewing angle. Enter fullscreen
      with the lights dimmed. Start by looking straight at the screen from your normal position. Slowly lean
      to the left or right. If the bright areas in the corners shift or change in intensity as you move, that
      is IPS glow. Now stay in the same position and instead tilt the monitor itself slightly backward or
      forward. Again watch the corners. IPS glow will change with any change to the viewing angle. Backlight
      bleed will not.
    </p>

    <h2 className="text-lg font-bold text-fg">IPS glow versus backlight bleed at a glance</h2>
    <p>
      The practical distinction matters for warranty purposes. Backlight bleed is a potential manufacturing
      fault that varies between units and can be severe enough to warrant a replacement. IPS glow is an
      inherent panel technology characteristic that affects all IPS displays. If you contact a manufacturer
      about corner brightness and they ask you to perform a viewing angle test, this is what they are checking
      for. Being able to describe whether the brightness is angle-dependent helps you communicate clearly
      about which issue you are experiencing.
    </p>

    <h2 className="text-lg font-bold text-fg">Panel alternatives if glow is a concern</h2>
    <p>
      If IPS glow is a consistent problem for your workflow, the main alternatives are VA panels and OLED
      panels. VA panels have significantly higher native contrast ratios (typically 3000:1 to 6000:1 compared
      to 1000:1 for IPS) and very little corner glow. They tend to show some motion blur in dark scenes due
      to slower pixel response times. OLED panels have effectively infinite contrast because each pixel
      produces its own light, with no backlight at all. OLED is the most glow-free option but comes with
      burn-in risk for static content and is significantly more expensive.
    </p>
  </>
)

export default function IPSGlowTestPage() {
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <>
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
          <Eye size={16} className="mt-0.5 shrink-0 text-slate-500" />
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">Viewing angle test.</span> After entering fullscreen, slowly lean left and right to watch whether the corner brightness shifts with your position. IPS glow moves with you; backlight bleed stays fixed.
          </p>
        </div>
        <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
      </>
    </ToolPageLayout>
  )
}
