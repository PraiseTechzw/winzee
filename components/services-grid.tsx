import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { DynamicIcon } from '@/components/dynamic-icon'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site'

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 4) * 80}>
          <Link href={`/services/${service.slug}`} className="group block h-full">
            <Card className="flex h-full flex-col gap-4 border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <DynamicIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-navy">{service.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
