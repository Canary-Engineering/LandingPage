import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

const features = [
  {
    t: "CAN Mirror",
    d: "A full, timestamped mirror of every frame on the bus — RPM, throttle, brake, faults — streamed off the vehicle in real time.",
    r: "FRAME 0x0C1 · RPM 3120",
  },
  {
    t: "Abuse Detection",
    d: "Harsh braking, overspeed, redline launches and tamper events detected at the edge, on the Core, before they reach the cloud.",
    r: "EVENT · HARSH_BRAKE · -0.82g",
  },
  {
    t: "Live GPS + Speed",
    d: "GNSS fused with wheel-speed data for a position and velocity stream you can hold renters accountable with.",
    r: "39.0438°N 77.4874°W · 71 MPH",
  },
  {
    t: "Starter Immobilizer",
    d: "A pluggable Node that safely blocks restart after a verified event or an expired rental window. Never mid-drive.",
    r: "NODE 02 · IMMOBILIZE ARMED",
  },
  {
    t: "Tamper Alerts",
    d: "Pull the harness, cut power, jam GNSS — the Core notices, logs it, and tells you within seconds.",
    r: "ALERT · POWER LOSS 09:41:07",
  },
  {
    t: "Fleet API",
    d: "Every event, trip and telemetry stream, authenticated end to end and queryable from your own stack.",
    r: "GET /v1/fleet/events · 200",
  },
];

const standards = [
  {
    t: "Detected at the edge",
    d: "Events are classified on the Core itself — no cell coverage, no problem. The verdict rides along when the vehicle reconnects.",
  },
  {
    t: "Evidence, not opinion",
    d: "Every abuse claim ships with the CAN frames, GPS trace and g-force curve behind it. Disputes end at the data.",
  },
  {
    t: "Plugs in, in minutes",
    d: "One DEUTSCH connector to the harness. No splicing, no dealer visit, and it moves to the next vehicle when this one retires.",
  },
];

