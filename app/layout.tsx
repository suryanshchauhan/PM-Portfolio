import type React from "react"
import type { Metadata } from "next"
import { Inter, Chivo, Abril_Fatface } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["400", "700", "900"],
})

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril-fatface",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Suryansh Chauhan - Product Manager Portfolio",
  description: "Software developer turned product manager.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable, chivo.variable, abrilFatface.variable)}>
        {children}
      </body>
    </html>
  )
}
