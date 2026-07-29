"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { MagneticButton } from "@/components/animations/MagneticButton"

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 6, speed: 0.3 },
  { size: 40, x: "85%", y: "15%", delay: 1, duration: 8, speed: 0.5 },
  { size: 80, x: "75%", y: "70%", delay: 0.5, duration: 7, speed: 0.2 },
  { size: 30, x: "20%", y: "75%", delay: 2, duration: 5, speed: 0.6 },
  { size: 50, x: "50%", y: "10%", delay: 1.5, duration: 9, speed: 0.4 },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y0 = useTransform(scrollYProgress, [0, 1], [0, floatingShapes[0].speed * 200])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, floatingShapes[1].speed * 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, floatingShapes[2].speed * 200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, floatingShapes[3].speed * 200])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, floatingShapes[4].speed * 200])
  const yTransforms = [y0, y1, y2, y3, y4]

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168,85,247,0.1) 0%, transparent 50%)",
        }}
      />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 rounded-full bg-primary/5"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            y: yTransforms[i],
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container className="relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            {COMPANY.fullName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {COMPANY.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            PAN INDIA presence with 15000+ professionals delivering Security,
            Housekeeping, Technical, and integrated property management
            solutions.
          </motion.p>

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
                className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-accent active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
