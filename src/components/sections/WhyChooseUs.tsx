"use client"

import {
  IconScale,
  IconBuildingSkyscraper,
  IconUsersGroup,
  IconSchool,
  IconShieldCheck,
  IconFileText,
  IconClipboardCheck,
  IconTool,
  IconBuildingCommunity,
  IconReportSearch,
  IconFileAnalytics,
  IconHeartHandshake,
} from "@tabler/icons-react"
import { WHY_CHOOSE_US } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FadeIn } from "@/components/animations/FadeIn"
import { GlassCard } from "@/components/ui/GlassCard"
import type { Icon } from "@tabler/icons-react"

const categories: { label: string; icon: Icon }[] = [
  { label: "Scale & Reach", icon: IconScale },
  { label: "Service Model", icon: IconBuildingSkyscraper },
  { label: "Staffing", icon: IconUsersGroup },
  { label: "Training", icon: IconSchool },
  { label: "Risk Management", icon: IconShieldCheck },
  { label: "Documentation", icon: IconFileText },
  { label: "Audit & Improvement", icon: IconClipboardCheck },
  { label: "Maintenance", icon: IconTool },
  { label: "Government Liaison", icon: IconBuildingCommunity },
  { label: "Comprehensive Audits", icon: IconReportSearch },
  { label: "AMC Management", icon: IconFileAnalytics },
  { label: "Staff Welfare", icon: IconHeartHandshake },
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const cat = categories[i]
            const CatIcon = cat.icon
            return (
              <FadeIn
                key={i}
                delay={Math.min(i * 0.04, 0.3)}
              >
                <GlassCard className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-1 hover:ring-primary/20">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <CatIcon size={22} />
                  </div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {cat.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </GlassCard>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </SectionWrapper>
  )
}
