import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { FullscreenPanel } from '@/components/tools/FullscreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('fullscreen-colour-cycle', locale), locale)
}

const CYCLE_COLORS = [
  { hex: '#FF0000', label: 'Red' },
  { hex: '#00FF00', label: 'Green' },
  { hex: '#0000FF', label: 'Blue' },
  { hex: '#FFFFFF', label: 'White' },
  { hex: '#000000', label: 'Black' },
  { hex: '#FFFF00', label: 'Yellow' },
  { hex: '#00FFFF', label: 'Cyan' },
  { hex: '#FF00FF', label: 'Magenta' },
]

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is the fullscreen colour cycle test?',
      a: 'The Fullscreen Colour Cycle displays a sequence of eight solid colours across your entire screen, allowing you to manually step through each one at your own pace. It covers red, green, blue, white, black, yellow, cyan, and magenta. Each colour tests a different combination of subpixels, giving you comprehensive coverage for dead pixels, stuck subpixels, and colour accuracy in a single tool.',
    },
    {
      q: 'How do I advance between colours?',
      a: 'In fullscreen mode, click anywhere on the screen or press the spacebar or right arrow key to advance to the next colour. Press the left arrow key to go back to the previous colour. The colour name is shown briefly at the bottom of the screen when you move your mouse, then fades to let you focus on inspecting the panel.',
    },
    {
      q: 'What is the difference between this and the Dead Pixel Test?',
      a: 'The Dead Pixel Test and the Fullscreen Colour Cycle use the same eight colours and operate similarly. The key difference is control: the Dead Pixel Test cycles automatically so you can sit back and observe, while the Fullscreen Colour Cycle lets you advance at your own pace and spend more time on any colour where you think you see a fault. Use whichever suits your testing style.',
    },
    {
      q: 'Which colours are included in the cycle?',
      a: 'The cycle includes the three primary colours (red, green, blue), three secondary colours (yellow, cyan, magenta), white, and black. This set of eight colours covers all combinations of the three subpixels being fully on or fully off, which is the most thorough approach for revealing all types of subpixel faults.',
    },
    {
      q: 'Can I use this tool to check for colour accuracy?',
      a: 'You can use it as an informal colour accuracy check. On a well-calibrated display, each colour should appear saturated and clean without obvious casts. Red should look pure red without orange or pink shifts. Green should look vivid without yellow or blue tinting. Blue should look true blue without purple or teal shifts. Significant deviation from expected colours can indicate a calibration issue worth investigating.',
    },
    {
      q: 'How long should I spend on each colour?',
      a: 'Spend at least 15 to 30 seconds on each colour, scanning the entire panel methodically from corner to corner. This gives enough time to spot faults that are easy to miss with a quick glance. Pay particular attention to areas where you have previously noticed issues, and look at both the centre and edges of the panel, as faults are not always located near the centre.',
    },
    {
      q: 'Does this tool work on all monitor types?',
      a: 'Yes. The tool works on LCD, IPS, VA, TN, OLED, AMOLED, and any other display technology. The fullscreen colour cycle is a universal technique because every display technology works by controlling subpixel output, and the same fault types (dead, stuck, and hot pixels) can occur on all panel types. OLED users should also pay attention to uniformity across each colour, as OLED panels can develop ageing-related unevenness over time.',
    },
  ],
  pt: [
    {
      q: 'O que e o teste de ciclo de cor em tela cheia?',
      a: 'O Ciclo de Cor em Tela Cheia exibe uma sequencia de oito cores solidas em todo o ecra, permitindo-lhe avancar manualmente em cada uma ao seu proprio ritmo. Cobre vermelho, verde, azul, branco, preto, amarelo, ciano e magenta. Cada cor testa uma combinacao diferente de subpixeis, oferecendo cobertura abrangente para pixels mortos, subpixeis presos e precisao de cor numa unica ferramenta.',
    },
    {
      q: 'Como avancar entre as cores?',
      a: 'No modo de tela cheia, clique em qualquer lugar do ecra ou prima a barra de espaco ou a seta direita para avancar para a cor seguinte. Prima a seta esquerda para voltar a cor anterior. O nome da cor e mostrado brevemente na parte inferior do ecra quando move o rato e depois desaparece para que se possa concentrar na inspecao do painel.',
    },
    {
      q: 'Qual e a diferenca entre este e o Teste de Pixels Mortos?',
      a: 'O Teste de Pixels Mortos e o Ciclo de Cor em Tela Cheia usam as mesmas oito cores e funcionam de forma semelhante. A diferenca principal e o controlo: o Teste de Pixels Mortos cicla automaticamente para que possa observar sem interferir, enquanto o Ciclo de Cor em Tela Cheia permite-lhe avancar ao seu proprio ritmo e passar mais tempo em qualquer cor onde pensa ter visto uma falha. Use o que melhor se adapta ao seu estilo de teste.',
    },
    {
      q: 'Quais as cores incluidas no ciclo?',
      a: 'O ciclo inclui as tres cores primarias (vermelho, verde, azul), tres cores secundarias (amarelo, ciano, magenta), branco e preto. Este conjunto de oito cores cobre todas as combinacoes dos tres subpixeis completamente ligados ou completamente desligados, que e a abordagem mais completa para revelar todos os tipos de falhas de subpixeis.',
    },
    {
      q: 'Posso usar esta ferramenta para verificar a precisao de cor?',
      a: 'Pode usa-la como uma verificacao informal de precisao de cor. Num ecra bem calibrado, cada cor deve aparecer saturada e limpa sem tonalidades evidentes. O vermelho deve parecer vermelho puro sem desvios para laranja ou rosa. O verde deve parecer vivido sem tonalidade amarela ou azul. O azul deve parecer azul verdadeiro sem desvios para roxo ou teal. Um desvio significativo das cores esperadas pode indicar um problema de calibracao que vale a pena investigar.',
    },
    {
      q: 'Quanto tempo devo passar em cada cor?',
      a: 'Passe pelo menos 15 a 30 segundos em cada cor, examinando todo o painel metodicamente de canto a canto. Isto da tempo suficiente para detetar falhas que sao faceis de perder com um olhar rapido. Preste especial atencao as areas onde ja notou problemas anteriormente e observe tanto o centro como as bordas do painel, pois as falhas nem sempre estao localizadas perto do centro.',
    },
    {
      q: 'Esta ferramenta funciona em todos os tipos de monitor?',
      a: 'Sim. A ferramenta funciona em LCD, IPS, VA, TN, OLED, AMOLED e qualquer outra tecnologia de ecra. O ciclo de cor em tela cheia e uma tecnica universal porque cada tecnologia de ecra funciona controlando a saida dos subpixeis, e os mesmos tipos de falhas (pixels mortos, presos e quentes) podem ocorrer em todos os tipos de painel. Os utilizadores de OLED devem tambem prestar atencao a uniformidade em cada cor, pois os paineis OLED podem desenvolver irregularidades relacionadas com o envelhecimento ao longo do tempo.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How the fullscreen colour cycle works</h2>
      <p>
        The Fullscreen Colour Cycle steps through eight solid colours that collectively test every combination
        of subpixel states across your display. The three primary colours (red, green, blue) test each channel
        individually. The three secondary colours (yellow, cyan, magenta) test each pair of channels together.
        White tests all three subpixels active simultaneously. Black tests all three subpixels off. This set
        of eight colours is the standard palette used in professional monitor acceptance testing because it
        reveals every possible category of subpixel fault.
      </p>

      <h2 className="text-lg font-bold text-fg">When to use colour cycle versus individual screens</h2>
      <p>
        The colour cycle is the most efficient option for a complete inspection because it covers all eight
        test colours in a single session. Individual colour screens such as the Red Screen, Green Screen, and
        Blue Screen are better when you have already identified a suspect area and want to study it in detail
        on a specific colour without the distraction of cycling. Use the colour cycle first for a broad check,
        then switch to individual screens to investigate anything you find.
      </p>

      <h2 className="text-lg font-bold text-fg">What each colour reveals</h2>
      <p>
        Red reveals dead green and blue subpixels as bright or coloured dots. Green reveals dead red and blue
        subpixels. Blue reveals dead red and green subpixels. Yellow reveals stuck blue subpixels. Cyan reveals
        stuck red subpixels. Magenta reveals stuck green subpixels. White reveals dead pixels where all
        subpixels are off, appearing as black dots. Black reveals hot pixels where subpixels are stuck on,
        appearing as bright coloured dots. Working through all eight colours methodically leaves no fault
        category unchecked.
      </p>

      <h2 className="text-lg font-bold text-fg">Tips for accurate inspection</h2>
      <p>
        Run the test in fullscreen at your standard monitor brightness. View the panel from directly in front
        at your normal sitting distance. Reduce room lighting slightly if reflections are masking part of the
        panel. Scan each quadrant of the screen separately rather than looking at the whole display at once,
        as small pixel faults are easy to overlook when scanning too broadly. If you spot a dot that seems
        unusual, advance to the next colour and come back to confirm whether it remains visible. Faults that
        appear on multiple colours are more significant than artefacts that only show on one.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o ciclo de cor em tela cheia</h2>
      <p>
        O Ciclo de Cor em Tela Cheia percorre oito cores solidas que testam coletivamente todas as combinacoes
        de estados de subpixeis no ecra. As tres cores primarias (vermelho, verde, azul) testam cada canal
        individualmente. As tres cores secundarias (amarelo, ciano, magenta) testam cada par de canais em
        conjunto. O branco testa os tres subpixeis ativos simultaneamente. O preto testa os tres subpixeis
        desligados. Este conjunto de oito cores e a paleta padrao usada nos testes de aceitacao profissional
        de monitores porque revela todas as categorias possiveis de falhas de subpixeis.
      </p>

      <h2 className="text-lg font-bold text-fg">Quando usar o ciclo de cor versus as telas individuais</h2>
      <p>
        O ciclo de cor e a opcao mais eficiente para uma inspecao completa porque cobre as oito cores de teste
        numa unica sessao. As telas de cor individuais, como a Tela Vermelha, Tela Verde e Tela Azul, sao
        melhores quando ja identificou uma area suspeita e quer estuda-la em detalhe numa cor especifica sem
        a distracao do ciclo. Use primeiro o ciclo de cor para uma verificacao ampla e depois mude para telas
        individuais para investigar o que encontrar.
      </p>

      <h2 className="text-lg font-bold text-fg">O que cada cor revela</h2>
      <p>
        O vermelho revela subpixeis verde e azul mortos como pontos brilhantes ou coloridos. O verde revela
        subpixeis vermelho e azul mortos. O azul revela subpixeis vermelho e verde mortos. O amarelo revela
        subpixeis azuis presos. O ciano revela subpixeis vermelhos presos. O magenta revela subpixeis verdes
        presos. O branco revela pixels mortos onde todos os subpixeis estao desligados, aparecendo como pontos
        pretos. O preto revela pixels quentes onde os subpixeis estao presos no estado ligado, aparecendo como
        pontos coloridos brilhantes. Percorrer todas as oito cores metodicamente nao deixa nenhuma categoria
        de falha por verificar.
      </p>

      <h2 className="text-lg font-bold text-fg">Dicas para inspecao precisa</h2>
      <p>
        Execute o teste em tela cheia com o brilho normal do monitor. Veja o painel diretamente da frente a
        distancia normal de uso. Reduza ligeiramente a iluminacao da sala se os reflexos estiverem a mascarar
        parte do painel. Examine cada quadrante do ecra separadamente em vez de olhar para todo o ecra de uma
        vez, pois as pequenas falhas de pixels sao faceis de ignorar quando a analise e demasiado ampla. Se
        detetar um ponto que pareca incomum, avance para a proxima cor e regresse para confirmar se continua
        visivel. As falhas que aparecem em multiplas cores sao mais significativas do que os artefactos que so
        aparecem numa.
      </p>
    </>
  ),
}

export default async function FullscreenColourCyclePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('fullscreen-colour-cycle', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <FullscreenPanel colors={CYCLE_COLORS} />
    </ToolPageLayout>
  )
}
