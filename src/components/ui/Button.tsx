"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
          variant === "primary" && "bg-primary text-primary-foreground shadow-sm hover:shadow-md",
          variant === "secondary" && "bg-secondary text-secondary-foreground",
          variant === "outline" && "border border-border bg-transparent hover:bg-accent",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-5 py-2.5 text-base",
          size === "lg" && "px-8 py-3 text-lg",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
