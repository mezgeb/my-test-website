import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-semibold tracking-tight">
            React Sandbox
          </NavLink>
          <nav className="flex gap-6 text-sm">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-slate-900 font-medium'
                      : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-500 flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} React Sandbox</span>
          <span>Built with Vite + React + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}
