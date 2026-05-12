# Screen & Monitor Test Lab — Build Plan

Repository: tp-screen-monitor-test-lab
Description: Test your monitor for dead pixels, backlight bleed, and display problems. Free, no install.
Stack: Next.js 15, TypeScript, Tailwind CSS, Vercel
Tools: 25 browser-side tools live (more planned), zero paid API dependencies
Design direction: Dark base, sky blue accent, tech-precise, screen-centric

---

[X] Phase 1: Project Foundation
    [X] Milestone 1.1: Initialize Next.js project and confirm environment
    [X] Milestone 1.2: Design system — Tailwind config, brand palette, typography, dark mode
    [X] Milestone 1.3: Visual assets brief — favicon and OG image instructions for ChatGPT
    [X] Milestone 1.4: Core layout components — RootLayout, Header, Footer, Breadcrumb

[X] Phase 2: Tool Infrastructure and Homepage
    [X] Milestone 2.1: Tool data registry — TypeScript types and all 25 tools configured
    [X] Milestone 2.2: Homepage — tool grid with category grouping, SEO metadata, WebSite and Organization schemas
    [X] Milestone 2.3: Global SEO infrastructure — sitemap.ts, robots.ts, root metadata, canonical pattern

[X] Phase 3: Fullscreen Panel Tools
    [X] Milestone 3.1: Fullscreen engine component + Dead Pixel Test (full tool page, SEO content, schemas)
    [X] Milestone 3.2: White Screen + Black Screen + Stuck Pixel Fixer (full tool pages with SEO and schemas)
    [X] Milestone 3.3: Red, Green, Blue, Grey, Yellow, Pink screens + Fullscreen Colour Cycle (full pages)

[X] Phase 4: Visual Calibration and Analysis Tests
    [X] Milestone 4.1: Gradient Banding Test + Backlight Bleed Test + IPS Glow Test + Contrast Black Level Test
    [X] Milestone 4.2: White Saturation Test + Gamma Calibration Check + Sharpness Focus Chart + Moire Pattern Test
    [X] Milestone 4.3: Screen Uniformity Test + Viewing Angle Test + Image Retention Test

[X] Phase 5: Checker and Utility Tools
    [X] Milestone 5.1: Refresh Rate Checker + Resolution and Aspect Checker + Screen Clean Mode

[X] Phase 6: Static Pages and Blog
    [X] Milestone 6.1: About, Privacy Policy, Terms of Service, Contact pages + Custom 404
    [X] Milestone 6.2: Blog infrastructure — layout, index page, static post system
    [X] Milestone 6.3: All 10 blog posts with full SEO content and internal links

[X] Phase 7: Programmatic SEO Pages
    [X] Milestone 7.1: Per-tool dynamic OG images (/api/og route with branded ImageResponse, wired into toolMetadata and blog posts)
    [X] Milestone 7.2: Colour variant pages — /red-screen, /blue-screen, /green-screen, /grey-screen, /yellow-screen, /pink-screen (completed in Phase 3.3)
    [X] Milestone 7.3: Use-case variant pages — /dead-pixel-test/for-oled, /for-laptops, /for-4k with unique SEO content
    [X] Milestone 7.4: Internal linking audit — all 25 related[] slugs verified correct, all tool routes confirmed present

[X] Phase 8: Analytics, Ads, and Launch Readiness
    [X] Milestone 8.1: Analytics setup — Vercel Analytics + Speed Insights active; GA4 skipped (Vercel Analytics + Search Console sufficient for this stage)
    [X] Milestone 8.2: Ad script integration — AdSense Auto Ads (ca-pub-9067385801783501) added via next/script afterInteractive
    [X] Milestone 8.3: Performance audit — all scripts afterInteractive, next/font with preload, next/image for assets, no render-blocking resources, no CLS sources
    [X] Milestone 8.4: IndexNow key created (7f4a2e9b1c8d3f56a0e7b2d4c9f61083); sitemap at /sitemap.xml; robots.txt in place
         ACTION NEEDED (blocked by custom domain): Submit sitemap in Search Console > Sitemaps > add /sitemap.xml
         ACTION NEEDED (blocked by custom domain): IndexNow submission via POST to https://api.indexnow.org/indexnow once on custom domain
         ACTION NEEDED (blocked by custom domain): Apply for AdSense once on custom domain with established traffic
    [X] Milestone 8.5: Keyword research completed — keywords_serp.csv built and cross-referenced against all 25 tools;
         all 10 English blog posts updated with natural keyword placements; CSV fully populated with Used In / Status / Content Type columns

[ ] Phase 9: Additional Tools
    Note: add each tool to lib/tools.ts registry, build component, build page with FAQs and body copy, update sitemap
    [X] Milestone 9.1: Motion Blur Test (slug: motion-blur-test)
        Moving bar across screen to reveal ghosting, smearing, and pixel response issues
        Target query: "motion blur test monitor"
    [X] Milestone 9.2: Input Lag Test (slug: input-lag-test)
        Visual reaction time test measuring click response to a colour change stimulus
        Target query: "input lag test online"
    [X] Milestone 9.3: PWM Flicker Test (slug: pwm-flicker-test)
        Rapid brightness alternation pattern to detect backlight PWM flicker causing eye strain
        Target query: "PWM flicker test monitor"
    [X] Milestone 9.4: Colour Temperature Test (slug: colour-temperature-test)
        White balance scale from warm to cool to identify and correct monitor colour tint
        Target query: "monitor colour temperature test"
    [X] Milestone 9.5: Black Smear Test (slug: black-smear-test)
        Slow dark objects on dark backgrounds to reveal VA panel dark-to-dark ghosting
        Target query: "VA panel black smear test"
    [ ] Milestone 9.6: Overdrive Test (slug: overdrive-test)
        Fast-moving content to show inverse ghosting and haloing from aggressive overdrive
        Target query: "monitor overdrive test inverse ghosting"
    [ ] Milestone 9.7: HDR Test (slug: hdr-test)
        Detects browser HDR capability and displays a peak brightness ramp
        Target query: "HDR monitor test online"

