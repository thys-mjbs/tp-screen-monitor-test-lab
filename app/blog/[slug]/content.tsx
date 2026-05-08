import type { FC } from 'react'

type PostContent = FC

// ─── 1. Dead Pixels ──────────────────────────────────────────────────────────

function DeadPixelPost() {
  return (
    <>
      <p>
        Dead pixels are one of the most common display defects, and detecting them early is important
        because many monitor warranties have a pixel defect policy with a time limit after purchase.
        A few minutes of testing with solid-colour fullscreen panels can reveal problems that are
        invisible during normal computer use.
      </p>

      <h2 className="text-lg font-bold text-fg">Types of pixel defects</h2>
      <p>
        Not all pixel defects are the same. A <strong className="text-fg">dead pixel</strong> is
        one that receives no signal and stays permanently off, appearing as a black dot on any
        background colour. A <strong className="text-fg">stuck pixel</strong> is one whose subpixels
        are locked on at full brightness, appearing as a persistent bright dot in red, green, blue,
        or white. A <strong className="text-fg">hot pixel</strong> behaves like a stuck pixel but
        always displays white regardless of the signal. Dead pixels are generally not repairable;
        stuck pixels sometimes can be freed with rapid colour cycling.
      </p>

      <h2 className="text-lg font-bold text-fg">How to perform the test</h2>
      <p>
        The most effective method is to fill your entire display with a single solid colour in
        fullscreen mode and scan every area of the panel methodically. You need to test at minimum
        five colours: white, black, red, green, and blue. White reveals dead (black) pixels. Black
        reveals stuck or hot (bright) pixels. Red, green, and blue reveal subpixel defects that
        may not be visible on white or black alone.
      </p>
      <p>
        Use the Dead Pixel Test tool on this site for a structured cycle through all test colours.
        Enter fullscreen, then move your eyes slowly across every part of the screen from one corner
        to the other. Take your time on each colour. Defects are small and easy to miss at a glance,
        particularly on high-resolution displays where individual pixels are very small.
      </p>

      <h2 className="text-lg font-bold text-fg">Lighting and distance</h2>
      <p>
        Dim the ambient lighting in your room before testing. Backlight bleed and glare from overhead
        lights can mask subtle pixel defects. Sit at your normal viewing distance and avoid tilting
        the screen or viewing at extreme angles, which can also hide or create false appearances.
        If you notice what looks like a stuck pixel, test it on multiple solid colours before
        concluding it is a defect rather than dust on the screen surface.
      </p>

      <h2 className="text-lg font-bold text-fg">Warranty and returns</h2>
      <p>
        Most monitor manufacturers use an ISO 13406-2 or similar standard to classify acceptable
        pixel defects. Under these standards, a small number of defective pixels is permitted
        even in new monitors. The acceptable threshold varies by class and manufacturer. If you
        find a defect, check your warranty documentation immediately. Many retailers have a
        strict return window, sometimes as short as seven to fourteen days, for defective pixel
        claims on new monitors.
      </p>
      <p>
        Document your findings with photographs taken at the correct angle before contacting
        the retailer or manufacturer. A photo taken straight-on at the panel surface in a
        dimly lit room is most useful for warranty purposes.
      </p>

      <h2 className="text-lg font-bold text-fg">Testing an existing monitor</h2>
      <p>
        Pixel tests are not only useful on new monitors. If you notice an unusual spot during
        normal use, a full dead pixel test confirms whether it is a pixel defect, dust on the
        screen, or a software artefact. Running the test periodically is also useful before
        selling a second-hand monitor, as it gives buyers confidence in the panel condition.
      </p>
    </>
  )
}

// ─── 2. Backlight Bleed ──────────────────────────────────────────────────────

