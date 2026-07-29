import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import "./globals.css"

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
}

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
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
