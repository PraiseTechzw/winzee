'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, Mail, Clock, Heart, ArrowRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { Logo } from '@/components/layout/logo'
import { mainNav, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

// ── Design notes ──────────────────────────────────────────────────────────
// Signature element: the "beacon" — a live pulsing signal that stands in for
// the idea that someone is always listening. It appears next to the
// emergency line in the utility bar and echoes, quietly, in the "Get Help"
// button. Nav links trade flat color-swap states for a drawn underline that
// grows from the center, so the active page reads as "lit up" rather than
// just recolored. Everything else stays restrained so the beacon reads as
// intentional, not decorative noise.
// ───────────────────────────────────────────────────────────────────────────

function Beacon({ className }: { className?: string }) {
  return (
    <span className={cn('relative inline-flex h-2 w-2', className)}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  )
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors',
        active ? 'text-primary' : 'text-foreground/75 hover:text-primary',
      )}
    >
      {label}
      <span
        className={cn(
          'pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transition-transform duration-300 ease-out group-hover:scale-x-100',
          active && 'scale-x-100',
        )}
      />
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-navy text-white/85 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              {siteConfig.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-secondary" />
              {siteConfig.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              {siteConfig.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-semibold text-accent">
              <Beacon />
              Emergency: {siteConfig.emergency}
            </span>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Link href={siteConfig.social.facebook} aria-label="Facebook" className="text-white/70 transition hover:text-secondary">
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.instagram} aria-label="Instagram" className="text-white/70 transition hover:text-secondary">
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.twitter} aria-label="Twitter" className="text-white/70 transition hover:text-secondary">
                <TwitterIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.youtube} aria-label="YouTube" className="text-white/70 transition hover:text-secondary">
                <YoutubeIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* signature hairline: the beacon's glow, run thin across the top edge */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="hidden border-primary/40 text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex"
            >
              <Link href="/donate" className="group">
                <Heart className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:fill-current" />
                Donate
              </Link>
            </Button>
            <Button
              asChild
              className="group relative overflow-hidden bg-accent text-accent-foreground shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:shadow-[0_8px_24px_-6px_theme(colors.accent)] hover:brightness-105"
            >
              <Link href="/get-help" className="inline-flex items-center gap-1.5">
                Get Help
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                {/* emergency callout — surfaced here since the desktop utility bar is hidden on mobile */}
                <div className="mx-2 mt-4 flex items-center gap-2.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5">
                  <Beacon />
                  <div className="text-sm">
                    <span className="font-semibold text-accent">Emergency: {siteConfig.emergency}</span>
                    <p className="text-xs text-foreground/60">{siteConfig.hours}</p>
                  </div>
                </div>

                <nav className="mt-4 flex flex-col gap-1 px-2" aria-label="Mobile navigation">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'relative rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive(item.href)
                          ? 'bg-muted text-primary before:absolute before:inset-y-1.5 before:left-0 before:w-0.5 before:rounded-full before:bg-accent'
                          : 'text-foreground/80 hover:bg-muted',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-2 px-1">
                    <Button asChild variant="outline" className="border-primary text-primary" onClick={() => setOpen(false)}>
                      <Link href="/donate">
                        <Heart className="h-4 w-4" />
                        Donate
                      </Link>
                    </Button>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setOpen(false)}>
                      <Link href="/get-help">Get Help</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
