import { getLocalizedTool, getToolBySlug, type Tool } from '@/lib/tools'
import { toolTranslations } from './tools-es'

export function getToolByLocale(slug: string, locale: string): Tool {
  if (locale === 'es') {
    return getLocalizedTool(slug, toolTranslations) ?? getToolBySlug(slug)!
  }
  return getToolBySlug(slug)!
}
