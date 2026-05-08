# Screen & Monitor Test Lab — Build Plan

Repository: tp-screen-monitor-test-lab
Description: Test your monitor for dead pixels, backlight bleed, and display problems — free, no install.
Stack: Next.js 15, TypeScript, Tailwind CSS, Vercel
Tools: 25 browser-side tools, zero paid API dependencies
Design direction: Dark base, sky blue accent, tech-precise, screen-centric

---

[X] Phase 1: Project Foundation
    [X] Milestone 1.1: Initialize Next.js project and confirm environment
    [X] Milestone 1.2: Design system — Tailwind config, brand palette, typography, dark mode
    [X] Milestone 1.3: Visual assets brief — favicon and OG image instructions for ChatGPT
    [X] Milestone 1.4: Core layout components — RootLayout, Header, Footer, Breadcrumb

[ ] Phase 2: Tool Infrastructure and Homepage
    [X] Milestone 2.1: Tool data registry — TypeScript types and all 25 tools configured
    [X] Milestone 2.2: Homepage — tool grid with category grouping, SEO metadata, WebSite and Organization schemas
    [ ] Milestone 2.3: Global SEO infrastructure — sitemap.ts, robots.ts, root metadata, canonical pattern

[ ] Phase 3: Fullscreen Panel Tools
    [ ] Milestone 3.1: Fullscreen engine component + Dead Pixel Test (full tool page, SEO content, schemas)
    [ ] Milestone 3.2: White Screen + Black Screen + Stuck Pixel Fixer (full tool pages with SEO and schemas)
    [ ] Milestone 3.3: Red, Green, Blue, Grey, Yellow, Pink screens + Fullscreen Colour Cycle (full pages)

[ ] Phase 4: Visual Calibration and Analysis Tests
    [ ] Milestone 4.1: Gradient Banding Test + Backlight Bleed Test + IPS Glow Test + Contrast Black Level Test
    [ ] Milestone 4.2: White Saturation Test + Gamma Calibration Check + Sharpness Focus Chart + Moire Pattern Test
    [ ] Milestone 4.3: Screen Uniformity Test + Viewing Angle Test + Image Retention Test

[ ] Phase 5: Checker and Utility Tools
    [ ] Milestone 5.1: Refresh Rate Checker + Resolution and Aspect Checker + Screen Clean Mode

[ ] Phase 6: Static Pages and Blog
    [ ] Milestone 6.1: About, Privacy Policy, Terms of Service, Contact pages + Custom 404
    [ ] Milestone 6.2: Blog infrastructure — layout, index page, static post system
    [ ] Milestone 6.3: All 10 blog posts with full SEO content and internal links

[ ] Phase 7: Programmatic SEO Pages
    [ ] Milestone 7.1: Per-tool dynamic OG images (opengraph-image.tsx for every tool)
    [ ] Milestone 7.2: Colour variant pages — /red-screen, /blue-screen, /green-screen, /grey-screen, /yellow-screen, /pink-screen as standalone SEO pages
    [ ] Milestone 7.3: Use-case variant pages — /dead-pixel-test/for-oled, /for-laptops, /for-4k and similar
    [ ] Milestone 7.4: Internal linking audit — Related Tools cards verified on every tool page, all links confirmed working

[ ] Phase 8: Analytics, Ads, and Launch Readiness
    [ ] Milestone 8.1: Analytics setup — GA4 component, Vercel Analytics, Speed Insights, tool_used and tool_completed events
    [ ] Milestone 8.2: Ad script integration — add single Auto Ads script tag (AdSense or Adsterra) to site header
    [ ] Milestone 8.3: Performance audit — Core Web Vitals, INP under 200ms, CLS under 0.1, PageSpeed mobile score 85 or above
    [ ] Milestone 8.4: Final launch checklist sign-off + IndexNow setup + Search Console sitemap submission
