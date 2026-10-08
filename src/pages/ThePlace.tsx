type Photo = { src: string; caption: string }

const photos: Photo[] = [
  { src: '/images/house.png', caption: 'Our home' },
  { src: '/images/house2.png', caption: 'Our home' },
  { src: '/images/commonroom.png', caption: 'Common room' },
  { src: '/images/house-kitchen.png', caption: 'Kitchen' },
  { src: '/images/Room1.png', caption: 'Room 1' },
  { src: '/images/Room2.png', caption: 'Room 2' },
  { src: '/images/Bathroom.png', caption: 'Bathroom' },
  { src: '/images/backyard.png', caption: 'Backyard' },
  { src: '/images/backyard2.png', caption: 'Backyard' },
  { src: '/images/backyard3.png', caption: 'Backyard' },
]

export default function ThePlace() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Our Home</h1>
        <p className="text-slate-600 max-w-2xl">
          A look around our home — the common areas, bedrooms, and backyard
          where our residents spend their days.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map(({ src, caption }, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[3/2] overflow-hidden bg-slate-100">
              <img
                src={src}
                alt={caption}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
