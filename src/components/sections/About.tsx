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
} from "@tabler/icons-react"
import { COMPANY, ABOUT_TEXT } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { FadeIn } from "@/components/animations/FadeIn"

const serviceIcons = [
  IconShieldCheck, IconBrush, IconTool, IconLeaf,
  IconBug, IconHeadset, IconParking,
]

export function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative">
              <div className="grid grid-cols-4 gap-3">
                {serviceIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors hover:bg-primary/10"
                  >
                    <Icon size={24} />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -top-4 -left-4 -z-10 h-36 w-36 rounded-full bg-purple-500/5 blur-3xl" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {COMPANY.fullName}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {ABOUT_TEXT}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted and preferred property management
                  partner across India, setting benchmarks in service quality
                  and innovation.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Deliver integrated, in-house property management solutions
                  with integrity, professionalism, and a commitment to client
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-primary">2001</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15000+</p>
                <p className="text-sm text-muted-foreground">Professionals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
            >
              Get Started With Us
            </Link>
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  )
}
