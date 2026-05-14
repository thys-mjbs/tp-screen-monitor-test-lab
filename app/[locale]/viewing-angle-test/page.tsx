import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ViewingAngleTest } from '@/components/tools/ViewingAngleTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('viewing-angle-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does the viewing angle test check?',
      a: 'The test displays a panel divided into reference zones: a dark quadrant, a light quadrant, a mid-grey quadrant, a gradient, and a white centre square. By viewing the panel from different angles (leaning left, right, forward, and backward) you can observe how much the brightness and colour of each zone shifts with your viewing position. Panels with wide viewing angles show little change; narrow viewing angle panels show significant colour and brightness shifts.',
    },
    {
      q: 'How do IPS, VA, and TN panels compare for viewing angles?',
      a: 'IPS panels have the widest viewing angles, typically rated at 178 degrees horizontal and vertical with minimal colour shift. VA panels have good horizontal angles but can show noticeable brightness and gamma shifts at moderate vertical angles, particularly in the lower half of the image. TN panels have the narrowest viewing angles, with significant colour inversion and contrast loss when viewed at off-axis angles, particularly vertically. OLED panels generally match or exceed IPS panels for viewing angle performance.',
    },
    {
      q: 'What is colour shift and how does this test reveal it?',
      a: 'Colour shift is a change in the perceived colour or tint of the display content when viewed from an off-axis angle. On TN panels, grey areas often shift toward yellow or green when viewed from above and toward blue when viewed from below. On VA panels, dark tones can appear to fade out or crush at off-axis angles. The gradient quadrant in the test is particularly useful for revealing colour shift because changes in the appearance of grey tones are immediately visible.',
    },
    {
      q: 'Why does my VA panel look different from different heights?',
      a: 'VA panels have an asymmetric viewing angle characteristic where horizontal angles are wider than vertical angles. The gamma curve of VA panels also shifts more dramatically at vertical off-angles than IPS panels. This means that dark tones can appear to grey out or lose detail when viewed from above or below the panel centreline. This is a known characteristic of VA technology. Mounting the monitor at the correct height so your eyes are level with the upper third of the screen reduces this effect.',
    },
    {
      q: 'Does monitor height affect viewing angle performance?',
      a: 'Yes. The position of your eyes relative to the panel centreline determines the effective viewing angle. Sitting with your eyes level with or slightly above the monitor centre is ideal for most panels. Sitting well below the monitor centre (common when monitors are mounted high on a wall or stand) dramatically increases the effective vertical viewing angle, which can cause visible colour and brightness shifts on VA and TN panels.',
    },
    {
      q: 'Can viewing angle be improved on a TN or VA panel?',
      a: 'Hardware solutions include using a panel with a wider viewing angle specification (i.e., switching to IPS or OLED). Some monitors include anti-glare coatings that reduce the visibility of off-axis colour shift by diffusing the surface reflection. Software cannot improve the fundamental viewing angle characteristics of the panel technology. The most practical fix is to ensure you sit at your monitor\'s optimal viewing position rather than at a significant off-axis angle.',
    },
  ],
  pt: [
    {
      q: 'O que verifica o teste de angulo de visao?',
      a: 'O teste exibe um painel dividido em zonas de referencia: um quadrante escuro, um quadrante claro, um quadrante cinzento medio, um gradiente e um quadrado branco central. Ao visualizar o painel de diferentes angulos (inclinando para a esquerda, direita, frente e atras) pode observar quanto o brilho e a cor de cada zona muda com a posicao de visualizacao. Os paineis com amplos angulos de visao mostram pouca mudanca; os paineis com angulo de visao estreito mostram mudancas significativas de cor e brilho.',
    },
    {
      q: 'Como se comparam os paineis IPS, VA e TN em angulos de visao?',
      a: 'Os paineis IPS tem os angulos de visao mais amplos, tipicamente classificados a 178 graus horizontal e vertical com minima mudanca de cor. Os paineis VA tem bons angulos horizontais mas podem mostrar mudancas notaveis de brilho e gama em angulos verticais moderados, particularmente na metade inferior da imagem. Os paineis TN tem os angulos de visao mais estreitos, com inversao significativa de cor e perda de contraste quando vistos em angulos fora do eixo, particularmente verticalmente. Os paineis OLED geralmente correspondem ou superam os paineis IPS em desempenho de angulo de visao.',
    },
    {
      q: 'O que e a mudanca de cor e como este teste a revela?',
      a: 'A mudanca de cor e uma alteracao na cor ou tonalidade percebida do conteudo do ecra quando visto de um angulo fora do eixo. Nos paineis TN, as areas cinzentas frequentemente deslocam-se para amarelo ou verde quando vistos de cima e para azul quando vistos de baixo. Nos paineis VA, os tons escuros podem parecer desvanecer-se ou esmagar em angulos fora do eixo. O quadrante de gradiente no teste e particularmente util para revelar a mudanca de cor porque as alteracoes na aparencia dos tons cinzentos sao imediatamente visiveis.',
    },
    {
      q: 'Por que o meu painel VA parece diferente a diferentes alturas?',
      a: 'Os paineis VA tem uma caracteristica de angulo de visao assimetrica onde os angulos horizontais sao mais amplos do que os verticais. A curva de gama dos paineis VA tambem muda mais dramaticamente em angulos verticais fora do eixo do que os paineis IPS. Isto significa que os tons escuros podem parecer desvanecer-se ou perder detalhe quando vistos de cima ou de baixo da linha central do painel. Esta e uma caracteristica conhecida da tecnologia VA. Montar o monitor a altura correta para que os olhos fiquem ao nivel do terco superior do ecra reduz este efeito.',
    },
    {
      q: 'A altura do monitor afeta o desempenho do angulo de visao?',
      a: 'Sim. A posicao dos olhos em relacao a linha central do painel determina o angulo de visao efetivo. Sentar com os olhos ao nivel ou ligeiramente acima do centro do monitor e ideal para a maioria dos paineis. Sentar bem abaixo do centro do monitor (comum quando os monitores estao montados a grande altura numa parede ou suporte) aumenta dramaticamente o angulo de visao vertical efetivo, o que pode causar mudancas visiveis de cor e brilho em paineis VA e TN.',
    },
    {
      q: 'O angulo de visao pode ser melhorado num painel TN ou VA?',
      a: 'As solucoes de hardware incluem usar um painel com uma especificacao de angulo de visao mais ampla (ou seja, mudar para IPS ou OLED). Alguns monitores incluem revestimentos anti-reflexo que reduzem a visibilidade da mudanca de cor fora do eixo ao difundir o reflexo da superficie. O software nao pode melhorar as caracteristicas fundamentais de angulo de visao da tecnologia do painel. A correcao mais pratica e garantir que se senta na posicao de visualizacao ideal do monitor em vez de num angulo significativamente fora do eixo.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How to use the viewing angle test</h2>
      <p>
        Enter fullscreen and sit at your normal viewing position directly in front of the monitor. Note the
        appearance of all four quadrants and the centre reference. Then slowly lean to the left and right,
        watching how the dark and gradient quadrants change. Lean forward and backward. The most informative
        observation is how much the dark quadrant shifts in colour or brightness, and whether the gradient
        maintains its smooth appearance or develops a colour cast. A well-performing wide-angle panel will
        show minimal change across moderate off-axis positions.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding panel technology differences</h2>
      <p>
        The viewing angle characteristics of your panel are determined by the panel technology chosen during
        manufacturing and cannot be changed. IPS panels achieve wide viewing angles by aligning the liquid
        crystal molecules parallel to the glass substrate, which produces consistent light transmission across
        a wide range of angles. VA panels use a vertical alignment that produces higher contrast at dead centre
        but shifts more dramatically at off-axis positions. TN panels use a twisted nematic alignment that is
        most efficient at narrow viewing angles, making them the most susceptible to colour shift.
      </p>

      <h2 className="text-lg font-bold text-fg">What the reference quadrants reveal</h2>
      <p>
        The dark quadrant is most sensitive to off-axis brightness changes, particularly on VA panels where
        dark tones can wash out at vertical angles. The light quadrant shows whether highlight rendering
        remains consistent. The mid-grey quadrant, like the grey screen test, is sensitive to luminance
        variation and reveals the overall tonal shift with angle. The gradient quadrant is the most visually
        informative because colour shifts in gradient tones are immediately apparent. The white centre
        reference square provides a neutral brightness anchor for comparing the overall tonal character of
        each quadrant.
      </p>

      <h2 className="text-lg font-bold text-fg">Practical implications of viewing angle</h2>
      <p>
        Viewing angle matters most for shared viewing situations such as presentations, collaborative work,
        or watching content with others. It also affects comfort when you need to look at the screen from
        a slightly off-centre position during normal use. For single-user desktop work where you always sit
        directly in front of the monitor, narrow viewing angles are less of a practical concern. For
        photographers, video editors, or anyone doing colour-accurate work, wide viewing angles are
        important to ensure the colours you see from your working position match what others will see.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como usar o teste de angulo de visao</h2>
      <p>
        Entre em tela cheia e sente-se na posicao de visualizacao normal diretamente em frente ao monitor.
        Note a aparencia de todos os quatro quadrantes e da referencia central. Depois incline-se lentamente
        para a esquerda e para a direita, observando como os quadrantes escuro e de gradiente mudam. Incline
        para frente e para atras. A observacao mais informativa e o quanto o quadrante escuro muda em cor
        ou brilho, e se o gradiente mantem a sua aparencia suave ou desenvolve um cast de cor. Um painel de
        grande angulo com bom desempenho mostrara minima mudanca em posicoes moderadas fora do eixo.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender as diferencas de tecnologia de painel</h2>
      <p>
        As caracteristicas de angulo de visao do painel sao determinadas pela tecnologia de painel escolhida
        durante o fabrico e nao podem ser alteradas. Os paineis IPS atingem angulos de visao amplos alinhando
        as moleculas de cristal liquido paralelamente ao substrato de vidro, o que produz transmissao de luz
        consistente num amplo intervalo de angulos. Os paineis VA usam um alinhamento vertical que produz
        maior contraste no centro perfeito mas muda mais dramaticamente em posicoes fora do eixo. Os paineis
        TN usam um alinhamento nematico torcido que e mais eficiente em angulos de visao estreitos, tornando-os
        os mais suscetiveis a mudanca de cor.
      </p>

      <h2 className="text-lg font-bold text-fg">O que os quadrantes de referencia revelam</h2>
      <p>
        O quadrante escuro e o mais sensivel a mudancas de brilho fora do eixo, particularmente em paineis VA
        onde os tons escuros podem desaparecer em angulos verticais. O quadrante claro mostra se a renderizacao
        dos realces permanece consistente. O quadrante cinzento medio, como o teste de tela cinzenta, e sensivel
        a variacao de luminancia e revela a mudanca tonal geral com o angulo. O quadrante de gradiente e o mais
        visualmente informativo porque as mudancas de cor nos tons de gradiente sao imediatamente aparentes. O
        quadrado de referencia branco central fornece uma ancora de brilho neutra para comparar o carater tonal
        geral de cada quadrante.
      </p>

      <h2 className="text-lg font-bold text-fg">Implicacoes praticas do angulo de visao</h2>
      <p>
        O angulo de visao importa mais em situacoes de visualizacao partilhada, como apresentacoes, trabalho
        colaborativo ou assistir a conteudo com outras pessoas. Tambem afeta o conforto quando precisa de olhar
        para o ecra de uma posicao ligeiramente fora do centro durante o uso normal. Para trabalho de secretaria
        de utilizador unico onde se senta sempre diretamente em frente ao monitor, os angulos de visao estreitos
        sao menos uma preocupacao pratica. Para fotografos, editores de video ou qualquer pessoa a fazer trabalho
        de cor precisa, os angulos de visao amplos sao importantes para garantir que as cores que ve na sua
        posicao de trabalho correspondam ao que os outros verao.
      </p>
    </>
  ),
}

export default async function ViewingAngleTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('viewing-angle-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ViewingAngleTest />
    </ToolPageLayout>
  )
}
