import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { HdrTest } from '@/components/tools/HdrTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('hdr-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is HDR on a monitor?',
      a: 'HDR (High Dynamic Range) on a monitor refers to the ability to display a wider range of brightness levels than a standard display. Standard dynamic range (SDR) monitors are limited to a peak brightness of around 100 to 300 nits. HDR monitors can reach 400, 600, 1000, or even 2000 nits at peak, allowing bright highlights to be far more vivid while simultaneously showing deep shadow detail. HDR also typically requires a wider colour gamut and higher bit depth to fully realise its benefit.',
    },
    {
      q: 'What do the detected capabilities mean?',
      a: 'The HDR result reflects whether your browser detects a high dynamic range display environment. The P3 result shows whether your display covers the wider Display P3 colour space used in HDR content. The Rec. 2020 result shows whether your display covers the broadcast HDR colour space, which is rare on consumer hardware. A display that reports HDR but not P3 may have certification only for brightness without a true wide gamut.',
    },
    {
      q: 'My display says HDR but the test shows no HDR support. Why?',
      a: 'Several things can prevent browser HDR detection. Your operating system HDR mode may not be enabled: on Windows 10 and 11, HDR must be turned on in Settings > System > Display > HDR. On macOS, some displays require HDR to be enabled in System Settings > Displays. Additionally, not all browsers pass the HDR signal correctly even when the OS has HDR active. Chrome and Edge generally handle this better than Firefox on Windows.',
    },
    {
      q: 'What is the difference between HDR400, HDR600, and HDR1000?',
      a: 'These are VESA DisplayHDR certification levels that define minimum requirements for peak brightness, black level, colour gamut, and bit depth. HDR400 requires 400 nits peak brightness and is considered entry-level, and may not produce a visibly better result than a good SDR monitor. HDR600 and HDR1000 require 600 and 1000 nits respectively, along with wider gamut and local dimming, which produce a meaningfully different viewing experience for supported content.',
    },
    {
      q: 'What is Wide Colour Gamut and why does it matter for HDR?',
      a: 'Standard monitors cover the sRGB colour space, which represents about 72% of the visible colours in a standard CIE diagram. Wide Colour Gamut (WCG) displays cover Display P3, which adds approximately 25% more colours than sRGB, enabling much more vivid reds, greens, and blues. HDR content is typically mastered in P3 or Rec. 2020, so a monitor without wide gamut cannot display HDR colours correctly even if it has sufficient peak brightness. Full HDR requires both high brightness and a wide gamut.',
    },
    {
      q: 'What do the brightness step ramps test?',
      a: 'The shadow steps show ten shades from pure black up through dark grey. On a well-calibrated monitor, all ten steps should be individually distinguishable. If the darkest steps merge into black, your monitor has crushed blacks or your gamma is set too high. The highlight steps show ten shades from mid-grey up to pure white. If the lightest steps merge into white, your monitor is clipping highlights, often caused by excessive brightness or incorrect gamma. These are the same tests as the Contrast Black Level and White Saturation tools but presented together here for a combined HDR-relevant evaluation.',
    },
    {
      q: 'Can a browser actually display HDR content?',
      a: 'Limited browser HDR support exists. Chromium-based browsers including Chrome and Edge can pass HDR video content to HDR displays when the OS HDR mode is active, though this is handled by the video decoder rather than CSS. Standard CSS colours and gradients are still rendered in the SDR range. There is no current browser standard for specifying CSS colour values in luminance levels above SDR white. True HDR evaluation therefore requires dedicated HDR test content played in a media player or through a streaming service that supports HDR passthrough.',
    },
    {
      q: 'Should I enable HDR mode on Windows for daily use?',
      a: 'It depends on your monitor and workflow. HDR mode on Windows remaps the SDR content rendering pipeline to fit within the HDR output range, which can cause SDR content to appear washed out or differently toned on some monitors. High-quality HDR monitors with good SDR emulation handle this well; budget HDR monitors often look worse with HDR enabled for desktop use. A common approach is to enable HDR only when watching HDR video or playing HDR games, and disable it for general desktop and web browsing.',
    },
  ],
  pt: [
    {
      q: 'O que e HDR num monitor?',
      a: 'HDR (Alto Alcance Dinamico) num monitor refere-se a capacidade de exibir uma gama mais ampla de niveis de brilho do que um ecra padrao. Os monitores de alcance dinamico padrao (SDR) estao limitados a um brilho de pico de cerca de 100 a 300 nits. Os monitores HDR podem atingir 400, 600, 1000, ou mesmo 2000 nits no pico, permitindo que os realces brilhantes sejam muito mais vividos enquanto simultaneamente mostram detalhe de sombra profunda. O HDR tambem tipicamente requer uma gama de cor mais ampla e maior profundidade de bit para realizar completamente o seu beneficio.',
    },
    {
      q: 'O que significam as capacidades detetadas?',
      a: 'O resultado HDR reflete se o navegador deteta um ambiente de ecra de alto alcance dinamico. O resultado P3 mostra se o ecra cobre o espaco de cor Display P3 mais amplo usado no conteudo HDR. O resultado Rec. 2020 mostra se o ecra cobre o espaco de cor HDR de transmissao, que e raro em hardware de consumo. Um ecra que reporta HDR mas nao P3 pode ter certificacao apenas para brilho sem uma gama ampla verdadeira.',
    },
    {
      q: 'O meu ecra diz HDR mas o teste nao mostra suporte HDR. Porque?',
      a: 'Varias coisas podem impedir a detecao HDR do navegador. O modo HDR do sistema operativo pode nao estar ativado: no Windows 10 e 11, o HDR deve ser ligado em Definicoes > Sistema > Ecra > HDR. No macOS, alguns ecras requerem que o HDR seja ativado em Definicoes do Sistema > Ecras. Alem disso, nem todos os navegadores passam o sinal HDR corretamente mesmo quando o SO tem HDR ativo. O Chrome e o Edge geralmente lidam com isto melhor do que o Firefox no Windows.',
    },
    {
      q: 'Qual e a diferenca entre HDR400, HDR600 e HDR1000?',
      a: 'Estes sao niveis de certificacao VESA DisplayHDR que definem requisitos minimos para brilho de pico, nivel de preto, gama de cor e profundidade de bit. O HDR400 requer 400 nits de brilho de pico e e considerado de nivel de entrada, e pode nao produzir um resultado visivelmente melhor do que um bom monitor SDR. O HDR600 e HDR1000 requerem 600 e 1000 nits respectivamente, juntamente com gama mais ampla e dimming local, que produzem uma experiencia de visualizacao significativamente diferente para conteudo suportado.',
    },
    {
      q: 'O que e a Gama de Cor Ampla e por que importa para HDR?',
      a: 'Os monitores padrao cobrem o espaco de cor sRGB, que representa cerca de 72% das cores visiveis num diagrama CIE padrao. Os ecras de Gama de Cor Ampla (WCG) cobrem o Display P3, que adiciona aproximadamente 25% mais cores do que o sRGB, permitindo vermelhos, verdes e azuis muito mais vividos. O conteudo HDR e tipicamente masterizado em P3 ou Rec. 2020, por isso um monitor sem gama ampla nao pode exibir as cores HDR corretamente mesmo que tenha brilho de pico suficiente. O HDR completo requer tanto alto brilho como uma gama ampla.',
    },
    {
      q: 'O que testam as rampas de passos de brilho?',
      a: 'Os passos de sombra mostram dez sombras do preto puro ate ao cinzento escuro. Num monitor bem calibrado, todos os dez passos devem ser individualmente distinguiveis. Se os passos mais escuros se fundirem em preto, o monitor tem pretos esmagados ou a gama esta definida demasiado alta. Os passos de realce mostram dez sombras do cinzento medio ate ao branco puro. Se os passos mais claros se fundirem em branco, o monitor esta a cortar realces, frequentemente causado por brilho excessivo ou gama incorreta. Estes sao os mesmos testes que as ferramentas Nivel de Preto de Contraste e Saturacao de Branco, mas apresentados juntos aqui para uma avaliacao combinada relevante para HDR.',
    },
    {
      q: 'Um navegador pode realmente exibir conteudo HDR?',
      a: 'Existe suporte HDR limitado do navegador. Os navegadores baseados em Chromium incluindo o Chrome e o Edge podem passar conteudo de video HDR para ecras HDR quando o modo HDR do SO esta ativo, embora isto seja tratado pelo descodificador de video em vez de CSS. As cores e gradientes CSS padrao ainda sao renderizados na gama SDR. Nao existe atualmente um padrao de navegador para especificar valores de cor CSS em niveis de luminancia acima do branco SDR. A avaliacao HDR verdadeira requer portanto conteudo de teste HDR dedicado reproduzido num leitor de media ou atraves de um servico de streaming que suporte passagem HDR.',
    },
    {
      q: 'Devo ativar o modo HDR no Windows para uso diario?',
      a: 'Depende do monitor e do fluxo de trabalho. O modo HDR no Windows remapeia o pipeline de renderizacao de conteudo SDR para caber dentro da gama de saida HDR, o que pode fazer com que o conteudo SDR apareca desbotado ou com tonalidade diferente em alguns monitores. Os monitores HDR de alta qualidade com boa emulacao SDR lidam bem com isto; os monitores HDR de entrada frequentemente parecem piores com HDR ativado para uso de secretaria. Uma abordagem comum e ativar HDR apenas ao assistir a video HDR ou jogar jogos HDR, e desativa-lo para navegacao geral na secretaria e na web.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What this tool detects</h2>
      <p>
        The tool queries three CSS media features that browsers expose to report display capability. The
        <code> dynamic-range: high</code> query returns true when the browser is operating in an HDR
        display environment with HDR mode active at the operating system level. The
        <code> color-gamut: p3</code> and <code>color-gamut: rec2020</code> queries report whether the
        display hardware can represent colours beyond the sRGB gamut. These results reflect the browser&apos;s
        view of your current display configuration, not the display&apos;s hardware maximum capability.
      </p>

      <h2 className="text-lg font-bold text-fg">Reading the brightness ramps</h2>
      <p>
        The shadow step ramp shows ten brightness levels from pure black to dark grey. A correctly
        calibrated display shows all ten steps as distinct shades. If the first few steps appear
        identical, your display is crushing shadow detail, which makes dark scenes in games and films
        lose depth and texture. The highlight step ramp shows ten steps from mid-grey to pure white.
        Merged steps at the bright end indicate highlight clipping, which flattens out detail in
        bright areas. Both ramps are sensitive to brightness, gamma, and HDR mode settings.
      </p>

      <h2 className="text-lg font-bold text-fg">Enabling HDR in Windows</h2>
      <p>
        On Windows 10 and 11, open Settings and navigate to System, then Display. If your monitor
        supports HDR, a toggle labelled Use HDR or Windows HD Color will be available. Enabling this
        switches the display pipeline to HDR output. You can also enable Auto HDR, which attempts to
        upscale SDR games to HDR. After enabling, re-run this tool to confirm the browser detects the
        change. Note that some browsers may need to be relaunched after the OS HDR mode changes.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitations of browser HDR testing</h2>
      <p>
        Browsers render standard web content in the SDR range regardless of whether HDR mode is active.
        This means the ramps and gradients on this page are displayed within the standard 0 to 100 nit
        range of SDR white, not the 400 to 1000 nit peak that HDR monitors are capable of reaching.
        Evaluating true HDR peak brightness requires dedicated HDR test footage played in a media player
        or through an HDR streaming service. Use this tool to confirm that your system is correctly
        configured for HDR and to evaluate shadow and highlight detail within the SDR range.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que esta ferramenta deteta</h2>
      <p>
        A ferramenta consulta tres funcionalidades de media CSS que os navegadores expoe para reportar a
        capacidade do ecra. A consulta <code>dynamic-range: high</code> retorna verdadeiro quando o
        navegador esta a operar num ambiente de ecra HDR com o modo HDR ativo ao nivel do sistema
        operativo. As consultas <code>color-gamut: p3</code> e <code>color-gamut: rec2020</code> reportam
        se o hardware do ecra pode representar cores alem da gama sRGB. Estes resultados refletem a visao
        do navegador da configuracao atual do ecra, nao a capacidade maxima de hardware do ecra.
      </p>

      <h2 className="text-lg font-bold text-fg">Lendo as rampas de brilho</h2>
      <p>
        A rampa de passos de sombra mostra dez niveis de brilho do preto puro ao cinzento escuro. Um
        ecra corretamente calibrado mostra todos os dez passos como sombras distintas. Se os primeiros
        passos parecerem identicos, o ecra esta a esmagar o detalhe de sombra, o que faz com que as
        cenas escuras em jogos e filmes percam profundidade e textura. A rampa de passos de realce mostra
        dez passos do cinzento medio ao branco puro. Os passos fundidos na extremidade brilhante indicam
        corte de realces, que aplana o detalhe em areas brilhantes. Ambas as rampas sao sensiveis as
        definicoes de brilho, gama e modo HDR.
      </p>

      <h2 className="text-lg font-bold text-fg">Ativar HDR no Windows</h2>
      <p>
        No Windows 10 e 11, abra as Definicoes e navegue para Sistema, depois Ecra. Se o monitor suportar
        HDR, estara disponivel um botao rotulado Usar HDR ou Windows HD Color. Ativar isto muda o pipeline
        do ecra para saida HDR. Tambem pode ativar o Auto HDR, que tenta fazer upscale de jogos SDR para
        HDR. Apos ativar, execute novamente esta ferramenta para confirmar que o navegador deteta a
        mudanca. Note que alguns navegadores podem precisar de ser relancados apos as mudancas do modo
        HDR do SO.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitacoes dos testes HDR do navegador</h2>
      <p>
        Os navegadores renderizam o conteudo web padrao na gama SDR independentemente de o modo HDR estar
        ativo. Isto significa que as rampas e gradientes nesta pagina sao exibidos dentro da gama padrao
        de 0 a 100 nits de branco SDR, nao o pico de 400 a 1000 nits que os monitores HDR sao capazes
        de atingir. Avaliar o brilho de pico HDR verdadeiro requer footage de teste HDR dedicado
        reproduzido num leitor de media ou atraves de um servico de streaming HDR. Use esta ferramenta
        para confirmar que o sistema esta corretamente configurado para HDR e para avaliar o detalhe de
        sombra e realce dentro da gama SDR.
      </p>
    </>
  ),
}

export default async function HdrTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('hdr-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <HdrTest />
    </ToolPageLayout>
  )
}
