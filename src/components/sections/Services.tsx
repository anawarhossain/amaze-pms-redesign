"use client"

import Link from "next/link"
import {
  IconShieldCheck,
  IconBrush,
  IconTool,
  IconLeaf,
  IconBug,
  IconHeadset,
  IconParking,
  type Icon,
} from "@tabler/icons-react"
import { SERVICES } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { FadeIn } from "@/components/animations/FadeIn"
import { ScaleIn } from "@/components/animations/ScaleIn"

const icons: Icon[] = [
  IconShieldCheck,
  IconBrush,
  IconTool,
  IconLeaf,
  IconBug,
  IconHeadset,
  IconParking,
]

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-muted/30">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive property management solutions tailored to your needs"
            centered
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = icons[i]
            return (
              <ScaleIn key={service.title} delay={i * 0.05}>
                <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </ScaleIn>
            )
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Services
            <span aria-hidden>&rarr;</span>
          </Link>
        </FadeIn>
      </Container>
    </SectionWrapper>
  )
}
