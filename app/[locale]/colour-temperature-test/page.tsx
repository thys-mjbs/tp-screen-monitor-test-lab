import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { ColourTemperatureTest } from '@/components/tools/ColourTemperatureTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('colour-temperature-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is colour temperature on a monitor?',
      a: 'Colour temperature describes the tint of the white point on your display, measured in Kelvin. Lower values such as 2700K produce a warm orange-white, similar to incandescent lighting. Higher values such as 9000K produce a cool blue-white. The standard monitor white point for most content is 6500K, known as D65. A monitor set to a lower colour temperature will appear warmer or yellower than intended, while one set higher will appear cooler or bluer.',
    },
    {
      q: 'What is the D65 standard?',
      a: 'D65 is the international standard white point for consumer displays, defined at a colour temperature of approximately 6500K. It represents average daylight in northern Europe and is the reference point for the sRGB, Display P3, and most other colour spaces used in consumer content. Nearly all photos, videos, and games are mastered assuming the viewer has a D65-calibrated display. Deviating from D65 causes content to appear with an unintended colour cast.',
    },
    {
      q: 'How do I use this colour temperature test?',
      a: 'Look at the row of swatches on a dark background and click the one that looks like the most neutral, pure white to you. The swatches range from very warm (2700K, orange-tinted) on the left to very cool (10000K, blue-tinted) on the right, with pure white D65 at 6500K. If the swatch you find neutral is warmer than 6500K, your monitor likely has a cool blue tint. If the neutral swatch is cooler than 6500K, your monitor likely has a warm yellow tint.',
    },
    {
      q: 'My selected swatch was warmer than D65. What does this mean?',
      a: 'If a warm swatch appeared most neutral to you, your monitor probably has a cool or blue-shifted white point. Your eyes are compensating by perceiving warm light as neutral. Try entering your monitor\'s on-screen display menu and reducing the colour temperature setting, or try the "Warm" or "6500K" preset if available. If the tint is severe, a hardware colorimeter and calibration software will give a more precise result.',
    },
    {
      q: 'My selected swatch was cooler than D65. What does this mean?',
      a: 'If a cool swatch appeared most neutral to you, your monitor probably has a warm or yellow-shifted white point. Try entering your monitor\'s on-screen display and increasing the colour temperature setting, or selecting a "Cool" or "6500K" preset. Warm monitor tints are common at lower brightness settings on some LCD panels, and are also common on monitors set to a "Warm" or "Reading" mode.',
    },
    {
      q: 'What colour temperature setting should I use for my monitor?',
      a: 'For general use including photo editing, video, and web browsing, 6500K (D65) is the correct standard. Some monitors label this as "6500K", "sRGB", or "Standard" mode. For work environments with warm incandescent lighting, some users prefer 5000K to 5500K for comfort. For night use, a warmer 3000K to 4000K setting reduces blue light exposure. These are not display calibration targets but personal comfort preferences for non-critical work.',
    },
    {
      q: 'Does room lighting affect what I see in this test?',
      a: 'Yes, significantly. Your visual system adapts to the dominant light source in your environment. If your room is lit with warm incandescent bulbs, your eyes will adapt to that warmth and cause cool monitor colours to appear more neutral. For the most accurate result, perform this test in a darkened room with no other significant light sources, or with neutral daylight-balanced lighting. Allow your eyes to adapt to the screen for 30 seconds before making a selection.',
    },
    {
      q: 'Is this test as accurate as hardware calibration?',
      a: 'No. This test is a subjective visual assessment and is affected by eye adaptation, ambient lighting, and individual colour perception differences. It is useful for identifying obvious white balance problems but cannot replace a hardware colorimeter such as an X-Rite i1Display or Datacolor Spyder. Hardware calibration measures your display\'s output objectively and creates an ICC profile that corrects the colour accuracy at every point in the tonal range.',
    },
  ],
  pt: [
    {
      q: 'O que e a temperatura de cor num monitor?',
      a: 'A temperatura de cor descreve a tonalidade do ponto branco do ecra, medida em Kelvin. Valores mais baixos como 2700K produzem um branco-laranja quente, semelhante a iluminacao incandescente. Valores mais altos como 9000K produzem um branco-azul frio. O ponto branco padrao do monitor para a maioria do conteudo e 6500K, conhecido como D65. Um monitor definido para uma temperatura de cor mais baixa aparecera mais quente ou amarelado do que pretendido, enquanto um definido mais alto aparecera mais frio ou azulado.',
    },
    {
      q: 'O que e o padrao D65?',
      a: 'D65 e o ponto branco padrao internacional para ecras de consumo, definido a uma temperatura de cor de aproximadamente 6500K. Representa a luz do dia media no norte da Europa e e o ponto de referencia para o sRGB, Display P3, e a maioria dos outros espacos de cor usados no conteudo de consumo. Quase todas as fotos, videos e jogos sao masterizados assumindo que o espetador tem um ecra calibrado para D65. Desviar do D65 faz com que o conteudo apareca com um cast de cor nao pretendido.',
    },
    {
      q: 'Como uso este teste de temperatura de cor?',
      a: 'Observe a fila de amostras num fundo escuro e clique na que parece o branco mais neutro e puro para si. As amostras variam de muito quente (2700K, tonalidade laranja) a esquerda para muito frio (10000K, tonalidade azul) a direita, com branco puro D65 a 6500K. Se a amostra que encontra neutra e mais quente do que 6500K, o monitor provavelmente tem uma tonalidade azul fria. Se a amostra neutra for mais fria do que 6500K, o monitor provavelmente tem uma tonalidade amarela quente.',
    },
    {
      q: 'A amostra selecionada era mais quente do que D65. O que significa isso?',
      a: 'Se uma amostra quente apareceu mais neutra para si, o monitor provavelmente tem um ponto branco frio ou deslocado para o azul. Os seus olhos estao a compensar percebendo a luz quente como neutra. Tente entrar no menu de ecra do monitor e reduzir a definicao de temperatura de cor, ou experimente o predefinicao Quente ou 6500K se disponivel. Se a tonalidade for severa, um colorimetro de hardware e software de calibracao darao um resultado mais preciso.',
    },
    {
      q: 'A amostra selecionada era mais fria do que D65. O que significa isso?',
      a: 'Se uma amostra fria apareceu mais neutra para si, o monitor provavelmente tem um ponto branco quente ou deslocado para o amarelo. Tente entrar no ecra do monitor e aumentar a definicao de temperatura de cor, ou selecionar uma predefinicao Frio ou 6500K. As tonalidades quentes de monitor sao comuns em definicoes de brilho mais baixas em alguns paineis LCD, e tambem sao comuns em monitores definidos para um modo Quente ou Leitura.',
    },
    {
      q: 'Que definicao de temperatura de cor devo usar para o meu monitor?',
      a: 'Para uso geral incluindo edicao de fotos, video e navegacao na web, 6500K (D65) e o padrao correto. Alguns monitores rotulam isso como modo 6500K, sRGB ou Standard. Para ambientes de trabalho com iluminacao incandescente quente, alguns utilizadores preferem 5000K a 5500K para conforto. Para uso noturno, uma definicao mais quente de 3000K a 4000K reduz a exposicao a luz azul. Estes nao sao alvos de calibracao do ecra mas preferencias pessoais de conforto para trabalho nao critico.',
    },
    {
      q: 'A iluminacao da sala afeta o que vejo neste teste?',
      a: 'Sim, significativamente. O sistema visual adapta-se a fonte de luz dominante no ambiente. Se a sala estiver iluminada com lampadas incandescentes quentes, os olhos adaptam-se a esse calor e fazem com que as cores frias do monitor parecam mais neutras. Para o resultado mais preciso, realize este teste numa sala escurecida sem outras fontes de luz significativas, ou com iluminacao neutra equilibrada com a luz do dia. Permita que os seus olhos se adaptem ao ecra por 30 segundos antes de fazer uma selecao.',
    },
    {
      q: 'Este teste e tao preciso quanto a calibracao de hardware?',
      a: 'Nao. Este teste e uma avaliacao visual subjetiva e e afetado pela adaptacao ocular, iluminacao ambiente e diferencas individuais na percepcao de cor. E util para identificar problemas obvios de balanco de branco, mas nao pode substituir um colorimetro de hardware como um X-Rite i1Display ou Datacolor Spyder. A calibracao de hardware mede a saida do ecra objetivamente e cria um perfil ICC que corrige a precisao de cor em todos os pontos da gama tonal.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How the colour temperature test works</h2>
      <p>
        The test displays eleven colour swatches against a dark neutral surround, ranging from 2700K
        (warm, orange-tinted white) on the left to 10000K (cool, blue-tinted white) on the right. The
        6500K swatch is pure RGB white and represents the D65 standard. When you click the swatch that
        appears most neutral to you, the test infers the likely tint direction of your monitor. If a warm
        swatch looks neutral, your display is likely running cool. If a cool swatch looks neutral, your
        display is likely running warm.
      </p>

      <h2 className="text-lg font-bold text-fg">Why the dark surround matters</h2>
      <p>
        Colour perception is strongly influenced by surrounding colours, a phenomenon called simultaneous
        contrast. Viewing coloured swatches against a dark neutral background minimises this effect and
        gives the most accurate read of each swatch&apos;s colour. Viewing the test against a white or
        coloured page background would distort your perception. The dark panel in this test is deliberate
        and mimics the conditions used in professional colour evaluation environments.
      </p>

      <h2 className="text-lg font-bold text-fg">How to adjust your monitor colour temperature</h2>
      <p>
        Most monitors include a colour temperature setting in their on-screen display menu, often labelled
        as Warm, Normal, Cool, or a specific Kelvin value. For standard content the correct target is
        6500K. If your monitor offers custom RGB gain controls, you can fine-tune the individual red,
        green, and blue channels to shift the white point. Professional calibration using a hardware
        colorimeter produces a precise ICC profile that corrects colour throughout the full tonal range,
        which is particularly important for photo editing and colour-critical work.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitations of subjective white balance testing</h2>
      <p>
        This test relies on your visual judgement, which is affected by eye adaptation, room lighting,
        fatigue, and individual differences in colour perception. Some people have naturally shifted
        colour perception that causes them to see warm or cool as neutral without any monitor error. For
        a definitive result, hardware calibration is the only reliable method. Use this test to identify
        whether an obvious tint problem exists and whether it is worth investigating further with proper
        measurement tools.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o teste de temperatura de cor</h2>
      <p>
        O teste exibe onze amostras de cor contra um envolvente escuro neutro, variando de 2700K (branco
        quente com tonalidade laranja) a esquerda para 10000K (branco frio com tonalidade azul) a direita.
        A amostra de 6500K e branco RGB puro e representa o padrao D65. Quando clica na amostra que parece
        mais neutra para si, o teste infere a provavel direcao de tonalidade do monitor. Se uma amostra
        quente parecer neutra, o ecra provavelmente esta a funcionar frio. Se uma amostra fria parecer
        neutra, o ecra provavelmente esta a funcionar quente.
      </p>

      <h2 className="text-lg font-bold text-fg">Por que o envolvente escuro importa</h2>
      <p>
        A percepcao de cor e fortemente influenciada pelas cores envolventes, um fenomeno chamado contraste
        simultaneo. Ver amostras coloridas contra um fundo escuro neutro minimiza este efeito e da a leitura
        mais precisa da cor de cada amostra. Ver o teste contra um fundo de pagina branco ou colorido
        distorceria a percepcao. O painel escuro neste teste e deliberado e imita as condicoes usadas em
        ambientes profissionais de avaliacao de cor.
      </p>

      <h2 className="text-lg font-bold text-fg">Como ajustar a temperatura de cor do monitor</h2>
      <p>
        A maioria dos monitores inclui uma definicao de temperatura de cor no seu menu de ecra, frequentemente
        rotulada como Quente, Normal, Frio, ou um valor Kelvin especifico. Para conteudo padrao o alvo correto
        e 6500K. Se o monitor oferecer controlos de ganho RGB personalizados, pode afinar os canais vermelho,
        verde e azul individuais para deslocar o ponto branco. A calibracao profissional usando um colorimetro
        de hardware produz um perfil ICC preciso que corrige a cor em toda a gama tonal, o que e particularmente
        importante para edicao de fotos e trabalho critico de cor.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitacoes do teste subjetivo de balanco de branco</h2>
      <p>
        Este teste depende do julgamento visual, que e afetado pela adaptacao ocular, iluminacao da sala,
        fadiga e diferencas individuais na percepcao de cor. Algumas pessoas tem percepcao de cor naturalmente
        deslocada que as faz ver quente ou frio como neutro sem qualquer erro de monitor. Para um resultado
        definitivo, a calibracao de hardware e o unico metodo fiavel. Use este teste para identificar se
        existe um problema obvio de tonalidade e se vale a pena investigar mais com ferramentas de medicao
        adequadas.
      </p>
    </>
  ),
}

export default async function ColourTemperatureTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('colour-temperature-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ColourTemperatureTest />
    </ToolPageLayout>
  )
}
