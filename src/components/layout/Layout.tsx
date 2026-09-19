import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { BookingProvider } from '../booking/BookingProvider'
import { Footer } from './Footer'
import { Header } from './Header'

/** Restores scroll position on navigation (router does not do this for us). Honors #hash links. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <BookingProvider>
      <a
        href="#main"
        className="fixed start-4 top-2 z-50 -translate-y-20 rounded-soft bg-sage-900 px-4 py-2 text-ivory focus:translate-y-0"
      >
        تخطَّ إلى المحتوى
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </BookingProvider>
  )
}
