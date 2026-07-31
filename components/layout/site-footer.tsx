import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons'
import { Logo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mainNav, services, siteConfig } from '@/lib/site'

// Carries the header's "beacon" signature through to the footer — the pulse
// that says someone's listening shouldn't only live at the top of the page.
// It bookends the site: it's the last thing before someone leaves, so the
// emergency line gets the same visual weight here as it does up top.

function Beacon({ tone = 'accent' }: { tone?: 'accent' | 'white' }) {
  const color = tone === 'accent' ? 'bg-accent' : 'bg-white'
  return (
    <span className="relative inline-flex h-2 w-2 shrink-0">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-secondary">
      <span className="h-px w-0 bg-secondary transition-all duration-200 group-hover:w-2.5" aria-hidden="true" />
      {children}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      {/* signature hairline — echoes the one under the header's utility bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Emergency strip */}
      <div className="relative overflow-hidden border-b border-white/10 bg-primary">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 0, transparent 45%), radial-gradient(circle at 80% 50%, white 0, transparent 45%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-heading text-lg font-semibold text-white">
            Need help now? You are not alone.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-white/80">
              <Beacon tone="white" />
              24/7 Emergency Line
            </span>
            <a
              href={`tel:${siteConfig.emergency}`}
              className="group inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:shadow-[0_8px_20px_-6px_theme(colors.accent)] hover:brightness-105"
            >
              {siteConfig.emergency}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="default" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            WINZEE is a substance-abuse recovery and community wellness centre committed to restoring hope, changing
            lives and building drug-free communities.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-secondary">
              <FacebookIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-secondary">
              <InstagramIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.twitter} aria-label="Twitter" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-secondary">
              <TwitterIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-secondary">
              <YoutubeIcon className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {mainNav.slice(0, 7).map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-secondary" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>

          <form className="mt-5">
            <label htmlFor="newsletter" className="text-xs font-medium uppercase tracking-wider text-white/70">
              Newsletter
            </label>
            <p className="mt-1 text-xs text-white/50">Recovery stories and program updates, no spam.</p>
            <div className="mt-2 flex gap-2">
              <Input
                id="newsletter"
                type="email"
                required
                placeholder="Your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-accent"
              />
              <Button type="submit" size="icon" className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/resources" className="hover:text-secondary">Policies</Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/contact" className="hover:text-secondary">Contact</Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/admin" className="hover:text-secondary">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
