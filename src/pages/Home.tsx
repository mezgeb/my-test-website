import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/services',
    title: 'Our services',
    description: '24-hour care, home-cooked meals, and the comforts of a real home.',
    image: '/images/house-kitchen.png',
  },
  {
    to: '/about',
    title: 'About us',
    description: 'A small, home-like residence where every resident is known by name.',
    image: '/images/house1.png',
  },
  {
    to: '/testimonials',
    title: 'What families say',
    description: 'Hear from the families who trust us with their loved ones.',
    image: '/images/commonroom.png',
  },
]

type Strip = { title: string; to: string; photos: string[] }

const strips: Strip[] = [
  {
    title: 'The place',
    to: '/the-place',
    photos: [
      '/images/house1.png',
      '/images/commonroom.png',
      '/images/house-kitchen.png',
      '/images/Room1.png',
      '/images/Room2.png',
      '/images/Bathroom.png',
      '/images/backyard.png',
      '/images/backyard2.png',
      '/images/backyard3.png',
    ],
  },
  {
    title: 'Celebrations',
    to: '/celebrations',
    photos: [
      '/images/celebration1.png',
      '/images/celebration2.jpg',
      '/images/celebration3.jpg',
      '/images/celebration4.jpg',
      '/images/celebration5.jpg',
      '/images/celebration6.jpg',
      '/images/celebration7.jpg',
      '/images/celebration8.jpg',
    ],
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Full of Life Adult Home Care</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Exceptional senior care — comfort, dignity, and attentive support for
          your loved ones, in a real home.
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

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {strips.map((strip) => (
        <section key={strip.title} className="space-y-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              {strip.title}
            </h2>
            <Link
              to={strip.to}
              className="group inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              View all
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scroll-smooth">
            {strip.photos.map((src, i) => (
              <div
                key={i}
                className="flex-none w-72 sm:w-80 snap-start overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
