import type { SVGProps } from 'react'
import {
  Scan,
  Scissors,
  Siren,
  Sparkles,
  Stethoscope,
  Syringe,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIcon } from '../../types'

/**
 * Lucide dropped brand logos and has no tooth glyph, so these are drawn in the same
 * 24px / 1.75 stroke style to stay visually consistent with the rest of the icon set.
 */
function Glyph({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ToothIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M7.5 3.5c-2.2 0-3.5 1.7-3.5 4 0 2 .8 3.2 1.4 5 .6 1.7.5 4 1.2 6.3.3 1 1.7 1.2 2.2.2.7-1.3.9-3.4 3.2-3.4s2.5 2.1 3.2 3.4c.5 1 1.9.8 2.2-.2.7-2.3.6-4.6 1.2-6.3.6-1.8 1.4-3 1.4-5 0-2.3-1.3-4-3.5-4-1.7 0-2.6 1-4.4 1S9.2 3.5 7.5 3.5Z" />
  </Glyph>
)

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M14.5 21v-8h2.6l.5-3.2h-3.1V7.9c0-.9.4-1.7 1.8-1.7h1.4V3.4S16.5 3 15.3 3C12.8 3 11.2 4.5 11.2 7.2v2.6H8.5V13h2.7v8" />
  </Glyph>
)

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </Glyph>
)

export const YoutubeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10 9.4 4.6 2.6-4.6 2.6Z" />
  </Glyph>
)

export const TiktokIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M14 3.5v11a3.6 3.6 0 1 1-3.6-3.6" />
    <path d="M14 3.5c.3 2.3 1.9 3.9 4.4 4.1" />
  </Glyph>
)

export const WhatsappIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M3.2 20.8 4.7 16A8.6 8.6 0 1 1 8 19.3Z" />
    <path d="M9.2 8.6c-.3.8-.1 2 1.2 3.5s2.7 2.1 3.6 2c.6-.1 1.1-.5 1.2-1l-1.6-1-.8.6c-.7-.3-1.6-1.1-1.9-1.9l.6-.8-1-1.6c-.5.1-1.100.5-1.300 1.200Z" />
  </Glyph>
)

const serviceIcons: Record<ServiceIcon, LucideIcon | typeof ToothIcon> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  scissors: Scissors,
  tooth: ToothIcon,
  flask: FlaskConical,
  scan: Scan,
  sparkles: Sparkles,
  siren: Siren,
}

export function ServiceGlyph({ name, className }: { name: ServiceIcon; className?: string }) {
  const Icon = serviceIcons[name]
  return <Icon className={className} aria-hidden="true" strokeWidth={1.6} />
}
