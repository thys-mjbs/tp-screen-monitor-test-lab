import type { MetadataRoute } from 'next'
import { tools } from '@/lib/tools'
import { posts } from '@/lib/posts'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = tools.map((tool) => ({
    url: `${appUrl}/${tool.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }))

  const postEntries = posts.map((post) => ({
    url: `${appUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }))

  return [
    { url: appUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    ...toolEntries,
    { url: `${appUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    ...postEntries,
    { url: `${appUrl}/about`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/contact`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]
}
