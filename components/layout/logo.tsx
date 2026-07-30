import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label="WINZEE home">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-4.35-9.5-8.5C1 9 2.8 5.5 6.2 5.5c2 0 3.2 1.1 3.8 2.2h.1c.6-1.1 1.8-2.2 3.8-2.2 3.4 0 5.2 3.5 3.7 7C19 16.65 12 21 12 21Z"
            fill="currentColor"
          />
          <path d="M4 12h3l1.5-3 3 6 1.5-3H20" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-xl font-extrabold tracking-tight',
            variant === 'light' ? 'text-white' : 'text-navy',
          )}
        >
          WINZEE
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.18em]',
            variant === 'light' ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          Recovery & Wellness
        </span>
      </span>
    </Link>
  )
}
