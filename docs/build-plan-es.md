# Build Plan: Add Spanish (es) to Screen Test Lab

## Phase 1 — Bootstrap i18n + register the locale
- [x] 1.0 This file created
- [x] 1.1 Install next-intl; create lib/i18n/routing.ts with es in locales array
- [x] 1.2 Create middleware.ts
- [x] 1.3 Create lib/i18n/request.ts
- [x] 1.4 Update next.config.ts with createNextIntlPlugin
- [x] 1.5 Move all page files from app/ into app/[locale]/
- [x] 1.6 Create app/[locale]/layout.tsx (NextIntlClientProvider)
- [x] 1.7 Update app/layout.tsx to use getLocale() for lang attribute

## Phase 2 — Create the translation file
- [x] 2.1 Create messages/en.json (English baseline — all keys)
- [x] 2.2 Create messages/es.json part 1: nav, footer, breadcrumb, common, home page
- [x] 2.3 Add to messages/es.json: blog strings + FullscreenPanel + RefreshRateChecker
- [x] 2.4 Add to messages/es.json: ResolutionChecker + InputLagTest + StuckPixelFixer
- [x] 2.5 Add to messages/es.json: GammaCalibrationCheck + PwmFlickerTest + HdrTest + Affiliate; close file

## Phase 3 — Translate content data
- [x] 3.1 Create lib/i18n/tools-es.ts (30 tools: name, shortDescription, metaTitle, metaDesc + 3 categoryMeta entries)
- [x] 3.2 Create lib/i18n/posts-es.ts (19 post titles + descriptions)
- [x] 3.3 Update lib/tools.ts and lib/posts.ts for locale-awareness
- [x] 3.4 Create app/[locale]/blog/[slug]/content.es.tsx — blog posts 1–5
- [x] 3.5 Blog content posts 6–10
- [x] 3.6 Blog content posts 11–14
- [x] 3.7 Blog content posts 15–19

## Phase 4 — Wire up page routes
- [x] 4.1 Update app/[locale]/page.tsx (home) — locale tool data + translations
- [x] 4.2 Update app/[locale]/blog/page.tsx — translations + locale formatDate
- [x] 4.3 Update app/[locale]/blog/[slug]/page.tsx — locale content + translations
- [x] 4.4 Update static pages: about, contact, privacy, terms
- [x] 4.5 Update generateStaticParams in every page file to include es

## Phase 5 — Update tool pages and component UI strings
- [x] 5.1 Update components/tools/FullscreenPanel.tsx — use useTranslations
- [x] 5.2 Update components/tools/RefreshRateChecker.tsx — use useTranslations
- [x] 5.3 Update components/tools/ResolutionChecker.tsx — use useTranslations
- [x] 5.4 Update components/tools/InputLagTest.tsx — use useTranslations
- [x] 5.5 Update components/tools/StuckPixelFixer.tsx — use useTranslations
- [x] 5.6 Update components/tools/GammaCalibrationCheck.tsx — use useTranslations
- [x] 5.7 Update components/tools/PwmFlickerTest.tsx + HdrTest.tsx — use useTranslations
- [x] 5.8 Update shared components: ToolPageLayout, AmazonLinks, Header, Footer, Breadcrumb
- [x] 5.9 Screen-state tool pages (9): white-screen, black-screen, red-screen, green-screen, blue-screen, grey-screen, yellow-screen, pink-screen, fullscreen-colour-cycle
- [x] 5.10 Visual-test pages group 1 (6): dead-pixel-test, stuck-pixel-fixer, backlight-bleed-test, ips-glow-test, contrast-black-level-test, white-saturation-test
- [x] 5.11 Visual-test pages group 2 (7): gamma-calibration-check, gradient-banding-test, screen-uniformity-test, viewing-angle-test, image-retention-test, moire-pattern-test, sharpness-focus-chart
- [x] 5.12 Visual-test pages group 3 (6): motion-blur-test, pwm-flicker-test, colour-temperature-test, black-smear-test, overdrive-test, hdr-test
- [x] 5.13 Checker pages (4): refresh-rate-checker, resolution-checker, input-lag-test, screen-clean-mode
- [x] 5.14 Sub-variant pages (20): served at /es/ routes via cascading generateStaticParams; content remains English; metadata is bespoke static strings

## Phase 6 — Sitemap, hreflang, TypeScript, verification
- [x] 6.1 Update app/sitemap.ts — add es-prefixed URL set
- [x] 6.2 Add hreflang alternates to all generateMetadata exports (all 60+ pages)
- [x] 6.3 Update lib/metadata.ts — locale-aware toolMetadata and toolSchemas
- [x] 6.4 Run npx tsc --noEmit; fix all type errors
- [x] 6.5 Manual verification checklist
