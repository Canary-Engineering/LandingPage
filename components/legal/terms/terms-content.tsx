"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

interface Section {
  id: string
  title: string
  paragraphs: string[]
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "These Terms of Service govern your use of the Canary Engineering (\"Canary\", \"we\", \"us\") website, waitlist, and — once available — the Canary Core hardware and cloud service. By using any of these, you agree to these terms.",
    ],
  },
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      "By joining our waitlist, contacting us, or otherwise using our site, you're agreeing to these terms as they stand at the time. We'll note the date at the top of this page whenever they change.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be at least 18 years old, or the age of majority in your jurisdiction, to join the waitlist or purchase Canary hardware on behalf of yourself or an organization.",
    ],
  },
  {
    id: "waitlist",
    title: "The Waitlist & Early Access",
    paragraphs: [
      "Joining the waitlist reserves you a place in line for updates and early access — it isn't a purchase, a reservation of hardware, or a guarantee of a specific ship date. We'll email you when there's something to act on.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    paragraphs: [
      "Canary Core is built to monitor and, where authorized, control a vehicle's starter circuit. You agree to install and use it only on vehicles you own or are authorized to instrument, and only in ways consistent with applicable law — including local rules on vehicle tracking, driver notification, and privacy.",
      "Don't attempt to tamper with, reverse-engineer the security model of, or use Canary hardware to interfere with a vehicle you aren't authorized to control.",
    ],
  },
  {
    id: "hardware",
    title: "Hardware & Installation",
    paragraphs: [
      "Canary Core and its Nodes are aftermarket hardware. Installation and continued operation depend on your vehicle's condition and wiring; we'll provide installation guidance, but we aren't responsible for pre-existing vehicle issues unrelated to our hardware.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "The Canary name, logo, and branding are property of Canary Engineering — see our Branding page for usage guidelines. Our software and firmware are provided for use with Canary hardware and may not be copied or redistributed except as we explicitly permit.",
    ],
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    paragraphs: [
      "Our website and waitlist are provided \"as is.\" Once Canary Core ships, it will come with its own warranty terms specific to the hardware — those will supersede this general disclaimer for defects covered under that warranty.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, Canary Engineering is not liable for indirect, incidental, or consequential damages arising from use of our website or waitlist. Nothing here limits liability where the law doesn't allow it to be limited.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "We may suspend or end access to the waitlist or website for anyone who violates these terms. You can ask us to remove you from the waitlist at any time.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws applicable to Canary Engineering, without regard to conflict-of-law principles, except where local consumer-protection law requires otherwise.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these terms as the product moves from waitlist to shipping hardware. Material changes will be reflected in the \"Last Updated\" date above.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    paragraphs: [
      "Questions about these terms? Email hello@canary.engineering or visit our Contact page.",
    ],
  },
]

export function TermsContent() {
  const [activeSection, setActiveSection] = useState("introduction")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return

      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 130 // Adjust based on navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
      setActiveSection(id) // Ensure clicked section is highlighted
    }
  }

  return (
    <div className="relative min-h-screen pt-16">
      {/* Hero Section */}
      <div className="py-24">
        <div className="container px-4 mx-auto">
          <Card className="rounded-3xl bg-background p-8 border border-foreground/8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground max-w-4xl leading-tight">
              Terms of Service
            </h1>
            <p className="text-foreground/61 mt-4">Last Updated: July 15, 2026</p>
          </Card>
        </div>
      </div>

      {/* Terms & Conditions Content */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 pb-24">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation (Sticky) */}
          <div className="relative lg:w-64 shrink-0 order-first lg:order-last">
            <div className="pt-9 lg:sticky lg:top-24 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto w-full">
            <div className="lg:block border-l border-foreground/8">
              {sections.map(section => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className={`w-full justify-start text-xs md:text-sm truncate ${
                    activeSection === section.id
                      ? "text-foreground bg-foreground/8 font-semibold"
                      : "text-foreground/45 hover:text-foreground hover:bg-foreground/5"
                  }`}
                  onClick={() => handleClick(section.id)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative flex-grow" ref={contentRef}>
            <div className="max-w-3xl mx-auto lg:mx-0">
              {sections.map(section => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-medium text-foreground mb-4">{section.title}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground/61 leading-relaxed mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
