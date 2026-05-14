import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPostBySlug, formatDate } from '@/lib/posts'
import { getToolBySlug } from '@/lib/tools'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ToolCard } from '@/components/ToolCard'
import { AmazonLinks } from '@/components/affiliate/AmazonLinks'
import { Clock } from 'lucide-react'
import { POST_CONTENT } from './content.en'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.description)}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${appUrl}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const Content = POST_CONTENT[slug]
  if (!Content) notFound()

  const relatedTools = post.relatedTools
    .map((s) => getToolBySlug(s))
    .filter(Boolean)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tp-screen-monitor-test-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tp-screen-monitor-test-lab.vercel.app/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

        <article className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-fg-muted">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {post.readingMinutes} min read
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
            <h2 className="text-xl font-bold text-fg">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTools.map((tool) => (
                <ToolCard key={tool!.slug} tool={tool!} />
              ))}
            </div>
          </section>
        )}

        <div className="pt-2 border-t border-border">
          <Link href="/blog" className="text-sm text-accent hover:underline font-medium">
            &larr; Back to all articles
          </Link>
        </div>

      </div>
    </>
  )
}
