import { Mail } from "lucide-react";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-[200px] text-center">
      <h1 className="text-5xl font-medium leading-tight tracking-[-0.02em] text-foreground md:text-6xl">
        let&apos;s talk
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/61">
        Questions about fleets, security, or partnering with Canary? We&apos;d
        like to hear from you.
      </p>

      <div className="mt-12 rounded-3xl border border-foreground/8 bg-background p-10 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
        <a
          href="mailto:hello@canary.engineering"
          className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
        >
          <Mail className="h-5 w-5" />
          hello@canary.engineering
        </a>
        <p className="mt-3 text-sm text-foreground/45">
          We read every message and get back to you as soon as we can.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 border-t border-foreground/8 pt-8">
          <span className="text-sm text-foreground/45">
            Not ready to talk yet?
          </span>
          <WaitlistModalButton />
        </div>
      </div>
    </main>
  );
}
