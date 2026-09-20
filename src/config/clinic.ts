/**
 * Single source of truth for clinic information.
 * Everything below is placeholder data: replace it here (or via the VITE_* variables in
 * `.env`, see `.env.example`) and the whole site updates. VITE_* values are public.
 */
const env = import.meta.env

const phone = env.VITE_CLINIC_PHONE ?? '+201001234567'

/**
 * wa.me only targets a chat when the number is digits-only in international format
 * (no "+", spaces, dashes, or leading zeros). Anything else makes WhatsApp fall back to
 * its "choose a contact" screen, so we normalise whatever was typed in the env/config.
 * Egyptian local numbers (01xxxxxxxxx) are converted to 201xxxxxxxxx.
 */
function toWhatsAppNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '').replace(/^00/, '')
  return digits.startsWith('0') ? `20${digits.slice(1)}` : digits
}

const whatsappNumber = toWhatsAppNumber(env.VITE_WHATSAPP_NUMBER || '201552004509')

/** Every WhatsApp link on the site goes through here so the clinic number is always preselected. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const clinic = {
  name: 'D&C Vet Clinic',
  arabicName: 'عيادة D&C البيطرية',
  slogan: 'رعاية أحنّ، بخبرة واهتمام.',
  description:
    'عيادة بيطرية متكاملة للكلاب والقطط، نقدّم فيها الكشف والتطعيمات والجراحة والأسنان والتحاليل والأشعة والطوارئ في مكان هادئ ومريح لك ولصديقك.',
  siteUrl: env.VITE_SITE_URL ?? 'https://example.com',

  phone,
  /** Human-readable phone, shown in the UI. */
  phoneDisplay: '0155 200 4509',
  email: env.VITE_CLINIC_EMAIL ?? 'info@dcvetclinic.example',

  address: {
    street: 'شارع عبد السلام عارف، سابا باشا',
    city: 'الاسكندرية',
    landmark: 'بجوار سراي ماركت',
  },

  workingHours: [
    { days: 'من السبت إلى الخميس', hours: '10 صباحًا – 10 مساءً' },
    { days: 'الجمعة', hours: '4 مساءً – 10 مساءً' },
  ],
  emergencyNote: 'حالات الطوارئ: اتصل بنا أولًا لنجهّز الفريق لاستقبالك.',

  social: {
    facebook: env.VITE_FACEBOOK_URL ?? 'https://www.facebook.com/DandCVetClinic/',
    instagram: env.VITE_INSTAGRAM_URL ?? 'https://www.instagram.com/dandcvetclinc/?hl=en',
    tiktok: env.VITE_TIKTOK_URL ?? 'https://tiktok.com/',
    youtube: env.VITE_YOUTUBE_URL ?? 'https://youtube.com/',
    whatsapp: whatsappUrl(),
  },
} as const

export const telLink = `tel:${phone}`
export const mailLink = `mailto:${clinic.email}`

// export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//   `${clinic.address.street}، ${clinic.address.city}`,
// )}`

export const mapsLink = `https://www.google.com/maps/place/D%26C+vet+clinic+and+pets+store+%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%AF%D9%8A+%D8%A7%D9%86%D8%AF+%D8%B3%D9%8A+%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.23389,29.9506456,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c5fa6a1c8fa9:0x7991aa5478ea167d!8m2!3d31.2338855!4d29.9555112!16s%2Fg%2F11rzr__bk5?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D${encodeURIComponent(
  `${clinic.address.street}، ${clinic.address.city}`,
)}`

export const navLinks = [
  { label: 'الرئيسية', to: '/' },
  { label: 'خدماتنا', to: '/services' },
  { label: 'مدونة', to: '/blog' },
  { label: 'جاليري', to: '/gallery' },
  { label: 'فريقنا', to: '/team' },
] as const
