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
  return toolMetadata(getToolByLocale('yellow-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does a yellow screen test reveal?',
      a: 'Yellow is produced by combining full red and full green subpixels with no blue. A solid yellow screen reveals dead or faulty blue subpixels, which appear as small bright spots (because the blue subpixel is stuck on, making the pixel appear white rather than yellow) or as dark dots (because the red or green subpixel alongside a failed blue subpixel shows an unexpected colour). It also makes yellow tinting and colour accuracy issues clearly visible.',
    },
    {
      q: 'Why does my monitor have a yellow tint?',
      a: 'A yellow tint on your display during normal use usually indicates an incorrect white balance or colour temperature setting. Many monitors have a warm colour temperature preset that pushes whites toward yellow. It can also result from a colour profile that is not matched to your display, or from software features like night mode or eye care filters that reduce blue light emission. Check your monitor colour temperature settings and disable any eye care features temporarily to isolate the cause.',
    },
    {
      q: 'Is yellow useful for checking blue subpixel faults?',
      a: 'Yes. Yellow is one of the best colours for revealing blue subpixel faults because yellow requires zero blue output. A blue subpixel stuck in the on state will cause its pixel to display white or cyan against the yellow background, making it easy to spot. Similarly, a dead blue subpixel that keeps the pixel from displaying true yellow might not be visible on this test, but pairing the yellow screen with the Blue Screen test covers both scenarios.',
    },
    {
      q: 'How does yellow screen compare to red and green screens?',
      a: 'Red and green screens test the individual red and green channels in isolation. Yellow combines both red and green channels simultaneously, making it useful for checking how these two channels work together and for isolating blue subpixel faults specifically. Running red, green, blue, and yellow screens together gives comprehensive coverage across all subpixel fault types.',
    },
    {
      q: 'Can I use the yellow screen to check for screen burn-in?',
      a: 'On OLED panels, a yellow screen can reveal areas where red and green organic compounds have aged at different rates, appearing as subtle tonal variations. For a structured burn-in and image retention test, use the Image Retention Test tool, which uses high-contrast patterns designed specifically to reveal differential ageing across the panel.',
    },
    {
      q: 'Does yellow look different on different types of monitors?',
      a: 'Yes. The appearance of saturated yellow varies noticeably between panel types and calibration states. Wide colour gamut displays may show a more intensely saturated yellow than sRGB displays. Displays with a warm colour temperature preset may show a slightly orange-tinged yellow. These are not necessarily faults, but they can indicate calibration differences that matter for colour-critical work.',
    },
  ],
  pt: [
    {
      q: 'O que revela um teste de tela amarela?',
      a: 'O amarelo e produzido pela combinacao dos subpixeis vermelho e verde a plena intensidade sem azul. Uma tela amarela solida revela subpixeis azuis mortos ou com falha, que aparecem como pequenos pontos brilhantes (porque o subpixel azul esta preso no estado ligado, fazendo com que o pixel aparea branco em vez de amarelo) ou como pontos escuros. Tambem torna claramente visiveis os problemas de tonalidade amarela e precisao de cor.',
    },
    {
      q: 'Por que o meu monitor tem uma tonalidade amarela?',
      a: 'Uma tonalidade amarela no ecra durante o uso normal geralmente indica uma definicao incorreta de balanco de brancos ou temperatura de cor. Muitos monitores tem uma predefinicao de temperatura de cor quente que empurra os brancos para o amarelo. Tambem pode resultar de um perfil de cor que nao corresponde ao ecra, ou de funcionalidades de software como modo noturno ou filtros de cuidado ocular que reduzem a emissao de luz azul. Verifique as definicoes de temperatura de cor do monitor e desative temporariamente as funcoes de cuidado ocular para isolar a causa.',
    },
    {
      q: 'O amarelo e util para verificar falhas do subpixel azul?',
      a: 'Sim. O amarelo e uma das melhores cores para revelar falhas do subpixel azul porque o amarelo requer zero saida azul. Um subpixel azul preso no estado ligado fara com que o seu pixel exiba branco ou ciano contra o fundo amarelo, tornando-o facil de detetar. Da mesma forma, um subpixel azul morto que impeca o pixel de exibir amarelo verdadeiro pode nao ser visivel neste teste, mas combinar a tela amarela com o teste de Tela Azul cobre ambos os cenarios.',
    },
    {
      q: 'Como se compara a tela amarela com as telas vermelha e verde?',
      a: 'As telas vermelha e verde testam os canais vermelho e verde individuais em isolamento. O amarelo combina ambos os canais vermelho e verde simultaneamente, sendo util para verificar como estes dois canais funcionam juntos e para isolar especificamente falhas do subpixel azul. Executar as telas vermelha, verde, azul e amarela juntas oferece cobertura abrangente em todos os tipos de falhas de subpixeis.',
    },
    {
      q: 'Posso usar a tela amarela para verificar a queima de imagem?',
      a: 'Nos paineis OLED, uma tela amarela pode revelar areas onde os compostos organicos vermelho e verde envelheceram a taxas diferentes, aparecendo como variacoes subtis de tonalidade. Para um teste estruturado de queima e retencao de imagem, use a ferramenta Teste de Retencao de Imagem, que usa padroes de alto contraste especificamente concebidos para revelar o envelhecimento diferencial no painel.',
    },
    {
      q: 'O amarelo parece diferente em diferentes tipos de monitores?',
      a: 'Sim. A aparencia do amarelo saturado varia visivelmente entre tipos de paineis e estados de calibracao. Os ecras com gama de cor alargada podem mostrar um amarelo mais intensamente saturado do que os ecras sRGB. Os ecras com uma predefinicao de temperatura de cor quente podem mostrar um amarelo com um ligeiro toque laranja. Estas nao sao necessariamente falhas, mas podem indicar diferencas de calibracao que importam para trabalho critico de cor.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">What the yellow screen test checks</h2>
      <p>
        Yellow is a secondary colour on displays, produced by combining the red and green subpixels at full
        intensity with the blue subpixel completely off. This makes a yellow panel one of the most targeted
        tests for blue subpixel faults. Any blue subpixel stuck in an on state causes its pixel to appear
        brighter than the surrounding yellow, showing as a white or bluish dot against the uniform background.
        Any pixel fault that affects the red or green channel will also become visible as a differently
        coloured dot that breaks the uniform yellow field.
      </p>

      <h2 className="text-lg font-bold text-fg">Yellow tinting and colour temperature</h2>
      <p>
        A yellow or warm cast on neutral content during normal use is one of the most common display
        complaints. The yellow screen test can help distinguish between a hardware fault and a calibration
        issue. If your display shows pure yellow uniformly on this test without any unusual cast or patches,
        the yellow tinting you see on white content is likely a colour temperature or white balance setting
        rather than a hardware failure. Check your monitor OSD for a colour temperature preset and consider
        switching to a cooler temperature (6500K is the standard for desktop use) or resetting to factory
        defaults.
      </p>

      <h2 className="text-lg font-bold text-fg">Using yellow alongside other colour screen tests</h2>
      <p>
        Yellow works best as part of a complete colour screen testing sequence. Running the Red Screen, Green
        Screen, Blue Screen, and Yellow Screen in order gives you the most thorough view of subpixel health
        across all three channels. The yellow screen specifically covers the scenario where a blue subpixel is
        stuck on, while the blue screen covers the scenario where red or green subpixels are stuck on. Together
        they provide complementary coverage that catches fault types each individual primary colour test might
        miss.
      </p>

      <h2 className="text-lg font-bold text-fg">What to do if you spot a fault</h2>
      <p>
        If you see a dot or spot that breaks the uniform yellow field, note its position on the screen as
        precisely as possible. Then test with the Blue Screen to confirm whether the fault involves the blue
        subpixel. Cross-reference with the Dead Pixel Test to see how the fault appears across all eight test
        colours. Document your findings with a photograph and check your monitor warranty. Most manufacturers
        have a pixel fault policy that specifies the number and position of acceptable faults before they will
        offer a repair or replacement.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">O que verifica o teste de tela amarela</h2>
      <p>
        O amarelo e uma cor secundaria nos ecras, produzida pela combinacao dos subpixeis vermelho e verde a
        plena intensidade com o subpixel azul completamente desligado. Isto torna um painel amarelo um dos
        testes mais direcionados para falhas do subpixel azul. Qualquer subpixel azul preso no estado ligado
        faz com que o seu pixel aparea mais brilhante do que o amarelo circundante, mostrando-se como um ponto
        branco ou azulado contra o fundo uniforme. Qualquer falha de pixel que afete o canal vermelho ou verde
        tambem se tornara visivel como um ponto de cor diferente que quebra o campo amarelo uniforme.
      </p>

      <h2 className="text-lg font-bold text-fg">Tonalidade amarela e temperatura de cor</h2>
      <p>
        Uma tonalidade amarela ou quente no conteudo neutro durante o uso normal e uma das queixas mais comuns
        sobre ecras. O teste de tela amarela pode ajudar a distinguir entre uma falha de hardware e um problema
        de calibracao. Se o seu ecra mostrar amarelo puro uniformemente neste teste sem qualquer tonalidade ou
        manchas incomuns, a tonalidade amarela que ve no conteudo branco e provavelmente uma definicao de
        temperatura de cor ou balanco de brancos em vez de uma falha de hardware. Verifique o menu OSD do
        monitor para uma predefinicao de temperatura de cor e considere mudar para uma temperatura mais fria
        (6500K e o padrao para uso em computador) ou repor as definicoes de fabrica.
      </p>

      <h2 className="text-lg font-bold text-fg">Usar o amarelo juntamente com outros testes de tela de cor</h2>
      <p>
        O amarelo funciona melhor como parte de uma sequencia completa de testes de tela de cor. Executar as
        telas Vermelha, Verde, Azul e Amarela em ordem da-lhe a visao mais completa da saude dos subpixeis nos
        tres canais. A tela amarela cobre especificamente o cenario em que um subpixel azul esta preso no
        estado ligado, enquanto a tela azul cobre o cenario em que os subpixeis vermelho ou verde estao presos
        no estado ligado. Em conjunto, oferecem cobertura complementar que deteta tipos de falhas que cada
        teste de cor primaria individual pode perder.
      </p>

      <h2 className="text-lg font-bold text-fg">O que fazer se detetar uma falha</h2>
      <p>
        Se vir um ponto ou mancha que quebra o campo amarelo uniforme, anote a sua posicao no ecra o mais
        precisamente possivel. Em seguida, teste com a Tela Azul para confirmar se a falha envolve o subpixel
        azul. Compare com o Teste de Pixels Mortos para ver como a falha aparece nas oito cores de teste.
        Documente as suas descobertas com uma fotografia e verifique a garantia do monitor. A maioria dos
        fabricantes tem uma politica de falhas de pixels que especifica o numero e posicao de falhas aceitaveis
        antes de oferecerem reparacao ou substituicao.
      </p>
    </>
  ),
}

export default async function YellowScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('yellow-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#FFFF00', label: 'Yellow' }} />
    </ToolPageLayout>
  )
}