function BacklightBleedPost() {
  return (
    <>
      <p>
        Backlight bleed is one of the most searched monitor defects, and it is also one of the
        most misunderstood. Some degree of backlight bleed is present in virtually every LCD
        monitor. The question is not whether it exists, but whether it is severe enough to affect
        your actual use of the display.
      </p>

      <h2 className="text-lg font-bold text-fg">What causes backlight bleed</h2>
      <p>
        LCD panels work by shining a backlight through a liquid crystal layer that controls how
        much light passes. The backlight itself is a uniform source behind the panel, and the
        LCD layer acts as a gating mechanism. Because the backlighting chassis and the panel
        edges are physically imprecise at manufacturing tolerances, light leaks around the edges
        where the bezel meets the panel. This is backlight bleed: light that bypasses the
        intended blocking and passes through the panel even when the LCD layer is trying to
        display black.
      </p>

      <h2 className="text-lg font-bold text-fg">IPS glow versus backlight bleed</h2>
      <p>
        Backlight bleed is sometimes confused with IPS glow, but they are different phenomena.
        Backlight bleed is an edge defect caused by light leaking at the panel borders. It
        appears as bright patches near the corners and edges of the screen when displaying
        black content. IPS glow is an inherent characteristic of IPS panel technology where
        the viewing angle sensitivity of the liquid crystal layer causes a misty, golden or
        yellowish glow visible at off-axis viewing positions. IPS glow is present on all IPS
        panels to some degree and is not a defect. Backlight bleed is a manufacturing variance
        that ranges from negligible to significant.
      </p>

      <h2 className="text-lg font-bold text-fg">How to test for backlight bleed</h2>
      <p>
        The backlight bleed test is simple but requires the right conditions. Turn off all lights
        in the room and wait for your eyes to adjust to low ambient light. Open the Backlight
        Bleed Test tool on this site and display a solid black fullscreen panel. View the screen
        head-on from your normal seated distance. Bright patches or glowing areas near the edges
        and corners that are visible on the solid black background are backlight bleed.
      </p>
      <p>
        Importantly, do not test with room lights on, as overhead reflections and ambient light
        mixing with the screen will give misleading results. Also ensure your screen is clean
        before testing; smudges can scatter light and look similar to bleed.
      </p>

      <h2 className="text-lg font-bold text-fg">Is your backlight bleed acceptable?</h2>
      <p>
        Some bleed is nearly invisible in actual use and only apparent in a darkened room during
        a dedicated test. Severe bleed that appears during dark scenes in movies or games, or
        that is clearly visible from your normal viewing distance with the room lights on, is
        worth pursuing under warranty.
      </p>
      <p>
        The practical test is to watch dark film content in your normal viewing environment.
        If you notice the bleed during actual use, it is affecting your experience. If you
        only see it during a dedicated black-screen test in a pitch-dark room, it is unlikely
        to impact your daily use.
      </p>

      <h2 className="text-lg font-bold text-fg">VA panels and OLED</h2>
      <p>
        VA panels typically have lower backlight bleed than IPS due to their higher native
        contrast ratio and better light blocking when displaying black. OLED panels have no
        backlight at all; each pixel produces its own light and turns off completely when
        displaying black, so backlight bleed is impossible on OLED. If backlight bleed is
        a concern for your use case, VA or OLED panels are the better choice.
      </p>
    </>
  )
}

// ─── 3. Refresh Rate ─────────────────────────────────────────────────────────

