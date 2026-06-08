import { Link } from 'react-router-dom'
import {
  Building2,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'
import TestimonialsDemo from '@/components/ui/testimonials-demo'
import WhatsAppLink from '@/components/WhatsAppLink'
import {
  ADDRESS_STREET,
  ADDRESS_ZIP_CITY,
  COMPANY_NAME,
  CONTACT_EMAIL,
  PHONE_WHATSAPP_DISPLAY,
} from '@/constants/contact'
import imgOfficeOpt from '@/assets/optimized/full-length-of-man-in-overalls-cleaning-office-wit-2026-03-08-22-54-16-utc-opt.jpg'
import imgGlassOpt from '@/assets/optimized/glasreinigung-breit-opt.jpg'
import imgBauOpt from '@/assets/optimized/bau-sonderreinigung-opt.jpg'
import imgTransportOpt from '@/assets/optimized/transport-logistik-opt.jpg'
import imgGalleryTeamOpt from '@/assets/optimized/cleaning-company-employees-are-dressed-in-work-clo-2026-01-08-07-57-13-utc-opt.jpg'
import imgGlasHochOpt from '@/assets/optimized/glasreinigung-hoch-opt.jpg'
import logoBlueIcon from '@/assets/NEW LOGOS ICONS ANDFAVICON/logo_blue_icon.png'

const services = [
  {
    title: 'Büroreinigung',
    text: 'Regelmäßige Reinigung von Büros, Sanitärbereichen und Gemeinschaftsflächen. Diskret, pünktlich und auf Wunsch außerhalb der Geschäftszeiten.',
    image: imgOfficeOpt,
  },
  {
    title: 'Glasreinigung',
    text: 'Streifenfreie Reinigung von Fenstern, Schaufronten und Glasfassaden - innen wie außen, in allen Höhenlagen.',
    image: imgGlassOpt,
  },
  {
    title: 'Bau- & Sonderreinigung',
    text: 'Nach Renovierung oder Umbau bringen wir Ihre Räume in einwandfreien Zustand. Schnell, gründlich und termingerecht.',
    image: imgBauOpt,
  },
  {
    title: 'Transport & Logistik',
    text: 'Zuverlässiger Transport im Großraum Köln mit eigenem Fahrzeug bis 3,5 Tonnen. Kurzfristig buchbar.',
    image: imgTransportOpt,
  },
]

const benefits = [
  {
    icon: PhoneCall,
    title: 'Persönlicher Kontakt',
    text: 'Direkter Kontakt ohne Callcenter. Klare Aussagen und schnelle Rückmeldung.',
  },
  {
    icon: Clock3,
    title: 'Kurzfristig verfügbar',
    text: 'Für dringende Einsätze sind wir häufig noch am selben oder nächsten Tag vor Ort.',
  },
  {
    icon: Building2,
    title: 'Alles aus einer Hand',
    text: 'Reinigung, Glasarbeiten, Abriss und Logistik mit einem zentralen Ansprechpartner.',
  },
]

const galleryImages = [
  {
    src: imgGalleryTeamOpt,
    alt: 'Professionelle Unterhaltsreinigung in Büroflächen',
    title: 'Unterhaltsreinigung',
  },
  {
    src: imgGlasHochOpt,
    alt: 'Glas- und Fensterreinigung in der Höhe',
    title: 'Glasreinigung',
  },
  {
    src: imgTransportOpt,
    alt: 'Transport und Logistik mit eigenem Fuhrpark',
    title: 'Transport & Logistik',
  },
]

function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative border-t-0 py-0">
        <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[55fr_45fr]">

          {/* ── Left: text panel ── */}
          <div className="relative z-10 flex flex-col justify-center bg-primary px-8 py-20 lg:px-16 lg:py-28">
            <p className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Gebäudereinigung & Logistik · Köln
            </p>

            <h1 className="max-w-2xl font-bold leading-[1.04] text-white" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
              Sauberkeit,<br />auf die Sie sich<br />verlassen können.
            </h1>

            <p className="mt-7 max-w-[460px] text-base leading-8 text-white/65">
              Professionelle Reinigungsdienstleistungen in Köln und Umgebung.
              Zuverlässig, gründlich und immer pünktlich.
            </p>
            <div className="mt-6 inline-flex items-center gap-4 border border-white/15 bg-white/5 px-5 py-4">
              <img src={logoBlueIcon} alt={`${COMPANY_NAME} Logo`} className="h-16 w-16 object-contain" />
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">Firmenlogo</p>
                <p className="text-lg font-semibold text-white">{COMPANY_NAME}</p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                className="border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accentHover"
                to="/leistungen"
              >
                Leistungen ansehen
              </Link>
              <WhatsAppLink variant="onDark" className="px-8 py-3.5">
                WhatsApp
              </WhatsAppLink>
              <Link
                className="border border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary"
                to="/kontakt"
              >
                Angebot anfragen
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-3 border-t border-white/15 pt-7">
              <div>
                <p className="text-3xl font-bold text-accent">7+</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40">Leistungen</p>
              </div>
              <div className="border-l border-white/15 pl-6">
                <p className="text-3xl font-bold text-accent">Köln</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40">& Umgebung</p>
              </div>
              <div className="border-l border-white/15 pl-6">
                <p className="text-3xl font-bold text-accent">Mo–Sa</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40">verfügbar</p>
              </div>
            </div>
          </div>

          {/* ── Right: full-bleed image + floating card (desktop) ── */}
          <aside className="relative hidden lg:block">
            <img
              src={imgGalleryTeamOpt}
              alt={`Team der ${COMPANY_NAME} im Einsatz`}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />
            {/* subtle dark layer so card is legible */}
            <div className="absolute inset-0" style={{ background: 'rgba(10,35,60,0.42)' }} />

            {/* top-right location badge */}
            <div className="absolute right-6 top-6 border border-accent bg-primary/80 px-4 py-2">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-accent">
                Köln · Mülheim
              </p>
            </div>

            {/* floating contact card */}
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-primary/92 px-7 py-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent">
                Schnellster Kontakt · WhatsApp
              </p>
              <p className="mt-2 text-2xl font-bold leading-tight text-white">{PHONE_WHATSAPP_DISPLAY}</p>
              <WhatsAppLink variant="onDark" className="mt-4 w-full justify-center py-3 sm:w-auto">
                Nachricht senden
              </WhatsAppLink>
              <div className="mt-4 h-px bg-white/15" />
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/70">
                <span>{CONTACT_EMAIL}</span>
                <span>{ADDRESS_STREET} · {ADDRESS_ZIP_CITY}</span>
              </div>
              <p className="mt-2 text-[0.7rem] text-white/40">Mo – Sa · 07:00 – 20:00 Uhr</p>
            </div>
          </aside>

          {/* ── Mobile image strip ── */}
          <div className="relative block h-64 lg:hidden">
            <img
              src={imgGalleryTeamOpt}
              alt={`Team der ${COMPANY_NAME}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,35,60,0.35)' }} />
          </div>

        </div>
      </section>

      <section className="bg-surface py-10">
        <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Direkter Einstieg</p>
            <p className="mt-1 text-lg font-semibold text-primary">Kontakt und Angebotsanfrage sofort erreichbar.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center border border-primary bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryLight"
            >
              Kontakt
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center border border-accent bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentHover"
            >
              Angebotsanfrage
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">Was wir tun</p>
          <h2 className="text-4xl font-bold text-primary">Alles aus einer Hand.</h2>

          <div className="mt-8 overflow-x-auto">
            <div className="grid auto-cols-[minmax(17rem,1fr)] grid-flow-col gap-6 lg:grid-flow-row lg:grid-cols-4">
              {services.map((service, index) => (
                <article key={service.title} className="relative border border-border bg-surface">
                  <img className="h-40 w-full object-cover" src={service.image} alt={service.title} />
                  <div className="relative p-6">
                    <p className="absolute right-4 top-2 text-7xl font-bold text-accent/15">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="relative text-xl font-semibold text-primary">{service.title}</p>
                    <p className="relative mt-3 text-sm leading-7 text-primary/80">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Link className="mt-8 inline-block text-sm font-semibold text-accent hover:text-accentHover" to="/leistungen">
            Alle 7 Leistungen ansehen →
          </Link>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">Warum wir</p>
          <h2 className="text-4xl font-bold text-white">Kein Callcenter. Kein Zwischenhändler.</h2>
          <p className="mt-4 max-w-[560px] text-white/70">
            Sie sprechen direkt mit den Verantwortlichen. Das bedeutet schnelle Entscheidungen,
            ehrliche Aussagen und Termine, die eingehalten werden.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className="border border-white/20 p-8">
                <item.icon className="h-8 w-8 text-white" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-8 lg:grid-cols-[11fr_9fr]">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">Wer wir sind</p>
            <h2 className="text-4xl font-bold text-primary">Inhabergeführt. Persönlich. Aus Köln.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-primary/85">
              Die RM Clean Bau GmbH wurde gegründet, um Unternehmen und Privatkunden in Köln eine
              echte Alternative zu anonymen Großunternehmen zu bieten. Kurze Wege, direkte
              Kommunikation und echte Verlässlichkeit - das ist gelebter Alltag.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-primary/85">
              Unser Sitz in {ADDRESS_ZIP_CITY} ist unser Heimvorteil. Wir kennen die Region, sind schnell
              vor Ort und denken in Lösungen statt in Ausreden.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border border-border bg-bg p-4">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <p className="mt-2 text-sm font-semibold text-primary">Qualitätskontrolle pro Auftrag</p>
              </div>
              <div className="border border-border bg-bg p-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="mt-2 text-sm font-semibold text-primary">Diskrete Teams mit festen Standards</p>
              </div>
            </div>
          </div>
          <aside className="border border-border bg-bg p-10">
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-[0.7rem] uppercase tracking-[0.08em] text-primary/60">Firma</p>
                <p className="mt-1 font-semibold text-primary">{COMPANY_NAME}</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-[0.7rem] uppercase tracking-[0.08em] text-primary/60">E-Mail</p>
                <p className="mt-1 font-semibold text-primary">{CONTACT_EMAIL}</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.08em] text-primary/60">Standort</p>
                <p className="mt-1 font-semibold text-primary">{ADDRESS_ZIP_CITY}</p>
              </div>
            </div>
            <div className="-mx-10 -mb-10 mt-8 bg-accent px-6 py-5">
              <p className="text-sm text-white">Bereit für ein Angebot?</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <WhatsAppLink variant="solid">WhatsApp</WhatsAppLink>
                <Link className="inline-block font-semibold text-white underline-offset-4 hover:underline" to="/kontakt">
                  Oder Formular →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            Einblicke
          </p>
          <h2 className="text-4xl font-bold text-primary">So arbeiten wir vor Ort</h2>
          <p className="mt-4 max-w-2xl text-primary/80">
            Keine Stock-Fassade, sondern echte Einsatzrealität: strukturiert geplant, sauber
            umgesetzt und dokumentiert. So bleibt Qualität messbar und nachvollziehbar.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {galleryImages.map((image) => (
              <article key={image.title} className="border border-border bg-bg">
                <img
                  className="h-56 w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-primary">{image.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-12">
        <div className="container mx-auto px-4 sm:px-8">
          <article className="border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">SEO Keywords</p>
            <p className="mt-2 leading-7 text-primary/85">
              RM Clean Bau GmbH steht in Köln für Gebäudereinigung, Büroreinigung, Glasreinigung,
              Bauendreinigung, Hausmeisterservice, Facility Management, Entrümpelung,
              Haushaltsauflösung, Transportdienstleistungen und Gebäudeservice.
            </p>
          </article>
        </div>
      </section>

      <TestimonialsDemo />

      <section className="bg-accent py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-8 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <h2 className="text-5xl font-bold text-white">Bereit für ein sauberes Ergebnis?</h2>
            <p className="mt-4 max-w-[500px] text-lg leading-8 text-white/85">
              Wir erstellen Ihnen ein unverbindliches Angebot - kostenlos und ohne Verpflichtung.
              Schreiben Sie uns am schnellsten per WhatsApp oder nutzen Sie das Kontaktformular.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/70">WhatsApp</p>
              <p className="text-3xl font-bold text-white">{PHONE_WHATSAPP_DISPLAY}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppLink variant="solid">WhatsApp öffnen</WhatsAppLink>
              <Link
                className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryLight"
                to="/kontakt"
              >
                <Truck className="h-4 w-4" />
                Per E-Mail anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
