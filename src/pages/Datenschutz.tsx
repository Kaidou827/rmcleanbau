import { Link } from 'react-router-dom'
import {
  ADDRESS_COUNTRY,
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  COMPANY_NAME,
  CONTACT_EMAIL,
  PHONE_WHATSAPP_DISPLAY,
} from '@/constants/contact'

function Datenschutz() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Rechtliches</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-8">
          <div className="space-y-8 text-sm leading-7 text-primary/85">
            <div>
              <h2 className="text-lg font-semibold text-primary">1. Verantwortlicher</h2>
              <p className="mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist die {COMPANY_NAME},{' '}
                {ADDRESS_STREET}, {ADDRESS_ZIP_CITY}, {ADDRESS_COUNTRY}. Kontakt: {CONTACT_EMAIL},
                WhatsApp {PHONE_WHATSAPP_DISPLAY}.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">2. Hosting und Aufruf der Website</h2>
              <p className="mt-3">
                Beim Aufruf dieser Website werden durch den Hosting-Provider und technische Infrastruktur
                automatisch Server-Logfiles erzeugt (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit des
                Zugriffs). Die Verarbeitung erfolgt zur Bereitstellung der Website und zur Gewährleistung
                der Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Die konkreten Speicherfristen und
                Verarbeitungsdetails richten sich nach dem beim Hosting eingesetzten System – bitte
                ergänzen Sie hier die Angaben Ihres Hosting-Anbieters nach Rücksprache mit diesem.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">3. Kontaktformular</h2>
              <p className="mt-3">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der
                Anfrage und für Anschlussfragen verarbeitet und gespeichert. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragserfüllung) bzw. Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden
                gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind, sofern
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">4. WhatsApp</h2>
              <p className="mt-3">
                Wenn Sie uns über WhatsApp kontaktieren, verarbeitet die WhatsApp Ireland Ltd. bzw. Meta
                personenbezogene Daten gemäß deren Datenschutzbestimmungen. Wir verarbeiten die im Chat
                mitgeteilten Daten zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">5. Cookies und Einwilligung</h2>
              <p className="mt-3">
                Wir setzen Cookies bzw. LocalStorage-Speicher ein, damit wir Ihre Cookie-Einstellung
                speichern können (technisch notwendig). Diese Speicherung erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen Website) bzw. Art. 6
                Abs. 1 lit. a DSGVO, sofern Sie optionale Einwilligungen erteilen. Sie können Ihre Auswahl
                im Cookie-Banner jederzeit ändern, indem Sie die im Browser gespeicherten
                Website-Daten löschen und die Seite erneut laden.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">6. Ihre Rechte</h2>
              <p className="mt-3">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit und Widerspruch gegen die Verarbeitung sowie das Recht, eine
                erteilte Einwilligung in die Zukunft zu widerrufen. Außerdem haben Sie das Recht, sich bei
                einer Datenschutzaufsichtsbehörde zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">7. Änderungen</h2>
              <p className="mt-3">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website oder
                die Rechtslage ändern. Maßgeblich ist die jeweils auf der Website veröffentlichte Fassung.
              </p>
            </div>

            <p className="pt-4 text-xs text-primary/60">
              Stand: März 2026 ·{' '}
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

export default Datenschutz
