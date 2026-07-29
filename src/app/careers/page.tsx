import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata: Metadata = {
  title: "Careers - Amaze PMS",
  description: "Join the Amaze PMS team — explore career opportunities in property management.",
}

export default function CareersPage() {
  return (
    <main>
      <SectionWrapper className="pt-32">
        <Container>
          <SectionHeading as="h1" title="Careers" subtitle="Join our team of 15000+ professionals" centered />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Security Supervisor", "Housekeeping Manager", "Technical Engineer", "Landscaping Specialist", "Pest Control Technician", "Help Desk Executive"].map((role) => (
              <div key={role} className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-semibold">{role}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join our dynamic team and grow your career with Amaze PMS.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </main>
  )
}
