export interface Post {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingMinutes: number
  relatedTools: string[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-test-monitor-dead-pixels',
    title: 'How to Test Your Monitor for Dead Pixels',
    description: 'A step-by-step guide to identifying dead, stuck, and hot pixels on any display using solid-colour fullscreen tests.',
    publishedAt: '2025-05-01',
    readingMinutes: 6,
    relatedTools: ['dead-pixel-test', 'white-screen', 'black-screen', 'stuck-pixel-fixer'],
  },
  {
    slug: 'what-is-backlight-bleed',
    title: 'What Is Backlight Bleed and How Do You Test for It?',
    description: 'Backlight bleed is a common LCD defect that appears as bright patches in dark scenes. Learn what causes it, how to spot it, and what your options are.',
    publishedAt: '2025-05-02',
    readingMinutes: 7,
    relatedTools: ['backlight-bleed-test', 'black-screen', 'ips-glow-test', 'contrast-black-level-test'],
  },
  {
    slug: 'refresh-rate-60hz-vs-144hz',
    title: 'Refresh Rate Explained: 60Hz vs 120Hz vs 144Hz vs 240Hz',
    description: 'What refresh rate actually means, how to check what your monitor is running at, and when upgrading to a higher refresh rate makes a real difference.',
    publishedAt: '2025-05-03',
    readingMinutes: 8,
    relatedTools: ['refresh-rate-checker'],
  },
  {
    slug: 'stuck-pixels-causes-and-fixes',
    title: 'Stuck Pixels: Causes, Types, and Whether They Can Be Fixed',
    description: 'The difference between dead and stuck pixels, why stuck pixels happen, and how the rapid-colour cycling technique works to try to free them.',
    publishedAt: '2025-05-04',
    readingMinutes: 6,
    relatedTools: ['stuck-pixel-fixer', 'dead-pixel-test', 'image-retention-test'],
  },
  {
    slug: 'monitor-panel-types-ips-va-oled',
    title: 'IPS vs VA vs OLED: Monitor Panel Types Compared',
    description: 'A practical comparison of IPS, VA, and OLED panel technologies covering contrast, colour, viewing angle, response time, and which tests reveal the differences.',
    publishedAt: '2025-05-05',
    readingMinutes: 9,
    relatedTools: ['viewing-angle-test', 'contrast-black-level-test', 'backlight-bleed-test', 'ips-glow-test'],
  },
  {
    slug: 'understanding-monitor-resolution-dpi',
    title: 'Monitor Resolution, DPI, and Pixel Density Explained',
    description: 'The difference between screen resolution, physical pixels, device pixel ratio, and PPI — and why the same resolution looks different on different screens.',
    publishedAt: '2025-05-06',
    readingMinutes: 7,
    relatedTools: ['resolution-checker'],
  },
  {
    slug: 'gamma-calibration-guide',
    title: 'Monitor Gamma: What It Is and How to Check Your Calibration',
    description: 'Gamma controls the relationship between pixel values and display brightness. Learn what gamma 2.2 means, why it matters, and how to test your monitor without special hardware.',
    publishedAt: '2025-05-07',
    readingMinutes: 7,
    relatedTools: ['gamma-calibration-check', 'gradient-banding-test', 'white-saturation-test'],
  },
  {
    slug: 'screen-uniformity-test-guide',
    title: 'Screen Uniformity: What It Is and How to Test It',
    description: 'Display uniformity describes how consistently a monitor reproduces the same colour or brightness across its entire panel surface. Learn what causes uniformity issues and how to assess them.',
    publishedAt: '2025-05-08',
    readingMinutes: 6,
    relatedTools: ['screen-uniformity-test', 'backlight-bleed-test', 'gradient-banding-test'],
  },
  {
    slug: 'how-to-clean-monitor-screen',
    title: 'How to Clean Your Monitor Screen Without Causing Damage',
    description: 'The right materials, technique, and approach for cleaning LCD, IPS, OLED, and matte anti-glare screens without scratching coatings or letting liquid enter the panel.',
    publishedAt: '2025-05-09',
    readingMinutes: 5,
    relatedTools: ['screen-clean-mode', 'white-screen', 'black-screen'],
  },
  {
    slug: 'monitor-aspect-ratios-explained',
    title: 'Monitor Aspect Ratios Explained: 16:9, 21:9, 32:9, and More',
    description: 'A guide to common monitor aspect ratios, what they mean for gaming, productivity, and media, and how to check which aspect ratio your display is running at.',
    publishedAt: '2025-05-10',
    readingMinutes: 6,
    relatedTools: ['resolution-checker', 'screen-uniformity-test'],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
