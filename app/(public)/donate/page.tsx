import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { DonateForm } from '@/components/donate/donate-form'
import { CTASection } from '@/components/cta-section'
import { Card } from '@/components/ui/card'
import { HeartPulse, Users, GraduationCap, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Your donation to WINZEE funds counselling, rehabilitation and community outreach — restoring hope and changing lives affected by substance abuse.',
}

const uses = [
  { icon: HeartPulse, title: 'Treatment & Rehabilitation', text: 'Fund life-changing recovery programmes for those who cannot afford care.' },
  { icon: Users, title: 'Family Support', text: 'Help families heal with therapy, education and support groups.' },
  { icon: GraduationCap, title: 'Youth Prevention', text: 'Bring drug-awareness education into schools and communities.' },
  { icon: ShieldCheck, title: 'Aftercare', text: 'Sustain long-term recovery with ongoing support and relapse prevention.' },
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Work"
        title="Donate"
        description="Every contribution helps someone take the next step toward recovery. Your generosity restores hope and rebuilds lives."
        breadcrumb={[{ label: 'Donate' }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Give"
              title="Your gift changes lives"
              description="WINZEE relies on the generosity of donors and partners to keep our doors open to everyone — regardless of their ability to pay."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {uses.map((u, i) => (
                <Reveal key={u.title} delay={(i % 2) * 80}>
                  <Card className="flex h-full flex-col gap-3 p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <u.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-navy">{u.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{u.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
              <DonateForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHeading
            eyebrow="Other Ways to Give"
            title="Partner with us"
            description="Prefer an EFT or corporate partnership? Contact our team for banking details, Section 18A tax certificates and partnership opportunities."
          />
        </div>
      </section>

      <CTASection
        title="Want to give your time instead?"
        description="Volunteers are the heartbeat of WINZEE. Join our community of mentors, event helpers and peer supporters."
        primaryLabel="Become a Volunteer"
        primaryHref="/volunteer"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
