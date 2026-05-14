'use client'
import { useState } from 'react'
import { Share2, Copy, Check, X } from 'lucide-react'

interface ShareBarProps {
  title: string
  url: string
}

export function ShareBar({ title, url }: ShareBarProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const t = encodeURIComponent(title)
  const u = encodeURIComponent(url)

  const platforms = [
    { name: 'WhatsApp',    href: `https://wa.me/?text=${t}%20${u}` },
    { name: 'Gmail',       href: `https://mail.google.com/mail/?view=cm&su=${t}&body=${u}` },
    { name: 'Twitter / X', href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { name: 'Facebook',    href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: 'LinkedIn',    href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  ]

  async function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
        trackShare('native')
        return
      } catch {}
    }
    setOpen(true)
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    trackShare('copy_link')
    setTimeout(() => setCopied(false), 2000)
  }

  function trackShare(method: string) {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', 'tool_shared', { share_method: method, page_url: url })
    }
  }

  return (
    <div className="relative my-4">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300 dark:hover:bg-brand-900"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-52 rounded-lg border border-border bg-surface p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-fg-muted">Share via</span>
            <button
              onClick={() => setOpen(false)}
              className="text-fg-muted hover:text-fg"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="space-y-0.5">
            {platforms.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackShare(p.name.toLowerCase().replace(' / ', '_').replace(/ /g, '_'))}
                  className="block rounded px-2 py-1.5 text-sm text-fg-muted hover:bg-elevated transition-colors"
                >
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={copyLink}
                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-fg-muted hover:bg-elevated transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy link'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
