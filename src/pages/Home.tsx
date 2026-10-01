import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        This is a small React site to brush up on routing, components, and
        Tailwind. Use the nav above to move between pages.
      </p>
      <div className="flex gap-3">
        <Link
          to="/services"
          className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition-colors"
        >
          Explore services
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
