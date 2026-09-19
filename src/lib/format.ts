/** Arabic month names with Western digits: "18 سبتمبر 2026". */
const dateFormatter = new Intl.DateTimeFormat('ar-EG-u-nu-latn', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function formatArabicDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T12:00:00`))
}

/** "1,500" style grouping with Western digits. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

const arabicIndicDigits = /[٠-٩]/g
/** Converts Arabic-Indic digits typed on Arabic keyboards to Western digits. */
export function toWesternDigits(text: string): string {
  return text.replace(arabicIndicDigits, (d) => String(d.charCodeAt(0) - 0x0660))
}

/** Arabic reading-time label with correct plural forms: دقيقة / دقيقتان / 5 دقائق. */
export function readingTimeLabel(minutes: number): string {
  if (minutes === 1) return 'قراءة في دقيقة'
  if (minutes === 2) return 'قراءة في دقيقتين'
  return minutes <= 10 ? `قراءة في ${minutes} دقائق` : `قراءة في ${minutes} دقيقة`
}
