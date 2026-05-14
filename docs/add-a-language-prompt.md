# Add a Language to Screen Test Lab

This guide walks an AI agent through adding a new language to Screen Test Lab, a Next.js App Router site. The site currently has **no i18n infrastructure** — all strings are hardcoded in English across roughly 60 component and page files, with no translation system, no locale routing, and no middleware.

**The first time this guide is run, Phase 1 includes one-time bootstrapping** (installing `next-intl`, creating middleware, restructuring `app/` to `app/[locale]/`, updating `next.config.ts`). On every subsequent language addition, Phase 1 is short: open `lib/i18n/routing.ts`, add the new locale code to the `locales` array, mark Milestone 1.0 done, and move to Phase 2.

The full addition covers: routing config, `next-intl` messages files, locale-specific tool and blog data, translated blog content, locale-aware interactive tool components, and sitemap/hreflang updates.

---

## How to run this

Work through one phase at a time. After completing each milestone within a phase, output:

```
✓ Milestone N.M done — [one sentence]
```

After the final milestone in a phase, output a phase summary and **stop completely**:

```
✓ Phase N done — [one sentence]
```

Wait for the user to say **"continue"** before starting the next phase. Do not attempt more than one phase per session. Target 10,000–20,000 tokens per session. If a phase is still too large, complete the first milestone, report, and stop — the user will say "continue" to resume within the phase.

**If interrupted:** Start a new conversation, paste this prompt, and add at the top: *"Resume from Phase N, Milestone M — all prior phases and milestones are complete."* Then open `docs/build-plan-[LANG_CODE].md` to confirm the exact checkpoint before continuing.

---

## Phase 1 — Bootstrap i18n + register the locale

> **First-run only:** Complete all milestones below if `next-intl` is not yet in `package.json`. If `next-intl` is already installed and `app/[locale]/` already exists, only Milestone 1.0 and adding `'[LANG_CODE]'` to the `locales` array in `lib/i18n/routing.ts` are needed — skip everything else in Phase 1.

### Milestone 1.0 — Create the build plan

Create `docs/build-plan-[LANG_CODE].md` with this exact content:

```markdown
# Build Plan: Add [LANGUAGE] ([LANG_CODE]) to Screen Test Lab

## Phase 1 — Bootstrap i18n + register the locale
- [x] 1.0 This file created
- [ ] 1.1 Install next-intl; create lib/i18n/routing.ts with [LANG_CODE] in locales array
- [ ] 1.2 Create middleware.ts
- [ ] 1.3 Create lib/i18n/request.ts
- [ ] 1.4 Update next.config.ts with createNextIntlPlugin
- [ ] 1.5 Move all page files from app/ into app/[locale]/
- [ ] 1.6 Create app/[locale]/layout.tsx (NextIntlClientProvider)
- [ ] 1.7 Update app/layout.tsx to use getLocale() for lang attribute

## Phase 2 — Create the translation file
- [ ] 2.1 Create messages/en.json (English baseline — all keys)
- [ ] 2.2 Create messages/[LANG_CODE].json part 1: nav, footer, breadcrumb, common, home page
- [ ] 2.3 Add to messages/[LANG_CODE].json: blog strings + FullscreenPanel + RefreshRateChecker
- [ ] 2.4 Add to messages/[LANG_CODE].json: ResolutionChecker + InputLagTest + StuckPixelFixer
- [ ] 2.5 Add to messages/[LANG_CODE].json: GammaCalibrationCheck + PwmFlickerTest + HdrTest + Affiliate; close file

## Phase 3 — Translate content data
- [ ] 3.1 Create lib/i18n/tools-[LANG_CODE].ts (30 tools: name, shortDescription, metaTitle, metaDesc + 3 categoryMeta entries)
- [ ] 3.2 Create lib/i18n/posts-[LANG_CODE].ts (19 post titles + descriptions)
- [ ] 3.3 Update lib/tools.ts and lib/posts.ts for locale-awareness
- [ ] 3.4 Create app/[locale]/blog/[slug]/content.[LANG_CODE].tsx — blog posts 1–5
- [ ] 3.5 Blog content posts 6–10
- [ ] 3.6 Blog content posts 11–14
- [ ] 3.7 Blog content posts 15–19

## Phase 4 — Wire up page routes
- [ ] 4.1 Update app/[locale]/page.tsx (home) — locale tool data + translations
- [ ] 4.2 Update app/[locale]/blog/page.tsx — translations + locale formatDate
- [ ] 4.3 Update app/[locale]/blog/[slug]/page.tsx — locale content + translations
- [ ] 4.4 Update static pages: about, contact, privacy, terms
- [ ] 4.5 Update generateStaticParams in every page file to include [LANG_CODE]

## Phase 5 — Update tool pages and component UI strings
- [ ] 5.1 Update components/tools/FullscreenPanel.tsx — use useTranslations
- [ ] 5.2 Update components/tools/RefreshRateChecker.tsx — use useTranslations
- [ ] 5.3 Update components/tools/ResolutionChecker.tsx — use useTranslations
- [ ] 5.4 Update components/tools/InputLagTest.tsx — use useTranslations
- [ ] 5.5 Update components/tools/StuckPixelFixer.tsx — use useTranslations
- [ ] 5.6 Update components/tools/GammaCalibrationCheck.tsx — use useTranslations
- [ ] 5.7 Update components/tools/PwmFlickerTest.tsx + HdrTest.tsx — use useTranslations
- [ ] 5.8 Update shared components: ToolPageLayout, AmazonLinks, Header, Footer, Breadcrumb
- [ ] 5.9 Screen-state tool pages (9): white-screen, black-screen, red-screen, green-screen, blue-screen, grey-screen, yellow-screen, pink-screen, fullscreen-colour-cycle
- [ ] 5.10 Visual-test pages group 1 (6): dead-pixel-test, stuck-pixel-fixer, backlight-bleed-test, ips-glow-test, contrast-black-level-test, white-saturation-test
- [ ] 5.11 Visual-test pages group 2 (7): gamma-calibration-check, gradient-banding-test, screen-uniformity-test, viewing-angle-test, image-retention-test, moire-pattern-test, sharpness-focus-chart
- [ ] 5.12 Visual-test pages group 3 (6): motion-blur-test, pwm-flicker-test, colour-temperature-test, black-smear-test, overdrive-test, hdr-test
- [ ] 5.13 Checker pages (4): refresh-rate-checker, resolution-checker, input-lag-test, screen-clean-mode
- [ ] 5.14 Sub-variant pages (20): dead-pixel-test/for-oled, /for-laptops, /for-4k, /for-vr, /for-projectors, /for-gaming-monitors; stuck-pixel-fixer/for-oled, /for-laptops; backlight-bleed-test/for-oled, /for-curved-monitors; image-retention-test/for-oled, /for-laptops; refresh-rate-checker/for-gaming, /144hz-test, /240hz-test; screen-uniformity-test/for-ultrawide; gamma-calibration-check/for-photography; contrast-black-level-test/for-oled; viewing-angle-test/for-laptops; resolution-checker/for-ultrawide

## Phase 6 — Sitemap, hreflang, TypeScript, verification
- [ ] 6.1 Update app/sitemap.ts — add [LANG_CODE]-prefixed URL set
- [ ] 6.2 Add hreflang alternates to all generateMetadata exports (all 60+ pages)
- [ ] 6.3 Update lib/metadata.ts — locale-aware toolMetadata and toolSchemas
- [ ] 6.4 Run npx tsc --noEmit; fix all type errors
- [ ] 6.5 Manual verification checklist
```

Mark `[x] 1.0` in the build plan immediately after creating the file.

---

### Milestone 1.1 — Install next-intl; create lib/i18n/routing.ts

Run:
```bash
npm install next-intl
```

Create `lib/i18n/routing.ts`:
```typescript
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', '[LANG_CODE]'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // 'as-needed': English stays at / with no prefix; all other locales get /[LANG_CODE]/
})
```

> **Subsequent runs:** If this file already exists, add `'[LANG_CODE]'` to the `locales` array. That is the only change needed in this file. Then skip to Phase 2.

---

### Milestone 1.2 — Create middleware.ts

Create `middleware.ts` at the project root (alongside `next.config.ts`):
```typescript
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/lib/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
```

---

### Milestone 1.3 — Create lib/i18n/request.ts

Create `lib/i18n/request.ts`:
```typescript
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
```

Also create the `messages/` directory (leave it empty for now):
```bash
mkdir -p messages
```

---

### Milestone 1.4 — Update next.config.ts

Replace the entire contents of `next.config.ts`:
```typescript
import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')

const nextConfig: NextConfig = {}

export default withNextIntl(nextConfig)
```

---

### Milestone 1.5 — Move all page files into app/[locale]/

This is a one-time structural change. Create `app/[locale]/` and move the following files and directories into it. Do **not** move: `app/layout.tsx`, `app/globals.css`, `app/providers.tsx`, `app/icon.png`, `app/not-found.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/api/`.

**Complete list of moves** (source → destination):

