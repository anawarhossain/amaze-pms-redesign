"use client"

import { useRef, useState, useEffect } from "react"
import { useInView, animate } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })

    return () => controls.stop()
  }, [isInView, from, to])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display.toLocaleString()}
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  )
}
