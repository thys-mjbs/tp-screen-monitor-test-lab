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
  return toolMetadata(getToolByLocale('green-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'Is this the same as a chroma key green screen for video?',
      a: 'No. This tool displays a solid green panel for monitor hardware testing purposes only. Chroma key green screens used in video production are a specific shade of green selected for its separation from human skin tones in video software. This tool fills your display with green to help you inspect pixels and subpixels, not for video background removal.',
    },
    {
      q: 'What does a green screen test reveal on a monitor?',
      a: 'A solid green panel isolates the green subpixel channel across your entire display. Dead or faulty red and blue subpixels appear as dots that differ from the surrounding green. A pixel with a failed red subpixel stuck in an on state will appear cyan against a green background. A pixel with a dead green subpixel will appear as a dark dot. These faults are often missed by white or grey screen tests.',
    },
    {
      q: 'Why does my screen have a green tint?',
      a: 'A persistent green tint on your monitor during normal use usually indicates a colour calibration problem, incorrect white balance, or a misconfigured colour profile. It can also be caused by a loose or damaged display cable affecting signal quality. If the green tint appeared suddenly, check your cable connections before adjusting software settings.',
    },
    {
      q: 'Why is green used so prominently in monitor testing?',
      a: 'Green occupies the largest portion of the visible spectrum that humans perceive as luminance. The human eye is most sensitive to green light, which is why the green subpixel contributes roughly 59 percent of perceived brightness in standard colour formulas. This sensitivity means green subpixel faults are often more noticeable than red or blue faults at equivalent severity levels.',
    },
    {
      q: 'How does the green screen compare to the Dead Pixel Test?',
      a: 'The Dead Pixel Test cycles through multiple colours automatically, making it a faster way to check for all types of pixel faults in one session. The green screen gives you more time to carefully inspect a single colour channel without cycling. Use the individual colour screens if you want to study a specific area of the panel in detail, or to confirm a fault spotted during the Dead Pixel Test.',
    },
    {
      q: 'Should I test in fullscreen mode?',
      a: 'Yes. Clicking Full Screen fills your entire display with green rather than just the panel area within the page. This is the correct way to test your monitor, as the in-page panel only covers part of the display. Fullscreen mode lets you inspect every pixel on the panel, including areas near the screen edges that may be partially hidden by the browser window frame during in-page testing.',
    },
  ],
  pt: [
    {
      q: 'E o mesmo que um ecra verde de chroma key para video?',
      a: 'Nao. Esta ferramenta exibe um painel verde solido apenas para fins de teste de hardware de monitor. Os ecras verdes de chroma key usados na producao de video sao um tom especifico de verde selecionado pela sua separacao dos tons de pele humana em software de video. Esta ferramenta preenche o ecra de verde para ajudar a inspecionar pixels e subpixeis, nao para remocao de fundo de video.',
    },
    {
      q: 'O que revela um teste de tela verde num monitor?',
      a: 'Um painel verde solido isola o canal do subpixel verde em todo o ecra. Os subpixeis vermelho e azul mortos ou com falha aparecem como pontos que diferem do verde circundante. Um pixel com um subpixel vermelho com falha no estado ligado aparecera como ciano contra um fundo verde. Um pixel com um subpixel verde morto aparecera como um ponto escuro. Estas falhas sao muitas vezes perdidas nos testes de ecra branco ou cinzento.',
    },
    {
      q: 'Por que o meu ecra tem uma tonalidade verde?',
      a: 'Uma tonalidade verde persistente no monitor durante o uso normal geralmente indica um problema de calibracao de cor, balanco de brancos incorreto ou perfil de cor mal configurado. Tambem pode ser causado por um cabo de ecra solto ou danificado que afeta a qualidade do sinal. Se a tonalidade verde apareceu de repente, verifique as ligacoes do cabo antes de ajustar as definicoes de software.',
    },
    {
      q: 'Por que o verde e usado de forma tao proeminente nos testes de monitor?',
      a: 'O verde ocupa a maior parte do espetro visivel que os humanos percebem como luminancia. O olho humano e mais sensivel a luz verde, razao pela qual o subpixel verde contribui com cerca de 59% do brilho percebido nas formulas de cor padrao. Esta sensibilidade significa que as falhas do subpixel verde sao muitas vezes mais noticias do que as falhas vermelhas ou azuis de gravidade equivalente.',
    },
    {
      q: 'Como se compara a tela verde com o Teste de Pixels Mortos?',
      a: 'O Teste de Pixels Mortos alterna automaticamente entre multiplas cores, tornando-o uma forma mais rapida de verificar todos os tipos de falhas de pixels numa sessao. A tela verde da-lhe mais tempo para inspecionar cuidadosamente um unico canal de cor sem alternancia. Use as telas de cor individuais se quiser estudar uma area especifica do painel em detalhe, ou para confirmar uma falha detetada durante o Teste de Pixels Mortos.',
    },
    {
      q: 'Devo testar em modo de tela cheia?',
      a: 'Sim. Clicar em Tela cheia preenche todo o ecra de verde em vez de apenas a area do painel dentro da pagina. Esta e a forma correta de testar o monitor, pois o painel dentro da pagina cobre apenas parte do ecra. O modo de tela cheia permite inspecionar cada pixel do painel, incluindo areas perto das bordas que podem estar parcialmente ocultas pela moldura da janela do navegador.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the green screen test checks</h2>
      <p>
        A fullscreen green panel is one of the most sensitive single-colour tests you can run on your display.
        Because the human eye is more sensitive to green than to red or blue, green subpixel faults produce a
        more noticeable visual difference against the uniform background. Dead, stuck, or weakened red and blue
        subpixels appear as coloured dots that stand out clearly from the surrounding green. This makes the
        green screen particularly effective for catching faults that might be overlooked on a white or grey
        background.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding subpixel faults on the green channel</h2>
      <p>
        Each pixel on your monitor has three subpixels: red, green, and blue. A solid green panel asks every
        green subpixel to turn fully on while red and blue subpixels remain off. A blue subpixel stuck in the
        on state causes a cyan dot. A red subpixel stuck on causes a yellow dot. A dead green subpixel causes
        a dark dot where no subpixel is producing output. Switching between the Green Screen, Red Screen, and
        Blue Screen tools lets you triangulate exactly which subpixels are failing in any suspect pixel.
      </p>

      <h2 className="text-lg font-bold text-fg">Green tinting on your monitor</h2>
      <p>
        If your monitor shows an unwanted green tint during normal use, the most common causes are an incorrect
        colour temperature preset, a misconfigured ICC colour profile, or a damaged display cable. A sudden
        onset green tint is more likely to be a cable or hardware fault. A tint that has always been present
        is more likely a calibration or colour profile issue. Reset your monitor to factory defaults and check
        that the colour profile in your operating system settings matches your monitor model as a first step.
      </p>

      <h2 className="text-lg font-bold text-fg">Tips for accurate green channel testing</h2>
      <p>
        Run the test in fullscreen at your normal brightness setting in a room with moderate ambient lighting.
        Avoid bright direct light on the screen surface as reflections can mask faults. Scan each quadrant
        methodically. Pay particular attention to the corners and edges, as subpixel faults can occur anywhere
        on the panel but are most common near the edges. If you see a dot that does not match the surrounding
        green, note its position and confirm it with the Red Screen and Blue Screen tools.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que verifica o teste de tela verde</h2>
      <p>
        Um painel verde em tela cheia e um dos testes de cor unica mais sensiveis que pode executar no ecra.
        Como o olho humano e mais sensivel ao verde do que ao vermelho ou azul, as falhas do subpixel verde
        produzem uma diferenca visual mais notavel contra o fundo uniforme. Os subpixeis vermelho e azul
        mortos, presos ou enfraquecidos aparecem como pontos coloridos que se destacam claramente do verde
        circundante. Isto torna a tela verde particularmente eficaz para detetar falhas que podem ser
        ignoradas num fundo branco ou cinzento.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender as falhas de subpixeis no canal verde</h2>
      <p>
        Cada pixel do monitor tem tres subpixeis: vermelho, verde e azul. Um painel verde solido pede a cada
        subpixel verde que se ligue totalmente enquanto o vermelho e o azul permanecem desligados. Um subpixel
        azul preso no estado ligado causa um ponto ciano. Um subpixel vermelho preso no estado ligado causa
        um ponto amarelo. Um subpixel verde morto causa um ponto escuro. Alternar entre as telas Verde,
        Vermelha e Azul permite triangular exatamente quais os subpixeis com falha em qualquer pixel suspeito.
      </p>

      <h2 className="text-lg font-bold text-fg">Tonalidade verde no monitor</h2>
      <p>
        Se o monitor mostrar uma tonalidade verde indesejada durante o uso normal, as causas mais comuns sao
        uma predefinicao de temperatura de cor incorreta, um perfil de cor ICC mal configurado ou um cabo de
        ecra danificado. Uma tonalidade verde de inicio subito e mais provavel que seja uma falha de cabo ou
        hardware. Uma tonalidade que sempre esteve presente e mais provavel que seja um problema de calibracao
        ou perfil de cor. Reponga o monitor para as predefinicoes de fabrica como primeiro passo.
      </p>

      <h2 className="text-lg font-bold text-fg">Dicas para testes precisos do canal verde</h2>
      <p>
        Execute o teste em tela cheia com o brilho normal numa sala com iluminacao moderada. Evite luz direta
        intensa na superficie do ecra, pois os reflexos podem mascarar falhas. Examine cada quadrante
        metodicamente. Preste especial atencao aos cantos e bordas. Se vir um ponto que nao corresponde ao
        verde circundante, anote a sua posicao e confirme-o com as ferramentas Tela Vermelha e Tela Azul.
      </p>
    </>
  ),
}

export default async function GreenScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('green-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#00FF00', label: 'Green' }} />
    </ToolPageLayout>
  )
}
