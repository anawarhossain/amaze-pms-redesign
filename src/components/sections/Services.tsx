"use client"

import Image from "next/image"
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

const serviceImages = [
  "/physicalsecuritynew.webp",
  "/housekeeping.webp",
  "/banner4.webp",
  "/banner5.webp",
  "/banner6.webp",
  "/banner7.webp",
  "/Parking-Management-System.webp",
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
            const imgSrc = serviceImages[i]
            return (
              <ScaleIn key={service.title} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-1 hover:ring-primary/20">
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={imgSrc}
                      alt=""
                      fill
                      className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-15"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
                  </div>
                  <div className="relative p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                      <Icon size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <span aria-hidden>&rarr;</span>
                    </p>
                  </div>
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