function RefreshRatePost() {
  return (
    <>
      <p>
        Refresh rate is one of the most marketed specifications in the monitor industry, and
        also one of the most practically important for certain uses. Understanding what refresh
        rate actually does, and how to verify what your monitor is running at, is essential
        before spending money on an upgrade.
      </p>

      <h2 className="text-lg font-bold text-fg">What refresh rate means</h2>
      <p>
        Refresh rate, measured in Hertz (Hz), is the number of times per second your monitor
        redraws the image on screen. At 60 Hz, the display updates 60 times per second. At
        144 Hz, it updates 144 times per second. A higher refresh rate means the display can
        show more unique frames per second, which produces smoother motion in anything that
        moves: games, scrolling, video, cursor movement, and animations.
      </p>
      <p>
        The refresh rate of the monitor is a hardware property of the panel. However, for
        the benefit to be visible, your computer also needs to be producing frames at or above
        that rate. A 144 Hz monitor running a game at 40 frames per second looks no different
        from a 60 Hz monitor in terms of motion smoothness, because the GPU is the bottleneck.
      </p>

      <h2 className="text-lg font-bold text-fg">How to check your actual refresh rate</h2>
      <p>
        Your monitor may be rated at 144 Hz but actually running at 60 Hz due to settings
        or cable limitations. The Refresh Rate Checker on this site measures the actual frame
        rate your browser is using, which reflects the real operating refresh rate, not the
        hardware maximum.
      </p>
      <p>
        The most common reason a high-refresh monitor runs at 60 Hz is a wrong operating
        system setting. On Windows, right-click the desktop, select Display Settings, then
        Advanced Display Settings, and check the refresh rate dropdown. On macOS, go to
        System Settings and then Displays. Always set this to the highest value your monitor
        supports.
      </p>

      <h2 className="text-lg font-bold text-fg">Cable bandwidth limitations</h2>
      <p>
        The cable connecting your monitor to your computer also limits the refresh rate. HDMI 1.4,
        which ships with many monitors, cannot carry 1920x1080 at 144 Hz or 2560x1440 at any
        high refresh rate. HDMI 2.0 supports 1440p at 144 Hz. DisplayPort 1.2 supports 1440p
        at 165 Hz. DisplayPort 1.4 supports 4K at 144 Hz. If your monitor shows 60 Hz despite
        correct OS settings, try a different cable first.
      </p>

      <h2 className="text-lg font-bold text-fg">60 Hz vs 120 Hz vs 144 Hz in practice</h2>
      <p>
        The jump from 60 Hz to 120 Hz or 144 Hz is clearly perceptible to most users, particularly
        in mouse movement smoothness and game motion. Text scrolling and UI animations feel
        noticeably more fluid. Most users who use a 144 Hz monitor for a week report that
        returning to 60 Hz feels visibly choppy.
      </p>
      <p>
        The jump from 144 Hz to 240 Hz is smaller in perceptual terms, though competitive gamers
        benefit from the reduced display latency. Going above 240 Hz provides marginal additional
        benefit for most users. For content consumption and general productivity, 60 Hz is
        completely functional; 120 Hz or 144 Hz is a meaningful upgrade for games and fast scrolling.
      </p>

      <h2 className="text-lg font-bold text-fg">Adaptive sync: VSync, G-Sync, FreeSync</h2>
      <p>
        At a fixed refresh rate, if your GPU produces fewer frames than the monitor&apos;s refresh
        rate, you may see screen tearing or stuttering. Adaptive sync technologies (G-Sync from
        NVIDIA, FreeSync from AMD) dynamically adjust the monitor&apos;s refresh rate to match the
        GPU&apos;s output within a supported range, eliminating both tearing and the input latency
        of traditional VSync. If you are buying a high-refresh monitor for gaming, adaptive
        sync support is worth prioritising.
      </p>
    </>
  )
}

// ─── 4. Stuck Pixels ─────────────────────────────────────────────────────────

function StuckPixelsPost() {
  return (
    <>
      <p>
        Stuck pixels are one of the more frustrating display defects because they sit right at
        the boundary of what is and is not repairable. Understanding the mechanism behind them
        helps set realistic expectations before attempting any fix.
      </p>

      <h2 className="text-lg font-bold text-fg">Dead pixels versus stuck pixels</h2>
      <p>
        The two terms are often used interchangeably but refer to different failures. A dead
        pixel has lost its ability to receive or respond to a signal. The transistor that
        drives it has failed, leaving it permanently off. This appears as a black dot on any
        background colour and cannot be repaired by any software method.
      </p>
      <p>
        A stuck pixel has a functional transistor but one or more of its red, green, or blue
        subpixels is locked in a fixed state. The pixel is receiving power and signal but
        not responding correctly. Stuck pixels appear as bright coloured dots (red, green,
        blue, white, cyan, magenta, or yellow, depending on which subpixels are stuck) against
        any background. Because the underlying transistor is functional, there is some chance
        that the stuck state can be disrupted.
      </p>

      <h2 className="text-lg font-bold text-fg">Why pixels get stuck</h2>
      <p>
        LCD subpixels are controlled by liquid crystal molecules that rotate in response to
        an electric field. In a stuck pixel, the liquid crystal material in a subpixel has
        become immobile, typically due to manufacturing variance, physical pressure, or
        prolonged display of static content. The molecules are no longer rotating with the
        signal, which is why the pixel stays at a fixed state.
      </p>

      <h2 className="text-lg font-bold text-fg">How rapid colour cycling works</h2>
      <p>
        The theory behind stuck pixel fixers is that rapidly alternating the voltage applied
        to the stuck liquid crystal molecules may generate enough agitation to break the
        molecules free from their locked position and restore normal responsiveness. The
        technique involves cycling through red, green, blue, white, and black at very high
        speed, typically several times per second, over the affected area.
      </p>
      <p>
        The Stuck Pixel Fixer on this site does exactly this. You position a target area
        over the stuck pixel and run the cycling for a period of time. Recommended durations
        range from 10 minutes to a few hours for persistent stuck pixels. Some users also
        report success with gentle pressure applied through a soft cloth, though this carries
        risk of creating pressure marks on LCD panels and should be done with caution.
      </p>

      <h2 className="text-lg font-bold text-fg">Success rates and realistic expectations</h2>
      <p>
        There is no reliable data on the success rate of stuck pixel cycling techniques, as
        outcomes depend heavily on the specific failure mode, panel type, and how long the
        pixel has been stuck. Anecdotally, pixels that have been stuck for a short time on
        IPS panels respond more often than those that have been stuck for months on older
        panels. Dead pixels, as described above, will not respond to this technique.
      </p>
      <p>
        If cycling does not work after several hours, the pixel is likely dead rather than
        stuck, or the specific failure mode does not respond to this technique. At that point,
        the appropriate next step is a warranty claim if the monitor is still within its
        warranty period.
      </p>

      <h2 className="text-lg font-bold text-fg">Image retention and burn-in</h2>
      <p>
        Image retention is a related but distinct issue. It occurs when a static image
        displayed for a long period leaves a temporary ghost on the panel. This is common
        on IPS panels and is usually temporary. Prolonged static content can cause permanent
        burn-in on OLED displays. The Image Retention Test on this site helps identify
        whether ghost images are present on your panel.
      </p>
    </>
  )
}

