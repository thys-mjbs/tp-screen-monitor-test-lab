import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = locale === 'en' ? `${appUrl}/terms` : `${appUrl}/${locale}/terms`
  const hreflang = { 'en': `${appUrl}/terms`, 'es': `${appUrl}/es/terms`, 'pt': `${appUrl}/pt/terms`, 'x-default': `${appUrl}/terms` }
  if (locale === 'pt') {
    return {
      title: 'Termos de Servico',
      description: 'Termos de Servico do Screen Test Lab. Uso gratuito, sem garantias sobre resultados de reparacao de pixels. Regido pela lei sul-africana.',
      alternates: { canonical, languages: hreflang },
    }
  }
  return {
    title: 'Terms of Service',
    description: 'Terms of Service for Screen Test Lab. Free to use, no guarantees on pixel repair outcomes. Governed by South African law.',
    alternates: { canonical, languages: hreflang },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (locale === 'pt') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Termos de Servico' }]} />
        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Termos de Servico
          </h1>
          <p className="text-fg-muted">Ultima atualizacao: maio de 2025</p>
        </section>
        <section className="space-y-8 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Acordo</h2>
            <p>
              Ao aceder ou usar o Screen Test Lab (&quot;este site&quot;, &quot;o servico&quot;), concorda com
              estes Termos de Servico. Se nao concordar com estes termos, nao use este site.
              Estes termos sao regidos pelas leis da Republica da Africa do Sul.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">O servico</h2>
            <p>
              O Screen Test Lab fornece uma colecao de ferramentas gratuitas baseadas no navegador
              para testar e inspecionar a qualidade de monitores e ecras. Todas as ferramentas
              funcionam inteiramente no seu navegador. Nenhuma conta, registo ou pagamento e
              necessario para usar qualquer ferramenta neste site.
            </p>
            <p>
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do
              servico a qualquer momento sem aviso. Nao seremos responsaveis perante si ou qualquer
              terceiro por qualquer modificacao, suspensao ou descontinuacao desse tipo.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Sem garantias sobre os resultados das ferramentas</h2>
            <p>
              As ferramentas fornecidas neste site sao auxiliares de diagnostico e inspecao. Nao
              garantem nenhum resultado especifico. Especificamente:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                A ferramenta Corretor de Pixels Presos tenta estimular pixels presos alternando
                rapidamente as cores. Esta tecnica pode reparar alguns pixels presos em alguns
                tipos de ecra, mas nao e garantida e nao funciona em todos os ecras. Nao fazemos
                nenhuma representacao de que o uso desta ferramenta ira corrigir um pixel preso
                ou morto.
              </li>
              <li>
                Os testes de pixels mortos, vazamento de luz de fundo e outros testes visuais
                revelam caracteristicas do ecra conforme renderizadas no seu navegador. Os
                resultados dependem do seu ecra, configuracoes do navegador, iluminacao ambiente
                e condicoes de visualizacao. Os resultados dos testes nao constituem uma
                calibracao ou avaliacao profissional do ecra.
              </li>
              <li>
                Os valores medidos pelo Verificador de Taxa de Atualizacao e pelo Verificador de
                Resolucao refletem o que o seu navegador reporta e podem diferir das especificacoes
                nominais do seu hardware.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Aviso de fotossensibilidade</h2>
            <p>
              Algumas ferramentas neste site, incluindo o Corretor de Pixels Presos e as
              ferramentas de Ciclo de Cores em Tela Cheia, exibem cores a mudar rapidamente e
              imagens piscantes. Estas ferramentas podem desencadear convulsoes epilepticas
              fotossenssiveis ou outras reacoes adversas em individuos suscetiveis. Se si ou
              qualquer pessoa que possa ver o seu ecra tiver historico de epilepsia fotossensivel,
              enxaquecas desencadeadas por luzes piscantes ou qualquer outra condicao que possa
              ser afetada por estimulos visuais a mudar rapidamente, nao use estas ferramentas.
              Todas as ferramentas que incluem imagens piscantes exibem um aviso antes de ativar.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Uso aceitavel</h2>
            <p>Concorda em nao usar este site para:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Tentar interferir, perturbar ou sobrecarregar o site ou a sua infraestrutura</li>
              <li>Extrair, rastrear ou copiar sistematicamente conteudo deste site para fins comerciais sem permissao</li>
              <li>Usar o site de qualquer forma que viole as leis ou regulamentos aplicaveis</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Propriedade intelectual</h2>
            <p>
              Todo o conteudo neste site, incluindo texto, designs de ferramentas, graficos e
              codigo, e propriedade do Screen Test Lab e esta protegido pelas leis de direitos
              de autor aplicaveis. Nao pode reproduzir, distribuir ou criar obras derivadas de
              qualquer conteudo neste site sem permissao escrita expressa.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Exclusao de garantias</h2>
            <p>
              Este site e fornecido numa base &quot;tal como esta&quot; e &quot;conforme disponivel&quot; sem
              nenhuma garantia de qualquer tipo, expressa ou implicita. Nao garantimos que o
              site sera ininterrupto, livre de erros ou livre de virus ou outros componentes
              prejudiciais. Na maxima extensao permitida pela lei sul-africana, rejeitamos
              todas as garantias, expressas ou implicitas, incluindo garantias de
              comerciabilidade e adequacao a um fim especifico.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Limitacao de responsabilidade</h2>
            <p>
              Na maxima extensao permitida pela lei aplicavel, o Screen Test Lab e os seus
              operadores nao serao responsaveis por quaisquer danos indiretos, incidentais,
              especiais, consequentes ou punitivos decorrentes do seu uso ou incapacidade de
              usar este site ou as suas ferramentas. A nossa responsabilidade total por qualquer
              reclamacao decorrente do uso deste site nao excedera zero, uma vez que o servico
              e fornecido gratuitamente.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Servicos de terceiros</h2>
            <p>
              Este site usa o Google Analytics para analiticas web e o Google AdSense para
              publicidade. O seu uso deste site esta tambem sujeito aos Termos de Servico e
              Politica de Privacidade do Google em relacao a esses servicos. Nao somos
              responsaveis pelo conteudo ou praticas de quaisquer servicos de terceiros ligados
              ou incorporados neste site.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Lei aplicavel</h2>
            <p>
              Estes termos sao regidos e interpretados de acordo com as leis da Republica da
              Africa do Sul. Quaisquer disputas estarao sujeitas a jurisdicao exclusiva dos
              tribunais da Africa do Sul.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Alteracoes a estes termos</h2>
            <p>
              Podemos atualizar estes termos a qualquer momento. A data de &quot;ultima atualizacao&quot;
              no topo desta pagina reflete a revisao mais recente. O uso continuado do site apos
              qualquer atualizacao constitui a aceitacao dos termos revistos.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Contacto</h2>
            <p>
              Para questoes sobre estes termos, contacte-nos em{' '}
              <a href="mailto:thys@mjbstrategic.com" className="text-accent hover:underline">
                thys@mjbstrategic.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          Terms of Service
        </h1>
        <p className="text-fg-muted">Last updated: May 2025</p>
      </section>

      <section className="space-y-8 text-fg-muted">

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Agreement</h2>
          <p>
            By accessing or using Screen Test Lab (&quot;this site&quot;, &quot;the service&quot;), you agree to
            these Terms of Service. If you do not agree to these terms, do not use this site.
            These terms are governed by the laws of the Republic of South Africa.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">The service</h2>
          <p>
            Screen Test Lab provides a collection of free, browser-based tools for testing and
            inspecting monitor and display quality. All tools run entirely in your browser.
            No account, registration, or payment is required to use any tool on this site.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the service at
            any time without notice. We will not be liable to you or any third party for any
            such modification, suspension, or discontinuation.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">No guarantees on tool outcomes</h2>
          <p>
            The tools provided on this site are diagnostic and inspection aids. They do not
            guarantee any particular outcome. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              The Stuck Pixel Fixer tool attempts to stimulate stuck pixels by rapidly cycling
              colours. This technique may repair some stuck pixels in some display types, but
              is not guaranteed to work and does not work on all displays. We make no
              representation that using this tool will fix a stuck or dead pixel.
            </li>
            <li>
              Dead pixel, backlight bleed, and other visual tests reveal display characteristics
              as rendered in your browser. Results depend on your display, browser settings,
              ambient lighting, and viewing conditions. Test results do not constitute a
              professional display calibration or assessment.
            </li>
            <li>
              Measured values from the Refresh Rate Checker and Resolution Checker reflect
              what your browser reports and may differ from your hardware&apos;s rated specifications.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Photosensitivity warning</h2>
          <p>
            Some tools on this site, including the Stuck Pixel Fixer and Fullscreen Colour
            Cycle tools, display rapidly changing colours and flashing imagery. These tools
            may trigger photosensitive epileptic seizures or other adverse reactions in
            susceptible individuals. If you or anyone who may view your screen has a history
            of photosensitive epilepsy, migraines triggered by flashing lights, or any
            other condition that may be affected by rapidly changing visual stimuli, do not
            use these tools. All tools that include flashing imagery display a warning
            before activating.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Acceptable use</h2>
          <p>You agree not to use this site to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Attempt to interfere with, disrupt, or overload the site or its infrastructure</li>
            <li>Scrape, crawl, or systematically copy content from this site for commercial purposes without permission</li>
            <li>Use the site in any manner that violates applicable laws or regulations</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Intellectual property</h2>
          <p>
            All content on this site, including text, tool designs, graphics, and code, is
            the property of Screen Test Lab and is protected by applicable copyright laws.
            You may not reproduce, distribute, or create derivative works from any content
            on this site without express written permission.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Disclaimer of warranties</h2>
          <p>
            This site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any
            warranty of any kind, express or implied. We do not warrant that the site will
            be uninterrupted, error-free, or free of viruses or other harmful components.
            To the maximum extent permitted by South African law, we disclaim all warranties,
            express or implied, including warranties of merchantability and fitness for a
            particular purpose.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Screen Test Lab and its
            operators shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your use of, or inability to use, this site or
            its tools. Our total liability for any claim arising from use of this site shall
            not exceed zero, as the service is provided free of charge.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Third-party services</h2>
          <p>
            This site uses Google Analytics for web analytics and Google AdSense for
            advertising. Your use of this site is also subject to Google&apos;s Terms of Service
            and Privacy Policy in relation to those services. We are not responsible for
            the content or practices of any third-party services linked from or embedded
            in this site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Governing law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the
            Republic of South Africa, including the Electronic Communications and Transactions
            Act 25 of 2002 (ECT Act) and the Consumer Protection Act 68 of 2008 (CPA) where
            applicable. Any disputes shall be subject to the exclusive jurisdiction of the
            courts of South Africa.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Changes to these terms</h2>
          <p>
            We may update these terms at any time. The &quot;last updated&quot; date at the top of this
            page reflects the most recent revision. Continued use of the site after any update
            constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:thys@mjbstrategic.com" className="text-accent hover:underline">
              thys@mjbstrategic.com
            </a>
            .
          </p>
        </div>

      </section>
    </div>
  )
}
