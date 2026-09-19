import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { clinic } from '../config/clinic'

/**
 * Per-route <title>, meta description and canonical link.
 * Static hosting means there is no server-side head, so this runs on the client on every route.
 */
export function usePageMeta(title: string | null, description: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
      ? `${title} | ${clinic.name}`
      : `${clinic.name} | رعاية أحنّ لصديقك المقرّب`

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    meta?.setAttribute('content', description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${clinic.siteUrl.replace(/\/$/, '')}${pathname === '/' ? '' : pathname}`
  }, [title, description, pathname])
}
