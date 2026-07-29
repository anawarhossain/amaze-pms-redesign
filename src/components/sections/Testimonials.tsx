"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FadeIn } from "@/components/animations/FadeIn"
import { IconStar, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Manager",
    company: "Tech Park Solutions",
    text: "Amaze PMS has been our property management partner for over 5 years. Their security and housekeeping teams are exceptionally professional. The in-house service model ensures quick resolution of any issues.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    company: "Premier Hospitals",
    text: "We needed a partner who could handle the complex facility requirements of a multi-speciality hospital. Amaze PMS exceeded our expectations with their technical expertise and round-the-clock support.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Estate Manager",
    company: "Elite Towers",
    text: "The team at Amaze PMS transformed our property management. Their landscaping and pest control services are top-notch. Highly recommend their integrated approach.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "VP Operations",
    company: "Global Infra Ltd",
    text: "Managing 20M+ sq.ft of diverse properties requires a partner who understands scale. Amaze PMS delivers consistently across all our locations with their PAN INDIA presence.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "HR Head",
    company: "Corp Offices Inc",
    text: "What sets Amaze PMS apart is their staff welfare focus. Their trained personnel, regular audits, and compliance-driven approach give us complete peace of mind.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext])

  const t = testimonials[current]

  return (
    <SectionWrapper id="testimonials" className="bg-muted/30">
      <Container>
        <FadeIn>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by 200+ valued partners across India"
            centered
          />
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border bg-card p-8 shadow-sm sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <IconStar
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="mt-8">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground/60 transition-colors hover:border-primary/30 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <IconChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground/60 transition-colors hover:border-primary/30 hover:text-primary"
              aria-label="Next testimonial"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
