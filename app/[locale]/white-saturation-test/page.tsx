import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { WhiteSaturationTest } from '@/components/tools/WhiteSaturationTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('white-saturation-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What does the white saturation test check?',
      a: 'The test displays 16 near-white patches stepping from pure white (255) down to a light grey (196) in increments of 4. By counting how many distinct shades you can see against the white background, you can assess your monitor\'s highlight detail and white saturation performance. A display with correct calibration should show all 16 steps as visibly different from pure white.',
    },
    {
      q: 'What does it mean if I cannot see the lightest steps?',
      a: 'If the first several swatches all look identical to the white background, your display may be clipping highlights, compressing near-white tones to pure white and losing detail in bright areas. This is called blown highlights and is the opposite of crushed blacks. Highlight clipping is often caused by contrast or brightness settings that are too high, or by limited colour range settings that compress the upper end of the tonal scale.',
    },
    {
      q: 'What causes highlight clipping on a monitor?',
      a: 'The most common causes are: monitor contrast setting too high, which can push near-white tones to pure white; incorrect colour range settings using a limited range (16-235) instead of full range (0-255), which clips both highlights and shadows; and gamma settings that are too low, which lightens the tonal curve and clips the bright end. Check your monitor contrast control first, then confirm you are using full RGB colour range in your GPU settings.',
    },
    {
      q: 'Is the white saturation test the opposite of the black level test?',
      a: 'Yes, they test opposite ends of the tonal scale. The Contrast Black Level Test checks your display\'s ability to distinguish near-black tones, which reveals issues like crushed blacks and poor shadow detail. The White Saturation Test checks the other end, testing whether near-white tones are preserved or compressed to pure white. A well-calibrated display should pass both tests, showing distinct steps at both ends of the tonal scale.',
    },
    {
      q: 'Does monitor brightness affect the white saturation test?',
      a: 'Yes. Increasing brightness raises the overall light output of the panel. While this makes the panel look brighter overall, it does not necessarily affect whether near-white tones are distinguishable; that is more a contrast and gamma setting issue. However, some monitors apply different tone curves at different brightness settings, which can affect how well near-white tones are separated. Testing at your normal brightness setting gives the most representative result.',
    },
    {
      q: 'How many steps should I be able to see on a good monitor?',
      a: 'On a well-calibrated 8-bit display with correct gamma and colour range settings, you should be able to distinguish all 16 steps, though the lightest two or three near pure white may require careful inspection. On a 10-bit display, near-white steps should be clearly visible across the full range. If you can only see 8 to 10 distinct steps, your highlight calibration may benefit from adjustment.',
    },
  ],
  pt: [
    {
      q: 'O que verifica o teste de saturacao de branco?',
      a: 'O teste exibe 16 zonas proximo-brancas progredindo do branco puro (255) para um cinzento claro (196) em incrementos de 4. Ao contar quantas sombras distintas consegue ver contra o fundo branco, pode avaliar o detalhe de realce e o desempenho de saturacao de branco do monitor. Um ecra com calibracao correta deve mostrar todos os 16 passos como visivelmente diferentes do branco puro.',
    },
    {
      q: 'O que significa se nao consigo ver os passos mais claros?',
      a: 'Se as primeiras amostras parecerem identicas ao fundo branco, o ecra pode estar a cortar realces, comprimindo tons proximo-brancos para branco puro e perdendo detalhe em areas brilhantes. Isto chama-se realces saturados e e o oposto dos pretos esmagados. O corte de realces e frequentemente causado por definicoes de contraste ou brilho demasiado altas, ou por definicoes de intervalo de cor limitado que comprimem o extremo superior da escala tonal.',
    },
    {
      q: 'O que causa o corte de realces num monitor?',
      a: 'As causas mais comuns sao: definicao de contraste do monitor demasiado alta, que pode empurrar tons proximo-brancos para branco puro; definicoes incorretas de intervalo de cor usando intervalo limitado (16-235) em vez de intervalo pleno (0-255), que corta tanto realces como sombras; e definicoes de gama demasiado baixas, que clarificam a curva tonal e cortam o extremo brilhante. Verifique primeiro o controlo de contraste do monitor, depois confirme que esta a usar o intervalo de cor RGB pleno nas definicoes da GPU.',
    },
    {
      q: 'O teste de saturacao de branco e o oposto do teste de nivel de preto?',
      a: 'Sim, testam extremos opostos da escala tonal. O Teste de Nivel de Preto de Contraste verifica a capacidade do ecra de distinguir tons proximo-pretos, o que revela problemas como pretos esmagados e fraco detalhe de sombra. O Teste de Saturacao de Branco verifica o outro extremo, testando se os tons proximo-brancos sao preservados ou comprimidos em branco puro. Um ecra bem calibrado deve passar ambos os testes, mostrando passos distintos em ambos os extremos da escala tonal.',
    },
    {
      q: 'O brilho do monitor afeta o teste de saturacao de branco?',
      a: 'Sim. Aumentar o brilho aumenta a saida de luz geral do painel. Embora isso faca o painel parecer mais brilhante no geral, nao afeta necessariamente se os tons proximo-brancos sao distinguiveis; isso e mais uma questao de contraste e definicao de gama. No entanto, alguns monitores aplicam curvas de tom diferentes em diferentes definicoes de brilho, o que pode afetar a separacao dos tons proximo-brancos. Testar na definicao de brilho normal da o resultado mais representativo.',
    },
    {
      q: 'Quantos passos devo conseguir ver num bom monitor?',
      a: 'Num ecra de 8 bits bem calibrado com gama e intervalo de cor corretos, deve conseguir distinguir todos os 16 passos, embora os dois ou tres mais claros perto do branco puro possam requerer inspecao cuidadosa. Num ecra de 10 bits, os passos proximo-brancos devem ser claramente visiveis em toda a gama. Se so consegue ver 8 a 10 passos distintos, a calibracao dos realces pode beneficiar de ajuste.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How the white saturation test works</h2>
      <p>
        The test presents 16 near-white patches on a pure white background, stepping from pure white (value 255)
        down to a light grey (value 196) in steps of 4. These highlight tones represent the brightest range
        of the tonal scale, where many displays struggle to maintain separation. A display with correct gamma,
        contrast, and colour range settings will show each step as a visibly distinct shade slightly darker
        than the white background. A display with highlight clipping will merge the lightest patches together,
        making them indistinguishable from pure white.
      </p>

      <h2 className="text-lg font-bold text-fg">Why highlight detail matters</h2>
      <p>
        Highlight clipping affects how well you can see detail in bright areas of images, video, and documents.
        A display that clips highlights makes sky gradations in photographs appear as flat white, removes
        cloud texture, and loses detail in bright interior photography. For general office use this is less
        critical, but for photographers, video editors, and anyone doing colour-accurate work, proper highlight
        reproduction is as important as shadow detail.
      </p>

      <h2 className="text-lg font-bold text-fg">Fixing highlight clipping</h2>
      <p>
        If the test reveals highlight clipping, the first step is to reduce your monitor contrast setting.
        Many monitors ship with contrast set higher than is optimal for highlight retention. A contrast
        setting of 50 to 70 out of 100 is a reasonable starting point for most monitors. Next, confirm that
        your GPU colour output is set to full range (0-255 RGB) rather than limited range (16-235). Limited
        range compresses both ends of the tonal scale, causing simultaneous shadow crushing and highlight
        clipping. After adjusting these settings, re-run both the white saturation and black level tests to
        confirm both ends of the scale are correct.
      </p>

      <h2 className="text-lg font-bold text-fg">White saturation test and HDR content</h2>
      <p>
        If your display supports HDR, note that HDR content uses a different tone mapping curve (typically
        PQ or HLG) that extends the highlight range well beyond the 0-255 range used in SDR content. This
        test uses the standard SDR 0-255 range and is designed for checking SDR calibration. HDR monitors
        with local dimming may also display differently in HDR mode compared to SDR mode; run the test
        with your monitor in SDR mode for the most accurate baseline calibration check.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o teste de saturacao de branco</h2>
      <p>
        O teste apresenta 16 zonas proximo-brancas num fundo branco puro, progredindo do branco puro (valor
        255) para um cinzento claro (valor 196) em passos de 4. Estes tons de realce representam a gama mais
        brilhante da escala tonal, onde muitos ecras tem dificuldade em manter separacao. Um ecra com gama,
        contraste e definicoes de intervalo de cor corretos mostrara cada passo como uma sombra visivelmente
        distinta, ligeiramente mais escura do que o fundo branco. Um ecra com corte de realces mesclara as
        zonas mais claras, tornando-as indistinguiveis do branco puro.
      </p>

      <h2 className="text-lg font-bold text-fg">Por que o detalhe de realce importa</h2>
      <p>
        O corte de realces afeta a nitidez com que consegue ver detalhes em areas brilhantes de imagens,
        video e documentos. Um ecra que corta realces faz com que as gradacoes do ceu nas fotografias
        aparecam como branco plano, remove a textura das nuvens e perde detalhe em fotografia de interior
        brilhante. Para uso geral de escritorio isso e menos critico, mas para fotografos, editores de video
        e qualquer pessoa a fazer trabalho de cor precisa, a reproducao correta dos realces e tao importante
        quanto o detalhe de sombra.
      </p>

      <h2 className="text-lg font-bold text-fg">Corrigir o corte de realces</h2>
      <p>
        Se o teste revelar corte de realces, o primeiro passo e reduzir a definicao de contraste do monitor.
        Muitos monitores sao enviados com o contraste definido mais alto do que e otimo para a retencao de
        realces. Uma definicao de contraste de 50 a 70 em 100 e um bom ponto de partida para a maioria dos
        monitores. Em seguida, confirme que a saida de cor da GPU esta definida para intervalo pleno
        (0-255 RGB) em vez de intervalo limitado (16-235). O intervalo limitado comprime ambos os extremos
        da escala tonal, causando simultaneamente esmagamento de sombras e corte de realces. Apos ajustar
        estas definicoes, execute novamente os testes de saturacao de branco e de nivel de preto para
        confirmar que ambos os extremos da escala estao corretos.
      </p>

      <h2 className="text-lg font-bold text-fg">Teste de saturacao de branco e conteudo HDR</h2>
      <p>
        Se o ecra suportar HDR, note que o conteudo HDR usa uma curva de mapeamento de tom diferente
        (tipicamente PQ ou HLG) que estende a gama de realces bem alem do intervalo 0-255 usado no conteudo
        SDR. Este teste usa o intervalo SDR padrao 0-255 e e concebido para verificar a calibracao SDR. Os
        monitores HDR com dimming local tambem podem exibir diferentemente no modo HDR em comparacao com o
        modo SDR; execute o teste com o monitor em modo SDR para a verificacao de calibracao de linha de
        base mais precisa.
      </p>
    </>
  ),
}

export default async function WhiteSaturationTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('white-saturation-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <WhiteSaturationTest />
    </ToolPageLayout>
  )
}
