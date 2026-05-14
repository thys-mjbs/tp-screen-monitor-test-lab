import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { OverdriveTest } from '@/components/tools/OverdriveTest'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('overdrive-test', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is monitor overdrive?',
      a: 'Overdrive is a feature built into most modern monitors that applies extra voltage to liquid crystal pixels during a colour transition to speed up their movement. Without overdrive, pixels would transition at their natural speed, which is too slow at high refresh rates and causes motion blur and ghosting. Overdrive compensates by briefly pushing pixels beyond their target value so they reach the destination shade faster. Most monitors offer several overdrive levels in their on-screen display menu.',
    },
    {
      q: 'What is inverse ghosting?',
      a: 'Inverse ghosting, also called coronas or overshoot, is an artifact caused by excessive overdrive. When overdrive pushes a pixel too far past its target value, the pixel must then recover back to the correct shade. If this overshoot is large enough, the intermediate super-charged state is visible as a faint ghost image positioned ahead of the moving object in the direction of travel. On a white bar moving right on a black background, inverse ghosting appears as a faint dark halo just ahead of the leading edge of the bar.',
    },
    {
      q: 'How do I use this overdrive test?',
      a: 'Watch the moving bar carefully, focusing on the leading edge (the front of the bar in the direction it is moving). A faint ghost or halo just ahead of that edge indicates excessive overdrive. Smearing or a blurred wake trailing behind the bar indicates insufficient overdrive. At the correct overdrive level, the bar appears sharp on both edges with no visible artifacts. Test at Fast or Very Fast speed, as overdrive artifacts are more pronounced at higher pixel velocities.',
    },
    {
      q: 'What does overdrive artifact look like exactly?',
      a: 'For a white bar on black with excessive overdrive: a very faint dark grey band appears just ahead of the right edge of the bar, in the direction of movement. This is because the background pixels ahead of the bar have been pre-charged by the overdrive algorithm before the bar reaches them, causing a brief intermediate bright-to-dark artifact. For a black bar on white: a faint bright band appears ahead of the leading edge. The artifact matches the bar colour inverted, appearing on the side the bar is travelling toward.',
    },
    {
      q: 'How do I adjust overdrive on my monitor?',
      a: 'Open your monitor\'s on-screen display menu (usually accessed via a button on the back or bottom bezel). Look for settings labelled Overdrive, Response Time, OD, Trace Free, AMA, or similar depending on the manufacturer. Common levels are Off, Normal, and Extreme, or numbered levels 1 through 5. Start from the lowest level and increase until ghosting behind the bar is eliminated, then stop before coronas appear ahead of the bar.',
    },
    {
      q: 'What is the correct overdrive setting?',
      a: 'The correct setting is the highest level that eliminates trailing ghosting without producing visible coronas ahead of the bar. This is the sweet spot where pixel transitions complete within one frame window without overshooting. The optimal setting often changes with refresh rate: at 60 Hz the frame window is longer so less overdrive is needed, while at 144 Hz or higher a stronger setting may be required to clear transitions in the shorter frame window. Some monitors handle this automatically with variable overdrive.',
    },
    {
      q: 'Does variable refresh rate affect overdrive?',
      a: 'Yes, significantly. G-Sync and FreeSync vary the frame interval dynamically based on GPU frame rate. A fixed overdrive level calibrated for 144 Hz will apply too much voltage when the frame rate drops to 60 Hz, because the longer frame window gives pixels more time to transition naturally, making the overdrive overshoot visible. Some monitors include variable overdrive that scales the compensation with the current frame rate. Without it, enabling VRR may introduce overdrive coronas at low frame rates even when the fixed-rate setting looked clean.',
    },
    {
      q: 'Can overdrive cause permanent damage?',
      a: 'No. Overdrive applies only to the electrical signals controlling the liquid crystal transitions and does not cause any physical damage or wear to the panel. You can freely experiment with all overdrive settings without any risk. The only practical downside of excessive overdrive is the visual artifact of inverse ghosting during motion, which disappears immediately when you lower the overdrive setting.',
    },
  ],
  pt: [
    {
      q: 'O que e o overdrive do monitor?',
      a: 'O overdrive e uma funcionalidade incorporada na maioria dos monitores modernos que aplica tensao extra aos pixels de cristal liquido durante uma transicao de cor para acelerar o seu movimento. Sem overdrive, os pixels transitariam a velocidade natural, que e demasiado lenta a altas taxas de atualizacao e causa desfoque de movimento e ghosting. O overdrive compensa empurrando brevemente os pixels alem do seu valor alvo para que atinjam a sombra de destino mais rapidamente. A maioria dos monitores oferece varios niveis de overdrive no menu de ecra.',
    },
    {
      q: 'O que e o ghosting inverso?',
      a: 'O ghosting inverso, tambem chamado coronas ou overshoot, e um artefacto causado por overdrive excessivo. Quando o overdrive empurra um pixel demasiado alem do seu valor alvo, o pixel deve entao recuperar de volta para a sombra correta. Se este overshoot for suficientemente grande, o estado super-carregado intermediario e visivel como uma imagem fantasma fraca posicionada a frente do objeto em movimento na direcao de viagem. Numa barra branca a mover-se para a direita num fundo preto, o ghosting inverso aparece como um halo escuro fraco logo a frente da borda dianteira da barra.',
    },
    {
      q: 'Como uso este teste de overdrive?',
      a: 'Observe a barra em movimento cuidadosamente, focando na borda dianteira (a frente da barra na direcao em que se move). Um fantasma ou halo fraco logo a frente dessa borda indica overdrive excessivo. Borrado ou um rastro borrado atras da barra indica overdrive insuficiente. No nivel de overdrive correto, a barra aparece nitida em ambas as bordas sem artefactos visiveis. Teste a velocidade Rapida ou Muito Rapida, pois os artefactos de overdrive sao mais pronunciados a velocidades de pixel mais altas.',
    },
    {
      q: 'Como e exactamente o artefacto de overdrive?',
      a: 'Para uma barra branca em preto com overdrive excessivo: uma banda cinzenta escura muito fraca aparece logo a frente da borda direita da barra, na direcao de movimento. Isto porque os pixels de fundo a frente da barra foram pre-carregados pelo algoritmo de overdrive antes de a barra os atingir, causando um breve artefacto intermediario de claro-para-escuro. Para uma barra preta em branco: uma banda brilhante fraca aparece a frente da borda dianteira. O artefacto corresponde a cor da barra invertida, aparecendo no lado para o qual a barra se dirige.',
    },
    {
      q: 'Como ajusto o overdrive no monitor?',
      a: 'Abra o menu de ecra do monitor (geralmente acedido via um botao na parte traseira ou bisel inferior). Procure definicoes rotuladas Overdrive, Tempo de Resposta, OD, Trace Free, AMA, ou similar dependendo do fabricante. Os niveis comuns sao Desligado, Normal e Extremo, ou niveis numerados de 1 a 5. Comece pelo nivel mais baixo e aumente ate o ghosting atras da barra ser eliminado, depois pare antes de as coronas aparecerem a frente da barra.',
    },
    {
      q: 'Qual e a definicao de overdrive correta?',
      a: 'A definicao correta e o nivel mais alto que elimina o ghosting em rastro sem produzir coronas visiveis a frente da barra. Este e o ponto ideal onde as transicoes de pixel se completam dentro de uma janela de fotograma sem overshoot. A definicao ideal frequentemente muda com a taxa de atualizacao: a 60 Hz a janela de fotograma e mais longa por isso e necessario menos overdrive, enquanto a 144 Hz ou superior pode ser necessaria uma definicao mais forte para limpar as transicoes na janela de fotograma mais curta. Alguns monitores lidam com isto automaticamente com overdrive variavel.',
    },
    {
      q: 'A taxa de atualizacao variavel afeta o overdrive?',
      a: 'Sim, significativamente. O G-Sync e o FreeSync variam o intervalo de fotograma dinamicamente com base na taxa de fotogramas da GPU. Um nivel de overdrive fixo calibrado para 144 Hz aplicara demasiada tensao quando a taxa de fotogramas cai para 60 Hz, porque a janela de fotograma mais longa da aos pixels mais tempo para transitar naturalmente, tornando o overshoot de overdrive visivel. Alguns monitores incluem overdrive variavel que escala a compensacao com a taxa de fotogramas atual. Sem ele, ativar VRR pode introduzir coronas de overdrive a baixas taxas de fotogramas mesmo quando a definicao de taxa fixa parecia limpa.',
    },
    {
      q: 'O overdrive pode causar danos permanentes?',
      a: 'Nao. O overdrive aplica-se apenas aos sinais eletricos que controlam as transicoes de cristal liquido e nao causa qualquer dano fisico ou desgaste ao painel. Pode experimentar livremente com todas as definicoes de overdrive sem qualquer risco. O unico inconveniente pratico do overdrive excessivo e o artefacto visual de ghosting inverso durante o movimento, que desaparece imediatamente quando reduz a definicao de overdrive.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How overdrive works</h2>
      <p>
        Liquid crystal pixels do not snap instantly between colour states. At a target shade, the crystals
        must physically rotate to the correct angle, which takes time. Overdrive injects a brief burst of
        extra voltage at the start of each transition to accelerate the crystal movement. The pixel
        overshoots slightly past the target shade, then decays back. When calibrated correctly, the
        overshoot is too small and brief to be visible, and the pixel arrives at the correct shade within
        one frame. When overdrive is too aggressive, the overshoot is large enough to be visible as a
        distinct artifact on the leading edge of any moving object.
      </p>

      <h2 className="text-lg font-bold text-fg">What to look for in this test</h2>
      <p>
        Focus on the leading edge of the bar, the side facing the direction of travel. A monitor with
        excessive overdrive shows a faint inverse-coloured band just ahead of that edge. For a white bar
        on black, this appears as a slightly darker band ahead of the white. For a black bar on white,
        it appears as a slightly brighter band ahead of the black. The trailing edge may show normal
        ghosting if overdrive is insufficient, or appear clean if overdrive is working correctly.
      </p>
      <p>
        Running this test at Very Fast speed makes artifacts most visible. Test both modes: white on
        black stresses the dark-to-bright transition, while black on white stresses the bright-to-dark
        transition, which some monitors handle with different overdrive characteristics.
      </p>

      <h2 className="text-lg font-bold text-fg">Finding the right overdrive level</h2>
      <p>
        Use your monitor&apos;s OSD menu to step through overdrive settings one level at a time. At each
        level, run this test at your typical gaming refresh rate. The ideal setting is the highest level
        that produces no visible coronas ahead of the bar. If you see haloing at the current level, drop
        one step down. If you see smearing behind the bar, step one level up. Most monitors have a clear
        sweet spot where both artifacts are absent. Document the setting that works best, as firmware
        updates or resolution changes can sometimes reset the OSD.
      </p>

      <h2 className="text-lg font-bold text-fg">Overdrive and variable refresh rate</h2>
      <p>
        If your monitor supports G-Sync or FreeSync and you use it with variable frame rates, check
        whether your monitor offers adaptive or variable overdrive in its specifications. Fixed overdrive
        tuned for high frame rates will produce visible coronas when the frame rate drops, because the
        pixel has more time to transition naturally and the overdrive pulse overshoots. If your monitor
        does not have adaptive overdrive, running a slightly lower fixed overdrive setting is a reasonable
        compromise that reduces coronas at low frame rates while still controlling ghosting at high rates.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o overdrive</h2>
      <p>
        Os pixels de cristal liquido nao saltam instantaneamente entre estados de cor. Numa sombra alvo,
        os cristais devem rodar fisicamente para o angulo correto, o que demora tempo. O overdrive injeta
        uma breve rajada de tensao extra no inicio de cada transicao para acelerar o movimento dos cristais.
        O pixel ultrapassa ligeiramente a sombra alvo, depois decai de volta. Quando calibrado corretamente,
        o overshoot e demasiado pequeno e breve para ser visivel, e o pixel chega a sombra correta dentro
        de um fotograma. Quando o overdrive e demasiado agressivo, o overshoot e suficientemente grande
        para ser visivel como um artefacto distinto na borda dianteira de qualquer objeto em movimento.
      </p>

      <h2 className="text-lg font-bold text-fg">O que procurar neste teste</h2>
      <p>
        Foque na borda dianteira da barra, o lado voltado para a direcao de viagem. Um monitor com
        overdrive excessivo mostra uma banda de cor inversa fraca logo a frente dessa borda. Para uma
        barra branca em preto, isto aparece como uma banda ligeiramente mais escura a frente do branco.
        Para uma barra preta em branco, aparece como uma banda ligeiramente mais brilhante a frente do
        preto. A borda traseira pode mostrar ghosting normal se o overdrive for insuficiente, ou aparecer
        limpa se o overdrive estiver a funcionar corretamente.
      </p>
      <p>
        Executar este teste a velocidade Muito Rapida torna os artefactos mais visiveis. Teste ambos os
        modos: branco em preto stressara a transicao escuro-para-claro, enquanto preto em branco stressara
        a transicao claro-para-escuro, que alguns monitores tratam com diferentes caracteristicas de
        overdrive.
      </p>

      <h2 className="text-lg font-bold text-fg">Encontrar o nivel de overdrive certo</h2>
      <p>
        Use o menu OSD do monitor para percorrer as definicoes de overdrive um nivel de cada vez. Em cada
        nivel, execute este teste na taxa de atualizacao de gaming tipica. A definicao ideal e o nivel
        mais alto que nao produz coronas visiveis a frente da barra. Se vir halos no nivel atual, baixe
        um nivel. Se vir borrado atras da barra, suba um nivel. A maioria dos monitores tem um ponto
        ideal claro onde ambos os artefactos estao ausentes. Documente a definicao que funciona melhor,
        pois as atualizacoes de firmware ou mudancas de resolucao podem por vezes repor o OSD.
      </p>

      <h2 className="text-lg font-bold text-fg">Overdrive e taxa de atualizacao variavel</h2>
      <p>
        Se o monitor suportar G-Sync ou FreeSync e o usar com taxas de fotogramas variaveis, verifique
        se o monitor oferece overdrive adaptativo ou variavel nas suas especificacoes. O overdrive fixo
        sintonizado para altas taxas de fotogramas produzira coronas visiveis quando a taxa de fotogramas
        cair, porque o pixel tem mais tempo para transitar naturalmente e o pulso de overdrive ultrapassa.
        Se o monitor nao tiver overdrive adaptativo, executar uma definicao de overdrive fixo ligeiramente
        mais baixa e um compromisso razoavel que reduz as coronas a baixas taxas de fotogramas enquanto
        ainda controla o ghosting a altas taxas.
      </p>
    </>
  ),
}

export default async function OverdriveTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('overdrive-test', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <OverdriveTest />
    </ToolPageLayout>
  )
}
