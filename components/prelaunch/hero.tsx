import { WaitlistModalButton } from "@/components/ui/waitlistmodal";
import { CanDataField } from "@/components/home/widgets";

export function PreLaunchHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <CanDataField />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24">
        <h1 className="max-w-4xl text-[64px] font-medium leading-[0.95] tracking-[-0.04em] md:text-[92px]">
          see every abuse event
          <br />
          <span className="font-normal italic">the instant it happens.</span>
        </h1>

        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
          Canary Core reads the CAN bus and classifies abuse at the edge — donuts,
          redline launches, harsh braking, tamper. Built for fleets, rentals and owners
          who need to know. Join the waitlist.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="flex w-full items-center rounded-xl border border-border bg-card py-1.5 pl-5 pr-1.5 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-primary/30 sm:w-auto sm:min-w-[380px]">
            <input
              placeholder="what's your work email?"
              className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
            />
            <WaitlistModalButton />
          </div>
          <a href="#abuse" className="inline-flex items-center gap-2 text-[14px]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-[10px] text-background">
              ▶
            </span>
            See it happen
          </a>
        </div>
      </div>
    </section>
  );
}
