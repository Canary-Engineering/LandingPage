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
      "This Privacy Policy explains what information Canary Engineering (\"Canary\", \"we\", \"us\") collects, how we use it, and the choices you have. It applies to our website, our waitlist, and — once Canary Core ships — the hardware and cloud service themselves.",
      "We're a pre-launch company. This policy reflects our current practice and will be updated as the product moves from waitlist to shipping hardware; we'll post changes here with an updated date.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "Waitlist & contact information: the email address (and, optionally, whether you identify as a business) you give us when you join the waitlist or contact us.",
      "Vehicle & telemetry data (once Canary Core is installed): CAN bus signals (e.g. speed, braking, engine status), GNSS location, IMU motion data, and device health/tamper events, all tied to the Core and Nodes installed in a specific vehicle.",
      "Usage data: basic, aggregated analytics about how our website is used, so we can tell what's working.",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How We Use Your Information",
    paragraphs: [
      "To send waitlist and launch updates to people who asked for them.",
      "To operate the abuse-detection and telemetry features Canary Core is built for — this is the entire point of the vehicle data described above, and it's processed to serve the account that owns the device, not sold or repurposed for unrelated advertising.",
      "To keep the system secure, debug problems, and improve the product.",
    ],
  },
  {
    id: "sharing",
    title: "Data Sharing & Third Parties",
    paragraphs: [
      "We don't sell personal or vehicle data. We share it only with service providers who help us operate (e.g. cloud hosting, cellular connectivity), under confidentiality obligations, and only to the extent needed to provide the service.",
      "If a Canary Core is installed in a fleet or rental vehicle, telemetry and event data for that vehicle is also available to the fleet/rental operator who manages the account — that's the accountability the product is built to provide.",
    ],
  },
  {
    id: "retention-security",
    title: "Data Retention & Security",
    paragraphs: [
      "We retain data for as long as needed to provide the service and meet legal obligations, and delete or anonymize it afterward.",
      "Vehicle data in transit is encrypted end to end — see our Security page for the details of how devices authenticate and how firmware is signed.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Rights & Choices",
    paragraphs: [
      "You can unsubscribe from waitlist emails at any time using the link in those emails.",
      "You can ask us what data we hold about you, request a copy, or ask us to delete it, subject to what we're required to keep for security or legal reasons. Reach out via the contact details below.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Canary is not directed at children, and we don't knowingly collect personal information from anyone under 13.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We'll update this page as the product evolves and note the date of the most recent change at the top of this document.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    paragraphs: [
      "Questions about this policy? Email hello@canary.engineering or visit our Contact page.",
    ],
  },
]

export function PrivacyContent() {
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
              Privacy Policy
            </h1>
            <p className="text-foreground/61 mt-4">Last Updated: July 15, 2026</p>
          </Card>
        </div>
      </div>

      {/* Privacy Policy Content */}
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
