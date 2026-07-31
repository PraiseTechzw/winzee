import { Bell } from 'lucide-react'

export function AdminPageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-4">
      <div className="min-w-0">
        <h1 className="truncate font-heading text-xl font-bold text-navy">{title}</h1>
        {subtitle && <p className="truncate text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-background">
          NK
        </span>
      </div>
    </header>
  )
}
