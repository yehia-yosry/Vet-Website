export interface ImageAsset {
  /** 1200px-wide WebP: default source. */
  src: string
  /** 640w + 1200w candidates for the browser to choose from. */
  srcSet: string
  alt: string
}

export interface Service {
  id: string
  title: string
  summary: string
  /** Longer copy shown on the services page. */
  details: string
  points: string[]
  icon: ServiceIcon
  /** Services without a photo get a typographic panel instead. */
  image?: ImageAsset
}

export type ServiceIcon =
  'stethoscope' | 'syringe' | 'scissors' | 'tooth' | 'flask' | 'scan' | 'sparkles' | 'siren'

export interface TeamMember {
  id: string
  name: string
  title: string
  specialty: string
  experience: string
  bio: string
  image: ImageAsset
}

export interface Testimonial {
  id: string
  name: string
  petName: string
  petKind: string
  quote: string
  short: string
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'note'; text: string }

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  /** ISO date (yyyy-mm-dd); formatted for display by `formatArabicDate`. */
  date: string
  readingMinutes: number
  cover: ImageAsset
  body: ArticleBlock[]
}

export interface GalleryPhoto {
  id: string
  image: ImageAsset
  /** Layout hint for the editorial mosaic. */
  shape: 'tall' | 'wide' | 'square'
  caption: string
}

export interface FaqItem {
  question: string
  answer: string
}
