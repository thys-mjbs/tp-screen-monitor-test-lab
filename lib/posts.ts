export interface Post {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingMinutes: number
  relatedTools: string[]
  amazonSearchTerms: string[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-test-monitor-dead-pixels',
    title: 'How to Test Your Monitor for Dead Pixels',
    description: 'A step-by-step guide to identifying dead, stuck, and hot pixels on any display using solid-colour fullscreen tests.',
    publishedAt: '2025-05-01',
    readingMinutes: 6,
    relatedTools: ['dead-pixel-test', 'white-screen', 'black-screen', 'stuck-pixel-fixer'],
    amazonSearchTerms: ['replacement monitor screen panel', 'monitor extended warranty plan', 'pixel defect laptop screen replacement'],
  },
  {
    slug: 'what-is-backlight-bleed',
    title: 'What Is Backlight Bleed and How Do You Test for It?',
    description: 'Backlight bleed is a common LCD defect that appears as bright patches in dark scenes. Learn what causes it, how to spot it, and what your options are.',
    publishedAt: '2025-05-02',
    readingMinutes: 7,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'ips-glow-test', 'contrast-black-level-test'],
    amazonSearchTerms: ['OLED monitor no backlight bleed', 'VA panel monitor low bleed upgrade', 'monitor anti-glare privacy filter'],
  },
  {
    slug: 'refresh-rate-60hz-vs-144hz',
    title: 'Refresh Rate Explained: 60Hz vs 120Hz vs 144Hz vs 240Hz',
    description: 'What refresh rate actually means, how to check what your monitor is running at, and when upgrading to a higher refresh rate makes a real difference.',
    publishedAt: '2025-05-03',
    readingMinutes: 8,
    relatedTools: ['refresh-rate-checker'],
    amazonSearchTerms: ['144Hz gaming monitor affordable', '240Hz competitive gaming display', 'HDMI 2.1 cable for gaming'],
  },
  {
    slug: 'stuck-pixels-causes-and-fixes',
    title: 'Stuck Pixels: Causes, Types, and Whether They Can Be Fixed',
    description: 'The difference between dead and stuck pixels, why stuck pixels happen, and how the rapid-colour cycling technique works to try to free them.',
    publishedAt: '2025-05-04',
    readingMinutes: 6,
    relatedTools: ['stuck-pixel-fixer', 'dead-pixel-test', 'image-retention-test'],
    amazonSearchTerms: ['LCD screen repair kit', 'laptop screen replacement panel', 'monitor pixel repair tool'],
  },
  {
    slug: 'monitor-panel-types-ips-va-oled',
    title: 'IPS vs VA vs OLED: Monitor Panel Types Compared',
    description: 'A practical comparison of IPS, VA, and OLED panel technologies covering contrast, colour, viewing angle, response time, and which tests reveal the differences.',
    publishedAt: '2025-05-05',
    readingMinutes: 9,
    relatedTools: ['viewing-angle-test', 'contrast-black-level-test', 'backlight-bleed-test', 'ips-glow-test'],
    amazonSearchTerms: ['IPS gaming monitor wide viewing angle', 'OLED monitor upgrade affordable', 'VA curved gaming monitor'],
  },
  {
    slug: 'understanding-monitor-resolution-dpi',
    title: 'Monitor Resolution, DPI, and Pixel Density Explained',
    description: 'The difference between screen resolution, physical pixels, device pixel ratio, and PPI, and why the same resolution looks different on different screens.',
    publishedAt: '2025-05-06',
    readingMinutes: 7,
    relatedTools: ['resolution-checker'],
    amazonSearchTerms: ['4K monitor 27 inch upgrade', 'high DPI display for design', 'USB-C monitor high resolution'],
  },
  {
    slug: 'gamma-calibration-guide',
    title: 'Monitor Gamma: What It Is and How to Check Your Calibration',
    description: 'Gamma controls the relationship between pixel values and display brightness. Learn what gamma 2.2 means, why it matters, and how to test your monitor without special hardware.',
    publishedAt: '2025-05-07',
    readingMinutes: 7,
    relatedTools: ['gamma-calibration-check', 'gradient-banding-test', 'white-saturation-test'],
    amazonSearchTerms: ['Datacolor SpyderX colorimeter', 'X-Rite i1Display calibration', 'monitor calibration software'],
  },
  {
    slug: 'screen-uniformity-test-guide',
    title: 'Screen Uniformity: What It Is and How to Test It',
    description: 'Display uniformity describes how consistently a monitor reproduces the same colour or brightness across its entire panel surface. Learn what causes uniformity issues and how to assess them.',
    publishedAt: '2025-05-08',
    readingMinutes: 6,
    relatedTools: ['screen-uniformity-test', 'backlight-bleed-test', 'gradient-banding-test'],
    amazonSearchTerms: ['professional monitor uniform brightness', 'monitor anti-glare hood', 'wide gamut monitor for photo editing'],
  },
  {
    slug: 'how-to-clean-monitor-screen',
    title: 'How to Clean Your Monitor Screen Without Causing Damage',
    description: 'The right materials, technique, and approach for cleaning LCD, IPS, OLED, and matte anti-glare screens without scratching coatings or letting liquid enter the panel.',
    publishedAt: '2025-05-09',
    readingMinutes: 5,
    relatedTools: ['screen-clean-mode', 'white-screen', 'black-screen'],
    amazonSearchTerms: ['monitor screen cleaning kit', 'microfiber cleaning cloth for screens', 'LCD screen cleaner spray'],
  },
  {
    slug: 'monitor-aspect-ratios-explained',
    title: 'Monitor Aspect Ratios Explained: 16:9, 21:9, 32:9, and More',
    description: 'A guide to common monitor aspect ratios, what they mean for gaming, productivity, and media, and how to check which aspect ratio your display is running at.',
    publishedAt: '2025-05-10',
    readingMinutes: 6,
    relatedTools: ['resolution-checker', 'screen-uniformity-test'],
    amazonSearchTerms: ['ultrawide 21:9 monitor', 'super ultrawide 32:9 gaming monitor', 'widescreen monitor productivity'],
  },
  {
    slug: 'dead-pixels-brand-monitors',
    title: 'Dead Pixels on AOC, Dell, ASUS, Sony, and LG Monitors',
    description: 'Warranty policies for pixel defects vary significantly by manufacturer. Here is what AOC, Dell, ASUS, Sony, and LG each cover and how to make a successful claim.',
    publishedAt: '2026-05-12',
    readingMinutes: 5,
    relatedTools: ['dead-pixel-test', 'stuck-pixel-fixer'],
    amazonSearchTerms: ['monitor extended warranty plan', 'Dell monitor replacement screen', 'ASUS monitor dead pixel policy'],
  },
  {
    slug: 'dead-pixels-oled-tv-projectors',
    title: 'Dead Pixels on OLED TVs and Projectors: What They Look Like and What to Do',
    description: 'Dead pixels on OLED TVs and DLP or LCD projectors behave differently from monitor defects. Learn how to test for them and what the warranty options are.',
    publishedAt: '2026-05-13',
    readingMinutes: 5,
    relatedTools: ['dead-pixel-test', 'stuck-pixel-fixer', 'backlight-bleed-test'],
    amazonSearchTerms: ['OLED TV screen protector', 'projector replacement lamp bulb', 'TV extended warranty plan'],
  },
  {
    slug: 'backlight-bleed-gaming-laptops',
    title: 'Backlight Bleed on Gaming Laptops: HP Omen, Acer Nitro, MSI, Alienware, and Lenovo',
    description: 'Gaming laptops are among the most common sources of backlight bleed complaints. Here is what to expect from each major brand and how to assess your own display.',
    publishedAt: '2026-05-14',
    readingMinutes: 5,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'ips-glow-test'],
    amazonSearchTerms: ['gaming laptop screen replacement', 'laptop anti-glare screen protector', 'laptop privacy filter'],
  },
  {
    slug: 'backlight-bleed-samsung-tv',
    title: 'Backlight Bleed on Samsung TVs: How to Test and What to Do',
    description: 'Backlight bleed is one of the most common complaints on Samsung LED and QLED TVs. Learn how to assess the severity, what fixes exist, and when to contact Samsung support.',
    publishedAt: '2026-05-15',
    readingMinutes: 5,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'dead-pixel-test'],
    amazonSearchTerms: ['Samsung TV extended warranty', 'QLED to OLED TV upgrade Samsung', 'TV anti-glare screen filter'],
  },
  {
    slug: 'backlight-bleed-lg-sony-philips-tcl-benq',
    title: 'Backlight Bleed on LG, Sony, Philips, TCL, and BenQ Displays',
    description: 'Backlight bleed affects LCD monitors and TVs from every manufacturer. This guide covers LG, Sony, Philips, TCL, and BenQ displays including the BenQ EX2780Q.',
    publishedAt: '2026-05-16',
    readingMinutes: 5,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'ips-glow-test'],
    amazonSearchTerms: ['BenQ IPS monitor upgrade', 'LG OLED monitor', 'Sony OLED TV replacement'],
  },
  {
    slug: 'led-tv-oled-screen-bleeding',
    title: 'LED TV and OLED Screen Bleeding Explained',
    description: 'TV screen bleeding, LED TV light bleed, and AMOLED screen bleeding all mean different things. This guide explains each phenomenon and what you can do about it.',
    publishedAt: '2026-05-17',
    readingMinutes: 5,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'image-retention-test'],
    amazonSearchTerms: ['OLED TV upgrade affordable', 'LED TV backlight replacement kit', 'OLED anti burn-in screensaver'],
  },
  {
    slug: 'samsung-oled-qled-burn-in',
    title: 'Samsung OLED and QLED Burn-In: What Actually Happens',
    description: 'Samsung QLED TVs have no real burn-in risk. Samsung QD-OLED TVs do. This guide explains the difference, what causes burn-in on Samsung screens, and how to prevent it.',
    publishedAt: '2026-05-18',
    readingMinutes: 5,
    relatedTools: ['image-retention-test', 'black-screen', 'dead-pixel-test'],
    amazonSearchTerms: ['Samsung OLED TV warranty plan', 'OLED anti burn-in screensaver app', 'OLED burn-in prevention screen protector'],
  },
  {
    slug: 'screen-resolution-tv-monitor-sizes',
    title: 'Screen Resolution Explained: Sizes, Names, and What They Mean for TVs and Monitors',
    description: 'A plain-language guide to resolution names, TV screen resolution sizes, 1600x1200 monitors, Chromebook display resolution, custom resolutions, and VGA limits.',
    publishedAt: '2026-05-19',
    readingMinutes: 6,
    relatedTools: ['resolution-checker', 'refresh-rate-checker'],
    amazonSearchTerms: ['4K TV affordable upgrade', '1440p gaming monitor', 'resolution scaling software display'],
  },
  {
    slug: 'samsung-screen-resolution-guide',
    title: 'Samsung Screen Resolution and Display Settings Guide',
    description: 'How to find, check, and adjust the resolution on Samsung monitors, TVs, and Galaxy phones. Covers HDMI UHD Color, Picture Size settings, and OS scaling.',
    publishedAt: '2026-05-20',
    readingMinutes: 5,
    relatedTools: ['resolution-checker', 'refresh-rate-checker'],
    amazonSearchTerms: ['Samsung 4K monitor USB-C', 'Samsung display settings guide book', 'Samsung Galaxy screen protector'],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string, locale: string = 'en'): string {
  const dateLocale = locale === 'en' ? 'en-GB' : locale
  return new Date(iso).toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
