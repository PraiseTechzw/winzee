import { cn } from '@/lib/utils'

const styles: Record<string, string> = {
  New: 'bg-secondary/15 text-secondary',
  'In Progress': 'bg-accent/15 text-accent',
  Resolved: 'bg-primary/15 text-primary',
  Pending: 'bg-secondary/15 text-secondary',
  Approved: 'bg-primary/15 text-primary',
  Onboarding: 'bg-accent/15 text-accent',
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        styles[status] ?? 'bg-muted text-muted-foreground',
      )}
    >
      {status}
    </span>
  )
}
