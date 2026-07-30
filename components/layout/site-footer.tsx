import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons'
import { Logo } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mainNav, services, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Emergency strip */}
      <div className="border-b border-white/10 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-center sm:flex-row sm:text-left">
          <p className="font-heading text-lg font-semibold text-white">
            Need help now? You are not alone.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/80">24/7 Emergency Line</span>
            <a href={`tel:${siteConfig.emergency}`} className="rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground">
              {siteConfig.emergency}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed">
            WINZEE is a substance-abuse recovery and community wellness centre committed to restoring hope, changing
            lives and building drug-free communities.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-secondary">
              <FacebookIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-secondary">
              <InstagramIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.twitter} aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-secondary">
              <TwitterIcon className="h-4 w-4 text-white" />
            </Link>
            <Link href={siteConfig.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-secondary">
              <YoutubeIcon className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-secondary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
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
            <div className="mt-2 flex gap-2">
              <Input
                id="newsletter"
                type="email"
                required
                placeholder="Your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button type="submit" size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/resources" className="hover:text-secondary">Policies</Link>
            <Link href="/contact" className="hover:text-secondary">Contact</Link>
            <Link href="/admin" className="hover:text-secondary">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
