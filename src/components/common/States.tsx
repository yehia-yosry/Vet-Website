import type { ReactNode } from 'react'
import { PawMark } from './Decor'
import { Button } from './Button'

/** Route-level loading fallback (lazy pages). */
export function LoadingState({ label = 'لحظات، نجهّز الصفحة…' }: { label?: string }) {
  return (
    <div role="status" className="grid min-h-[60vh] place-items-center text-sage-600">
      <div className="flex flex-col items-center gap-4">
        <PawMark className="size-10 animate-pulse" />
        <p className="text-ink-mute">{label}</p>
      </div>
    </div>
  )
}

interface MessageStateProps {
  title: string
  message: string
  action?: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
  children?: ReactNode
}

function MessageState({ title, message, action, secondaryAction, children }: MessageStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 text-center">
      {children}
      <h2 className="text-2xl text-sage-900">{title}</h2>
      <p className="mt-3 text-ink-soft">{message}</p>
      {(action || secondaryAction) && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {action && <Button to={action.to}>{action.label}</Button>}
          {secondaryAction && (
            <Button to={secondaryAction.to} variant="secondary">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export function EmptyState(props: Omit<MessageStateProps, 'children'>) {
  return (
    <MessageState {...props}>
      <PawMark className="mb-5 size-12 text-sage-300" />
    </MessageState>
  )
}

export function ErrorState(props: Omit<MessageStateProps, 'children'>) {
  return (
    <MessageState {...props}>
      <PawMark className="mb-5 size-12 text-apricot-300" />
    </MessageState>
  )
}
