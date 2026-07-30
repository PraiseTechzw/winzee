import Image from "next/image"
import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CTASection } from "@/components/cta-section"
import { Card } from "@/components/ui/card"
import { Target, Eye, HeartHandshake, Award, Users, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WINZEE's mission to restore hope and build drug-free communities through compassionate, professional substance-abuse care.",
}

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "We meet every person with empathy, dignity and zero judgement." },
  { icon: Award, title: "Excellence", text: "Professional, evidence-based care delivered by qualified staff." },
  { icon: Users, title: "Community", text: "Recovery is stronger when families and communities heal together." },
  { icon: Leaf, title: "Hope", text: "We believe lasting change and a drug-free life are possible for everyone." },
]

const team = [
  { name: "Dr. Naledi Khumalo", role: "Clinical Director", initials: "NK" },
  { name: "Sipho Dlamini", role: "Lead Counsellor", initials: "SD" },
  { name: "Aisha Patel", role: "Family Therapist", initials: "AP" },
  { name: "Johan van Wyk", role: "Community Outreach", initials: "JV" },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WINZEE"
        title="Walking the road to recovery, together"
        description="For over a decade, WINZEE has stood alongside individuals and families affected by substance abuse — offering hope, healing and a pathway to a drug-free future."
        breadcrumb={[{ label: "About" }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-center.png"
                alt="The WINZEE community rehabilitation centre"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A safe place to heal and rebuild"
                description="WINZEE was founded on a simple belief: that no one should face addiction alone."
              />
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  What began as a small community support group has grown into a trusted centre offering assessment,
                  counselling, rehabilitation and aftercare. We combine clinical expertise with genuine human care.
                </p>
                <p>
                  Every year we support hundreds of individuals and families, helping them reclaim their health,
                  relationships and futures. Our doors are open to anyone seeking help — regardless of background or
                  circumstance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-t-4 border-t-primary p-8">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To restore hope and transform lives by providing accessible, compassionate and professional
                substance-abuse prevention, treatment and rehabilitation services to individuals, families and
                communities.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className="h-full border-t-4 border-t-accent p-8">
              <Eye className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Healthy, resilient and drug-free communities where every person affected by substance abuse has access
                to the support they need to recover and thrive.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that guide our care"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <Card className="flex h-full flex-col items-center gap-3 p-6 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Team" title="Meet the people behind WINZEE" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 80}>
                <Card className="flex h-full flex-col items-center gap-3 p-6 text-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-navy font-heading text-2xl font-bold text-background">
                    {member.initials}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
