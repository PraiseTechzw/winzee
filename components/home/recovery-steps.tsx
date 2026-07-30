import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { recoverySteps } from '@/lib/site'

export function RecoverySteps() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="The Journey"
          title="How Recovery Works"
          description="Recovery is a journey we take together, one supported step at a time."
        />

        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {recoverySteps.map((item, i) => (
            <div key={item.step} className="flex flex-1 items-center gap-4 lg:flex-col lg:gap-4">
              <Reveal delay={i * 90} className="flex-1 lg:w-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-navy">{item.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
              {i < recoverySteps.length - 1 && (
                <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-accent lg:rotate-0" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
