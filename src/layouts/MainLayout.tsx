import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
]

export default function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 text-xl font-semibold tracking-tight"
                    >
                        <img src="/favicon.svg" alt="" className="h-7 w-7" />
                        <span>Full of Life Adult Home Care</span>
                    </NavLink>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex gap-6 text-sm">
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

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-700"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <span className="text-2xl">×</span>
                        ) : (
                            <span className="text-2xl">☰</span>
                        )}
                    </button>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden border-t border-slate-200">
                        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
                            {navItems.map(({ to, label, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    onClick={() => setIsMenuOpen(false)}
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
                        </div>
                    </nav>
                )}
            </header>

            <main className="flex-1">
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-white border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-8">
                    <div className="grid gap-6 sm:grid-cols-3 text-sm text-slate-500">
                        {/* Address */}
                        <div>
                            <h3 className="font-medium text-slate-900 mb-2">Our Location</h3>
                            <p>
                                4453 NE Failing St.
                                <br />
                                Portland, OR 87213
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="font-medium text-slate-900 mb-2">Contact Us</h3>
                            <p>
                                <a
                                    href="tel:6062649111"
                                    className="hover:text-slate-900 transition-colors"
                                >
                                    (606) 264-9111
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:folahc2022@gmail.com"
                                    className="hover:text-slate-900 transition-colors"
                                >
                                    folahc2022@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Hours / Family */}
                        <div>
                            <h3 className="font-medium text-slate-900 mb-2">
                                Full of Life Adult Home Care
                            </h3>
                            <p>
                                A warm, comfortable home where seniors receive attentive,
                                compassionate care.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                        <span>&copy; {new Date().getFullYear()} Full of Life Adult Home Care</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}