import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageCircle, LifeBuoy } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with WINZEE for confidential support, assessments, family help or general enquiries. Our team is here to help.',
}

const details = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}` },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Address', value: siteConfig.address },
  { icon: Clock, label: 'Office Hours', value: siteConfig.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We're Here to Help"
        title="Contact Us"
        description="Whether you are seeking help for yourself or a loved one, or simply have a question — reach out. Every conversation is confidential and judgement-free."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Emergency strip */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <LifeBuoy className="h-6 w-6" />
            <p className="font-heading text-lg font-semibold">In crisis? Help is available right now, 24/7.</p>
          </div>
          <a
            href={`tel:${siteConfig.emergency.replace(/\s/g, '')}`}
            className="rounded-md bg-accent-foreground/10 px-5 py-2.5 font-heading text-lg font-bold ring-1 ring-accent-foreground/20 transition-colors hover:bg-accent-foreground/20"
          >
            {siteConfig.emergency}
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in Touch"
              title="Reach out to our team"
              description="Choose whichever way is easiest for you. We aim to respond to every message within one working day."
            />
            <div className="mt-8 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={(i % 5) * 60}>
                  <Card className="flex items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="font-heading font-semibold text-navy hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-heading font-semibold text-navy">{d.value}</p>
                      )}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="WINZEE location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.9%2C-26.25%2C28.15%2C-26.1&layer=mapnik"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
