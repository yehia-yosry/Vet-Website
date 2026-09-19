import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { BookingContext } from './context'
import { BookingModal } from './BookingModal'

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [service, setService] = useState('')

  const openBooking = useCallback((selected = '') => {
    setService(selected)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openBooking }), [openBooking])

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal open={open} initialService={service} onClose={() => setOpen(false)} />
    </BookingContext.Provider>
  )
}