```
app/page.tsx                                          → app/[locale]/page.tsx
app/about/page.tsx                                    → app/[locale]/about/page.tsx
app/contact/page.tsx                                  → app/[locale]/contact/page.tsx
app/privacy/page.tsx                                  → app/[locale]/privacy/page.tsx
app/terms/page.tsx                                    → app/[locale]/terms/page.tsx
app/blog/page.tsx                                     → app/[locale]/blog/page.tsx
app/blog/[slug]/page.tsx                              → app/[locale]/blog/[slug]/page.tsx
app/blog/[slug]/content.tsx                           → app/[locale]/blog/[slug]/content.en.tsx
app/dead-pixel-test/page.tsx                          → app/[locale]/dead-pixel-test/page.tsx
app/dead-pixel-test/for-oled/page.tsx                 → app/[locale]/dead-pixel-test/for-oled/page.tsx
app/dead-pixel-test/for-laptops/page.tsx              → app/[locale]/dead-pixel-test/for-laptops/page.tsx
app/dead-pixel-test/for-4k/page.tsx                   → app/[locale]/dead-pixel-test/for-4k/page.tsx
app/dead-pixel-test/for-vr/page.tsx                   → app/[locale]/dead-pixel-test/for-vr/page.tsx
app/dead-pixel-test/for-projectors/page.tsx           → app/[locale]/dead-pixel-test/for-projectors/page.tsx
app/dead-pixel-test/for-gaming-monitors/page.tsx      → app/[locale]/dead-pixel-test/for-gaming-monitors/page.tsx
app/stuck-pixel-fixer/page.tsx                        → app/[locale]/stuck-pixel-fixer/page.tsx
app/stuck-pixel-fixer/for-oled/page.tsx               → app/[locale]/stuck-pixel-fixer/for-oled/page.tsx
app/stuck-pixel-fixer/for-laptops/page.tsx            → app/[locale]/stuck-pixel-fixer/for-laptops/page.tsx
app/white-screen/page.tsx                             → app/[locale]/white-screen/page.tsx
app/black-screen/page.tsx                             → app/[locale]/black-screen/page.tsx
app/red-screen/page.tsx                               → app/[locale]/red-screen/page.tsx
app/green-screen/page.tsx                             → app/[locale]/green-screen/page.tsx
app/blue-screen/page.tsx                              → app/[locale]/blue-screen/page.tsx
app/grey-screen/page.tsx                              → app/[locale]/grey-screen/page.tsx
app/yellow-screen/page.tsx                            → app/[locale]/yellow-screen/page.tsx
app/pink-screen/page.tsx                              → app/[locale]/pink-screen/page.tsx
app/fullscreen-colour-cycle/page.tsx                  → app/[locale]/fullscreen-colour-cycle/page.tsx
app/gradient-banding-test/page.tsx                    → app/[locale]/gradient-banding-test/page.tsx
app/gamma-calibration-check/page.tsx                  → app/[locale]/gamma-calibration-check/page.tsx
app/gamma-calibration-check/for-photography/page.tsx  → app/[locale]/gamma-calibration-check/for-photography/page.tsx
app/image-retention-test/page.tsx                     → app/[locale]/image-retention-test/page.tsx
app/image-retention-test/for-oled/page.tsx            → app/[locale]/image-retention-test/for-oled/page.tsx
app/image-retention-test/for-laptops/page.tsx         → app/[locale]/image-retention-test/for-laptops/page.tsx
app/screen-uniformity-test/page.tsx                   → app/[locale]/screen-uniformity-test/page.tsx
app/screen-uniformity-test/for-ultrawide/page.tsx     → app/[locale]/screen-uniformity-test/for-ultrawide/page.tsx
app/backlight-bleed-test/page.tsx                     → app/[locale]/backlight-bleed-test/page.tsx
app/backlight-bleed-test/for-oled/page.tsx            → app/[locale]/backlight-bleed-test/for-oled/page.tsx
app/backlight-bleed-test/for-curved-monitors/page.tsx → app/[locale]/backlight-bleed-test/for-curved-monitors/page.tsx
app/ips-glow-test/page.tsx                            → app/[locale]/ips-glow-test/page.tsx
app/moire-pattern-test/page.tsx                       → app/[locale]/moire-pattern-test/page.tsx
app/screen-clean-mode/page.tsx                        → app/[locale]/screen-clean-mode/page.tsx
app/sharpness-focus-chart/page.tsx                    → app/[locale]/sharpness-focus-chart/page.tsx
app/white-saturation-test/page.tsx                    → app/[locale]/white-saturation-test/page.tsx
app/viewing-angle-test/page.tsx                       → app/[locale]/viewing-angle-test/page.tsx
app/viewing-angle-test/for-laptops/page.tsx           → app/[locale]/viewing-angle-test/for-laptops/page.tsx
app/refresh-rate-checker/page.tsx                     → app/[locale]/refresh-rate-checker/page.tsx
app/refresh-rate-checker/for-gaming/page.tsx          → app/[locale]/refresh-rate-checker/for-gaming/page.tsx
app/refresh-rate-checker/144hz-test/page.tsx          → app/[locale]/refresh-rate-checker/144hz-test/page.tsx
app/refresh-rate-checker/240hz-test/page.tsx          → app/[locale]/refresh-rate-checker/240hz-test/page.tsx
app/resolution-checker/page.tsx                       → app/[locale]/resolution-checker/page.tsx
app/resolution-checker/for-ultrawide/page.tsx         → app/[locale]/resolution-checker/for-ultrawide/page.tsx
app/contrast-black-level-test/page.tsx                → app/[locale]/contrast-black-level-test/page.tsx
app/contrast-black-level-test/for-oled/page.tsx       → app/[locale]/contrast-black-level-test/for-oled/page.tsx
app/motion-blur-test/page.tsx                         → app/[locale]/motion-blur-test/page.tsx
app/colour-temperature-test/page.tsx                  → app/[locale]/colour-temperature-test/page.tsx
app/black-smear-test/page.tsx                         → app/[locale]/black-smear-test/page.tsx
app/overdrive-test/page.tsx                           → app/[locale]/overdrive-test/page.tsx
app/pwm-flicker-test/page.tsx                         → app/[locale]/pwm-flicker-test/page.tsx
app/input-lag-test/page.tsx                           → app/[locale]/input-lag-test/page.tsx
app/hdr-test/page.tsx                                 → app/[locale]/hdr-test/page.tsx
```

Note: `content.tsx` is renamed to `content.en.tsx` — it becomes the English-locale content file. A locale-keyed content map will be added in Phase 3.

---

### Milestone 1.6 — Create app/[locale]/layout.tsx

Create `app/[locale]/layout.tsx`:
```tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
```

---

### Milestone 1.7 — Update app/layout.tsx to set lang dynamically

In `app/layout.tsx`, import `getLocale` and use it for the `lang` attribute. Change:

```tsx
// Before
<html lang="en" suppressHydrationWarning>
```

To:

```tsx
// After — add this import at the top of the file
import { getLocale } from 'next-intl/server'

// Make the RootLayout async and replace the html opening tag
export default async function RootLayout({ children }: ...) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
```

The rest of `app/layout.tsx` (Providers, Header, Footer, Scripts) stays unchanged.

---

After all milestones above are complete:

```
✓ Phase 1 done — next-intl installed, routing configured, middleware created, all 60+ pages moved to app/[locale]/, locale layout scaffolded.
```

**Stop. Wait for "continue".**

---

## Phase 2 — Create the translation file

> **Linguistic localisation note — read before writing any string in [LANG_CODE]:**
>
> All strings in `messages/[LANG_CODE].json` must be written the way a fluent native speaker of [LANGUAGE] would naturally phrase them in a UI context — **not** word-for-word translations from English. Adapt idioms, sentence structure, verb forms, and UI conventions to what sounds natural in [LANGUAGE]. This applies to every string type: button labels, error messages, hints, status text, and page copy. For example, a button reading "Measure Again" should use whatever phrasing a native [LANGUAGE] speaker would expect on a retry button — not a literal translation of those two words.
>
> Do **not** run `npx tsc` between sub-milestones in this phase — the messages file is incomplete until Milestone 2.5 closes it, and partial JSON may cause type errors.

### Milestone 2.1 — Create messages/en.json (English baseline)

Create `messages/en.json` with all translation keys. This file defines the complete schema. Every key here must also appear in `messages/[LANG_CODE].json`.