// ─── 5. Panel Types ──────────────────────────────────────────────────────────

function PanelTypesPost() {
  return (
    <>
      <p>
        The panel technology in a monitor affects almost every visual characteristic: contrast,
        colour accuracy, viewing angle, response time, and price. Understanding the practical
        differences helps you choose the right monitor for your use case and interpret your
        test results accurately.
      </p>

      <h2 className="text-lg font-bold text-fg">IPS panels</h2>
      <p>
        In-Plane Switching (IPS) panels align liquid crystals horizontally, which produces wide
        viewing angles with consistent colour reproduction when viewed from the side. IPS panels
        typically offer the most accurate colour out of LCD panel types, which is why they are
        the standard choice for photo editing, graphic design, and professional colour work.
      </p>
      <p>
        The trade-off is that IPS panels have a lower native contrast ratio than VA panels,
        typically 1000:1, and are susceptible to IPS glow: a misty, golden-tinted glow visible
        near the corners when viewing dark content at off-axis angles. Backlight bleed is also
        more noticeable on IPS than on VA. Modern IPS panels have largely eliminated the slower
        response times that were a previous limitation.
      </p>

      <h2 className="text-lg font-bold text-fg">VA panels</h2>
      <p>
        Vertical Alignment (VA) panels use vertically aligned liquid crystals that provide
        much higher native contrast ratios than IPS, typically 3000:1 to 6000:1. This makes
        VA panels significantly better at displaying deep blacks, particularly in dark room
        gaming and home cinema use. Dark scenes in movies and games look noticeably more
        immersive on a VA panel than on IPS.
      </p>
      <p>
        VA panels have their own characteristic defect: black smearing. Fast-moving dark
        objects leave a visible smear or trail on VA panels due to the slower response time
        of the liquid crystal layer when transitioning between dark states. This is more
        visible in fast-paced games than in typical desktop use. VA panels also have
        narrower viewing angles than IPS.
      </p>

      <h2 className="text-lg font-bold text-fg">OLED panels</h2>
      <p>
        Organic Light-Emitting Diode (OLED) panels produce their own light per pixel, eliminating
        the backlight entirely. Each pixel can turn off completely when displaying black, producing
        a true contrast ratio that is theoretically infinite. OLED panels have outstanding colour
        accuracy, wide viewing angles, and extremely fast response times with no smearing.
      </p>
      <p>
        The primary disadvantage is the risk of permanent burn-in from static content displayed
        for long periods. OLED monitors are best suited to varied content rather than workloads
        with persistent UI elements like desktop taskbars. OLED panels are also more expensive
        and, in monitor sizes, relatively new to the market. Because OLED pixels emit their own
        light, the backlight bleed and IPS glow tests that apply to LCD panels are not relevant
        to OLED.
      </p>

      <h2 className="text-lg font-bold text-fg">Which panel type to choose</h2>
      <p>
        For colour-accurate work, IPS remains the professional standard. For dark room gaming
        and cinema, VA panels offer the best contrast without the burn-in risk of OLED. For
        the highest performance gaming with the best visual quality and money is not a
        constraint, OLED provides the best combination of response time, contrast, and colour.
        For general office work and productivity, any panel type is suitable at the relevant
        price point.
      </p>
    </>
  )
}

