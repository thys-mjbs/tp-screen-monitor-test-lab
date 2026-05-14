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
  return toolMetadata(getToolByLocale('black-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
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
  ],
  pt: [
    {
      q: 'O que revela um teste de tela preta?',
      a: 'Um teste de tela preta revela vazamento de luz de fundo, brilho IPS, pixels quentes e qualquer fuga de luz nas bordas ou cantos do painel. Estes defeitos sao invisiveis durante o uso normal quando o ecra mostra conteudo brilhante, mas tornam-se obvios contra um fundo completamente escuro. Testar numa sala com pouca ou nenhuma luz da os resultados mais precisos.',
    },
    {
      q: 'Como testo o vazamento de luz de fundo com a tela preta?',
      a: 'Clique em Tela cheia e reduza as luzes da sala o maximo possivel. Olhe para as bordas e cantos do painel. Se vir manchas de luz a transpassar a partir de tras do painel, especialmente ao longo das bordas, isso e vazamento de luz de fundo. E causado pela retroiluminacao LED a vazar pelas bordas da camada LCD. Algum grau de vazamento e normal em monitores de entrada.',
    },
    {
      q: 'O que e o brilho IPS e como difere do vazamento de luz de fundo?',
      a: 'O brilho IPS e um brilho suave e nebuloso que aparece nos cantos dos paineis IPS quando vistos em angulo ou a distancia. E causado pela forma como os paineis IPS transmitem a luz e esta presente em maior ou menor grau em quase todos os ecras IPS. O vazamento de luz de fundo e mais localizado e brilhante, aparecendo como manchas distintas de luz ao longo das bordas do painel. Ambos sao mais visiveis em conteudo escuro.',
    },
    {
      q: 'O que sao pixels quentes e como a tela preta os revela?',
      a: 'Os pixels quentes sao pixels que estao presos no estado ligado e brilham com uma cor fixa contra um fundo escuro. Aparecem como pequenos pontos coloridos brilhantes quando o ecra exibe conteudo preto ou escuro. Os pixels quentes sao essencialmente o oposto dos pixels mortos: enquanto os pixels mortos ficam escuros em fundos brilhantes, os pixels quentes ficam brilhantes em fundos escuros. A tela preta e a melhor forma de os encontrar.',
    },
    {
      q: 'Por que devo testar o vazamento de luz numa sala escura?',
      a: 'A luz ambiente da sala compete com o brilho do vazamento de luz de fundo e torna-o mais dificil de ver. Numa sala brilhante, o vazamento que seria notavel durante cenas de filmes escuros ou jogos pode parecer invisivel. Testar numa sala escura ou com pouca luz da-lhe uma impressao realista de como o ecra funcionara em condicoes de uso real, como ver filmes com as luzes apagadas.',
    },
    {
      q: 'E o mesmo que o ecra azul da morte do Windows?',
      a: 'Nao. Esta ferramenta exibe um painel completamente preto para fins de teste de monitor. O ecra azul da morte do Windows (BSOD) e um ecra de erro exibido pelo Windows quando ocorre um erro critico do sistema. Se esta a pesquisar informacoes sobre um ecra de erro azul no seu computador, esta ferramenta nao tem relacao. Esta e puramente uma ferramenta de inspecao de monitor que mostra um fundo preto solido.',
    },
    {
      q: 'Quanto vazamento de luz de fundo e aceitavel num monitor novo?',
      a: 'Uma pequena quantidade de vazamento de luz de fundo perto dos cantos e considerada normal e aceitavel na maioria dos paineis LCD, incluindo muitos monitores premium. Vazamento significativo que cobre uma grande parte das bordas do ecra ou que e distrator durante a visualizacao normal de conteudo escuro nao e aceitavel e pode qualificar-se para devolucao ou substituicao ao abrigo da garantia do fabricante.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
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
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que verifica o teste de tela preta</h2>
      <p>
        Um painel preto em tela cheia e a forma mais eficaz de avaliar o seu ecra em condicoes de pouca
        luz. Revela problemas completamente invisiveis durante o uso normal: vazamento de luz de fundo ao
        longo das bordas do painel, brilho IPS nos cantos e pixels quentes que permanecem acesos contra um
        fundo escuro. Estes problemas importam mais se assistir a filmes, jogar ou fizer qualquer trabalho
        que envolva cenas ou interfaces escuras.
      </p>

      <h2 className="text-lg font-bold text-fg">Como identificar o vazamento de luz de fundo</h2>
      <p>
        Entre em tela cheia e reduza a iluminacao da sala o maximo possivel. Olhe ao longo das quatro
        bordas e especialmente nos cantos. O vazamento de luz de fundo aparece como manchas de luz branca
        ou cinzenta a infiltrar-se pelas bordas do painel. Uma pequena quantidade perto das bordas e
        esperada na maioria dos monitores LCD. Vazamento que se estende visivelmente para dentro ou que
        cobre uma area ampla ao longo das bordas e considerado excessivo e pode afetar a sua experiencia
        de visualizacao durante conteudo escuro.
      </p>

      <h2 className="text-lg font-bold text-fg">Brilho IPS versus vazamento de luz de fundo</h2>
      <p>
        O brilho IPS e um fenomeno diferente do vazamento de luz de fundo. Aparece como um brilho suave e
        cintilante nos cantos do painel, tipicamente mais visivel quando visto em angulo. Ao contrario do
        vazamento de luz de fundo, o brilho IPS desvanece significativamente quando ve o ecra diretamente
        da sua posicao normal de uso. E uma caracteristica da tecnologia de painel IPS e nao um defeito de
        fabrico. Se as areas brilhantes so aparecem quando inclina a cabeca ou se move para um lado, e
        provavelmente brilho IPS e nao vazamento.
      </p>

      <h2 className="text-lg font-bold text-fg">Verificar pixels quentes em ecras OLED</h2>
      <p>
        Os paineis OLED valem especialmente a pena verificar com este teste. Como os pixels OLED produzem
        a sua propria luz em vez de depender de uma retroiluminacao, pixels individuais podem desenvolver
        falhas que os mantem acesos. Um pixel quente num OLED aparece como um pequeno ponto consistentemente
        brilhante contra um fundo de outro modo perfeitamente preto. Se detetar algum ponto brilhante
        persistente durante este teste num painel OLED, registe a sua posicao e repita o teste para
        confirmar que nao e um artefacto do ecra do conteudo acima.
      </p>
    </>
  ),
}

export default async function BlackScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('black-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
    </ToolPageLayout>
  )
}
