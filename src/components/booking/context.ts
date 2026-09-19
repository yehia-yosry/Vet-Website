import { createContext, useContext } from 'react'

interface BookingContextValue {
  /** Opens the booking dialog, optionally with a service pre-selected (by title). */
  openBooking: (service?: string) => void
}

export const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const value = useContext(BookingContext)
  if (!value) throw new Error('useBooking must be used inside <BookingProvider>')
  return value
}
