import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Celebrations from './pages/Celebrations'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import ThePlace from './pages/ThePlace'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="the-place" element={<ThePlace />} />
        <Route path="celebrations" element={<Celebrations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function NotFound() {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">404</h1>
      <p className="text-slate-600">That page doesn&apos;t exist.</p>
    </section>
  )
}
