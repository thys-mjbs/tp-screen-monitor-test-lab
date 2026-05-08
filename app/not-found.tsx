import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-6xl font-extrabold text-accent">404</p>
        <h1 className="text-2xl font-bold text-fg">Page not found</h1>
        <p className="text-fg-muted">
          This page does not exist. Head back to the homepage to find the test you are looking for.
        </p>
        <Link
          href="/"
          className="inline-block mt-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
        >
          Back to all tools
        </Link>
      </div>
    </div>
  )
}
