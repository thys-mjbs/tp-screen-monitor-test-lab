import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ResolutionChecker } from '@/components/tools/ResolutionChecker'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('resolution-checker', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is the difference between screen resolution and physical pixels?',
    a: 'Screen resolution in this tool refers to CSS pixels, which is the logical coordinate space your operating system and browser use. Physical pixels are the actual hardware pixels on the panel. On a standard display they are the same. On HiDPI or Retina displays, the device pixel ratio (DPR) maps multiple physical pixels to each CSS pixel. A MacBook with a 2× DPR reports a screen resolution of 1440 × 900 CSS pixels but drives a 2880 × 1800 physical pixel panel.',
  },
  {
    q: 'What is device pixel ratio and why does it matter?',
    a: 'Device pixel ratio (DPR) is the ratio of physical pixels to CSS pixels. A DPR of 1 means one physical pixel per CSS pixel (standard density). A DPR of 2 means four physical pixels per CSS pixel (2× scaling, common on Retina and HiDPI displays). DPR affects how images and graphics look on your screen. High-DPR displays show sharper text and images when content is served at the appropriate resolution for the DPR. Lower-DPR displays may show slightly softer images on HiDPI content.',
  },
  {
    q: 'What is the aspect ratio shown in the checker?',
    a: 'Aspect ratio is the proportional relationship between width and height of your screen, expressed as two numbers separated by a colon. A 16:9 ratio means the screen is 16 units wide for every 9 units tall, which is the standard for most modern monitors and televisions. 16:10 is common on business laptops. 21:9 is the ultrawide standard. The ratio is calculated automatically from your reported screen dimensions.',
  },
  {
    q: 'Why does my browser viewport differ from my screen resolution?',
    a: 'Your screen resolution is the full physical display area. Your browser viewport is the usable window area inside the browser: the screen resolution minus any taskbar, browser chrome (address bar, tabs, bookmarks), and OS interface elements. The viewport changes when you resize your browser window, maximise or restore it, or toggle the browser toolbar. Developers use viewport dimensions to set responsive breakpoints in web design.',
  },
  {
    q: 'What does colour depth mean in the checker?',
    a: 'Colour depth is the number of bits used to represent colour in each pixel. 24-bit colour (8 bits per channel) is the standard for most displays and allows 16.7 million distinct colours. 30-bit colour (10 bits per channel) is used in HDR and professional displays and allows over a billion distinct colours, enabling smoother gradients and more accurate colour reproduction. The value shown is what your browser reports, which reflects the current display configuration.',
  },
  {
    q: 'How do I find my monitor\'s native resolution?',
    a: 'The native resolution is the physical pixel count of the panel as manufactured. You can find it in your monitor\'s specification sheet or product page. The resolution checker shows your current operating resolution, which should match the native resolution for the sharpest image. If the physical pixels figure shown differs from your monitor\'s stated resolution, you may be running at a scaled resolution. For the best image quality, always run at native resolution.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What the resolution checker reports</h2>
    <p>
      The checker reads six properties from your browser and display environment: the screen resolution
      in CSS pixels, the physical pixel count derived from the device pixel ratio, the current browser
      viewport dimensions, the device pixel ratio itself, the calculated aspect ratio, and the display
      colour depth. These values update in real time if you resize your browser window. They reflect
      your current display configuration, not theoretical hardware maximums.
    </p>

    <h2 className="text-lg font-bold text-fg">CSS pixels versus physical pixels</h2>
    <p>
      Modern high-density displays use a coordinate scaling system that separates the logical resolution
      from the physical resolution. When you see a MacBook listed as having a 2560 × 1600 display, the
      operating system may present this to applications as 1280 × 800 CSS pixels at a DPR of 2. This
      scaling allows interface elements to appear at a comfortable physical size while the display renders
      them at full physical pixel density, resulting in sharp, crisp text and graphics. The distinction
      matters for web developers, photographers, and anyone working with pixel-accurate content.
    </p>

    <h2 className="text-lg font-bold text-fg">Common resolutions and their names</h2>
    <p>
      Common resolutions include 1920 × 1080 (Full HD or 1080p), 2560 × 1440 (Quad HD or 1440p),
      3840 × 2160 (4K UHD), and 5120 × 2880 (5K). Ultrawide resolutions such as 3440 × 1440 and
      2560 × 1080 use 21:9 aspect ratios. Most laptop displays use 16:10 ratios such as 2560 × 1600
      or 1920 × 1200. If your reported screen resolution does not match one of these common values,
      you may be running at a non-native or scaled resolution, which affects image sharpness.
    </p>

    <h2 className="text-lg font-bold text-fg">Resolution and display sharpness</h2>
    <p>
      Perceived sharpness depends on both the resolution and the physical size of the display. A
      useful measure is pixels per inch (PPI), which combines both factors. A 4K display at 55 inches
      has around 80 PPI and may appear softer than a 1080p display at 15 inches, which has around 147
      PPI. For desktop monitors viewed at typical arm&apos;s length, approximately 100 to 110 PPI is
      generally considered the threshold for clear, sharp text. Above 150 PPI the additional sharpness
      is less perceptible at normal viewing distances.
    </p>
  </>
)

export default async function ResolutionCheckerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('resolution-checker', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <ResolutionChecker />
    </ToolPageLayout>
  )
}
