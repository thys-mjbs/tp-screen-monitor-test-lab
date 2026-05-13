import type { Tool } from '@/lib/tools'
import { getRelatedTools } from '@/lib/tools'
import { toolSchemas } from '@/lib/metadata'
import { Breadcrumb } from './Breadcrumb'
import { ToolCard } from './ToolCard'
import { AmazonLinks } from './affiliate/AmazonLinks'
import { TOOL_AMAZON_SEARCH_TERMS } from '@/lib/affiliate/config'

export interface FAQ {
  q: string
  a: string
}

interface ToolPageLayoutProps {
  tool: Tool
  children: React.ReactNode
  faqs: FAQ[]
  bodyContent: React.ReactNode
}

export function ToolPageLayout({ tool, children, faqs, bodyContent }: ToolPageLayoutProps) {
  const related = getRelatedTools(tool.slug)
  const { webApp, breadcrumb: breadcrumbSchema } = toolSchemas(tool)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: tool.name }]} />

        {/* Tool */}
        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
            {tool.metaTitle}
          </h1>
          <p className="text-fg-muted">{tool.shortDescription}</p>
          <div className="pt-1">{children}</div>
        </section>

        {/* Amazon affiliate links */}
        {TOOL_AMAZON_SEARCH_TERMS[tool.slug]?.length > 0 && (
          <AmazonLinks searchTerms={TOOL_AMAZON_SEARCH_TERMS[tool.slug]} />
        )}

        {/* SEO body copy */}
        <section className="prose prose-sm max-w-none text-fg-muted space-y-6">
          {bodyContent}
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-fg">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="group rounded-xl border border-border bg-surface overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-medium text-fg text-sm list-none select-none hover:bg-elevated transition-colors">
                  {q}
                  <span className="shrink-0 text-fg-muted text-lg leading-none group-open:rotate-45 transition-transform duration-150">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-fg-muted leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related tools */}
        {related.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-fg">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  )
}
