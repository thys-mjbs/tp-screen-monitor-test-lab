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
  const canonical = locale === 'en' ? `${appUrl}/privacy` : `${appUrl}/${locale}/privacy`
  const hreflang = { 'en': `${appUrl}/privacy`, 'es': `${appUrl}/es/privacy`, 'pt': `${appUrl}/pt/privacy`, 'x-default': `${appUrl}/privacy` }
  if (locale === 'pt') {
    return {
      title: 'Politica de Privacidade',
      description: 'Politica de Privacidade do Screen Test Lab. Saiba como tratamos dados, analiticas e publicidade neste site gratuito de testes de monitor.',
      alternates: { canonical, languages: hreflang },
    }
  }
  return {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Screen Test Lab. Learn how we handle data, analytics, and advertising on this free monitor testing site.',
    alternates: { canonical, languages: hreflang },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (locale === 'pt') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Politica de Privacidade' }]} />
        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Politica de Privacidade
          </h1>
          <p className="text-fg-muted">Ultima atualizacao: maio de 2025</p>
        </section>
        <section className="space-y-8 text-fg-muted">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Visao geral</h2>
            <p>
              O Screen Test Lab (&quot;nos&quot;, &quot;este site&quot;) e uma ferramenta gratuita de teste de ecra
              baseada no navegador, operada a partir da Africa do Sul. Esta politica explica que
              dados sao recolhidos quando utiliza este site, como sao usados e os seus direitos.
            </p>
            <p>
              Todas as ferramentas de teste de monitor neste site funcionam inteiramente no seu
              navegador. Nenhum resultado de teste, dados de ecra ou informacao de pixels e alguma
              vez transmitido para qualquer servidor. Nao temos acesso ao conteudo do seu ecra.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Informacao que recolhemos</h2>
            <p>
              Nao exigimos que crie uma conta, inicie sessao ou submeta qualquer informacao pessoal
              para usar este site. Os unicos dados recolhidos sao dados padrao de analiticas web
              recolhidos automaticamente quando visita paginas neste site.
            </p>
            <h3 className="text-base font-semibold text-fg">Analiticas (Google Analytics 4)</h3>
            <p>
              Este site usa o Google Analytics 4 (GA4) para entender como os visitantes usam o
              site. O GA4 recolhe informacao padrao de analiticas web incluindo a sua localizacao
              geografica aproximada (nivel de pais e cidade), navegador e sistema operativo, paginas
              visitadas, tempo gasto nas paginas e como chegou ao site. O GA4 usa cookies e
              tecnologias semelhantes. Estes dados sao processados pelo Google e estao sujeitos
              a Politica de Privacidade do Google.
            </p>
            <p>
              Nao usamos o GA4 para identificar utilizadores individuais. Os dados de analiticas
              sao usados de forma agregada para entender quais ferramentas sao mais uteis e como
              o site pode ser melhorado.
            </p>
            <h3 className="text-base font-semibold text-fg">Publicidade (Google AdSense)</h3>
            <p>
              Este site exibe publicidade servida pelo Google AdSense. O Google pode usar cookies
              e identificadores de dispositivo para servir anuncios com base nas suas visitas
              anteriores a este site e a outros sites. Pode optar por nao receber publicidade
              personalizada visitando as Definicoes de Anuncios do Google em{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                adssettings.google.com
              </a>
              . O uso de cookies de publicidade pelo Google e regido pela Politica de Privacidade
              do Google.
            </p>
            <h3 className="text-base font-semibold text-fg">Alojamento (Vercel)</h3>
            <p>
              Este site e alojado na Vercel. A Vercel recolhe registos padrao do servidor incluindo
              enderecos IP, caminhos de pedidos e marcas temporais com o objetivo de servir o site
              e detetar abusos. Estes registos sao retidos de acordo com as politicas de retencao
              de dados da Vercel. Nao temos acesso direto a enderecos IP individuais dos registos
              da Vercel.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Cookies</h2>
            <p>
              Este site nao define cookies de primeira parte para funcionalidade ou preferencias
              do utilizador. Cookies de terceiros podem ser definidos pelo Google Analytics e
              Google AdSense conforme descrito acima. Pode gerir ou desativar cookies nas
              definicoes do seu navegador. Desativar cookies de terceiros nao afeta o
              funcionamento de nenhuma ferramenta de teste de monitor neste site.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Dados que nao recolhemos</h2>
            <p>Nao recolhemos nem armazenamos:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>O seu nome, endereco de email ou qualquer informacao de contacto</li>
              <li>O conteudo do seu ecra, resultados de testes ou medicoes do ecra</li>
              <li>Informacao de pagamento (este site e inteiramente gratuito)</li>
              <li>Credenciais de conta (nao existem contas neste site)</li>
              <li>Quaisquer dados introduzidos ou gerados pelas ferramentas de teste</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Servicos de terceiros</h2>
            <p>
              Este site usa os seguintes servicos de terceiros, cada um com a sua propria politica
              de privacidade que rege os dados que recolhem:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Google Analytics 4 -- analiticas web</li>
              <li>Google AdSense -- publicidade</li>
              <li>Vercel -- alojamento e entrega do site</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Criancas</h2>
            <p>
              Este site nao e dirigido a criancas com menos de 13 anos. Nao recolhemos
              conscientemente informacao pessoal de criancas. Se acredita que uma crianca
              forneceu informacao pessoal atraves deste site, contacte-nos para que possamos
              tomar as medidas adequadas.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Alteracoes a esta politica</h2>
            <p>
              Podemos atualizar esta politica de tempos em tempos. A data de &quot;ultima atualizacao&quot;
              no topo desta pagina reflete a revisao mais recente. O uso continuado do site apos
              qualquer atualizacao constitui a aceitacao da politica revista.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Contacto</h2>
            <p>
              Para questoes ou pedidos relacionados com privacidade, contacte-nos em{' '}
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

      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-fg-muted">Last updated: May 2025</p>
      </section>

      <section className="space-y-8 text-fg-muted">

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Overview</h2>
          <p>
            Screen Test Lab (&quot;we&quot;, &quot;this site&quot;) is a free browser-based display testing tool
            operated from South Africa. This policy explains what data is collected when you use
            this site, how it is used, and your rights under the Protection of Personal Information
            Act 4 of 2013 (POPIA).
          </p>
          <p>
            All monitor testing tools on this site run entirely in your browser. No test results,
            display data, or pixel information are ever transmitted to any server. We do not have
            access to your screen contents.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Information we collect</h2>
          <p>
            We do not require you to create an account, log in, or submit any personal information
            to use this site. The only data collected is standard web analytics data gathered
            automatically when you visit pages on this site.
          </p>

          <h3 className="text-base font-semibold text-fg">Analytics (Google Analytics 4)</h3>
          <p>
            This site uses Google Analytics 4 (GA4) to understand how visitors use the site.
            GA4 collects standard web analytics information including your approximate geographic
            location (country and city level), browser and operating system, pages visited,
            time spent on pages, and how you arrived at the site (search, direct, referral).
            GA4 uses cookies and similar technologies. This data is processed by Google and
            is subject to Google&apos;s Privacy Policy.
          </p>
          <p>
            We do not use GA4 to identify individual users. Analytics data is used in aggregate
            to understand which tools are most useful and how the site can be improved.
          </p>

          <h3 className="text-base font-semibold text-fg">Advertising (Google AdSense)</h3>
          <p>
            This site displays advertisements served by Google AdSense. Google may use cookies
            and device identifiers to serve ads based on your prior visits to this site and
            other sites on the internet. You can opt out of personalised advertising by visiting
            Google&apos;s Ad Settings at{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              adssettings.google.com
            </a>
            . Google&apos;s use of advertising cookies is governed by Google&apos;s Privacy Policy.
          </p>

          <h3 className="text-base font-semibold text-fg">Hosting (Vercel)</h3>
          <p>
            This site is hosted on Vercel. Vercel collects standard server logs including IP
            addresses, request paths, and timestamps for the purpose of serving the site and
            detecting abuse. These logs are retained according to Vercel&apos;s data retention
            policies. We do not have direct access to individual IP addresses from Vercel logs.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Cookies</h2>
          <p>
            This site does not set any first-party cookies for functionality or user preferences.
            Third-party cookies may be set by Google Analytics and Google AdSense as described
            above. You can manage or disable cookies in your browser settings. Disabling
            third-party cookies does not affect the functioning of any monitor testing tool
            on this site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Data we do not collect</h2>
          <p>We do not collect or store:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Your name, email address, or any contact information</li>
            <li>Your screen contents, test results, or display measurements</li>
            <li>Payment information (this site is entirely free)</li>
            <li>Account credentials (no accounts exist on this site)</li>
            <li>Any data entered into or generated by the testing tools</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Third-party services</h2>
          <p>
            This site uses the following third-party services, each of which has its own
            privacy policy governing data they collect:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Google Analytics 4 &mdash; web analytics</li>
            <li>Google AdSense &mdash; advertising</li>
            <li>Vercel &mdash; website hosting and delivery</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Children</h2>
          <p>
            This site is not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided
            personal information through this site, please contact us so we can take
            appropriate action.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Your rights under POPIA</h2>
          <p>
            If you are a South African resident, you have rights under the Protection of Personal
            Information Act 4 of 2013, including the right to access personal information we
            hold about you, the right to request correction of inaccurate information, and the
            right to request deletion of your personal information. Given that we collect no
            personally identifiable information directly, these rights are primarily relevant
            to any data Google Analytics or Google AdSense may hold about you, which you can
            manage directly through Google&apos;s account and privacy tools.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last updated&quot; date at the top
            of this page reflects the most recent revision. Continued use of the site after
            any update constitutes acceptance of the revised policy.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Contact</h2>
          <p>
            For privacy-related questions or requests, contact us at{' '}
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
