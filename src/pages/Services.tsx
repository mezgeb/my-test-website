const services = [
  {
    title: '24-hour supervised care',
    description:
      'Trained caregivers on-site around the clock — including overnight — so your loved one is never alone.',
  },
  {
    title: 'Personal care assistance',
    description:
      'Help with bathing, dressing, grooming, and personal hygiene, delivered with patience and respect.',
  },
  {
    title: 'Medication management',
    description:
      'Prescriptions, dosages, and timing are handled carefully so medications are always taken safely and on schedule.',
  },
  {
    title: 'Home-cooked meals',
    description:
      "Three balanced meals a day plus snacks, prepared fresh in our kitchen with each resident's dietary needs in mind.",
  },
  {
    title: 'Housekeeping & laundry',
    description:
      'A clean room, fresh linens, and tidy common spaces — because home should feel like home.',
  },
  {
    title: 'Companionship & activities',
    description:
      'Daily conversation, shared meals, and gentle activities to keep residents engaged, connected, and smiling.',
  },
  {
    title: 'Memory care support',
    description:
      'Experienced care for residents living with dementia or memory loss — in a quiet, familiar environment where routine matters.',
  },
  {
    title: 'End-of-life & hospice support',
    description:
      'When the time comes, we work alongside hospice teams to ensure comfort, dignity, and family presence.',
  },
]

export default function Services() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Our services</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Everything your loved one needs for safe, comfortable, dignified
          daily living — delivered in a real home by caregivers who know them.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-slate-900 mb-2">{s.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
