import { useState } from 'react'
import { Link } from 'react-router-dom'
import WhatsAppLink from './WhatsAppLink'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: 'Büroreinigung',
  message: '',
  privacy: false,
}

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return 'Bitte füllen Sie alle Pflichtfelder aus.'
    }
    if (!formData.privacy) {
      return 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    }
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setStatus('error')
      setErrorMessage(validationError)
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      let payload = null
      try {
        payload = await response.json()
      } catch {
        payload = null
      }

      if (!response.ok || !payload?.success) {
        setStatus('error')
        setErrorMessage(payload?.error || 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.')
        return
      }

      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
      setErrorMessage('Es besteht aktuell keine Verbindung. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="border border-border bg-white p-5">
        <p className="text-sm font-semibold text-primary">Lieber direkt und schnell?</p>
        <p className="mt-1 text-sm text-primary/80">
          Unsere schnellste Kontaktart ist WhatsApp - dort antworten wir in der Regel am schnellsten.
        </p>
        <div className="mt-4">
          <WhatsAppLink variant="solid">WhatsApp öffnen</WhatsAppLink>
        </div>
      </div>
      <form className="space-y-5 border border-border bg-bg p-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-primary/90">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-border bg-white px-4 py-3 text-primary focus:outline-none"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-primary/90">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-border bg-white px-4 py-3 text-primary focus:outline-none"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm text-primary/90">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-border bg-white px-4 py-3 text-primary focus:outline-none"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm text-primary/90">
          Betreff
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-border bg-white px-4 py-3 text-primary focus:outline-none"
        >
          <option>Büroreinigung</option>
          <option>Glasreinigung</option>
          <option>Unterhaltsreinigung</option>
          <option>Bau- &amp; Sonderreinigung</option>
          <option>Transport &amp; Logistik</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-primary/90">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-border bg-white px-4 py-3 text-primary focus:outline-none"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-primary/90" htmlFor="privacy">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={formData.privacy}
          onChange={handleChange}
          required
        />
        <span>
          Ich habe die{' '}
          <Link className="font-semibold text-accent hover:underline" to="/datenschutz">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und stimme zu.
        </span>
      </label>

      <button
        type="submit"
        className="inline-block border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentHover disabled:opacity-70"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Anfrage senden'}
      </button>

      {status === 'success' && (
        <p className="text-sm font-medium text-green-700">
          Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.
        </p>
      )}
      {status === 'error' && <p className="text-sm font-medium text-red-700">{errorMessage}</p>}
    </form>
    </div>
  )
}

export default ContactForm
