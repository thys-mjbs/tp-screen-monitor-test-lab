import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { FullscreenPanel, type ColorEntry } from '@/components/tools/FullscreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('dead-pixel-test', locale), locale)
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

const FAQS: Record<string, FAQ[]> = {
  en: [
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
  ],
  pt: [
    {
      q: 'O que e um pixel morto?',
      a: 'Um pixel morto e um pixel do ecra que parou de funcionar permanentemente. Aparece como um ponto consistentemente preto ou escuro no ecra, independentemente do que e exibido. Os pixels mortos ocorrem quando o transitor de pelicula fina que controla esse pixel falha, cortando completamente a energia. Ao contrario dos pixels presos, os pixels mortos nao conseguem receber qualquer sinal de cor.',
    },
    {
      q: 'Qual e a diferenca entre um pixel morto e um pixel preso?',
      a: 'Um pixel morto e completamente nao funcional e permanece preto em todas as cores de fundo. Um pixel preso ainda recebe energia mas esta bloqueado numa cor fixa, mais comummente vermelho, verde ou azul. Os pixels presos podem responder ao flash rapido de cores atraves da ferramenta Reparador de Pixels Presos. Os pixels mortos sao uma falha de hardware fisico e nao podem ser corrigidos por software.',
    },
    {
      q: 'Como uso este teste de pixels mortos?',
      a: 'Clique no painel colorido acima para percorrer as cores de fundo solidas uma de cada vez. Para resultados mais precisos, clique no botao Tela cheia e veja o ecra numa sala com pouca luz. Procure qualquer pequeno ponto que nao corresponda a cor de fundo. Use as teclas de seta ou a barra de espaco para avancar entre as cores e prima Escape para sair da tela cheia quando terminar.',
    },
    {
      q: 'Que cores o teste percorre?',
      a: 'O teste percorre branco, preto, vermelho, verde, azul, ciano, magenta e cinzento. Cada cor e concebida para revelar um tipo diferente de defeito de pixel. O branco e o cinzento mostram pixels permanentemente escuros. O preto revela pixels quentes ou brilhantes. As cores primarias e as suas combinacoes expoe falhas de subpixeis onde um dos tres subpixeis vermelho, verde ou azul dentro de um pixel parou de funcionar.',
    },
    {
      q: 'Um pixel morto pode ser corrigido?',
      a: 'Os pixels mortos nao podem ser corrigidos de forma fiavel. Sao causados por uma falha fisica no transitor do pixel, que e um problema de hardware sem solucao de software. Alguns utilizadores reportaram melhorias temporarias usando pressao ou calor, mas ambos os metodos representam um risco significativo de causar danos adicionais nos pixels circundantes. Se o ecra estiver em garantia, um pixel morto pode qualificar para substituicao.',
    },
    {
      q: 'Quantos pixels mortos sao aceitaveis num monitor novo?',
      a: 'Depende do fabricante e da classe de ecra que especifica. A ISO 13406-2 define classes de defeito, e muitos monitores de entrada sao enviados sob a Classe II, que permite um pequeno numero de defeitos. Os monitores premium e quase todos os portateis modernos anunciam agora uma garantia de zero pixels mortos. Consulte a documentacao da garantia para entender a sua cobertura e o prazo para apresentar uma reclamacao.',
    },
    {
      q: 'Este teste de pixels mortos funciona em ecras de portatil e ecras OLED?',
      a: 'Sim. Esta ferramenta funciona em qualquer ecra ligado a um navegador web, incluindo ecras de portatil, monitores de secretaria, tablets, televisoes e paineis OLED. Os ecras OLED valem especialmente a pena testar porque podem desenvolver pixels quentes, que aparecem como pontos brilhantes contra um fundo preto. A fase de tela preta deste teste e a mais util para verificar ecras OLED.',
    },
    {
      q: 'Este teste e seguro para o meu monitor?',
      a: 'Sim, este teste e completamente seguro para todos os tipos de ecra. Exibir cores solidas estaticas nao causa qualquer dano aos paineis LCD, IPS, VA, OLED ou AMOLED. O teste nao stresses o painel de qualquer forma alem de mostrar cores de fundo padrao. Pode executa-lo quantas vezes quiser sem qualquer risco para o ecra.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
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
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o teste de pixels mortos?</h2>
      <p>
        Esta ferramenta percorre o ecra atraves de oito cores de fundo solidas uma de cada vez. Cada cor
        torna visivel um tipo diferente de falha de pixel. Um pixel morto permanece preto independentemente
        do fundo, tornando-se obvio no momento em que o ecra muda para uma cor brilhante como branco ou
        vermelho. Um subpixel preso, que esta bloqueado numa unica cor, destaca-se contra os fundos que
        contrastam com ele. Percorrer branco, preto, as tres cores primarias, ciano, magenta e cinzento
        oferece a melhor cobertura para todos os tipos de defeitos de pixel.
      </p>

      <h2 className="text-lg font-bold text-fg">Quando deve executar um teste de pixels mortos?</h2>
      <p>
        O momento mais importante para executar este teste e imediatamente apos receber um monitor ou
        portatil novo. A maioria dos fabricantes e retalhistas permite devolucoes ou substituicoes por
        defeitos de pixels mortos dentro de um periodo especifico, muitas vezes 7 a 30 dias apos a compra.
        Se esperar demasiado tempo, perde o direito a substituicao ao abrigo da politica de pixels mortos.
        Executar este teste demora menos de dois minutos e deve fazer parte de qualquer desembalagem de um
        novo ecra.
      </p>
      <p>
        Tambem vale a pena executar este teste sempre que notar um ponto persistente no ecra que nao
        desaparece. Um ponto que muda com o conteudo e provavelmente um artefacto do material de origem.
        Um ponto que permanece na mesma posicao atraves de diferentes cores e diferentes conteudos e uma
        falha de pixel no hardware do ecra.
      </p>

      <h2 className="text-lg font-bold text-fg">O que revela cada uma das cores de teste?</h2>
      <p>
        Os paineis branco e cinzento revelam pixels que estao permanentemente escuros ou pretos. O painel
        preto expoe pixels quentes, que brilham com uma cor fixa contra um fundo de outro modo escuro.
        Os paineis vermelho, verde e azul revelam cada um falhas de subpixeis nesse canal de cor especifico.
        O ciano (azul e verde combinados) e o magenta (vermelho e azul combinados) detetam falhas que os
        paineis de cor primaria individual por vezes perdem, particularmente defeitos mistos de subpixeis.
      </p>

      <h2 className="text-lg font-bold text-fg">Dicas para o teste mais preciso</h2>
      <p>
        Use o botao de tela cheia para expandir o teste para todo o ecra. Reduza a iluminacao da sala ou
        teste num ambiente com pouca luz para que as falhas subtis de pixels sejam mais faceis de detetar.
        Veja o ecra diretamente da frente a distancia normal. Avance lentamente por cada cor e de aos seus
        olhos um momento para examinar todo o painel antes de avancar. Para monitores grandes, examine
        sistematicamente cada quadrante em vez de tentar verificar todo o ecra de uma vez.
      </p>
    </>
  ),
}

export default async function DeadPixelTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('dead-pixel-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <FullscreenPanel colors={COLORS} />
    </ToolPageLayout>
  )
}
