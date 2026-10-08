const testimonials = [
  {
    name: 'Linda M., daughter',
    quote:
      'Choosing Full of Life for my mom was the best decision our family made. The caregivers treat her like their own — with real warmth and patience. Every time I visit, I see her smiling.',
  },
  {
    name: 'Robert K., son',
    quote:
      "My dad needed more care than we could provide at home, but we were terrified of a big facility. This is a real home. He knows everyone's name, eats meals at a kitchen table, and spends his afternoons in the backyard. It's what we hoped for.",
  },
  {
    name: 'Carol D., daughter-in-law',
    quote:
      "They don't just take care of my mother-in-law — they know her. Her favorite foods, her stories, when she needs quiet and when she wants company. That kind of attention is rare.",
  },
]

export default function Testimonials() {
  return (<div className="text-2xl"> Coming soon ...</div>)

  /*return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">What families say</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          In the words of the families who trust us with their loved ones.
        </p>
      </div>

      <ul className="space-y-4">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="bg-white rounded-lg border border-slate-200 p-6"
          >
            <p className="text-slate-700 italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">
              — {t.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )*/
}
