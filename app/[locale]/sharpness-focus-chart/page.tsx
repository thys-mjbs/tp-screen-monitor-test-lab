import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { SharpnessFocusChart } from '@/components/tools/SharpnessFocusChart'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('sharpness-focus-chart', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does the sharpness focus chart test?',
      a: 'The chart presents several fine line patterns including horizontal lines, vertical lines, and diagonal patterns at different pixel widths, plus a cross-hatch grid. A sharp display renders these patterns as clean, distinct lines with clear edges. A soft display shows blurred or indistinct lines. Oversharpened displays show ringing, visible as bright halos along the edges of the lines. Each pattern type tests a different aspect of the display\'s rendering accuracy.',
    },
    {
      q: 'What is the difference between soft and oversharpened?',
      a: 'Softness appears as blurred or indistinct lines where sharp edges appear gradual rather than crisp. It is caused by low resolution relative to the display size, suboptimal scaling, or an anti-aliasing setting that is too aggressive. Oversharpening appears as halos or bright ringing along the edges of lines. It is caused by sharpening enhancement features in the monitor OSD (often called "clarity" or "sharpness" settings) or in the GPU driver. Both are unwanted and the sharpness test helps identify which issue, if any, is present.',
    },
    {
      q: 'How do I use the sharpness test?',
      a: 'Select a pattern from the grid, then click View Fullscreen to fill your display with the selected pattern. View from your normal sitting distance. The 1px horizontal and vertical line patterns should appear as a uniform grey tone with no visible individual lines at a normal viewing distance (if you can see individual lines, you are sitting too close). The cross-hatch pattern should appear as a fine grid with clean intersections. If lines appear wavy, irregular, or surrounded by halos, your display has a sharpness issue.',
    },
    {
      q: 'My sharpness pattern looks wavy. What does that mean?',
      a: 'Wavy or irregular-looking line patterns often indicate a pixel scaling issue. This occurs when the output resolution from your GPU does not match the native resolution of your monitor, forcing the display to scale the image. Always connect your monitor at its native resolution and set your operating system display resolution to match. Scaling reduces sharpness and can introduce the kind of irregular artefacts visible in fine line patterns.',
    },
    {
      q: 'What sharpness setting should I use on my monitor?',
      a: 'For most monitors, the factory sharpness setting is calibrated for the native panel resolution. Setting it too high introduces edge halos (oversharpening). Setting it too low softens the image. A good starting point is the monitor\'s default factory setting. Use the 1px vertical line pattern to check: if you see distinct bright halos alongside the black lines, reduce the sharpness setting. If lines appear blurred and lack definition, try increasing it slightly.',
    },
    {
      q: 'Does pixel density (PPI) affect the test results?',
      a: 'Yes. A high-PPI display such as a 4K monitor at 27 inches (around 163 PPI) will render the 1px line patterns much finer than a 1080p monitor at 27 inches (around 82 PPI). On a very high-PPI display, the 1px patterns may appear as a smooth uniform grey because the pixels are too small to resolve individually at normal viewing distance. The 2px patterns are better reference points on high-PPI displays.',
    },
  ],
  pt: [
    {
      q: 'O que testa o grafico de foco de nitidez?',
      a: 'O grafico apresenta varios padroes de linhas finas incluindo linhas horizontais, verticais e padroes diagonais em diferentes larguras de pixel, mais uma grelha de cruzamento. Um ecra nítido renderiza estes padroes como linhas limpas e distintas com bordas claras. Um ecra suave mostra linhas desfocadas ou indistintas. Os ecras com demasiada nitidez mostram ringing, visivel como halos brilhantes ao longo das bordas das linhas. Cada tipo de padrao testa um aspeto diferente da precisao de renderizacao do ecra.',
    },
    {
      q: 'Qual e a diferenca entre suave e com demasiada nitidez?',
      a: 'A suavidade aparece como linhas desfocadas ou indistintas onde as bordas nitidas parecem graduais em vez de nitidas. E causada por baixa resolucao em relacao ao tamanho do ecra, escalonamento subotimo, ou uma definicao de anti-aliasing demasiado agressiva. O excesso de nitidez aparece como halos ou ringing brilhante ao longo das bordas das linhas. E causado por funcionalidades de melhoria de nitidez no OSD do monitor (frequentemente chamadas definicoes de claridade ou nitidez) ou no driver da GPU. Ambos sao indesejaveis e o teste de nitidez ajuda a identificar qual o problema, se houver.',
    },
    {
      q: 'Como uso o teste de nitidez?',
      a: 'Selecione um padrao da grelha, depois clique em Ver em tela cheia para preencher o ecra com o padrao selecionado. Veja a distancia normal. Os padroes de linhas horizontais e verticais de 1px devem aparecer como um tom cinzento uniforme sem linhas individuais visiveis a distancia normal de visualizacao (se conseguir ver linhas individuais, esta demasiado proximo). O padrao de cruzamento deve aparecer como uma grelha fina com interseccoes limpas. Se as linhas parecerem onduladas, irregulares, ou rodeadas por halos, o ecra tem um problema de nitidez.',
    },
    {
      q: 'O padrao de nitidez parece ondulado. O que significa isso?',
      a: 'Os padroes de linhas ondulados ou de aparencia irregular frequentemente indicam um problema de escalonamento de pixels. Isto ocorre quando a resolucao de saida da GPU nao corresponde a resolucao nativa do monitor, forcando o ecra a escalonar a imagem. Ligue sempre o monitor a sua resolucao nativa e defina a resolucao do ecra do sistema operativo para corresponder. O escalonamento reduz a nitidez e pode introduzir o tipo de artefactos irregulares visiveis em padroes de linhas finas.',
    },
    {
      q: 'Que definicao de nitidez devo usar no monitor?',
      a: 'Para a maioria dos monitores, a definicao de nitidez de fabrica esta calibrada para a resolucao do painel nativo. Defini-la demasiado alta introduz halos de borda (excesso de nitidez). Defini-la demasiado baixa suaviza a imagem. Um bom ponto de partida e a definicao de fabrica padrao do monitor. Use o padrao de linhas verticais de 1px para verificar: se vir halos brilhantes distintos ao lado das linhas pretas, reduza a definicao de nitidez. Se as linhas parecerem desfocadas e sem definicao, tente aumenta-la ligeiramente.',
    },
    {
      q: 'A densidade de pixels (PPI) afeta os resultados do teste?',
      a: 'Sim. Um ecra de alto PPI como um monitor 4K a 27 polegadas (cerca de 163 PPI) renderizara os padroes de linhas de 1px muito mais finos do que um monitor 1080p a 27 polegadas (cerca de 82 PPI). Num ecra de PPI muito alto, os padroes de 1px podem aparecer como um cinzento uniforme suave porque os pixels sao demasiado pequenos para resolver individualmente a distancia normal de visualizacao. Os padroes de 2px sao melhores pontos de referencia em ecras de alto PPI.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the sharpness test reveals</h2>
      <p>
        Monitor sharpness is determined by a combination of native panel resolution, pixel density, the
        display scaling being applied, and any sharpening enhancements applied by the monitor or GPU. The
        sharpness focus chart uses fine line patterns that stress-test all of these factors simultaneously.
        Viewing the patterns in fullscreen at your normal viewing distance reveals whether your display is
        rendering detail cleanly, softening it, or adding artificial sharpening artefacts.
      </p>

      <h2 className="text-lg font-bold text-fg">Horizontal versus vertical sharpness</h2>
      <p>
        Most displays render horizontal and vertical resolution equally, but some scaled or rotated
        configurations can cause one axis to be sharper than the other. Testing both the horizontal and
        vertical 1px line patterns and comparing them tells you whether your display has consistent
        resolution across both axes. A difference in apparent sharpness between horizontal and vertical
        patterns can indicate an unusual pixel substructure (found on some low-cost or rotated panels)
        or a scaling configuration issue.
      </p>

      <h2 className="text-lg font-bold text-fg">Diagonal lines and anti-aliasing</h2>
      <p>
        Diagonal line patterns test how the display handles content that does not align with the
        pixel grid. A sharp display renders diagonal lines with subtle pixel stepping visible up close
        that blends into smooth lines at normal viewing distance. Excessive anti-aliasing can make
        diagonal lines appear blurry even in applications that should render them crisply. The diagonal
        pattern is also useful for checking for sub-pixel rendering issues on panels with non-standard
        subpixel arrangements.
      </p>

      <h2 className="text-lg font-bold text-fg">Connecting at native resolution</h2>
      <p>
        The single most important factor for display sharpness is connecting at the monitor&apos;s native
        resolution with no operating system scaling applied, or with integer-factor scaling on HiDPI
        displays. Fractional scaling (such as 125 percent or 150 percent) introduces softness because
        the OS must resample the rendered image to fit the display pixels. If the sharpness test reveals
        generally soft or irregular patterns, check that your display is set to its native resolution
        in your operating system display settings.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que o teste de nitidez revela</h2>
      <p>
        A nitidez do monitor e determinada por uma combinacao de resolucao do painel nativo, densidade de
        pixels, o escalonamento do ecra aplicado e quaisquer melhorias de nitidez aplicadas pelo monitor
        ou GPU. O grafico de foco de nitidez usa padroes de linhas finas que testam todos estes fatores
        simultaneamente. Visualizar os padroes em tela cheia a distancia normal de visualizacao revela
        se o ecra esta a renderizar o detalhe de forma limpa, a suaviza-lo, ou a adicionar artefactos
        artificiais de nitidez.
      </p>

      <h2 className="text-lg font-bold text-fg">Nitidez horizontal versus vertical</h2>
      <p>
        A maioria dos ecras renderiza a resolucao horizontal e vertical igualmente, mas algumas
        configuracoes escalonadas ou rodadas podem fazer com que um eixo seja mais nitido do que o outro.
        Testar os padroes de linhas horizontais e verticais de 1px e compara-los diz se o ecra tem
        resolucao consistente em ambos os eixos. Uma diferenca na nitidez aparente entre padroes horizontais
        e verticais pode indicar uma subestrutura de pixel incomum (encontrada em alguns paineis de baixo
        custo ou rodados) ou um problema de configuracao de escalonamento.
      </p>

      <h2 className="text-lg font-bold text-fg">Linhas diagonais e anti-aliasing</h2>
      <p>
        Os padroes de linhas diagonais testam como o ecra lida com conteudo que nao se alinha com a grelha
        de pixels. Um ecra nítido renderiza linhas diagonais com escalonamento subtil de pixels visivel de
        perto que se mistura em linhas suaves a distancia normal de visualizacao. O anti-aliasing excessivo
        pode fazer as linhas diagonais parecerem desfocadas mesmo em aplicacoes que as deveriam renderizar
        nitidamente. O padrao diagonal tambem e util para verificar problemas de renderizacao de sub-pixel
        em paineis com arranjos de subpixel nao padrao.
      </p>

      <h2 className="text-lg font-bold text-fg">Ligar a resolucao nativa</h2>
      <p>
        O fator mais importante para a nitidez do ecra e ligar a resolucao nativa do monitor sem
        escalonamento do sistema operativo aplicado, ou com escalonamento de fator inteiro em ecras HiDPI.
        O escalonamento fracionario (como 125 por cento ou 150 por cento) introduz suavidade porque o SO
        deve reamostrar a imagem renderizada para caber nos pixels do ecra. Se o teste de nitidez revelar
        padroes geralmente suaves ou irregulares, verifique que o ecra esta definido para a sua resolucao
        nativa nas definicoes de ecra do sistema operativo.
      </p>
    </>
  ),
}

export default async function SharpnessFocusChartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('sharpness-focus-chart', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <SharpnessFocusChart />
    </ToolPageLayout>
  )
}
