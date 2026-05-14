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
  return toolMetadata(getToolByLocale('white-screen', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is a white screen used for in monitor testing?',
      a: 'A white screen is used to reveal dead pixels, check display uniformity, and inspect your monitor for brightness inconsistencies. Because white requires all subpixels to be active, any pixel that is dark or discoloured stands out immediately against the bright background. It is one of the most revealing single-colour tests you can run.',
    },
    {
      q: 'How do I use the white screen for monitor cleaning?',
      a: 'Click Full Screen to fill your display with white, then power off or lock your device and clean the screen normally with a dry microfibre cloth. The white background makes dust, smudges, and fingerprints far easier to see than when the screen is showing normal content. Use the white screen before and after cleaning to confirm results.',
    },
    {
      q: 'Can I use the white screen to find dead pixels?',
      a: 'Yes. Dead pixels appear as small dark or black dots against a white background, making them easy to spot. For a more thorough check, use the Dead Pixel Test tool, which cycles through eight colours including white, to catch different types of pixel defects including stuck pixels locked to a specific colour.',
    },
    {
      q: 'What is display uniformity and how does the white screen help?',
      a: 'Display uniformity refers to how evenly brightness is distributed across the panel. An ideal monitor shows the same brightness level at every point. A white fullscreen panel makes uneven brightness, cloudy patches, and vignetting visible immediately. These issues are often invisible during normal use but become obvious against a plain white background.',
    },
    {
      q: 'Why does the white screen look slightly grey or yellow on some monitors?',
      a: 'A screen that appears slightly grey, yellow, or warm on a white background is showing its colour temperature or backlight characteristics. Monitors with a warm colour temperature skew slightly yellow. Some IPS panels show slight glow near edges when viewed at an angle. These are normal display characteristics, not faults, although calibration can improve accuracy.',
    },
    {
      q: 'Is a fullscreen white panel safe for my monitor?',
      a: 'Yes, a static white screen is completely safe for all display types including LCD, IPS, OLED, and AMOLED. Unlike the rapid flashing used in stuck pixel fixers, a static solid colour causes no stress to the panel. You can leave the white screen displayed for as long as needed for cleaning or inspection purposes.',
    },
  ],
  pt: [
    {
      q: 'Para que serve uma tela branca nos testes de monitor?',
      a: 'Uma tela branca serve para revelar pixels mortos, verificar a uniformidade do ecra e inspecionar inconsistencias de brilho. Como o branco requer que todos os subpixeis estejam ativos, qualquer pixel escuro ou descolorido destaca-se imediatamente contra o fundo luminoso. E um dos testes de cor unica mais reveladores que pode executar.',
    },
    {
      q: 'Como uso a tela branca para limpar o monitor?',
      a: 'Clique em Tela cheia para preencher o ecra de branco, depois desligue ou bloqueie o dispositivo e limpe o ecra normalmente com um pano de microfibra seco. O fundo branco torna o po, as manchas e as impressoes digitais muito mais faceis de ver do que quando o ecra mostra conteudo normal. Use a tela branca antes e apos a limpeza para confirmar os resultados.',
    },
    {
      q: 'Posso usar a tela branca para encontrar pixels mortos?',
      a: 'Sim. Os pixels mortos aparecem como pequenos pontos escuros ou pretos contra um fundo branco, tornando-os faceis de detetar. Para uma verificacao mais completa, use a ferramenta Teste de Pixels Mortos, que alterna entre oito cores incluindo o branco, para detetar diferentes tipos de defeitos de pixels, incluindo pixels presos bloqueados numa cor especifica.',
    },
    {
      q: 'O que e a uniformidade de ecra e como a tela branca ajuda?',
      a: 'A uniformidade do ecra refere-se a quao uniformemente o brilho esta distribuido pelo painel. Um monitor ideal mostra o mesmo nivel de brilho em todos os pontos. Um painel branco em tela cheia torna imediatamente visiveis o brilho irregular, as manchas opacas e a vinheta. Estes problemas sao muitas vezes invisiveis durante o uso normal, mas tornam-se obvios contra um fundo branco simples.',
    },
    {
      q: 'Por que a tela branca parece ligeiramente cinzenta ou amarela em alguns monitores?',
      a: 'Um ecra que parece ligeiramente cinzento, amarelo ou quente num fundo branco esta a mostrar as suas caracteristicas de temperatura de cor ou retroiluminacao. Os monitores com temperatura de cor quente tendem para o amarelo. Alguns paineis IPS mostram um ligeiro brilho perto das bordas quando vistos em angulo. Estas sao caracteristicas normais do ecra, nao defeitos, embora a calibracao possa melhorar a precisao.',
    },
    {
      q: 'Um painel branco em tela cheia e seguro para o meu monitor?',
      a: 'Sim, uma tela branca estatica e completamente segura para todos os tipos de ecra, incluindo LCD, IPS, OLED e AMOLED. Ao contrario do piscar rapido usado nos corretores de pixels presos, uma cor solida estatica nao causa stress ao painel. Pode deixar a tela branca exibida pelo tempo necessario para limpeza ou inspecao.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How to use the white screen for display inspection</h2>
      <p>
        A plain white panel fills every pixel on your display to maximum brightness, making it one of the
        most useful tools for checking monitor quality. Dark or discoloured pixels that are invisible during
        normal use become obvious against a uniform white background. Bright-screen inspection is a standard
        step used by display technicians and reviewers before and after monitor testing.
      </p>

      <h2 className="text-lg font-bold text-fg">Cleaning your monitor with the white screen</h2>
      <p>
        White is the most effective background colour for spotting dust, fingerprints, and smudges on your
        screen surface. Click the Full Screen button, then use a dry microfibre cloth to clean your display.
        Avoid paper towels or any cloth that could scratch the panel coating. The white background makes it
        easy to see exactly which areas you have cleaned and which still need attention. For stubborn marks,
        use a cloth slightly dampened with distilled water only.
      </p>

      <h2 className="text-lg font-bold text-fg">What display problems does a white screen reveal?</h2>
      <p>
        A fullscreen white panel reveals several categories of display issues. Dead pixels appear as
        consistently dark spots. Dirty screen effect shows as cloudy or patchy brightness variations across
        the panel. Backlight uniformity issues appear as noticeably brighter or darker areas near panel
        edges or corners. IPS glow and backlight bleed are sometimes visible in the corners when the screen
        is viewed at an angle. For checking specifically for backlight bleed and glow, the Black Screen
        tool gives a more accurate result.
      </p>

      <h2 className="text-lg font-bold text-fg">Tips for getting the most from this test</h2>
      <p>
        Use the white screen in a room with moderate lighting and view the panel from directly in front at
        your normal sitting distance. Avoid testing with bright direct light falling on the screen surface,
        as reflections can mask display defects. Take a moment to scan each quadrant of the panel rather
        than the whole screen at once. If you spot a dark dot that stays in the same position regardless
        of what is shown on screen, run the Dead Pixel Test to confirm whether it is a dead or stuck pixel.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como usar a tela branca para inspecao do ecra</h2>
      <p>
        Um painel branco simples preenche cada pixel do seu ecra com o brilho maximo, tornando-o uma das
        ferramentas mais uteis para verificar a qualidade do monitor. Pixels escuros ou descoloridos que
        sao invisiveis durante o uso normal tornam-se obvios contra um fundo branco uniforme. A inspecao
        com ecra brilhante e um passo padrao usado por tecnicos e revisores de ecras antes e apos os testes
        de monitor.
      </p>

      <h2 className="text-lg font-bold text-fg">Limpar o seu monitor com a tela branca</h2>
      <p>
        O branco e a cor de fundo mais eficaz para detetar po, impressoes digitais e manchas na superficie
        do ecra. Clique no botao Tela cheia e use um pano de microfibra seco para limpar o ecra. Evite
        toalhas de papel ou qualquer pano que possa riscar o revestimento do painel. O fundo branco facilita
        ver exatamente quais as areas que limpou e quais ainda precisam de atencao. Para marcas resistentes,
        use um pano ligeiramente humedecido apenas com agua destilada.
      </p>

      <h2 className="text-lg font-bold text-fg">Que problemas de ecra revela a tela branca?</h2>
      <p>
        Um painel branco em tela cheia revela varias categorias de problemas de ecra. Os pixels mortos
        aparecem como pontos consistentemente escuros. O efeito de tela suja aparece como variacoes de
        brilho opacas ou irregulares no painel. Os problemas de uniformidade da retroiluminacao aparecem
        como areas notavelmente mais brilhantes ou escuras perto das bordas ou cantos do painel. O brilho
        IPS e o vazamento de luz de fundo sao por vezes visiveis nos cantos quando o ecra e visto em angulo.
        Para verificar especificamente o vazamento de luz e o brilho, a ferramenta Tela Preta da um resultado
        mais preciso.
      </p>

      <h2 className="text-lg font-bold text-fg">Dicas para tirar o maximo partido deste teste</h2>
      <p>
        Use a tela branca numa sala com iluminacao moderada e veja o painel diretamente da frente a distancia
        normal de utilizacao. Evite testar com luz direta intensa a incidir na superficie do ecra, pois os
        reflexos podem mascarar os defeitos. Dedique um momento a examinar cada quadrante do painel em vez
        do ecra inteiro de uma vez. Se detetar um ponto escuro que permanece na mesma posicao
        independentemente do que e mostrado no ecra, execute o Teste de Pixels Mortos para confirmar se e
        um pixel morto ou preso.
      </p>
    </>
  ),
}

export default async function WhiteScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('white-screen', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <ScreenPanel color={{ hex: '#FFFFFF', label: 'White' }} />
    </ToolPageLayout>
  )
}