```json
{
  "nav": {
    "tools": "Tools",
    "blog": "Blog",
    "about": "About"
  },
  "footer": {
    "popularTools": "Popular Tools",
    "site": "Site",
    "tagline": "Test your monitor for dead pixels, backlight bleed, and display problems. Free, no install.",
    "copyright": "Free to use, no sign-up required."
  },
  "breadcrumb": {
    "home": "Home"
  },
  "common": {
    "start": "Start",
    "stop": "Stop",
    "reset": "Reset",
    "fullscreen": "Fullscreen",
    "frequentlyAskedQuestions": "Frequently Asked Questions",
    "relatedTools": "Related Tools"
  },
  "home": {
    "hero": {
      "heading": "Free Monitor & Screen Tests Online",
      "description": "Test your display for dead pixels, backlight bleed, refresh rate, colour accuracy, and more. Works in any browser. No download, no sign-up.",
      "statNoSignup": "No sign-up required",
      "statBrowserBased": "Browser-based"
    },
    "trust": {
      "freeTools": "Free tools",
      "browserBased": "Browser-based, no install",
      "noSignup": "Sign-ups or accounts needed"
    }
  },
  "blog": {
    "index": {
      "title": "Monitor Testing Blog",
      "subtitle": "Guides on display quality, calibration, pixel defects, and getting the most from your monitor tests."
    },
    "post": {
      "relatedTools": "Related Tools",
      "backToArticles": "Back to all articles",
      "minRead": "min read"
    }
  },
  "tools": {
    "fullscreenPanel": {
      "cycleLabel": "Click to cycle colours",
      "fullscreen": "Full screen",
      "hint": "Click or Space to advance · Arrow keys to navigate · Esc to exit",
      "ariaCurrentColour": "Current colour: {colour}. Click to advance.",
      "ariaAdvance": "Click to advance colour",
      "colors": {
        "White": "White",
        "Black": "Black",
        "Red": "Red",
        "Green": "Green",
        "Blue": "Blue",
        "Cyan": "Cyan",
        "Magenta": "Magenta",
        "Grey": "Grey"
      }
    },
    "refreshRate": {
      "measuring": "Measuring refresh rate...",
      "sampling": "Sampling 60 frames",
      "measureAgain": "Measure Again",
      "note": "Result reflects the refresh rate your browser is currently using, not the hardware maximum.",
      "labels": {
        "cinema": "Cinema",
        "standardVideo": "Standard video",
        "highFrameRate": "High frame rate video",
        "standardDesktop": "Standard desktop",
        "standardPlus": "Standard+",
        "highRefresh": "High refresh",
        "gaming": "Gaming",
        "competitiveGaming": "Competitive gaming",
        "proCompetitive": "Pro competitive",
        "nonStandard": "Non-standard rate"
      }
    },
    "resolution": {
      "reading": "Reading display properties...",
      "recheck": "Re-check",
      "note": "Values auto-update on window resize and focus. Use Re-check after moving between monitors.",
      "labels": {
        "screenResolution": "Screen Resolution",
        "aspectRatio": "Aspect Ratio",
        "devicePixelRatio": "Device Pixel Ratio",
        "physicalPixels": "Physical Pixels",
        "browserViewport": "Browser Viewport",
        "colourDepth": "Colour Depth"
      },
      "notes": {
        "cssPixels": "CSS pixels",
        "hardwarePixels": "Hardware pixel count",
        "windowSize": "Current window size",
        "hidpi": "HiDPI / Retina display",
        "standardDensity": "Standard density",
        "hdrCapable": "10-bit / HDR capable",
        "standard8bit": "Standard 8-bit"
      },
      "ratioNames": {
        "16:9": "Widescreen",
        "16:10": "Widescreen 16:10",
        "4:3": "Classic 4:3",
        "5:4": "Classic 5:4",
        "21:9": "Ultrawide",
        "32:9": "Super ultrawide",
        "1:1": "Square",
        "3:2": "3:2 (Surface / photography)"
      }
    },
    "inputLag": {
      "idle": {
        "heading": "Click to Start",
        "description": "The screen will turn green after a random delay. Click as fast as you can the moment it changes."
      },
      "waiting": {
        "heading": "Wait...",
        "note": "Do not click yet, wait for green"
      },
      "go": "CLICK!",
      "tooEarly": {
        "heading": "Too Early",
        "note": "Wait for the screen to turn green, then click to try again"
      },
      "result": {
        "clickAgain": "Click to try again"
      },
      "results": "Results:",
      "average": "Average:",
      "labels": {
        "excellent": "Excellent",
        "good": "Good",
        "average": "Average",
        "slow": "Slow",
        "verySlow": "Very slow"
      }
    },
    "stuckPixel": {
      "warning": {
        "title": "Flashing imagery warning.",
        "body": "This tool displays rapidly cycling colours at high frequency. Do not use it if you have photosensitive epilepsy, are sensitive to flashing or flickering light, or have been advised to avoid such content. If you experience any discomfort, stop immediately by pressing Esc or the Stop button."
      },
      "pressStart": "Press Start to begin flashing",
      "running": "Running:",
      "speed": "Speed:",
      "note": "Run for 20 to 30 minutes for best results. Results are not guaranteed. This tool cannot fix dead pixels.",
      "speeds": {
        "slow": "Slow",
        "normal": "Normal",
        "fast": "Fast",
        "rapid": "Rapid"
      }
    },
    "gamma": {
      "checkerboard": "Reference checkerboard",
      "target": "Target",
      "standardTarget": "Standard target",
      "viewFullscreen": "View Fullscreen",
      "hint": "Step back from your screen. The swatch that best matches the checkerboard indicates your display gamma.",
      "fsHint": "Step back and find which side matches · Click or Space to cycle reference · Esc to exit",
      "labels": {
        "gamma18": "Gamma 1.8",
        "gamma20": "Gamma 2.0",
        "gamma22": "Gamma 2.2",
        "gamma24": "Gamma 2.4"
      }
    },
    "pwm": {
      "warning": {
        "title": "Flashing imagery warning.",
        "body": "This tool displays rapidly cycling colours at high frequency. Do not use it if you have photosensitive epilepsy, are sensitive to flashing or flickering light, or have been advised to avoid such content. If you experience any discomfort, stop immediately by pressing Esc or the Stop button."
      },
      "pressStart": "Press Start to begin flickering",
      "flickering": "Flickering",
      "steadyRef": "Steady Reference",
      "toggleEvery": "Toggle every:",
      "offPhase": "Off-phase:",
      "note": "Flicker rate is relative to your monitor's frame rate. Real monitor PWM runs at 200–1000 Hz and is invisible to the eye — use the camera method to detect it.",
      "rates": {
        "f1": "1 frame",
        "f2": "2 frames",
        "f4": "4 frames",
        "f8": "8 frames"
      },
      "dim": {
        "fullOff": "Full off",
        "dim25": "25% dim",
        "dim50": "50% dim"
      }
    },
    "hdr": {
      "detecting": "Detecting display capabilities...",
      "fullRamp": "Full brightness ramp (black to white)",
      "shadowSteps": "Shadow steps: near-black detail",
      "highlightSteps": "Highlight steps: near-white detail",
      "note": "Each step in the shadow and highlight ramps should be individually visible. Merged steps indicate crushed blacks or clipped highlights. True HDR luminance above SDR white cannot be rendered in a standard browser page.",
      "caps": {
        "hdrLabel": "HDR (High Dynamic Range)",
        "hdrSupported": "Your browser and display report HDR capability.",
        "hdrUnsupported": "Your browser or display does not report HDR support. An SDR display or a browser without HDR passthrough will show this.",
        "p3Label": "Wide Colour Gamut: Display P3",
        "p3Supported": "Your display can render colours beyond the sRGB gamut. P3 covers about 25% more colour than sRGB.",
        "p3Unsupported": "Your display is reporting standard sRGB gamut. Most non-HDR monitors are sRGB only.",
        "rec2020Label": "Wide Colour Gamut: Rec. 2020",
        "rec2020Supported": "Your display reports Rec. 2020 colour gamut, the broadcast HDR standard. This is rare on consumer monitors.",
        "rec2020Unsupported": "Rec. 2020 not detected. This is expected on nearly all consumer monitors including most HDR displays."
      }
    }
  },
  "affiliate": {
    "shopOnAmazon": "Shop on Amazon",
    "disclosure": "As an Amazon Associate we earn from qualifying purchases."
  },
  "footerLinks": {
    "allTools": "All Tools",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service"
  }
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 2.2 — Start messages/[LANG_CODE].json — nav, footer, breadcrumb, common, home

Create `messages/[LANG_CODE].json`. Write the following sections with all strings in [LANGUAGE] (see linguistic localisation note above). Leave the file open — do not close the root `{` yet:

```json
{
  "nav": {
    "tools": "[LANGUAGE translation of: Tools]",
    "blog": "[LANGUAGE translation of: Blog]",
    "about": "[LANGUAGE translation of: About]"
  },
  "footer": {
    "popularTools": "[LANGUAGE translation of: Popular Tools]",
    "site": "[LANGUAGE translation of: Site]",
    "tagline": "[LANGUAGE translation of: Test your monitor for dead pixels, backlight bleed, and display problems. Free, no install.]",
    "copyright": "[LANGUAGE translation of: Free to use, no sign-up required.]"
  },
  "breadcrumb": {
    "home": "[LANGUAGE translation of: Home]"
  },
  "common": {
    "start": "[LANGUAGE translation of: Start]",
    "stop": "[LANGUAGE translation of: Stop]",
    "reset": "[LANGUAGE translation of: Reset]",
    "fullscreen": "[LANGUAGE translation of: Fullscreen]",
    "frequentlyAskedQuestions": "[LANGUAGE translation of: Frequently Asked Questions]",
    "relatedTools": "[LANGUAGE translation of: Related Tools]"
  },
  "footerLinks": {
    "allTools": "[LANGUAGE translation of: All Tools]",
    "blog": "[LANGUAGE translation of: Blog]",
    "about": "[LANGUAGE translation of: About]",
    "contact": "[LANGUAGE translation of: Contact]",
    "privacy": "[LANGUAGE translation of: Privacy Policy]",
    "terms": "[LANGUAGE translation of: Terms of Service]"
  },
  "home": {
    "hero": {
      "heading": "[LANGUAGE translation of: Free Monitor & Screen Tests Online]",
      "description": "[LANGUAGE translation of: Test your display for dead pixels...]",
      "statNoSignup": "[LANGUAGE translation of: No sign-up required]",
      "statBrowserBased": "[LANGUAGE translation of: Browser-based]"
    },
    "trust": {
      "freeTools": "[LANGUAGE translation of: Free tools]",
      "browserBased": "[LANGUAGE translation of: Browser-based, no install]",
      "noSignup": "[LANGUAGE translation of: Sign-ups or accounts needed]"
    }
  },
```

(File remains open — do not add closing `}` yet.)

**Stop after this milestone.** Wait for "continue".

---

### Milestone 2.3 — Add blog strings + FullscreenPanel + RefreshRateChecker

Continue `messages/[LANG_CODE].json` — append these sections (still no closing `}`):

```json
  "blog": {
    "index": {
      "title": "[LANGUAGE translation of: Monitor Testing Blog]",
      "subtitle": "[LANGUAGE translation of: Guides on display quality, calibration, pixel defects, and getting the most from your monitor tests.]"
    },
    "post": {
      "relatedTools": "[LANGUAGE translation of: Related Tools]",
      "backToArticles": "[LANGUAGE translation of: Back to all articles]",
      "minRead": "[LANGUAGE translation of: min read]"
    }
  },
  "tools": {
    "fullscreenPanel": {
      "cycleLabel": "[LANGUAGE translation of: Click to cycle colours]",
      "fullscreen": "[LANGUAGE translation of: Full screen]",
      "hint": "[LANGUAGE translation of: Click or Space to advance · Arrow keys to navigate · Esc to exit]",
      "ariaCurrentColour": "[LANGUAGE translation of: Current colour: {colour}. Click to advance.]",
      "ariaAdvance": "[LANGUAGE translation of: Click to advance colour]",
      "colors": {
        "White": "[LANGUAGE translation of: White]",
        "Black": "[LANGUAGE translation of: Black]",
        "Red": "[LANGUAGE translation of: Red]",
        "Green": "[LANGUAGE translation of: Green]",
        "Blue": "[LANGUAGE translation of: Blue]",
        "Cyan": "[LANGUAGE translation of: Cyan]",
        "Magenta": "[LANGUAGE translation of: Magenta]",
        "Grey": "[LANGUAGE translation of: Grey]"
      }
    },
    "refreshRate": {
      "measuring": "[LANGUAGE translation of: Measuring refresh rate...]",
      "sampling": "[LANGUAGE translation of: Sampling 60 frames]",
      "measureAgain": "[LANGUAGE translation of: Measure Again]",
      "note": "[LANGUAGE translation of: Result reflects the refresh rate your browser is currently using, not the hardware maximum.]",
      "labels": {
        "cinema": "[LANGUAGE translation of: Cinema]",
        "standardVideo": "[LANGUAGE translation of: Standard video]",
        "highFrameRate": "[LANGUAGE translation of: High frame rate video]",
        "standardDesktop": "[LANGUAGE translation of: Standard desktop]",
        "standardPlus": "[LANGUAGE translation of: Standard+]",
        "highRefresh": "[LANGUAGE translation of: High refresh]",
        "gaming": "[LANGUAGE translation of: Gaming]",
        "competitiveGaming": "[LANGUAGE translation of: Competitive gaming]",
        "proCompetitive": "[LANGUAGE translation of: Pro competitive]",
        "nonStandard": "[LANGUAGE translation of: Non-standard rate]"
      }
    },
```

(File remains open.)

**Stop after this milestone.** Wait for "continue".

---

### Milestone 2.4 — Add ResolutionChecker + InputLagTest + StuckPixelFixer

Continue `messages/[LANG_CODE].json`:

```json
    "resolution": {
      "reading": "[LANGUAGE translation of: Reading display properties...]",
      "recheck": "[LANGUAGE translation of: Re-check]",
      "note": "[LANGUAGE translation of: Values auto-update on window resize and focus. Use Re-check after moving between monitors.]",
      "labels": {
        "screenResolution": "[LANGUAGE translation of: Screen Resolution]",
        "aspectRatio": "[LANGUAGE translation of: Aspect Ratio]",
        "devicePixelRatio": "[LANGUAGE translation of: Device Pixel Ratio]",
        "physicalPixels": "[LANGUAGE translation of: Physical Pixels]",
        "browserViewport": "[LANGUAGE translation of: Browser Viewport]",
        "colourDepth": "[LANGUAGE translation of: Colour Depth]"
      },
      "notes": {
        "cssPixels": "[LANGUAGE translation of: CSS pixels]",
        "hardwarePixels": "[LANGUAGE translation of: Hardware pixel count]",
        "windowSize": "[LANGUAGE translation of: Current window size]",
        "hidpi": "[LANGUAGE translation of: HiDPI / Retina display]",
        "standardDensity": "[LANGUAGE translation of: Standard density]",
        "hdrCapable": "[LANGUAGE translation of: 10-bit / HDR capable]",
        "standard8bit": "[LANGUAGE translation of: Standard 8-bit]"
      },
      "ratioNames": {
        "16:9": "[LANGUAGE translation of: Widescreen]",
        "16:10": "[LANGUAGE translation of: Widescreen 16:10]",
        "4:3": "[LANGUAGE translation of: Classic 4:3]",
        "5:4": "[LANGUAGE translation of: Classic 5:4]",
        "21:9": "[LANGUAGE translation of: Ultrawide]",
        "32:9": "[LANGUAGE translation of: Super ultrawide]",
        "1:1": "[LANGUAGE translation of: Square]",
        "3:2": "[LANGUAGE translation of: 3:2 (Surface / photography)]"
      }
    },
    "inputLag": {
      "idle": {
        "heading": "[LANGUAGE translation of: Click to Start]",
        "description": "[LANGUAGE translation of: The screen will turn green after a random delay. Click as fast as you can the moment it changes.]"
      },
      "waiting": {
        "heading": "[LANGUAGE translation of: Wait...]",
        "note": "[LANGUAGE translation of: Do not click yet, wait for green]"
      },
      "go": "[LANGUAGE translation of: CLICK!]",
      "tooEarly": {
        "heading": "[LANGUAGE translation of: Too Early]",
        "note": "[LANGUAGE translation of: Wait for the screen to turn green, then click to try again]"
      },
      "result": {
        "clickAgain": "[LANGUAGE translation of: Click to try again]"
      },
      "results": "[LANGUAGE translation of: Results:]",
      "average": "[LANGUAGE translation of: Average:]",
      "labels": {
        "excellent": "[LANGUAGE translation of: Excellent]",
        "good": "[LANGUAGE translation of: Good]",
        "average": "[LANGUAGE translation of: Average]",
        "slow": "[LANGUAGE translation of: Slow]",
        "verySlow": "[LANGUAGE translation of: Very slow]"
      }
    },
    "stuckPixel": {
      "warning": {
        "title": "[LANGUAGE translation of: Flashing imagery warning.]",
        "body": "[LANGUAGE translation of: This tool displays rapidly cycling colours at high frequency. Do not use it if you have photosensitive epilepsy, are sensitive to flashing or flickering light, or have been advised to avoid such content. If you experience any discomfort, stop immediately by pressing Esc or the Stop button.]"
      },
      "pressStart": "[LANGUAGE translation of: Press Start to begin flashing]",
      "running": "[LANGUAGE translation of: Running:]",
      "speed": "[LANGUAGE translation of: Speed:]",
      "note": "[LANGUAGE translation of: Run for 20 to 30 minutes for best results. Results are not guaranteed. This tool cannot fix dead pixels.]",
      "speeds": {
        "slow": "[LANGUAGE translation of: Slow]",
        "normal": "[LANGUAGE translation of: Normal]",
        "fast": "[LANGUAGE translation of: Fast]",
        "rapid": "[LANGUAGE translation of: Rapid]"
      }
    },
```

(File remains open.)

**Stop after this milestone.** Wait for "continue".

---

### Milestone 2.5 — Add GammaCalibrationCheck + PwmFlickerTest + HdrTest + Affiliate; close file

Continue and close `messages/[LANG_CODE].json`:

```json
    "gamma": {
      "checkerboard": "[LANGUAGE translation of: Reference checkerboard]",
      "target": "[LANGUAGE translation of: Target]",
      "standardTarget": "[LANGUAGE translation of: Standard target]",
      "viewFullscreen": "[LANGUAGE translation of: View Fullscreen]",
      "hint": "[LANGUAGE translation of: Step back from your screen. The swatch that best matches the checkerboard indicates your display gamma.]",
      "fsHint": "[LANGUAGE translation of: Step back and find which side matches · Click or Space to cycle reference · Esc to exit]",
      "labels": {
        "gamma18": "[LANGUAGE translation of: Gamma 1.8]",
        "gamma20": "[LANGUAGE translation of: Gamma 2.0]",
        "gamma22": "[LANGUAGE translation of: Gamma 2.2]",
        "gamma24": "[LANGUAGE translation of: Gamma 2.4]"
      }
    },
    "pwm": {
      "warning": {
        "title": "[LANGUAGE translation of: Flashing imagery warning.]",
        "body": "[LANGUAGE translation of: This tool displays rapidly cycling colours at high frequency. Do not use it if you have photosensitive epilepsy...]"
      },
      "pressStart": "[LANGUAGE translation of: Press Start to begin flickering]",
      "flickering": "[LANGUAGE translation of: Flickering]",
      "steadyRef": "[LANGUAGE translation of: Steady Reference]",
      "toggleEvery": "[LANGUAGE translation of: Toggle every:]",
      "offPhase": "[LANGUAGE translation of: Off-phase:]",
      "note": "[LANGUAGE translation of: Flicker rate is relative to your monitor's frame rate. Real monitor PWM runs at 200–1000 Hz and is invisible to the eye — use the camera method to detect it.]",
      "rates": {
        "f1": "[LANGUAGE translation of: 1 frame]",
        "f2": "[LANGUAGE translation of: 2 frames]",
        "f4": "[LANGUAGE translation of: 4 frames]",
        "f8": "[LANGUAGE translation of: 8 frames]"
      },
      "dim": {
        "fullOff": "[LANGUAGE translation of: Full off]",
        "dim25": "[LANGUAGE translation of: 25% dim]",
        "dim50": "[LANGUAGE translation of: 50% dim]"
      }
    },
    "hdr": {
      "detecting": "[LANGUAGE translation of: Detecting display capabilities...]",
      "fullRamp": "[LANGUAGE translation of: Full brightness ramp (black to white)]",
      "shadowSteps": "[LANGUAGE translation of: Shadow steps: near-black detail]",
      "highlightSteps": "[LANGUAGE translation of: Highlight steps: near-white detail]",
      "note": "[LANGUAGE translation of: Each step in the shadow and highlight ramps should be individually visible. Merged steps indicate crushed blacks or clipped highlights. True HDR luminance above SDR white cannot be rendered in a standard browser page.]",
      "caps": {
        "hdrLabel": "[LANGUAGE translation of: HDR (High Dynamic Range)]",
        "hdrSupported": "[LANGUAGE translation of: Your browser and display report HDR capability.]",
        "hdrUnsupported": "[LANGUAGE translation of: Your browser or display does not report HDR support. An SDR display or a browser without HDR passthrough will show this.]",
        "p3Label": "[LANGUAGE translation of: Wide Colour Gamut: Display P3]",
        "p3Supported": "[LANGUAGE translation of: Your display can render colours beyond the sRGB gamut. P3 covers about 25% more colour than sRGB.]",
        "p3Unsupported": "[LANGUAGE translation of: Your display is reporting standard sRGB gamut. Most non-HDR monitors are sRGB only.]",
        "rec2020Label": "[LANGUAGE translation of: Wide Colour Gamut: Rec. 2020]",
        "rec2020Supported": "[LANGUAGE translation of: Your display reports Rec. 2020 colour gamut, the broadcast HDR standard. This is rare on consumer monitors.]",
        "rec2020Unsupported": "[LANGUAGE translation of: Rec. 2020 not detected. This is expected on nearly all consumer monitors including most HDR displays.]"
      }
    }
  },
  "affiliate": {
    "shopOnAmazon": "[LANGUAGE translation of: Shop on Amazon]",
    "disclosure": "[LANGUAGE translation of: As an Amazon Associate we earn from qualifying purchases.]"
  }
}
```

The file is now closed. Validate it parses as valid JSON.

Now run `npx tsc --noEmit` for the first time to catch any import or config issues from Phase 1.

```
✓ Phase 2 done — messages/en.json and messages/[LANG_CODE].json complete with all translation keys.
```

**Stop. Wait for "continue".**

---

## Phase 3 — Translate content data

### Milestone 3.1 — Create lib/i18n/tools-[LANG_CODE].ts

This file provides translated versions of the tool data defined in `lib/tools.ts`. It must contain entries for all 30 tools.

Create `lib/i18n/tools-[LANG_CODE].ts`:

```typescript
import type { Tool } from '@/lib/tools'

