"use client"

import Link from "next/link"
import { IconArrowUp, IconPhone, IconMail, IconMapPin } from "@tabler/icons-react"
import { COMPANY, FOOTER_LINKS } from "@/lib/constants"
import { Container } from "@/components/ui/Container"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold">
              Amaze <span className="text-primary">PMS</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
              A one stop solutions for all your property management needs.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground">
                X
              </span>
              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground">
                in
              </span>
              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground">
                f
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Menu
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.menu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Our Presence
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.presence.map((loc) => (
                <li
                  key={loc}
                  className="text-sm text-secondary-foreground/70"
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <IconMapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/70">
                  {COMPANY.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone size={16} className="shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/70">
                  {COMPANY.phoneAlt}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconMail size={16} className="shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/70">
                  {COMPANY.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex items-center justify-between py-6">
          <p className="text-sm text-secondary-foreground/60">
            {COMPANY.copyright}
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-secondary-foreground/70 transition-colors hover:bg-white/20 hover:text-secondary-foreground"
            aria-label="Back to top"
          >
            <IconArrowUp size={18} />
          </button>
        </Container>
      </div>
    </footer>
  )
}
