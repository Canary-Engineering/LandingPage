import { Toaster } from "../ui/sonner"
import { BrandColors } from "./brand-colors"
import { LogomarkCard } from "./logomark-copy"
import { WordmarkCard } from "./wordmark-card"

export function BrandGuidelines() {
  return (
    <div className=" py-16">
      <div className="container px-4 max-w-7xl mx-auto space-y-12">
        {/* Naming Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">naming</h2>
          <p className="leading-relaxed text-foreground/61">
            Our full name is &quot;Canary Engineering&quot;; in most contexts we go by
            &quot;Canary&quot;. Always capitalize the &quot;C&quot;. Canary is the name of
            both our company and our platform.
          </p>
        </section>

        {/* Usage Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">usage</h2>
          <p className="leading-relaxed text-foreground/61">
            Ensure that Canary assets always have enough space around them to maintain their integrity. Canary&apos;s
            branding assets are proprietary and protected by trademark and copyright laws. Do not alter Canary&apos;s
            branding assets in any way, or display them in a way that implies a relationship, affiliation, or
            endorsement by Canary of your product, service, or company.
          </p>
        </section>

        {/* Wordmark Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">wordmark</h2>
          <p className="mb-8 leading-relaxed text-foreground/61">
            The wordmark is the primary representation of the Canary brand and should be used whenever space allows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WordmarkCard bgColor="bg-[#ff0049]" fillColor="#000000" />
            <WordmarkCard bgColor="bg-[#cdcbcb]" fillColor="#ff0049" />
            <WordmarkCard bgColor="bg-[#0c0a09]" fillColor="#ff0049" />
          </div>
        </section>

        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">logomark</h2>
          <p className="mb-8 leading-relaxed text-foreground/61">
          For tight spaces or when the Canary wordmark is too small to be legible, use the logomark.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LogomarkCard bgColor="bg-[#ff0049]" fillColor="#000000" />
            <LogomarkCard bgColor="bg-[#cdcbcb]" fillColor="#ff0049" />
            <LogomarkCard bgColor="bg-[#0c0a09]" fillColor="#ff0049" />
          </div>
        </section>

        <BrandColors />

        <Toaster position="bottom-right" />
      </div>
    </div>
  )
}