type ToolTranslation = Pick<Tool, 'name' | 'shortDescription' | 'metaTitle' | 'metaDesc'>

export const toolTranslations: Record<string, ToolTranslation> = {
  'dead-pixel-test': {
    name: '[LANGUAGE: Dead Pixel Test]',
    shortDescription: '[LANGUAGE: Cycle solid colours to reveal dead or stuck pixels on your screen.]',
    metaTitle: '[LANGUAGE: Dead Pixel Test: Free Online Monitor Checker]',
    metaDesc: '[LANGUAGE: Check your monitor for dead pixels instantly...]',
  },
  'stuck-pixel-fixer': {
    name: '[LANGUAGE: Stuck Pixel Fixer]',
    shortDescription: '[LANGUAGE: Flash rapid colours over a target area to try freeing a stuck pixel.]',
    metaTitle: '[LANGUAGE: Stuck Pixel Fixer: Free Online Tool]',
    metaDesc: '[LANGUAGE: Try to fix a stuck pixel by rapidly flashing colours...]',
  },
  'white-screen': {
    name: '[LANGUAGE: White Screen]',
    shortDescription: '[LANGUAGE: A clean fullscreen white panel for pixel inspection or monitor cleaning.]',
    metaTitle: '[LANGUAGE: White Screen: Full Screen White Display Online]',
    metaDesc: '[LANGUAGE: Display a pure white fullscreen panel...]',
  },
  'black-screen': {
    name: '[LANGUAGE: Black Screen]',
    shortDescription: '[LANGUAGE: A solid black fullscreen panel for backlight bleed and glow checks.]',
    metaTitle: '[LANGUAGE: Black Screen: Full Screen Black Display Online]',
    metaDesc: '[LANGUAGE: Fill your screen with pure black...]',
  },
  'red-screen': {
    name: '[LANGUAGE: Red Screen]',
    shortDescription: '[LANGUAGE: Fill the screen with red to isolate colour and subpixel issues.]',
    metaTitle: '[LANGUAGE: Red Screen: Full Screen Red Display Online]',
    metaDesc: '[LANGUAGE: Display a solid red fullscreen panel...]',
  },
  'green-screen': {
    name: '[LANGUAGE: Green Screen]',
    shortDescription: '[LANGUAGE: Fill the screen with green to isolate pixel and tint issues.]',
    metaTitle: '[LANGUAGE: Green Screen: Full Screen Green Display Online]',
    metaDesc: '[LANGUAGE: Display a solid green fullscreen panel...]',
  },
  'blue-screen': {
    name: '[LANGUAGE: Blue Screen]',
    shortDescription: '[LANGUAGE: Fill the screen with blue to expose display artefacts and subpixel faults.]',
    metaTitle: '[LANGUAGE: Blue Screen Test: Full Screen Blue Display Online]',
    metaDesc: '[LANGUAGE: Show a solid blue fullscreen panel...]',
  },
  'grey-screen': {
    name: '[LANGUAGE: Grey Screen]',
    shortDescription: '[LANGUAGE: A neutral grey panel to reveal dirty screen effect and uniformity problems.]',
    metaTitle: '[LANGUAGE: Grey Screen: Full Screen Grey Display Online]',
    metaDesc: '[LANGUAGE: Display a neutral grey fullscreen panel...]',
  },
  'yellow-screen': {
    name: '[LANGUAGE: Yellow Screen]',
    shortDescription: '[LANGUAGE: Use a yellow panel to spot tinting and subpixel defects.]',
    metaTitle: '[LANGUAGE: Yellow Screen: Full Screen Yellow Display Online]',
    metaDesc: '[LANGUAGE: Fill your screen with yellow...]',
  },
  'pink-screen': {
    name: '[LANGUAGE: Pink Screen]',
    shortDescription: '[LANGUAGE: Use a pink panel to spot tinting and subpixel defects.]',
    metaTitle: '[LANGUAGE: Pink Screen: Full Screen Pink Display Online]',
    metaDesc: '[LANGUAGE: Display a solid pink fullscreen panel...]',
  },
  'fullscreen-colour-cycle': {
    name: '[LANGUAGE: Fullscreen Colour Cycle]',
    shortDescription: '[LANGUAGE: Automatically cycles multiple solid colours across your full screen.]',
    metaTitle: '[LANGUAGE: Fullscreen Colour Cycle: Screen Colour Test Online]',
    metaDesc: '[LANGUAGE: Automatically cycle through multiple solid colours in fullscreen...]',
  },
  'gradient-banding-test': {
    name: '[LANGUAGE: Gradient Banding Test]',
    shortDescription: '[LANGUAGE: Smooth gradients that reveal colour banding and tone compression on your display.]',
    metaTitle: '[LANGUAGE: Gradient Banding Test: Free Monitor Test Online]',
    metaDesc: '[LANGUAGE: Display smooth colour gradients to check your monitor for banding...]',
  },
  'backlight-bleed-test': {
    name: '[LANGUAGE: Backlight Bleed Test]',
    shortDescription: '[LANGUAGE: Use a black panel in a dark room to reveal backlight bleed around screen edges.]',
    metaTitle: '[LANGUAGE: Backlight Bleed Test: Free Online Monitor Check]',
    metaDesc: '[LANGUAGE: Test your monitor for backlight bleed...]',
  },
  'ips-glow-test': {
    name: '[LANGUAGE: IPS Glow Test]',
    shortDescription: '[LANGUAGE: Distinguish IPS glow from backlight bleed using dark test patterns.]',
    metaTitle: '[LANGUAGE: IPS Glow Test: Check Your Monitor Online Free]',
    metaDesc: '[LANGUAGE: Use this online test to tell the difference between IPS glow and backlight bleed...]',
  },
  'contrast-black-level-test': {
    name: '[LANGUAGE: Contrast Black Level Test]',
    shortDescription: '[LANGUAGE: Near-black step patterns to check shadow detail and black level separation.]',
    metaTitle: '[LANGUAGE: Black Level Test: Monitor Contrast Check Online]',
    metaDesc: '[LANGUAGE: Check your monitor\'s black level and shadow detail...]',
  },
  'white-saturation-test': {
    name: '[LANGUAGE: White Saturation Test]',
    shortDescription: '[LANGUAGE: Near-white step patterns to check highlight detail and white level separation.]',
    metaTitle: '[LANGUAGE: White Saturation Test: Monitor Highlight Check Online]',
    metaDesc: '[LANGUAGE: Test your monitor\'s white saturation and highlight detail...]',
  },
  'gamma-calibration-check': {
    name: '[LANGUAGE: Gamma Calibration Check]',
    shortDescription: '[LANGUAGE: Gamma patterns to estimate your display\'s gamma accuracy without hardware.]',
    metaTitle: '[LANGUAGE: Gamma Test Online: Free Monitor Calibration Check]',
    metaDesc: '[LANGUAGE: Check your monitor\'s gamma accuracy using standard gamma test patterns...]',
  },
  'sharpness-focus-chart': {
    name: '[LANGUAGE: Sharpness Focus Chart]',
    shortDescription: '[LANGUAGE: Fine lines and text patterns to reveal softness, oversharpening, or scaling issues.]',
    metaTitle: '[LANGUAGE: Monitor Sharpness Test: Focus Chart Online Free]',
    metaDesc: '[LANGUAGE: Test your monitor\'s sharpness and focus using fine line patterns...]',
  },
  'moire-pattern-test': {
    name: '[LANGUAGE: Moire Pattern Test]',
    shortDescription: '[LANGUAGE: Line patterns to reveal moire, aliasing, or pixel scaling artefacts.]',
    metaTitle: '[LANGUAGE: Moire Pattern Test: Screen Artefact Check Online]',
    metaDesc: '[LANGUAGE: Detect moire patterns, aliasing, and pixel scaling artefacts...]',
  },
  'screen-uniformity-test': {
    name: '[LANGUAGE: Screen Uniformity Test]',
    shortDescription: '[LANGUAGE: Spot dirty screen effect and patchy brightness across your display.]',
    metaTitle: '[LANGUAGE: Screen Uniformity Test: DSE Check Online Free]',
    metaDesc: '[LANGUAGE: Test your monitor for dirty screen effect, uneven brightness...]',
  },
  'viewing-angle-test': {
    name: '[LANGUAGE: Viewing Angle Test]',
    shortDescription: '[LANGUAGE: Patterns that make colour and contrast shift easy to spot at different angles.]',
    metaTitle: '[LANGUAGE: Viewing Angle Test: Monitor Panel Check Online]',
    metaDesc: '[LANGUAGE: Check your monitor\'s viewing angles using test patterns...]',
  },
  'refresh-rate-checker': {
    name: '[LANGUAGE: Refresh Rate Checker]',
    shortDescription: '[LANGUAGE: Reads and displays the actual refresh rate your browser sees.]',
    metaTitle: '[LANGUAGE: Refresh Rate Checker: Test Your Monitor Hz Online]',
    metaDesc: '[LANGUAGE: Check your monitor\'s actual refresh rate directly in your browser...]',
  },
  'resolution-checker': {
    name: '[LANGUAGE: Resolution and Aspect Checker]',
    shortDescription: '[LANGUAGE: Reports your screen resolution, aspect ratio, and pixel density.]',
    metaTitle: '[LANGUAGE: Screen Resolution Checker: Check Monitor Resolution]',
    metaDesc: '[LANGUAGE: Check your screen resolution, aspect ratio, and pixel density instantly...]',
  },
  'image-retention-test': {
    name: '[LANGUAGE: Image Retention Test]',
    shortDescription: '[LANGUAGE: Check for image retention or burn-in on your OLED or LCD display.]',
    metaTitle: '[LANGUAGE: Image Retention Test: Burn In Check Online Free]',
    metaDesc: '[LANGUAGE: Test your OLED or LCD monitor for image retention and burn-in...]',
  },
  'screen-clean-mode': {
    name: '[LANGUAGE: Screen Clean Mode]',
    shortDescription: '[LANGUAGE: Lock your display on a plain panel so you can safely clean your screen.]',
    metaTitle: '[LANGUAGE: Screen Clean Mode: Safe Monitor Cleaning Tool]',
    metaDesc: '[LANGUAGE: Lock your monitor to a plain panel to clean it safely...]',
  },
  'motion-blur-test': {
    name: '[LANGUAGE: Motion Blur Test]',
    shortDescription: '[LANGUAGE: A moving bar that reveals ghosting, smearing, and pixel response on your display.]',
    metaTitle: '[LANGUAGE: Motion Blur Test: Check Monitor Ghosting Online]',
    metaDesc: '[LANGUAGE: Test your monitor for motion blur, ghosting, and pixel response time...]',
  },
  'input-lag-test': {
    name: '[LANGUAGE: Input Lag Test]',
    shortDescription: '[LANGUAGE: Measure your visual reaction time and estimate display input lag with a click test.]',
    metaTitle: '[LANGUAGE: Input Lag Test: Reaction Time Check Online]',
    metaDesc: '[LANGUAGE: Test display input lag and reaction time by clicking as fast as possible...]',
  },
  'pwm-flicker-test': {
    name: '[LANGUAGE: PWM Flicker Test]',
    shortDescription: '[LANGUAGE: Visualise backlight PWM flicker and compare flickering vs steady light panels.]',
    metaTitle: '[LANGUAGE: PWM Flicker Test: Backlight Flicker Check Online]',
    metaDesc: '[LANGUAGE: Test for PWM backlight flicker on your monitor...]',
  },
  'colour-temperature-test': {
    name: '[LANGUAGE: Colour Temperature Test]',
    shortDescription: '[LANGUAGE: Identify colour tinting on your display by finding which white looks neutral to you.]',
    metaTitle: '[LANGUAGE: Colour Temperature Test: Monitor White Balance Check]',
    metaDesc: '[LANGUAGE: Check your monitor colour temperature and white balance...]',
  },
  'black-smear-test': {
    name: '[LANGUAGE: Black Smear Test]',
    shortDescription: '[LANGUAGE: Slow dark objects on a dark background to reveal VA panel dark-to-dark ghosting.]',
    metaTitle: '[LANGUAGE: Black Smear Test: VA Panel Ghosting Check Online]',
    metaDesc: '[LANGUAGE: Test your VA monitor for black smear and dark-to-dark ghosting...]',
  },
  'overdrive-test': {
    name: '[LANGUAGE: Overdrive Test]',
    shortDescription: '[LANGUAGE: High-speed moving bars to reveal inverse ghosting and haloing from monitor overdrive.]',
    metaTitle: '[LANGUAGE: Overdrive Test: Inverse Ghosting Check Online]',
    metaDesc: '[LANGUAGE: Test your monitor overdrive for inverse ghosting, coronas, and haloing...]',
  },
  'hdr-test': {
    name: '[LANGUAGE: HDR Test]',
    shortDescription: '[LANGUAGE: Detect browser HDR and wide colour gamut support and evaluate peak brightness range.]',
    metaTitle: '[LANGUAGE: HDR Monitor Test: Check HDR Support Online]',
    metaDesc: '[LANGUAGE: Test whether your monitor and browser support HDR...]',
  },
}

