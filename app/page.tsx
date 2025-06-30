"use client"

import type React from "react"
import { Mail, Linkedin, Github, Menu, X, Sparkles, ArrowUp, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
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

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground hover:text-gray-700 transition-colors"
  >
    {children}
  </a>
)

const ProjectImage = ({
  src,
  alt,
  href,
}: {
  src: string
  alt: string
  href: string
}) => (
  <Link href={href} className="block w-full group">
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02] cursor-pointer"
    />
  </Link>
)

const ViewAllProjectsButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/projects")
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="flex justify-center py-12">
      <button
        onClick={handleClick}
        className="group inline-flex items-center justify-between bg-gray-900 text-white rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-800"
      >
        <span className="text-lg font-medium mr-4">View All Projects</span>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </button>
    </div>
  )
}

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

const AnimatedText = () => {
  const text = "I'm Suryansh, a developer turned product manager, DePauw University grad, and strategic problem-solver."
  const words = text.split(" ")
  const [visibleWords, setVisibleWords] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < words.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 80)

    return () => clearInterval(timer)
  }, [words.length])

  return (
    <h2 className="text-3xl md:text-6xl font-bold leading-tight md:leading-tight tracking-tight md:tracking-tighter text-gray-600 font-chivo text-center md:text-left">
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-opacity duration-200 ease-out ${
            index < visibleWords ? "opacity-100" : "opacity-0"
          }`}
        >
          {word === "Suryansh," ? (
            <Link
              href="/creating-impact"
              className="text-indigo-500 hover:text-black transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo(0, 0)
                }, 100)
              }}
            >
              {word}
            </Link>
          ) : (
            word
          )}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </h2>
  )
}

const KnowMeSection = () => {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleKnowMeClick = () => {
    router.push("/creating-impact")
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <section style={{ backgroundColor: "#1D1D1F" }} className="text-white pt-8 pb-8 px-9 md:px-18 lg:px-48">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-16">
          <button onClick={handleKnowMeClick} className="block w-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-chivo mb-4 cursor-pointer">
              <span className="text-white">Know </span>
              <span style={{ color: "#FF9999" }}>Me</span>
              <Sparkles className="inline-block w-8 h-8 md:w-12 md:h-12 text-yellow-400 ml-4" />
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold font-chivo">
              <span style={{ color: "#AFFFA3" }}>Beyond </span>
              <span className="text-white">the Code</span>
              <span style={{ color: "#AFFFA3" }}>.</span>
            </h3>
          </button>
        </div>

        {/* Personal Photo - 30% smaller */}
        <div className="mb-16 flex justify-center">
          <button onClick={handleKnowMeClick} className="block">
            <div className="relative transform -rotate-3 hover:rotate-6 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SuryanshChicago.png-5dUDdIdqP3z1uLGITkVwzYApqmg2KZ.jpeg"
                alt="Suryansh Chauhan - Personal photo overlooking city skyline"
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

        {/* Footer */}
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
    <footer className="py-4 text-center" style={{ backgroundColor: "#1D1D1F" }}>
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Suryansh Chauhan. All Rights Reserved.</p>
    </footer>
  )
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <header className="mx-auto px-9 md:px-18 lg:px-48 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <NavLink href="/" isActive={true}>
            PM Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/creating-impact">Creating Impact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/90 text-gray-900 hover:bg-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/creating-impact">Creating Impact</NavLink>
          </nav>
        )}
      </header>

      <main className="mx-auto px-9 md:px-18 lg:px-48">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-20">
          <div className="w-full">
            <AnimatedText />

            {/* Mobile Layout */}
            <div className="mt-8 md:hidden space-y-6">
              <div className="flex items-center justify-center gap-6">
                <SocialLink href="https://www.linkedin.com/in/suryanshchauhan2001/">
                  <Linkedin className="w-6 h-6" />
                </SocialLink>
                <SocialLink href="mailto:pmsuryansh@gmail.com">
                  <Mail className="w-6 h-6" />
                </SocialLink>
                <SocialLink href="https://github.com/suryanshchauhan">
                  <Github className="w-6 h-6" />
                </SocialLink>
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-foreground">Actively seeking full time opportunities</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Previously at Alleo, Techpoint, DataProphet and more...
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="mt-8 hidden md:flex items-center justify-between">
              <div className="flex items-center gap-6">
                <SocialLink href="https://www.linkedin.com/in/suryanshchauhan2001/">
                  <Linkedin className="w-6 h-6" />
                </SocialLink>
                <SocialLink href="mailto:pmsuryansh@gmail.com">
                  <Mail className="w-6 h-6" />
                </SocialLink>
                <SocialLink href="https://github.com/suryanshchauhan">
                  <Github className="w-6 h-6" />
                </SocialLink>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">Actively seeking full time opportunities</p>
                <p className="text-base text-muted-foreground">
                  Previously at Alleo, Techpoint, DataProphet and more...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="space-y-8">
          {/* Project Grid - moved the 4 projects up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-094928-QlfQJrR16vUwcTDs1APJFgYaHjUIa1.png"
              alt="Case Study: Redesigning Social for Real Connections - Mobile app interface showing social features like State of Mind sharing and Snap Hangouts"
              href="/projects/social-redesign"
            />
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-094956-WxvGM0LG465rKgjpOGGLiqyQ5BffA5.png"
              alt="Swiggy Case Study: Helping Restaurants gather loyal customers - Mobile app showing Virtual Wishes feature for customer engagement"
              href="/projects/swiggy-virtual-wishes"
            />
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-095036-vaObAuDMsxctt6CQDGu6oRBHVWCYq4.png"
              alt="Razorpay Case Study: Envisioning a one-click checkout for Razorpay merchants - Mobile payment interface showing streamlined checkout process"
              href="/projects/razorpay-checkout"
            />
            <ProjectImage
              src="/images/swiggy-maps-case-study.png"
              alt="Swiggy Maps Case Study: Reducing business cost and delivery time - Desktop interface showing mapping system with route optimization and conflict management"
              href="/projects/swiggy-maps"
            />
          </div>
        </section>

        {/* View All Projects Button with increased spacing */}
        <ViewAllProjectsButton />
      </main>

      {/* Wave Separator */}
      <WaveSeparator />

      {/* Know Me Section */}
      <KnowMeSection />

      <Footer />
    </div>
  )
}
