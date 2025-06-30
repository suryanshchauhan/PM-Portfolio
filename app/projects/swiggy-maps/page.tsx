"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SwiggyMaps() {
  return (
    <div
      className="min-h-screen font-sans text-foreground"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20from%20Extractor-AnBM0yFp4FdCLHbccuc5l019odbi79.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-20 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-600 font-chivo mb-6">Swiggy Maps</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Reducing business cost and delivery time through intelligent mapping
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Reducing Business Cost</h2>
            <p className="text-muted-foreground">
              This project developed an intelligent mapping system for Swiggy to optimize delivery routes, manage road
              conflicts, and reduce operational costs while improving delivery efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
