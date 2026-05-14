import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('grey-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is the dirty screen effect and how does grey reveal it?',
      a: 'The dirty screen effect (DSE) is an uneven brightness pattern that appears as cloudy, patchy, or smudged areas on the display panel. It is caused by uneven pressure or inconsistency in the LCD panel layers during manufacturing. A mid-grey background is the most effective colour for revealing DSE because it sits in the middle tonal range where brightness variation is most visible to the human eye. White and black screens tend to mask DSE, while grey makes it obvious.',
    },
    {
      q: 'What shade of grey should I use for display testing?',
      a: 'A medium neutral grey at roughly 50 percent brightness is the most commonly used shade for display uniformity and DSE testing. This tool uses a standard mid-grey. Avoid testing at very light or very dark grey values, as these extremes tend to hide the kinds of uniformity issues that mid-grey reveals.',
    },
    {
      q: 'Can the grey screen reveal dead pixels?',
      a: 'Yes, though the grey screen is less effective for dead pixel detection than the individual colour screens. Dead pixels that are completely dark appear as small dark spots against the grey. Stuck pixels that are stuck at white or a primary colour may also be visible. For the most thorough dead pixel check, use the Dead Pixel Test which cycles through multiple colours.',
    },
    {
      q: 'Why does my grey screen look uneven with patches of different brightness?',
      a: 'Uneven brightness on a grey screen is typically caused by dirty screen effect (DSE), backlight uniformity issues, or in some cases a partially failing backlight. Budget monitors often exhibit some degree of DSE, and a small amount is considered normal. If the patches are significant in size or intensity, you may have a panel uniformity issue that could qualify for a warranty claim.',
    },
    {
      q: 'Is the grey screen test the same as a screen uniformity test?',
      a: 'They are related but not identical. A grey screen test is a quick visual check using a mid-grey background. The Screen Uniformity Test tool provides a more structured approach with specific reference points for comparing brightness across specific areas of the display. The grey screen is a good starting point, while the Screen Uniformity Test is more appropriate for documenting uniformity for a warranty claim.',
    },
    {
      q: 'Should I test in a bright or dark room?',
      a: 'Test in moderate ambient lighting for the grey screen. Unlike the black screen test which benefits from a darker room, the grey screen is about surface uniformity rather than backlight bleed detection. Testing in a very bright room can cause reflections that mask uniformity issues. Moderate, indirect room lighting gives the best conditions for seeing DSE and backlight variation clearly.',
    },
  ],
  pt: [
    {
      q: 'O que e o efeito de tela suja e como o cinzento o revela?',
      a: 'O efeito de tela suja (DSE) e um padrao de brilho irregular que aparece como areas opacas, irregulares ou manchadas no painel de ecra. E causado por pressao desigual ou inconsistencia nas camadas do painel LCD durante o fabrico. Um fundo cinzento medio e a cor mais eficaz para revelar o DSE porque se situa na gama tonal media onde a variacao de brilho e mais visivel para o olho humano. As telas branca e preta tendem a mascarar o DSE, enquanto o cinzento o torna obvio.',
    },
    {
      q: 'Que tonalidade de cinzento devo usar para testar o ecra?',
      a: 'Um cinzento neutro medio a cerca de 50% de brilho e o tom mais utilizado para testes de uniformidade de ecra e DSE. Esta ferramenta usa um cinzento medio padrao. Evite testar em valores de cinzento muito claros ou muito escuros, pois esses extremos tendem a ocultar os tipos de problemas de uniformidade que o cinzento medio revela.',
    },
    {
      q: 'A tela cinzenta pode revelar pixels mortos?',
      a: 'Sim, embora a tela cinzenta seja menos eficaz para detetar pixels mortos do que as telas de cor individuais. Os pixels mortos completamente escuros aparecem como pequenos pontos escuros contra o cinzento. Os pixels presos no branco ou numa cor primaria tambem podem ser visiveis. Para a verificacao mais completa de pixels mortos, use o Teste de Pixels Mortos, que alterna entre multiplas cores.',
    },
    {
      q: 'Por que a minha tela cinzenta parece irregular com manchas de brilho diferente?',
      a: 'O brilho irregular numa tela cinzenta e tipicamente causado pelo efeito de tela suja (DSE), problemas de uniformidade da retroiluminacao ou, em alguns casos, uma retroiluminacao com falha parcial. Os monitores de entrada muitas vezes exibem algum grau de DSE e uma pequena quantidade e considerada normal. Se as manchas forem significativas em tamanho ou intensidade, pode ter um problema de uniformidade de painel que pode qualificar para reclamacao de garantia.',
    },
    {
      q: 'O teste de tela cinzenta e o mesmo que um teste de uniformidade de tela?',
      a: 'Estao relacionados mas nao sao identicos. Um teste de tela cinzenta e uma verificacao visual rapida usando um fundo cinzento medio. A ferramenta Teste de Uniformidade de Tela fornece uma abordagem mais estruturada com pontos de referencia especificos para comparar o brilho em areas especificas do ecra. A tela cinzenta e um bom ponto de partida, enquanto o Teste de Uniformidade de Tela e mais adequado para documentar a uniformidade para uma reclamacao de garantia.',
    },
    {
      q: 'Devo testar numa sala brilhante ou escura?',
      a: 'Teste com iluminacao ambiente moderada para a tela cinzenta. Ao contrario do teste de tela preta, que beneficia de uma sala mais escura, a tela cinzenta e sobre uniformidade de superficie e nao detetar vazamento de luz de fundo. Testar numa sala muito brilhante pode causar reflexos que mascaram problemas de uniformidade. A iluminacao indireta moderada da as melhores condicoes para ver claramente o DSE e a variacao de retroiluminacao.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">Why grey is the most revealing test colour</h2>
      <p>
        Of all the solid colours you can display on a monitor, mid-grey is the most effective at revealing
        display uniformity problems. White backgrounds push all subpixels to maximum output, which tends to
        mask moderate brightness variations. Black backgrounds reveal backlight bleed but hide the internal
        panel inconsistencies that cause dirty screen effect. Grey sits at the midpoint where the human visual
        system is most sensitive to luminance differences, making even subtle variations in brightness across
        the panel clearly visible.
      </p>

      <h2 className="text-lg font-bold text-fg">Understanding dirty screen effect</h2>
      <p>
        Dirty screen effect (DSE) is a characteristic of some LCD panels where the display appears to have
        cloudy, smudged, or mottled areas even when the screen is physically clean. It is caused by
        inconsistencies in the LCD panel structure itself, specifically variations in how the liquid crystal
        layer or diffuser layers are assembled. DSE is most common on curved monitors and budget flat panels.
        A moderate amount of DSE near the edges is considered within normal tolerances for most consumer
        monitors, but significant DSE that covers large areas or is visible during normal desktop use is
        worth documenting for a potential warranty claim.
      </p>

      <h2 className="text-lg font-bold text-fg">Grey screen versus the Screen Uniformity Test</h2>
      <p>
        The grey screen gives you a quick visual impression of uniformity across your panel. The Screen
        Uniformity Test provides a more structured diagnostic framework with zones and reference points for
        comparing brightness across specific areas of the display. If the grey screen reveals something
        concerning, the Screen Uniformity Test is the appropriate next step before contacting your retailer
        or manufacturer with a warranty claim.
      </p>

      <h2 className="text-lg font-bold text-fg">What to do if you see uniformity problems</h2>
      <p>
        If you notice significant clouding, patches, or brightness variation on the grey screen, document it
        by photographing the display in a darkened room with your monitor at a consistent brightness level.
        Check whether the issue is consistent across different grey tones by running the Gradient Banding Test.
        Contact your monitor manufacturer or retailer with the evidence. Most manufacturers have a panel
        uniformity threshold beyond which they will offer a replacement.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Por que o cinzento e a cor de teste mais reveladora</h2>
      <p>
        De todas as cores solidas que pode exibir num monitor, o cinzento medio e o mais eficaz para revelar
        problemas de uniformidade do ecra. Os fundos brancos empurram todos os subpixeis para a saida maxima,
        o que tende a mascarar variacoes moderadas de brilho. Os fundos pretos revelam o vazamento de luz de
        fundo, mas ocultam as inconsistencias internas do painel que causam o efeito de tela suja. O cinzento
        situa-se no ponto medio onde o sistema visual humano e mais sensivel as diferencas de luminancia,
        tornando visiveis mesmo as variacoes subtis de brilho no painel.
      </p>

      <h2 className="text-lg font-bold text-fg">Compreender o efeito de tela suja</h2>
      <p>
        O efeito de tela suja (DSE) e uma caracteristica de alguns paineis LCD onde o ecra parece ter areas
        opacas, manchadas ou marmoreadas mesmo quando o ecra esta fisicamente limpo. E causado por
        inconsistencias na propria estrutura do painel LCD, especificamente variacoes na forma como a camada
        de cristal liquido ou as camadas de difusor sao montadas. O DSE e mais comum em monitores curvos e
        paineis planos de entrada. Uma quantidade moderada de DSE perto das bordas e considerada dentro das
        tolerancias normais para a maioria dos monitores de consumo.
      </p>

      <h2 className="text-lg font-bold text-fg">Tela cinzenta versus Teste de Uniformidade de Tela</h2>
      <p>
        A tela cinzenta da-lhe uma impressao visual rapida da uniformidade do painel. O Teste de Uniformidade
        de Tela fornece uma estrutura de diagnostico mais estruturada com zonas e pontos de referencia para
        comparar o brilho em areas especificas do ecra. Se a tela cinzenta revelar algo preocupante, o Teste
        de Uniformidade de Tela e o passo seguinte apropriado antes de contactar o retalhista ou fabricante
        com uma reclamacao de garantia.
      </p>

      <h2 className="text-lg font-bold text-fg">O que fazer se vir problemas de uniformidade</h2>
      <p>
        Se notar nuvens significativas, manchas ou variacao de brilho na tela cinzenta, documente-os
        fotografando o ecra numa sala mais escura com o monitor a um nivel de brilho consistente. Verifique
        se o problema e consistente em diferentes tons de cinzento executando o Teste de Faixas em Gradiente.
        Contacte o fabricante ou retalhista do monitor com as evidencias. A maioria dos fabricantes tem um
        limiar de uniformidade de painel alem do qual oferece substituicao.
      </p>
    </>
  ),
}

export default async function GreyScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('grey-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#808080', label: 'Grey' }} />
    </ToolPageLayout>
  )
}
