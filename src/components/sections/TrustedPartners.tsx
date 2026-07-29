"use client"

import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Badge } from "@/components/ui/Badge"
import { STATS } from "@/lib/constants"
import { FadeIn } from "@/components/animations/FadeIn"
import {
  IconBuildingSkyscraper,
  IconUsers,
  IconMapPin,
  IconBuilding,
  IconShieldCheck,
  IconCertificate,
  IconHeartHandshake,
  IconClipboardCheck,
} from "@tabler/icons-react"

const trustSignals = [
  { label: "In-house Services", icon: IconBuildingSkyscraper },
  { label: "PAN INDIA Presence", icon: IconMapPin },
  { label: "15000+ Workforce", icon: IconUsers },
  { label: "200+ Clients", icon: IconHeartHandshake },
  { label: "20M Sq.ft Managed", icon: IconBuilding },
  { label: "ISO Certified Processes", icon: IconCertificate },
  { label: "EHS Compliance", icon: IconClipboardCheck },
  { label: "Staff Welfare Programs", icon: IconShieldCheck },
]

export function TrustedPartners() {
  return (
    <SectionWrapper id="trusted-partners" className="bg-muted/50">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Trusted by 200+ valued partners across India"
            centered
          />
        </FadeIn>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-marquee gap-4 whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((item, i) => (
              <Badge
                key={i}
                variant="primary"
                className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <item.icon size={18} />
                {item.label}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex animate-marquee-reverse gap-4 whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((item, i) => (
              <Badge
                key={`r-${i}`}
                variant="outline"
                className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <item.icon size={18} />
                {item.label}
              </Badge>
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
