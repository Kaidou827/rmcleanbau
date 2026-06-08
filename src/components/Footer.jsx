import { Link } from 'react-router-dom'
import iconWhite from '../assets/NEW LOGOS ICONS ANDFAVICON/logo_white_icon.png'
import { services } from '../data/services.js'
import WhatsAppLink from './WhatsAppLink'
import {
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  COMPANY_NAME,
  CONTACT_EMAIL,
  PHONE_WHATSAPP_DISPLAY,
} from '../constants/contact'

function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-14">
      <div className="container mx-auto grid gap-10 px-4 sm:px-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <img className="footer-brand-icon" src={iconWhite} alt={`${COMPANY_NAME} Icon`} />
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">{COMPANY_NAME}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/85">
            Gebäudereinigung und ergänzende Dienstleistungen in Köln mit direktem Ansprechpartner
            und verlässlicher Ausführung.
          </p>
          <p className="mt-4 text-sm text-white/85">{ADDRESS_STREET} · {ADDRESS_ZIP_CITY}</p>
          <p className="text-sm text-white/85">
            WhatsApp: {PHONE_WHATSAPP_DISPLAY} · {CONTACT_EMAIL}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Navigation</p>
          <div className="mt-4 space-y-2 text-sm text-white/90">
            <Link className="block transition-colors hover:text-accent" to="/">
              Startseite
            </Link>
            <Link className="block transition-colors hover:text-accent" to="/leistungen">
              Leistungen
            </Link>
            <Link className="block transition-colors hover:text-accent" to="/referenzen">
              Referenzen
            </Link>
            <Link className="block transition-colors hover:text-accent" to="/ueber-uns">
              Über uns
            </Link>
            <Link className="block transition-colors hover:text-accent" to="/kontakt">
              Kontakt
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Leistungen</p>
          <div className="mt-4 space-y-2 text-sm text-white/90">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                className="block transition-colors hover:text-accent"
                to={`/leistungen/${service.slug}`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Direkt anfragen</p>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Am schnellsten erreichen Sie uns per WhatsApp. Alternativ nutzen Sie das Formular.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppLink variant="onDark" className="justify-center sm:justify-start">
              WhatsApp schreiben
            </WhatsAppLink>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-primary">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-6 text-xs text-white/65 sm:justify-between sm:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link className="transition-colors hover:text-accent" to="/impressum">
              Impressum
            </Link>
            <Link className="transition-colors hover:text-accent" to="/datenschutz">
              Datenschutz
            </Link>
            <Link className="transition-colors hover:text-accent" to="/agb">
              AGB
            </Link>
          </div>
          <p className="text-center text-white/45">© {new Date().getFullYear()} {COMPANY_NAME}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
