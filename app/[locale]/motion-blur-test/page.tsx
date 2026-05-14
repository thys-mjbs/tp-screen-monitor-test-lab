import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { MotionBlurTest } from '@/components/tools/MotionBlurTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('motion-blur-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is monitor motion blur?',
      a: 'Monitor motion blur is the visible smearing or trailing that appears behind fast-moving objects on your screen. It occurs because LCD and OLED pixels take time to transition from one colour to another, and because sample-and-hold displays keep each pixel lit for the full duration of a frame. When an object moves faster than the pixel response time allows, adjacent frames blend together and create the appearance of a blurred or smeared trail.',
    },
    {
      q: 'What causes ghosting on a monitor?',
      a: 'Ghosting is caused by slow pixel response time. When a pixel cannot reach its target colour before the next frame arrives, the residual colour from the previous state remains visible as a faint duplicate image trailing the moving object. On VA panels, dark-to-dark transitions are particularly slow, producing a characteristic dark smear. On IPS panels, ghosting tends to appear as a brighter or oversaturated trail when overdrive is too aggressive.',
    },
    {
      q: 'How do I use this motion blur test?',
      a: 'Watch the moving bar as it travels across the screen. Look for a trailing smear or halo following the bar rather than a clean, sharp edge. Try increasing the speed to make any ghosting more obvious. Switch between dark, light, and grey backgrounds as ghosting characteristics differ between bright-on-dark and dark-on-bright transitions. Pause the bar to confirm any artifact you see is motion-related rather than a pixel defect.',
    },
    {
      q: 'What is pixel response time?',
      a: 'Pixel response time is the time in milliseconds it takes for a pixel to change from one colour to another, typically measured as grey-to-grey (GtG) or MPRT (moving picture response time). Faster response times mean less ghosting. Gaming monitors often advertise 1ms GtG, though actual measured performance varies. High refresh rate monitors benefit most from fast pixel response because the inter-frame window becomes very short at 144 Hz and above.',
    },
    {
      q: 'What is overdrive and how does it affect motion blur?',
      a: 'Overdrive is a monitor feature that applies extra voltage to pixels to speed up their colour transitions. When calibrated correctly, overdrive reduces ghosting significantly. When set too aggressively, it causes inverse ghosting, also called coronas or haloing, where a bright artifact appears ahead of the moving object rather than behind it. Most monitors offer multiple overdrive settings so you can tune the result for your preferences.',
    },
    {
      q: 'Does refresh rate affect motion blur?',
      a: 'Higher refresh rates reduce perceived motion blur by showing more distinct positions per second, which reduces the motion-to-frame-blur component. A 144 Hz monitor updates the display 144 times per second, so each frame represents a much smaller slice of motion than a 60 Hz display. However, sample-and-hold blur still exists even at very high refresh rates, which is why backlight strobing modes such as ULMB were developed.',
    },
    {
      q: 'What is ULMB and backlight strobing?',
      a: 'ULMB stands for Ultra Low Motion Blur. It is a technology on some gaming monitors that strobes the backlight off between frames so the pixel is only illuminated at the moment it has finished transitioning. This eliminates sample-and-hold motion blur almost entirely but cannot be used simultaneously with variable refresh rate technologies like G-Sync or FreeSync. Backlight strobing makes motion extremely clear but reduces overall brightness.',
    },
    {
      q: 'Which panel type has the worst motion blur?',
      a: 'VA panels are generally considered to have the worst motion blur due to their slow dark-to-dark pixel transitions. IPS panels perform better at moderate speeds but can show inverse ghosting if overdrive is too aggressive. TN panels traditionally had the fastest response times, though modern fast IPS panels now match or exceed them. OLED panels have sub-millisecond response times and produce the least motion blur of any currently available display technology.',
    },
  ],
  pt: [
    {
      q: 'O que e o desfoque de movimento do monitor?',
      a: 'O desfoque de movimento do monitor e o borrado ou rastro visivel que aparece atras de objetos em rapido movimento no ecra. Ocorre porque os pixels LCD e OLED demoram tempo a transitar de uma cor para outra, e porque os ecras de amostragem e retencao manteem cada pixel iluminado durante a duracao total de um fotograma. Quando um objeto se move mais rapido do que o tempo de resposta de pixel permite, os fotogramas adjacentes misturam-se e criam a aparencia de um rastro borrado ou manchado.',
    },
    {
      q: 'O que causa o ghosting num monitor?',
      a: 'O ghosting e causado por tempo de resposta de pixel lento. Quando um pixel nao consegue atingir a sua cor alvo antes da chegada do proximo fotograma, a cor residual do estado anterior permanece visivel como uma imagem duplicada fraca que segue o objeto em movimento. Nos paineis VA, as transicoes escuro-para-escuro sao particularmente lentas, produzindo uma mancha escura caracteristica. Nos paineis IPS, o ghosting tende a aparecer como um rastro mais brilhante ou supersaturado quando o overdrive e demasiado agressivo.',
    },
    {
      q: 'Como uso este teste de desfoque de movimento?',
      a: 'Observe a barra em movimento enquanto viaja pelo ecra. Procure um rastro ou halo que segue a barra em vez de uma borda limpa e nitida. Tente aumentar a velocidade para tornar qualquer ghosting mais obvio. Alterne entre fundos escuro, claro e cinzento pois as caracteristicas de ghosting diferem entre transicoes claro-sobre-escuro e escuro-sobre-claro. Pause a barra para confirmar que qualquer artefacto que veja e relacionado com movimento em vez de um defeito de pixel.',
    },
    {
      q: 'O que e o tempo de resposta de pixel?',
      a: 'O tempo de resposta de pixel e o tempo em milissegundos que demora a um pixel mudar de uma cor para outra, tipicamente medido como cinzento-para-cinzento (GtG) ou MPRT (tempo de resposta de imagem em movimento). Tempos de resposta mais rapidos significam menos ghosting. Os monitores de gaming frequentemente publicam 1ms GtG, embora o desempenho medido real varie. Os monitores de alta taxa de atualizacao beneficiam mais de resposta de pixel rapida porque a janela entre fotogramas torna-se muito curta a 144 Hz e acima.',
    },
    {
      q: 'O que e o overdrive e como afeta o desfoque de movimento?',
      a: 'O overdrive e uma funcionalidade do monitor que aplica tensao extra aos pixels para acelerar as suas transicoes de cor. Quando calibrado corretamente, o overdrive reduz significativamente o ghosting. Quando definido de forma demasiado agressiva, causa ghosting inverso, tambem chamado coronas ou halos, onde um artefacto brilhante aparece a frente do objeto em movimento em vez de atras. A maioria dos monitores oferece varias definicoes de overdrive para que possa ajustar o resultado as suas preferencias.',
    },
    {
      q: 'A taxa de atualizacao afeta o desfoque de movimento?',
      a: 'Taxas de atualizacao mais altas reduzem o desfoque de movimento percebido ao mostrar mais posicoes distintas por segundo, o que reduz o componente de desfoque de movimento-para-fotograma. Um monitor de 144 Hz atualiza o ecra 144 vezes por segundo, pelo que cada fotograma representa uma fatia muito menor de movimento do que um ecra de 60 Hz. No entanto, o desfoque de amostragem e retencao ainda existe mesmo a taxas de atualizacao muito altas, razao pela qual foram desenvolvidos modos de estroboscopio de retroiluminacao como o ULMB.',
    },
    {
      q: 'O que e o ULMB e o estroboscopio de retroiluminacao?',
      a: 'ULMB significa Ultra Low Motion Blur. E uma tecnologia em alguns monitores de gaming que estroboscopia a retroiluminacao entre fotogramas para que o pixel so seja iluminado no momento em que terminou de transitar. Isto elimina quase completamente o desfoque de amostragem e retencao, mas nao pode ser usado simultaneamente com tecnologias de taxa de atualizacao variavel como G-Sync ou FreeSync. O estroboscopio de retroiluminacao torna o movimento extremamente claro mas reduz o brilho geral.',
    },
    {
      q: 'Qual tipo de painel tem o pior desfoque de movimento?',
      a: 'Os paineis VA sao geralmente considerados os que tem o pior desfoque de movimento devido as suas lentas transicoes de pixel escuro-para-escuro. Os paineis IPS tem melhor desempenho a velocidades moderadas, mas podem mostrar artefactos de ghosting inverso se o overdrive for demasiado agressivo. Os paineis TN tinham tradicionalmente os tempos de resposta mais rapidos, embora os modernos paineis IPS rapidos agora os correspondam ou superem. Os paineis OLED tem tempos de resposta de sub-milissegundo e produzem o menor desfoque de movimento de qualquer tecnologia de ecra atualmente disponivel.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How does the motion blur test work?</h2>
      <p>
        This test moves a high-contrast vertical bar across a solid background at a constant speed. Your
        eyes naturally track the bar as it moves, which is the same behaviour that occurs when watching
        fast-moving content. Any residual colour left behind by slow pixels becomes visible as a trailing
        smear or ghosting artifact. The test lets you observe pixel response at several speeds across
        backgrounds chosen to stress different transition types.
      </p>

      <h2 className="text-lg font-bold text-fg">What are you looking for?</h2>
      <p>
        On a fast, well-calibrated monitor, the bar appears as a clean sharp stripe with no visible tail.
        Signs of poor performance include: a blurred halo following the bar, a dark or bright echo image
        trailing behind the bar at a distance (ghosting), and a bright leading artifact ahead of the bar
        (inverse ghosting from aggressive overdrive).
      </p>
      <p>
        Use the dark background to stress bright-to-dark and dark-to-bright transitions. The grey
        background tests mid-tone transitions, where VA panels most commonly struggle. The light background
        reveals whether dark-on-light ghosting is present on your display.
      </p>

      <h2 className="text-lg font-bold text-fg">Comparing panel types</h2>
      <p>
        VA panels typically show the most obvious trailing on dark backgrounds. IPS and IPS-like panels
        generally perform better but can exhibit overshoot artifacts at aggressive overdrive settings.
        OLED displays produce near-zero ghosting due to their microsecond-level pixel response times. This
        test is most useful as a comparative tool: run it before and after adjusting your monitor&apos;s
        overdrive setting to observe the direct effect on ghosting behaviour.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitations of this test</h2>
      <p>
        Browser-based tests cannot measure response time numerically. This tool is a visual diagnostic
        only. The pixel speed seen here is limited by your monitor&apos;s current refresh rate and the
        browser&apos;s rendering pipeline. For precise numerical measurements, dedicated software or hardware
        frame capture tools are required. Use this test to get a qualitative impression of your
        display&apos;s motion handling before deciding whether to adjust your monitor&apos;s overdrive setting.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o teste de desfoque de movimento?</h2>
      <p>
        Este teste move uma barra vertical de alto contraste por um fundo solido a velocidade constante.
        Os seus olhos seguem naturalmente a barra enquanto se move, que e o mesmo comportamento que ocorre
        ao assistir a conteudo em rapido movimento. Qualquer cor residual deixada por pixels lentos
        torna-se visivel como uma mancha em rastro ou artefacto de ghosting. O teste permite observar a
        resposta de pixel a varias velocidades em fundos escolhidos para stressar diferentes tipos de
        transicao.
      </p>

      <h2 className="text-lg font-bold text-fg">O que esta a procura?</h2>
      <p>
        Num monitor rapido e bem calibrado, a barra aparece como uma risca nitida sem rastro visivel.
        Os sinais de mau desempenho incluem: um halo borrado a seguir a barra, uma imagem eco escura ou
        brilhante que segue a barra a distancia (ghosting), e um artefacto brilhante liderando a frente
        da barra (ghosting inverso de overdrive agressivo).
      </p>
      <p>
        Use o fundo escuro para stressar as transicoes claro-para-escuro e escuro-para-claro. O fundo
        cinzento testa as transicoes de tons medios, onde os paineis VA mais comummente lutam. O fundo
        claro revela se o ghosting escuro-sobre-claro esta presente no ecra.
      </p>

      <h2 className="text-lg font-bold text-fg">Comparando tipos de paineis</h2>
      <p>
        Os paineis VA tipicamente mostram o rastro mais obvio em fundos escuros. Os paineis IPS e
        similares geralmente tem melhor desempenho mas podem exibir artefactos de overshoot em definicoes
        de overdrive agressivas. Os ecras OLED produzem ghosting quase zero devido aos seus tempos de
        resposta de pixel ao nivel de microssegundos. Este teste e mais util como ferramenta comparativa:
        execute-o antes e depois de ajustar a definicao de overdrive do monitor para observar o efeito
        direto no comportamento de ghosting.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitacoes deste teste</h2>
      <p>
        Os testes baseados em navegador nao conseguem medir numericamente o tempo de resposta. Esta
        ferramenta e apenas um diagnostico visual. A velocidade de pixel vista aqui e limitada pela taxa
        de atualizacao atual do monitor e pelo pipeline de renderizacao do navegador. Para medicoes
        numericas precisas, sao necessarios software dedicado ou ferramentas de captura de fotogramas por
        hardware. Use este teste para obter uma impressao qualitativa do tratamento de movimento do ecra
        antes de decidir se deve ajustar a definicao de overdrive do monitor.
      </p>
    </>
  ),
}

export default async function MotionBlurTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('motion-blur-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <MotionBlurTest />
    </ToolPageLayout>
  )
}
