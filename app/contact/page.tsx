import type { Metadata } from "next";

import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

export const metadata: Metadata = {
  title: "Contact — Canary",
  description: "Talk to the Canary team about fleets, rentals and early access.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          get in touch{" "}
          <span className="font-normal italic text-muted-foreground">
            about Canary.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Running a fleet or a rental operation, or just want to know when Canary ships?
          Reach us directly, or join the waitlist and we&apos;ll come to you.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@canary.engineering"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent"
          >
            hello@canary.engineering
          </a>
          <WaitlistModalButton className="h-11 px-6 text-[15px]" />
        </div>
      </div>
    </section>
  );
}
