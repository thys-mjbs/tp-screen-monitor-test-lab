import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/metadata'
import { getToolByLocale } from '@/lib/i18n/helpers'
import { ToolPageLayout, type FAQ } from '@/components/ToolPageLayout'
import { StuckPixelFixer } from '@/components/tools/StuckPixelFixer'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(getToolByLocale('stuck-pixel-fixer', locale), locale)
}

const FAQS: Record<string, FAQ[]> = {
  en: [
    {
      q: 'What is a stuck pixel?',
      a: 'A stuck pixel is a pixel that is still receiving power but is locked to a single colour, most commonly red, green, or blue. Unlike a dead pixel, which stays permanently black, a stuck pixel glows with a fixed colour regardless of what is being displayed on screen. Stuck pixels are caused by a transistor fault that keeps one or more subpixels in a permanent on state.',
    },
    {
      q: 'How does the stuck pixel fixer work?',
      a: 'The tool rapidly cycles through a sequence of saturated colours at high speed. The theory is that the rapid electrical switching stimulates the stuck pixel transistor and may cause it to return to normal operation. The technique has a reported success rate of around 60 percent for genuinely stuck pixels when run for a sufficient length of time. It does not work on dead pixels, which are a different type of hardware failure.',
    },
    {
      q: 'How long should I run the stuck pixel fixer?',
      a: 'Run the tool for at least 20 to 30 minutes for best results. Some users have reported success after just a few minutes, while others have needed to run it for several hours. If there is no improvement after two or three hours of continuous running, the pixel is unlikely to respond to this technique. You can run the tool in fullscreen and leave it while you do other tasks.',
    },
    {
      q: 'What is the success rate for fixing a stuck pixel?',
      a: 'Results vary significantly. Some stuck pixels respond quickly and some never respond at all. Pixels that have been stuck for a shorter time tend to have a higher success rate than long-standing faults. The technique works best on pixels where the transistor has become temporarily jammed rather than physically damaged. There is no guarantee of success and the tool is best treated as a free first attempt before seeking a warranty replacement.',
    },
    {
      q: 'Can this tool fix dead pixels?',
      a: 'No. Dead pixels are caused by a complete failure of the pixel transistor, meaning no power reaches the pixel at all. Rapid colour flashing has no effect on dead pixels because there is no electrical activity to stimulate. The Stuck Pixel Fixer only works on stuck pixels, which are still powered but locked to a colour. Use the Dead Pixel Test to determine whether your pixel is dead or stuck.',
    },
    {
      q: 'Is rapid colour flashing safe for my screen?',
      a: 'Yes, the flashing is safe for your display panel. The electrical activity involved is within the normal operating range of the display. However, people with photosensitive epilepsy or sensitivity to flickering light should not use this tool or should have someone else run it and monitor progress. The Rapid speed setting produces very fast flashing, so use a slower speed if the visual is uncomfortable.',
    },
    {
      q: 'Which speed setting should I use?',
      a: 'Normal or Fast are the most commonly recommended settings. Normal (100ms intervals) provides a steady cycle that most displays respond to. Fast (50ms) is more aggressive and may be more effective for persistent stuck pixels. Rapid (25ms) is the most intense and should be used with caution by anyone sensitive to flickering. Slow (200ms) is useful if you want a milder approach or are sensitive to rapid visual changes.',
    },
  ],
  pt: [
    {
      q: 'O que e um pixel preso?',
      a: 'Um pixel preso e um pixel que ainda recebe energia mas esta bloqueado numa unica cor, mais comummente vermelho, verde ou azul. Ao contrario de um pixel morto, que permanece permanentemente preto, um pixel preso brilha com uma cor fixa independentemente do que e exibido no ecra. Os pixels presos sao causados por uma falha do transitor que mantém um ou mais subpixeis num estado permanentemente ligado.',
    },
    {
      q: 'Como funciona o reparador de pixels presos?',
      a: 'A ferramenta cicla rapidamente atraves de uma sequencia de cores saturadas a alta velocidade. A teoria e que a comutacao eletrica rapida estimula o transitor do pixel preso e pode fazer com que retorne a operacao normal. A tecnica tem uma taxa de sucesso reportada de cerca de 60 por cento para pixels genuinamente presos quando executada por tempo suficiente. Nao funciona em pixels mortos, que sao um tipo diferente de falha de hardware.',
    },
    {
      q: 'Por quanto tempo devo executar o reparador de pixels presos?',
      a: 'Execute a ferramenta durante pelo menos 20 a 30 minutos para melhores resultados. Alguns utilizadores reportaram sucesso apos apenas alguns minutos, enquanto outros precisaram de executa-la durante varias horas. Se nao houver melhoria apos duas a tres horas de execucao continua, o pixel e improvavel que responda a esta tecnica. Pode executar a ferramenta em tela cheia e deixa-la a funcionar enquanto realiza outras tarefas.',
    },
    {
      q: 'Qual e a taxa de sucesso para corrigir um pixel preso?',
      a: 'Os resultados variam significativamente. Alguns pixels presos respondem rapidamente e outros nunca respondem. Os pixels que estao presos ha menos tempo tendem a ter uma taxa de sucesso mais alta do que as falhas de longa data. A tecnica funciona melhor em pixels onde o transitor ficou temporariamente bloqueado em vez de fisicamente danificado. Nao ha garantia de sucesso e a ferramenta e melhor tratada como uma primeira tentativa gratuita antes de procurar substituicao em garantia.',
    },
    {
      q: 'Esta ferramenta pode corrigir pixels mortos?',
      a: 'Nao. Os pixels mortos sao causados por uma falha completa do transitor do pixel, o que significa que nenhuma energia chega ao pixel. O flash rapido de cores nao tem efeito nos pixels mortos porque nao ha atividade eletrica para estimular. O Reparador de Pixels Presos so funciona em pixels presos, que ainda estao alimentados mas bloqueados numa cor. Use o Teste de Pixels Mortos para determinar se o seu pixel esta morto ou preso.',
    },
    {
      q: 'O flash rapido de cores e seguro para o meu ecra?',
      a: 'Sim, o flash e seguro para o painel do ecra. A atividade eletrica envolvida esta dentro do intervalo de operacao normal do ecra. No entanto, pessoas com epilepsia fotossensivel ou sensibilidade a luz intermitente nao devem usar esta ferramenta ou devem ter outra pessoa a executa-la e monitorar o progresso. A definicao de velocidade Rapido produz flashes muito rapidos, por isso use uma velocidade mais lenta se o visual for desconfortavel.',
    },
    {
      q: 'Que definicao de velocidade devo usar?',
      a: 'Normal ou Rapido sao as definicoes mais comummente recomendadas. Normal (intervalos de 100ms) fornece um ciclo estavel ao qual a maioria dos ecras responde. Rapido (50ms) e mais agressivo e pode ser mais eficaz para pixels presos persistentes. Ultra-rapido (25ms) e o mais intenso e deve ser usado com cuidado por qualquer pessoa sensivel a intermitencias. Lento (200ms) e util se quiser uma abordagem mais suave ou e sensivel a mudancas visuais rapidas.',
    },
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: (
    <>
      <h2 className="text-lg font-bold text-fg">How the stuck pixel fixer works</h2>
      <p>
        The tool cycles rapidly through a sequence of eight saturated colours at high frequency. The
        electrical switching involved in rapidly changing pixel states can sometimes cause a stuck
        transistor to reset and return to normal operation. This technique has been used by display
        technicians and enthusiasts for many years. While results are not guaranteed, it is a safe and
        free option worth trying before pursuing a warranty replacement.
      </p>

      <h2 className="text-lg font-bold text-fg">How long to run the tool</h2>
      <p>
        Give the fixer at least 20 to 30 minutes of continuous running before evaluating results. Click
        the Fullscreen button to target the flash at your full display and then leave it running while
        you do other tasks. Check back periodically. If the stuck pixel has not improved after two to
        three hours of running, it is unlikely to respond to this approach. Pixels that have been stuck
        for a shorter period tend to respond more readily than faults that have been present for weeks
        or months.
      </p>

      <h2 className="text-lg font-bold text-fg">What to do if the fixer does not work</h2>
      <p>
        If the pixel does not respond after extended running, check your display warranty. Most monitor
        manufacturers have a dead and stuck pixel policy that allows for a replacement if the number or
        position of pixel faults exceeds their threshold. Contact your retailer or manufacturer with
        the results of this test and the Dead Pixel Test tool as evidence. For displays still within the
        return window at your retailer, a return or exchange may be the fastest resolution.
      </p>

      <h2 className="text-lg font-bold text-fg">Stuck pixels versus dead pixels</h2>
      <p>
        It is important to confirm that your pixel is stuck rather than dead before running this tool.
        A stuck pixel glows with a fixed colour (red, green, blue, or white) and is visible against most
        backgrounds. A dead pixel stays permanently dark and is most visible against a bright white
        background. Run the Dead Pixel Test and cycle through all eight colours. If the dot changes in
        appearance against different backgrounds, it is likely stuck. If it stays consistently dark
        regardless of background colour, it is likely dead and this tool will not help.
      </p>
    </>
  ),
  pt: (
    <>
      <h2 className="text-lg font-bold text-fg">Como funciona o reparador de pixels presos</h2>
      <p>
        A ferramenta cicla rapidamente atraves de uma sequencia de oito cores saturadas a alta frequencia.
        A comutacao eletrica envolvida na mudanca rapida de estados de pixel pode por vezes fazer com que
        um transitor preso reinicie e retorne a operacao normal. Esta tecnica e usada por tecnicos de ecra
        e entusiastas ha muitos anos. Embora os resultados nao sejam garantidos, e uma opcao segura e
        gratuita que vale a pena tentar antes de procurar substituicao em garantia.
      </p>

      <h2 className="text-lg font-bold text-fg">Por quanto tempo executar a ferramenta</h2>
      <p>
        De ao reparador pelo menos 20 a 30 minutos de execucao continua antes de avaliar os resultados.
        Clique no botao Tela cheia para direcionar o flash para todo o ecra e depois deixe-o a funcionar
        enquanto realiza outras tarefas. Verifique periodicamente. Se o pixel preso nao melhorou apos duas
        a tres horas de execucao, e improvavel que responda a esta abordagem. Os pixels que estao presos
        ha menos tempo tendem a responder mais prontamente do que as falhas presentes ha semanas ou meses.
      </p>

      <h2 className="text-lg font-bold text-fg">O que fazer se o reparador nao funcionar</h2>
      <p>
        Se o pixel nao responder apos execucao prolongada, verifique a garantia do ecra. A maioria dos
        fabricantes de monitores tem uma politica de pixels mortos e presos que permite substituicao se o
        numero ou posicao das falhas de pixel exceder o seu limiar. Contacte o retalhista ou fabricante
        com os resultados deste teste e da ferramenta Teste de Pixels Mortos como evidencia. Para ecras
        ainda dentro do prazo de devolucao no retalhista, uma devolucao ou troca pode ser a resolucao
        mais rapida.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels presos versus pixels mortos</h2>
      <p>
        E importante confirmar que o seu pixel esta preso em vez de morto antes de executar esta ferramenta.
        Um pixel preso brilha com uma cor fixa (vermelho, verde, azul ou branco) e e visivel na maioria dos
        fundos. Um pixel morto permanece permanentemente escuro e e mais visivel contra um fundo branco
        brilhante. Execute o Teste de Pixels Mortos e percorra todas as oito cores. Se o ponto muda de
        aparencia contra diferentes fundos, e provavel que esteja preso. Se permanece consistentemente
        escuro independentemente da cor de fundo, e provavel que esteja morto e esta ferramenta nao ajudara.
      </p>
    </>
  ),
}

export default async function StuckPixelFixerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tool = getToolByLocale('stuck-pixel-fixer', locale)
  return (
    <ToolPageLayout tool={tool} faqs={FAQS[locale] ?? FAQS.en} bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}>
      <StuckPixelFixer />
    </ToolPageLayout>
  )
}
