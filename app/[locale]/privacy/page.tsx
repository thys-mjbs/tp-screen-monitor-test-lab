import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://tp-screen-monitor-test-lab.vercel.app'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const canonical = locale === 'en' ? `${appUrl}/privacy` : `${appUrl}/${locale}/privacy`
  return {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Screen Test Lab. Learn how we handle data, analytics, and advertising on this free monitor testing site.',
    alternates: { canonical, languages: { 'en': `${appUrl}/privacy`, 'es': `${appUrl}/es/privacy`, 'x-default': `${appUrl}/privacy` } },
  }
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">

      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-fg-muted">Last updated: May 2025</p>
      </section>

      <section className="space-y-8 text-fg-muted">

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Overview</h2>
          <p>
            Screen Test Lab (&quot;we&quot;, &quot;this site&quot;) is a free browser-based display testing tool
            operated from South Africa. This policy explains what data is collected when you use
            this site, how it is used, and your rights under the Protection of Personal Information
            Act 4 of 2013 (POPIA).
          </p>
          <p>
            All monitor testing tools on this site run entirely in your browser. No test results,
            display data, or pixel information are ever transmitted to any server. We do not have
            access to your screen contents.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Information we collect</h2>
          <p>
            We do not require you to create an account, log in, or submit any personal information
            to use this site. The only data collected is standard web analytics data gathered
            automatically when you visit pages on this site.
          </p>

          <h3 className="text-base font-semibold text-fg">Analytics (Google Analytics 4)</h3>
          <p>
            This site uses Google Analytics 4 (GA4) to understand how visitors use the site.
            GA4 collects standard web analytics information including your approximate geographic
            location (country and city level), browser and operating system, pages visited,
            time spent on pages, and how you arrived at the site (search, direct, referral).
            GA4 uses cookies and similar technologies. This data is processed by Google and
            is subject to Google&apos;s Privacy Policy.
          </p>
          <p>
            We do not use GA4 to identify individual users. Analytics data is used in aggregate
            to understand which tools are most useful and how the site can be improved.
          </p>

          <h3 className="text-base font-semibold text-fg">Advertising (Google AdSense)</h3>
          <p>
            This site displays advertisements served by Google AdSense. Google may use cookies
            and device identifiers to serve ads based on your prior visits to this site and
            other sites on the internet. You can opt out of personalised advertising by visiting
            Google&apos;s Ad Settings at{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              adssettings.google.com
            </a>
            . Google&apos;s use of advertising cookies is governed by Google&apos;s Privacy Policy.
          </p>

          <h3 className="text-base font-semibold text-fg">Hosting (Vercel)</h3>
          <p>
            This site is hosted on Vercel. Vercel collects standard server logs including IP
            addresses, request paths, and timestamps for the purpose of serving the site and
            detecting abuse. These logs are retained according to Vercel&apos;s data retention
            policies. We do not have direct access to individual IP addresses from Vercel logs.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Cookies</h2>
          <p>
            This site does not set any first-party cookies for functionality or user preferences.
            Third-party cookies may be set by Google Analytics and Google AdSense as described
            above. You can manage or disable cookies in your browser settings. Disabling
            third-party cookies does not affect the functioning of any monitor testing tool
            on this site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Data we do not collect</h2>
          <p>We do not collect or store:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Your name, email address, or any contact information</li>
            <li>Your screen contents, test results, or display measurements</li>
            <li>Payment information (this site is entirely free)</li>
            <li>Account credentials (no accounts exist on this site)</li>
            <li>Any data entered into or generated by the testing tools</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Third-party services</h2>
          <p>
            This site uses the following third-party services, each of which has its own
            privacy policy governing data they collect:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Google Analytics 4 &mdash; web analytics</li>
            <li>Google AdSense &mdash; advertising</li>
            <li>Vercel &mdash; website hosting and delivery</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Children</h2>
          <p>
            This site is not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided
            personal information through this site, please contact us so we can take
            appropriate action.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Your rights under POPIA</h2>
          <p>
            If you are a South African resident, you have rights under the Protection of Personal
            Information Act 4 of 2013, including the right to access personal information we
            hold about you, the right to request correction of inaccurate information, and the
            right to request deletion of your personal information. Given that we collect no
            personally identifiable information directly, these rights are primarily relevant
            to any data Google Analytics or Google AdSense may hold about you, which you can
            manage directly through Google&apos;s account and privacy tools.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last updated&quot; date at the top
            of this page reflects the most recent revision. Continued use of the site after
            any update constitutes acceptance of the revised policy.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-fg">Contact</h2>
          <p>
            For privacy-related questions or requests, contact us at{' '}
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
