import { ShieldCheck, Plug, Code2 } from "lucide-react";

const pillars = [
  {
    n: "01",
    t: "Detected at the edge",
    d: "Events are classified on the Core itself — no cell coverage, no problem. Detection never depends on cellular latency, and the verdict rides along when the vehicle reconnects.",
  },
  {
    n: "02",
    t: "Evidence, not opinion",
    d: "Every abuse claim ships with the CAN frames, GPS trace and g-force curve behind it. Disputes end at the data instead of one person's word against another's.",
  },
  {
    n: "03",
    t: "Plugs in, in minutes",
    d: "One sealed connector to the harness. No splicing, no dealer visit, and it moves to the next vehicle when this one retires.",
  },
];

export function Pillars() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-16 max-w-4xl text-5xl font-medium tracking-tight md:text-6xl">
          a new standard for vehicle accountability.{" "}
          <span className="font-normal italic text-muted-foreground">
            Canary removes the guesswork legacy trackers were designed to carry forever.
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((x) => (
            <div key={x.n} className="border-t border-border pt-6">
              <div className="mb-8 font-mono text-[12px] text-muted-foreground">{x.n}</div>
              <h3 className="mb-3 text-2xl">{x.t}</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const edgeSteps: [string, string, string][] = [
  [
    "01.",
    "Event happens",
    "A driver stands on the brakes. The IMU, the CAN-bus speed signal and the GNSS fix all register it at once — on the device, in the vehicle.",
  ],
  [
    "02.",
    "Classified on-device",
    "The Core thresholds the signals against each other as they arrive. No round trip, no waiting on a tower — the classification happens where the data is.",
  ],
  [
    "03.",
    "Evidence delivered",
    "One immediate message: timestamp, coordinates, and the signal snapshot that triggered it. Buffered to flash if the link is down, never evicted.",
  ],
];

export function EdgeDetection() {
  return (
    <section className="canary-noise border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
          Canary Core
        </div>
        <h2 className="max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          Detection <span className="font-normal italic">that runs at the edge.</span>
        </h2>
        <p className="mt-6 max-w-xl text-[16px] text-background/70">
          Abuse detection runs on the Core, not in the cloud — so &ldquo;know within
          seconds&rdquo; doesn&apos;t depend on cellular coverage that isn&apos;t guaranteed.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {edgeSteps.map(([n, t, d]) => (
            <div key={n} className="border-t border-background/15 pt-6">
              <div className="mb-3 font-mono text-[13px] text-primary">
                {n}
                {t}
              </div>
              <p className="text-[14px] leading-relaxed text-background/70">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-md rounded-2xl border border-background/15 bg-background/5 p-6 font-mono text-[12px]">
          <div className="mb-3 flex items-center justify-between text-background/60">
            <span>#2313</span>
            <span>09:41:07</span>
          </div>
          <div className="mb-4 font-sans text-[14px]">HARSH_BRAKE · VIN ···4471</div>
          <div className="grid grid-cols-3 gap-3 text-background/70">
            <div>
              <div className="opacity-60">g-force</div>
              <div className="text-background">-0.82g</div>
            </div>
            <div>
              <div className="opacity-60">Speed</div>
              <div className="text-background">71 MPH</div>
            </div>
            <div>
              <div className="opacity-60">Latency</div>
              <div className="text-emerald-300">1.4s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const extras = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    t: "Hardware root of trust.",
    d: "An ATECC608A secure element in the Core and every Node. Challenge-response pairing, ECDH session keys, and firmware that's signed and verified before it's ever applied.",
  },
  {
    icon: <Plug className="h-5 w-5" />,
    t: "One connector, every Node.",
    d: "Sealed IP67 DEUTSCH connectors carry power and data to every Node — CAN Harness, Starter Immobilizer, and whatever plugs in next — on one uniform 8-pin interface.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    t: "Public API.",
    d: "Telemetry, trips and abuse events on the same authenticated stream the dashboard uses. Build your own views, wire up your own alerts.",
  },
];

export function Extras() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {extras.map((e) => (
          <div key={e.t} className="rounded-2xl border border-border p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
              {e.icon}
            </div>
            <h3 className="mb-2 text-xl">{e.t}</h3>
            <p className="text-[14px] text-muted-foreground">{e.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Real entries from the engineering decision log (docs/CHANGELOG.md) — this is a
   decision log, not a press feed, so the tags are Decision/Engineering, not
   funding announcements. */
const posts = [
  {
    tag: "Engineering",
    date: "Jul 16, 2026",
    title: "The Core gets a backup battery",
    body: "Cutting power used to be a silent kill. Now it's a reportable event — one alert with a last-known fix goes out on backup power before the Core goes down.",
  },
  {
    tag: "Decision",
    date: "Jul 16, 2026",
    title: "The harness self-powers from OBD-II",
    body: "Pin 16 is permanently battery-hot on essentially every OBD-II vehicle. One less wire down the Core cable, same always-on behavior.",
  },
  {
    tag: "Decision",
    date: "Jul 14, 2026",
    title: "STM32G474 confirmed for the CAN harness",
    body: "The F103's bxCAN peripheral can't decode CAN-FD framing at all. Mirroring the full 8Mbps data phase needed real FDCAN silicon, and we took the cost.",
  },
  {
    tag: "Engineering",
    date: "Jul 13, 2026",
    title: "Full real-time raw CAN mirror",
    body: "No node-side filtering anymore. The harness forwards every frame; the Core sees the complete picture and decides what matters.",
  },
  {
    tag: "Decision",
    date: "Jul 13, 2026",
    title: "Core↔Node moves to RS-485",
    body: "Single-ended UART has no noise rejection through an EMI-heavy engine bay — and couldn't carry 8Mbps reliably at any useful cable length.",
  },
  {
    tag: "Decision",
    date: "Jul 13, 2026",
    title: "Sealed DEUTSCH connectors, everywhere",
    body: "Micro-Fit is a wire-to-board part meant for life inside an enclosure. Nodes live near the cabin edge and the firewall. IP67 or nothing.",
  },
];

export function News() {
  return (
    <section id="news" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
            what we&apos;re building.{" "}
            <span className="font-normal italic text-muted-foreground">
              Straight from the decision log.
            </span>
          </h2>
          <div className="flex gap-2 text-[13px] text-muted-foreground">
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border">←</button>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border">→</button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-muted to-accent" />
              <div className="p-5">
                <div className="mb-2 font-mono text-[12px] text-muted-foreground">
                  {p.tag} · {p.date}
                </div>
                <div className="mb-2 text-[17px] font-medium">{p.title}</div>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-3 text-[13px]">Read more →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h2 className="mx-auto max-w-4xl text-6xl font-medium tracking-tight md:text-8xl">
          ready to hear what your vehicle is{" "}
          <span className="font-normal italic">telling you?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Join the fleets, rentals and owners who stopped guessing what happened out
          there — and started knowing.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get early access →
          </a>
          <a
            href="#tour"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent"
          >
            Watch the 2-min tour
          </a>
        </div>
      </div>
    </section>
  );
}
