import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Breadcrumb } from '@/components/Breadcrumb'
import { posts, formatDate } from '@/lib/posts'
import { postTranslations } from '@/lib/i18n/posts-es'
import { Clock, ArrowRight } from 'lucide-react'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = locale === 'en' ? `${appUrl}/blog` : `${appUrl}/${locale}/blog`
  const hreflang = { 'en': `${appUrl}/blog`, 'es': `${appUrl}/es/blog`, 'x-default': `${appUrl}/blog` }
  if (locale === 'es') {
    return {
      title: 'Blog de pruebas de monitor',
      description: 'Guías y explicaciones sobre pruebas de monitor, calibración de pantalla, defectos de píxeles, tipos de panel, frecuencia de actualización, resolución y mantenimiento de pantalla.',
      alternates: { canonical, languages: hreflang },
    }
  }
  return {
    title: 'Monitor Testing Blog',
    description: 'Guides and explainers on monitor testing, display calibration, pixel defects, panel types, refresh rate, resolution, and screen maintenance.',
    alternates: { canonical, languages: hreflang },
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const isEs = locale === 'es'

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'Blog' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          {t('index.title')}
        </h1>
        <p className="text-fg-muted text-lg">
          {t('index.subtitle')}
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post) => {
          const title = isEs ? (postTranslations[post.slug]?.title ?? post.title) : post.title
          const description = isEs ? (postTranslations[post.slug]?.description ?? post.description) : post.description
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 hover:border-accent transition-colors"
            >
              <h2 className="text-base font-bold text-fg group-hover:text-accent transition-colors leading-snug">
                {title}
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 text-xs text-fg-muted">
                  <span>{formatDate(post.publishedAt, locale)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readingMinutes} {t('post.minRead')}
                  </span>
                </div>
                <ArrowRight size={14} className="text-fg-muted group-hover:text-accent transition-colors" />
              </div>
            </Link>
          )
        })}
      </section>

    </div>
  )
}
