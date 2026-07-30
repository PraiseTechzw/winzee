import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function AboutPreview() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/about-center.png"
                alt="The WINZEE recovery and wellness centre"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-accent px-6 py-5 text-accent-foreground shadow-lg sm:block">
              <p className="font-heading text-3xl font-extrabold">15+</p>
              <p className="text-sm font-medium">Years of service</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">About WINZEE</span>
            <h2 className="mt-2 text-pretty font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A place of healing, dignity and second chances
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              WINZEE is a community-based recovery and wellness centre supporting people affected by substance abuse.
              Through professional care and compassion, we help individuals reclaim their lives and rebuild strong,
              drug-free communities.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <Target className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">Our Mission</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  To provide accessible, compassionate treatment and support that empowers lasting recovery.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <Eye className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">Our Vision</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Healthy, resilient and drug-free communities where everyone can thrive.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {['Qualified, caring professionals', 'Confidential and non-judgemental', 'Family-centred approach'].map(
                (point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                    {point}
                  </li>
                ),
              )}
            </ul>

            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
