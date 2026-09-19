import { Link } from 'react-router'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { clinic, mailLink, mapsLink, navLinks, telLink } from '../../config/clinic'
import { Container } from '../common/Container'
import { LogoImage } from '../common/Logo'
import { PawMark } from '../common/Decor'
import { SocialLinks } from '../common/SocialLinks'

const columnTitle = 'font-accent mb-4 text-xl text-apricot-300'
const linkClasses = 'transition-colors hover:text-apricot-300'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sage-900 text-ivory/80">
      <PawMark className="pointer-events-none absolute -start-8 -bottom-10 size-56 -rotate-12 text-ivory/[0.04]" />
      <Container className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1.1fr]">
        <div>
          {/* The logo artwork has a light paper background, so it sits on a cream plate. */}
          <Link
            to="/"
            aria-label={`${clinic.arabicName}: الصفحة الرئيسية`}
            className="inline-block rounded-edge bg-ivory px-4 py-3"
          >
            <LogoImage className="w-36" />
          </Link>
          <p className="mt-5 max-w-sm leading-8">{clinic.description}</p>
          <SocialLinks inverse className="mt-6" />
        </div>

        <nav aria-label="روابط الموقع">
          <h2 className={columnTitle}>الصفحات</h2>
          <ul className="grid gap-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={telLink} className={linkClasses}>
                اتصل بنا
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={columnTitle}>تواصل معنا</h2>
          <ul className="grid gap-3.5">
            <li className="flex gap-3">
              <MapPin className="mt-1.5 size-5 shrink-0 text-apricot-300" aria-hidden="true" />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                {clinic.address.street}، {clinic.address.city}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1.5 size-5 shrink-0 text-apricot-300" aria-hidden="true" />
              <a href={telLink} dir="ltr" className={linkClasses}>
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1.5 size-5 shrink-0 text-apricot-300" aria-hidden="true" />
              <a href={mailLink} className={linkClasses}>
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={columnTitle}>مواعيد العمل</h2>
          <ul className="grid gap-3.5">
            {clinic.workingHours.map((slot) => (
              <li key={slot.days} className="flex gap-3">
                <Clock className="mt-1.5 size-5 shrink-0 text-apricot-300" aria-hidden="true" />
                <span>
                  {slot.days}
                  <br />
                  <span className="text-ivory">{slot.hours}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-ivory/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.arabicName}. جميع الحقوق محفوظة.
          </p>
          <p className="font-accent text-lg text-apricot-300">{clinic.slogan}</p>
        </Container>
      </div>
    </footer>
  )
}
