import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL_PREFILLED } from '@/constants/contact'

const variants: Record<string, string> = {
  /** Brand green — light backgrounds */
  solid:
    'border border-[#25D366] bg-[#25D366] text-white hover:bg-[#20bd5a] hover:border-[#20bd5a]',
  /** White on dark hero/footer */
  onDark:
    'border border-[#25D366] bg-[#25D366] text-white hover:bg-[#20bd5a] hover:border-[#20bd5a]',
  /** Outline on dark blue */
  outlineOnDark:
    'border border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary',
  /** Compact header chip */
  nav: 'border border-[#25D366] bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wide px-3 py-2 hover:bg-[#20bd5a]',
  /** Text link style */
  inline: 'border-0 bg-transparent p-0 text-accent underline-offset-4 hover:underline',
}

type Props = {
  variant?: keyof typeof variants
  className?: string
  children?: ReactNode
  icon?: boolean
}

function WhatsAppLink({
  variant = 'solid',
  className = '',
  children = 'WhatsApp',
  icon = true,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-colors no-underline'
  const sizing = variant === 'nav' ? '' : variant === 'inline' ? '' : 'px-6 py-3 text-sm'

  return (
    <a
      href={WHATSAPP_URL_PREFILLED}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${variants[variant] ?? variants.solid} ${className}`.trim()}
    >
      {icon && <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />}
      {children}
    </a>
  )
}

export default WhatsAppLink
