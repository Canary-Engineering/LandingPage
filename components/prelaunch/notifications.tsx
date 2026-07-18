import { Canary } from "@/components/ui/icons";

/* Placeholder iOS-style notification. When the real screenshot exists, replace
   <NotificationMock /> in the right panel below with:
     <img src="/notification.png" alt="Canary abuse alert on iOS"
          className="mx-auto w-full max-w-sm rounded-[22px] shadow-lg" />
   Drop the file into /public/notification.png (or .webp). */
function NotificationMock() {
  return (
    <div className="mx-auto flex max-w-sm items-start gap-3 rounded-[22px] border border-border bg-background/90 p-4 shadow-lg backdrop-blur">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-primary">
        <Canary className="h-5 w-auto fill-primary-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Canary
          </span>
          <span className="text-[12px] text-muted-foreground">now</span>
        </div>
        <div className="mt-0.5 text-[14px] font-semibold">Abuse detected · VIN ···4471</div>
        <p className="text-[13px] leading-snug text-muted-foreground">
          Donuts — sustained yaw 47°/s in the Ashburn lot. Evidence bundled. Tap to review.
        </p>
      </div>
    </div>
  );
}

export function Notifications() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-5xl font-medium tracking-tight md:text-6xl">
            the alert beats
            <br />
            <span className="font-normal italic text-muted-foreground">the excuse.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted-foreground">
            The instant the Core flags abuse, it&apos;s on your phone — the event, where it
            happened, and the CAN evidence behind it, in seconds. You know before the driver
            can explain it away.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-12">
          <NotificationMock />
        </div>
      </div>
    </section>
  );
}
