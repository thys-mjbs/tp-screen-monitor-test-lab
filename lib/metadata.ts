import type { Metadata } from 'next'
import type { Tool } from './tools'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function toolMetadata(tool: Tool, locale?: string): Metadata {
  const enUrl = `${appUrl}/${tool.slug}`
  const esUrl = `${appUrl}/es/${tool.slug}`
  const canonical = locale === 'es' ? esUrl : enUrl
  const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(tool.metaTitle)}&desc=${encodeURIComponent(tool.metaDesc)}`
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
    alternates: {
      canonical,
      languages: { 'en': enUrl, 'es': esUrl, 'x-default': enUrl },
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDesc,
      url: canonical,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: tool.metaTitle }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  }
}

export function toolSchemas(tool: Tool, locale?: string) {
  const isEs = locale === 'es'
  const toolUrl = isEs ? `${appUrl}/es/${tool.slug}` : `${appUrl}/${tool.slug}`
  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: tool.metaDesc,
    url: toolUrl,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: isEs ? `${appUrl}/es` : appUrl },
      { '@type': 'ListItem', position: 2, name: tool.name, item: toolUrl },
    ],
  }

  return { webApp, breadcrumb }
}
