const testimonials = [
  { name: 'Alex P.', quote: 'A great experience from start to finish.' },
  { name: 'Jamie L.', quote: 'Professional, responsive, and friendly.' },
  { name: 'Taylor R.', quote: 'Would absolutely recommend to anyone.' },
]

export default function Testimonials() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
      <ul className="space-y-4">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="bg-white rounded-lg border border-slate-200 p-5"
          >
            <p className="text-slate-700 italic">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-2 text-sm text-slate-500">— {t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
