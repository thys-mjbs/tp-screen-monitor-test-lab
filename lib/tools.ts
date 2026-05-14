export type ToolCategory = 'screen-state' | 'visual-test' | 'checker'

export interface Tool {
  slug: string
  name: string
  shortDescription: string
  metaTitle: string
  metaDesc: string
  category: ToolCategory
  primaryQuery: string
  related: string[]
}

export const categoryMeta: Record<ToolCategory, { label: string; description: string }> = {
  'screen-state': {
    label: 'Screen State',
    description: 'Solid colour fullscreen panels for pixel inspection, cleaning, and backlight checks.',
  },
  'visual-test': {
    label: 'Visual Tests',
    description: 'Diagnostic patterns to reveal dead pixels, banding, bleed, gamma, sharpness, and more.',
  },
  'checker': {
    label: 'Checkers & Utilities',
    description: 'Browser-based tools that read and report your display properties.',
  },
}

export const tools: Tool[] = [
  {
    slug: 'dead-pixel-test',
    name: 'Dead Pixel Test',
    shortDescription: 'Cycle solid colours to reveal dead or stuck pixels on your screen.',
    metaTitle: 'Dead Pixel Test: Free Online Monitor Checker',
    metaDesc: 'Check your monitor for dead pixels instantly. Cycles solid colours across your screen to reveal any dead, stuck, or hot pixels. Free, no download.',
    category: 'visual-test',
    primaryQuery: 'dead pixel test',
    related: ['white-screen', 'black-screen', 'stuck-pixel-fixer', 'fullscreen-colour-cycle'],
  },
  {
    slug: 'stuck-pixel-fixer',
    name: 'Stuck Pixel Fixer',
    shortDescription: 'Flash rapid colours over a target area to try freeing a stuck pixel.',
    metaTitle: 'Stuck Pixel Fixer: Free Online Tool',
    metaDesc: 'Try to fix a stuck pixel by rapidly flashing colours over the affected area. Browser-based, free to use, no download or sign-up required.',
    category: 'visual-test',
    primaryQuery: 'stuck pixel fixer',
    related: ['dead-pixel-test', 'fullscreen-colour-cycle', 'white-screen', 'image-retention-test'],
  },
  {
    slug: 'white-screen',
    name: 'White Screen',
    shortDescription: 'A clean fullscreen white panel for pixel inspection or monitor cleaning.',
    metaTitle: 'White Screen: Full Screen White Display Online',
    metaDesc: 'Display a pure white fullscreen panel. Use it to spot dead pixels, check display uniformity, or safely clean your monitor screen. Free, instant.',
    category: 'screen-state',
    primaryQuery: 'white screen',
    related: ['black-screen', 'dead-pixel-test', 'screen-clean-mode', 'screen-uniformity-test'],
  },
  {
    slug: 'black-screen',
    name: 'Black Screen',
    shortDescription: 'A solid black fullscreen panel for backlight bleed and glow checks.',
    metaTitle: 'Black Screen: Full Screen Black Display Online',
    metaDesc: 'Fill your screen with pure black to check for backlight bleed, IPS glow, and hot pixels. Free online tool, no download or install needed.',
    category: 'screen-state',
    primaryQuery: 'black screen',
    related: ['backlight-bleed-test', 'ips-glow-test', 'white-screen', 'contrast-black-level-test'],
  },
  {
    slug: 'red-screen',
    name: 'Red Screen',
    shortDescription: 'Fill the screen with red to isolate colour and subpixel issues.',
    metaTitle: 'Red Screen: Full Screen Red Display Online',
    metaDesc: 'Display a solid red fullscreen panel to check for colour accuracy, subpixel faults, and dead pixels. Free online monitor test tool.',
    category: 'screen-state',
    primaryQuery: 'red screen',
    related: ['green-screen', 'blue-screen', 'dead-pixel-test', 'fullscreen-colour-cycle'],
  },
  {
    slug: 'green-screen',
    name: 'Green Screen',
    shortDescription: 'Fill the screen with green to isolate pixel and tint issues.',
    metaTitle: 'Green Screen: Full Screen Green Display Online',
    metaDesc: 'Display a solid green fullscreen panel to detect dead pixels, green tinting, and subpixel faults. Free online monitor test, no download.',
    category: 'screen-state',
    primaryQuery: 'green screen',
    related: ['red-screen', 'blue-screen', 'dead-pixel-test', 'fullscreen-colour-cycle'],
  },
  {
    slug: 'blue-screen',
    name: 'Blue Screen',
    shortDescription: 'Fill the screen with blue to expose display artefacts and subpixel faults.',
    metaTitle: 'Blue Screen Test: Full Screen Blue Display Online',
    metaDesc: 'Show a solid blue fullscreen panel to check for dead pixels, display artefacts, and colour accuracy issues. Free monitor test tool, no install.',
    category: 'screen-state',
    primaryQuery: 'blue screen',
    related: ['red-screen', 'green-screen', 'dead-pixel-test', 'fullscreen-colour-cycle'],
  },
  {
    slug: 'grey-screen',
    name: 'Grey Screen',
    shortDescription: 'A neutral grey panel to reveal dirty screen effect and uniformity problems.',
    metaTitle: 'Grey Screen: Full Screen Grey Display Online',
    metaDesc: 'Display a neutral grey fullscreen panel to spot dirty screen effect, uneven brightness, and display uniformity issues. Free online tool.',
    category: 'screen-state',
    primaryQuery: 'grey screen',
    related: ['screen-uniformity-test', 'white-screen', 'dead-pixel-test', 'gradient-banding-test'],
  },
  {
    slug: 'yellow-screen',
    name: 'Yellow Screen',
    shortDescription: 'Use a yellow panel to spot tinting and subpixel defects.',
    metaTitle: 'Yellow Screen: Full Screen Yellow Display Online',
    metaDesc: 'Fill your screen with yellow to detect colour tinting, subpixel faults, and display issues. Free fullscreen monitor test, no download needed.',
    category: 'screen-state',
    primaryQuery: 'yellow screen',
    related: ['red-screen', 'green-screen', 'dead-pixel-test', 'fullscreen-colour-cycle'],
  },
  {
    slug: 'pink-screen',
    name: 'Pink Screen',
    shortDescription: 'Use a pink panel to spot tinting and subpixel defects.',
    metaTitle: 'Pink Screen: Full Screen Pink Display Online',
    metaDesc: 'Display a solid pink fullscreen panel to check for colour tinting and subpixel defects on your monitor. Free online tool, no install required.',
    category: 'screen-state',
    primaryQuery: 'pink screen',
    related: ['red-screen', 'dead-pixel-test', 'fullscreen-colour-cycle', 'white-screen'],
  },
  {
    slug: 'fullscreen-colour-cycle',
    name: 'Fullscreen Colour Cycle',
    shortDescription: 'Automatically cycles multiple solid colours across your full screen.',
    metaTitle: 'Fullscreen Colour Cycle: Screen Colour Test Online',
    metaDesc: 'Automatically cycle through multiple solid colours in fullscreen to quickly check for dead pixels and colour accuracy across your entire display.',
    category: 'screen-state',
    primaryQuery: 'screen colour cycle',
    related: ['dead-pixel-test', 'stuck-pixel-fixer', 'red-screen', 'gradient-banding-test'],
  },
  {
    slug: 'gradient-banding-test',
    name: 'Gradient Banding Test',
    shortDescription: 'Smooth gradients that reveal colour banding and tone compression on your display.',
    metaTitle: 'Gradient Banding Test: Free Monitor Test Online',
    metaDesc: 'Display smooth colour gradients to check your monitor for banding, tone compression, and bit-depth issues. Free online test, no download required.',
    category: 'visual-test',
    primaryQuery: 'gradient banding test',
    related: ['gamma-calibration-check', 'contrast-black-level-test', 'white-saturation-test', 'grey-screen'],
  },
  {
    slug: 'backlight-bleed-test',
    name: 'Backlight Bleed Test',
    shortDescription: 'Use a black panel in a dark room to reveal backlight bleed around screen edges.',
    metaTitle: 'Backlight Bleed Test: Free Online Monitor Check',
    metaDesc: 'Test your monitor for backlight bleed and IPS glow using a fullscreen black panel. Best performed in a dark room. Free online tool, no install.',
    category: 'visual-test',
    primaryQuery: 'backlight bleed test',
    related: ['black-screen', 'ips-glow-test', 'screen-clean-mode', 'contrast-black-level-test'],
  },
  {
    slug: 'ips-glow-test',
    name: 'IPS Glow Test',
    shortDescription: 'Distinguish IPS glow from backlight bleed using dark test patterns.',
    metaTitle: 'IPS Glow Test: Check Your Monitor Online Free',
    metaDesc: 'Use this online test to tell the difference between IPS glow and backlight bleed on your monitor. Free browser-based tool, no download needed.',
    category: 'visual-test',
    primaryQuery: 'ips glow test',
    related: ['backlight-bleed-test', 'black-screen', 'contrast-black-level-test', 'viewing-angle-test'],
  },
  {
    slug: 'contrast-black-level-test',
    name: 'Contrast Black Level Test',
    shortDescription: 'Near-black step patterns to check shadow detail and black level separation.',
    metaTitle: 'Black Level Test: Monitor Contrast Check Online',
    metaDesc: 'Check your monitor\'s black level and shadow detail with near-black step patterns. Reveals crushed blacks and poor contrast. Free online test.',
    category: 'visual-test',
    primaryQuery: 'black level test monitor',
    related: ['white-saturation-test', 'gamma-calibration-check', 'backlight-bleed-test', 'gradient-banding-test'],
  },
  {
    slug: 'white-saturation-test',
    name: 'White Saturation Test',
    shortDescription: 'Near-white step patterns to check highlight detail and white level separation.',
    metaTitle: 'White Saturation Test: Monitor Highlight Check Online',
    metaDesc: 'Test your monitor\'s white saturation and highlight detail with near-white step patterns. Check if your display clips highlights. Free online.',
    category: 'visual-test',
    primaryQuery: 'white saturation test',
    related: ['contrast-black-level-test', 'gamma-calibration-check', 'gradient-banding-test', 'white-screen'],
  },
  {
    slug: 'gamma-calibration-check',
    name: 'Gamma Calibration Check',
    shortDescription: 'Gamma patterns to estimate your display\'s gamma accuracy without hardware.',
    metaTitle: 'Gamma Test Online: Free Monitor Calibration Check',
    metaDesc: 'Check your monitor\'s gamma accuracy using standard gamma test patterns. Estimate display gamma without a colorimeter. Free online tool.',
    category: 'visual-test',
    primaryQuery: 'gamma test online',
    related: ['contrast-black-level-test', 'gradient-banding-test', 'refresh-rate-checker', 'white-saturation-test'],
  },
  {
    slug: 'sharpness-focus-chart',
    name: 'Sharpness Focus Chart',
    shortDescription: 'Fine lines and text patterns to reveal softness, oversharpening, or scaling issues.',
    metaTitle: 'Monitor Sharpness Test: Focus Chart Online Free',
    metaDesc: 'Test your monitor\'s sharpness and focus using fine line patterns and text charts. Detect over-sharpening and softness. Free online monitor test.',
    category: 'visual-test',
    primaryQuery: 'monitor sharpness test',
    related: ['moire-pattern-test', 'resolution-checker', 'screen-uniformity-test', 'viewing-angle-test'],
  },
  {
    slug: 'moire-pattern-test',
    name: 'Moire Pattern Test',
    shortDescription: 'Line patterns to reveal moire, aliasing, or pixel scaling artefacts.',
    metaTitle: 'Moire Pattern Test: Screen Artefact Check Online',
    metaDesc: 'Detect moire patterns, aliasing, and pixel scaling artefacts on your monitor using line test patterns. Free browser-based screen test.',
    category: 'visual-test',
    primaryQuery: 'moire test screen',
    related: ['sharpness-focus-chart', 'screen-uniformity-test', 'resolution-checker', 'viewing-angle-test'],
  },
  {
    slug: 'screen-uniformity-test',
    name: 'Screen Uniformity Test',
    shortDescription: 'Spot dirty screen effect and patchy brightness across your display.',
    metaTitle: 'Screen Uniformity Test: DSE Check Online Free',
    metaDesc: 'Test your monitor for dirty screen effect, uneven brightness, and backlight uniformity issues using solid colour panels. Free online tool.',
    category: 'visual-test',
    primaryQuery: 'screen uniformity test',
    related: ['grey-screen', 'white-screen', 'backlight-bleed-test', 'viewing-angle-test'],
  },
  {
    slug: 'viewing-angle-test',
    name: 'Viewing Angle Test',
    shortDescription: 'Patterns that make colour and contrast shift easy to spot at different angles.',
    metaTitle: 'Viewing Angle Test: Monitor Panel Check Online',
    metaDesc: 'Check your monitor\'s viewing angles using test patterns designed to show colour and contrast shift. Useful for IPS, TN, and VA panel comparison.',
    category: 'visual-test',
    primaryQuery: 'viewing angle test monitor',
    related: ['ips-glow-test', 'screen-uniformity-test', 'contrast-black-level-test', 'sharpness-focus-chart'],
  },
  {
    slug: 'refresh-rate-checker',
    name: 'Refresh Rate Checker',
    shortDescription: 'Reads and displays the actual refresh rate your browser sees.',
    metaTitle: 'Refresh Rate Checker: Test Your Monitor Hz Online',
    metaDesc: 'Check your monitor\'s actual refresh rate directly in your browser. Instantly shows the Hz your display is running at. Free, no download needed.',
    category: 'checker',
    primaryQuery: 'refresh rate checker',
    related: ['resolution-checker', 'gamma-calibration-check', 'dead-pixel-test', 'screen-uniformity-test'],
  },
  {
    slug: 'resolution-checker',
    name: 'Resolution and Aspect Checker',
    shortDescription: 'Reports your screen resolution, aspect ratio, and pixel density.',
    metaTitle: 'Screen Resolution Checker: Check Monitor Resolution',
    metaDesc: 'Check your screen resolution, aspect ratio, and pixel density instantly in your browser. Free online tool, works on any device or monitor.',
    category: 'checker',
    primaryQuery: 'screen resolution checker',
    related: ['refresh-rate-checker', 'sharpness-focus-chart', 'moire-pattern-test', 'viewing-angle-test'],
  },
  {
    slug: 'image-retention-test',
    name: 'Image Retention Test',
    shortDescription: 'Check for image retention or burn-in on your OLED or LCD display.',
    metaTitle: 'Image Retention Test: Burn In Check Online Free',
    metaDesc: 'Test your OLED or LCD monitor for image retention and burn-in using high-contrast patterns. Free browser-based screen test, no download.',
    category: 'visual-test',
    primaryQuery: 'burn in test screen',
    related: ['stuck-pixel-fixer', 'dead-pixel-test', 'fullscreen-colour-cycle', 'contrast-black-level-test'],
  },
  {
    slug: 'screen-clean-mode',
    name: 'Screen Clean Mode',
    shortDescription: 'Lock your display on a plain panel so you can safely clean your screen.',
    metaTitle: 'Screen Clean Mode: Safe Monitor Cleaning Tool',
    metaDesc: 'Lock your monitor to a plain panel to clean it safely without accidental clicks or inputs. Free online screen cleaning mode, no install needed.',
    category: 'checker',
    primaryQuery: 'clean screen mode',
    related: ['white-screen', 'black-screen', 'backlight-bleed-test', 'screen-uniformity-test'],
  },
  {
    slug: 'motion-blur-test',
    name: 'Motion Blur Test',
    shortDescription: 'A moving bar that reveals ghosting, smearing, and pixel response on your display.',
    metaTitle: 'Motion Blur Test: Check Monitor Ghosting Online',
    metaDesc: 'Test your monitor for motion blur, ghosting, and pixel response time using a moving bar at adjustable speed. Free online tool, no download required.',
    category: 'visual-test',
    primaryQuery: 'motion blur test monitor',
    related: ['refresh-rate-checker', 'image-retention-test', 'contrast-black-level-test', 'viewing-angle-test'],
  },
  {
    slug: 'input-lag-test',
    name: 'Input Lag Test',
    shortDescription: 'Measure your visual reaction time and estimate display input lag with a click test.',
    metaTitle: 'Input Lag Test: Reaction Time Check Online',
    metaDesc: 'Test display input lag and reaction time by clicking as fast as possible after a colour change stimulus. Free online tool, no download required.',
    category: 'checker',
    primaryQuery: 'input lag test online',
    related: ['refresh-rate-checker', 'motion-blur-test', 'resolution-checker', 'gamma-calibration-check'],
  },
  {
    slug: 'pwm-flicker-test',
    name: 'PWM Flicker Test',
    shortDescription: 'Visualise backlight PWM flicker and compare flickering vs steady light panels.',
    metaTitle: 'PWM Flicker Test: Backlight Flicker Check Online',
    metaDesc: 'Test for PWM backlight flicker on your monitor. Visualise flickering vs steady reference panels and learn how to detect PWM with a camera. Free online tool.',
    category: 'visual-test',
    primaryQuery: 'PWM flicker test monitor',
    related: ['refresh-rate-checker', 'motion-blur-test', 'contrast-black-level-test', 'image-retention-test'],
  },
  {
    slug: 'colour-temperature-test',
    name: 'Colour Temperature Test',
    shortDescription: 'Identify colour tinting on your display by finding which white looks neutral to you.',
    metaTitle: 'Colour Temperature Test: Monitor White Balance Check',
    metaDesc: 'Check your monitor colour temperature and white balance by selecting which white tone looks most neutral. Compare against the D65 standard. Free online tool.',
    category: 'visual-test',
    primaryQuery: 'monitor colour temperature test',
    related: ['gamma-calibration-check', 'white-saturation-test', 'gradient-banding-test', 'screen-uniformity-test'],
  },
  {
    slug: 'black-smear-test',
    name: 'Black Smear Test',
    shortDescription: 'Slow dark objects on a dark background to reveal VA panel dark-to-dark ghosting.',
    metaTitle: 'Black Smear Test: VA Panel Ghosting Check Online',
    metaDesc: 'Test your VA monitor for black smear and dark-to-dark ghosting using slow dark objects on a dark background. Adjustable speed and contrast. Free online tool.',
    category: 'visual-test',
    primaryQuery: 'VA panel black smear test',
    related: ['motion-blur-test', 'contrast-black-level-test', 'backlight-bleed-test', 'image-retention-test'],
  },
  {
    slug: 'overdrive-test',
    name: 'Overdrive Test',
    shortDescription: 'High-speed moving bars to reveal inverse ghosting and haloing from monitor overdrive.',
    metaTitle: 'Overdrive Test: Inverse Ghosting Check Online',
    metaDesc: 'Test your monitor overdrive for inverse ghosting, coronas, and haloing using fast-moving high-contrast bars. Free online tool, no download required.',
    category: 'visual-test',
    primaryQuery: 'monitor overdrive test inverse ghosting',
    related: ['motion-blur-test', 'black-smear-test', 'refresh-rate-checker', 'contrast-black-level-test'],
  },
  {
    slug: 'hdr-test',
    name: 'HDR Test',
    shortDescription: 'Detect browser HDR and wide colour gamut support and evaluate peak brightness range.',
    metaTitle: 'HDR Monitor Test: Check HDR Support Online',
    metaDesc: 'Test whether your monitor and browser support HDR. Detects dynamic range and colour gamut capability, and displays brightness step ramps for evaluation. Free online tool.',
    category: 'checker',
    primaryQuery: 'HDR monitor test online',
    related: ['contrast-black-level-test', 'white-saturation-test', 'gamma-calibration-check', 'refresh-rate-checker'],
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getRelatedTools(slug: string): Tool[] {
  const tool = getToolBySlug(slug)
  if (!tool) return []
  return tool.related
    .map((s) => getToolBySlug(s))
    .filter((t): t is Tool => t !== undefined)
    .slice(0, 4)
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category)
}

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
