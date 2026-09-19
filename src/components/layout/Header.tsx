import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu } from 'lucide-react'
import { navLinks, telLink } from '../../config/clinic'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { useBooking } from '../booking/context'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Logo } from '../common/Logo'
import { MobileMenu } from './MobileMenu'

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative py-2 font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-terracotta-500 after:transition-transform after:duration-300 hover:text-terracotta-600 hover:after:scale-x-100',
    isActive ? 'text-terracotta-600 after:scale-x-100' : 'text-sage-900',
  )
  
/**
 * Transparent while resting on top of a page's cream intro, then a solid ivory bar with a soft
 * shadow after the first few pixels of scrolling. No blur/glass: just a calm colour change.
 */
export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const { openBooking } = useBooking()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-500',
        scrolled ? 'bg-ivory/97 py-2 shadow-soft' : 'bg-transparent py-4',
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={navLinkClasses}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={telLink} className={navLinkClasses({ isActive: false })}>
                اتصل بنا
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex lg:h-11 lg:px-6"
            onClick={() => openBooking()}
          >
            احجز موعد
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="فتح القائمة"
            aria-haspopup="dialog"
            className="grid size-11 place-items-center rounded-soft text-sage-900 transition-colors hover:bg-sage-100 lg:hidden"
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
