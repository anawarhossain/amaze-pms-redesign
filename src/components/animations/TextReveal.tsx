"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}

export function TextReveal({
  text,
  className,
  as: Tag = "p",
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ")

  return (
    <Tag className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: "easeOut",
          }}
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
