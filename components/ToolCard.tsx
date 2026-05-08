import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Tool } from '@/lib/tools'

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group relative flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 hover:bg-elevated hover:border-brand-300 transition-all duration-150"
    >
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-fg text-sm leading-snug">{tool.name}</h3>
        <ArrowRight
          size={15}
          className="shrink-0 mt-0.5 text-fg-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
        />
      </div>
      <p className="text-xs text-fg-muted leading-relaxed">{tool.shortDescription}</p>
    </Link>
  )
}
