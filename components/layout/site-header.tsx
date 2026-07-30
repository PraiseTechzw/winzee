'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, Mail, Clock, Heart } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { Logo } from '@/components/layout/logo'
import { mainNav, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-navy text-white/90 lg:block">
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
            <span className="font-semibold text-accent">Emergency: {siteConfig.emergency}</span>
            <div className="flex items-center gap-3">
              <Link href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-secondary">
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-secondary">
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-secondary">
                <TwitterIcon className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-secondary">
                <YoutubeIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Logo />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                  isActive(item.href) ? 'text-primary' : 'text-foreground/80',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex">
              <Link href="/donate">
                <Heart className="h-4 w-4" />
                Donate
              </Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/get-help">Get Help</Link>
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
                <nav className="mt-4 flex flex-col gap-1 px-2" aria-label="Mobile navigation">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive(item.href) ? 'bg-muted text-primary' : 'text-foreground/80 hover:bg-muted',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-2 px-1">
                    <Button asChild variant="outline" className="border-primary text-primary" onClick={() => setOpen(false)}>
                      <Link href="/donate">Donate</Link>
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
