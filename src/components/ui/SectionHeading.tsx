import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  as?: "h1" | "h2" | "h3" | "h4"
}

export function SectionHeading({
  title,
  subtitle,
  centered,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <Tag className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </Tag>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
