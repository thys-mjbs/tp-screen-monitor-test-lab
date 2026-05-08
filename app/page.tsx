export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-fg tracking-tight">
          Screen &amp; Monitor Test Lab
        </h1>
        <p className="text-lg text-fg-muted">
          Design system active — build in progress.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <span className="px-4 py-2 rounded-md bg-brand-500 text-white text-sm font-medium">
            brand-500
          </span>
          <span className="px-4 py-2 rounded-md bg-surface border border-border text-fg text-sm font-medium">
            surface
          </span>
          <span className="px-4 py-2 rounded-md bg-elevated text-fg-muted text-sm font-medium">
            elevated
          </span>
        </div>
      </div>
    </main>
  )
}
