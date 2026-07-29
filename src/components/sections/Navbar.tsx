"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants"
import { IconMenu2, IconX } from "@tabler/icons-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("/#")).map((l) =>
      l.href.replace("/#", "")
    )
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (href.startsWith("/#")) {
        e.preventDefault()
        const id = href.replace("/#", "")
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    setIsMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-white/20 backdrop-blur-md border-b border-white/10"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Amaze <span className="text-primary">PMS</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.startsWith("/#")
              ? link.href.replace("/#", "")
              : null
            const isActive = sectionId === activeSection

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-foreground",
                    "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                    isActive
                      ? "text-foreground after:w-full"
                      : "text-foreground/80 after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col items-center justify-center gap-8 bg-background md:hidden">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <IconX size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  )
}
