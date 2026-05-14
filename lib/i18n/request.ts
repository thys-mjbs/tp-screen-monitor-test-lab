import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale
  }

  // Static per-locale imports — Turbopack cannot resolve fully dynamic paths
  const messages = locale === 'es'
    ? (await import('../../messages/es.json')).default
    : (await import('../../messages/en.json')).default

  return { locale, messages }
})
