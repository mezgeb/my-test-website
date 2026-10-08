const photos = [
  '/images/celebration1.png',
  '/images/celebration2.jpg',
  '/images/celebration3.jpg',
  '/images/celebration4.jpg',
  '/images/celebration5.jpg',
  '/images/celebration6.jpg',
  '/images/celebration7.jpg',
  '/images/celebration8.jpg',
    '/images/meals.png',
    '/images/Christmas1.png',
    '/images/liveMusic1.png',
    '/images/thanksgiving1.png',
    '/images/thanksgiving2.png',
    '/images/eatingtogether.png',
]

export default function Celebrations() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Celebrations</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Holidays, birthdays, and the little moments that make our home feel
          like family. A look at some of the celebrations we&apos;ve shared.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[3/2] overflow-hidden bg-slate-100">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
