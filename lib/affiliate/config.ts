export const STORE_ID = 'snapcalc-20'

export function buildAmazonSearchUrl(query: string): string {
  const params = new URLSearchParams({ k: query, tag: STORE_ID })
  return `https://www.amazon.com/s?${params.toString()}`
}

export const TOOL_AMAZON_SEARCH_TERMS: Record<string, string[]> = {
  'dead-pixel-test': ['replacement monitor screen', 'monitor extended warranty plan', 'pixel defect laptop screen replacement'],
  'stuck-pixel-fixer': ['LCD screen repair kit', 'laptop screen replacement panel', 'monitor pixel repair tool'],
  'white-screen': ['microfiber monitor cleaning cloth', 'screen cleaning kit', 'monitor anti-glare screen protector'],
  'black-screen': ['anti-glare monitor hood', 'monitor privacy filter', 'room darkening blackout curtains'],
  'red-screen': ['colorimeter monitor calibration device', 'color accurate monitor', 'display color profiling tool'],
  'green-screen': ['wide color gamut monitor', 'color accurate display for photography', 'display color profiling tool'],
  'blue-screen': ['blue light blocking glasses', 'monitor blue light filter screen', 'computer eye protection glasses'],
  'grey-screen': ['monitor calibration kit', 'display gray card', 'screen uniformity calibration tool'],
  'yellow-screen': ['color accurate monitor for design', 'display calibration hardware', 'monitor color grading'],
  'pink-screen': ['color accurate IPS monitor', 'screen calibration kit', 'display color checker'],
  'fullscreen-colour-cycle': ['monitor calibration colorimeter', 'display test pattern software', 'color accurate monitor'],
  'gradient-banding-test': ['10-bit color depth monitor', 'wide gamut monitor upgrade', 'monitor gradient banding fix'],
  'backlight-bleed-test': ['OLED monitor no backlight bleed', 'VA panel monitor low bleed', 'IPS anti-bleed monitor'],
  'ips-glow-test': ['VA panel monitor upgrade', 'OLED monitor upgrade no glow', 'IPS anti-glare monitor'],
  'contrast-black-level-test': ['high contrast ratio monitor', 'OLED deep black display', 'VA panel high contrast monitor'],
  'white-saturation-test': ['HDR monitor for photography', '10-bit color monitor', 'wide gamut display upgrade'],
  'gamma-calibration-check': ['Datacolor SpyderX colorimeter', 'X-Rite i1Display calibration', 'monitor calibration software'],
  'sharpness-focus-chart': ['4K monitor 27 inch', 'high DPI monitor fine text', 'pixel perfect monitor upgrade'],
  'moire-pattern-test': ['high DPI monitor no moire', 'pixel perfect IPS display', 'anti-aliasing monitor upgrade'],
  'screen-uniformity-test': ['professional monitor uniform brightness', 'monitor anti-glare hood', 'display uniformity calibration'],
  'viewing-angle-test': ['IPS wide viewing angle monitor', 'ultrawide curved IPS monitor', 'wide viewing angle display'],
  'refresh-rate-checker': ['144Hz gaming monitor affordable', '240Hz competitive gaming display', 'high refresh rate monitor'],
  'resolution-checker': ['4K monitor upgrade 27 inch', 'ultrawide 1440p monitor', 'high resolution USB-C display'],
  'image-retention-test': ['OLED screen protector', 'OLED anti burn-in screensaver app', 'OLED display upgrade'],
  'screen-clean-mode': ['monitor screen cleaning kit', 'microfiber cleaning cloth for screens', 'LCD screen cleaner spray'],
  'motion-blur-test': ['1ms response time gaming monitor', '144Hz motion blur reduction monitor', 'gaming display upgrade'],
  'input-lag-test': ['low input lag gaming monitor', '1ms gaming monitor', 'high speed gaming HDMI cable'],
  'pwm-flicker-test': ['flicker-free monitor DC dimming', 'eye comfort anti-flicker display', 'PWM-free monitor'],
  'colour-temperature-test': ['monitor white balance calibration tool', 'D65 color temperature light box', 'display color temperature kit'],
  'black-smear-test': ['VA panel curved gaming monitor', 'best VA panel gaming monitor', 'curved VA 144Hz monitor'],
  'overdrive-test': ['gaming monitor low inverse ghosting', 'HDMI 2.1 high refresh gaming monitor', 'monitor overdrive guide'],
  'hdr-test': ['HDR gaming monitor affordable', 'HDR True Black OLED display', 'HDR400 monitor upgrade'],
}
