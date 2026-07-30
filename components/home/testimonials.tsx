import { Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'WINZEE gave me back my life. The counsellors never gave up on me, even when I had given up on myself. Two years clean and grateful every day.',
    name: 'Thabo M.',
    role: 'In recovery',
    initials: 'TM',
  },
  {
    quote:
      'As a mother, I felt so alone. The family programme helped us understand, forgive and heal together. Our home is peaceful again.',
    name: 'Nomsa D.',
    role: 'Parent',
    initials: 'ND',
  },
  {
    quote:
      'The team treated my son with dignity and care. Their aftercare support made all the difference in keeping him on track.',
    name: 'Johan V.',
    role: 'Family member',
    initials: 'JV',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Stories of Hope"
          title="Lives Changed at WINZEE"
          description="Real words from the people and families whose lives have been transformed."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Card className="flex h-full flex-col gap-5 border-border p-7">
                <Quote className="h-9 w-9 text-accent" aria-hidden="true" />
                <p className="flex-1 text-pretty leading-relaxed text-foreground">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 font-semibold text-primary">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
