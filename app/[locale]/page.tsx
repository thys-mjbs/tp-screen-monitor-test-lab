import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { tools, categoryMeta, getToolsByCategory, getLocalizedTool, getLocalizedCategoryMeta } from '@/lib/tools'
import { toolTranslations as toolTranslationsEs, categoryTranslations as categoryTranslationsEs } from '@/lib/i18n/tools-es'
import { toolTranslations as toolTranslationsPt, categoryTranslations as categoryTranslationsPt } from '@/lib/i18n/tools-pt'
import { ToolCard } from '@/components/ToolCard'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = locale === 'en' ? appUrl : `${appUrl}/${locale}`
  const hreflang = { 'en': appUrl, 'es': `${appUrl}/es`, 'pt': `${appUrl}/pt`, 'x-default': appUrl }
  if (locale === 'es') {
    return {
      title: 'Pruebas de monitor y pantalla gratis: píxeles muertos, sangrado y más',
      description:
        'Herramientas gratuitas basadas en el navegador para comprobar tu monitor en busca de píxeles muertos, sangrado de luz de fondo, frecuencia de actualización, precisión de color y más. Sin descarga ni registro.',
      alternates: { canonical, languages: hreflang },
      openGraph: {
        title: 'Pruebas de monitor y pantalla gratis',
        description:
          'Comprueba tu pantalla en busca de píxeles muertos, sangrado de luz de fondo, frecuencia de actualización y precisión de color. 25 herramientas gratuitas.',
        url: canonical,
        type: 'website',
      },
    }
  }
  if (locale === 'pt') {
    return {
      title: 'Testes de Monitor e Tela Online Gratuitos: Pixels Mortos, Vazamento de Luz e Mais',
      description:
        'Ferramentas gratuitas baseadas no navegador para testar o seu monitor para pixels mortos, vazamento de luz de fundo, taxa de atualização, precisão de cores e mais. Sem download ou registo.',
      alternates: { canonical, languages: hreflang },
      openGraph: {
        title: 'Testes de Monitor e Tela Online Gratuitos',
        description:
          'Teste a sua tela para pixels mortos, vazamento de luz de fundo, taxa de atualização e precisão de cores. 30 ferramentas gratuitas.',
        url: canonical,
        type: 'website',
      },
    }
  }
  return {
    title: 'Free Monitor & Screen Tests Online: Dead Pixels, Backlight Bleed & More',
    description:
      'Free browser-based tools to test your monitor for dead pixels, backlight bleed, refresh rate, colour accuracy, and more. No download or sign-up required.',
    alternates: { canonical, languages: hreflang },
    openGraph: {
      title: 'Free Monitor & Screen Tests Online',
      description:
        'Test your display for dead pixels, backlight bleed, refresh rate, and colour accuracy. 25 free tools, no download needed.',
      url: canonical,
      type: 'website',
    },
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Screen & Monitor Test Lab',
  url: appUrl,
  logo: `${appUrl}/og-image.png`,
  description: 'Free browser-based monitor and screen testing tools.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${appUrl}/contact`,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Screen & Monitor Test Lab',
  url: appUrl,
}

const categoryKeys: Array<'visual-test' | 'screen-state' | 'checker'> = [
  'visual-test',
  'screen-state',
  'checker',
]

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  const localeCategoryMeta =
    locale === 'es' ? getLocalizedCategoryMeta(categoryTranslationsEs) :
    locale === 'pt' ? getLocalizedCategoryMeta(categoryTranslationsPt) :
    categoryMeta

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Hero */}
        <section className="space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-fg tracking-tight leading-tight">
            {t('hero.heading')}
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-fg-muted font-medium pt-1">
            <span>{tools.length} {t('trust.freeTools').toLowerCase()}</span>
            <span>{t('hero.statNoSignup')}</span>
            <span>{t('hero.statBrowserBased')}</span>
          </div>
        </section>

        {/* Tool grid by category */}
        <section id="tools" className="space-y-12">
          {categoryKeys.map((key) => {
            const meta = localeCategoryMeta[key]
            const categoryTools = getToolsByCategory(key).map((tool) =>
              locale === 'es' ? (getLocalizedTool(tool.slug, toolTranslationsEs) ?? tool) :
              locale === 'pt' ? (getLocalizedTool(tool.slug, toolTranslationsPt) ?? tool) :
              tool
            )
            return (
              <div key={key} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-fg">{meta.label}</h2>
                  <p className="text-sm text-fg-muted">{meta.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Trust strip */}
        <section className="border-t border-border pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">{tools.length}</p>
              <p className="text-sm text-fg-muted">{t('trust.freeTools')}</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">100%</p>
              <p className="text-sm text-fg-muted">{t('trust.browserBased')}</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-accent">0</p>
              <p className="text-sm text-fg-muted">{t('trust.noSignup')}</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
