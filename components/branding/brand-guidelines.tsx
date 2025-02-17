import { Toaster } from "../ui/sonner"
import { BrandColors } from "./brand-colors"
import { LogomarkCard } from "./logomark-copy"
import { WordmarkCard } from "./wordmark-card"

export function BrandGuidelines() {
  return (
    <div className=" py-16">
      <div className="container px-4 max-w-7xl mx-auto space-y-12">
        {/* Naming Section */}
        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4">naming</h2>
          <p className="text-cream/60 leading-relaxed">
            Our name is &quot;Canary Engineering&quot;, also referred to as &quot;Canary&quot;, or any other derivative. Such terms are not wholly accurate
            and will cause confusion among customers. Always capitalize the &quot;C&quot;. Canary is the name of our company and
            our platform.
          </p>
        </section>

        {/* Usage Section */}
        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4">usage</h2>
          <p className="text-cream/60 leading-relaxed">
            Ensure that Canary assets always have enough space around them to maintain their integrity. Canary&apos;s
            branding assets are proprietary and protected by trademark and copyright laws. Do not alter Canary&apos;s
            branding assets in any way, or display them in a way that implies a relationship, affiliation, or
            endorsement by Canary of your product, service, or company.
          </p>
        </section>

        {/* Wordmark Section */}
        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4">wordmark</h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            The wordmark is the primary representation of the Canary brand and should be used whenever space allows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WordmarkCard href="/brand/pink" bgColor="bg-[#ff0049]" fillColor="#000000" />
            <WordmarkCard href="/brand/gray" bgColor="bg-[#cdcbcb]" fillColor="#ff0049" />
            <WordmarkCard href="/brand/dark" bgColor="bg-[#0c0a09]" fillColor="#ff0049" />
          </div>
        </section>

        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4">logomark</h2>
          <p className="text-cream/60 leading-relaxed mb-8">
          For tight spaces or when the Canary wordmark is too small to be legible, use the logomark.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LogomarkCard href="/brand/pink" bgColor="bg-[#ff0049]" fillColor="#000000" />
            <LogomarkCard href="/brand/gray" bgColor="bg-[#cdcbcb]" fillColor="#ff0049" />
            <LogomarkCard href="/brand/dark" bgColor="bg-[#0c0a09]" fillColor="#ff0049" />
          </div>
        </section>

        <BrandColors />

        <Toaster position="bottom-right" />
      </div>
    </div>
  )
}

