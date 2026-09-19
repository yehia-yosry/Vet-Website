import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import { Check, MessageCircle, X } from 'lucide-react'
import { services } from '../../data/services'
import {
  buildWhatsAppLink,
  emptyBooking,
  petKinds,
  timeSlots,
  todayIso,
  validateBooking,
  type BookingErrors,
  type BookingValues,
} from '../../lib/booking'
import { cn } from '../../lib/cn'
import { Button } from '../common/Button'
import { PawMark } from '../common/Decor'

interface BookingModalProps {
  open: boolean
  initialService: string
  onClose: () => void
}

type ChangeTarget = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const inputClasses =
  'block h-12 w-full rounded-soft border border-line bg-white px-4 text-ink transition-colors placeholder:text-ink-mute/70 focus:border-sage-600 aria-[invalid=true]:border-terracotta-500'

/**
 * Uses the native <dialog> element: focus trapping, Esc to close and an inert background come
 * from the browser, so keyboard and screen-reader behaviour stays correct with very little code.
 */
export function BookingModal({ open, initialService, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<BookingValues>(emptyBooking)
  const [errors, setErrors] = useState<BookingErrors>({})
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      setValues({ ...emptyBooking, service: initialService })
      setErrors({})
      setWhatsappLink(null)
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open, initialService])

  function update(event: ChangeEvent<ChangeTarget>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name as keyof BookingValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const found = validateBooking(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      const field = formRef.current?.elements.namedItem(firstInvalid)
      const target = field instanceof RadioNodeList ? field[0] : field
      if (target instanceof HTMLElement) target.focus()
      return
    }
    const link = buildWhatsAppLink(values)
    setWhatsappLink(link)
    // Opened synchronously inside the submit gesture so mobile browsers do not block it.
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="booking-title"
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
      className="dialog-sheet m-auto max-h-[100dvh] w-full max-w-xl overflow-y-auto bg-ivory p-0 shadow-lift max-sm:mb-0 max-sm:max-w-none max-sm:rounded-t-lush sm:rounded-lush"
    >
      <div className="p-6 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 font-accent text-xl text-terracotta-500">
              <PawMark className="size-4" />
              يسعدنا استقبالكم
            </p>
            <h2 id="booking-title" className="mt-1 text-2xl text-sage-900 sm:text-3xl">
              احجز موعد
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="grid size-11 shrink-0 place-items-center rounded-soft text-ink-soft transition-colors hover:bg-cream"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        {whatsappLink ? (
          <div className="mt-8 text-center" role="status">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-sage-100 text-sage-800">
              <Check className="size-8" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl text-sage-900">جهّزنا رسالتك على واتساب</h3>
            <p className="mt-2 text-ink-soft">
              اضغط «إرسال» داخل واتساب لتصلنا بياناتك، وسنؤكد الموعد معك في أقرب وقت.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappLink}>
                <MessageCircle className="size-5" aria-hidden="true" />
                لم يفتح واتساب؟ افتحه من هنا
              </Button>
              <Button variant="secondary" onClick={onClose}>
                إغلاق
              </Button>
            </div>
          </div>
        ) : (
          <form ref={formRef} onSubmit={submit} noValidate className="mt-7 grid gap-5">
            <p className="text-ink-soft">
              املأ البيانات التالية وسنجهّز لك رسالة جاهزة نرسلها معًا على واتساب.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="اسمك" name="ownerName" error={errors.ownerName}>
                {(aria) => (
                  <input
                    {...aria}
                    name="ownerName"
                    autoComplete="name"
                    value={values.ownerName}
                    onChange={update}
                    className={inputClasses}
                    placeholder="مثال: مريم أحمد"
                  />
                )}
              </Field>
              <Field label="اسم الحيوان" name="petName" error={errors.petName}>
                {(aria) => (
                  <input
                    {...aria}
                    name="petName"
                    value={values.petName}
                    onChange={update}
                    className={inputClasses}
                    placeholder="مثال: لولو"
                  />
                )}
              </Field>
            </div>

            <Field label="رقم الهاتف" name="phone" error={errors.phone}>
              {(aria) => (
                <input
                  {...aria}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  dir="ltr"
                  value={values.phone}
                  onChange={update}
                  className={cn(inputClasses, 'text-end')}
                  placeholder="01001234567"
                />
              )}
            </Field>

            <Choice
              legend="نوع الحيوان"
              name="petKind"
              options={petKinds}
              value={values.petKind}
              onChange={update}
              error={errors.petKind}
            />

            <Field label="الخدمة المطلوبة" name="service" error={errors.service}>
              {(aria) => (
                <select
                  {...aria}
                  name="service"
                  value={values.service}
                  onChange={update}
                  className={inputClasses}
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field label="اليوم المفضل" name="date" error={errors.date}>
              {(aria) => (
                <input
                  {...aria}
                  name="date"
                  type="date"
                  min={todayIso()}
                  value={values.date}
                  onChange={update}
                  className={inputClasses}
                />
              )}
            </Field>

            <Choice
              legend="الفترة المفضلة"
              name="timeSlot"
              options={timeSlots}
              value={values.timeSlot}
              onChange={update}
              error={errors.timeSlot}
            />

            <Field label="ملاحظات (اختياري)" name="notes">
              {(aria) => (
                <textarea
                  {...aria}
                  name="notes"
                  rows={3}
                  value={values.notes}
                  onChange={update}
                  className={cn(inputClasses, 'h-auto py-3')}
                  placeholder="مثال: عمره 3 أشهر ولم يأخذ أي تطعيم"
                />
              )}
            </Field>

            <Button type="submit" size="lg" className="w-full">
              <MessageCircle className="size-5" aria-hidden="true" />
              أرسل الطلب عبر واتساب
            </Button>
          </form>
        )}
      </div>
    </dialog>
  )
}

interface FieldAria {
  id: string
  'aria-invalid': boolean
  'aria-describedby'?: string
}

interface FieldProps {
  label: string
  name: string
  error?: string
  children: (aria: FieldAria) => ReactNode
}

function Field({ label, name, error, children }: FieldProps) {
  const id = `booking-${name}`
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.95rem] font-semibold text-sage-900">
        {label}
      </label>
      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-terracotta-600">
          {error}
        </p>
      )}
    </div>
  )
}

interface ChoiceProps {
  legend: string
  name: string
  options: readonly string[]
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error?: string
}

/** Segmented radio group: real radio inputs, so arrow-key navigation works natively. */
function Choice({ legend, name, options, value, onChange, error }: ChoiceProps) {
  const errorId = `booking-${name}-error`
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="mb-1.5 text-[0.95rem] font-semibold text-sage-900">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="peer sr-only"
            />
            <span className="block rounded-soft border border-line bg-white px-4 py-2.5 text-[0.95rem] leading-6 transition-colors peer-checked:border-sage-800 peer-checked:bg-sage-800 peer-checked:text-ivory peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-brand">
              {option}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-terracotta-600">
          {error}
        </p>
      )}
    </fieldset>
  )
}
