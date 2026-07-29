import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"

const TrustedPartners = dynamic(
  () => import("@/components/sections/TrustedPartners").then((m) => ({ default: m.TrustedPartners })),
  { loading: () => <div className="py-16" /> }
)

const About = dynamic(
  () => import("@/components/sections/About").then((m) => ({ default: m.About })),
  { loading: () => <div className="py-16" /> }
)

const Services = dynamic(
  () => import("@/components/sections/Services").then((m) => ({ default: m.Services })),
  { loading: () => <div className="py-16" /> }
)

const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => ({ default: m.WhyChooseUs })),
  { loading: () => <div className="py-16" /> }
)

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })),
  { loading: () => <div className="py-16" /> }
)

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <div className="py-16" /> }
)

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  )
}
