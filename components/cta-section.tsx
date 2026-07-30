import Link from "next/link"
import { Button } from "@/components/ui/button"

type CTAProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  title = "Ready to take the first step?",
  description = "Reach out today for a confidential conversation. Our team is here to help you or your loved one begin the journey to recovery.",
  primaryLabel = "Get Help Now",
  primaryHref = "/get-help",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-navy text-balance md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
