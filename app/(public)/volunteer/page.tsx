import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { VolunteerForm } from '@/components/volunteer/volunteer-form'
import { Card } from '@/components/ui/card'
import { HandHeart, Megaphone, CalendarHeart, Sparkles, Heart, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join WINZEE as a volunteer. Become a peer mentor, help with outreach and events, and make a real difference in your community.',
}

const roles = [
  { icon: HandHeart, title: 'Peer Mentor', text: 'Support people in recovery by sharing encouragement and lived experience.' },
  { icon: Megaphone, title: 'Community Outreach', text: 'Help run awareness campaigns and connect people with the support they need.' },
  { icon: CalendarHeart, title: 'Events & Fundraising', text: 'Lend a hand at wellness days, fundraisers and community gatherings.' },
  { icon: Sparkles, title: 'Youth Programmes', text: 'Inspire young people through prevention and mentorship activities.' },
]

const perks = [
  { icon: Heart, title: 'Make a real impact', text: 'Directly change lives in your own community.' },
  { icon: Users, title: 'Join a caring team', text: 'Be part of a supportive, like-minded community.' },
  { icon: Clock, title: 'Flexible commitment', text: 'Give as much or as little time as you can.' },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Give Your Time"
        title="Volunteer With Us"
        description="Our volunteers are the heartbeat of WINZEE. Whatever your skills or availability, there is a meaningful way for you to help restore hope."
        breadcrumb={[{ label: 'Volunteer' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Ways to Help"
            title="Find the right role for you"
            description="Every role makes a difference. Choose the area that fits your passion and skills."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 80}>
                <Card className="flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Volunteer"
              title="The rewards of giving back"
            />
            <div className="mt-8 space-y-4">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 80}>
                  <Card className="flex items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-navy">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <VolunteerForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
