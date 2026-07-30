import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { AboutPreview } from "@/components/home/about-preview"
import { RecoverySteps } from "@/components/home/recovery-steps"
import { Testimonials } from "@/components/home/testimonials"
import { NewsPreview } from "@/components/home/news-preview"
import { ServicesGrid } from "@/components/services-grid"
import { DonationBanner } from "@/components/home/donation-banner"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive care for every stage of recovery"
            description="From the first confidential conversation to lasting aftercare, our services are designed to meet you wherever you are on your journey."
          />
          <Reveal>
            <ServicesGrid limit={6} />
          </Reveal>
        </div>
      </section>

      <RecoverySteps />
      <Testimonials />
      <NewsPreview />
      <DonationBanner />
    </>
  )
}
