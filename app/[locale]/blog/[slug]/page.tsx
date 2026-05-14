import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { posts, getPostBySlug, formatDate } from '@/lib/posts'
import { getToolBySlug, getLocalizedTool } from '@/lib/tools'
import { toolTranslations as toolTranslationsEs } from '@/lib/i18n/tools-es'
import { postTranslations as postTranslationsEs } from '@/lib/i18n/posts-es'
import { toolTranslations as toolTranslationsPt } from '@/lib/i18n/tools-pt'
import { postTranslations as postTranslationsPt } from '@/lib/i18n/posts-pt'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { AmazonLinks } from '@/components/affiliate/AmazonLinks'
import { Clock } from 'lucide-react'
import { POST_CONTENT } from './content.en'
import { POST_CONTENT_ES } from './content.es'
import { POST_CONTENT_PT } from './content.pt'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  const locales = ['en', 'es', 'pt']
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const postTranslations = locale === 'es' ? postTranslationsEs : locale === 'pt' ? postTranslationsPt : null
  const title = postTranslations ? (postTranslations[slug]?.title ?? post.title) : post.title
  const description = postTranslations ? (postTranslations[slug]?.description ?? post.description) : post.description
  const canonical = locale === 'en' ? `${appUrl}/blog/${slug}` : `${appUrl}/${locale}/blog/${slug}`
  const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': `${appUrl}/blog/${slug}`,
        'es': `${appUrl}/es/blog/${slug}`,
        'pt': `${appUrl}/pt/blog/${slug}`,
        'x-default': `${appUrl}/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const t = await getTranslations({ locale, namespace: 'blog' })
  const postTranslations = locale === 'es' ? postTranslationsEs : locale === 'pt' ? postTranslationsPt : null
  const toolTranslations = locale === 'es' ? toolTranslationsEs : locale === 'pt' ? toolTranslationsPt : null

  const contentMap =
    locale === 'es' ? POST_CONTENT_ES :
    locale === 'pt' ? POST_CONTENT_PT :
    POST_CONTENT
  const Content = contentMap[slug] ?? POST_CONTENT[slug]
  if (!Content) notFound()

  const title = postTranslations ? (postTranslations[slug]?.title ?? post.title) : post.title
  const description = postTranslations ? (postTranslations[slug]?.description ?? post.description) : post.description

  const relatedTools = post.relatedTools
    .map((s) => toolTranslations ? (getLocalizedTool(s, toolTranslations) ?? getToolBySlug(s)) : getToolBySlug(s))
    .filter(Boolean)

  const homeLabel = locale === 'es' ? 'Inicio' : locale === 'pt' ? 'Início' : 'Home'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Screen Test Lab',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: appUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${appUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: title }]} />

        <article className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-fg-muted">
              <span>{formatDate(post.publishedAt, locale)}</span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {post.readingMinutes} {t('post.minRead')}
              </span>
            </div>
          </header>

          <div className="space-y-6 text-fg-muted">
            <Content />
          </div>
        </article>

        {post.amazonSearchTerms?.length > 0 && (
          <AmazonLinks searchTerms={post.amazonSearchTerms} />
        )}

        {relatedTools.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-fg">{t('post.relatedTools')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTools.map((tool) => (
                <ToolCard key={tool!.slug} tool={tool!} />
              ))}
            </div>
          </section>
        )}

        <div className="pt-2 border-t border-border">
          <Link href="/blog" className="text-sm text-accent hover:underline font-medium">
            &larr; {t('post.backToArticles')}
          </Link>
        </div>

      </div>
    </>
  )
}
