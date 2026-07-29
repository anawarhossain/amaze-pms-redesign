import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Geist, Geist_Mono } from "next/font/google"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Navbar } from "@/components/sections/Navbar"
import "./globals.css"

const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="py-16" /> }
)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Amaze PMS - Premium Property Management Solutions",
    template: "%s | Amaze PMS",
  },
  description:
    "A one stop solutions for all your property management needs — Security, Housekeeping, Technical, Landscaping & more. PAN INDIA presence.",
  keywords: [
    "property management",
    "security services",
    "housekeeping",
    "facility management",
    "Amaze PMS",
    "Hyderabad",
  ],
  openGraph: {
    title: "Amaze PMS - Premium Property Management Solutions",
    description:
      "A one stop solutions for all your property management needs — Security, Housekeeping, Technical, Landscaping & more.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://amazepms.com",
  },
}

export const viewport = "width=device-width, initial-scale=1"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
