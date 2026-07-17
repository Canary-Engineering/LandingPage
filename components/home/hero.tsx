"use client";

import { useEffect, useState } from "react";

import { Canary } from "@/components/ui/icons";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";
import {
  CanDataField,
  GaugeRing,
  LivePulse,
  MiniMap,
  TelemetryChart,
  eventFeed,
} from "@/components/home/widgets";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <CanDataField />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24">
        <h1 className="max-w-4xl text-[64px] font-medium leading-[0.95] tracking-[-0.04em] md:text-[92px]">
          monitor your vehicle
          <br />
          <span className="font-normal italic">in real-time.</span>
        </h1>

        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
          Built for fleets, rentals and owners who need to know. Canary Core reads the
          CAN bus and catches abuse the instant it happens — not minutes later.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="flex w-full items-center rounded-xl border border-border bg-card py-1.5 pl-5 pr-1.5 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-primary/30 sm:w-auto sm:min-w-[380px]">
            <input
              placeholder="what's your work email?"
              className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
            />
            <WaitlistModalButton />
          </div>
          <a href="#tour" className="inline-flex items-center gap-2 text-[14px]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-[10px] text-background">
              ▶
            </span>
            Watch the 2-min tour
          </a>
        </div>
      </div>
      <ProductShowcase />
    </section>
  );
}

const sidebarMain: [string, boolean][] = [
  ["Dashboard", true],
  ["Vehicles", false],
  ["Trips", false],
  ["Live Map", false],
];
const sidebarProducts = ["CAN Mirror", "Abuse Events", "Immobilizer", "Tamper", "GPS", "Reports"];
const sidebarCompany = ["Fleet", "API & Webhooks", "Integrations"];

const recentTrips: [string, string, string, string][] = [
  ["09:12 – 09:48", "VIN ···4471 · Ashburn loop", "2 events", "alert"],
  ["08:30 – 09:05", "VIN ···2210 · Dulles run", "Clean", "ok"],
  ["07:55 – 08:22", "VIN ···9083 · Reston", "Clean", "ok"],
];

const coreLog = [
  "Frame 0x0C1 · RPM 3120 · mirrored",
  "IMU -0.82g sustained 340ms",
  "Cross-checked CAN speed 71 MPH · GNSS fix valid",
  "Classified HARSH_BRAKE — evidence bundled, alert sent in 1.4s",
];

function ProductShowcase() {
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveRow((r) => (r + 1) % eventFeed.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-30px_rgba(12,10,9,0.25)]">
        <div className="grid grid-cols-12">
          {/* sidebar */}
          <aside className="col-span-12 border-b border-border bg-muted/40 p-4 text-[13px] md:col-span-3 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5">
              <Canary className="h-4 w-auto fill-primary" />
              <span className="font-medium">Canary</span>
              <span className="ml-auto rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                Admin
              </span>
            </div>
            {sidebarMain.map(([n, active]) => (
              <div
                key={n}
                className={`mb-0.5 rounded-md px-2 py-1.5 ${active ? "bg-accent" : "text-muted-foreground"}`}
              >
                {n}
              </div>
            ))}
            <div className="mb-1 mt-4 px-2 font-mono text-[11px] uppercase text-muted-foreground/70">
              Products
            </div>
            {sidebarProducts.map((n) => (
              <div key={n} className="rounded-md px-2 py-1.5 text-muted-foreground">
                {n}
              </div>
            ))}
            <div className="mb-1 mt-4 px-2 font-mono text-[11px] uppercase text-muted-foreground/70">
              Company
            </div>
            {sidebarCompany.map((n) => (
              <div key={n} className="rounded-md px-2 py-1.5 text-muted-foreground">
                {n}
              </div>
            ))}
          </aside>

          {/* main */}
          <main className="col-span-12 p-6 md:col-span-6">
            <div className="mb-6 inline-block rounded-md border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
              Search frames, trips, VINs… ⌘K
            </div>
            <h3 className="mb-6 text-2xl font-medium">Good afternoon, Alex</h3>

            <div className="mb-4 rounded-lg border border-border p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
                  Live CAN Telemetry
                </span>
                <span className="font-mono text-[10.5px] text-muted-foreground">RPM 3120</span>
              </div>
              <TelemetryChart />
            </div>

            <div className="rounded-lg border border-border">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[13px] font-medium">
                <span>Recent Trips</span>
                <span className="text-muted-foreground">›</span>
              </div>
              {recentTrips.map(([time, meta, status, kind]) => (
                <div
                  key={time}
                  className="flex items-center justify-between border-b border-border px-4 py-3 text-[13px] last:border-0"
                >
                  <div>
                    <div className="font-medium">{time}</div>
                    <div className="text-[12px] text-muted-foreground">{meta}</div>
                  </div>
                  <div className={kind === "ok" ? "text-emerald-600" : "text-primary"}>
                    {kind === "ok" ? "✓ " : "• "}
                    {status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-4">
                <div className="mb-1 text-[12px] text-muted-foreground">Active Vehicles</div>
                <div className="font-mono text-2xl font-medium">
                  1,204 <span className="font-sans text-[12px] font-normal text-emerald-600">↑ 3.1%</span>
                </div>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="mb-1 text-[12px] text-muted-foreground">Open Events</div>
                <div className="font-mono text-2xl font-medium">3</div>
              </div>
            </div>
          </main>

          {/* right rail */}
          <aside className="col-span-12 border-t border-border p-4 md:col-span-3 md:border-l md:border-t-0">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-medium">Canary Core</span>
              <span className="flex items-center gap-1.5">
                <LivePulse />
                <span className="text-[11px] text-muted-foreground">live</span>
              </span>
            </div>

            <div className="mb-3 rounded-lg border border-border p-3">
              <GaugeRing value={98} label="Fleet Health" />
            </div>

            <div className="mb-3 rounded-lg bg-accent p-3 text-[13px]">
              Edge detection is running on-device. No cell coverage needed.
            </div>

            <div className="space-y-2 text-[13px] text-muted-foreground">
              {coreLog.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
                Recent Events
              </div>
              <div className="flex flex-col gap-2">
                {eventFeed.map((e, i) => (
                  <div
                    key={e.label}
                    className={`flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors ${
                      activeRow === i ? "bg-muted/60" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
                      <span className="font-mono text-[11px]">{e.label}</span>
                    </span>
                    <span className="font-mono text-[10.5px] text-muted-foreground">{e.meta}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
                Live GPS
              </div>
              <MiniMap />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
