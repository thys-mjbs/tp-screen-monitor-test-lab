import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { MoirePatternTest } from '@/components/tools/MoirePatternTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('moire-pattern-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is moire and when does it appear on a monitor?',
      a: 'Moire is an interference pattern that appears when two or more repetitive patterns with similar but not identical frequencies overlap. On a monitor, moire occurs when rendered content contains fine detail at a frequency close to the pixel pitch of the display. It appears as wavy bands or undulating patterns that are not present in the original content. Moire is most commonly caused by displaying content at a non-native resolution or viewing very fine printed material on screen.',
    },
    {
      q: 'How do I use the moire pattern test?',
      a: 'Select a line pattern from the grid, then click View Fullscreen. View the pattern from your normal sitting distance. If the pattern appears as clean, evenly spaced lines with a consistent appearance across the screen, moire is not a significant issue for that pattern type. If you see wavy interference bands, undulating brightness variations, or irregular-looking areas that vary across the screen, moire is present. Fine patterns (1px lines) are most likely to show moire.',
    },
    {
      q: 'Is moire always a sign of a display fault?',
      a: 'No. Some amount of moire in fine patterns is expected on any display when the pattern frequency approaches the Nyquist limit of the pixel pitch. Perfect anti-aliasing of all frequencies is not physically possible. Moire becomes a concern when it appears in content that should look clean at the display\'s native resolution, such as fine lines in UI elements or text at certain sizes. If moire only appears in the 1px test patterns and not in your normal content, the display is likely performing as expected.',
    },
    {
      q: 'What causes moire in real-world content?',
      a: 'In everyday use, moire most commonly appears when scanning printed materials such as newspapers or magazines (the printed halftone pattern interferes with the scanner or camera pixel grid), when capturing photographs of fine fabric textures, or when displaying screenshots or screen recordings captured at a different resolution than the display. Moire in rendered UI elements or text is less common but can occur at certain fractional scaling factors.',
    },
    {
      q: 'Can moire be fixed?',
      a: 'The most effective fix depends on the cause. Moire from scaling is resolved by ensuring your display runs at native resolution with no fractional scaling. Moire from scanned content can be reduced with post-processing blur or dithering in image editing software. Some monitors include an anti-moire filter or have de-moire settings in their OSD. If moire is only visible on the 1px test patterns and not during normal use, no fix is necessary.',
    },
    {
      q: 'Does monitor type or resolution affect moire?',
      a: 'Yes. Higher-resolution displays are less susceptible to moire in practice because their smaller pixel pitch means that most real-world content frequencies do not approach the Nyquist limit. A 4K monitor at 27 inches (163 PPI) has a much smaller chance of showing moire in everyday content than a 1080p monitor at 27 inches (82 PPI). Anti-glare screen coatings can also slightly diffuse patterns and reduce moire visibility, though this is a secondary effect.',
    },
  ],
  pt: [
    {
      q: 'O que e o moire e quando aparece num monitor?',
      a: 'O moire e um padrao de interferencia que aparece quando dois ou mais padroes repetitivos com frequencias semelhantes mas nao identicas se sobrepoem. Num monitor, o moire ocorre quando o conteudo renderizado contem detalhe fino a uma frequencia proxima do passo de pixel do ecra. Aparece como bandas onduladas ou padroes ondulantes que nao estao presentes no conteudo original. O moire e mais comummente causado por exibir conteudo a uma resolucao nao nativa ou visualizar material impresso muito fino no ecra.',
    },
    {
      q: 'Como uso o teste de padrao moire?',
      a: 'Selecione um padrao de linhas da grelha, depois clique em Ver em tela cheia. Veja o padrao a distancia normal. Se o padrao aparecer como linhas limpas e uniformemente espacadas com uma aparencia consistente pelo ecra, o moire nao e um problema significativo para esse tipo de padrao. Se vir bandas de interferencia onduladas, variacoes de brilho ondulantes, ou areas de aparencia irregular que variam pelo ecra, o moire esta presente. Os padroes finos (linhas de 1px) sao os mais provaveis de mostrar moire.',
    },
    {
      q: 'O moire e sempre um sinal de defeito do ecra?',
      a: 'Nao. Alguma quantidade de moire em padroes finos e esperada em qualquer ecra quando a frequencia do padrao se aproxima do limite de Nyquist do passo de pixel. O anti-aliasing perfeito de todas as frequencias nao e fisicamente possivel. O moire torna-se uma preocupacao quando aparece em conteudo que deveria parecer limpo a resolucao nativa do ecra, como linhas finas em elementos de UI ou texto em certos tamanhos. Se o moire aparecer apenas nos padroes de teste de 1px e nao no conteudo normal, o ecra provavelmente esta a funcionar como esperado.',
    },
    {
      q: 'O que causa o moire no conteudo do mundo real?',
      a: 'No uso quotidiano, o moire aparece mais comummente ao digitalizar materiais impressos como jornais ou revistas (o padrao de meios-tons impresso interfere com a grelha de pixels do scanner ou camera), ao capturar fotografias de texturas de tecido fino, ou ao exibir capturas de ecra ou gravacoes de ecra capturadas a uma resolucao diferente do ecra. O moire em elementos de UI renderizados ou texto e menos comum mas pode ocorrer em certos fatores de escalonamento fracionario.',
    },
    {
      q: 'O moire pode ser corrigido?',
      a: 'A correcao mais eficaz depende da causa. O moire do escalonamento e resolvido garantindo que o ecra funciona a resolucao nativa sem escalonamento fracionario. O moire de conteudo digitalizado pode ser reduzido com desfoque de pos-processamento ou dithering em software de edicao de imagem. Alguns monitores incluem um filtro anti-moire ou tem definicoes de de-moire no seu OSD. Se o moire so for visivel nos padroes de teste de 1px e nao durante o uso normal, nenhuma correcao e necessaria.',
    },
    {
      q: 'O tipo de monitor ou a resolucao afetam o moire?',
      a: 'Sim. Os ecras de maior resolucao sao menos suscetiveis ao moire na pratica porque o seu menor passo de pixel significa que a maioria das frequencias de conteudo do mundo real nao se aproximam do limite de Nyquist. Um monitor 4K a 27 polegadas (163 PPI) tem uma chance muito menor de mostrar moire no conteudo quotidiano do que um monitor 1080p a 27 polegadas (82 PPI). Os revestimentos de ecra anti-reflexo tambem podem difundir ligeiramente os padroes e reduzir a visibilidade do moire, embora este seja um efeito secundario.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What moire reveals about your display</h2>
      <p>
        Moire is an optical interference effect that occurs when a fine periodic pattern in the content
        interacts with the regular pixel grid of the display. The result is a visible secondary pattern of
        bands or undulations that is not present in the source content. In the context of monitor testing,
        moire patterns in fine line tests can reveal whether your display is applying any additional
        interpolation, whether it is running at a non-native resolution, or in rare cases whether the
        display has an unusual subpixel arrangement that causes interference at certain pattern frequencies.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding the Nyquist limit and aliasing</h2>
      <p>
        Every display has a pixel pitch, the physical distance between adjacent pixels. Patterns with a
        spatial frequency higher than half the pixel density (the Nyquist limit) cannot be reproduced
        accurately and will alias, producing interference artefacts. A 1px alternating black and white
        pattern is at the absolute limit of what a display can represent: one black pixel, one white pixel,
        repeating. At this extreme frequency, small variations in the rendering pipeline become visible as
        moire. This is why the 1px patterns in this test are the most revealing: they stress-test the
        display at its resolution limit.
      </p>

      <h2 className="text-lg font-bold text-fg">Moire from scaling</h2>
      <p>
        The most common source of visible moire in everyday monitor use is incorrect scaling. When your
        operating system applies fractional scaling (for example, 125 percent or 150 percent), the rendered
        pixels do not map one-to-one to the physical panel pixels. This misalignment creates an
        interference pattern between the rendered grid and the physical pixel grid. The moire pattern test
        can confirm whether scaling is the source of artefacts you see during normal use. If moire is only
        present at high pattern frequencies and not in scaled-UI content, the display is functioning
        correctly.
      </p>

      <h2 className="text-lg font-bold text-fg">What a passing result looks like</h2>
      <p>
        On a display running at native resolution with no fractional scaling, the 2px and 4px line patterns
        should appear as clean, evenly spaced lines with no wavy interference bands. The 1px pattern may show
        some irregularity because it is at the fundamental resolution limit of the display, and that is expected.
        If the 2px patterns show significant moire visible at normal viewing distance, check your display
        resolution and scaling settings before concluding the panel has a hardware issue.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que o moire revela sobre o ecra</h2>
      <p>
        O moire e um efeito de interferencia optica que ocorre quando um padrao periodico fino no conteudo
        interage com a grelha de pixels regular do ecra. O resultado e um padrao secundario visivel de
        bandas ou ondulacoes que nao esta presente no conteudo fonte. No contexto dos testes de monitor,
        os padroes moire nos testes de linha fina podem revelar se o ecra esta a aplicar interpolacao
        adicional, se esta a funcionar a uma resolucao nao nativa, ou em casos raros se o ecra tem um
        arranjo de subpixel incomum que causa interferencia em certas frequencias de padrao.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender o limite de Nyquist e o aliasing</h2>
      <p>
        Cada ecra tem um passo de pixel, a distancia fisica entre pixels adjacentes. Os padroes com uma
        frequencia espacial superior a metade da densidade de pixels (o limite de Nyquist) nao podem ser
        reproduzidos com precisao e criarao aliasing, produzindo artefactos de interferencia. Um padrao
        alternado preto e branco de 1px esta no limite absoluto do que um ecra pode representar: um pixel
        preto, um pixel branco, repetindo. Nesta frequencia extrema, pequenas variacoes no pipeline de
        renderizacao tornam-se visiveis como moire. E por isso que os padroes de 1px neste teste sao os
        mais reveladores: testam o ecra no seu limite de resolucao.
      </p>

      <h2 className="text-lg font-bold text-fg">Moire do escalonamento</h2>
      <p>
        A fonte mais comum de moire visivel no uso quotidiano do monitor e o escalonamento incorreto.
        Quando o sistema operativo aplica escalonamento fracionario (por exemplo, 125 por cento ou 150
        por cento), os pixels renderizados nao mapeiam um para um para os pixels fisicos do painel. Este
        desalinhamento cria um padrao de interferencia entre a grelha renderizada e a grelha de pixels
        fisicos. O teste de padrao moire pode confirmar se o escalonamento e a fonte de artefactos que ve
        durante o uso normal. Se o moire so estiver presente em altas frequencias de padrao e nao em
        conteudo de UI escalonado, o ecra esta a funcionar corretamente.
      </p>

      <h2 className="text-lg font-bold text-fg">Como e um resultado aprovado</h2>
      <p>
        Num ecra a funcionar a resolucao nativa sem escalonamento fracionario, os padroes de linhas de 2px
        e 4px devem aparecer como linhas limpas e uniformemente espacadas sem bandas de interferencia
        onduladas. O padrao de 1px pode mostrar alguma irregularidade porque esta no limite de resolucao
        fundamental do ecra, e isso e esperado. Se os padroes de 2px mostrarem moire significativo visivel
        a distancia normal de visualizacao, verifique as definicoes de resolucao e escalonamento do ecra
        antes de concluir que o painel tem um problema de hardware.
      </p>
    </>
  ),
}

export default async function MoirePatternTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('moire-pattern-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <MoirePatternTest />
    </ToolPageLayout>
  )
}
