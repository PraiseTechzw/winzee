import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  invert?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-[0.16em]',
            invert ? 'text-secondary' : 'text-accent',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-2 text-pretty font-heading text-3xl font-bold tracking-tight sm:text-4xl',
          invert ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-pretty leading-relaxed', invert ? 'text-white/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
      <div className={cn('mt-5 h-1 w-16 rounded-full bg-accent', align === 'center' && 'mx-auto')} />
    </div>
  )
}
