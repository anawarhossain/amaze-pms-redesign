import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata: Metadata = {
  title: "Recruitments - Amaze PMS",
  description: "Amaze PMS recruitment process — submit your application today.",
}

export default function RecruitmentsPage() {
  return (
    <main>
      <SectionWrapper className="pt-32">
        <Container>
          <SectionHeading as="h1" title="Recruitments" subtitle="Submit your application to join Amaze PMS" centered />
          <div className="mx-auto max-w-2xl rounded-xl border bg-card p-8 shadow-sm">
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in your details and we will get back to you regarding suitable openings.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input id="name" type="text" className="mt-1 w-full rounded-lg border bg-background px-4 py-2 text-sm" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" type="email" className="mt-1 w-full rounded-lg border bg-background px-4 py-2 text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                <input id="phone" type="tel" className="mt-1 w-full rounded-lg border bg-background px-4 py-2 text-sm" placeholder="+91 99999 99999" />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium">Upload Resume</label>
                <input id="resume" type="file" className="mt-1 w-full text-sm" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90">
                Submit Application
              </button>
            </form>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  )
}