export const categoryTranslations: Record<string, { label: string; description: string }> = {
  'screen-state': {
    label: '[LANGUAGE translation of: Screen State]',
    description: '[LANGUAGE translation of: Solid colour fullscreen panels for pixel inspection, cleaning, and backlight checks.]',
  },
  'visual-test': {
    label: '[LANGUAGE translation of: Visual Tests]',
    description: '[LANGUAGE translation of: Diagnostic patterns to reveal dead pixels, banding, bleed, gamma, sharpness, and more.]',
  },
  'checker': {
    label: '[LANGUAGE translation of: Checkers & Utilities]',
    description: '[LANGUAGE translation of: Browser-based tools that read and report your display properties.]',
  },
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.2 — Create lib/i18n/posts-[LANG_CODE].ts

Create `lib/i18n/posts-[LANG_CODE].ts` with translated titles and descriptions for all 19 posts. The slugs must match exactly. Pattern from `lib/posts.ts`:

```typescript
export const postTranslations: Record<string, { title: string; description: string }> = {
  'how-to-test-monitor-dead-pixels': {
    title: '[LANGUAGE translation of: How to Test Your Monitor for Dead Pixels]',
    description: '[LANGUAGE translation of: A step-by-step guide to identifying dead, stuck, and hot pixels on any display using solid-colour fullscreen tests.]',
  },
  'what-is-backlight-bleed': {
    title: '[LANGUAGE translation of: What Is Backlight Bleed and How Do You Test for It?]',
    description: '[LANGUAGE translation of: Backlight bleed is a common LCD defect that appears as bright patches in dark scenes. Learn what causes it, how to spot it, and what your options are.]',
  },
  'refresh-rate-60hz-vs-144hz': {
    title: '[LANGUAGE translation of: Refresh Rate Explained: 60Hz vs 120Hz vs 144Hz vs 240Hz]',
    description: '[LANGUAGE translation of: What refresh rate actually means, how to check what your monitor is running at, and when upgrading to a higher refresh rate makes a real difference.]',
  },
  'stuck-pixels-causes-and-fixes': {
    title: '[LANGUAGE translation of: Stuck Pixels: Causes, Types, and Whether They Can Be Fixed]',
    description: '[LANGUAGE translation of: The difference between dead and stuck pixels, why stuck pixels happen, and how the rapid-colour cycling technique works to try to free them.]',
  },
  'monitor-panel-types-ips-va-oled': {
    title: '[LANGUAGE translation of: IPS vs VA vs OLED: Monitor Panel Types Compared]',
    description: '[LANGUAGE translation of: A practical comparison of IPS, VA, and OLED panel technologies covering contrast, colour, viewing angle, response time, and which tests reveal the differences.]',
  },
  'understanding-monitor-resolution-dpi': {
    title: '[LANGUAGE translation of: Monitor Resolution, DPI, and Pixel Density Explained]',
    description: '[LANGUAGE translation of: The difference between screen resolution, physical pixels, device pixel ratio, and PPI, and why the same resolution looks different on different screens.]',
  },
  'gamma-calibration-guide': {
    title: '[LANGUAGE translation of: Monitor Gamma: What It Is and How to Check Your Calibration]',
    description: '[LANGUAGE translation of: Gamma controls the relationship between pixel values and display brightness. Learn what gamma 2.2 means, why it matters, and how to test your monitor without special hardware.]',
  },
  'screen-uniformity-test-guide': {
    title: '[LANGUAGE translation of: Screen Uniformity: What It Is and How to Test It]',
    description: '[LANGUAGE translation of: Display uniformity describes how consistently a monitor reproduces the same colour or brightness across its entire panel surface.]',
  },
  'how-to-clean-monitor-screen': {
    title: '[LANGUAGE translation of: How to Clean Your Monitor Screen Without Causing Damage]',
    description: '[LANGUAGE translation of: The right materials, technique, and approach for cleaning LCD, IPS, OLED, and matte anti-glare screens without scratching coatings or letting liquid enter the panel.]',
  },
  'monitor-aspect-ratios-explained': {
    title: '[LANGUAGE translation of: Monitor Aspect Ratios Explained: 16:9, 21:9, 32:9, and More]',
    description: '[LANGUAGE translation of: A guide to common monitor aspect ratios, what they mean for gaming, productivity, and media, and how to check which aspect ratio your display is running at.]',
  },
  'dead-pixels-brand-monitors': {
    title: '[LANGUAGE translation of: Dead Pixels on AOC, Dell, ASUS, Sony, and LG Monitors]',
    description: '[LANGUAGE translation of: Warranty policies for pixel defects vary significantly by manufacturer. Here is what AOC, Dell, ASUS, Sony, and LG each cover and how to make a successful claim.]',
  },
  'dead-pixels-oled-tv-projectors': {
    title: '[LANGUAGE translation of: Dead Pixels on OLED TVs and Projectors: What They Look Like and What to Do]',
    description: '[LANGUAGE translation of: Dead pixels on OLED TVs and DLP or LCD projectors behave differently from monitor defects. Learn how to test for them and what the warranty options are.]',
  },
  'backlight-bleed-gaming-laptops': {
    title: '[LANGUAGE translation of: Backlight Bleed on Gaming Laptops: HP Omen, Acer Nitro, MSI, Alienware, and Lenovo]',
    description: '[LANGUAGE translation of: Gaming laptops are among the most common sources of backlight bleed complaints. Here is what to expect from each major brand and how to assess your own display.]',
  },
  'backlight-bleed-samsung-tv': {
    title: '[LANGUAGE translation of: Backlight Bleed on Samsung TVs: How to Test and What to Do]',
    description: '[LANGUAGE translation of: Backlight bleed is one of the most common complaints on Samsung LED and QLED TVs. Learn how to assess the severity, what fixes exist, and when to contact Samsung support.]',
  },
  'backlight-bleed-lg-sony-philips-tcl-benq': {
    title: '[LANGUAGE translation of: Backlight Bleed on LG, Sony, Philips, TCL, and BenQ Displays]',
    description: '[LANGUAGE translation of: Backlight bleed affects LCD monitors and TVs from every manufacturer. This guide covers LG, Sony, Philips, TCL, and BenQ displays including the BenQ EX2780Q.]',
  },
  'led-tv-oled-screen-bleeding': {
    title: '[LANGUAGE translation of: LED TV and OLED Screen Bleeding Explained]',
    description: '[LANGUAGE translation of: TV screen bleeding, LED TV light bleed, and AMOLED screen bleeding all mean different things. This guide explains each phenomenon and what you can do about it.]',
  },
  'samsung-oled-qled-burn-in': {
    title: '[LANGUAGE translation of: Samsung OLED and QLED Burn-In: What Actually Happens]',
    description: '[LANGUAGE translation of: Samsung QLED TVs have no real burn-in risk. Samsung QD-OLED TVs do. This guide explains the difference, what causes burn-in on Samsung screens, and how to prevent it.]',
  },
  'screen-resolution-tv-monitor-sizes': {
    title: '[LANGUAGE translation of: Screen Resolution Explained: Sizes, Names, and What They Mean for TVs and Monitors]',
    description: '[LANGUAGE translation of: A plain-language guide to resolution names, TV screen resolution sizes, and how to check your display resolution.]',
  },
  'samsung-screen-resolution-guide': {
    title: '[LANGUAGE translation of: Samsung Screen Resolution and Display Settings Guide]',
    description: '[LANGUAGE translation of: How to find, check, and adjust the resolution on Samsung monitors, TVs, and Galaxy phones.]',
  },
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.3 — Update lib/tools.ts and lib/posts.ts for locale-awareness

**In `lib/tools.ts`**, add these two locale-aware helpers at the bottom of the file:

```typescript
export function getLocalizedTool(slug: string, translations: Record<string, Partial<Tool>>): Tool | undefined {
  const tool = getToolBySlug(slug)
  if (!tool) return undefined
  const overrides = translations[slug] ?? {}
  return { ...tool, ...overrides }
}

export function getLocalizedCategoryMeta(
  translations: Record<string, { label: string; description: string }>
): typeof categoryMeta {
  return {
    'screen-state': translations['screen-state'] ?? categoryMeta['screen-state'],
    'visual-test': translations['visual-test'] ?? categoryMeta['visual-test'],
    'checker': translations['checker'] ?? categoryMeta['checker'],
  }
}
```

**In `lib/posts.ts`**, update `formatDate` to accept a locale parameter:

```typescript
// Before
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// After
export function formatDate(iso: string, locale: string = 'en'): string {
  const dateLocale = locale === 'en' ? 'en-GB' : locale
  return new Date(iso).toLocaleDateString(dateLocale, {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.4 — Blog content posts 1–5

Create `app/[locale]/blog/[slug]/content.[LANG_CODE].tsx`. This file provides React components containing the translated body text of blog posts 1–5. Model the structure on `content.en.tsx` (the renamed original `content.tsx`).

Translate the following five posts in full, writing prose the way a fluent native speaker of [LANGUAGE] would write it for a technical but general audience:

1. `how-to-test-monitor-dead-pixels` — function `DeadPixelPost[LANG_UPPER]()`
2. `what-is-backlight-bleed` — function `BacklightBleedPost[LANG_UPPER]()`
3. `refresh-rate-60hz-vs-144hz` — function `RefreshRatePost[LANG_UPPER]()`
4. `stuck-pixels-causes-and-fixes` — function `StuckPixelsPost[LANG_UPPER]()`
5. `monitor-panel-types-ips-va-oled` — function `PanelTypesPost[LANG_UPPER]()`

End the file with a partial content map (it will be extended in subsequent milestones):

```typescript
export const POST_CONTENT_[LANG_UPPER]: Record<string, FC> = {
  'how-to-test-monitor-dead-pixels': DeadPixelPost[LANG_UPPER],
  'what-is-backlight-bleed': BacklightBleedPost[LANG_UPPER],
  'refresh-rate-60hz-vs-144hz': RefreshRatePost[LANG_UPPER],
  'stuck-pixels-causes-and-fixes': StuckPixelsPost[LANG_UPPER],
  'monitor-panel-types-ips-va-oled': PanelTypesPost[LANG_UPPER],
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.5 — Blog content posts 6–10

Continue `app/[locale]/blog/[slug]/content.[LANG_CODE].tsx`. Translate and add:

6. `understanding-monitor-resolution-dpi` — `ResolutionPost[LANG_UPPER]()`
7. `gamma-calibration-guide` — `GammaPost[LANG_UPPER]()`
8. `screen-uniformity-test-guide` — `UniformityPost[LANG_UPPER]()`
9. `how-to-clean-monitor-screen` — `CleaningPost[LANG_UPPER]()`
10. `monitor-aspect-ratios-explained` — `AspectRatiosPost[LANG_UPPER]()`

Add these five entries to the `POST_CONTENT_[LANG_UPPER]` export map.

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.6 — Blog content posts 11–14

Continue `app/[locale]/blog/[slug]/content.[LANG_CODE].tsx`. Translate and add:

11. `dead-pixels-brand-monitors` — `DeadPixelsBrandPost[LANG_UPPER]()`
12. `dead-pixels-oled-tv-projectors` — `DeadPixelsOledTvProjectorsPost[LANG_UPPER]()`
13. `backlight-bleed-gaming-laptops` — `BacklightBleedGamingLaptopsPost[LANG_UPPER]()`
14. `backlight-bleed-samsung-tv` — `BacklightBleedSamsungTvPost[LANG_UPPER]()`

**Stop after this milestone.** Wait for "continue".

---

### Milestone 3.7 — Blog content posts 15–19

Continue and close `app/[locale]/blog/[slug]/content.[LANG_CODE].tsx`. Translate and add the final five posts:

15. `backlight-bleed-lg-sony-philips-tcl-benq` — `BacklightBleedBrandsPost[LANG_UPPER]()`
16. `led-tv-oled-screen-bleeding` — `LedTvOledScreenBleedingPost[LANG_UPPER]()`
17. `samsung-oled-qled-burn-in` — `SamsungBurnInPost[LANG_UPPER]()`
18. `screen-resolution-tv-monitor-sizes` — `ScreenResolutionSizesPost[LANG_UPPER]()`
19. `samsung-screen-resolution-guide` — `SamsungResolutionGuidePost[LANG_UPPER]()`

Ensure `POST_CONTENT_[LANG_UPPER]` includes all 19 entries. The map is now complete.

```
✓ Phase 3 done — locale tool data, post data, and all 19 blog post content components created for [LANGUAGE].
```

**Stop. Wait for "continue".**

---

## Phase 4 — Wire up page routes

### Milestone 4.1 — Update app/[locale]/page.tsx (home page)

Replace `app/[locale]/page.tsx` with a locale-aware version. Key changes from the original:

1. Accept `params: Promise<{ locale: string }>` in the page props.
2. Import `getTranslations` from `next-intl/server`.
3. Import `toolTranslations` and `categoryTranslations` from `@/lib/i18n/tools-[LANG_CODE]` — but only apply them when `locale === '[LANG_CODE]'`.
4. Use `getLocalizedCategoryMeta` and `getLocalizedTool` from `@/lib/tools` to build locale-specific data.
5. Replace hardcoded English strings with `t('home.hero.heading')` etc.

Pattern:

```tsx
import { getTranslations } from 'next-intl/server'
import { tools, categoryMeta, getToolsByCategory, getLocalizedCategoryMeta } from '@/lib/tools'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const locCategoryMeta = locale === '[LANG_CODE]'
    ? getLocalizedCategoryMeta((await import('@/lib/i18n/tools-[LANG_CODE]')).categoryTranslations)
    : categoryMeta

  return (
    <>
      <h1>{t('home.hero.heading')}</h1>
      <p>{t('home.hero.description')}</p>
      {/* Trust strip */}
      <span>{tools.length} {t('home.trust.freeTools')}</span>
      <span>{t('home.hero.statNoSignup')}</span>
      <span>{t('home.hero.statBrowserBased')}</span>
      {/* Tool grid uses locCategoryMeta for labels/descriptions */}
    </>
  )
}
```

Also update `generateStaticParams` — this will be done globally in Milestone 4.5.

**Stop after this milestone.** Wait for "continue".

---

### Milestone 4.2 — Update app/[locale]/blog/page.tsx

Replace hardcoded strings with translations. Key changes:

```tsx
import { getTranslations } from 'next-intl/server'
import { posts, formatDate } from '@/lib/posts'
import { postTranslations } from '@/lib/i18n/posts-[LANG_CODE]' // conditional on locale

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const localizedPosts = posts.map(p => ({
    ...p,
    ...(locale === '[LANG_CODE]' ? (postTranslations[p.slug] ?? {}) : {}),
  }))

  return (
    <>
      <h1>{t('blog.index.title')}</h1>
      <p>{t('blog.index.subtitle')}</p>
      {localizedPosts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span>{formatDate(post.publishedAt, locale)}</span>
          <span>{post.readingMinutes} {t('blog.post.minRead')}</span>
        </Link>
      ))}
    </>
  )
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 4.3 — Update app/[locale]/blog/[slug]/page.tsx

Update the blog post page to load locale-specific content and metadata:

```tsx
import { getTranslations } from 'next-intl/server'
import { posts, getPostBySlug, formatDate } from '@/lib/posts'
import { postTranslations } from '@/lib/i18n/posts-[LANG_CODE]'
import { POST_CONTENT } from './content.en'
import { POST_CONTENT_[LANG_UPPER] } from './content.[LANG_CODE]'

export function generateStaticParams() {
  // Extended in Milestone 4.5
  return posts.map(p => ({ locale: 'en', slug: p.slug }))
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale })

  const post = getPostBySlug(slug)
  if (!post) notFound()

  const localizedPost = locale === '[LANG_CODE]'
    ? { ...post, ...(postTranslations[slug] ?? {}) }
    : post

  const contentMap = locale === '[LANG_CODE]' ? POST_CONTENT_[LANG_UPPER] : POST_CONTENT
  const Content = contentMap[slug]
  if (!Content) notFound()

  return (
    <>
      <h1>{localizedPost.title}</h1>
      <span>{formatDate(post.publishedAt, locale)}</span>
      <span>{post.readingMinutes} {t('blog.post.minRead')}</span>
      <Content />
      <h2>{t('blog.post.relatedTools')}</h2>
      <Link href="/blog">&larr; {t('blog.post.backToArticles')}</Link>
    </>
  )
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 4.4 — Update static pages: about, contact, privacy, terms

Each of these pages has body copy in English that ideally should be translated. For each page, add a locale-keyed content block:

Pattern for `app/[locale]/about/page.tsx`:

```tsx
import { getTranslations } from 'next-intl/server'

const ABOUT_CONTENT: Record<string, React.ReactNode> = {
  en: <>[...original English JSX...]</>,
  '[LANG_CODE]': <>[...translated JSX in [LANGUAGE]...]</>,
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const content = ABOUT_CONTENT[locale] ?? ABOUT_CONTENT.en
  return <>{content}</>
}
```

Apply this pattern to all four static pages. The breadcrumb `Home` label will come from `t('breadcrumb.home')` after the Breadcrumb component is updated in Phase 5.

**Stop after this milestone.** Wait for "continue".

---

### Milestone 4.5 — Update generateStaticParams in every page file

Every page file in `app/[locale]/` must export `generateStaticParams` that includes the new locale. Find every `generateStaticParams` function and add `'[LANG_CODE]'`.

**For standard tool pages** — the pattern is:
```typescript
// Before
export function generateStaticParams() {
  return [{ locale: 'en' }]
}

// After
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: '[LANG_CODE]' }]
}
```

**For blog/[slug]/page.tsx** — include all slugs × all locales:
```typescript
export function generateStaticParams() {
  const locales = ['en', '[LANG_CODE]']
  return posts.flatMap(p => locales.map(locale => ({ locale, slug: p.slug })))
}
```

**Files that need generateStaticParams updated** (every page.tsx in app/[locale]/):
All 30 main tool pages, all 20 sub-variant pages, blog/page.tsx, blog/[slug]/page.tsx, about/page.tsx, contact/page.tsx, privacy/page.tsx, terms/page.tsx.

```
✓ Phase 4 done — home, blog, static pages wired to locale data; generateStaticParams updated everywhere.
```

**Stop. Wait for "continue".**

---

## Phase 5 — Update tool pages and component UI strings

### Milestone 5.1 — Update components/tools/FullscreenPanel.tsx

Add `useTranslations` for all internal strings. Colour label strings come from the calling page as props (already in the `colors` array), so they do not need to be read from translations inside this component.

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function FullscreenPanel({ colors }: FullscreenPanelProps) {
  const t = useTranslations('tools.fullscreenPanel')

  // Replace all hardcoded strings:
  // 'Click to cycle colours'         → t('cycleLabel')
  // 'Full screen'                    → t('fullscreen')
  // 'Click or Space to advance...'   → t('hint')
  // aria-label on in-page panel      → t('ariaCurrentColour', { colour: current.label })
  // aria-label on fullscreen div     → t('ariaAdvance')
  // aria-label on fullscreen button  → t('fullscreen')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.2 — Update components/tools/RefreshRateChecker.tsx

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function RefreshRateChecker() {
  const t = useTranslations('tools.refreshRate')

  // Replace RATE_LABELS map with a locale-aware version:
  function getRateLabel(hz: number): string {
    const RATE_MAP: Record<number, string> = {
      24: t('labels.cinema'),
      30: t('labels.standardVideo'),
      48: t('labels.highFrameRate'),
      60: t('labels.standardDesktop'),
      75: t('labels.standardPlus'),
      100: t('labels.highRefresh'),
      120: t('labels.highRefresh'),
      144: t('labels.gaming'),
      165: t('labels.gaming'),
      180: t('labels.gaming'),
      240: t('labels.competitiveGaming'),
      360: t('labels.proCompetitive'),
    }
    // ...same snap logic, use t('labels.nonStandard') as fallback
  }

  // Replace hardcoded strings:
  // 'Measuring refresh rate...' → t('measuring')
  // 'Sampling 60 frames'        → t('sampling')
  // 'Measure Again'             → t('measureAgain')
  // note text                   → t('note')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.3 — Update components/tools/ResolutionChecker.tsx

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function ResolutionChecker() {
  const t = useTranslations('tools.resolution')

  // Replace RATIO_NAMES with locale-aware map:
  const RATIO_NAMES: Record<string, string> = {
    '16:9':  t('ratioNames.16:9'),
    '16:10': t('ratioNames.16:10'),
    '4:3':   t('ratioNames.4:3'),
    '5:4':   t('ratioNames.5:4'),
    '21:9':  t('ratioNames.21:9'),
    '32:9':  t('ratioNames.32:9'),
    '1:1':   t('ratioNames.1:1'),
    '3:2':   t('ratioNames.3:2'),
  }

  // StatCard labels:
  // 'Screen Resolution'  → t('labels.screenResolution')
  // 'Aspect Ratio'       → t('labels.aspectRatio')
  // 'Device Pixel Ratio' → t('labels.devicePixelRatio')
  // 'Physical Pixels'    → t('labels.physicalPixels')
  // 'Browser Viewport'   → t('labels.browserViewport')
  // 'Colour Depth'       → t('labels.colourDepth')
  // 'CSS pixels'         → t('notes.cssPixels')
  // 'Hardware pixel count' → t('notes.hardwarePixels')
  // 'Current window size'  → t('notes.windowSize')
  // 'HiDPI / Retina display' → t('notes.hidpi')
  // 'Standard density'   → t('notes.standardDensity')
  // '10-bit / HDR capable' → t('notes.hdrCapable')
  // 'Standard 8-bit'     → t('notes.standard8bit')
  // 'Reading display properties...' → t('reading')
  // 'Re-check'           → t('recheck')
  // note text            → t('note')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.4 — Update components/tools/InputLagTest.tsx

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function InputLagTest() {
  const t = useTranslations('tools.inputLag')

  // Replace:
  // getLabel() function return values → t('labels.excellent'), t('labels.good'), etc.
  // 'Click to Start' → t('idle.heading')
  // description text  → t('idle.description')
  // 'Wait...'         → t('waiting.heading')
  // 'Do not click...' → t('waiting.note')
  // 'CLICK!'          → t('go')
  // 'Too Early'       → t('tooEarly.heading')
  // 'Wait for the...' → t('tooEarly.note')
  // 'Click to try again' → t('result.clickAgain')
  // 'Results:'        → t('results')
  // 'Average:'        → t('average')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.5 — Update components/tools/StuckPixelFixer.tsx

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function StuckPixelFixer() {
  const t = useTranslations('tools.stuckPixel')

  // SPEEDS array: update labels to use t('speeds.slow'), t('speeds.normal'), t('speeds.fast'), t('speeds.rapid')
  // Replace:
  // warning title     → t('warning.title')
  // warning body      → t('warning.body')
  // 'Press Start...'  → t('pressStart')
  // 'Running:'        → t('running')
  // 'Speed:'          → t('speed')
  // note text         → t('note')
  // Buttons: 'Stop' → t('../../common.stop'), 'Start' → t('../../common.start')
  // 'Reset'           → use useTranslations('common') separately
  // 'Fullscreen'      → use useTranslations('common')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.6 — Update components/tools/GammaCalibrationCheck.tsx

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function GammaCalibrationCheck() {
  const t = useTranslations('tools.gamma')

  // GAMMA_REFS: update labels to use t('labels.gamma18') etc.
  // Replace:
  // 'Reference checkerboard'  → t('checkerboard')
  // 'Target'                  → t('target')
  // '(Standard target)'       → `(${t('standardTarget')})`
  // 'View Fullscreen'         → t('viewFullscreen')
  // hint text                 → t('hint')
  // fsHint text               → t('fsHint')
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.7 — Update PwmFlickerTest.tsx and HdrTest.tsx

**PwmFlickerTest.tsx:**

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function PwmFlickerTest() {
  const t = useTranslations('tools.pwm')

  // RATE_LABELS: use t('rates.f1'), t('rates.f2'), t('rates.f4'), t('rates.f8')
  // DIM_OPTIONS: use t('dim.fullOff'), t('dim.dim25'), t('dim.dim50')
  // Replace all hardcoded strings with t() calls
}
```

