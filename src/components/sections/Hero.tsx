"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { MagneticButton } from "@/components/animations/MagneticButton"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

const slides = [
  {
    image: "/buildingbanner2.webp",
    title: "Amaze Property Management Solutions Pvt Ltd",
    subtitle: "A one stop solutions for all your property management needs.",
  },
  {
    image: "/physicalsecuritynew.webp",
    title: "Security Services",
    subtitle: "Trained security personnel for comprehensive property protection.",
  },
  {
    image: "/housekeeping.webp",
    title: "House Keeping Services",
    subtitle: "Professional cleaning and maintenance for pristine environments.",
  },
  {
    image: "/banner4.webp",
    title: "Technical Services",
    subtitle: "MEP maintenance and technical support for all properties.",
  },
  {
    image: "/banner5.webp",
    title: "Landscaping Services",
    subtitle: "Expert gardening and landscape design and maintenance.",
  },
  {
    image: "/banner6.webp",
    title: "Pest Control Services",
    subtitle: "Integrated pest management for safe, healthy premises.",
  },
  {
    image: "/banner7.webp",
    title: "Help Desk Management Services",
    subtitle: "24/7 help desk support for residents and tenants.",
  },
  {
    image: "/Parking-Management-System.webp",
    title: "Parking Management",
    subtitle: "Efficient parking solutions for commercial and residential spaces.",
  },
]

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 6, speed: 0.3 },
  { size: 40, x: "85%", y: "15%", delay: 1, duration: 8, speed: 0.5 },
  { size: 80, x: "75%", y: "70%", delay: 0.5, duration: 7, speed: 0.2 },
  { size: 30, x: "20%", y: "75%", delay: 2, duration: 5, speed: 0.6 },
  { size: 50, x: "50%", y: "10%", delay: 1.5, duration: 9, speed: 0.4 },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yTransforms = floatingShapes.map((shape, i) =>
    useTransform(scrollYProgress, [0, 1], [0, shape.speed * 200])
  )

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext])

  const slide = slides[current]

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-secondary"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="absolute inset-0 -z-10">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              y: yTransforms[i],
            }}
            animate={{ scale: [1, 1.1, 0.95, 1.05, 1] }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 pt-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${current}`}
              custom={direction}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-300">
                {COMPANY.fullName}
              </p>

              <h1 className="text-fluid-hero font-bold text-white">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/70">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
              >
                Explore Services
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-3 text-lg font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={goPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Previous slide"
        >
          <IconChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Next slide"
        >
          <IconChevronRight size={18} />
        </button>
      </div>

      <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3a559f] text-white transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8d34b1] text-white transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b63bd] text-white transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
