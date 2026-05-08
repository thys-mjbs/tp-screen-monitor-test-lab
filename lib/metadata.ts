import type { Metadata } from 'next'
import type { Tool } from './tools'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function toolMetadata(tool: Tool): Metadata {
  const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(tool.metaTitle)}&desc=${encodeURIComponent(tool.metaDesc)}`
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
    alternates: { canonical: `${appUrl}/${tool.slug}` },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDesc,
      url: `${appUrl}/${tool.slug}`,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: tool.metaTitle }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  }
}

export function toolSchemas(tool: Tool) {
  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: tool.metaDesc,
    url: `${appUrl}/${tool.slug}`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: appUrl },
      { '@type': 'ListItem', position: 2, name: tool.name, item: `${appUrl}/${tool.slug}` },
    ],
  }

  return { webApp, breadcrumb }
}
