import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { posts, formatDate } from '@/lib/posts'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monitor Testing Blog',
  description: 'Guides and explainers on monitor testing, display calibration, pixel defects, panel types, refresh rate, resolution, and screen maintenance.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'Blog' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          Monitor Testing Blog
        </h1>
        <p className="text-fg-muted text-lg">
          Guides on display quality, calibration, pixel defects, and getting the most from your monitor tests.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 hover:border-accent transition-colors"
          >
            <h2 className="text-base font-bold text-fg group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-fg-muted leading-relaxed">{post.description}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3 text-xs text-fg-muted">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readingMinutes} min read
                </span>
              </div>
              <ArrowRight size={14} className="text-fg-muted group-hover:text-accent transition-colors" />
            </div>
          </Link>
        ))}
      </section>

    </div>
  )
}
