import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ContrastBlackLevelTest } from '@/components/tools/ContrastBlackLevelTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('contrast-black-level-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does the contrast black level test check?',
      a: 'The test displays 16 near-black patches progressing from pure black (value 0) to a dark grey (value 60), in steps of 4 out of 255. By counting how many of these steps you can distinguish as separate shades, you can assess your monitor\'s shadow detail and black level performance. A display with good contrast and correct calibration should show all 16 steps as visibly different from one another.',
    },
    {
      q: 'What does it mean if I cannot see the darkest steps?',
      a: 'If the first few steps (values 0, 4, 8) all appear as identical black, your monitor may have crushed blacks: dark tones below a certain threshold are all rendered as pure black. This causes a loss of shadow detail in dark scenes. Crushed blacks are often caused by an incorrect brightness setting, a limited colour range (16-235 instead of full 0-255), or a gamma setting that is too high.',
    },
    {
      q: 'What causes crushed blacks on a monitor?',
      a: 'The most common causes of crushed blacks are: monitor brightness set too low, limited colour range settings (sometimes called studio swing or TV range) that should be set to full or PC range, gamma calibration that is too high, and in some cases incorrect colour profiles. Check your monitor\'s brightness control first, then your GPU colour output settings to confirm you are using full RGB range rather than limited range.',
    },
    {
      q: 'What is the correct gamma setting for this test?',
      a: 'Most monitors should be set to gamma 2.2 for standard desktop use. At gamma 2.2 and correct brightness, you should be able to distinguish all 16 steps in the test. If you are using a different gamma setting (for example gamma 2.4 which is recommended for video editing in dark rooms), the darkest steps may be harder to see. The Gamma Calibration Check tool can help you estimate your current display gamma.',
    },
    {
      q: 'Is this test affected by the display technology?',
      a: 'Yes. VA panels generally show better black level separation than IPS panels due to their higher native contrast ratios. OLED panels have perfect blacks because pixels turn off completely, giving them excellent near-black separation. TN panels typically have lower contrast and may struggle with the darkest steps. The test results give you a real-world impression of your specific panel\'s black level performance rather than just the manufacturer\'s stated contrast ratio.',
    },
    {
      q: 'Should I run this test in a dark or bright room?',
      a: 'A moderately dim room gives the most accurate results. In a very bright room, reflections and ambient light falling on the panel surface can make it harder to distinguish near-black tones. In a very dark room, your eyes adapt to the dark and you may perceive more shadow detail than you would during normal use. Testing in typical usage conditions (moderate ambient lighting, no direct sunlight on the screen) gives the most representative result.',
    },
    {
      q: 'What is the relationship between contrast ratio and black level?',
      a: 'Contrast ratio is the difference between the brightest white and darkest black a display can produce. A higher contrast ratio generally means deeper blacks and better shadow detail. However, stated contrast ratios from manufacturers are measured under specific conditions that may not reflect everyday use, particularly for local dimming monitors where the contrast varies across the screen. The black level test gives a practical view of shadow detail performance that complements the stated contrast ratio.',
    },
  ],
  pt: [
    {
      q: 'O que verifica o teste de nivel de preto de contraste?',
      a: 'O teste exibe 16 zonas proximo-pretas progredindo do preto puro (valor 0) para um cinzento escuro (valor 60), em passos de 4 em 255. Ao contar quantos desses passos consegue distinguir como sombras separadas, pode avaliar o detalhe de sombra e o desempenho do nivel de preto do monitor. Um ecra com bom contraste e calibracao correta deve mostrar todos os 16 passos como visivelmente diferentes uns dos outros.',
    },
    {
      q: 'O que significa se nao consigo ver os passos mais escuros?',
      a: 'Se os primeiros passos (valores 0, 4, 8) parecerem todos como preto identico, o monitor pode ter pretos esmagados: tons escuros abaixo de um certo limiar sao todos renderizados como preto puro. Isto causa perda de detalhe de sombra em cenas escuras. Os pretos esmagados sao frequentemente causados por uma definicao incorreta de brilho, um intervalo de cor limitado (16-235 em vez de pleno 0-255), ou uma definicao de gama demasiado alta.',
    },
    {
      q: 'O que causa pretos esmagados num monitor?',
      a: 'As causas mais comuns de pretos esmagados sao: brilho do monitor demasiado baixo, definicoes de intervalo de cor limitado (por vezes chamado de studio swing ou TV range) que devem ser definidas para intervalo pleno ou PC, calibracao de gama demasiado alta, e em alguns casos perfis de cor incorretos. Verifique primeiro o controlo de brilho do monitor, depois as definicoes de saida de cor da GPU para confirmar que esta a usar o intervalo RGB pleno em vez do intervalo limitado.',
    },
    {
      q: 'Qual e a definicao de gama correta para este teste?',
      a: 'A maioria dos monitores deve ser definida para gama 2.2 para uso padrao em secretaria. Com gama 2.2 e brilho correto, deve conseguir distinguir todos os 16 passos do teste. Se estiver a usar uma definicao de gama diferente (por exemplo gama 2.4 que e recomendada para edicao de video em salas escuras), os passos mais escuros podem ser mais dificeis de ver. A ferramenta Verificacao de Calibracao de Gama pode ajudar a estimar a gama atual do ecra.',
    },
    {
      q: 'Este teste e afetado pela tecnologia do ecra?',
      a: 'Sim. Os paineis VA geralmente mostram melhor separacao de nivel de preto do que os paineis IPS devido as suas razoes de contraste nativo mais altas. Os paineis OLED tem pretos perfeitos porque os pixels se desligam completamente, oferecendo excelente separacao proximo-preta. Os paineis TN tipicamente tem contraste mais baixo e podem ter dificuldade com os passos mais escuros. Os resultados do teste dao-lhe uma impressao do mundo real do desempenho do nivel de preto do seu painel especifico em vez de apenas a razao de contraste declarada pelo fabricante.',
    },
    {
      q: 'Devo executar este teste numa sala escura ou brilhante?',
      a: 'Uma sala moderadamente escura da os resultados mais precisos. Numa sala muito brilhante, os reflexos e a luz ambiente a cair na superficie do painel podem dificultar a distincao de tons proximo-pretos. Numa sala muito escura, os seus olhos adaptam-se ao escuro e pode perceber mais detalhe de sombra do que durante o uso normal. Testar em condicoes tipicas de uso (iluminacao ambiente moderada, sem luz solar direta no ecra) da o resultado mais representativo.',
    },
    {
      q: 'Qual e a relacao entre razao de contraste e nivel de preto?',
      a: 'A razao de contraste e a diferenca entre o branco mais brilhante e o preto mais escuro que um ecra pode produzir. Uma razao de contraste mais alta geralmente significa pretos mais profundos e melhor detalhe de sombra. No entanto, as razoes de contraste declaradas pelos fabricantes sao medidas sob condicoes especificas que podem nao refletir o uso quotidiano, particularmente para monitores com dimming local onde o contraste varia pelo ecra. O teste de nivel de preto da uma visao pratica do desempenho de detalhe de sombra que complementa a razao de contraste declarada.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How the contrast black level test works</h2>
      <p>
        The test displays 16 patches progressing from pure black (RGB 0) to a dark grey (RGB 60) in increments
        of 4. These near-black steps sit in the shadow range of the tonal scale, the area where many displays
        struggle most. A monitor with good black level performance and correct calibration will show each step
        as a visibly distinct shade. A monitor with crushed blacks or incorrect brightness calibration will
        merge the darkest steps together, making them indistinguishable from pure black.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding shadow detail and why it matters</h2>
      <p>
        Shadow detail refers to a display&apos;s ability to render subtle differences between dark tones. In
        practice, this affects how well you can see detail in dark video scenes, shadow areas in photography,
        and dark game environments. A display that crushes shadow tones loses detail that was present in the
        original content. Whether this matters for your use depends on how frequently you work with or view
        dark content, and how critical accurate shadow reproduction is for your workflow.
      </p>

      <h2 className="text-lg font-bold text-fg">Adjusting your display for better black levels</h2>
      <p>
        If the test reveals crushed blacks, start by checking your monitor brightness setting. Many monitors
        are shipped with brightness set higher than is needed, which can paradoxically make dark tones harder
        to distinguish by raising the overall black floor. Reduce brightness gradually until dark steps become
        visible. Next, check your GPU colour output settings and confirm you are using full RGB range (0-255)
        rather than limited range (16-235). Limited range causes the display to treat values below 16 as pure
        black, which directly causes the kind of shadow crushing this test reveals.
      </p>

      <h2 className="text-lg font-bold text-fg">Panel technology and black level performance</h2>
      <p>
        The type of panel technology in your monitor has a significant impact on black level performance.
        VA panels typically achieve contrast ratios of 3000:1 to 6000:1, giving them deep blacks and strong
        shadow detail. IPS panels typically achieve around 1000:1 to 1500:1, which means their blacks are
        slightly lifted compared to VA. OLED panels achieve near-infinite contrast because each pixel can turn
        completely off, giving them the deepest blacks and the best near-black shadow separation of any current
        display technology.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o teste de nivel de preto de contraste</h2>
      <p>
        O teste exibe 16 zonas progredindo do preto puro (RGB 0) para um cinzento escuro (RGB 60) em
        incrementos de 4. Estes passos proximo-pretos situam-se na gama de sombras da escala tonal, a area
        onde muitos ecras tem mais dificuldade. Um monitor com bom desempenho de nivel de preto e calibracao
        correta mostrara cada passo como uma sombra visivelmente distinta. Um monitor com pretos esmagados ou
        calibracao de brilho incorreta mesclara os passos mais escuros, tornando-os indistinguiveis do preto
        puro.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender o detalhe de sombra e por que importa</h2>
      <p>
        O detalhe de sombra refere-se a capacidade de um ecra de renderizar diferencas subtis entre tons
        escuros. Na pratica, isto afeta a nitidez com que consegue ver detalhes em cenas de video escuras,
        areas de sombra em fotografia e ambientes escuros de jogos. Um ecra que esmaga tons de sombra perde
        detalhes que estavam presentes no conteudo original. Se isso importa para o seu uso depende da
        frequencia com que trabalha ou ve conteudo escuro, e de quao critica e a reproducao precisa de sombras
        para o seu fluxo de trabalho.
      </p>

      <h2 className="text-lg font-bold text-fg">Ajustar o ecra para melhores niveis de preto</h2>
      <p>
        Se o teste revelar pretos esmagados, comece por verificar a definicao de brilho do monitor. Muitos
        monitores sao enviados com o brilho mais alto do que o necessario, o que paradoxalmente pode dificultar
        a distincao de tons escuros ao elevar o nivel geral de preto. Reduza o brilho gradualmente ate que os
        passos escuros se tornem visiveis. Em seguida, verifique as definicoes de saida de cor da GPU e
        confirme que esta a usar o intervalo RGB pleno (0-255) em vez de intervalo limitado (16-235). O
        intervalo limitado faz com que o ecra trate valores abaixo de 16 como preto puro, o que causa
        diretamente o tipo de esmagamento de sombras que este teste revela.
      </p>

      <h2 className="text-lg font-bold text-fg">Tecnologia de painel e desempenho do nivel de preto</h2>
      <p>
        O tipo de tecnologia de painel no monitor tem um impacto significativo no desempenho do nivel de
        preto. Os paineis VA tipicamente alcancam razoes de contraste de 3000:1 a 6000:1, oferecendo pretos
        profundos e forte detalhe de sombra. Os paineis IPS tipicamente alcancam cerca de 1000:1 a 1500:1,
        o que significa que os seus pretos sao ligeiramente elevados em comparacao com VA. Os paineis OLED
        alcancam contraste quasi-infinito porque cada pixel pode desligar-se completamente, oferecendo os
        pretos mais profundos e a melhor separacao de sombras proximo-preta de qualquer tecnologia de ecra
        atual.
      </p>
    </>
  ),
}

export default async function ContrastBlackLevelTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('contrast-black-level-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ContrastBlackLevelTest />
    </ToolPageLayout>
  )
}
