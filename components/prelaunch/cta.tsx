import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

export function PreLaunchCTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h2 className="mx-auto max-w-4xl text-6xl font-medium tracking-tight md:text-8xl">
          stop guessing what happened{" "}
          <span className="font-normal italic">out there.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Built for fleets, rentals &amp; owners · edge-detected · evidence-backed.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <WaitlistModalButton className="h-11 px-6 text-[15px]" />
        </div>
      </div>
    </section>
  );
}
