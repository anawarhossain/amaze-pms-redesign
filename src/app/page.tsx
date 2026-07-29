import { Hero } from "@/components/sections/Hero"
import { TrustedPartners } from "@/components/sections/TrustedPartners"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <About />
      <Services />
    </>
  )
}
