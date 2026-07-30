import Image from 'next/image'
import Link from 'next/link'
import { Heart, PhoneCall, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src="/images/hero-community.png"
        alt="A diverse community standing together in hope"
        fill
        priority
        className="object-cover object-center opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(120deg, rgba(23,59,109,0.94) 0%, rgba(31,95,175,0.82) 55%, rgba(63,169,245,0.55) 100%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-secondary" />
          Confidential, compassionate, professional care
        </span>
        <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          Restoring Hope. Changing Lives. Building Drug-Free Communities.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
          WINZEE walks alongside individuals and families affected by substance abuse — offering assessment,
          counselling, rehabilitation and lasting support on the journey to recovery.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/get-help">
              <PhoneCall className="h-5 w-5" />
              Get Help Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-navy">
            <Link href="/donate">
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
