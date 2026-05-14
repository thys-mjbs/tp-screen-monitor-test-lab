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
  return toolMetadata(getToolByLocale('red-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does a red screen test reveal?',
      a: 'A red screen isolates the red subpixel channel, making faults in the green and blue subpixels immediately visible. Any pixel that cannot display pure red correctly will appear as a dark spot, a differently coloured dot, or a discoloured patch against the uniform red background. It is particularly effective for spotting dead subpixels that only affect one colour channel.',
    },
    {
      q: 'How do I use the red screen to check subpixels?',
      a: 'Click Full Screen and scan the entire panel from a normal viewing distance. Dead or faulty green and blue subpixels appear as visible dots that differ from the surrounding red. Because each pixel is made of three subpixels (red, green, blue), a subpixel fault that is invisible on white or grey screens often becomes visible when you isolate a single colour channel.',
    },
    {
      q: 'Why does my monitor have a red tint on a white or grey background?',
      a: 'A red tint on neutral colours usually indicates a colour temperature calibration issue or an incorrect white balance setting. It can also be caused by a failing backlight, damaged display cable, or a misconfigured colour profile in your operating system display settings. If the tint disappears when you use a colour-managed application, the issue is likely a software setting rather than a hardware fault.',
    },
    {
      q: 'Is looking at a red screen for extended periods safe for my eyes?',
      a: 'A solid red screen is not harmful to your eyes in the same way that staring at bright direct light might be. However, strong saturated red at high brightness can be uncomfortable for some people over extended periods. Reduce your monitor brightness before running any single-colour screen test if you find it uncomfortable. The test itself takes only a few minutes.',
    },
    {
      q: 'Can the red screen reveal image retention or burn-in on an OLED display?',
      a: 'Yes. On OLED panels, a solid red screen can reveal areas of differential ageing where the red organic compounds have degraded unevenly. Burnt-in content from previous use may appear as a faint shadow with a slightly different red intensity. For a dedicated burn-in test, use the Image Retention Test tool, which is designed specifically for this purpose.',
    },
    {
      q: 'Should I test with red, green, and blue screens separately?',
      a: 'Testing with all three primary colour screens gives the most complete subpixel check. A pixel fault that is invisible on one colour may be clearly visible on another, depending on which subpixels are affected. Running all three colour screens takes only a few minutes and gives you confidence that no subpixel faults have been missed by a single-colour check.',
    },
  ],
  pt: [
    {
      q: 'O que revela um teste de tela vermelha?',
      a: 'Uma tela vermelha isola o canal do subpixel vermelho, tornando imediatamente visiveis as falhas nos subpixeis verde e azul. Qualquer pixel que nao consiga exibir vermelho puro corretamente aparecera como um ponto escuro, um ponto de cor diferente ou uma mancha descolorida contra o fundo vermelho uniforme. E particularmente eficaz para detetar subpixeis mortos que afetam apenas um canal de cor.',
    },
    {
      q: 'Como uso a tela vermelha para verificar os subpixeis?',
      a: 'Clique em Tela cheia e examine todo o painel a distancia normal de visualizacao. Os subpixeis verde e azul mortos ou com falha aparecem como pontos visiveis que diferem do vermelho circundante. Como cada pixel e composto de tres subpixeis (vermelho, verde, azul), uma falha de subpixel invisivel em ecras brancos ou cinzentos torna-se muitas vezes visivel quando isola um unico canal de cor.',
    },
    {
      q: 'Por que o meu monitor tem uma tonalidade vermelha num fundo branco ou cinzento?',
      a: 'Uma tonalidade vermelha nas cores neutras geralmente indica um problema de calibracao da temperatura de cor ou uma definicao incorreta de balanco de brancos. Tambem pode ser causado por retroiluminacao com falha, cabo de ecra danificado ou perfil de cor mal configurado nas definicoes de ecra do sistema operativo. Se a tonalidade desaparecer quando usa uma aplicacao com gestao de cor, o problema e provavelmente uma definicao de software.',
    },
    {
      q: 'Olhar para uma tela vermelha por periodos prolongados e seguro para os olhos?',
      a: 'Uma tela vermelha solida nao e prejudicial para os olhos. No entanto, o vermelho saturado intenso a alto brilho pode ser desconfortavel para algumas pessoas em periodos prolongados. Reduza o brilho do monitor antes de executar qualquer teste de cor unica se o achar desconfortavel. O proprio teste demora apenas alguns minutos.',
    },
    {
      q: 'A tela vermelha pode revelar retencao de imagem ou queima num ecra OLED?',
      a: 'Sim. Nos paineis OLED, uma tela vermelha solida pode revelar areas de envelhecimento diferencial onde os compostos organicos vermelhos se degradaram de forma desigual. O conteudo gravado de uso anterior pode aparecer como uma sombra tenue com uma intensidade vermelha ligeiramente diferente. Para um teste dedicado de queima, use a ferramenta Teste de Retencao de Imagem.',
    },
    {
      q: 'Devo testar com as telas vermelha, verde e azul separadamente?',
      a: 'Testar com as tres telas de cores primarias da a verificacao de subpixeis mais completa. Uma falha de pixel invisivel numa cor pode ser claramente visivel noutra, dependendo dos subpixeis afetados. Executar as tres telas de cor demora apenas alguns minutos e garante que nenhuma falha de subpixel foi perdida por uma verificacao de cor unica.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the red screen test reveals</h2>
      <p>
        A fullscreen red panel isolates the red colour channel across your entire display, making it one of the
        most targeted tests you can run for subpixel faults. When every pixel on your screen is asked to show
        pure red, any pixel that cannot do so correctly stands out immediately. Dead or weakened green and blue
        subpixels become visible as dots that differ in colour or brightness from the surrounding uniform red.
        These faults are often completely invisible during normal use or on white and grey backgrounds.
      </p>

      <h2 className="text-lg font-bold text-fg">How subpixel testing with primary colours works</h2>
      <p>
        Every pixel on your monitor is made up of three subpixels: red, green, and blue. When all three are
        active at full intensity, you see white. When none are active, you see black. By displaying a solid red
        panel, you are asking the red subpixel in every pixel to turn fully on while the green and blue
        subpixels remain off. Any green or blue subpixel that has failed in an on state will cause its pixel
        to show as yellow, magenta, or white rather than red. Repeat the test with the Green Screen and Blue Screen tools to cover all three channels.
      </p>

      <h2 className="text-lg font-bold text-fg">Red screen and colour accuracy checks</h2>
      <p>
        The red screen is also a useful informal indicator of colour accuracy. On a well-calibrated monitor, pure
        red should appear as a clean, saturated red with no visible orange or pink cast. If the red appears
        noticeably orange or brick-coloured compared to other displays, your monitor may benefit from a colour
        profile adjustment or hardware calibration.
      </p>

      <h2 className="text-lg font-bold text-fg">How to get accurate results</h2>
      <p>
        Run the red screen test with your monitor at its normal brightness setting and in a room with moderate
        ambient lighting. View the panel straight on from your normal sitting position. Scan each quadrant of the
        screen methodically rather than looking at the display as a whole, as small subpixel faults are easy to
        miss with a quick glance. If you find a suspect dot, confirm it by switching to the Green Screen and Blue
        Screen tools to determine which subpixels are affected.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que revela o teste de tela vermelha</h2>
      <p>
        Um painel vermelho em tela cheia isola o canal de cor vermelho em todo o ecra, tornando-o um dos
        testes mais direcionados para falhas de subpixeis. Quando cada pixel e solicitado a mostrar vermelho
        puro, qualquer pixel que nao consiga faze-lo destaca-se imediatamente. Os subpixeis verde e azul
        mortos ou enfraquecidos tornam-se visiveis como pontos que diferem em cor ou brilho do vermelho
        uniforme circundante. Estas falhas sao muitas vezes invisiveis durante o uso normal.
      </p>

      <h2 className="text-lg font-bold text-fg">Como funciona o teste de subpixeis com cores primarias</h2>
      <p>
        Cada pixel do monitor e composto de tres subpixeis: vermelho, verde e azul. Ao exibir um painel
        vermelho solido, o subpixel vermelho de cada pixel e ativado totalmente enquanto o verde e o azul
        permanecem desligados. Qualquer subpixel verde ou azul com falha no estado ligado fara com que o
        pixel aparea como amarelo, magenta ou branco em vez de vermelho. Repita o teste com as ferramentas
        Tela Verde e Tela Azul para cobrir os tres canais.
      </p>

      <h2 className="text-lg font-bold text-fg">Tela vermelha e verificacoes de precisao de cor</h2>
      <p>
        A tela vermelha e tambem um indicador informal util de precisao de cor. Num monitor bem calibrado,
        o vermelho puro deve aparecer como um vermelho limpo e saturado sem qualquer tonalidade laranja ou
        rosa visivel. Se o vermelho parecer visivelmente diferente em comparacao com outros ecras, o monitor
        pode beneficiar de um ajuste de perfil de cor ou calibracao de hardware.
      </p>

      <h2 className="text-lg font-bold text-fg">Como obter resultados precisos</h2>
      <p>
        Execute o teste com o monitor na definicao normal de brilho e numa sala com iluminacao moderada.
        Veja o painel diretamente da frente. Examine cada quadrante metodicamente em vez de olhar para o
        ecra todo de uma vez. Se encontrar um ponto suspeito, confirme-o mudando para as ferramentas
        Tela Verde e Tela Azul para determinar quais os subpixeis afetados.
      </p>
    </>
  ),
}

export default async function RedScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('red-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#FF0000', label: 'Red' }} />
    </ToolPageLayout>
  )
}
