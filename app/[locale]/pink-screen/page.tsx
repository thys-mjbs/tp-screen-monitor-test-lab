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
  return toolMetadata(getToolByLocale('pink-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does a pink screen test reveal?',
      a: 'Pink is a mix of red and blue subpixels with green reduced or off. A solid pink panel is useful for spotting green subpixel faults, which appear as bright or unexpected coloured dots against the pink background. It also reveals general colour accuracy issues, as monitors with poor colour calibration may show pink with an obvious red or magenta cast instead of a true balanced pink.',
    },
    {
      q: 'Why is my monitor showing a pink tint?',
      a: 'A pink tint on your display during normal use usually indicates a colour balance problem. It can result from a display cable fault, a failing backlight, an incorrect colour profile, or in some cases a hardware fault in the display panel itself. A pink cast that appeared suddenly is more likely to be a hardware issue. One that has always been present is more likely a calibration or colour profile setting. Check your cable connections and try resetting your monitor to factory colour settings as a first step.',
    },
    {
      q: 'How does pink reveal green subpixel faults?',
      a: 'Pink is produced by combining red and blue subpixels. Because the green subpixel contributes little to the pink colour, any green subpixel that is stuck in the on state will cause its pixel to appear noticeably brighter or shift toward white compared to the surrounding pink pixels. This makes green subpixel faults more apparent on a pink background than they might be on a standard grey or white screen.',
    },
    {
      q: 'Does the pink screen help with OLED testing?',
      a: 'On OLED panels, the pink screen combines the red and blue channels, both of which age at different rates. A pink screen can help reveal uneven ageing between the red and blue organic compounds, which may appear as subtle pink-to-purple or pink-to-red shifts across different areas of the panel. For a dedicated retention and burn-in check, the Image Retention Test tool is more appropriate.',
    },
    {
      q: 'Which monitors handle pink colour most accurately?',
      a: 'Wide colour gamut monitors with factory calibration or hardware calibration generally handle pink most accurately, as they have better control over the blending of red and blue output. Budget monitors may show pink with a noticeable cast, particularly toward magenta or salmon. If colour accuracy for print or design work is important to you, testing with individual colour screens including pink can help identify whether your display needs professional calibration.',
    },
    {
      q: 'Is there a standard pink used in display testing?',
      a: 'There is no single universally agreed pink shade for display testing, unlike the standardised test charts used in professional colour calibration. This tool uses a medium pink that balances red and blue output at representative levels. Professional display calibration uses precise spectrophotometer measurements rather than visual colour tests, so this screen is best treated as a practical visual check rather than a precision measurement tool.',
    },
  ],
  pt: [
    {
      q: 'O que revela um teste de tela cor-de-rosa?',
      a: 'O cor-de-rosa e uma mistura de subpixeis vermelho e azul com o verde reduzido ou desligado. Um painel cor-de-rosa solido e util para detetar falhas do subpixel verde, que aparecem como pontos brilhantes ou com cor inesperada contra o fundo cor-de-rosa. Tambem revela problemas gerais de precisao de cor, pois monitores com calibracao deficiente podem mostrar o cor-de-rosa com uma tonalidade vermelha ou magenta evidente em vez de um cor-de-rosa verdadeiro equilibrado.',
    },
    {
      q: 'Por que o meu monitor tem uma tonalidade cor-de-rosa?',
      a: 'Uma tonalidade cor-de-rosa no ecra durante o uso normal geralmente indica um problema de balanco de cor. Pode resultar de uma falha no cabo do ecra, retroiluminacao com falha, perfil de cor incorreto ou, em alguns casos, uma falha de hardware no proprio painel. Uma tonalidade cor-de-rosa que apareceu de repente e mais provavel que seja um problema de hardware. Uma que sempre esteve presente e mais provavel que seja uma definicao de calibracao ou perfil de cor. Verifique as ligacoes do cabo e tente repor o monitor para as definicoes de cor de fabrica como primeiro passo.',
    },
    {
      q: 'Como o cor-de-rosa revela falhas do subpixel verde?',
      a: 'O cor-de-rosa e produzido pela combinacao dos subpixeis vermelho e azul. Como o subpixel verde contribui pouco para a cor cor-de-rosa, qualquer subpixel verde preso no estado ligado fara com que o seu pixel aparea visivelmente mais brilhante ou mude para branco em comparacao com os pixels cor-de-rosa circundantes. Isto torna as falhas do subpixel verde mais aparentes num fundo cor-de-rosa do que num ecra cinzento ou branco padrao.',
    },
    {
      q: 'O teste de tela cor-de-rosa ajuda nos testes OLED?',
      a: 'Nos paineis OLED, a tela cor-de-rosa combina os canais vermelho e azul, que envelhecem a taxas diferentes. Uma tela cor-de-rosa pode ajudar a revelar envelhecimento desigual entre os compostos organicos vermelho e azul, que pode aparecer como mudancas subtis de cor-de-rosa para roxo ou cor-de-rosa para vermelho em diferentes areas do painel. Para uma verificacao dedicada de retencao e queima, a ferramenta Teste de Retencao de Imagem e mais adequada.',
    },
    {
      q: 'Quais os monitores que tratam a cor cor-de-rosa com mais precisao?',
      a: 'Os monitores com gama de cor alargada com calibracao de fabrica ou calibracao de hardware geralmente tratam o cor-de-rosa com mais precisao, pois tem melhor controlo sobre a mistura da saida vermelho e azul. Os monitores de entrada podem mostrar o cor-de-rosa com uma tonalidade notavel, particularmente para magenta ou salmon. Se a precisao de cor para trabalho de impressao ou design for importante, testar com telas de cor individuais incluindo o cor-de-rosa pode ajudar a identificar se o ecra necessita de calibracao profissional.',
    },
    {
      q: 'Existe um cor-de-rosa padrao utilizado nos testes de ecra?',
      a: 'Nao ha um tom cor-de-rosa universalmente acordado para testes de ecra, ao contrario dos graficos de teste padronizados utilizados na calibracao profissional de cor. Esta ferramenta usa um cor-de-rosa medio que equilibra a saida vermelho e azul a niveis representativos. A calibracao profissional de ecra usa medicoes precisas de espetrofotometro em vez de testes de cor visuais, pelo que esta tela e melhor tratada como uma verificacao visual pratica em vez de uma ferramenta de medicao de precisao.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the pink screen test checks</h2>
      <p>
        Pink is a mixed colour produced by combining the red and blue channels while suppressing green. This
        makes the pink screen particularly useful for revealing green subpixel faults, which become visible as
        unexpectedly bright dots against the uniform pink background. It also provides a useful informal check
        on colour balance, since a monitor that is poorly calibrated may render the pink with an obvious cast
        toward magenta, salmon, or lavender. In normal use, these issues are often too subtle to notice, but
        a uniform background makes them immediately apparent.
      </p>

      <h2 className="text-lg font-bold text-fg">Pink as a complementary colour screen test</h2>
      <p>
        The primary colour screens (red, green, blue) test each channel in isolation. Secondary and mixed
        colour screens like pink and yellow test combinations of channels, catching fault types that individual
        primary screens might miss. A green subpixel fault that is borderline on a pure green background
        can become clearly visible against a pink background where the green contribution is not expected.
        Running all available colour screen tests together builds the most complete picture of subpixel
        health across the full colour space.
      </p>

      <h2 className="text-lg font-bold text-fg">Pink tinting during normal use</h2>
      <p>
        If your monitor shows an unwanted pink tint on white or grey content during everyday use, the most
        likely causes are a colour temperature setting that is too warm combined with elevated red output, a
        faulty display cable carrying a degraded signal, or incorrect colour profile settings. Try resetting
        your monitor to factory defaults and checking that the colour profile in your operating system display
        settings matches your monitor model. If the pink cast persists after these steps, a hardware fault
        in the display connection or panel itself may be the cause.
      </p>

      <h2 className="text-lg font-bold text-fg">How to use this test effectively</h2>
      <p>
        Run the pink screen in fullscreen at your usual brightness level and viewing distance. Scan the entire
        panel systematically, paying attention to any dots that differ in colour or brightness from the
        surrounding pink. Compare what you see against a mental expectation of uniform colour with no visible
        variation. If you spot something suspect, confirm it by switching to the Green Screen and Red Screen
        tests to determine which specific subpixels are involved. Document any findings for warranty purposes
        before contacting your retailer or manufacturer.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que verifica o teste de tela cor-de-rosa</h2>
      <p>
        O cor-de-rosa e uma cor mista produzida pela combinacao dos canais vermelho e azul enquanto suprime o
        verde. Isto torna a tela cor-de-rosa particularmente util para revelar falhas do subpixel verde, que
        se tornam visiveis como pontos inesperadamente brilhantes contra o fundo cor-de-rosa uniforme. Tambem
        fornece uma verificacao informal util do balanco de cor, pois um monitor com calibracao deficiente pode
        renderizar o cor-de-rosa com uma tonalidade evidente para magenta, salmon ou lavanda. No uso normal,
        estes problemas sao muitas vezes demasiado subtis para ser notados, mas um fundo uniforme torna-os
        imediatamente aparentes.
      </p>

      <h2 className="text-lg font-bold text-fg">O cor-de-rosa como teste de tela de cor complementar</h2>
      <p>
        As telas de cores primarias (vermelho, verde, azul) testam cada canal em isolamento. As telas de cores
        secundarias e mistas como o cor-de-rosa e o amarelo testam combinacoes de canais, detetando tipos de
        falhas que as telas primarias individuais podem perder. Uma falha do subpixel verde que e borderline
        num fundo verde puro pode tornar-se claramente visivel contra um fundo cor-de-rosa onde a contribuicao
        verde nao e esperada. Executar todos os testes de tela de cor disponiveis em conjunto cria o quadro
        mais completo da saude dos subpixeis em todo o espaco de cor.
      </p>

      <h2 className="text-lg font-bold text-fg">Tonalidade cor-de-rosa durante o uso normal</h2>
      <p>
        Se o monitor mostrar uma tonalidade cor-de-rosa indesejada no conteudo branco ou cinzento durante o
        uso quotidiano, as causas mais provaveis sao uma definicao de temperatura de cor demasiado quente
        combinada com saida vermelha elevada, um cabo de ecra com falha a transportar um sinal degradado, ou
        definicoes incorretas de perfil de cor. Tente repor o monitor para as predefinicoes de fabrica e
        verifique se o perfil de cor nas definicoes de ecra do sistema operativo corresponde ao modelo do
        monitor. Se a tonalidade cor-de-rosa persistir apos estas etapas, uma falha de hardware na ligacao do
        ecra ou no proprio painel pode ser a causa.
      </p>

      <h2 className="text-lg font-bold text-fg">Como usar este teste eficazmente</h2>
      <p>
        Execute a tela cor-de-rosa em tela cheia com o nivel de brilho habitual e distancia de visualizacao.
        Examine todo o painel sistematicamente, prestando atencao a quaisquer pontos que difiram em cor ou
        brilho do cor-de-rosa circundante. Compare o que ve com a expetativa de cor uniforme sem variacao
        visivel. Se detetar algo suspeito, confirme-o mudando para as telas Verde e Vermelha para determinar
        quais os subpixeis especificos envolvidos. Documente quaisquer descobertas para fins de garantia antes
        de contactar o retalhista ou fabricante.
      </p>
    </>
  ),
}

export default async function PinkScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('pink-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#FF69B4', label: 'Pink' }} />
    </ToolPageLayout>
  )
}
