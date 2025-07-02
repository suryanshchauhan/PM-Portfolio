import type React from "react"
import type { Metadata } from "next"
import { Inter, Chivo, Abril_Fatface } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

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
  description:
    "Hi, I'm Suryansh—a developer turned product manager, passionate about building things that matter. I thrive on connecting ideas, teams, and data to create real impact.",
  generator: "v0.dev",
  metadataBase: new URL("https://www.suryansh.digital"),
  openGraph: {
    title: "Suryansh Chauhan - Product Manager Portfolio",
    description:
      "Hi, I'm Suryansh—a developer turned product manager, passionate about building things that matter. I thrive on connecting ideas, teams, and data to create real impact.",
    url: "https://www.suryansh.digital",
    siteName: "Suryansh Chauhan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansh Chauhan - Product Manager Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh Chauhan - Product Manager Portfolio",
    description:
      "Hi, I'm Suryansh—a developer turned product manager, passionate about building things that matter. I thrive on connecting ideas, teams, and data to create real impact.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
      </head>
      <body className={cn("font-sans antialiased", inter.variable, chivo.variable, abrilFatface.variable)}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
