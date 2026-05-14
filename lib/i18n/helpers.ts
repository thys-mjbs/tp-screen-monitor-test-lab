import { getLocalizedTool, getToolBySlug, type Tool } from '@/lib/tools'
import { toolTranslations as toolTranslationsEs } from './tools-es'
import { toolTranslations as toolTranslationsPt } from './tools-pt'

export function getToolByLocale(slug: string, locale: string): Tool {
  if (locale === 'es') {
    return getLocalizedTool(slug, toolTranslationsEs) ?? getToolBySlug(slug)!
  }
  if (locale === 'pt') {
    return getLocalizedTool(slug, toolTranslationsPt) ?? getToolBySlug(slug)!
  }
  return getToolBySlug(slug)!
}
