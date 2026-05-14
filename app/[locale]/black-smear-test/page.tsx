import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { BlackSmearTest } from '@/components/tools/BlackSmearTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('black-smear-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is black smear on a monitor?',
      a: 'Black smear is a motion artifact where slow-moving dark objects on a dark background leave a lighter or blurred trail behind them. It is caused by very slow pixel transition times in dark-to-dark colour changes, where the pixel cannot complete its transition before the next frame arrives. The result is a faint ghosting wake visible behind the moving object. Black smear is most strongly associated with VA panel technology.',
    },
    {
      q: 'Which monitor panel type has the worst black smear?',
      a: 'VA (vertical alignment) panels are most affected. VA panels achieve excellent contrast ratios and deep blacks, but their liquid crystal molecules move slowly during dark-to-dark transitions. While VA panels perform well for bright content and have fast bright-to-dark transitions, the dark-to-dark speed is their main weakness. IPS panels have more uniform response times across tonal ranges and exhibit less smear on dark content. OLED panels are effectively immune to smear due to their microsecond response times.',
    },
    {
      q: 'How do I use this black smear test?',
      a: 'Watch the dark bar moving across the black background. Look for a faint lighter trail or wake behind the bar rather than a clean sharp edge. Set the bar to Very Dark and speed to Slow for the most sensitive test, as this creates the exact low-contrast dark-to-dark transition that VA panels struggle with. Dim your room lighting and allow your eyes to adjust before testing. IPS and OLED monitors will typically show no visible smear even at the most sensitive settings.',
    },
    {
      q: 'Is black smear the same as ghosting?',
      a: 'Black smear is a specific type of ghosting. General ghosting refers to any residual image trailing a moving object, and can appear as a brighter or darker echo behind or ahead of the object. Black smear specifically refers to ghosting in dark tonal regions caused by slow dark-to-dark transitions. Standard motion blur tests using white bars on black backgrounds can miss VA panel smear entirely, because VA panels handle bright transitions quickly. This test isolates the dark transition problem specifically.',
    },
    {
      q: 'Can overdrive reduce black smear?',
      a: 'Yes, though with limitations. Overdrive applies extra voltage to speed up pixel transitions, which can reduce dark-to-dark smear on VA panels. However, VA panels often require very aggressive overdrive to push through dark transitions, which can cause inverse ghosting on brighter content. Many VA monitor manufacturers tune overdrive conservatively to avoid haloing, which leaves some smear present. Some monitors offer multiple overdrive levels, and finding the right balance between smear and inverse ghosting requires testing both this tool and the Overdrive Test.',
    },
    {
      q: 'Does black smear affect normal use?',
      a: 'It depends on the content. Black smear is most visible in dark scenes in games and films, particularly content with slow camera pans across dark environments such as space scenes, night scenes, or dark dungeon environments. It is less noticeable in bright or mixed-tone content. For gaming with fast action, other forms of ghosting may be more disruptive. For cinematic gaming or film viewing on a VA panel, dark smear can be a noticeable quality issue.',
    },
    {
      q: 'How does VA black smear compare to IPS ghosting?',
      a: 'IPS panels can exhibit their own form of ghosting, typically appearing as a brighter or oversaturated overshoot when overdrive is enabled. IPS ghosting is most visible with high-contrast content rather than dark-on-dark content. VA smear occurs specifically in dark transitions and produces a faint lighter trail rather than a bright overshoot. The two artifacts are different in character, with IPS overshoot being more intrusive in general gaming content and VA smear being more intrusive in dark cinematic content.',
    },
    {
      q: 'Should I avoid VA panels because of black smear?',
      a: 'Not necessarily. VA panels offer the best contrast ratios of any LCD technology, producing deep blacks that IPS panels cannot match. For cinema, dark atmosphere games, and content where black depth matters, a well-tuned VA panel often looks better overall despite the smear. Whether smear is acceptable depends on your use case. If you primarily play fast-paced competitive games in dark environments, IPS or OLED may suit you better. If you value contrast and deep blacks for mixed use, VA panels remain a strong choice.',
    },
  ],
  pt: [
    {
      q: 'O que e a mancha preta num monitor?',
      a: 'A mancha preta e um artefacto de movimento onde objetos escuros em movimento lento num fundo escuro deixam um rastro mais claro ou borrado atras deles. E causada por tempos de transicao de pixel muito lentos em mudancas de cor escuro-para-escuro, onde o pixel nao consegue completar a sua transicao antes da chegada do proximo fotograma. O resultado e um rastro de ghosting fraco visivel atras do objeto em movimento. A mancha preta esta mais fortemente associada com a tecnologia de painel VA.',
    },
    {
      q: 'Qual tipo de painel de monitor tem a pior mancha preta?',
      a: 'Os paineis VA (alinhamento vertical) sao os mais afetados. Os paineis VA atingem excelentes razoes de contraste e pretos profundos, mas as suas moleculas de cristal liquido movem-se lentamente durante as transicoes escuro-para-escuro. Embora os paineis VA tenham bom desempenho para conteudo brilhante e tenham transicoes rapidas de claro-para-escuro, a velocidade escuro-para-escuro e a sua principal fraqueza. Os paineis IPS tem tempos de resposta mais uniformes em gamas tonais e exibem menos mancha em conteudo escuro. Os paineis OLED sao efetivamente imunes a mancha devido aos seus tempos de resposta de microssegundo.',
    },
    {
      q: 'Como uso este teste de mancha preta?',
      a: 'Observe a barra escura a mover-se pelo fundo preto. Procure um rastro ou rastro mais claro atras da barra em vez de uma borda nitida e limpa. Defina a barra para Muito Escuro e a velocidade para Lento para o teste mais sensivel, pois isto cria a exata transicao escuro-para-escuro de baixo contraste com que os paineis VA lutam. Escureca a iluminacao da sala e deixe os seus olhos ajustarem antes de testar. Os monitores IPS e OLED tipicamente nao mostrarao mancha visivel mesmo nas definicoes mais sensiveis.',
    },
    {
      q: 'A mancha preta e o mesmo que o ghosting?',
      a: 'A mancha preta e um tipo especifico de ghosting. O ghosting geral refere-se a qualquer imagem residual a seguir um objeto em movimento, e pode aparecer como um eco mais brilhante ou mais escuro atras ou a frente do objeto. A mancha preta refere-se especificamente ao ghosting em regioes tonais escuras causado por transicoes lentas escuro-para-escuro. Os testes padrao de desfoque de movimento que usam barras brancas em fundos pretos podem perder completamente a mancha do painel VA, porque os paineis VA lidam rapidamente com transicoes brilhantes. Este teste isola especificamente o problema de transicao escura.',
    },
    {
      q: 'O overdrive pode reduzir a mancha preta?',
      a: 'Sim, embora com limitacoes. O overdrive aplica tensao extra para acelerar as transicoes de pixel, o que pode reduzir a mancha escuro-para-escuro nos paineis VA. No entanto, os paineis VA frequentemente requerem overdrive muito agressivo para atravessar as transicoes escuras, o que pode causar ghosting inverso no conteudo mais brilhante. Muitos fabricantes de monitores VA sintonizam o overdrive de forma conservadora para evitar halos, o que deixa alguma mancha presente. Alguns monitores oferecem varios niveis de overdrive, e encontrar o equilibrio certo entre mancha e ghosting inverso requer testar tanto esta ferramenta como o Teste de Overdrive.',
    },
    {
      q: 'A mancha preta afeta o uso normal?',
      a: 'Depende do conteudo. A mancha preta e mais visivel em cenas escuras em jogos e filmes, particularmente conteudo com movimentos lentos de camera por ambientes escuros como cenas espaciais, cenas noturnas, ou ambientes de masmorras escuros. E menos notavel em conteudo brilhante ou de tons misturados. Para jogos com acao rapida, outras formas de ghosting podem ser mais perturbadoras. Para jogos cinematicos ou visualizacao de filmes num painel VA, a mancha escura pode ser um problema de qualidade notavel.',
    },
    {
      q: 'Como se compara a mancha preta VA com o ghosting IPS?',
      a: 'Os paineis IPS podem exibir a sua propria forma de ghosting, tipicamente aparecendo como um overshoot mais brilhante ou supersaturado quando o overdrive esta ativado. O ghosting IPS e mais visivel com conteudo de alto contraste em vez de conteudo escuro-sobre-escuro. A mancha VA ocorre especificamente em transicoes escuras e produz um rastro mais claro e fraco em vez de um overshoot brilhante. Os dois artefactos sao diferentes em carater, com o overshoot IPS sendo mais intrusivo no conteudo de gaming geral e a mancha VA sendo mais intrusiva no conteudo cinematico escuro.',
    },
    {
      q: 'Devo evitar paineis VA por causa da mancha preta?',
      a: 'Nao necessariamente. Os paineis VA oferecem as melhores razoes de contraste de qualquer tecnologia LCD, produzindo pretos profundos que os paineis IPS nao conseguem corresponder. Para cinema, jogos de atmosfera escura e conteudo onde a profundidade de preto importa, um painel VA bem sintonizado frequentemente parece melhor no geral apesar da mancha. Se a mancha e aceitavel depende do caso de uso. Se joga principalmente jogos competitivos de ritmo rapido em ambientes escuros, IPS ou OLED podem adequar-se melhor. Se valoriza o contraste e os pretos profundos para uso misto, os paineis VA continuam a ser uma escolha forte.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What causes black smear?</h2>
      <p>
        VA panels achieve their high contrast ratios by using liquid crystal molecules that block light
        very effectively when perpendicular to the panel substrate. However, rotating these molecules
        between different dark states requires more force than transitioning through bright states. When
        a pixel needs to move from one dark shade to another, the crystals move slowly, taking several
        milliseconds longer than a bright transition on the same panel. If the next frame arrives before
        the transition completes, the residual intermediate colour is displayed for that frame, producing
        a visible wake behind the moving object.
      </p>

      <h2 className="text-lg font-bold text-fg">How to identify smear with this test</h2>
      <p>
        Set the bar to Very Dark and speed to Slow, then watch the trailing edge of the bar as it moves
        across the black background. On an affected panel, a faint lighter smear extends behind the bar,
        wider than the bar itself and fading as it trails further back. On a clean panel or OLED display,
        the bar appears sharp with no visible tail. Increasing the bar brightness to Dark or Medium makes
        the artifact easier to spot if your panel has only mild smear. A dimly lit room is essential as
        the artifact is subtle and easily masked by ambient glare.
      </p>

      <h2 className="text-lg font-bold text-fg">Why standard motion tests miss this</h2>
      <p>
        Most motion blur and ghosting tests use white objects on black backgrounds. VA panels transition
        quickly from dark to bright, so high-contrast tests often show excellent results on VA panels
        that still exhibit significant dark smear in real content. This test deliberately uses
        low-contrast dark-on-dark content to expose the specific transition type that causes problems in
        dark game scenes and cinematic content. Running both this test and a high-contrast motion test
        gives the most complete picture of a panel&apos;s response time characteristics.
      </p>

      <h2 className="text-lg font-bold text-fg">What to do if your monitor shows smear</h2>
      <p>
        First, check whether your monitor has multiple overdrive settings and try a more aggressive
        level. Some VA monitors ship with conservative overdrive tuning that leaves dark smear reduction
        headroom. Be aware that increasing overdrive on VA panels can introduce inverse ghosting on
        brighter content, so test both. If your monitor is showing severe smear that cannot be resolved
        through overdrive adjustment, this is a hardware characteristic of the panel and cannot be fixed
        in software. For content where dark smear is a serious concern, OLED or a fast IPS display
        would be a better fit.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que causa a mancha preta?</h2>
      <p>
        Os paineis VA atingem as suas altas razoes de contraste usando moleculas de cristal liquido que
        bloqueiam a luz muito eficazmente quando perpendiculares ao substrato do painel. No entanto,
        rodar estas moleculas entre diferentes estados escuros requer mais forca do que transitar por
        estados brilhantes. Quando um pixel precisa de mover de uma sombra escura para outra, os cristais
        movem-se lentamente, demorando varios milissegundos mais do que uma transicao brilhante no mesmo
        painel. Se o proximo fotograma chegar antes de a transicao se completar, a cor intermerdia residual
        e exibida para esse fotograma, produzindo um rastro visivel atras do objeto em movimento.
      </p>

      <h2 className="text-lg font-bold text-fg">Como identificar a mancha com este teste</h2>
      <p>
        Defina a barra para Muito Escuro e a velocidade para Lento, depois observe a borda traseira da
        barra enquanto se move pelo fundo preto. Num painel afetado, uma mancha mais clara e fraca
        estende-se atras da barra, mais larga do que a propria barra e a desvanecer enquanto segue mais
        atras. Num painel limpo ou ecra OLED, a barra aparece nitida sem rastro visivel. Aumentar o
        brilho da barra para Escuro ou Medio torna o artefacto mais facil de detetar se o painel tem
        apenas mancha ligeira. Uma sala com pouca iluminacao e essencial pois o artefacto e subtil e
        facilmente mascarado pelo brilho ambiente.
      </p>

      <h2 className="text-lg font-bold text-fg">Por que os testes de movimento padrao perdem isto</h2>
      <p>
        A maioria dos testes de desfoque de movimento e ghosting usa objetos brancos em fundos pretos.
        Os paineis VA transitam rapidamente de escuro para brilhante, por isso os testes de alto contraste
        frequentemente mostram excelentes resultados em paineis VA que ainda exibem mancha escura
        significativa em conteudo real. Este teste usa deliberadamente conteudo escuro-sobre-escuro de
        baixo contraste para expor o tipo de transicao especifico que causa problemas em cenas de jogo
        escuras e conteudo cinematico. Executar tanto este teste como um teste de movimento de alto
        contraste da o quadro mais completo das caracteristicas de tempo de resposta de um painel.
      </p>

      <h2 className="text-lg font-bold text-fg">O que fazer se o monitor mostrar mancha</h2>
      <p>
        Primeiro, verifique se o monitor tem varias definicoes de overdrive e experimente um nivel mais
        agressivo. Alguns monitores VA sao enviados com sintonizacao conservadora de overdrive que deixa
        margem de reducao de mancha escura. Tenha em conta que aumentar o overdrive nos paineis VA pode
        introduzir ghosting inverso no conteudo mais brilhante, por isso teste ambos. Se o monitor estiver
        a mostrar mancha severa que nao pode ser resolvida atraves do ajuste de overdrive, esta e uma
        caracteristica de hardware do painel e nao pode ser corrigida por software. Para conteudo onde a
        mancha escura e uma preocupacao grave, OLED ou um ecra IPS rapido seriam uma melhor opcao.
      </p>
    </>
  ),
}

export default async function BlackSmearTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('black-smear-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <BlackSmearTest />
    </ToolPageLayout>
  )
}
