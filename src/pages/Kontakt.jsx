import ContactForm from '../components/ContactForm.jsx'
import WhatsAppLink from '../components/WhatsAppLink'
import {
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  COMPANY_NAME,
  CONTACT_EMAIL,
  MANAGEMENT,
  PHONE_WHATSAPP_DISPLAY,
} from '../constants/contact'
import imgOfficeOpt from '../assets/optimized/full-length-of-man-in-overalls-cleaning-office-wit-2026-03-08-22-54-16-utc-opt.jpg'

function Kontakt() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Kontakt</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Sprechen Sie uns an.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            Am schnellsten geht es per WhatsApp. Alternativ nutzen Sie das Formular - wir melden uns
            werktags in der Regel innerhalb von 24 Stunden.
          </p>
          <div className="mt-6">
            <WhatsAppLink variant="onDark" className="px-8 py-3.5">
              WhatsApp öffnen
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto grid gap-8 px-4 sm:px-8 lg:grid-cols-[3fr_4fr]">
          <aside className="space-y-6">
            <img
              src={imgOfficeOpt}
              alt={`Kontakt ${COMPANY_NAME}`}
              className="h-56 w-full border border-border object-cover"
              loading="lazy"
            />
            <div className="border border-border bg-bg p-6">
              <h3 className="text-2xl font-semibold text-primary">{COMPANY_NAME}</h3>
              <p className="mt-3 text-primary/80">{ADDRESS_STREET}</p>
              <p className="text-primary/80">{ADDRESS_ZIP_CITY}</p>
              <p className="mt-3 text-primary/80">WhatsApp: {PHONE_WHATSAPP_DISPLAY}</p>
              <div className="mt-4">
                <WhatsAppLink variant="solid">WhatsApp</WhatsAppLink>
              </div>
              <p className="mt-4 text-primary/80">E-Mail: {CONTACT_EMAIL}</p>
              <p className="mt-3 text-primary/80">Geschäftsführung: {MANAGEMENT}</p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Google Maps</p>
          <h2 className="mt-2 text-3xl font-bold text-primary">So finden Sie uns</h2>
          <p className="mt-3 max-w-2xl text-primary/80">
            Unser Standort in Köln ist direkt über die Karte erreichbar.
          </p>
          <div className="mt-6 overflow-hidden border border-border bg-white">
            <iframe
              title="Google Maps - RM Clean Bau GmbH"
              src="https://www.google.com/maps?q=Romaneystra%C3%9Fe+5a%2C+51063+K%C3%B6ln&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontakt
