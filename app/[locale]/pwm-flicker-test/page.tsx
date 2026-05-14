import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { PwmFlickerTest } from '@/components/tools/PwmFlickerTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('pwm-flicker-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is PWM backlight flicker?',
      a: 'PWM (pulse width modulation) is a technique many LCD monitors use to control brightness by rapidly switching the backlight on and off hundreds of times per second. At full brightness the backlight stays on continuously. At 50% brightness it switches on and off equally. The speed of switching is the PWM frequency, typically between 200 Hz and 1,000 Hz on modern displays. The human eye cannot consciously detect flicker above about 60 Hz, but some people experience eye strain and headaches at frequencies up to 200 Hz or higher even without consciously seeing it.',
    },
    {
      q: 'Can PWM flicker cause eye strain?',
      a: 'Research suggests that PWM flicker at frequencies below roughly 200 Hz can cause eye strain, headaches, and visual fatigue in sensitive individuals even when not consciously perceived as flickering. The sensitivity threshold varies significantly between people. At lower brightness settings the on-off ratio becomes more extreme, increasing the intensity of the modulation. People who are sensitive to PWM often report significantly less fatigue when switching to a DC-dimmed display.',
    },
    {
      q: 'How do I use this PWM flicker test?',
      a: 'The panel is split into a flickering left side and a steady grey reference on the right. Both sides are matched in average brightness. Use the controls to adjust the flicker rate and the brightness of the off-phase. This visualises what PWM dimming looks like at lower, visible frequencies. For detecting your own monitor\'s PWM, use a smartphone camera pointed at the screen and reduce brightness. Scrolling dark bands in the camera feed indicate PWM.',
    },
    {
      q: 'How do I test my monitor for PWM using a camera?',
      a: 'Point your smartphone camera at your monitor screen and reduce screen brightness to 30 to 70 percent. Watch the live camera viewfinder for horizontal dark bands scrolling through the image. If bands are visible, your monitor uses PWM dimming. The bands appear because the camera\'s shutter creates a beat pattern with the PWM cycle. A monitor using DC dimming shows no banding in the camera feed at any brightness level.',
    },
    {
      q: 'What is the difference between PWM and DC dimming?',
      a: 'DC dimming controls brightness by reducing the actual voltage supplied to the backlight so it stays on continuously at lower power. PWM keeps the backlight at full power but switches it on and off rapidly, creating the impression of dimness through timing. DC dimming is preferred for eye comfort but is technically harder to implement uniformly. Many premium monitors and OLED displays now offer DC dimming or very high frequency PWM above 1,000 Hz to reduce eye strain.',
    },
    {
      q: 'Do OLED monitors use PWM?',
      a: 'Most OLED displays use PWM for brightness control, but typically at higher frequencies than LCD backlights. The issue is more pronounced at low brightness where the duty cycle becomes very short. Some recent OLED monitors advertise "PWM-free" or "DC dimming" modes that achieve dimming by a different method. Where OLEDs do use PWM it is often at 240 Hz or higher, which is above the sensitivity threshold for most users.',
    },
    {
      q: 'What PWM frequency is considered safe?',
      a: 'TUV Rheinland Flicker Free certification and similar standards treat monitors with PWM frequencies above 1,000 Hz as low risk because flicker at that speed is beyond the perceptible threshold for the vast majority of users. Many users have no sensitivity to PWM above 400 Hz. The most sensitive individuals may notice effects up to 200 Hz or beyond. "Flicker-free" claims in monitor marketing typically mean DC dimming or PWM above 1,000 Hz.',
    },
    {
      q: 'How do I find out if my specific monitor uses PWM?',
      a: 'Check the manufacturer specification page for a "flicker-free" or "DC dimming" label. Perform the smartphone camera test described above. RTINGS.com independently measures and publishes PWM data for hundreds of monitors including the exact frequency used. Some monitor on-screen display menus also include a "Low Blue Light" or "Flicker Safe" mode that switches the dimming method at lower brightness levels.',
    },
  ],
  pt: [
    {
      q: 'O que e o flicker PWM de retroiluminacao?',
      a: 'PWM (modulacao por largura de pulso) e uma tecnica que muitos monitores LCD usam para controlar o brilho ligando e desligando rapidamente a retroiluminacao centenas de vezes por segundo. Com brilho pleno a retroiluminacao fica continuamente ligada. Com 50% de brilho liga e desliga igualmente. A velocidade de comutacao e a frequencia PWM, tipicamente entre 200 Hz e 1000 Hz em ecras modernos. O olho humano nao consegue detetar conscientemente o flicker acima de cerca de 60 Hz, mas algumas pessoas experimentam fadiga ocular e dores de cabeca a frequencias ate 200 Hz ou superior mesmo sem o perceber conscientemente.',
    },
    {
      q: 'O flicker PWM pode causar fadiga ocular?',
      a: 'A investigacao sugere que o flicker PWM a frequencias abaixo de aproximadamente 200 Hz pode causar fadiga ocular, dores de cabeca e fadiga visual em individuos sensiveis mesmo quando nao e percebido conscientemente como flicker. O limiar de sensibilidade varia significativamente entre pessoas. Em definicoes de brilho mais baixas a relacao liga-desliga torna-se mais extrema, aumentando a intensidade da modulacao. As pessoas sensiveis ao PWM frequentemente relatam significativamente menos fadiga quando mudam para um ecra com dimming DC.',
    },
    {
      q: 'Como uso este teste de flicker PWM?',
      a: 'O painel e dividido num lado esquerdo com flicker e uma referencia cinzenta estavel a direita. Ambos os lados estao emparelhados em brilho medio. Use os controlos para ajustar a taxa de flicker e o brilho da fase desligada. Isto visualiza como o dimming PWM parece a frequencias mais baixas e visiveis. Para detetar o PWM do seu proprio monitor, use uma camera de smartphone apontada para o ecra e reduza o brilho. Bandas escuras a deslocar-se no feed da camera indicam PWM.',
    },
    {
      q: 'Como testo o meu monitor para PWM usando uma camera?',
      a: 'Aponte a camera do smartphone para o ecra do monitor e reduza o brilho do ecra para 30 a 70 por cento. Observe o visor ao vivo da camera para bandas horizontais escuras a deslocar-se pela imagem. Se as bandas estiverem visiveis, o monitor usa dimming PWM. As bandas aparecem porque o obturador da camera cria um padrao de batimento com o ciclo PWM. Um monitor que usa dimming DC nao mostra bandas no feed da camera em qualquer nivel de brilho.',
    },
    {
      q: 'Qual e a diferenca entre dimming PWM e DC?',
      a: 'O dimming DC controla o brilho reduzindo a tensao real fornecida a retroiluminacao para que fique continuamente ligada a menor potencia. O PWM mantem a retroiluminacao a plena potencia mas liga e desliga-a rapidamente, criando a impressao de escuridao atraves do tempo. O dimming DC e preferido para o conforto dos olhos, mas e tecnicamente mais dificil de implementar uniformemente. Muitos monitores premium e ecras OLED oferecem agora dimming DC ou PWM de frequencia muito alta acima de 1000 Hz para reduzir a fadiga ocular.',
    },
    {
      q: 'Os monitores OLED usam PWM?',
      a: 'A maioria dos ecras OLED usa PWM para controlo de brilho, mas tipicamente a frequencias mais altas do que as retroiluminacoes LCD. O problema e mais pronunciado com brilho baixo onde o ciclo de trabalho se torna muito curto. Alguns monitores OLED recentes publicam modos sem PWM ou dimming DC que atingem o dimming por um metodo diferente. Onde os OLEDs usam PWM e frequentemente a 240 Hz ou superior, que esta acima do limiar de sensibilidade para a maioria dos utilizadores.',
    },
    {
      q: 'Que frequencia PWM e considerada segura?',
      a: 'A certificacao TUV Rheinland Flicker Free e normas similares tratam monitores com frequencias PWM acima de 1000 Hz como de baixo risco porque o flicker a essa velocidade esta alem do limiar percetivel para a grande maioria dos utilizadores. Muitos utilizadores nao tem sensibilidade ao PWM acima de 400 Hz. Os individuos mais sensiveis podem notar efeitos ate 200 Hz ou alem. As afirmacoes de sem flicker no marketing de monitores tipicamente significam dimming DC ou PWM acima de 1000 Hz.',
    },
    {
      q: 'Como descubro se o meu monitor especifico usa PWM?',
      a: 'Verifique a pagina de especificacoes do fabricante para uma etiqueta sem flicker ou dimming DC. Realize o teste de camera de smartphone descrito acima. O RTINGS.com mede e publica independentemente dados PWM para centenas de monitores incluindo a frequencia exata usada. Alguns menus de ecra do monitor tambem incluem um modo de baixa luz azul ou modo de protecao contra flicker que muda o metodo de dimming em niveis de brilho mais baixos.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How this PWM flicker test works</h2>
      <p>
        The panel is split into two halves rendered frame-by-frame. The left side alternates between full
        white and an adjustable dim level at a rate you control. The right side shows a steady grey
        calculated as the mathematical average of the on and off phases, so both halves appear at roughly
        equal perceived brightness. Observing both together lets you see the difference between a flickering
        backlight and a steady one at the same apparent brightness level.
      </p>

      <h2 className="text-lg font-bold text-fg">Why you cannot see monitor PWM with the naked eye</h2>
      <p>
        Modern monitors typically use PWM at 200 to 1,000 Hz. The human visual system stops consciously
        registering flicker at around 50 to 60 Hz, so typical monitor PWM is invisible at normal viewing
        distances. What can happen is subliminal stimulation: the visual cortex still responds to the
        flicker even though you are not aware of seeing it, which in sensitive individuals causes fatigue,
        eye strain, or headaches over long sessions. This is why this test operates at lower, visible
        frequencies for demonstration rather than claiming to replicate the exact monitor condition.
      </p>

      <h2 className="text-lg font-bold text-fg">Camera detection method</h2>
      <p>
        The most accessible way to detect PWM without hardware tools is a smartphone camera. Point your
        camera at the monitor screen and reduce brightness to 30 to 50 percent. Watch the live feed for
        horizontal dark bands scrolling through the image. These appear because the camera&apos;s electronic
        shutter creates a visible beat frequency with the PWM cycle. A monitor using DC dimming shows a
        uniform screen in the camera feed at all brightness levels. This method works reliably for PWM
        frequencies below about 2,000 Hz.
      </p>

      <h2 className="text-lg font-bold text-fg">What to do if your monitor uses PWM</h2>
      <p>
        If you experience eye strain and your monitor uses PWM, keeping brightness at or near 100 percent
        eliminates the PWM cycle on many monitors that switch to continuous backlight at maximum output.
        Bias lighting behind the monitor allows comfortable work at higher screen brightness settings.
        Longer term, upgrading to a DC-dimmed or high-frequency PWM display is the most effective solution.
        Some monitors also offer a low blue light or eye care mode that internally changes the dimming
        method at certain brightness ranges, which is worth testing before purchasing a replacement.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona este teste de flicker PWM</h2>
      <p>
        O painel e dividido em duas metades renderizadas fotograma a fotograma. O lado esquerdo alterna
        entre branco pleno e um nivel de dimming ajustavel a uma taxa que voce controla. O lado direito
        mostra um cinzento estavel calculado como a media matematica das fases liga e desliga, de modo
        que ambas as metades aparecem a brilho percebido aproximadamente igual. Observar ambos em conjunto
        permite ver a diferenca entre uma retroiluminacao com flicker e uma estavel no mesmo nivel de
        brilho aparente.
      </p>

      <h2 className="text-lg font-bold text-fg">Por que nao consegue ver o PWM do monitor a olho nu</h2>
      <p>
        Os monitores modernos tipicamente usam PWM a 200 a 1000 Hz. O sistema visual humano para de
        registar conscientemente o flicker a cerca de 50 a 60 Hz, por isso o PWM tipico de monitor e
        invisivel a distancias normais de visualizacao. O que pode acontecer e estimulacao subliminar:
        o cortex visual ainda responde ao flicker mesmo que nao tenha consciencia de o ver, o que em
        individuos sensiveis causa fadiga, fadiga ocular, ou dores de cabeca durante sessoes longas. E
        por isso que este teste opera a frequencias mais baixas e visiveis para demonstracao em vez de
        afirmar replicar a condicao exata do monitor.
      </p>

      <h2 className="text-lg font-bold text-fg">Metodo de detecao por camera</h2>
      <p>
        A forma mais acessivel de detetar PWM sem ferramentas de hardware e uma camera de smartphone.
        Aponte a camera para o ecra do monitor e reduza o brilho para 30 a 50 por cento. Observe o feed
        ao vivo para bandas horizontais escuras a deslocar-se pela imagem. Estas aparecem porque o
        obturador eletronico da camera cria uma frequencia de batimento visivel com o ciclo PWM. Um
        monitor que usa dimming DC mostra um ecra uniforme no feed da camera em todos os niveis de
        brilho. Este metodo funciona confiavelmente para frequencias PWM abaixo de cerca de 2000 Hz.
      </p>

      <h2 className="text-lg font-bold text-fg">O que fazer se o seu monitor usa PWM</h2>
      <p>
        Se experimentar fadiga ocular e o seu monitor usa PWM, manter o brilho a ou perto de 100 por
        cento elimina o ciclo PWM em muitos monitores que mudam para retroiluminacao continua na saida
        maxima. A iluminacao de vies atras do monitor permite trabalho confortavel a definicoes de brilho
        de ecra mais altas. A longo prazo, atualizar para um ecra com dimming DC ou PWM de alta frequencia
        e a solucao mais eficaz. Alguns monitores tambem oferecem um modo de baixa luz azul ou cuidado
        dos olhos que internamente muda o metodo de dimming em certos intervalos de brilho, o que vale
        a pena testar antes de comprar um substituto.
      </p>
    </>
  ),
}

export default async function PwmFlickerTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('pwm-flicker-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <PwmFlickerTest />
    </ToolPageLayout>
  )
}
