"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen pt-16">
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Hero section */}
      <div className="py-24">
        <div className="container px-4 mx-auto">
          <Card className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-cream max-w-4xl leading-tight">
              Terms of Service
            </h1>
            <p className="text-cream/60 mt-4">
              Last Updated: February 14, 2024
            </p>
          </Card>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 pb-24">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar navigation */}
          <div className="relative lg:w-64 shrink-0 order-first lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className={`w-full justify-start text-sm ${
                    activeSection === section.id
                      ? "text-cream bg-cream/10"
                      : "text-cream/60 hover:text-cream hover:bg-cream/5"
                  }`}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-6 lg:hidden" />

          {/* Main content */}
          <div className="flex-grow" ref={contentRef}>
            <div className="max-w-3xl mx-auto lg:mx-0">
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl text-cream mb-4">Introduction</h2>
                <p className="text-cream/60 leading-relaxed">
                  Welcome to Canary ("Canary", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our services, including our website, applications, and hosting services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </section>

              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl text-cream mb-4">Acceptance of Terms</h2>
                <p className="text-cream/60 leading-relaxed">
                  By accessing or using the Services, you affirm that you are at least 18 years old, or the age of majority in your jurisdiction, and are fully able and competent to enter into and comply with these Terms. If you are accessing or using the Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms.
                </p>
              </section>

              <section id="definitions" className="mb-12">
                <h2 className="text-2xl text-cream mb-4">Definitions</h2>
                <p className="text-cream/60 leading-relaxed mb-4">
                  For the purposes of these Terms and all incorporated agreements, the following terms shall have the meanings defined below unless explicitly stated otherwise:
                </p>
                <ul className="space-y-4 text-cream/60">
                  <li>
                    <strong className="text-cream">Account:</strong> A registered user profile and associated credentials that grant access to the Services.
                  </li>
                  <li>
                    <strong className="text-cream">Authorized User:</strong> Any individual or entity granted access to the Services through your Account, including your employees, agents, or contractors.
                  </li>
                  <li>
                    <strong className="text-cream">Content:</strong> Any data, text, graphics, images, music, software, audio, video, information or other materials.
                  </li>
                </ul>
              </section>

              {/* Add more sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