// ─── 6. Resolution and DPI ───────────────────────────────────────────────────

function ResolutionPost() {
  return (
    <>
      <p>
        Resolution, pixel density, and scaling are frequently confused with each other. The
        same resolution can look completely different on two different monitors, and a lower
        resolution can look sharper than a higher one depending on the panel size. Understanding
        how these factors interact helps you make sense of what the Resolution Checker reports.
      </p>

      <h2 className="text-lg font-bold text-fg">Screen resolution: CSS pixels</h2>
      <p>
        When you look at your operating system or browser display settings, the resolution
        shown is expressed in logical or CSS pixels. This is the coordinate space your
        applications use. On a standard display, one CSS pixel corresponds to one physical
        hardware pixel on the panel. On a HiDPI or Retina display, the operating system
        scales the interface so that one CSS pixel corresponds to two or more physical pixels.
      </p>
      <p>
        This scaling exists so that interface elements remain at a comfortable physical size
        on high-density panels. Without it, a 4K monitor in a 15-inch laptop would display
        text and icons at a fraction of their normal size and be unusable. The Resolution
        Checker shows both the CSS pixel resolution and the physical pixel count derived
        from the device pixel ratio.
      </p>

      <h2 className="text-lg font-bold text-fg">Device pixel ratio (DPR)</h2>
      <p>
        The device pixel ratio is the multiplier between CSS pixels and physical pixels. A
        DPR of 1 means standard density: one CSS pixel per physical pixel. A DPR of 2 means
        each CSS pixel is backed by a 2x2 grid of physical pixels, which is the Retina
        standard on Apple displays. A DPR of 1.5 or 1.25 is common on Windows laptops
        where the OS applies fractional scaling.
      </p>
      <p>
        DPR affects how web images and graphics are displayed. Images served without a
        high-DPR version appear blurry on Retina displays. Properly responsive images and
        vector graphics remain sharp at any DPR. Web developers use DPR to determine which
        image resolution to serve to each device.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels per inch and perceived sharpness</h2>
      <p>
        Pixels per inch (PPI) measures how many pixels fit in one inch of the panel surface.
        A higher PPI means smaller individual pixels and therefore finer detail. A 1920x1080
        panel at 24 inches has approximately 92 PPI. The same resolution at 27 inches has
        approximately 82 PPI. A 2560x1440 panel at 27 inches has approximately 109 PPI.
      </p>
      <p>
        For desktop monitors viewed at typical arm&apos;s length (60 to 80 cm), approximately
        95 to 110 PPI is the point at which individual pixels become difficult to distinguish
        under normal viewing conditions. Above 140 PPI, additional density provides little
        visible benefit at normal viewing distances.
      </p>

      <h2 className="text-lg font-bold text-fg">Native resolution and scaling</h2>
      <p>
        Every panel has a native resolution, which is the physical pixel count it was manufactured
        with. Running a display at its native resolution produces the sharpest image. Running at
        a lower resolution, or at a scaled resolution via operating system DPI settings, applies
        interpolation that can reduce sharpness. For the best image quality, always run your
        monitor at its native resolution and use operating system scaling for interface size
        rather than running at a non-native resolution.
      </p>
    </>
  )
}

// ─── 7. Gamma ────────────────────────────────────────────────────────────────

