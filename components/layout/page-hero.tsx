import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #3fa9f5 0, transparent 45%), radial-gradient(circle at 85% 80%, #1f5faf 0, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-secondary">Home</Link>
            </li>
            {breadcrumb?.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-secondary">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{description}</p>
        )}
      </div>
    </section>
  )
}
