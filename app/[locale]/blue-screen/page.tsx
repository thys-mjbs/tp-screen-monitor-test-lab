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

const FAQS: Record<string, FAQ[]> = {
  en: [
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
      a: 'A blue tint during normal use can indicate an incorrect colour temperature setting, a faulty colour profile, or a hardware issue with the display cable or backlight. A blue tint that only appears on certain content or applications may be a software colour management issue. If the blue tint is present across all content, check your display cable connections and reset your monitor colour settings to factory defaults.',
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
  ],
  pt: [
    {
      q: 'E o mesmo que o ecra azul da morte do Windows?',
      a: 'Nao. Esta ferramenta exibe um painel azul solido em tela cheia para teste de hardware de monitor. O ecra azul da morte do Windows (BSOD) e um ecra de erro exibido pelo sistema operativo quando ocorre uma falha critica do sistema. Se esta a procurar ajuda com um ecra de erro azul no computador, esta ferramenta nao tem relacao. Esta e puramente uma ferramenta de inspecao de ecra que mostra um fundo azul uniforme para teste de pixels e subpixeis.',
    },
    {
      q: 'O que revela um teste de tela azul num monitor?',
      a: 'Um painel azul solido isola o canal do subpixel azul, tornando imediatamente visiveis as falhas nos subpixeis vermelho e verde. Um pixel com um subpixel vermelho preso aparecera como magenta contra um fundo azul. Um pixel com um subpixel verde preso aparecera como ciano. Um pixel morto com todos os subpixeis desligados aparece como um ponto escuro. Estas falhas sao muitas vezes invisiveis em fundos brancos, mas destacam-se claramente num fundo de cor pura.',
    },
    {
      q: 'Por que o meu ecra tem uma tonalidade azul?',
      a: 'Uma tonalidade azul durante o uso normal pode indicar uma definicao de temperatura de cor incorreta, um perfil de cor com falha ou um problema de hardware com o cabo de ecra ou retroiluminacao. Uma tonalidade azul que so aparece em determinado conteudo ou aplicacoes pode ser um problema de gestao de cor de software. Se a tonalidade azul estiver presente em todo o conteudo, verifique as ligacoes do cabo de ecra e reponga as definicoes de cor do monitor para as predefinicoes de fabrica.',
    },
    {
      q: 'O teste de tela azul funciona de forma diferente em ecras OLED?',
      a: 'Os subpixeis azuis nos paineis OLED sao conhecidos por se degradarem mais rapidamente do que os subpixeis vermelhos e verdes ao longo do tempo, porque os compostos organicos azuis tem uma vida util mais curta. Uma tela azul solida pode revelar envelhecimento desigual no canal azul dos paineis OLED, aparecendo como variacoes subtis de uniformidade. Para uma verificacao dedicada de queima e retencao em ecras OLED, use a ferramenta Teste de Retencao de Imagem.',
    },
    {
      q: 'Devo testar o monitor com as tres telas de cores primarias?',
      a: 'Sim. Testar com as telas vermelha, verde e azul separadamente da a imagem mais completa da saude dos subpixeis. Uma falha invisivel numa cor pode ser claramente visivel noutra, dependendo de quais os subpixeis especificos afetados. Executar os tres testes demora apenas alguns minutos e garante que nao perdeu uma falha que so apareceria num canal de cor especifico.',
    },
    {
      q: 'Um teste de tela azul pode ajudar a verificar a precisao de cor?',
      a: 'Informalmente, sim. Num ecra bem calibrado, o azul puro deve aparecer como um azul limpo e saturado sem qualquer tonalidade roxa ou teal notavel. Se o azul parecer significativamente diferente do esperado em comparacao com outros ecras, o perfil de cor do monitor pode precisar de ajuste. Para verificacao precisa de precisao de cor, use um colorimetro de hardware com software de calibracao.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the blue screen test checks</h2>
      <p>
        A fullscreen blue panel isolates the blue colour channel across every pixel on your display. By asking
        every blue subpixel to turn fully on while red and green remain off, you create the ideal conditions
        for spotting subpixel faults that would otherwise be invisible. Red and green subpixels stuck in an on
        state appear as magenta or cyan dots respectively. Dead subpixels appear as dark spots. The blue screen
        is particularly valuable when combined with the Red Screen and Green Screen tests.
      </p>

      <h2 className="text-lg font-bold text-fg">Blue subpixels and OLED longevity</h2>
      <p>
        On OLED panels, blue subpixels are the most prone to differential ageing. The organic compounds
        responsible for blue light emission degrade at a faster rate than red and green compounds. Over time,
        the blue channel can lose relative brightness compared to the other channels. A uniform blue screen
        viewed on an OLED panel that has seen heavy use may reveal subtle variations in intensity that indicate
        early differential ageing. These are distinct from stuck or dead pixels and represent cumulative wear.
      </p>

      <h2 className="text-lg font-bold text-fg">Diagnosing blue tinting on your display</h2>
      <p>
        If your display shows an unwanted blue cast on white or neutral content, use the blue screen to
        distinguish between hardware and calibration issues. If the blue screen appears uniform and correctly
        saturated, the tint you see in normal use is likely a colour temperature or white balance setting.
        If the blue screen itself shows uneven colour or unexpected patches, a hardware fault or cable issue
        may be responsible. Check connections and reset your monitor to factory defaults as a first step.
      </p>

      <h2 className="text-lg font-bold text-fg">Combining colour screens for complete coverage</h2>
      <p>
        No single colour screen catches every type of pixel fault. Run the blue screen as part of a complete
        sequence that includes the red, green, and grey screens. Each colour targets different subpixel states
        and reveals different fault combinations. Together they give you complete coverage across all three
        colour channels, ensuring that no stuck, dead, or hot subpixel goes undetected.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que verifica o teste de tela azul</h2>
      <p>
        Um painel azul em tela cheia isola o canal de cor azul em cada pixel do ecra. Ao pedir a cada
        subpixel azul que se ligue totalmente enquanto o vermelho e o verde permanecem desligados, cria-se
        as condicoes ideais para detetar falhas de subpixeis que de outra forma seriam invisiveis. Os
        subpixeis vermelho e verde presos no estado ligado aparecem como pontos magenta ou ciano,
        respetivamente. Os subpixeis mortos aparecem como pontos escuros.
      </p>

      <h2 className="text-lg font-bold text-fg">Subpixeis azuis e longevidade OLED</h2>
      <p>
        Nos paineis OLED, os subpixeis azuis sao os mais propensos ao envelhecimento diferencial. Os compostos
        organicos responsaveis pela emissao de luz azul degradam-se mais rapidamente do que os compostos
        vermelhos e verdes. Com o tempo, o canal azul pode perder brilho relativo em comparacao com os outros
        canais. Uma tela azul uniforme num painel OLED com uso intenso pode revelar variacoes subtis de
        intensidade que indicam envelhecimento diferencial precoce.
      </p>

      <h2 className="text-lg font-bold text-fg">Diagnosticar tonalidade azul no ecra</h2>
      <p>
        Se o ecra mostrar uma tonalidade azul indesejada em conteudo branco ou neutro, use a tela azul para
        distinguir entre problemas de hardware e calibracao. Se a tela azul aparecer uniforme e corretamente
        saturada, a tonalidade que ve no uso normal e provavelmente uma definicao de temperatura de cor ou
        balanco de brancos. Se a propria tela azul mostrar cor irregular ou manchas inesperadas, pode ser
        responsavel uma falha de hardware ou problema de cabo.
      </p>

      <h2 className="text-lg font-bold text-fg">Combinar telas de cor para cobertura completa</h2>
      <p>
        Nenhuma tela de cor unica deteta todos os tipos de falhas de pixels. Execute a tela azul como parte
        de uma sequencia completa que inclui as telas vermelha, verde e cinzenta. Cada cor visa diferentes
        estados de subpixeis e revela diferentes combinacoes de falhas. Em conjunto, oferecem cobertura
        completa nos tres canais de cor, garantindo que nenhum subpixel preso, morto ou quente passe
        despercebido.
      </p>
    </>
  ),
}

export default async function BlueScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('blue-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#0000FF', label: 'Blue' }} />
    </ToolPageLayout>
  )
}
