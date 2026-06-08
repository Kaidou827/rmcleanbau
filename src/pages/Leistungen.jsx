import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import WhatsAppLink from '../components/WhatsAppLink'
import { services } from '../data/services.js'

const serviceCategories = [
  {
    title: 'Reinigung',
    items: [
      'Gebäudereinigung',
      'Unterhaltsreinigung',
      'Büroreinigung',
      'Treppenhausreinigung',
      'Glas- und Fensterreinigung',
      'Bauendreinigung',
      'Baustellenreinigung',
      'Sonderreinigung',
      'Industriereinigung',
    ],
  },
  {
    title: 'Gebäudeservice',
    items: ['Hausmeisterservice', 'Facility Management', 'Winterdienst'],
  },
  {
    title: 'Umbau & Rückbau',
    items: [
      'Renovierungsarbeiten',
      'Sanierungsarbeiten',
      'Abrissarbeiten',
      'Demontagearbeiten',
      'Entrümpelungen',
      'Haushaltsauflösungen',
    ],
  },
  {
    title: 'Transport',
    items: ['Transportdienstleistungen bis 3,5 Tonnen', 'Logistikdienstleistungen bis 3,5 Tonnen'],
  },
]

function Leistungen() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Leistungen</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Alles aus einer Hand.</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-white/80">
            Von der regelmäßigen Unterhaltsreinigung bis zur Baustellenreinigung nach
            Projektabschluss - wir decken das gesamte Spektrum professioneller Reinigung und
            ergänzender Dienstleistungen ab.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-8 grid gap-4 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <article key={category.title} className="border border-border bg-bg p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{category.title}</p>
                <ul className="mt-3 space-y-1 text-sm text-primary/80">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="border border-border bg-bg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary/80">{service.description}</p>
                  <Link
                    to={`/leistungen/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accentHover"
                  >
                    Details ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <article className="mb-8 border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">SEO Fokus Köln</p>
            <p className="mt-2 leading-7 text-primary/85">
              Relevante Suchbegriffe für unsere Leistungen: Gebäudereinigung Köln, Büroreinigung Köln,
              Glasreinigung Köln, Bauendreinigung Köln, Hausmeisterservice Köln, Facility Management Köln,
              Entrümpelung Köln, Haushaltsauflösung Köln, Transportdienstleistungen Köln und
              Gebäudeservice Köln.
            </p>
          </article>

          <div className="border border-border bg-white p-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Individuelle Anfragen
              </p>
              <p className="mt-2 text-xl font-bold text-primary">
                Ihr Bedarf ist nicht dabei? Sprechen Sie uns an - wir finden eine Lösung.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0">
              <WhatsAppLink variant="solid">WhatsApp</WhatsAppLink>
              <Link
                className="inline-flex items-center justify-center border border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                to="/kontakt"
              >
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Leistungen
