import { Link } from 'react-router-dom'
import { COMPANY_NAME } from '@/constants/contact'

function AGB() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Rechtliches</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-8">
          <div className="space-y-8 text-sm leading-7 text-primary/85">
            <p className="rounded border border-border bg-bg p-4 text-xs text-primary/70">
              Die folgenden AGB sind eine Vorlage und müssen durch einen Rechtsanwalt auf Ihre konkreten
              Leistungen und Geschäftsabläufe geprüft und angepasst werden.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 1 Geltungsbereich</h2>
              <p className="mt-3">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der {COMPANY_NAME}{' '}
                (nachfolgend „Auftragnehmer“) und ihren Kunden (nachfolgend „Auftraggeber“)
                über Reinigungs-, Glas-, Logistik- und sonstige in der Leistungsbeschreibung genannte
                Dienstleistungen in der jeweils vereinbarten Fassung.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 2 Vertragsschluss und Leistungsumfang</h2>
              <p className="mt-3">
                Angebote sind freibleibend, sofern nicht ausdrücklich etwas anderes vereinbart ist. Der
                Vertrag kommt durch schriftliche oder textliche Auftragsbestätigung des Auftragnehmers
                oder durch Ausführung der Leistung zustande. Der vereinbarte Leistungsumfang ergibt sich
                aus dem Angebot bzw. der Leistungsbeschreibung.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 3 Preise und Zahlung</h2>
              <p className="mt-3">
                Es gelten die vereinbarten Preise. Sofern nicht anders vereinbart, sind Rechnungen
                innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug
                behält sich der Auftragnehmer vor, gesetzliche Verzugsregelungen geltend zu machen und
                die Leistungserbringung auszusetzen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 4 Termine und Mitwirkung</h2>
              <p className="mt-3">
                Termine sind nur verbindlich, wenn sie ausdrücklich als „fest“ vereinbart wurden. Der
                Auftraggeber stellt sicher, dass die Arbeitsbereiche zum vereinbarten Zeitpunkt zugänglich
                sind und erforderliche Hilfsmittel (z. B. Strom, Wasser) zur Verfügung stehen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 5 Haftung</h2>
              <p className="mt-3">
                Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei
                Verletzung von Leben, Körper oder Gesundheit. Im Übrigen haftet er nur bei leichter
                Fahrlässigkeit bei Verletzung wesentlicher Vertragspflichten; in diesem Fall ist die
                Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Die gesetzlichen
                Haftungsbeschränkungen bleiben unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">§ 6 Schlussbestimmungen</h2>
              <p className="mt-3">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist – soweit der
                Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder
                öffentlich-rechtliches Sondervermögen ist – der Sitz des Auftragnehmers in Köln.
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt.
              </p>
            </div>

            <p className="pt-4 text-xs text-primary/60">
              <Link className="text-accent hover:underline" to="/">
                Zur Startseite
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AGB