export function Hero() {
  return (
    <div className="bg-background">
      {/* ── Hero ── */}
      <div className="mx-auto max-w-[1280px] px-6 pt-[150px] md:px-9 lg:px-[72px]">
        <div className="mb-5 flex items-center gap-2">
          <span className="text-[12.5px] font-medium text-foreground/55">
            Vehicle-miles monitored by Canary:
          </span>
          <span className="font-mono text-[13px] text-foreground">4,182,660</span>
        </div>
        <h1 className="m-0 text-[44.4px] font-medium leading-[50.6px] tracking-[-0.02em] text-foreground">
          monitor your vehicle
          <br />
          in real-time.
        </h1>
        <p className="mt-5 max-w-[600px] text-[17px] leading-[27px] text-foreground/61">
          Built for fleets, rentals and owners who need to know. Canary Core reads
          the CAN bus and catches abuse the instant it happens — not minutes later.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex h-10 items-center gap-1 rounded-full border border-foreground/14 bg-background py-0.5 pl-4 pr-0.5">
            <input
              placeholder="what's your work email?"
              className="w-[190px] border-none bg-transparent font-sans text-sm text-foreground outline-none placeholder:text-foreground/40"
            />
            <WaitlistModalButton />
          </div>
          <button className="flex h-9 items-center gap-2.5 rounded-full border-none bg-transparent py-1 pl-1 pr-3.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/6 text-[10px] text-foreground">
              ▶
            </span>
            <span className="text-[13.5px] font-medium text-foreground/55">
              Watch the 2-min tour
            </span>
          </button>
        </div>

        {/* Dashboard shot */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-foreground/8 bg-background-alt shadow-[0_20px_60px_rgba(12,10,9,0.12)]">
          <div
            className="flex aspect-[1424/640] items-center justify-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(12,10,9,0.03) 0 12px, transparent 12px 24px)",
            }}
          >
            <span className="font-mono text-[13px] text-foreground/64">
              fleet telemetry dashboard — drop screenshot here
            </span>
          </div>
        </div>

        {/* Readout strip */}
        <div className="flex flex-wrap gap-12 border-b border-foreground/8 py-7">
          <span className="font-mono text-[13px] text-foreground/64">
            CAN FRAMES / DAY · 86,400,000
          </span>
          <span className="font-mono text-[13px] text-foreground/64">
            ABUSE EVENTS DETECTED · 12,408
          </span>
          <span className="font-mono text-[13px] text-foreground/64">
            MEDIAN ALERT LATENCY · 1.4s
          </span>
        </div>
      </div>

      {/* ── Feature grid ── */}
      <div className="mx-auto max-w-[1280px] px-6 pt-[110px] md:px-9 lg:px-[72px]">
        <h2 className="m-0 max-w-[760px] text-[32.9px] font-medium leading-[1.25] tracking-[-0.02em] text-foreground">
          everything your vehicle knows, finally yours.
          <span className="text-foreground/45">
            {" "}
            Purpose-built for fleets, rentals and owners who carry the risk.
          </span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.t}
              className="flex flex-col gap-3 rounded-2xl border border-foreground/8 bg-background p-5"
            >
              <div className="flex items-center justify-center rounded-[10px] border border-foreground/6 bg-background-alt px-3.5 py-4.5">
                <span className="font-mono text-[11px] tracking-[0.02em] text-foreground/64">
                  {f.r}
                </span>
              </div>
              <div className="text-[15.1px] font-medium text-foreground">{f.t}</div>
              <p className="m-0 text-[13.2px] leading-5 text-foreground/45">{f.d}</p>
              <span className="cursor-pointer text-xs font-semibold tracking-[0.04em] text-primary">
                EXPLORE →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Standard statement ── */}
      <div className="mx-auto max-w-[1280px] px-6 pt-[130px] md:px-9 lg:px-[72px]">
        <h2 className="m-0 max-w-[760px] text-[32.9px] font-medium leading-[1.25] tracking-[-0.02em]">
          <span className="text-primary">a new standard for vehicle accountability.</span>
          <span className="text-foreground/45">
            {" "}
            Canary removes the guesswork legacy trackers were designed to carry
            forever.
          </span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-foreground/8 pt-8 md:grid-cols-3">
          {standards.map((s, i) => (
            <div key={s.t}>
              <div className="mb-3.5 font-mono text-[11px] text-foreground/64">
                0{i + 1}
              </div>
              <div className="mb-2.5 text-[15.1px] font-medium text-foreground">{s.t}</div>
              <p className="m-0 text-[13.2px] leading-5 text-foreground/45">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dark security band ── */}
      <div className="mx-auto max-w-[1280px] px-6 pt-[130px] md:px-9 lg:px-[72px]">
        <div className="canary-noise grid grid-cols-1 gap-10 overflow-hidden rounded-3xl bg-[#0c0a09] p-8 text-[#fafafa] md:grid-cols-[1.2fr_1fr_1fr] md:p-12">
          <div>
            <h3 className="m-0 text-[27px] font-medium leading-tight">
              fleet-grade security.
            </h3>
            <p className="my-3.5 max-w-[300px] text-[13.2px] leading-5 text-[#fafafa]/60">
              Every frame signed on the Core, encrypted in transit, and verifiable
              end to end. Your vehicle data never travels unauthenticated.
            </p>
            <button className="inline-flex h-9 items-center rounded-full bg-white px-4.5 text-xs font-medium uppercase tracking-[0.04em] text-[#0c0a09]">
              Security at Canary
            </button>
          </div>
          <div>
            <div className="mb-2.5 text-[15.1px] font-medium">
              Works with your fleet stack
            </div>
            <p className="m-0 text-[13.2px] leading-5 text-[#fafafa]/60">
              Rental management systems, dispatch boards and billing — events land
              where your team already works.
            </p>
          </div>
          <div>
            <div className="mb-2.5 text-[15.1px] font-medium">Canary API</div>
            <p className="m-0 text-[13.2px] leading-5 text-[#fafafa]/60">
              Public API for telemetry, trips and abuse events. Build your own
              views on the same authenticated stream.
            </p>
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="mx-auto max-w-[1280px] px-6 py-[110px] md:px-9 lg:px-[72px]">
        <div className="rounded-3xl bg-[#0c0a09] px-8 py-16 text-[#fafafa] md:px-16 md:py-[72px]">
          <h2 className="m-0 max-w-[560px] text-[38.3px] font-medium leading-[1.15] tracking-[-0.02em]">
            ready to hear what your vehicle is telling you?
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <WaitlistModalButton />
            <span className="text-[13.5px] font-medium text-[#fafafa]/60">
              Watch the 2-min tour
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
