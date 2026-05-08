import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Screen Test Lab team for bug reports, suggestions, or general questions.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
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
