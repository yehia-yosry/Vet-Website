import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { Phone, X } from 'lucide-react'
import { clinic, navLinks, telLink } from '../../config/clinic'
import { cn } from '../../lib/cn'
import { useBooking } from '../booking/context'
import { Button } from '../common/Button'
import { LogoImage } from '../common/Logo'
import { SocialLinks } from '../common/SocialLinks'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * Native <dialog> drawer: Esc closes it, focus is trapped and returned to the hamburger button
 * automatically. It slides in from the start edge, which is the right side in RTL.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const { openBooking } = useBooking()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label="القائمة الرئيسية"
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      className="dialog-drawer m-0 ms-auto h-dvh max-h-none w-[min(22rem,88vw)] bg-ivory p-0 shadow-lift"
    >
      <div className="flex h-full flex-col overflow-y-auto p-6">
        <div className="flex items-center justify-between">
          <LogoImage className="w-32" />
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق القائمة"
            className="grid size-11 place-items-center rounded-soft text-sage-900 hover:bg-cream"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="التنقل الرئيسي" className="mt-8">
          <ul className="divide-y divide-line border-y border-line">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-14 items-center text-xl font-medium',
                      isActive ? 'text-terracotta-600' : 'text-sage-900',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={telLink}
                className="flex min-h-14 items-center text-xl font-medium text-sage-900"
              >
                اتصل بنا
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 grid gap-3">
          <Button
            size="lg"
            onClick={() => {
              onClose()
              openBooking()
            }}
          >
            احجز موعد
          </Button>
          <Button href={telLink} variant="secondary" size="lg">
            <Phone className="size-5" aria-hidden="true" />
            <span dir="ltr">{clinic.phoneDisplay}</span>
          </Button>
        </div>

        <div className="mt-auto pt-8">
          <p className="mb-3 text-sm text-ink-mute">تابعنا</p>
          <SocialLinks />
        </div>
      </div>
    </dialog>
  )
}
