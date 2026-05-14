import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { GradientBandingTest } from '@/components/tools/GradientBandingTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('gradient-banding-test', locale), locale)
}

const faqs: FAQ[] = [
  {
    q: 'What is gradient banding on a monitor?',
    a: 'Gradient banding is a display fault where a smooth tonal transition appears as a series of visible steps or stripes rather than a continuous blend. Instead of a seamless gradient from black to white, you see distinct bands of colour or brightness. Banding is caused by limited bit-depth, insufficient dithering, or video signal compression that reduces the number of distinct tones the display can render.',
  },
  {
    q: 'How do I use the gradient banding test?',
    a: 'Select a gradient from the strips shown, then click View Fullscreen. Look at the gradient carefully from your normal viewing distance. A display without banding issues will show a completely smooth, continuous blend from one colour to the other. If you can see distinct horizontal or vertical stripes in the gradient, your display is exhibiting banding. The black to white gradient is the most revealing for general use.',
  },
  {
    q: 'What causes gradient banding?',
    a: 'The most common causes are: 8-bit panels with limited colour depth (16.7 million colours) that cannot render subtle tonal steps; video cables or adaptors that compress the signal and reduce bit depth; incorrect display settings such as a limited colour range (16-235 instead of 0-255); and in some cases the GPU colour output settings in your operating system. Some editing applications also apply dithering during rendering that can introduce banding in exported files.',
  },
  {
    q: 'My monitor is a 10-bit panel. Should it show banding?',
    a: 'A genuine 10-bit panel (1.07 billion colours) should show significantly smoother gradients than an 8-bit panel. However, 10-bit output requires the full chain to support it: a 10-bit capable GPU, a 10-bit capable cable and connector (DisplayPort is recommended), and a 10-bit colour output setting in your operating system. If any part of the chain is limited to 8-bit, you will still see 8-bit quality gradients even on a 10-bit panel.',
  },
  {
    q: 'What is the difference between banding and dirty screen effect?',
    a: 'Banding appears specifically in gradients and tonal transitions, showing as discrete stripes that follow the direction of the gradient. Dirty screen effect (DSE) appears on uniform solid colours as patchy or cloudy variations that are unrelated to any colour transition. A grey screen test reveals DSE, while the gradient banding test reveals bit-depth and compression issues. Both can be present on the same display independently.',
  },
  {
    q: 'Can banding be fixed by adjusting monitor settings?',
    a: 'Sometimes. First check that your monitor and GPU are set to full colour range (0-255 or full RGB) rather than limited range (16-235). On Windows, check the NVIDIA Control Panel or AMD Radeon Settings for colour output settings. On macOS, check display colour profile settings. If banding persists after correcting colour range settings, the limitation may be the panel bit depth itself, which cannot be changed through software.',
  },
  {
    q: 'Which gradient should I test first?',
    a: 'The black to white gradient is the most commonly used starting point because neutral tones reveal banding most clearly. After checking the greyscale gradient, test the individual colour gradients (red, green, blue) to see whether banding is worse in a particular channel. Some panels show more banding in blue than in other channels due to the way their colour lookup tables are structured.',
  },
]

const bodyContent = (
  <>
    <h2 className="text-lg font-bold text-fg">What gradient banding reveals about your display</h2>
    <p>
      A smooth gradient is one of the most demanding tests for a display because it requires the panel to
      accurately reproduce a continuous range of tones from the darkest point to the brightest. When a
      monitor cannot render enough distinct tonal steps, the smooth transition collapses into visible bands
      or stripes. This is called banding, and it is caused by insufficient bit depth or signal chain
      limitations that reduce the number of distinct tones the display can output.
    </p>

    <h2 className="text-lg font-bold text-fg">Bit depth and why it matters</h2>
    <p>
      Standard consumer displays use 8 bits per colour channel, which allows 256 distinct steps from black
      to full brightness in each of the red, green, and blue channels. In most content this is sufficient.
      In smooth gradients and photographic shadow and highlight areas, however, 8-bit limitations become
      visible as banding. Higher quality panels use 10 bits per channel (1,024 steps per channel), which
      produces smoother gradients. Some budget panels use 6-bit panels with dithering to simulate 8-bit
      output, which can introduce additional banding compared to true 8-bit panels.
    </p>

    <h2 className="text-lg font-bold text-fg">How signal chain affects banding</h2>
    <p>
      Banding is not always caused by the panel itself. The entire signal path from your GPU to your
      monitor can introduce colour depth limitations. HDMI connections at certain resolutions or refresh
      rates may operate in YCbCr colour format with chroma subsampling rather than full RGB, which
      compresses colour information and introduces visible banding in gradients. DisplayPort connections
      carry full RGB at full bit depth more reliably. If you see significant banding on an otherwise
      capable display, checking the cable type, colour format settings, and GPU output configuration is
      worth doing before concluding the panel is at fault.
    </p>

    <h2 className="text-lg font-bold text-fg">What a good result looks like</h2>
    <p>
      On a well-configured 8-bit display the gradient should look smooth with no clearly visible stripes,
      though very slight irregularities in shadow tones are common and considered acceptable. On a 10-bit
      display the gradient should appear perfectly smooth with no perceptible stepping at any point. If
      you see clear distinct bands, particularly in the mid-tones of the black to white gradient, there
      is a signal chain or bit depth issue worth investigating.
    </p>
  </>
)

export default async function GradientBandingTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('gradient-banding-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={faqs} bodyContent={bodyContent}>
      <GradientBandingTest />
    </ToolPageLayout>
  )
}
