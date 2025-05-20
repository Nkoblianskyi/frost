import type React from "react"
import type { Metadata } from "next"
import "./globals.scss"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerificationModal } from "@/components/age-verification-modal"
import { Montserrat, Open_Sans } from "next/font/google"
import { Disclaimer } from "@/components/disclaimer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FrostPlay Network - Sosial plattform",
  description:
    "FrostPlay Network er en sosial plattform for underholdningsformål. Ingen ekte penger er involvert, ingen premier eller belønninger.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AgeVerificationModal />
          <div className="relative flex min-h-screen flex-col">
            <Disclaimer type="top" />
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'