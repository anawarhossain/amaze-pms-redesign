import type { Metadata } from "next"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata: Metadata = {
  title: "Gallery - Amaze PMS",
  description: "Explore our projects and operations across India.",
}

const images = [
  { title: "Security Services", src: "/gallery/security.jpg" },
  { title: "Housekeeping", src: "/gallery/housekeeping.jpg" },
  { title: "Technical Services", src: "/gallery/technical.jpg" },
  { title: "Landscaping", src: "/gallery/landscaping.jpg" },
  { title: "Pest Control", src: "/gallery/pest-control.jpg" },
  { title: "Help Desk", src: "/gallery/help-desk.jpg" },
]

export default function GalleryPage() {
  return (
    <main>
      <SectionWrapper className="pt-32">
        <Container>
          <SectionHeading title="Gallery" subtitle="A glimpse into our operations and expertise" centered />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img) => (
              <div key={img.title} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <span className="text-sm">{img.title}</span>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </main>
  )
}
