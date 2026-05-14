import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // 'as-needed': English stays at / with no prefix; all other locales get /es/ prefix
  // localeDetection: false prevents the middleware from auto-redirecting based on
  // the Accept-Language header or a locale cookie — locale is only changed via the switcher
  localeDetection: false,
})
