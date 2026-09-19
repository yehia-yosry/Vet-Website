import { clinic } from '../config/clinic'
import { toWesternDigits } from './format'

export const petKinds = ['كلب', 'قطة', 'أخرى'] as const
export const timeSlots = ['صباحًا (10 – 1)', 'ظهرًا (1 – 5)', 'مساءً (5 – 10)'] as const

export interface BookingValues {
  ownerName: string
  petName: string
  phone: string
  petKind: string
  service: string
  date: string
  timeSlot: string
  notes: string
}

export type BookingErrors = Partial<Record<keyof BookingValues, string>>

export const emptyBooking: BookingValues = {
  ownerName: '',
  petName: '',
  phone: '',
  petKind: '',
  service: '',
  date: '',
  timeSlot: '',
  notes: '',
}

/** Egyptian mobile (010/011/012/015, optional +20) or any international number in E.164 form. */
export function normalizePhone(raw: string): string | null {
  const cleaned = toWesternDigits(raw).replace(/[\s\-().]/g, '')
  if (/^(?:\+?20|0)?1[0125]\d{8}$/.test(cleaned)) {
    return `+20${cleaned.replace(/^(?:\+?20|0)/, '')}`
  }
  if (/^\+[1-9]\d{7,14}$/.test(cleaned)) return cleaned
  return null
}

export function todayIso(): string {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60_000
  return new Date(now.getTime() - offset).toISOString().slice(0, 10)
}

export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}
  if (values.ownerName.trim().length < 2) errors.ownerName = 'من فضلك اكتب اسمك بالكامل'
  if (values.petName.trim().length < 1) errors.petName = 'من فضلك اكتب اسم حيوانك'
  if (!values.phone.trim()) errors.phone = 'رقم الهاتف مطلوب'
  else if (!normalizePhone(values.phone)) errors.phone = 'رقم الهاتف غير صحيح، مثال: 01001234567'
  if (!values.petKind) errors.petKind = 'اختر نوع الحيوان'
  if (!values.service) errors.service = 'اختر الخدمة المطلوبة'
  if (!values.date) errors.date = 'اختر اليوم المناسب لك'
  else if (values.date < todayIso()) errors.date = 'اختر يومًا اليوم أو بعده'
  if (!values.timeSlot) errors.timeSlot = 'اختر الفترة المناسبة'
  return errors
}

const arabicLongDate = new Intl.DateTimeFormat('ar-EG-u-nu-latn', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

/**
 * Builds the wa.me link with the booking pre-written.
 * This is the only "submission" step: there is no backend. If a booking API is added later,
 * replace the call site in BookingModal with a request and keep this as the fallback.
 */
export function buildWhatsAppLink(values: BookingValues): string {
  const lines = [
    `السلام عليكم، حابب أحجز موعد في ${clinic.arabicName}.`,
    '',
    `الاسم: ${values.ownerName.trim()}`,
    `اسم الحيوان: ${values.petName.trim()} (${values.petKind})`,
    `رقم الهاتف: ${normalizePhone(values.phone)}`,
    `الخدمة: ${values.service}`,
    `الموعد المفضل: ${arabicLongDate.format(new Date(`${values.date}T12:00:00`))}، ${values.timeSlot}`,
  ]
  if (values.notes.trim()) lines.push(`ملاحظات: ${values.notes.trim()}`)
  lines.push('', 'شكرًا لكم.')
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
}
