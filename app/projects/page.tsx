"use client"

import type React from "react"
import { Menu, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

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

const ProjectImage = ({
  src,
  alt,
}: {
  src: string
  alt: string
}) => (
  <div className="block w-full">
    <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-auto rounded-xl object-cover" />
  </div>
)

const WaveSeparator = () => (
  <div className="relative mt-16">
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

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics: string[]
  updated_at: string
}

const PinnedRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<string>("")

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github-repos")

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Failed to fetch repositories")
        }

        const data = await response.json()
        setRepos(data.repos)
        setSource(data.source)
      } catch (err) {
        console.error("Error fetching repos:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch repositories")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      CSS: "#563d7c",
      HTML: "#e34c26",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#fa7343",
      Markdown: "#083fa1",
    }
    return colors[language || ""] || "#8b949e"
  }

  const getSourceLabel = (source: string) => {
    switch (source) {
      case "pinned":
        return "Pinned Repositories"
      case "recent":
        return "Recent Repositories"
      default:
        return "Repositories"
    }
  }

  if (loading) {
    return (
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center font-chivo">Loading Repositories...</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{ backgroundColor: "#262626" }}
              className="rounded-lg p-4 border border-gray-700/30 animate-pulse"
            >
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-3 bg-gray-700 rounded mb-4 w-3/4"></div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center font-chivo">GitHub Repositories</h3>
        <div style={{ backgroundColor: "#262626" }} className="rounded-lg p-6 border border-red-500/30 text-center">
          <p className="text-red-400 mb-2">⚠️ Unable to load repositories</p>
          <p className="text-gray-300 text-sm">{error}</p>
          <p className="text-gray-400 text-xs mt-2">Please configure GitHub token to display repositories</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-white mb-6 text-center font-chivo">{getSourceLabel(source)}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.slice(0, 6).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#262626" }}
            className="backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors font-chivo truncate flex-1 min-w-0">
                {repo.name}
              </h4>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{repo.description || "No description available"}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    ></div>
                    <span>{repo.language}</span>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const GitHubContributions = () => (
  <section style={{ backgroundColor: "#1D1D1F" }} className="text-white pt-8 pb-16 px-9 md:px-18 lg:px-48">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-chivo">GitHub Activity</h2>
      <div style={{ backgroundColor: "#262626" }} className="backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
        <div className="flex justify-center overflow-hidden">
          <img
            src="https://ghchart.rshah.org/39d353/suryanshchauhan"
            alt="GitHub Contribution Chart for suryanshchauhan"
            className="w-full max-w-full h-auto rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <p className="text-center text-gray-300 mt-4 text-sm">
          <a
            href="https://github.com/suryanshchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors font-chivo"
          >
            @suryanshchauhan on GitHub
          </a>
        </p>
      </div>

      {/* Pinned Repositories */}
      <PinnedRepos />
    </div>
  </section>
)

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div style={{ backgroundColor: "#1D1D1F" }} className="text-white pt-8 px-9 md:px-18 lg:px-48">
      <div className="max-w-6xl mx-auto text-center">
        <button
          onClick={scrollToTop}
          className="text-yellow-400 hover:text-yellow-300 transition-colors font-chivo text-sm cursor-pointer"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1D1D1F" }} className="text-white py-4 px-9 md:px-18 lg:px-48">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm font-chivo">© 2025 Suryansh Chauhan. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      {/* Sticky Header - Same as landing page but sticky */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto px-9 md:px-18 lg:px-48 py-4 md:py-6">
          <div className="flex justify-between items-center">
            <NavLink href="/">PM Portfolio</NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              <NavLink href="/projects" isActive={true}>
                Projects
              </NavLink>
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
              <NavLink href="/projects" isActive={true}>
                Projects
              </NavLink>
              <NavLink href="/creating-impact">Creating Impact</NavLink>
            </nav>
          )}
        </div>
      </header>

      <main className="mx-auto px-9 md:px-18 lg:px-48 py-12">
        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-094928-QlfQJrR16vUwcTDs1APJFgYaHjUIa1.png"
              alt="Case Study: Redesigning Social for Real Connections - Mobile app interface showing social features like State of Mind sharing and Snap Hangouts"
            />
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-094956-WxvGM0LG465rKgjpOGGLiqyQ5BffA5.png"
              alt="Swiggy Case Study: Helping Restaurants gather loyal customers - Mobile app showing Virtual Wishes feature for customer engagement"
            />
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture-2025-06-27-095036-vaObAuDMsxctt6CQDGu6oRBHVWCYq4.png"
              alt="Razorpay Case Study: Envisioning a one-click checkout for Razorpay merchants - Mobile payment interface showing streamlined checkout process"
            />
            <ProjectImage
              src="/images/swiggy-maps-case-study.png"
              alt="Swiggy Maps Case Study: Reducing business cost and delivery time - Desktop interface showing mapping system with route optimization and conflict management"
            />
          </div>
        </section>
      </main>

      {/* Wave Separator */}
      <WaveSeparator />

      {/* GitHub Contributions */}
      <GitHubContributions />

      {/* Back to Top */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  )
}
