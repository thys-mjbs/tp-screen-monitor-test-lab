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
  const canonical = locale === 'en' ? `${appUrl}/contact` : `${appUrl}/${locale}/contact`
  const hreflang = { 'en': `${appUrl}/contact`, 'es': `${appUrl}/es/contact`, 'pt': `${appUrl}/pt/contact`, 'x-default': `${appUrl}/contact` }
  if (locale === 'pt') {
    return {
      title: 'Contacto',
      description: 'Entre em contacto com a equipa do Screen Test Lab para relatorios de erros, sugestoes ou questoes gerais.',
      alternates: { canonical, languages: hreflang },
    }
  }
  return {
    title: 'Contact',
    description: 'Get in touch with the Screen Test Lab team for bug reports, suggestions, or general questions.',
    alternates: { canonical, languages: hreflang },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (locale === 'pt') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Contacto' }]} />
        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            Contacto
          </h1>
          <p className="text-fg-muted text-lg">
            Questoes, relatorios de erros e sugestoes de funcionalidades sao bem-vindos.
          </p>
        </section>
        <section className="space-y-6 text-fg-muted">
          <div className="rounded-xl border border-border bg-surface p-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted">Email</p>
            <a
              href="mailto:thys@mjbstrategic.com"
              className="text-xl font-bold text-accent hover:underline"
            >
              thys@mjbstrategic.com
            </a>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">O que incluir</h2>
            <p>
              Para relatorios de erros, por favor inclua o nome e versao do seu navegador, sistema
              operativo, modelo do monitor se conhecido, e uma breve descricao do que aconteceu
              versus o que esperava. Capturas de ecra sao uteis quando relevante.
            </p>
            <p>
              Para sugestoes de funcionalidades ou questoes sobre as ferramentas, uma breve
              descricao do que esta a tentar testar ou conseguir e suficiente.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Tempo de resposta</h2>
            <p>
              Este e um pequeno projeto independente. As respostas sao feitas com base no melhor
              esforco e podem demorar varios dias. Relatorios genuinos de erros que afetam a
              funcionalidade das ferramentas sao priorizados.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-fg">Publicidade e parcerias</h2>
            <p>
              O Screen Test Lab e suportado por publicidade. Para consultas sobre publicidade e
              parcerias, use o mesmo endereco de email acima com uma linha de assunto que indique
              a natureza da sua consulta.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'Contact' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          Contact
        </h1>
        <p className="text-fg-muted text-lg">
          Questions, bug reports, and feature suggestions are welcome.
        </p>
      </section>

      <section className="space-y-6 text-fg-muted">
        <div className="rounded-xl border border-border bg-surface p-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted">Email</p>
          <a
            href="mailto:thys@mjbstrategic.com"
            className="text-xl font-bold text-accent hover:underline"
          >
            thys@mjbstrategic.com
          </a>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">What to include</h2>
          <p>
            For bug reports, please include your browser name and version, operating system,
            monitor model if known, and a brief description of what happened versus what you
            expected. Screenshots are helpful where relevant.
          </p>
          <p>
            For feature suggestions or questions about the tools, a short description of what
            you are trying to test or achieve is sufficient.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Response time</h2>
          <p>
            This is a small independent project. Responses are best-effort and may take several
            days. Genuine bug reports affecting tool functionality are prioritised.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Advertising and partnership enquiries</h2>
          <p>
            Screen Test Lab is ad-supported. For advertising and partnership enquiries, use the
            same email address above with a subject line indicating the nature of your enquiry.
          </p>
        </div>
      </section>

    </div>
  )
}
