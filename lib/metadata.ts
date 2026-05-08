import type { Metadata } from 'next'
import type { Tool } from './tools'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function toolMetadata(tool: Tool): Metadata {
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
    alternates: { canonical: `${appUrl}/${tool.slug}` },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDesc,
      url: `${appUrl}/${tool.slug}`,
      type: 'website',
    },
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
