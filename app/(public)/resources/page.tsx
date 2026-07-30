import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, BookOpen, Phone, Download, LifeBuoy } from "lucide-react"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful resources, guides, emergency contacts and frequently asked questions about substance abuse and recovery.",
}

const guides = [
  { title: "Recognising the Signs of Substance Abuse", type: "Guide (PDF)", icon: FileText },
  { title: "Supporting a Loved One in Recovery", type: "Guide (PDF)", icon: BookOpen },
  { title: "Building Your Relapse Prevention Plan", type: "Worksheet (PDF)", icon: FileText },
  { title: "Understanding the Treatment Journey", type: "Guide (PDF)", icon: BookOpen },
]

const helplines = [
  { name: "WINZEE 24/7 Helpline", number: siteConfig.emergency },
  { name: "National Substance Abuse Line", number: "0800 12 13 14" },
  { name: "Emergency Services", number: "10111" },
  { name: "SADAG Mental Health Line", number: "0800 456 789" },
]

const faqs = [
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Every conversation, assessment and treatment record is strictly confidential and handled in line with professional and legal standards.",
  },
  {
    q: "How do I know if I need help?",
    a: "If substance use is affecting your health, relationships, work or wellbeing — or if loved ones are concerned — a confidential assessment can help you understand your options. There is no harm in reaching out.",
  },
  {
    q: "How much do your services cost?",
    a: "We are committed to making care accessible. We offer sliding-scale fees and can discuss options during your first contact. No one is turned away for lack of funds.",
  },
  {
    q: "Can family members get support too?",
    a: "Yes. Substance abuse affects the whole family. We offer family therapy, education and support groups for loved ones.",
  },
  {
    q: "How long does treatment take?",
    a: "It varies by individual and programme. Rehabilitation may run from 4 to 12 weeks, followed by ongoing aftercare and support to sustain recovery.",
  },
  {
    q: "Do you offer aftercare?",
    a: "Yes. Recovery is a lifelong journey. Our aftercare and support groups help you stay on track long after formal treatment ends.",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & Guidance"
        title="Resources"
        description="Practical guides, emergency helplines and answers to common questions — everything you need to take the next step with confidence."
        breadcrumb={[{ label: "Resources" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Downloads"
            title="Guides & worksheets"
            description="Free resources to help you and your loved ones understand substance abuse and recovery."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {guides.map((guide, i) => (
              <Reveal key={guide.title} delay={(i % 2) * 80}>
                <Card className="flex items-center gap-4 p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <guide.icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-navy">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.type}</p>
                  </div>
                  <Button size="icon" variant="ghost" aria-label={`Download ${guide.title}`}>
                    <Download className="h-5 w-5" />
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3">
            <LifeBuoy className="h-8 w-8 text-accent" />
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Emergency helplines</h2>
          </div>
          <p className="mt-2 max-w-2xl text-background/80">
            If you or someone you know is in crisis, help is available right now. These lines are free and
            confidential.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helplines.map((line) => (
              <a
                key={line.name}
                href={`tel:${line.number.replace(/\s/g, "")}`}
                className="rounded-xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
              >
                <Phone className="h-5 w-5 text-secondary" />
                <p className="mt-3 text-sm text-background/70">{line.name}</p>
                <p className="mt-1 font-heading text-lg font-bold">{line.number}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">Still have questions?</p>
            <Button asChild className="mt-3">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