**HdrTest.tsx:**

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function HdrTest() {
  const t = useTranslations('tools.hdr')

  // Build caps array using t() for label and detail strings
  // Replace all hardcoded strings with t() calls
}
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.8 — Update shared components: ToolPageLayout, AmazonLinks, Header, Footer, Breadcrumb

**`components/ToolPageLayout.tsx`** — server component, use `getTranslations`:
```tsx
import { getTranslations } from 'next-intl/server'
// 'Frequently Asked Questions' → t('common.frequentlyAskedQuestions')
// 'Related Tools'              → t('common.relatedTools')
```

**`components/affiliate/AmazonLinks.tsx`** — client or server component:
```tsx
import { useTranslations } from 'next-intl' // if client
// 'Shop on Amazon'                          → t('affiliate.shopOnAmazon')
// 'As an Amazon Associate...'               → t('affiliate.disclosure')
```

**`components/Header.tsx`** — server component:
```tsx
import { getTranslations } from 'next-intl/server'
// navLinks array: labels become t('nav.tools'), t('nav.blog'), t('nav.about')
```

**`components/Footer.tsx`** — server component:
```tsx
import { getTranslations } from 'next-intl/server'
// 'Popular Tools'   → t('footer.popularTools')
// 'Site'            → t('footer.site')
// tagline           → t('footer.tagline')
// copyright         → t('footer.copyright')
// toolLinks and siteLinks label strings are tool/page names —
//   these come from the tool data and are already locale-aware after Phase 3.
//   Static labels ("About", "Contact", "Privacy Policy", "Terms of Service", "All Tools", "Blog")
//   are already covered by the "footerLinks" section in messages/en.json (Milestone 2.1).
//   Use t('footerLinks.about'), t('footerLinks.contact'), t('footerLinks.privacy'),
//   t('footerLinks.terms'), t('footerLinks.allTools'), t('footerLinks.blog') in the component.
//   Ensure matching keys are present in messages/[LANG_CODE].json (add to Milestone 2.2 if missed).
```