function GammaPost() {
  return (
    <>
      <p>
        Gamma is one of the fundamental properties of display calibration and one of the most
        frequently misunderstood. Incorrect gamma makes images look flat and washed out, or
        excessively dark with crushed shadow detail. Testing your monitor&apos;s gamma does not
        require expensive calibration hardware.
      </p>

      <h2 className="text-lg font-bold text-fg">What gamma is</h2>
      <p>
        Gamma describes the relationship between the numerical value of a pixel in an image file
        and the brightness the display produces for that pixel. It is expressed as an exponent in
        a power curve. A gamma of 2.2 means that a pixel value of 128 (halfway between 0 and 255)
        should produce approximately 22% of the maximum display brightness, not 50%. This non-linear
        curve mimics how human vision perceives brightness differences.
      </p>
      <p>
        The sRGB colour standard, which governs most consumer monitors and most digital images,
        targets an overall gamma of approximately 2.2. Professional displays are sometimes set
        to 2.4 for cinema and broadcast work. A display running at gamma 1.8 will appear
        washed out and overly bright. A display at gamma 2.6 will appear too dark with detail
        lost in shadows.
      </p>

      <h2 className="text-lg font-bold text-fg">How to test gamma without hardware</h2>
      <p>
        The Gamma Calibration Check on this site uses a technique called checkerboard dithering.
        A 50% black-white checkerboard pattern, when viewed from a slight distance, appears as
        a uniform mid-grey tone. The brightness of that apparent grey corresponds to what the
        display is doing at the 50% checkerboard level. By placing a solid grey reference
        swatch next to the dithered pattern, you can compare whether your display is rendering
        the mid-tone correctly for a given gamma target.
      </p>
      <p>
        The tool provides four reference greys corresponding to gamma values of 1.8, 2.0, 2.2,
        and 2.4. The grey swatch that most closely matches the apparent brightness of the
        checkerboard pattern indicates your monitor&apos;s approximate gamma setting.
      </p>

      <h2 className="text-lg font-bold text-fg">Correcting gamma</h2>
      <p>
        If your monitor&apos;s gamma appears too high or too low, the first step is to check the
        monitor&apos;s own on-screen display menu. Many monitors include a gamma setting directly
        in their image controls, often preset at 1.8, 2.0, 2.2, or 2.4. Set it to 2.2 for
        standard sRGB work. If your monitor does not have a gamma control, your operating
        system&apos;s display calibration tool (Windows Calibrate Display Colour, or macOS Display
        Calibrator Assistant) can apply a software gamma correction through the video card.
      </p>

      <h2 className="text-lg font-bold text-fg">Gamma and gradient banding</h2>
      <p>
        Incorrect gamma can exacerbate gradient banding, where a smooth tonal transition in an
        image shows visible steps rather than a smooth gradation. The Gradient Banding Test on
        this site reveals how well your display handles smooth linear gradients. Significant
        banding on an otherwise correctly configured display may indicate the monitor&apos;s panel
        has limited tonal depth in certain tonal regions.
      </p>
    </>
  )
}

// ─── 8. Screen Uniformity ────────────────────────────────────────────────────

function UniformityPost() {
  return (
    <>
      <p>
        Screen uniformity describes how consistently a monitor reproduces the same colour and
        brightness level across its entire panel surface. Perfect uniformity means a solid grey
        field looks identical from the top-left corner to the bottom-right. In practice, all
        monitors have some degree of non-uniformity; the question is how significant it is for
        your use case.
      </p>

      <h2 className="text-lg font-bold text-fg">What causes uniformity issues</h2>
      <p>
        On LCD monitors, non-uniformity has two primary sources. The first is backlight
        non-uniformity: edge-lit panels use LEDs positioned at the panel borders, and the
        light diffuses across the panel surface. This produces subtle brightness variations,
        typically brighter at the edges where the LEDs are located. Full-array local dimming
        panels have better uniformity because LEDs are distributed across the full back surface.
      </p>
      <p>
        The second source is the LCD panel itself. Variations in liquid crystal alignment,
        polariser coating consistency, and panel manufacturing tolerances create subtle colour
        or brightness variations across the panel surface. A grey field may appear slightly
        cooler (blue-tinted) in one corner and warmer (yellow or orange) in another. This is
        called delta E deviation and is measured in professional display reviews using
        colorimetry equipment.
      </p>

      <h2 className="text-lg font-bold text-fg">How to test screen uniformity</h2>
      <p>
        The Screen Uniformity Test on this site displays a solid grey fullscreen panel across
        three grey tones: dark grey, mid grey, and light grey. Viewing these panels in a
        dimly lit room, scan the screen methodically. Look for areas where the brightness
        appears higher or lower than the surrounding area, or where the tint shifts from
        neutral grey toward blue, yellow, or green.
      </p>
      <p>
        The tool divides the screen into a 3x3 reference grid to help you describe which zone
        of the screen shows variation. This is useful when documenting a warranty claim. Keep
        in mind that uniformity issues are easier to see on mid grey than on dark or light grey,
        because the eye is more sensitive to luminance differences at mid-tones.
      </p>

      <h2 className="text-lg font-bold text-fg">How much non-uniformity is acceptable</h2>
      <p>
        For general office and gaming use, mild brightness variation across the panel that is
        only visible on solid grey test fields is unlikely to affect your experience during
        normal use. For photography, video editing, or any colour-critical work, even moderate
        uniformity variation is significant because it means a colour that looks correct in one
        area of the panel will appear different in another.
      </p>
      <p>
        Professional monitors from certain manufacturers include individual panel uniformity
        calibration data, compensating for measured variations. For critical colour work, this
        feature is worth prioritising over higher resolution or refresh rate.
      </p>

      <h2 className="text-lg font-bold text-fg">Uniformity and screen size</h2>
      <p>
        Uniformity issues scale with screen size. A 27-inch or larger monitor has a longer
        light path from LED to panel centre, giving more opportunity for variation. Ultrawide
        panels are particularly challenging to manufacture with consistent uniformity. If you
        are buying a large monitor for colour-critical work, uniformity test results in
        professional reviews are an important specification to research before purchasing.
      </p>
    </>
  )
}

