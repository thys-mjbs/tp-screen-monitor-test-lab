import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ImageRetentionTest } from '@/components/tools/ImageRetentionTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('image-retention-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is image retention?',
      a: 'Image retention is a temporary display artefact where a recently displayed image remains faintly visible after the content changes. On OLED panels, it is caused by temporary differential luminance in the organic compounds after sustained exposure to high-contrast content. On LCD panels, it can be caused by a charge buildup in the liquid crystal layer. Image retention is temporary and usually fades within minutes or hours. It is different from permanent burn-in.',
    },
    {
      q: 'What is the difference between image retention and burn-in?',
      a: 'Image retention is temporary. The ghost image fades on its own, typically within minutes to a few hours, once the display shows different content. Burn-in is permanent and caused by irreversible degradation of the display materials. On OLED panels, permanent burn-in occurs when the organic compounds in specific pixels degrade from sustained overexposure, and the affected area permanently shows different brightness or colour than surrounding pixels. This test detects temporary image retention, not permanent burn-in.',
    },
    {
      q: 'How does the image retention test work?',
      a: 'The test works in two phases. In the first phase, a high-contrast black and white checkerboard pattern is displayed for a set duration (1, 2, or 5 minutes). In the second phase, the display automatically switches to a solid mid-grey panel. If image retention is present, you will see a faint ghost of the checkerboard pattern on the grey background. The grey phase lets you check whether the retained pattern fades over time.',
    },
    {
      q: 'Is this test safe for my OLED display?',
      a: 'Yes. A few minutes of high-contrast content is well within the normal usage range for any display. OLED burn-in requires sustained exposure to high-brightness static content over many hours or months of accumulated use. Running this test for 1 to 5 minutes will not cause permanent damage to a healthy display. If you are concerned about long-term OLED health, avoid running the 5-minute test repeatedly as part of a regular routine.',
    },
    {
      q: 'My OLED shows retention after the test. Is my panel faulty?',
      a: 'Temporary image retention after 1 to 5 minutes of high-contrast content is not unusual on OLED panels, particularly under certain conditions such as high brightness levels or after extended use. What matters is whether the retention fades. On a healthy panel, the ghost image should disappear or become significantly less visible within 5 to 15 minutes of displaying normal varied content. Retention that persists for several hours may indicate accelerated panel ageing. Retention that is permanent is burn-in.',
    },
    {
      q: 'Does LCD image retention work differently from OLED?',
      a: 'Yes. LCD image retention is typically caused by a voltage build-up in the liquid crystal layer that temporarily biases the crystals in one direction. It usually clears quickly (within seconds to minutes) and is less common on modern LCD panels. OLED image retention is caused by temporary differential luminance of the organic compounds and can last longer. LCD panels can also develop a form of image ghosting called pixel walk, though this is uncommon in quality panels.',
    },
    {
      q: 'What should I do if I see permanent burn-in?',
      a: 'Permanent burn-in on an OLED panel is an irreversible hardware condition. Some manufacturers include burn-in in their warranty, though coverage varies by brand and product tier. Contact your manufacturer with photographic evidence. Some manufacturers also offer pixel refresh or compensation algorithms in the monitor firmware that can reduce the visual impact of minor burn-in, but these are partial mitigations rather than repairs.',
    },
  ],
  pt: [
    {
      q: 'O que e a retencao de imagem?',
      a: 'A retencao de imagem e um artefacto temporario de ecra onde uma imagem recentemente exibida permanece fracamente visivel apos a mudanca de conteudo. Nos paineis OLED, e causada por luminancia diferencial temporaria nos compostos organicos apos exposicao prolongada a conteudo de alto contraste. Nos paineis LCD, pode ser causada por acumulacao de carga na camada de cristal liquido. A retencao de imagem e temporaria e geralmente desaparece em minutos ou horas. E diferente do burn-in permanente.',
    },
    {
      q: 'Qual e a diferenca entre retencao de imagem e burn-in?',
      a: 'A retencao de imagem e temporaria. A imagem fantasma desaparece sozinha, tipicamente em minutos a algumas horas, quando o ecra mostra conteudo diferente. O burn-in e permanente e causado por degradacao irreversivel dos materiais do ecra. Nos paineis OLED, o burn-in permanente ocorre quando os compostos organicos em pixels especificos se degradam por sobreexposicao prolongada, e a area afetada mostra permanentemente brilho ou cor diferentes dos pixels vizinhos. Este teste deteta retencao de imagem temporaria, nao burn-in permanente.',
    },
    {
      q: 'Como funciona o teste de retencao de imagem?',
      a: 'O teste funciona em duas fases. Na primeira fase, um padrao quadriculado preto e branco de alto contraste e exibido durante uma duracao definida (1, 2 ou 5 minutos). Na segunda fase, o ecra muda automaticamente para um painel cinzento medio solido. Se houver retencao de imagem, vera um fantasma fraco do padrao quadriculado no fundo cinzento. A fase cinzenta permite verificar se o padrao retido desaparece com o tempo.',
    },
    {
      q: 'Este teste e seguro para o meu ecra OLED?',
      a: 'Sim. Alguns minutos de conteudo de alto contraste estao bem dentro do intervalo de uso normal para qualquer ecra. O burn-in OLED requer exposicao prolongada a conteudo estatico de alto brilho durante muitas horas ou meses de uso acumulado. Executar este teste durante 1 a 5 minutos nao causara danos permanentes a um ecra saudavel. Se estiver preocupado com a saude a longo prazo do OLED, evite executar o teste de 5 minutos repetidamente como parte de uma rotina regular.',
    },
    {
      q: 'O meu OLED mostra retencao apos o teste. O meu painel esta com defeito?',
      a: 'A retencao de imagem temporaria apos 1 a 5 minutos de conteudo de alto contraste nao e incomum em paineis OLED, particularmente sob certas condicoes como niveis de alto brilho ou apos uso prolongado. O que importa e se a retencao desaparece. Num painel saudavel, a imagem fantasma deve desaparecer ou tornar-se significativamente menos visivel dentro de 5 a 15 minutos de exibir conteudo variado normal. A retencao que persiste por varias horas pode indicar envelhecimento acelerado do painel. A retencao que e permanente e burn-in.',
    },
    {
      q: 'A retencao de imagem LCD funciona de forma diferente do OLED?',
      a: 'Sim. A retencao de imagem LCD e tipicamente causada por uma acumulacao de tensao na camada de cristal liquido que polariza temporariamente os cristais numa direcao. Geralmente desaparece rapidamente (em segundos a minutos) e e menos comum em paineis LCD modernos. A retencao de imagem OLED e causada por luminancia diferencial temporaria dos compostos organicos e pode durar mais tempo. Os paineis LCD tambem podem desenvolver uma forma de fantasma de imagem chamada pixel walk, embora isso seja incomum em paineis de qualidade.',
    },
    {
      q: 'O que devo fazer se vir burn-in permanente?',
      a: 'O burn-in permanente num painel OLED e uma condicao de hardware irreversivel. Alguns fabricantes incluem o burn-in na sua garantia, embora a cobertura varie por marca e nivel de produto. Contacte o fabricante com evidencias fotograficas. Alguns fabricantes tambem oferecem algoritmos de atualizacao de pixels ou compensacao no firmware do monitor que podem reduzir o impacto visual do burn-in menor, mas estas sao mitigacoes parciais em vez de reparacoes.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How to run the image retention test</h2>
      <p>
        Select a duration using the buttons below the panel, then click Start or Start Fullscreen. The
        checkerboard pattern will display for the selected time and then automatically switch to a solid
        grey panel. Look carefully at the grey panel for any faint ghost of the checkerboard. Allow a
        further few minutes and check again to see whether any retained image is fading. A healthy display
        should show no visible retention, or any retention that is present should fade clearly within a
        few minutes.
      </p>

      <h2 className="text-lg font-bold text-fg">OLED panel health and image retention</h2>
      <p>
        OLED displays are more susceptible to image retention than LCD displays because each pixel produces
        its own light through organic compounds that can temporarily shift in efficiency after sustained
        exposure. Modern OLED monitors include several countermeasures: pixel shift moves the displayed
        content by small increments to avoid sustained exposure to any single pixel; pixel refresh cycles
        equalise the organic compound state across the panel; and screen savers and sleep modes are enforced
        to prevent prolonged static content. Despite these measures, OLED panels used for content with
        persistent bright UI elements (such as taskbars, bright logos, or static overlays) will show more
        image retention than those used for varied content.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding temporary versus permanent retention</h2>
      <p>
        The critical distinction to understand when evaluating your result is whether what you observe is
        temporary or permanent. After the grey phase begins, watch the retained ghost image over several
        minutes. If it is clearly fading, even slowly, it is temporary retention. Temporary retention is
        normal behaviour for OLED panels that have been shown sustained high-contrast content. If the ghost
        pattern shows no sign of fading after 10 to 15 minutes of varied content, it may be approaching
        the boundary between temporary retention and early burn-in, which warrants monitoring over time.
      </p>

      <h2 className="text-lg font-bold text-fg">LCD versus OLED retention behaviour</h2>
      <p>
        On LCD panels, any image retention revealed by this test typically clears within seconds or minutes
        because the mechanism (temporary charge accumulation in the liquid crystal layer) reverses quickly
        with normal display operation. If you see persistent retention on an LCD panel that takes more than
        30 minutes to clear, the liquid crystal layer may have developed a permanent alignment bias, which
        is an uncommon but recognised LCD fault. LCD retention is not related to organic compound ageing
        and behaves quite differently from OLED retention.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como executar o teste de retencao de imagem</h2>
      <p>
        Selecione uma duracao usando os botoes abaixo do painel, depois clique em Iniciar ou Iniciar em
        tela cheia. O padrao quadriculado sera exibido durante o tempo selecionado e depois mudara
        automaticamente para um painel cinzento solido. Observe cuidadosamente o painel cinzento para
        qualquer fantasma fraco do quadriculado. Aguarde mais alguns minutos e verifique novamente se
        alguma imagem retida esta a desaparecer. Um ecra saudavel nao deve mostrar retencao visivel, ou
        qualquer retencao presente deve desaparecer claramente dentro de alguns minutos.
      </p>

      <h2 className="text-lg font-bold text-fg">Saude do painel OLED e retencao de imagem</h2>
      <p>
        Os ecras OLED sao mais suscetiveis a retencao de imagem do que os ecras LCD porque cada pixel produz
        a sua propria luz atraves de compostos organicos que podem mudar temporariamente em eficiencia apos
        exposicao prolongada. Os monitores OLED modernos incluem varias contramedidas: o desvio de pixel
        move o conteudo exibido por pequenos incrementos para evitar exposicao prolongada a qualquer pixel
        individual; os ciclos de atualizacao de pixels equalizam o estado dos compostos organicos pelo
        painel; e os protetores de ecra e modos de suspensao sao aplicados para evitar conteudo estatico
        prolongado. Apesar destas medidas, os paineis OLED usados para conteudo com elementos de UI
        brilhantes persistentes (como barras de tarefas, logos brilhantes ou sobreposicoes estaticas)
        mostrao mais retencao de imagem do que os usados para conteudo variado.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender a retencao temporaria versus permanente</h2>
      <p>
        A distincao critica a compreender ao avaliar o resultado e se o que observa e temporario ou
        permanente. Apos o inicio da fase cinzenta, observe a imagem fantasma retida durante varios minutos.
        Se esta claramente a desaparecer, mesmo que lentamente, e retencao temporaria. A retencao temporaria
        e um comportamento normal para paineis OLED que foram expostos a conteudo de alto contraste
        prolongado. Se o padrao fantasma nao mostrar sinais de desaparecimento apos 10 a 15 minutos de
        conteudo variado, pode estar a aproximar-se da fronteira entre retencao temporaria e burn-in inicial,
        o que justifica monitorizacao ao longo do tempo.
      </p>

      <h2 className="text-lg font-bold text-fg">Comportamento de retencao LCD versus OLED</h2>
      <p>
        Nos paineis LCD, qualquer retencao de imagem revelada por este teste geralmente desaparece em
        segundos ou minutos porque o mecanismo (acumulacao temporaria de carga na camada de cristal liquido)
        reverte rapidamente com a operacao normal do ecra. Se vir retencao persistente num painel LCD que
        demora mais de 30 minutos a desaparecer, a camada de cristal liquido pode ter desenvolvido um
        desvio de alinhamento permanente, que e uma falha LCD incomum mas reconhecida. A retencao LCD nao
        esta relacionada com o envelhecimento de compostos organicos e comporta-se de forma bastante
        diferente da retencao OLED.
      </p>
    </>
  ),
}

export default async function ImageRetentionTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('image-retention-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ImageRetentionTest />
    </ToolPageLayout>
  )
}