**`components/Breadcrumb.tsx`** — server component:
```tsx
import { getTranslations } from 'next-intl/server'
// 'Home' label in allItems → t('breadcrumb.home')
```

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.9 — Screen-state tool pages (9 pages)

Update these nine pages. For each, add locale-specific FAQs and body content, and pass translated colour labels to `FullscreenPanel`. Pages:

- `app/[locale]/white-screen/page.tsx`
- `app/[locale]/black-screen/page.tsx`
- `app/[locale]/red-screen/page.tsx`
- `app/[locale]/green-screen/page.tsx`
- `app/[locale]/blue-screen/page.tsx`
- `app/[locale]/grey-screen/page.tsx`
- `app/[locale]/yellow-screen/page.tsx`
- `app/[locale]/pink-screen/page.tsx`
- `app/[locale]/fullscreen-colour-cycle/page.tsx`

Pattern for each page:

```tsx
import { getTranslations } from 'next-intl/server'
import { toolTranslations } from '@/lib/i18n/tools-[LANG_CODE]'
import { getLocalizedTool } from '@/lib/tools'
import type { FAQ } from '@/components/ToolPageLayout'

const FAQS: Record<string, FAQ[]> = {
  en: [
    // ...existing English FAQs unchanged...
  ],
  '[LANG_CODE]': [
    // ...full translation of all FAQ q/a pairs in [LANGUAGE]...
  ],
}

const BODY_CONTENT: Record<string, React.ReactNode> = {
  en: <>[...existing English body JSX...] </>,
  '[LANG_CODE]': <>[...translated body JSX in [LANGUAGE]...]</>,
}

export default async function WhiteScreenPage({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tools.fullscreenPanel' })

  const tool = locale === '[LANG_CODE]'
    ? getLocalizedTool('white-screen', toolTranslations)!
    : getToolBySlug('white-screen')!

  const COLORS: ColorEntry[] = [
    { hex: '#FFFFFF', label: t('colors.White') },
    // ... etc.
  ]

  return (
    <ToolPageLayout
      tool={tool}
      faqs={FAQS[locale] ?? FAQS.en}
      bodyContent={BODY_CONTENT[locale] ?? BODY_CONTENT.en}
    >
      <FullscreenPanel colors={COLORS} />
    </ToolPageLayout>
  )
}
```

Write the translated FAQs and body content in natural [LANGUAGE].

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.10 — Visual-test pages group 1 (6 pages)

Apply the same pattern as Milestone 5.9 to:

- `app/[locale]/dead-pixel-test/page.tsx`
- `app/[locale]/stuck-pixel-fixer/page.tsx`
- `app/[locale]/backlight-bleed-test/page.tsx`
- `app/[locale]/ips-glow-test/page.tsx`
- `app/[locale]/contrast-black-level-test/page.tsx`
- `app/[locale]/white-saturation-test/page.tsx`

For `dead-pixel-test`, the `COLORS` array needs translated colour labels for: White, Black, Red, Green, Blue, Cyan, Magenta, Grey.

For `stuck-pixel-fixer`, the photosensitivity warning uses the translation key `tools.stuckPixel.warning.*` — it is already in the component via `useTranslations`; no additional content map entry is needed for it.

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.11 — Visual-test pages group 2 (7 pages)

Apply the same pattern to:

- `app/[locale]/gamma-calibration-check/page.tsx`
- `app/[locale]/gradient-banding-test/page.tsx`
- `app/[locale]/screen-uniformity-test/page.tsx`
- `app/[locale]/viewing-angle-test/page.tsx`
- `app/[locale]/image-retention-test/page.tsx`
- `app/[locale]/moire-pattern-test/page.tsx`
- `app/[locale]/sharpness-focus-chart/page.tsx`

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.12 — Visual-test pages group 3 (6 pages)

Apply the same pattern to:

- `app/[locale]/motion-blur-test/page.tsx`
- `app/[locale]/pwm-flicker-test/page.tsx`
- `app/[locale]/colour-temperature-test/page.tsx`
- `app/[locale]/black-smear-test/page.tsx`
- `app/[locale]/overdrive-test/page.tsx`
- `app/[locale]/hdr-test/page.tsx`

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.13 — Checker pages (4 pages)

Apply the same pattern to:

- `app/[locale]/refresh-rate-checker/page.tsx`
- `app/[locale]/resolution-checker/page.tsx`
- `app/[locale]/input-lag-test/page.tsx`
- `app/[locale]/screen-clean-mode/page.tsx`

**Stop after this milestone.** Wait for "continue".

---

### Milestone 5.14 — Sub-variant pages (20 pages)

Each sub-variant page (e.g. `dead-pixel-test/for-oled`) has its own hardcoded heading, description paragraph, FAQs, and body copy. Apply the same locale-keyed content map pattern to all 20 sub-variant pages:

```
app/[locale]/dead-pixel-test/for-oled/page.tsx
app/[locale]/dead-pixel-test/for-laptops/page.tsx
app/[locale]/dead-pixel-test/for-4k/page.tsx
app/[locale]/dead-pixel-test/for-vr/page.tsx
app/[locale]/dead-pixel-test/for-projectors/page.tsx
app/[locale]/dead-pixel-test/for-gaming-monitors/page.tsx
app/[locale]/stuck-pixel-fixer/for-oled/page.tsx
app/[locale]/stuck-pixel-fixer/for-laptops/page.tsx
app/[locale]/backlight-bleed-test/for-oled/page.tsx
app/[locale]/backlight-bleed-test/for-curved-monitors/page.tsx
app/[locale]/image-retention-test/for-oled/page.tsx
app/[locale]/image-retention-test/for-laptops/page.tsx
app/[locale]/refresh-rate-checker/for-gaming/page.tsx
app/[locale]/refresh-rate-checker/144hz-test/page.tsx
app/[locale]/refresh-rate-checker/240hz-test/page.tsx
app/[locale]/screen-uniformity-test/for-ultrawide/page.tsx
app/[locale]/gamma-calibration-check/for-photography/page.tsx
app/[locale]/contrast-black-level-test/for-oled/page.tsx
app/[locale]/viewing-angle-test/for-laptops/page.tsx
app/[locale]/resolution-checker/for-ultrawide/page.tsx
```

For each, add:
- A translated `h1` heading
- A translated introductory `p` tag
- A locale-keyed `FAQS` map
- A locale-keyed `BODY_CONTENT` map (the extended body copy sections)

These pages also use `Breadcrumb` — the breadcrumb labels "Dead Pixel Test", "For OLED", etc. that appear as static items in each page's breadcrumb array should be translated inline as strings in the locale-keyed content sections.

```
✓ Phase 5 done — all tool components, shared components, and all 50 page files updated with locale-aware strings and content.
```

**Stop. Wait for "continue".**

---

## Phase 6 — Sitemap, hreflang, TypeScript, verification

### Milestone 6.1 — Update app/sitemap.ts

The sitemap currently lists only English URLs. Add a complete set of `[LANG_CODE]`-prefixed URLs for every route. English URLs stay at the root (no prefix); [LANGUAGE] URLs get the `/[LANG_CODE]/` prefix.

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { tools } from '@/lib/tools'
import { posts } from '@/lib/posts'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'
const locales = ['en', '[LANG_CODE]'] as const
const prefix = (locale: string, path: string) =>
  locale === 'en' ? `${appUrl}${path}` : `${appUrl}/${locale}${path}`

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    // Home
    entries.push({ url: prefix(locale, '/'), priority: 1.0, changeFrequency: 'weekly' })

    // Tool pages
    tools.forEach(tool => {
      entries.push({ url: prefix(locale, `/${tool.slug}`), priority: 0.9, changeFrequency: 'monthly' })
    })

    // Sub-variant pages
    const subVariants = [
      '/dead-pixel-test/for-oled',
      '/dead-pixel-test/for-laptops',
      '/dead-pixel-test/for-4k',
      '/dead-pixel-test/for-projectors',
      '/dead-pixel-test/for-vr',
      '/dead-pixel-test/for-gaming-monitors',
      '/backlight-bleed-test/for-oled',
      '/image-retention-test/for-oled',
      '/stuck-pixel-fixer/for-oled',
      '/refresh-rate-checker/for-gaming',
      '/refresh-rate-checker/144hz-test',
      '/stuck-pixel-fixer/for-laptops',
      '/image-retention-test/for-laptops',
      '/screen-uniformity-test/for-ultrawide',
      '/backlight-bleed-test/for-curved-monitors',
      '/gamma-calibration-check/for-photography',
      '/refresh-rate-checker/240hz-test',
      '/contrast-black-level-test/for-oled',
      '/viewing-angle-test/for-laptops',
      '/resolution-checker/for-ultrawide',
    ]
    subVariants.forEach(path => {
      entries.push({ url: prefix(locale, path), priority: 0.8, changeFrequency: 'monthly' })
    })

    // Blog
    entries.push({ url: prefix(locale, '/blog'), priority: 0.7, changeFrequency: 'weekly' })
    posts.forEach(post => {
      entries.push({
        url: prefix(locale, `/blog/${post.slug}`),
        lastModified: new Date(post.publishedAt),
        priority: 0.7,
        changeFrequency: 'yearly',
      })
    })

    // Static pages
    entries.push({ url: prefix(locale, '/about'), priority: 0.5, changeFrequency: 'yearly' })
    entries.push({ url: prefix(locale, '/contact'), priority: 0.4, changeFrequency: 'yearly' })
    entries.push({ url: prefix(locale, '/privacy'), priority: 0.3, changeFrequency: 'yearly' })
    entries.push({ url: prefix(locale, '/terms'), priority: 0.3, changeFrequency: 'yearly' })
  }

  return entries
}
```

---

### Milestone 6.2 — Add hreflang alternates to all generateMetadata exports

Every page that exports `generateMetadata` (or has a static `metadata` export) needs hreflang `alternates`. The pattern is the same for all pages — add `alternates.languages` to every metadata object.

**Pattern for tool pages:**

```typescript
// In lib/metadata.ts, update toolMetadata() to accept locale:
export function toolMetadata(tool: Tool, locale: string = 'en'): Metadata {
  const canonicalPath = `/${tool.slug}`
  return {
    // ...existing fields...
    alternates: {
      canonical: locale === 'en' ? `${appUrl}${canonicalPath}` : `${appUrl}/${locale}${canonicalPath}`,
      languages: {
        'en': `${appUrl}${canonicalPath}`,
        '[LANG_CODE]': `${appUrl}/[LANG_CODE]${canonicalPath}`,
        'x-default': `${appUrl}${canonicalPath}`,
      },
    },
  }
}
```

**Pattern for blog posts:**

```typescript
alternates: {
  canonical: locale === 'en' ? `${appUrl}/blog/${slug}` : `${appUrl}/${locale}/blog/${slug}`,
  languages: {
    'en': `${appUrl}/blog/${slug}`,
    '[LANG_CODE]': `${appUrl}/[LANG_CODE]/blog/${slug}`,
    'x-default': `${appUrl}/blog/${slug}`,
  },
}
```

Apply this pattern to every `generateMetadata` function in every page file. For pages with a static `metadata` export (e.g. `about/page.tsx`), convert them to `generateMetadata` functions that accept `params` so the locale is available.

---

### Milestone 6.3 — Update lib/metadata.ts for full locale-awareness

Update `toolMetadata()` and `toolSchemas()` to accept a `locale` parameter so all schema URLs and canonical URLs reflect the correct locale prefix:

```typescript
export function toolMetadata(tool: Tool, locale: string = 'en'): Metadata {
  const pathPrefix = locale === 'en' ? '' : `/${locale}`
  const toolUrl = `${appUrl}${pathPrefix}/${tool.slug}`
  const ogImage = `${appUrl}/api/og?title=${encodeURIComponent(tool.metaTitle)}&desc=${encodeURIComponent(tool.metaDesc)}`
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
    alternates: {
      canonical: toolUrl,
      languages: {
        'en': `${appUrl}/${tool.slug}`,
        '[LANG_CODE]': `${appUrl}/[LANG_CODE]/${tool.slug}`,
        'x-default': `${appUrl}/${tool.slug}`,
      },
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDesc,
      url: toolUrl,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: tool.metaTitle }],
    },
    twitter: { card: 'summary_large_image', images: [ogImage] },
  }
}
```

Update all tool `page.tsx` files that call `toolMetadata(tool)` to pass `locale`: `toolMetadata(tool, locale)`.

---

### Milestone 6.4 — TypeScript check

Run:
```bash
npx tsc --noEmit
```

Fix all type errors before proceeding. Common issues to expect:
- `params` type changed from `{ locale: string }` to `Promise<{ locale: string }>` — ensure all pages `await params`
- Dynamic imports of locale data files may need `// @ts-expect-error` or type assertions if the file doesn't exist yet
- `getTranslations` namespace strings may need to match the exact key hierarchy in messages/en.json

---

### Milestone 6.5 — Manual verification checklist

Test the following before marking the language addition complete:

**Routing**
- [ ] `https://yourdomain.com/` loads in English
- [ ] `https://yourdomain.com/[LANG_CODE]/` loads in [LANGUAGE]
- [ ] `https://yourdomain.com/dead-pixel-test` loads the English dead pixel test
- [ ] `https://yourdomain.com/[LANG_CODE]/dead-pixel-test` loads the [LANGUAGE] version

**UI chrome**
- [ ] Header nav labels are in [LANGUAGE] on locale-prefixed pages
- [ ] Footer section headings and tagline are in [LANGUAGE]
- [ ] Breadcrumb "Home" label is translated
- [ ] "Frequently Asked Questions" and "Related Tools" headings are in [LANGUAGE]

**Tool components**
- [ ] RefreshRateChecker: "Measuring refresh rate...", "Measure Again", Hz labels all in [LANGUAGE]
- [ ] ResolutionChecker: all stat card labels in [LANGUAGE]; "Re-check" button in [LANGUAGE]
- [ ] InputLagTest: all phase strings in [LANGUAGE] ("Wait...", "CLICK!", etc.)
- [ ] StuckPixelFixer: epilepsy warning in [LANGUAGE]; speed labels in [LANGUAGE]
- [ ] GammaCalibrationCheck: swatch labels and hints in [LANGUAGE]
- [ ] FullscreenPanel: "Full screen" button and keyboard hint in [LANGUAGE]

**Content**
- [ ] Home page hero heading and description in [LANGUAGE]
- [ ] Blog index title and post list shows [LANGUAGE] post titles and descriptions
- [ ] At least one blog post body is in [LANGUAGE]
- [ ] At least one tool FAQ is in [LANGUAGE]
- [ ] Date format on blog posts renders correctly for [LANG_CODE] locale

**SEO**
- [ ] View page source of `[LANG_CODE]/dead-pixel-test` — `<html lang="[LANG_CODE]">` is set
- [ ] `<link rel="alternate" hreflang="en" ...>` and `<link rel="alternate" hreflang="[LANG_CODE]" ...>` appear in `<head>`
- [ ] `https://yourdomain.com/sitemap.xml` includes both `/dead-pixel-test` and `/[LANG_CODE]/dead-pixel-test`

**Amazon affiliate**
- [ ] "Shop on Amazon" section heading is in [LANGUAGE] on locale-prefixed tool pages
- [ ] Affiliate disclosure text is in [LANGUAGE]

```
✓ Phase 6 done — sitemap updated, hreflang added to all pages, TypeScript clean, manual verification complete.
```

---

## Config — fill in here, nowhere else

```
LANG_CODE    = pt
LANGUAGE     = Portuguese
NATIVE_NAME  = Português
LANG_UPPER   = PT
```

Replace every `[LANG_CODE]`, `[LANGUAGE]`, `[NATIVE_NAME]`, and `[LANG_UPPER]` throughout this guide with the values above before starting Phase 1.