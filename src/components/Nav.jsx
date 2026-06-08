import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoIconBlue from '../assets/NEW LOGOS ICONS ANDFAVICON/logo_blue_icon.png'
import WhatsAppLink from './WhatsAppLink'
import { COMPANY_NAME } from '../constants/contact'

const navLinks = [
  { to: '/', label: 'Startseite' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="logo-link" onClick={closeMenu} aria-label={`${COMPANY_NAME} – Startseite`}>
          <img className="header-logo-icon" src={logoIconBlue} alt="" width={48} height={48} />
        </NavLink>

        <WhatsAppLink variant="nav" className="md:hidden">
          WhatsApp
        </WhatsAppLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Menü öffnen"
        >
          Menü
        </button>

        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
          <WhatsAppLink
            variant="nav"
            className="hidden !mt-3 w-full justify-center md:!mt-0 md:inline-flex md:w-auto"
          >
            WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav
