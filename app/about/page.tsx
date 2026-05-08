import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Screen Test Lab',
  description: 'Screen Test Lab is a free, browser-based collection of monitor testing tools. No sign-up, no download, no cost — just open a tool and test your display.',
  alternates: { canonical: '/about' },
}

const tools = [
  { label: 'Dead Pixel Test', href: '/dead-pixel-test' },
  { label: 'Backlight Bleed Test', href: '/backlight-bleed-test' },
  { label: 'Stuck Pixel Fixer', href: '/stuck-pixel-fixer' },
  { label: 'Refresh Rate Checker', href: '/refresh-rate-checker' },
  { label: 'Resolution Checker', href: '/resolution-checker' },
  { label: 'Gradient Banding Test', href: '/gradient-banding-test' },
  { label: 'Gamma Calibration Check', href: '/gamma-calibration-check' },
  { label: 'Screen Uniformity Test', href: '/screen-uniformity-test' },
  { label: 'Image Retention Test', href: '/image-retention-test' },
  { label: 'Viewing Angle Test', href: '/viewing-angle-test' },
]

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'About' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          About Screen Test Lab
        </h1>
        <p className="text-fg-muted text-lg">
          Free browser-based monitor tests. No sign-up. No download. No cost.
        </p>
      </section>

      <section className="space-y-6 text-fg-muted">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">What this site is</h2>
          <p>
            Screen Test Lab is a collection of 25 browser-based tools for testing and inspecting
            monitor and display quality. Every tool runs entirely inside your web browser using
            standard browser APIs. Nothing is installed, nothing is downloaded, and no account
            is required to use any tool.
          </p>
          <p>
            The tools cover the full range of common display diagnostics: dead pixel detection,
            backlight bleed inspection, stuck pixel repair, gradient banding, gamma calibration,
            screen uniformity, image retention, viewing angle, refresh rate measurement, resolution
            reporting, and a set of fullscreen solid-colour panels used for pixel inspection and
            screen cleaning.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Why it was built</h2>
          <p>
            Good monitor testing tools have always existed but the best ones have historically
            required a download, a paid licence, or a Windows-only application. This site exists
            to give everyone with a browser access to the same quality of display diagnostics
            that professional calibrators use, without any friction.
          </p>
          <p>
            Every tool is designed to be immediately useful. Open a page, click a button, and
            you are running the test. No tutorial required, no account to create, no subscription
            to manage.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">How the tools work</h2>
          <p>
            All tests run client-side in your browser. The solid-colour fullscreen panels use
            the browser Fullscreen API to fill your entire display. The refresh rate checker uses
            <code className="mx-1 px-1.5 py-0.5 rounded bg-elevated text-sm font-mono">requestAnimationFrame</code>
            to measure the actual frame rate your browser is driving. The resolution checker reads
            from
            <code className="mx-1 px-1.5 py-0.5 rounded bg-elevated text-sm font-mono">window.screen</code>
            and
            <code className="mx-1 px-1.5 py-0.5 rounded bg-elevated text-sm font-mono">devicePixelRatio</code>.
            None of these operations send any data to any server.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Display compatibility</h2>
          <p>
            The tools work on any modern browser including Chrome, Firefox, Safari, and Edge.
            They are compatible with desktop monitors, laptop displays, ultrawide screens,
            HiDPI and Retina displays, and external monitors connected via any interface.
            Most tools also work on tablets and phones, though some fullscreen and colour tests
            are most useful on larger displays viewed at normal monitor distance.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">All tools</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-accent hover:underline text-sm">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/#tools" className="text-accent hover:underline text-sm font-medium">
              View the full tool directory
            </Link>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Contact</h2>
          <p>
            Questions, bug reports, or suggestions can be sent to{' '}
            <a href="mailto:thys@mjbstrategic.com" className="text-accent hover:underline">
              thys@mjbstrategic.com
            </a>
            .
          </p>
        </div>
      </section>

    </div>
  )
}
