"use client"

import { COMPANY } from "@/lib/constants"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { FadeIn } from "@/components/animations/FadeIn"
import { RippleButton } from "@/components/animations/RippleButton"
import { IconPhone, IconMapPin, IconMail } from "@tabler/icons-react"

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-700 px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]" />

            <p className="text-sm font-medium uppercase tracking-widest opacity-80">
              Call For More Info
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {COMPANY.phone}
            </p>
            <p className="mt-4 text-lg font-medium opacity-90">
              Call Us For Our Services
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have a question or want to discuss your property management
              needs? We are here to help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <IconPhone
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <div>
                  <p className="text-sm font-medium">{COMPANY.phone}</p>
                  <p className="text-sm text-muted-foreground">
                    {COMPANY.phoneAlt}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconMail
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-sm">{COMPANY.email}</p>
              </div>
              <div className="flex items-start gap-3">
                <IconMapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-sm">{COMPANY.address}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  className="mt-1 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-1 w-full resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <RippleButton
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
              >
                Send Message
              </RippleButton>
            </form>
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  )
}
