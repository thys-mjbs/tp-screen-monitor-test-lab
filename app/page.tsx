export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-fg tracking-tight">
          Screen &amp; Monitor Test Lab
        </h1>
        <p className="text-lg text-fg-muted">
          Design system active — build in progress.
        </p>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <p className="text-sm font-medium text-fg-muted uppercase tracking-widest">Palette</p>
          <div className="grid grid-cols-7 gap-1 rounded-lg overflow-hidden">
            <div className="h-12 bg-brand-50" title="#FFE9EC" />
            <div className="h-12 bg-brand-100" title="#FFAEBC" />
            <div className="h-12 bg-brand-300" title="#FF7A9C" />
            <div className="h-12 bg-brand-400" title="#FF608C" />
            <div className="h-12 bg-brand-500" title="#EB0005" />
            <div className="h-12 bg-brand-800" title="#71002D" />
            <div className="h-12 bg-brand-950" title="#3A0013" />
          </div>

          <button className="w-full py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors">
            Primary button
          </button>
          <div className="flex gap-3">
            <div className="flex-1 py-2 rounded-lg bg-elevated text-fg text-sm text-center font-medium">elevated</div>
            <div className="flex-1 py-2 rounded-lg border border-border text-fg-muted text-sm text-center font-medium">border</div>
          </div>
        </div>
      </div>
    </main>
  )
}
