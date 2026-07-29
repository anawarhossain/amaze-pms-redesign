"use client"

import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { STATS } from "@/lib/constants"
import { FadeIn } from "@/components/animations/FadeIn"

const clientNames = [
  "Tech Park Solutions",
  "Global Infra Ltd",
  "Premier Hospitals",
  "Elite Towers",
  "Urban Spaces",
  "Corp Offices Inc",
  "Royal Residency",
  "Green Valley Estates",
  "Metro Malls",
  "City Corp",
]

export function TrustedPartners() {
  return (
    <SectionWrapper id="trusted-partners" className="bg-muted/50">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Trusted by 200+ valued partners around the India"
            centered
          />
        </FadeIn>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...clientNames, ...clientNames].map((name, i) => (
              <div
                key={i}
                className="flex h-16 w-40 items-center justify-center rounded-lg border bg-card px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-primary/20"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                {"value" in stat ? (
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {typeof stat.value === "string" ? (
                      <span>
                        {stat.value}
                        {stat.suffix && (
                          <span className="ml-0.5">{stat.suffix}</span>
                        )}
                      </span>
                    ) : (
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                ) : (
                  <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.label}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">
                  {"value" in stat ? stat.label : ""}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
