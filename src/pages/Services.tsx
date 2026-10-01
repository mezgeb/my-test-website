const services = [
  { title: 'Service One', description: 'A short description of the first service.' },
  { title: 'Service Two', description: 'A short description of the second service.' },
  { title: 'Service Three', description: 'A short description of the third service.' },
]

export default function Services() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="bg-white rounded-lg border border-slate-200 p-5"
          >
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <p className="text-sm text-slate-600">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
