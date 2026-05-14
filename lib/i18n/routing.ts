import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // 'as-needed': English stays at / with no prefix; all other locales get /es/ prefix
})
