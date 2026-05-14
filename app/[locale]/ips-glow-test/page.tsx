import type { Metadata } from 'next'
import { Eye } from 'lucide-react'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('ips-glow-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is IPS glow?',
      a: 'IPS glow is a soft, hazy brightness that appears in the corners of IPS panel monitors. It is caused by the way IPS panels transmit backlight through the liquid crystal layer at different efficiencies depending on the viewing angle. Unlike backlight bleed, IPS glow is an inherent characteristic of IPS panel technology and is present to some degree on virtually every IPS display. It is most visible in dark conditions and at off-axis viewing angles.',
    },
    {
      q: 'How is IPS glow different from backlight bleed?',
      a: 'The key difference is how each behaves when you change your viewing angle. IPS glow shifts in position and changes in brightness as you move your head, following your viewing angle. Backlight bleed is fixed and stays at the same location on the screen regardless of where you sit or tilt your head. If the bright corners disappear or move when you shift position, it is likely IPS glow. If the bright areas remain fixed regardless of your position, it is likely backlight bleed.',
    },
    {
      q: 'How do I perform the IPS glow test?',
      a: 'Enter fullscreen and dim your room lights. First, view the screen from directly in front at your normal sitting distance. Note the position and intensity of any bright areas in the corners. Then lean slowly to one side and watch the corners change. Lean forward and then backward. If the glow shifts or intensifies as you move, it is IPS glow. If nothing changes with your position, it is more consistent with backlight bleed.',
    },
    {
      q: 'Is IPS glow a manufacturing defect?',
      a: 'No. IPS glow is a characteristic of IPS panel technology, not a defect. All IPS panels exhibit some degree of glow. Manufacturers do not consider IPS glow a fault and will generally not replace a monitor because of it. The amount of glow varies between individual panels and monitor models. Some premium IPS panels have reduced glow through better panel engineering and anti-reflective coatings, but it cannot be eliminated entirely.',
    },
    {
      q: 'Can IPS glow be reduced?',
      a: 'You can reduce the visibility of IPS glow by reducing backlight brightness, increasing ambient room lighting slightly (which improves the signal-to-noise ratio for dark areas), and ensuring you are sitting directly in front of the monitor at the correct distance. Anti-glare screen protectors can sometimes reduce perceived glow. However, none of these fully eliminate IPS glow as it is inherent to the panel design.',
    },
    {
      q: 'Does IPS glow affect image quality during normal use?',
      a: 'For most normal tasks like web browsing, office work, and photography in well-lit conditions, IPS glow is not noticeable. It becomes most apparent when watching films in a dark room, playing games with dark scenes, or doing any work that involves dark interface elements in low ambient light. If this type of use is common for you, a VA panel (which has near-zero glow due to its high native contrast) or an OLED panel may be a better choice.',
    },
    {
      q: 'Why do some IPS monitors have more glow than others?',
      a: 'The amount of IPS glow varies with panel quality, anti-reflective coating, backlight type, and monitor construction. Edge-lit monitors (where LEDs are positioned along the edges) tend to have more glow than full-array local dimming (FALD) monitors. The viewing distance also matters: glow is less visible when you sit closer. Some monitor brands and models are known for lower-than-average IPS glow due to tighter panel selection during manufacturing.',
    },
  ],
  pt: [
    {
      q: 'O que e o brilho IPS?',
      a: 'O brilho IPS e um brilho suave e nebuloso que aparece nos cantos dos monitores com painel IPS. E causado pela forma como os paineis IPS transmitem a retroiluminacao atraves da camada de cristal liquido com diferentes eficiencias dependendo do angulo de visualizacao. Ao contrario do vazamento de luz de fundo, o brilho IPS e uma caracteristica inerente da tecnologia de painel IPS e esta presente em algum grau em praticamente todos os ecras IPS. E mais visivel em condicoes de pouca luz e em angulos de visualizacao fora do eixo.',
    },
    {
      q: 'Qual e a diferenca entre o brilho IPS e o vazamento de luz de fundo?',
      a: 'A diferenca principal e como cada um se comporta quando muda o angulo de visualizacao. O brilho IPS muda de posicao e intensidade conforme move a cabeca, seguindo o angulo de visualizacao. O vazamento de luz de fundo e fixo e permanece na mesma localizacao no ecra independentemente de onde se senta ou inclina a cabeca. Se os cantos brilhantes desaparecem ou mudam quando muda de posicao, e provavel que seja brilho IPS. Se as areas brilhantes permanecem fixas independentemente da posicao, e mais provavel que seja vazamento de luz de fundo.',
    },
    {
      q: 'Como realizo o teste de brilho IPS?',
      a: 'Entre em tela cheia e reduza as luzes da sala. Primeiro, veja o ecra diretamente da frente a distancia normal. Note a posicao e intensidade de quaisquer areas brilhantes nos cantos. Depois incline-se lentamente para um lado e observe os cantos mudarem. Incline-se para a frente e depois para tras. Se o brilho se desloca ou intensifica conforme se move, e brilho IPS. Se nada muda com a sua posicao, e mais consistente com vazamento de luz de fundo.',
    },
    {
      q: 'O brilho IPS e um defeito de fabrico?',
      a: 'Nao. O brilho IPS e uma caracteristica da tecnologia de painel IPS, nao um defeito. Todos os paineis IPS exibem algum grau de brilho. Os fabricantes nao consideram o brilho IPS uma falha e geralmente nao substituirao um monitor por causa dele. A quantidade de brilho varia entre paineis individuais e modelos de monitor. Alguns paineis IPS premium tem brilho reduzido atraves de melhor engenharia de painel e revestimentos anti-reflexo, mas nao pode ser completamente eliminado.',
    },
    {
      q: 'O brilho IPS pode ser reduzido?',
      a: 'Pode reduzir a visibilidade do brilho IPS reduzindo o brilho da retroiluminacao, aumentando ligeiramente a iluminacao ambiente da sala (o que melhora a relacao sinal-ruido para areas escuras), e garantindo que esta sentado diretamente em frente ao monitor a distancia correta. As capas de ecra anti-brilho podem por vezes reduzir o brilho percebido. No entanto, nenhuma destas solucoes elimina completamente o brilho IPS pois e inerente ao design do painel.',
    },
    {
      q: 'O brilho IPS afeta a qualidade de imagem durante o uso normal?',
      a: 'Para a maioria das tarefas normais como navegacao web, trabalho de escritorio e fotografia em condicoes bem iluminadas, o brilho IPS nao e notavel. Torna-se mais aparente ao ver filmes numa sala escura, jogar com cenas escuras, ou fazer qualquer trabalho que envolva elementos de interface escuros com pouca luz ambiente. Se este tipo de uso e comum para si, um painel VA (que tem brilho praticamente zero devido ao seu alto contraste nativo) ou um painel OLED pode ser uma escolha melhor.',
    },
    {
      q: 'Por que alguns monitores IPS tem mais brilho do que outros?',
      a: 'A quantidade de brilho IPS varia com a qualidade do painel, revestimento anti-reflexo, tipo de retroiluminacao e construcao do monitor. Os monitores com iluminacao de bordo (onde os LEDs estao posicionados ao longo das bordas) tendem a ter mais brilho do que os monitores com dimming local de matriz completa (FALD). A distancia de visualizacao tambem importa: o brilho e menos visivel quando se senta mais perto. Algumas marcas e modelos de monitores sao conhecidos por brilho IPS abaixo da media devido a selecao mais rigorosa de paineis durante o fabrico.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">Understanding IPS glow</h2>
      <p>
        IPS glow is a soft brightness that appears in the corners of IPS panels when displaying dark content,
        particularly visible in low ambient light conditions. It originates from the way IPS panel technology
        works: the liquid crystal molecules in an IPS panel are arranged parallel to the glass substrate,
        which is excellent for wide viewing angles and colour accuracy but causes the backlight to transmit
        more efficiently at off-axis angles than at dead-centre. The result is a characteristic brightening
        in the corners that changes with viewing angle.
      </p>

      <h2 className="text-lg font-bold text-fg">The viewing angle test</h2>
      <p>
        The defining characteristic of IPS glow is that it moves with your viewing angle. Enter fullscreen
        with the lights dimmed. Start by looking straight at the screen from your normal position. Slowly lean
        to the left or right. If the bright areas in the corners shift or change in intensity as you move, that
        is IPS glow. Now stay in the same position and instead tilt the monitor itself slightly backward or
        forward. Again watch the corners. IPS glow will change with any change to the viewing angle. Backlight
        bleed will not.
      </p>

      <h2 className="text-lg font-bold text-fg">IPS glow versus backlight bleed at a glance</h2>
      <p>
        The practical distinction matters for warranty purposes. Backlight bleed is a potential manufacturing
        fault that varies between units and can be severe enough to warrant a replacement. IPS glow is an
        inherent panel technology characteristic that affects all IPS displays. If you contact a manufacturer
        about corner brightness and they ask you to perform a viewing angle test, this is what they are checking
        for. Being able to describe whether the brightness is angle-dependent helps you communicate clearly
        about which issue you are experiencing.
      </p>

      <h2 className="text-lg font-bold text-fg">Panel alternatives if glow is a concern</h2>
      <p>
        If IPS glow is a consistent problem for your workflow, the main alternatives are VA panels and OLED
        panels. VA panels have significantly higher native contrast ratios (typically 3000:1 to 6000:1 compared
        to 1000:1 for IPS) and very little corner glow. They tend to show some motion blur in dark scenes due
        to slower pixel response times. OLED panels have effectively infinite contrast because each pixel
        produces its own light, with no backlight at all. OLED is the most glow-free option but comes with
        burn-in risk for static content and is significantly more expensive.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Compreender o brilho IPS</h2>
      <p>
        O brilho IPS e um brilho suave que aparece nos cantos dos paineis IPS ao exibir conteudo escuro,
        particularmente visivel em condicoes de pouca luz ambiente. Origina-se da forma como a tecnologia de
        painel IPS funciona: as moleculas de cristal liquido num painel IPS estao dispostas paralelamente ao
        substrato de vidro, o que e excelente para angulos de visualizacao amplos e precisao de cor, mas faz
        com que a retroiluminacao seja transmitida de forma mais eficiente em angulos fora do eixo do que
        diretamente no centro. O resultado e um brilho caracteristico nos cantos que muda com o angulo de
        visualizacao.
      </p>

      <h2 className="text-lg font-bold text-fg">O teste de angulo de visualizacao</h2>
      <p>
        A caracteristica definitiva do brilho IPS e que se move com o angulo de visualizacao. Entre em tela
        cheia com as luzes reduzidas. Comece por olhar diretamente para o ecra a partir da sua posicao normal.
        Incline-se lentamente para a esquerda ou direita. Se as areas brilhantes nos cantos se deslocam ou
        mudam de intensidade conforme se move, isso e brilho IPS. Agora fique na mesma posicao e em vez disso
        incline o proprio monitor ligeiramente para tras ou para a frente. Observe novamente os cantos. O
        brilho IPS mudara com qualquer mudanca no angulo de visualizacao. O vazamento de luz de fundo nao.
      </p>

      <h2 className="text-lg font-bold text-fg">Brilho IPS versus vazamento de luz de fundo em resumo</h2>
      <p>
        A distincao pratica importa para fins de garantia. O vazamento de luz de fundo e uma potencial falha
        de fabrico que varia entre unidades e pode ser suficientemente grave para justificar substituicao. O
        brilho IPS e uma caracteristica inerente da tecnologia de painel que afeta todos os ecras IPS. Se
        contactar um fabricante sobre brilho nos cantos e eles pedirem para realizar um teste de angulo de
        visualizacao, e isto que estao a verificar. Ser capaz de descrever se o brilho depende do angulo
        ajuda a comunicar claramente sobre qual o problema que esta a experienciar.
      </p>

      <h2 className="text-lg font-bold text-fg">Alternativas de painel se o brilho for uma preocupacao</h2>
      <p>
        Se o brilho IPS e um problema consistente para o seu fluxo de trabalho, as principais alternativas
        sao os paineis VA e OLED. Os paineis VA tem razoes de contraste nativo significativamente mais altas
        (tipicamente 3000:1 a 6000:1 em comparacao com 1000:1 para IPS) e muito pouco brilho nos cantos.
        Tendem a mostrar algum desfoque de movimento em cenas escuras devido a tempos de resposta de pixel
        mais lentos. Os paineis OLED tem contraste efetivamente infinito porque cada pixel produz a sua
        propria luz, sem retroiluminacao. O OLED e a opcao com menos brilho mas vem com risco de queima para
        conteudo estatico e e significativamente mais caro.
      </p>
    </>
  ),
}

const HINT: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Viewing angle test.',
    body: 'After entering fullscreen, slowly lean left and right to watch whether the corner brightness shifts with your position. IPS glow moves with you; backlight bleed stays fixed.',
  },
  pt: {
    title: 'Teste de angulo de visualizacao.',
    body: 'Apos entrar em tela cheia, incline-se lentamente para a esquerda e direita para observar se o brilho dos cantos se desloca com a sua posicao. O brilho IPS move-se consigo; o vazamento de luz de fundo permanece fixo.',
  },
}

export default async function IPSGlowTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('ips-glow-test', locale)
  const hint = HINT[locale] ?? HINT.en
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <>
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
          <Eye size={16} className="mt-0.5 shrink-0 text-slate-500" />
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">{hint.title}</span> {hint.body}
          </p>
        </div>
        <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
      </>
    </ToolPageLayout>
  )
}
