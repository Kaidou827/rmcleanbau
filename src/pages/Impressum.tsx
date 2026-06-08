import { Link } from 'react-router-dom'
import {
  ADDRESS_COUNTRY,
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  COMMERCIAL_REGISTER,
  COMPANY_DOMAIN,
  COMPANY_NAME,
  CONTACT_EMAIL,
  MANAGEMENT,
  PHONE_WHATSAPP_DISPLAY,
  REGISTER_COURT,
  TAX_NUMBER,
  VAT_ID,
} from '@/constants/contact'

function Impressum() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Rechtliches</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Impressum</h1>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-8">
          <div className="space-y-8 text-sm leading-7 text-primary/85">
            <div>
              <h2 className="text-lg font-semibold text-primary">Angaben gemäß § 5 TMG</h2>
              <p className="mt-3">
                {COMPANY_NAME}
                <br />
                {ADDRESS_STREET}
                <br />
                {ADDRESS_ZIP_CITY}
                <br />
                {ADDRESS_COUNTRY}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Vertreten durch</h2>
              <p className="mt-3">Geschäftsführung: {MANAGEMENT}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Kontakt</h2>
              <p className="mt-3">
                WhatsApp: {PHONE_WHATSAPP_DISPLAY}
                <br />
                E-Mail: {CONTACT_EMAIL}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Registereintrag</h2>
              <p className="mt-3">
                Handelsregister: {COMMERCIAL_REGISTER}
                <br />
                Registergericht: {REGISTER_COURT}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Umsatzsteuer-ID</h2>
              <p className="mt-3">
                USt.-IdNr. gemäß § 27 a UStG: {VAT_ID}
                <br />
                Steuernummer: {TAX_NUMBER}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Website</h2>
              <p className="mt-3">https://{COMPANY_DOMAIN}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Verbraucherstreitbeilegung</h2>
              <p className="mt-3">
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Haftung für Inhalte</h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Haftung für Links</h2>
              <p className="mt-3">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                verantwortlich.
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

export default Impressum