// ─── 9. How to Clean Your Screen ─────────────────────────────────────────────

function CleaningPost() {
  return (
    <>
      <p>
        Most people clean their monitor screen wrong, and the damage is often not visible
        immediately. The coatings on modern display panels are durable enough for regular
        cleaning but are easily damaged by the wrong materials or technique. Getting this
        right costs nothing extra and preserves your monitor&apos;s image quality for its full
        lifespan.
      </p>

      <h2 className="text-lg font-bold text-fg">The only material you need</h2>
      <p>
        A clean, dry microfibre cloth is all that is needed for routine monitor cleaning.
        Microfibre cloths use fibres that are thinner than human hair, which means they
        lift dust and oils from the surface without scratching or smearing. The same cloths
        used for eyeglasses are appropriate for monitors. Do not use paper towels, tissues,
        old cotton T-shirts, or any rough fabric. These materials contain abrasive fibres
        that will permanently scratch anti-reflective and anti-glare coatings over time.
      </p>

      <h2 className="text-lg font-bold text-fg">Liquids and solvents to avoid</h2>
      <p>
        Never spray any liquid directly onto a monitor screen. Liquid entering the bezel edge
        can penetrate the panel assembly and cause permanent internal damage. If you need a
        liquid, apply a very small amount of distilled water to the cloth, not the screen,
        and ensure the cloth is only slightly damp before wiping.
      </p>
      <p>
        Avoid all of the following on any monitor panel: glass cleaner, household multi-surface
        spray, alcohol, ammonia, acetone, bleach, or any product marketed for cleaning windows
        or hard surfaces. These solvents strip the panel coatings that provide anti-glare and
        anti-reflective properties, leaving the screen permanently hazy or with visible damage.
      </p>

      <h2 className="text-lg font-bold text-fg">Using screen clean mode</h2>
      <p>
        The Screen Clean Mode tool on this site fills your display with a solid white or black
        panel and locks the screen for 15 seconds, preventing accidental input from your cleaning
        cloth on touchscreen devices. White is the most useful cleaning colour because it makes
        dust, smudges, and fingerprints clearly visible so you can identify every area that
        needs attention. After cleaning, viewing the panel on white confirms you have removed
        all visible marks.
      </p>

      <h2 className="text-lg font-bold text-fg">Panel type considerations</h2>
      <p>
        LCD and IPS panels have a hard glass or plastic coating that is relatively tolerant
        of gentle wiping. Wipe in straight horizontal or vertical strokes with light pressure.
        OLED panels are physically thinner and more fragile than LCD panels. Use lighter
        pressure on OLED and ensure the cloth is completely free of any particles that could
        scratch the surface. Laptop displays and portable monitors with glossy coatings clean
        most easily with a single dry wipe. Matte anti-glare coatings have a textured surface
        that can trap smudges; apply slightly firmer pressure with a dry cloth working in
        one direction.
      </p>

      <h2 className="text-lg font-bold text-fg">How often to clean</h2>
      <p>
        Dust your screen lightly with a dry microfibre cloth whenever visible accumulation
        occurs, typically every one to two weeks in a normal office environment. Clean
        fingerprints and smudges as needed. Regular light cleaning is better than infrequent
        heavy cleaning, as it prevents oil from the smudges bonding more firmly to the surface
        over time.
      </p>
    </>
  )
}

