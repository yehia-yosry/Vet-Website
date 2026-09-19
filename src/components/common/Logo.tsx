import { Link } from 'react-router'
import { logo } from '../../config/images'
import { clinic } from '../../config/clinic'
import { cn } from '../../lib/cn'

/**
 * The supplied logo file is a 960×960 square with wide empty margins around the artwork.
 * The file itself is never edited: this component only shows the artwork area of it
 * (a 756×290 window starting at x=106, y=301) and multiplies away its off-white paper
 * colour so it sits cleanly on the cream background. If a tightly-trimmed or transparent
 * logo is supplied later, replace `branding/logo.jpg` and swap this for a plain <img>.
 */
export function LogoImage({ className }: { className?: string }) {
  return (
    <span
      className={cn('relative block overflow-hidden', className)}
      style={{ aspectRatio: '756 / 290' }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width={960}
        height={960}
        decoding="async"
        className="absolute max-w-none mix-blend-multiply select-none"
        style={{ width: '126.98%', left: '-14.02%', top: '-103.8%' }}
      />
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${clinic.arabicName}: الصفحة الرئيسية`} className="inline-block">
      <LogoImage className={cn('w-32 sm:w-36', className)} />
    </Link>
  )
}
