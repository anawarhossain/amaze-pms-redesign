"use client"

import { IconCircleCheck } from "@tabler/icons-react"
import { WHY_CHOOSE_US } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FadeIn } from "@/components/animations/FadeIn"

const categories = [
  "Scale & Reach",
  "Service Model",
  "Staffing",
  "Training",
  "Risk Management",
  "Documentation",
  "Audit & Improvement",
  "Maintenance",
  "Government Liaison",
  "Comprehensive Audits",
  "AMC Management",
  "Staff Welfare",
]

export function WhyChooseUs() {
  return (
    <SectionWrapper id="strength" className="bg-muted/30">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Why Choose Us"
            subtitle="Our Service Benefits"
            centered
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:-translate-x-px md:block" />

          <div className="space-y-8 md:space-y-12">
            {WHY_CHOOSE_US.map((item, i) => {
              const isLeft = i % 2 === 0

              return (
                <FadeIn
                  key={i}
                  delay={Math.min(i * 0.05, 0.3)}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex flex-col gap-4 md:flex-row ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                    <div className="relative z-10 flex items-start gap-4 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-card text-primary shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                        <IconCircleCheck size={16} />
                      </div>
                    </div>

                    <div
                      className={`rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {categories[i]}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">
                        {item}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
