export const COMPANY_NAME = 'RM Clean Bau GmbH'
export const COMPANY_LEGAL_NAME = 'RM Clean Bau GmbH'
export const COMPANY_DOMAIN = 'www.rm-cleanbau.de'
export const CONTACT_EMAIL = 'info@rm-cleanbau.de'

export const ADDRESS_STREET = 'Romaneystraße 5a'
export const ADDRESS_ZIP_CITY = '51063 Köln'
export const ADDRESS_COUNTRY = 'Deutschland'
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_ZIP_CITY}`

export const COMMERCIAL_REGISTER = 'HRB 99035'
export const REGISTER_COURT = 'Amtsgericht Köln'
export const TAX_NUMBER = 'wird nachgereicht'
export const VAT_ID = 'wird nachgereicht'
export const MANAGEMENT = 'wird nachgereicht'

/** German mobile 0152 1507 6331 → international without + for wa.me */
export const WHATSAPP_E164 = '4915215076331'
/** Readable display on the website */
export const PHONE_WHATSAPP_DISPLAY = '0152 1507 6331'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`
export const TEL_HREF = `tel:+${WHATSAPP_E164}`

const defaultMessage = `Hallo, ich hätte eine Anfrage an die ${COMPANY_NAME}.`
export const WHATSAPP_URL_PREFILLED = `${WHATSAPP_URL}?text=${encodeURIComponent(defaultMessage)}`
