import type { MetadataRoute } from 'next'
import { tools } from '@/lib/tools'
import { posts } from '@/lib/posts'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

const subVariants = [
  'dead-pixel-test/for-oled',
  'dead-pixel-test/for-laptops',
  'dead-pixel-test/for-4k',
  'dead-pixel-test/for-projectors',
  'dead-pixel-test/for-vr',
  'backlight-bleed-test/for-oled',
  'image-retention-test/for-oled',
  'stuck-pixel-fixer/for-oled',
  'refresh-rate-checker/for-gaming',
  'refresh-rate-checker/144hz-test',
  'stuck-pixel-fixer/for-laptops',
  'image-retention-test/for-laptops',
  'screen-uniformity-test/for-ultrawide',
  'dead-pixel-test/for-gaming-monitors',
  'backlight-bleed-test/for-curved-monitors',
  'gamma-calibration-check/for-photography',
  'refresh-rate-checker/240hz-test',
  'contrast-black-level-test/for-oled',
  'viewing-angle-test/for-laptops',
  'resolution-checker/for-ultrawide',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = tools.map((tool) => ({
    url: `${appUrl}/${tool.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }))

  const toolEntriesEs = tools.map((tool) => ({
    url: `${appUrl}/es/${tool.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }))

  const subVariantEntries = subVariants.map((path) => ({
    url: `${appUrl}/${path}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const subVariantEntriesEs = subVariants.map((path) => ({
    url: `${appUrl}/es/${path}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const postEntries = posts.map((post) => ({
    url: `${appUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }))

  const postEntriesEs = posts.map((post) => ({
    url: `${appUrl}/es/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  }))

  return [
    { url: appUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${appUrl}/es`, priority: 1.0, changeFrequency: 'weekly' as const },
    ...toolEntries,
    ...toolEntriesEs,
    ...subVariantEntries,
    ...subVariantEntriesEs,
    { url: `${appUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${appUrl}/es/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    ...postEntries,
    ...postEntriesEs,
    { url: `${appUrl}/about`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/es/about`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/contact`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/es/contact`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/es/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${appUrl}/es/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]
}
