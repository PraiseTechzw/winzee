import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { ServicesGrid } from "@/components/services-grid"
import { DonationBanner } from "@/components/donation-banner"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore WINZEE's substance-abuse services: assessment, counselling, rehabilitation, family therapy, support groups, relapse prevention and more.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="A full continuum of professional, compassionate care — designed to support you at every stage of the recovery journey."
        breadcrumb={[{ label: "Services" }]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ServicesGrid />
        </div>
      </section>
      <DonationBanner />
    </>
  )
}
