import { RefreshCw, TriangleAlert } from 'lucide-react'
import { cn } from '../lib/utils'

export function ErrorState({
  message,
  onRetry,
  className,
}: {
  message: string
  onRetry?: () => void
  className?: string
}) {
  return (
    <div
      role="alert"
      className={cn(
        'mx-auto flex max-w-md flex-col items-center gap-3 rounded-3xl border border-border bg-card/60 p-8 text-center',
        className,
      )}
    >
      <span className="grid size-11 place-items-center rounded-full bg-foreground/10">
        <TriangleAlert className="size-5" />
      </span>
      <p className="text-sm text-muted">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform active:scale-95"
        >
          <RefreshCw className="size-4" /> Try again
        </button>
      )}
    </div>
  )
}
