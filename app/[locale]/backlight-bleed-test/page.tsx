import type { Metadata } from 'next'
import { Moon } from 'lucide-react'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ScreenPanel } from '@/components/tools/ScreenPanel'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('backlight-bleed-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is backlight bleed?',
      a: 'Backlight bleed is light from an LCD monitor\'s backlight leaking around the edges or corners of the panel and showing through the LCD layer. Because LCD panels cannot completely block the backlight in dark areas, some light escapes around the panel edges. This appears as bright patches or glowing along the edges when the screen displays dark content. It is more noticeable on dark images, films with dark scenes, and in a dark room.',
    },
    {
      q: 'How do I test for backlight bleed?',
      a: 'Dim your room lights as much as possible, then click Full Screen to fill your display with pure black. Look carefully at all four edges and particularly the corners of the panel. Backlight bleed appears as patches of light or bright areas along the panel edges, often white or slightly warm-toned. Look from your normal viewing position rather than at an extreme angle, as this gives the most representative result.',
    },
    {
      q: 'How much backlight bleed is acceptable?',
      a: 'A small amount of light along the very corners and edges is normal and present to some degree on nearly all LCD panels. Bleed that stays confined to a few millimetres at the screen corners is generally considered within acceptable tolerances. Bleed that extends significantly inward from the edges, covers a wide band, or appears as a bright patch in the middle of an edge is considered excessive and may qualify for a warranty replacement.',
    },
    {
      q: 'What is the difference between backlight bleed and IPS glow?',
      a: 'Backlight bleed appears as fixed bright patches at specific locations on the screen edges regardless of your viewing angle. It is caused by physical light leakage around the panel frame. IPS glow is a soft shimmering brightness that appears in the corners of IPS panels when viewed at an off-angle or from a distance. IPS glow changes in intensity and position as you move your head, while backlight bleed stays in the same place. Use the IPS Glow Test to tell the difference.',
    },
    {
      q: 'Does backlight bleed get worse over time?',
      a: 'Backlight bleed can change over time in some monitors. It may decrease slightly as the panel warms up and components settle. It may also worsen if the panel is placed under physical stress, mounted incorrectly, or transported without adequate protection. Temperature changes can also temporarily affect bleed levels. If you notice a sudden significant increase in backlight bleed, check whether the monitor has been subjected to physical pressure.',
    },
    {
      q: 'Does the type of monitor panel affect backlight bleed?',
      a: 'Yes. IPS panels are generally more prone to backlight bleed than VA panels, which have much higher native contrast ratios and better light blocking. TN panels typically fall in between. OLED panels have no backlight at all and therefore cannot have backlight bleed, though they can have other uniformity issues. If backlight bleed is a critical concern, VA or OLED panels are worth considering for your next monitor purchase.',
    },
    {
      q: 'Can backlight bleed be fixed at home?',
      a: 'There are home remedies sometimes recommended online, such as loosening the bezel screws slightly or applying gentle pressure to certain areas. These are not recommended as they risk damaging the panel or voiding your warranty. If the bleed is within warranty and exceeds your manufacturer\'s stated threshold, the correct course of action is to contact your retailer or manufacturer for a replacement.',
    },
  ],
  pt: [
    {
      q: 'O que e o vazamento de luz de fundo?',
      a: 'O vazamento de luz de fundo e a luz da retroiluminacao de um monitor LCD a vazar pelas bordas ou cantos do painel e a atravessar a camada LCD. Como os paineis LCD nao conseguem bloquear completamente a retroiluminacao em areas escuras, alguma luz escapa pelas bordas do painel. Isto aparece como manchas brilhantes ou brilho ao longo das bordas quando o ecra exibe conteudo escuro. E mais notavel em imagens escuras, filmes com cenas escuras e numa sala escura.',
    },
    {
      q: 'Como testo o vazamento de luz de fundo?',
      a: 'Reduza as luzes da sala o maximo possivel e depois clique em Tela cheia para preencher o ecra com preto puro. Olhe cuidadosamente para todas as quatro bordas e especialmente para os cantos do painel. O vazamento de luz de fundo aparece como manchas de luz ou areas brilhantes ao longo das bordas do painel, muitas vezes brancas ou ligeiramente quentes em tonalidade. Olhe da sua posicao normal de visualizacao em vez de num angulo extremo, pois isso da o resultado mais representativo.',
    },
    {
      q: 'Quanto vazamento de luz de fundo e aceitavel?',
      a: 'Uma pequena quantidade de luz ao longo dos proprios cantos e bordas e normal e presente em algum grau em quase todos os paineis LCD. O vazamento que se mantem confinado a alguns milimetros nos cantos do ecra e geralmente considerado dentro das tolerancias aceitaveis. O vazamento que se estende significativamente para dentro das bordas, cobre uma faixa larga, ou aparece como uma mancha brilhante no meio de uma borda e considerado excessivo e pode qualificar para substituicao em garantia.',
    },
    {
      q: 'Qual e a diferenca entre vazamento de luz de fundo e brilho IPS?',
      a: 'O vazamento de luz de fundo aparece como manchas brilhantes fixas em localizacoes especificas nas bordas do ecra, independentemente do angulo de visualizacao. E causado por fuga fisica de luz em volta da moldura do painel. O brilho IPS e um brilho suave e cintilante que aparece nos cantos dos paineis IPS quando visto em angulo ou a distancia. O brilho IPS muda em intensidade e posicao conforme move a cabeca, enquanto o vazamento de luz de fundo permanece no mesmo lugar. Use o Teste de Brilho IPS para distinguir a diferenca.',
    },
    {
      q: 'O vazamento de luz de fundo piora com o tempo?',
      a: 'O vazamento de luz de fundo pode mudar com o tempo em alguns monitores. Pode diminuir ligeiramente a medida que o painel aquece e os componentes se estabilizam. Tambem pode piorar se o painel for submetido a stress fisico, montado incorretamente ou transportado sem protecao adequada. As mudancas de temperatura tambem podem afetar temporariamente os niveis de vazamento. Se notar um aumento repentino e significativo no vazamento de luz de fundo, verifique se o monitor sofreu pressao fisica.',
    },
    {
      q: 'O tipo de painel do monitor afeta o vazamento de luz de fundo?',
      a: 'Sim. Os paineis IPS sao geralmente mais propensos ao vazamento de luz de fundo do que os paineis VA, que tem razoes de contraste nativo muito mais altas e melhor bloqueio de luz. Os paineis TN tipicamente ficam entre os dois. Os paineis OLED nao tem retroiluminacao e portanto nao podem ter vazamento de luz de fundo, embora possam ter outros problemas de uniformidade. Se o vazamento de luz de fundo e uma preocupacao critica, os paineis VA ou OLED valem a pena considerar para a proxima compra de monitor.',
    },
    {
      q: 'O vazamento de luz de fundo pode ser corrigido em casa?',
      a: 'Ha remedios caseiros por vezes recomendados online, como afrouxar ligeiramente os parafusos da moldura ou aplicar pressao suave em certas areas. Estes nao sao recomendados pois arriscam danificar o painel ou anular a garantia. Se o vazamento esta dentro da garantia e excede o limiar declarado pelo fabricante, o curso de acao correto e contactar o retalhista ou fabricante para substituicao.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How to test for backlight bleed accurately</h2>
      <p>
        The backlight bleed test requires a completely dark panel and a dark room for accurate results. Even
        moderate ambient lighting can overpower the glow from backlight bleed and make it invisible during
        testing, then very noticeable when you watch films or play games in the dark. Dim your lights fully
        before entering fullscreen, and allow a moment for your eyes to adjust to the dark environment before
        inspecting the panel edges.
      </p>

      <h2 className="text-lg font-bold text-fg">What to look for during the test</h2>
      <p>
        Position yourself at your normal viewing distance and look straight at the panel. Start with the
        corners, as these are the most common locations for backlight bleed. Work your way along each edge.
        Bleed appears as a patch of light that is noticeably brighter than the rest of the black panel.
        It often has a slightly white or warm-toned quality. Some bleed is confined to a narrow strip at
        the very edge and is only visible at extreme angles, which is less significant than bleed that is
        clearly visible from a straight-on position.
      </p>

      <h2 className="text-lg font-bold text-fg">Backlight bleed versus IPS glow</h2>
      <p>
        Backlight bleed and IPS glow look similar at first glance but behave differently. To distinguish
        them, perform the test straight on and then tilt your head to view at a slight off-angle. IPS glow
        will shift in position and change in intensity as your viewing angle changes. Backlight bleed stays
        fixed at the same screen position regardless of angle. If the bright patches in the corners disappear
        or shift dramatically when you move your head, you are seeing IPS glow rather than bleed. Use the
        IPS Glow Test for a more detailed analysis of this distinction.
      </p>

      <h2 className="text-lg font-bold text-fg">Documenting bleed for a warranty claim</h2>
      <p>
        If your backlight bleed is significant enough to pursue a warranty claim, photograph the screen in a
        dark room with your monitor at its standard brightness. Take photos from straight on at your normal
        viewing distance. Most manufacturers have a written threshold for acceptable bleed levels. Contact
        your manufacturer or retailer with the photographs and your monitor model and serial number. Many
        manufacturers will arrange an exchange for excessive bleed within the warranty period.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como testar o vazamento de luz de fundo com precisao</h2>
      <p>
        O teste de vazamento de luz de fundo requer um painel completamente escuro e uma sala escura para
        resultados precisos. Mesmo a iluminacao ambiente moderada pode sobrepor o brilho do vazamento de
        luz de fundo e torna-lo invisivel durante o teste, depois muito notavel quando assiste a filmes ou
        joga no escuro. Reduza completamente as luzes antes de entrar em tela cheia e permita um momento
        para os seus olhos se adaptarem ao ambiente escuro antes de inspecionar as bordas do painel.
      </p>

      <h2 className="text-lg font-bold text-fg">O que procurar durante o teste</h2>
      <p>
        Posicione-se a distancia normal de visualizacao e olhe diretamente para o painel. Comece pelos
        cantos, pois estas sao as localizacoes mais comuns para vazamento de luz de fundo. Percorra cada
        borda. O vazamento aparece como uma mancha de luz visivelmente mais brilhante do que o resto do
        painel preto. Frequentemente tem uma qualidade ligeiramente branca ou quente em tonalidade. Algum
        vazamento esta confinado a uma faixa estreita na propria borda e so e visivel em angulos extremos,
        o que e menos significativo do que o vazamento claramente visivel de uma posicao frontal.
      </p>

      <h2 className="text-lg font-bold text-fg">Vazamento de luz de fundo versus brilho IPS</h2>
      <p>
        O vazamento de luz de fundo e o brilho IPS parecem semelhantes a primeira vista mas comportam-se
        de forma diferente. Para os distinguir, execute o teste frontalmente e depois incline a cabeca para
        ver num ligeiro angulo. O brilho IPS mudara de posicao e intensidade conforme o angulo de
        visualizacao muda. O vazamento de luz de fundo permanece fixo na mesma posicao do ecra
        independentemente do angulo. Se as manchas brilhantes nos cantos desaparecem ou mudam
        dramaticamente quando move a cabeca, esta a ver brilho IPS em vez de vazamento. Use o Teste de
        Brilho IPS para uma analise mais detalhada desta distincao.
      </p>

      <h2 className="text-lg font-bold text-fg">Documentar o vazamento para uma reclamacao de garantia</h2>
      <p>
        Se o vazamento de luz de fundo for suficientemente significativo para apresentar uma reclamacao de
        garantia, fotografe o ecra numa sala escura com o monitor no brilho padrao. Tire fotos frontalmente
        a distancia normal de visualizacao. A maioria dos fabricantes tem um limiar escrito para niveis
        aceitaveis de vazamento. Contacte o fabricante ou retalhista com as fotografias e o modelo e numero
        de serie do monitor. Muitos fabricantes providenciarao uma troca por vazamento excessivo dentro do
        periodo de garantia.
      </p>
    </>
  ),
}

const HINT: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Best results in a dark room.',
    body: 'Dim or switch off your room lights before entering fullscreen. Backlight bleed is significantly harder to see in a bright environment and may be completely invisible in a lit room.',
  },
  pt: {
    title: 'Melhores resultados numa sala escura.',
    body: 'Reduza ou desligue as luzes da sala antes de entrar em tela cheia. O vazamento de luz de fundo e significativamente mais dificil de ver num ambiente brilhante e pode ser completamente invisivel numa sala iluminada.',
  },
}

export default async function BacklightBleedTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('backlight-bleed-test', locale)
  const hint = HINT[locale] ?? HINT.en
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <>
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
          <Moon size={16} className="mt-0.5 shrink-0 text-slate-500" />
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">{hint.title}</span> {hint.body}
          </p>
        </div>
        <ScreenPanel color={{ hex: '#000000', label: 'Black' }} />
      </>
    </ToolPageLayout>
  )
}
