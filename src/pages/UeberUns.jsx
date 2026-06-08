import { Link } from 'react-router-dom'
import WhatsAppLink from '../components/WhatsAppLink'
import imgTeamOpt from '../assets/optimized/cleaning-company-employees-are-dressed-in-work-clo-2026-01-08-07-57-13-utc-opt.jpg'
import { ADDRESS_ZIP_CITY, COMPANY_NAME } from '../constants/contact'

const values = [
  {
    title: 'Qualität',
    text: 'Wir reinigen nicht einfach. Wir reinigen richtig. Kein Auftrag verlässt uns ohne Abnahme.',
  },
  {
    title: 'Flexibilität',
    text: 'Termine nach Ihrem Bedarf. Auch kurzfristig, auch außerhalb regulärer Zeiten.',
  },
  {
    title: 'Verlässlichkeit',
    text: 'Wir erscheinen. Wir liefern. Wir kommunizieren - auch wenn es mal eng wird.',
  },
]

const checklistValues = [
  {
    title: 'Zuverlässigkeit',
    text: 'Verbindliche Einsätze, klare Kommunikation und planbare Abläufe für Ihr Objekt.',
  },
  {
    title: 'Qualität',
    text: 'Saubere Standards, regelmäßige Kontrolle und nachvollziehbare Ergebnisse vor Ort.',
  },
  {
    title: 'Termintreue',
    text: 'Abgestimmte Zeitfenster und pünktliche Ausführung auch bei enger Taktung.',
  },
  {
    title: 'Kundenzufriedenheit',
    text: 'Lösungsorientierter Service mit direktem Ansprechpartner und schneller Rückmeldung.',
  },
]

function UeberUns() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Über uns</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Inhabergeführt. Persönlich. Verlässlich.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            Kurze Wege, direkte Kommunikation und echte Verantwortung für jedes Projekt in Köln und
            Umgebung.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto grid gap-8 px-4 sm:px-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-5 text-primary/85">
            <p className="leading-8">
            Die RM Clean Bau GmbH wurde gegründet, um Unternehmen und Privatkunden in Köln eine
            echte Alternative zu anonymen Großunternehmen zu bieten. Als inhabergeführtes
            Unternehmen mit flachen Strukturen sind bei uns kurze Reaktionszeiten keine leeren
            Versprechen - sie sind gelebter Alltag.
          </p>
          <p className="leading-8">
            Unser Team steht persönlich hinter jedem Auftrag. Wir arbeiten mit ausgewählten,
            eingespielten Kräften, die unsere Ansprüche an Sauberkeit, Pünktlichkeit und
            Diskretion teilen.
          </p>
          <p className="leading-8">
            Unser Sitz in {ADDRESS_ZIP_CITY} ist nicht nur eine Adresse - er ist unser Heimvorteil. Wir
            kennen die Region, reagieren schnell und sind nah an unseren Kunden.
          </p>
          </div>
          <img
            src={imgTeamOpt}
            alt={`Team der ${COMPANY_NAME}`}
            className="h-full min-h-[22rem] w-full border border-border object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article className="border border-border bg-white p-8" key={value.title}>
              <h3 className="text-2xl font-semibold text-primary">{value.title}</h3>
              <p className="mt-3 leading-7 text-primary/80">{value.text}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Unsere Werte</p>
          <h2 className="mt-2 text-3xl font-bold text-primary">Wofür wir stehen</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {checklistValues.map((item) => (
              <article key={item.title} className="border border-border bg-bg p-6">
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-primary/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-16">
        <div className="container mx-auto flex flex-col items-start gap-6 px-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Kontakt</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Fragen? Schreiben Sie uns per WhatsApp.</h2>
            <p className="mt-2 max-w-xl text-white/75">Wir antworten so schnell es geht - oft noch am selben Tag.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppLink variant="onDark" className="justify-center px-8 py-3.5">
              WhatsApp öffnen
            </WhatsAppLink>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center border border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Zum Formular
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default UeberUns
