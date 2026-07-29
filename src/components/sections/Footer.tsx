"use client"

import { useState } from "react"
import Link from "next/link"
import {
  IconArrowUp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconChevronDown,
} from "@tabler/icons-react"
import { COMPANY, FOOTER_LINKS } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between md:cursor-default md:pointer-events-none"
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider">
          {title}
        </h3>
        <IconChevronDown
          size={16}
          className={cn(
            "shrink-0 transition-transform duration-200 md:hidden",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mt-4"
        )}
      >
        {children}
      </div>
    </div>
  )
}

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
              <a
                href="#"
                aria-label="Follow us on X (formerly Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground"
              >
                X
              </a>
              <a
                href="#"
                aria-label="Follow us on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-secondary-foreground/60 transition-colors hover:bg-white/20 hover:text-secondary-foreground"
              >
                f
              </a>
            </div>
          </div>

          <AccordionSection title="Menu">
            <ul className="space-y-3">
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
          </AccordionSection>

          <AccordionSection title="Quick Links">
            <ul className="space-y-3">
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
          </AccordionSection>

          <AccordionSection title="Our Presence">
            <ul className="space-y-3">
              {FOOTER_LINKS.presence.map((loc) => (
                <li key={loc} className="text-sm text-secondary-foreground/70">
                  {loc}
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Contact">
            <div className="space-y-3">
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
          </AccordionSection>
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
