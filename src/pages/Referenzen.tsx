import imgBefore from '@/assets/optimized/abriss-demontage-opt.jpg'
import imgAfter from '@/assets/optimized/bau-sonderreinigung-opt.jpg'

const placeholders = [
  {
    title: 'Bürofläche Köln-Mitte',
    description: 'Platzhalter für zukünftige Referenz inkl. Kurzbeschreibung des Projekts und Umfangs.',
  },
  {
    title: 'Treppenhaus Wohnobjekt',
    description: 'Platzhalter für Vor-Ort-Projekt mit Intervall, Leistungspaket und Kundenfeedback.',
  },
  {
    title: 'Bauendreinigung Gewerbe',
    description: 'Platzhalter für Bauabschlussprojekt mit Übergabetermin und Leistungsdokumentation.',
  },
]

function Referenzen() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Referenzen</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Projekte & Ergebnisse</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            Diese Seite wird laufend mit echten Referenzprojekten ergänzt. Aktuell sehen Sie Platzhalter
            für kommende Einträge inklusive Vorher-Nachher-Darstellungen.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-primary">Projekt-Platzhalter</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {placeholders.map((item) => (
              <article key={item.title} className="border border-border bg-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Platzhalter</p>
                <h3 className="mt-2 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-primary/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-primary">Vorher-Nachher</h2>
          <p className="mt-3 max-w-2xl text-primary/80">
            Musterdarstellung für künftige Vorher-Nachher-Projekte. Die realen Bilder werden nach und
            nach ergänzt.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-border bg-surface">
              <img src={imgBefore} alt="Vorher Platzhalter" className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-sm font-semibold text-primary">Vorher (Platzhalter)</p>
              </div>
            </article>
            <article className="border border-border bg-surface">
              <img src={imgAfter} alt="Nachher Platzhalter" className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-sm font-semibold text-primary">Nachher (Platzhalter)</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Referenzen
