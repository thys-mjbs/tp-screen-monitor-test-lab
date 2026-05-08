import type { Metadata } from 'next'
import { Sora, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: 'Screen & Monitor Test Lab: Free Online Display Tests',
    template: '%s | Screen & Monitor Test Lab',
  },
  description:
    'Free browser-based tools to test your monitor for dead pixels, backlight bleed, colour accuracy, refresh rate, and more. No download or sign-up required.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: appUrl,
    siteName: 'Screen & Monitor Test Lab',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Screen & Monitor Test Lab' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${geistMono.variable} font-sans antialiased bg-bg text-fg`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
