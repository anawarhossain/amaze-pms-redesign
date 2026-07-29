import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata: Metadata = {
  title: "Gallery - Amaze PMS",
  description: "Explore our projects and operations across India.",
}

const items = [
  { title: "Security Services", src: "/gallery1.png" },
  { title: "Housekeeping", src: "/gallery2.png" },
  { title: "Technical Services", src: "/gallery3.png" },
  { title: "Landscaping", src: "/gallery4.png" },
  { title: "Pest Control", src: "/gallery5.png" },
  { title: "Help Desk", src: "/gallery6.png" },
  { title: "Property Management", src: "/gallery7.png" },
]

export default function GalleryPage() {
  return (
    <main>
      <SectionWrapper className="pt-32">
        <Container>
          <SectionHeading
            title="Gallery"
            subtitle="A glimpse into our operations and expertise"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </main>
  )
}
