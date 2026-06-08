import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import WhatsAppLink from '../components/WhatsAppLink'
import { servicesMap } from '../data/services.js'

const processSteps = [
  'Bedarf aufnehmen und Einsatzumfang abstimmen',
  'Zeitfenster und Teamplanung festlegen',
  'Leistung strukturiert und termintreu umsetzen',
  'Ergebnis gemeinsam prüfen und bei Bedarf nachjustieren',
]

function LeistungDetail() {
  const { slug } = useParams()
  const service = slug ? servicesMap[slug] : null

  if (!service) {
    return <Navigate to="/leistungen" replace />
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Leistung</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-white">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">{service.description}</p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto grid gap-8 px-4 sm:px-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-8">
            <img
              src={service.image}
              alt={service.title}
              className="h-[22rem] w-full border border-border object-cover"
              loading="lazy"
            />
            <div className="border border-border bg-bg p-8">
              <h2 className="text-3xl font-bold text-primary">Leistungsbeschreibung</h2>
              <p className="mt-4 leading-8 text-primary/85">{service.detailText}</p>
            </div>
            <div className="border border-border bg-surface p-8">
              <h3 className="text-2xl font-bold text-primary">Typische Inhalte</h3>
              <ul className="mt-5 space-y-3">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary/85">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-border bg-bg p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Geeignet für</p>
              <p className="mt-2 text-lg font-semibold text-primary">{service.suitableFor}</p>
            </div>
            <div className="border border-border bg-surface p-8">
              <h3 className="text-xl font-bold text-primary">So arbeiten wir</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-primary/85">
                {processSteps.map((step, index) => (
                  <li key={step}>
                    <span className="mr-2 font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-border bg-accent p-8">
              <h3 className="text-2xl font-bold text-white">Angebot anfragen</h3>
              <p className="mt-3 text-sm leading-7 text-white/90">
                Sagen Sie uns kurz, was Sie brauchen. Wir melden uns werktags in der Regel innerhalb
                von 24 Stunden.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppLink variant="solid" className="justify-center">
                  WhatsApp
                </WhatsAppLink>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default LeistungDetail
