import type { SVGProps } from 'react'

/** A four-toe paw print. Used sparingly as a punctuation mark, never as wallpaper. */
export function PawMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <ellipse cx="6.5" cy="14" rx="3" ry="4" transform="rotate(-22 6.5 14)" />
      <ellipse cx="12.5" cy="7.5" rx="3" ry="4.2" transform="rotate(-8 12.5 7.5)" />
      <ellipse cx="20.5" cy="7.5" rx="3" ry="4.2" transform="rotate(8 20.5 7.5)" />
      <ellipse cx="26.5" cy="14" rx="3" ry="4" transform="rotate(22 26.5 14)" />
      <path d="M16.5 15c-4 0-8 4.300-8 8 0 2.700 2.100 4 4.300 3.600 1.300-.2 2.300-.8 3.700-.8s2.400.6 3.700.8c2.200.4 4.300-.9 4.300-3.600 0-3.700-4-8-8-8Z" />
    </svg>
  )
}

/** Hand-drawn style underline that sits under a highlighted word. */
export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path
        d="M2 8.500C22 2 40 11 62 6s38-4 60 1 40 3 76-3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
