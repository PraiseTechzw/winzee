import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function DonationBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
        <div className="flex items-start gap-4">
          <span className="hidden rounded-full bg-primary-foreground/10 p-3 md:inline-flex">
            <Heart className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold text-balance md:text-3xl">
              Your support changes lives
            </h2>
            <p className="mt-2 max-w-xl text-primary-foreground/80 leading-relaxed">
              Every contribution helps us provide counselling, rehabilitation, and community programmes to those who need
              it most. Stand with WINZEE today.
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