// ─── 10. Aspect Ratios ───────────────────────────────────────────────────────

function AspectRatiosPost() {
  return (
    <>
      <p>
        Monitor aspect ratio is the proportional relationship between the width and height of
        the display surface. It affects how much content fits horizontally and vertically,
        how immersive the experience is in games and video, and how your productivity workflow
        is arranged. Choosing the right aspect ratio for your primary use case is as important
        as choosing the right resolution.
      </p>

      <h2 className="text-lg font-bold text-fg">16:9 — the standard widescreen ratio</h2>
      <p>
        The 16:9 aspect ratio is the current global standard for monitors, televisions, and
        video content. It was adopted as the standard for HDTV broadcasting and has remained
        dominant for all consumer and commercial displays since. Virtually all video content,
        games, and streaming services are produced for 16:9. Common 16:9 resolutions include
        1920x1080 (Full HD), 2560x1440 (Quad HD), 3840x2160 (4K UHD), and 5120x2880 (5K).
      </p>
      <p>
        For gaming, content consumption, and general productivity, 16:9 is the most practical
        choice due to universal software compatibility. Games and applications are designed
        with 16:9 as the primary ratio.
      </p>

      <h2 className="text-lg font-bold text-fg">16:10 — the taller widescreen</h2>
      <p>
        The 16:10 ratio provides more vertical screen space than 16:9 for the same width.
        This makes it popular for business laptops and productivity monitors. Common resolutions
        include 1920x1200 and 2560x1600. MacBook Pro and MacBook Air displays use 16:10 ratios.
        For reading documents, writing, and coding, the extra vertical space reduces the need
        to scroll and fits more content on screen simultaneously.
      </p>

      <h2 className="text-lg font-bold text-fg">21:9 — ultrawide</h2>
      <p>
        The 21:9 aspect ratio is the standard for ultrawide monitors. Common resolutions are
        2560x1080 and 3440x1440. Ultrawide screens provide horizontal space that allows two
        application windows to sit side by side without overlap, which suits both professional
        multitasking and cinematic gaming where the wider field of view is a meaningful advantage.
        Many films are shot at aspect ratios close to 21:9, so ultrawide screens eliminate
        the black bars visible on 16:9 displays.
      </p>

      <h2 className="text-lg font-bold text-fg">32:9 — super ultrawide</h2>
      <p>
        The 32:9 ratio, with resolutions like 5120x1440 and 3840x1080, effectively replaces
        two 16:9 monitors in a single panel with no bezel gap between them. This format suits
        professionals who need to monitor multiple feeds or applications simultaneously. The
        horizontal span is visually immersive in games that support it, though the curvature
        common on 32:9 panels also aids usability at these extreme widths.
      </p>

      <h2 className="text-lg font-bold text-fg">Checking your aspect ratio</h2>
      <p>
        The Resolution Checker on this site calculates and displays your aspect ratio
        automatically from your reported screen dimensions, along with the common name for
        your ratio where applicable. If the displayed ratio does not match your monitor&apos;s
        specified ratio, you may be running at a non-native resolution, or the aspect ratio
        on your monitor may have been set incorrectly through an OS scaling option.
      </p>
    </>
  )
}

// ─── Content map ─────────────────────────────────────────────────────────────

export const POST_CONTENT: Record<string, PostContent> = {
  'how-to-test-monitor-dead-pixels': DeadPixelPost,
  'what-is-backlight-bleed': BacklightBleedPost,
  'refresh-rate-60hz-vs-144hz': RefreshRatePost,
  'stuck-pixels-causes-and-fixes': StuckPixelsPost,
  'monitor-panel-types-ips-va-oled': PanelTypesPost,
  'understanding-monitor-resolution-dpi': ResolutionPost,
  'gamma-calibration-guide': GammaPost,
  'screen-uniformity-test-guide': UniformityPost,
  'how-to-clean-monitor-screen': CleaningPost,
  'monitor-aspect-ratios-explained': AspectRatiosPost,
}
