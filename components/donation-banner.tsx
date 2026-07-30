import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, HandHeart } from "lucide-react"

export function DonationBanner() {
  return (
    <section className="bg-navy text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1 text-sm font-medium">
            <Heart className="size-4 text-accent" />
            Your support changes lives
          </div>
          <h2 className="font-heading text-2xl font-bold text-balance md:text-3xl">
            Help us rebuild lives affected by substance abuse
          </h2>
          <p className="mt-3 text-pretty text-background/80 leading-relaxed">
            Every contribution funds counselling, rehabilitation, and community outreach across our region. Partner
            with WINZEE to bring hope and recovery to those who need it most.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/donate">
              <HandHeart className="size-5" />
              Donate Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
          >
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
