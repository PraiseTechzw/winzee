import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { DynamicIcon } from "@/components/dynamic-icon"
import { Card } from "@/components/ui/card"
import { DonationBanner } from "@/components/donation-banner"
import { programmes } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "WINZEE runs prevention, education and support programmes for youth, schools, universities, families, communities and workplaces.",
}

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prevention & Support"
        title="Our Programmes"
        description="Beyond treatment, we invest in prevention and long-term support — reaching schools, campuses, families and communities to build a drug-free future."
        breadcrumb={[{ label: "Programmes" }]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How We Reach Communities"
            title="Programmes that create lasting change"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 80}>
                <Card className="flex h-full flex-col gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <DynamicIcon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DonationBanner />
    </>
  )
}
