import { getTranslations } from 'next-intl/server'
import { buildAmazonSearchUrl } from '@/lib/affiliate/config'

interface AmazonLinksProps {
  searchTerms: string[]
}

export async function AmazonLinks({ searchTerms }: AmazonLinksProps) {
  if (!searchTerms?.length) return null
  const t = await getTranslations('affiliate')

  return (
    <section className="rounded-xl border border-border bg-surface p-5 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">{t('shopOnAmazon')}</p>
      <ul className="flex flex-wrap gap-2">
        {searchTerms.map((term) => (
          <li key={term}>
            <a
              href={buildAmazonSearchUrl(term)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center rounded-full border border-border bg-elevated px-3 py-1.5 text-xs font-medium text-fg-muted hover:border-accent hover:text-accent transition-colors"
            >
              {term}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-fg-muted opacity-60">
        {t('disclosure')}
      </p>
    </section>
  )
}