[ ] Phase 10: Additional Use-Case Variant Pages
    Note: each page reuses existing tool component, unique H1/meta/canonical, 5 FAQs, body copy, related tools
    High priority (high search volume):
    [ ] /backlight-bleed-test/for-oled       — "backlight bleed oled" (educational: OLED has no backlight bleed)
    [ ] /image-retention-test/for-oled       — "oled burn in test" (very high volume)
    [ ] /refresh-rate-checker/for-gaming     — "refresh rate test gaming monitor"
    [ ] /stuck-pixel-fixer/for-oled          — "fix stuck pixel oled"
    [ ] /refresh-rate-checker/144hz-test     — "144hz monitor test"
    [ ] /dead-pixel-test/for-projectors      — "dead pixel on projector" (1,600/mo; WINNABLE; keyword-driven from SERP research)
    [ ] /dead-pixel-test/for-vr             — "oculus dead pixel" (1,900/mo; BORDERLINE; Meta Quest / VR headset angle)
    Medium priority:
    [ ] /stuck-pixel-fixer/for-laptops       — "fix stuck pixel laptop screen"
    [ ] /image-retention-test/for-laptops    — "laptop screen burn in test"
    [ ] /screen-uniformity-test/for-ultrawide — "ultrawide monitor uniformity test"
    [ ] /dead-pixel-test/for-gaming-monitors — "dead pixel test gaming monitor"
    [ ] /backlight-bleed-test/for-curved-monitors — "curved monitor backlight bleed"
    [ ] /gamma-calibration-check/for-photography — "monitor gamma calibration photography"
    [ ] /refresh-rate-checker/240hz-test     — "240hz monitor test"
    [ ] /contrast-black-level-test/for-oled  — "oled black level test"
    [ ] /viewing-angle-test/for-laptops      — "laptop screen viewing angle test"
    [ ] /resolution-checker/for-ultrawide    — "ultrawide resolution checker"

[ ] Phase 11: Keyword-Driven Blog Content Backlog
    Note: all keywords below are still todo in keywords_serp.csv; write as standalone blog posts targeting the cluster
    Each post must link to the relevant tool page and follow the standard content rules (no em dashes; 400-600w; 6-8 FAQs)
    Brand-specific dead pixel posts (group into 2-3 posts to avoid thin content):
    [ ] "Dead pixels on [brand] monitors: AOC, Dell, ASUS, Sony, LG" — covers aoc monitor dead pixel (3600) + dell monitor dead pixel (2900) + asus monitor dead pixel (590) + lg dead pixel/lg oled dead pixel/lg oled tv dead pixel/sony tv dead pixel
    [ ] "Dead pixels on OLED TVs and projectors" — covers oled tv dead pixel (140) + dead pixel on projector (1600)
    Brand-specific backlight bleed posts (group by theme):
    [ ] "Backlight bleed on gaming laptops: HP Omen, Acer Nitro, MSI, Alienware, Lenovo" — covers hp omen backlight bleed (720) + acer nitro 5 backlight bleed (590) + msi screen bleeding (110) + alienware backlight bleed (260) + lenovo backlight bleed (170)
    [ ] "Backlight bleed on Samsung TVs and how to assess it" — covers backlight bleed samsung (1900) + samsung tv light bleed (480) + light bleed samsung tv (480) + backlight bleed samsung tv (170) + samsung tv backlight bleed fix (140) + samsung curved tv light bleed (320)
    [ ] "Backlight bleed on LG, Sony, Philips, TCL, and BenQ displays" — covers lg backlight bleed (110) + sony backlight bleeding (320) + philips backlight bleeding (140) + tcl backlight bleed (140) + benq ex2780q backlight bleed (1300)
    [ ] "LED TV and OLED screen bleeding explained" — covers led tv light bleed (210) + light bleed tv (210) + tv screen bleeding (260) + screen bleeding tv (170) + amoled screen bleeding (720)
    Burn-in posts:
    [ ] "Samsung OLED and QLED burn-in: what actually happens" — covers screen burn in samsung (6600) + burn in oled samsung (1000) + samsung tv burn in (480) + samsung burn in screen (170) + samsung qled dead pixel (170)
    Resolution and display informational posts:
    [ ] "Screen resolution explained: sizes, names, and what they mean for TVs and monitors" — covers tv screen resolution sizes (390) + chromebook display resolution (880) + average computer screen size (1300) + custom screen resolution (170) + 1600x1200 monitor (3600) + vga max resolution and refresh rate (110)
    [ ] "Samsung screen resolution and display settings guide" — covers samsung display resolution (390) + samsung screen resolution (390) + samsung tv screen size adjustment (170)

[ ] Phase 12: Language Translations
    Note: English source blogs and tool pages are now keyword-clean (updated in Milestone 8.5) — translations should begin from these updated files
    Priority 1 languages: Spanish (es), French (fr), Portuguese (pt), German (de)
    Priority 2 languages: Italian (it), Dutch (nl), Polish (pl)
    Each language version requires: translated tool pages + translated blog posts + correct hreflang on all pages
    Do not publish any language version without human editorial review (Google scaled content abuse policy)
