"use client"

import type React from "react"
import Link from "next/link"
import { Sparkles, ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation"

const NavLink = ({
  href,
  children,
  isActive = false,
}: { href: string; children: React.ReactNode; isActive?: boolean }) => (
  <Link
    href={href}
    className={`px-6 py-3 rounded-full text-sm font-semibold font-chivo transition-all duration-300 transform hover:rotate-2 hover:scale-105 ${
      isActive
        ? "bg-gray-900 text-white shadow-lg"
        : "bg-white/90 text-gray-900 hover:bg-white hover:shadow-md border border-gray-200"
    }`}
  >
    {children}
  </Link>
)

const WaveSeparator = () => (
  <div className="relative">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-24"
      style={{ transform: "rotate(180deg)" }}
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        fill="#1D1D1F"
      />
    </svg>
  </div>
)

const BackToPortfolioSection = () => {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToPortfolio = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <section style={{ backgroundColor: "#1D1D1F" }} className="text-white pt-8 pb-8 px-9 md:px-18 lg:px-48">
      <div className="max-w-6xl mx-auto text-center">
        {/* Wavy line decoration - updated to match the pattern */}
        <div className="mb-12">
          <svg viewBox="0 0 1200 40" className="w-full max-w-4xl mx-auto h-8 opacity-60" preserveAspectRatio="none">
            <path
              d="M0,20 Q30,5 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20"
              stroke="#6B7280"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Main Heading */}
        <div className="mb-16">
          <button onClick={handleBackToPortfolio} className="block w-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-chivo mb-4 cursor-pointer">
              <span className="text-white">Back to</span>
              <Sparkles className="inline-block w-8 h-8 md:w-12 md:h-12 text-yellow-400 ml-4" />
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold font-chivo">
              <span style={{ color: "#6F59FF" }}>PM Portfolio</span>
            </h3>
          </button>
        </div>

        {/* Portfolio Preview Photo - 30% smaller */}
        <div className="mb-16 flex justify-center">
          <button onClick={handleBackToPortfolio} className="block">
            <div className="relative transform -rotate-3 hover:rotate-6 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suryanshCharacter-KqK7v9AQEXDlB9PWD1KPdRSvRZETKY.png"
                alt="3D cartoon character of Suryansh waving while working at desk with MacBook and city skyline background"
                className="w-44 h-56 md:w-56 md:h-64 object-cover rounded-2xl shadow-2xl cursor-pointer"
              />
            </div>
          </button>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 text-xl md:text-2xl lg:text-3xl font-bold flex-wrap">
            <a
              href="https://www.linkedin.com/in/suryanshchauhan2001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              linkedin
            </a>
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
            <a
              href="mailto:pmsuryansh@gmail.com"
              className="text-white hover:text-red-400 transition-colors duration-300"
            >
              email
            </a>
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
            <a
              href="https://github.com/suryanshchauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              github
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-sm text-gray-400 flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={scrollToTop}
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1D1D1F" }} className="py-4 text-center">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Suryansh Chauhan. All Rights Reserved.</p>
    </footer>
  )
}

export default function CreatingImpact() {
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
      <header className="mx-auto px-9 md:px-18 lg:px-48 py-8">
        <div className="flex justify-between items-center">
          <NavLink href="/">PM Portfolio</NavLink>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/creating-impact" isActive={true}>
              Creating Impact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto px-9 md:px-18 lg:px-48 py-12 md:py-20">
        {/* Personal Introduction Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Image (now truly 50% width) */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20Image%20Resizer-q7YnrqjZ0ZGoDCgSWfzNBhqPZbGDv7.png"
                  alt="Suryansh Chauhan in modern colorful environment with purple and blue lighting"
                  className="w-full h-auto max-h-96 md:max-h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right side - Text Content (now truly 50% width with proper alignment) */}
            <div className="order-1 lg:order-2 flex items-center justify-center min-h-full">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  I'm a <span className="text-purple-600 font-medium">developer turned product manager</span>,
                  passionate about building things that matter.
                </p>

                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  I love connecting ideas, teams, and data to create{" "}
                  <span className="text-purple-600 font-medium">real impact</span> - beyond just shipping features.
                </p>

                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  Curious about what drives people and products, I'm always up for a chat on tech, strategy, or what
                  makes users tick.
                </p>

                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  DMs open - current obsession:{" "}
                  <span className="text-purple-600 font-medium">turning insights into outcomes</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information Section - Full width, no background */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Education Column - 40% of space (2 out of 5 columns) */}
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-600 font-chivo">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">DePauw University, IN, USA</h3>
                  <p className="text-gray-600">2019-2023</p>
                  <p className="text-gray-700 mt-2">Bachelor of Arts in Computer Science</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">NextLeap</h3>
                  <p className="text-gray-600">2025-2025</p>
                  <p className="text-gray-700 mt-2">Product Management Fellowship</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">iXperience</h3>
                  <p className="text-gray-600">2021-2021</p>
                  <p className="text-gray-700 mt-2">Data Science Bootcamp</p>
                </div>
              </div>
            </div>

            {/* Experience Column - 60% of space (3 out of 5 columns) */}
            <div className="space-y-6 lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-600 font-chivo">Experience</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Eknoor Trans | May '24 - Present</span>
                    <span className="text-gray-700"> • Software Development Engineer</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Alleo | May '22 - Aug '22</span>
                    <span className="text-gray-700"> • QA Business Analyst Intern</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">TechPoint | May '22 - Aug '22</span>
                    <span className="text-gray-700"> • UI/UX Intern</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">DataProphet | Jun '21 - Aug '21</span>
                    <span className="text-gray-700"> • Data Science Intern</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">NIT Hamirpur | May '21 - Aug '21</span>
                    <span className="text-gray-700"> • Data Science Intern</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">DePauw University | Nov '20 - Dec '21</span>
                    <span className="text-gray-700"> • STEM Liaison</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">HRTC | May '20 - Aug '20</span>
                    <span className="text-gray-700"> • Software Engineer Intern</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Wave Separator */}
      <WaveSeparator />

      {/* Back to Portfolio Section */}
      <BackToPortfolioSection />

      <Footer />
    </div>
  )
}
