import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/services',
    title: 'Our services',
    description: 'See what we can help you with — end-to-end.',
    image: 'https://picsum.photos/seed/services/600/400',
  },
  {
    to: '/about',
    title: 'About us',
    description: 'A little about who we are and what we care about.',
    image: 'https://picsum.photos/seed/about/600/400',
  },
  {
    to: '/testimonials',
    title: 'What people say',
    description: 'Hear it from clients who have worked with us.',
    image: 'https://picsum.photos/seed/testimonials/600/400',
  },
]

type Strip = { title: string; to: string; photos: string[] }

const strips: Strip[] = [
  {
    title: 'Food',
    to: '/services',
    photos: Array.from({ length: 6 }, (_, i) =>
      `https://picsum.photos/seed/food${i + 1}/600/400`,
    ),
  },
  {
    title: 'The place',
    to: '/about',
    photos: Array.from({ length: 6 }, (_, i) =>
      `https://picsum.photos/seed/place${i + 1}/600/400`,
    ),
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Full of Life Adult home care</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Exceptional Senior Care
          Comfort, dignity, and expert care for your loved ones.
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
