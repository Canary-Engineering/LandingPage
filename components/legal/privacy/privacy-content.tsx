"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

interface Section {
  id: string
  title: string
}

const sections: Section[] = [
  { id: "introduction", title: "Introduction" },
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "definitions", title: "Definitions" },
  { id: "modifications", title: "Modifications to Terms" },
  { id: "eligibility", title: "Eligibility" },
  { id: "registration", title: "Account Registration and Security" },
  { id: "services", title: "Use of Services" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "payment", title: "Payment Terms" },
  { id: "refund", title: "Refund Policy" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "user-content", title: "User Content" },
  { id: "license", title: "License Grant" },
  { id: "termination", title: "Termination" },
  { id: "warranties", title: "Disclaimer of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law and Dispute Resolution" },
  { id: "force-majeure", title: "Force Majeure" },
  { id: "entire-agreement", title: "Entire Agreement" },
  { id: "contact", title: "Contact Information" },
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
          <Card className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-cream max-w-4xl leading-tight">
              Privacy Policy
            </h1>
            <p className="text-cream/60 mt-4">Last Updated: February 14, 2024</p>
          </Card>
        </div>
      </div>

      {/* Terms & Conditions Content */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 pb-24">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation (Sticky) */}
          <div className="relative lg:w-64 shrink-0 order-first lg:order-last">
            <div className="pt-9 lg:sticky lg:top-24 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto w-full">
            <div className="lg:block border-l border-cream/10">
              {sections.map(section => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className={`w-full justify-start text-xs md:text-sm truncate ${
                    activeSection === section.id
                      ? "text-cream bg-cream/10 font-semibold"
                      : "text-cream/60 hover:text-cream hover:bg-cream/5"
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
                  <h2 className="text-2xl text-cream mb-4">{section.title}</h2>
                  <p className="text-cream/60 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
                    efficitur quam, sed venenatis felis viverra id. Suspendisse potenti.
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
