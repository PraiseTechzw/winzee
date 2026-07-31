import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
  image?: { src: string; alt: string }
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Text column */}
        <div>
          <nav aria-label="Breadcrumb" className="mb-5">
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
            <span className="inline-flex items-center rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              {eyebrow}
            </span>
          )}

          <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </div>

        {/* Image column */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #3fa9f5 0, transparent 55%), radial-gradient(circle at 80% 75%, #1f5faf 0, transparent 50%)',
                }}
                aria-hidden="true"
              />
            )}
          </div>

          {/* Floating detail card — swap the copy for something real (rating, stat, credential) */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-sm font-semibold text-navy">Trusted content</p>
            <p className="text-xs text-navy/60">Backed by real sources</p>
          </div>
        </div>
      </div>
    </section>
  )
}
