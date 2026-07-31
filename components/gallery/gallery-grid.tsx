'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export type GalleryItem = {
  src: string
  title: string
  category: string
}

const categories = ['All', 'Community', 'Counselling', 'Youth', 'Events'] as const

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<string>('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/70',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Reveal key={item.src} delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={() => setLightbox(item)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-xs font-semibold uppercase tracking-wider text-secondary">
                  {item.category}
                </span>
                <span className="mt-1 block font-heading text-sm font-semibold text-white">{item.title}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src || '/placeholder.svg'}
              alt={lightbox.title}
              width={1200}
              height={900}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-3 text-center font-heading text-lg font-semibold text-white">{lightbox.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}
