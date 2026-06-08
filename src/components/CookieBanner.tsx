import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const STORAGE_KEY = 'rm-cleanbau-cookie-consent'

export type CookieConsent = 'all' | 'essential'

export function getCookieConsent(): CookieConsent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'all' || v === 'essential') return v
  } catch {
    /* ignore */
  }
  return null
}

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getCookieConsent() === null)
  }, [])

  const save = (value: CookieConsent) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    setVisible(false)
    window.dispatchEvent(new Event('cookie-consent-changed'))
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[200] border-t border-border bg-surface shadow-[0_-8px_30px_rgba(0,38,61,0.12)]"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div className="container relative mx-auto max-w-5xl px-4 py-4 md:px-8 md:py-6">
        <button
          type="button"
          className="absolute right-3 top-3 rounded p-1.5 text-primary/45 hover:bg-bg hover:text-primary md:right-6 md:top-6"
          onClick={() => save('essential')}
          aria-label="Nur notwendige Cookies und schließen"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col gap-4 pr-10 md:flex-row md:items-center md:justify-between md:gap-8 md:pr-12">
          <p className="text-sm leading-6 text-primary/90">
            Wir verwenden Cookies und ähnliche Technologien. Technisch notwendige Cookies bzw. die
            Speicherung Ihrer Cookie-Einstellung sind für den Betrieb der Website erforderlich. Details
            in der{' '}
            <Link className="font-semibold text-accent hover:underline" to="/datenschutz">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="border border-border bg-bg px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              onClick={() => save('essential')}
            >
              Nur notwendige
            </button>
            <button
              type="button"
              className="border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accentHover"
              onClick={() => save('all')}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
