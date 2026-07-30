import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { DynamicIcon } from "@/components/dynamic-icon"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Clock, UserCheck, ArrowRight, PhoneCall } from "lucide-react"
import { services } from "@/lib/site"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }
  return { title: service.title, description: service.summary }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        description={service.summary}
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <DynamicIcon name={service.icon} className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-heading text-2xl font-bold text-navy">About this service</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Objectives</h3>
                <ul className="mt-4 space-y-3">
                  {service.objectives.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Benefits</h3>
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="p-6">
              <h3 className="font-heading text-lg font-semibold text-navy">Service details</h3>
              <Separator className="my-4" />
              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <dt className="font-medium text-navy">Duration</dt>
                    <dd className="text-muted-foreground">{service.duration}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <dt className="font-medium text-navy">Eligibility</dt>
                    <dd className="text-muted-foreground">{service.eligibility}</dd>
                  </div>
                </div>
              </dl>
            </Card>

            <Card className="bg-navy p-6 text-background">
              <h3 className="font-heading text-lg font-semibold">Ready to take the first step?</h3>
              <p className="mt-2 text-sm text-background/80">
                Reach out for a confidential conversation. We&apos;re here to help.
              </p>
              <Button asChild className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  <PhoneCall className="h-4 w-4" />
                  Get Help Now
                </Link>
              </Button>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl font-bold text-navy">Other services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <DynamicIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading font-semibold text-navy">{s.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
