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
         ACTION NEEDED: Submit sitemap in Search Console — Search Console > Sitemaps > add /sitemap.xml
         ACTION NEEDED: IndexNow submission — POST to https://api.indexnow.org/indexnow with your domain and key once on custom domain
