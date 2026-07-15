"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

function LivePulse({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-1.5 w-1.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
    </span>
  );
}

const CHART_POINTS = [18, 32, 24, 44, 30, 52, 38, 60, 46, 68, 52, 72, 58, 78];

function TelemetryChart() {
  const w = 280;
  const h = 84;
  const step = w / (CHART_POINTS.length - 1);
  const coords = CHART_POINTS.map((p, i) => [i * step, h - (p / 84) * h] as const);
  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(1000);
  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[84px] w-full overflow-visible">
      <defs>
        <linearGradient id="telemetry-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--canary-pink)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--canary-pink)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#telemetry-fill)" />
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="var(--canary-pink)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: length,
          strokeDashoffset: 0,
          animation: "canary-draw-line 1.6s cubic-bezier(0.16,1,0.3,1) both",
          ["--line-length" as string]: length,
        }}
      />
      <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="3" fill="var(--canary-pink)" />
    </svg>
  );
}

function GaugeRing({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(var(--canary-pink) ${value * 3.6}deg, rgba(12,10,9,0.08) 0deg)`,
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-[10px] font-semibold text-foreground">
          {value}%
        </div>
      </div>
      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">
          {label}
        </div>
        <div className="text-[13px] font-medium text-foreground">Nominal</div>
      </div>
    </div>
  );
}

function MiniMap() {
  return (
    <div
      className="canary-grid-bg relative h-[84px] w-full overflow-hidden rounded-xl border border-foreground/8 bg-background-alt"
      style={{ backgroundSize: "16px 16px" }}
    >
      <div className="absolute left-[58%] top-[42%] -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
          <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-background bg-primary" />
        </span>
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[9.5px] text-foreground/45">
        39.0438°N 77.4874°W
      </div>
    </div>
  );
}

const eventFeed = [
  { color: "bg-primary", label: "HARSH_BRAKE", meta: "-0.82g · 2s ago" },
  { color: "bg-amber-500", label: "OVERSPEED", meta: "84 MPH · 41s ago" },
  { color: "bg-foreground/25", label: "TRIP_START", meta: "09:12:04" },
];

function DashboardMock() {
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveRow((r) => (r + 1) % eventFeed.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="overflow-hidden rounded-3xl border border-foreground/8 bg-background-alt shadow-[0_20px_60px_rgba(12,10,9,0.12)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-foreground/8 bg-background px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/12" />
        <span className="ml-3 font-mono text-[11.5px] text-foreground/40">
          fleet.canary.engineering/dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-foreground/40">
            Product preview
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-[1.3fr_1fr] md:p-6">
        {/* left column */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-foreground/8 bg-background p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">
                Live CAN Telemetry
              </span>
              <span className="font-mono text-[10.5px] text-foreground/45">RPM 3120</span>
            </div>
            <TelemetryChart />
          </div>
          <div className="rounded-2xl border border-foreground/8 bg-background p-4">
            <div className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">
              Recent Events
            </div>
            <div className="flex flex-col gap-2.5">
              {eventFeed.map((e, i) => (
                <div
                  key={e.label}
                  className={`flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors ${
                    activeRow === i ? "bg-background-alt" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
                    <span className="font-mono text-[11.5px] text-foreground">{e.label}</span>
                  </span>
                  <span className="font-mono text-[11px] text-foreground/40">{e.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-foreground/8 bg-background p-4">
            <GaugeRing value={98} label="Fleet Health" />
          </div>
          <div className="rounded-2xl border border-foreground/8 bg-background p-4">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">
              Nodes Paired
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-[22px] text-foreground">Core + 2</span>
              <span className="text-[11px] font-medium text-foreground/40">Harness · Immobilizer</span>
            </div>
          </div>
          <div className="rounded-2xl border border-foreground/8 bg-background p-4">
            <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">
              Live GPS
            </div>
            <MiniMap />
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="relative overflow-hidden">
        <div
          className="canary-grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.16] blur-[110px]"
          style={{ background: "var(--canary-pink)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-[150px] md:px-9 lg:px-[72px]">
          <div
            className="canary-fade-up mb-5 flex items-center gap-2"
            style={{ animationDelay: "0ms" }}
          >
            <LivePulse />
            <span className="text-[12.5px] font-medium text-foreground/55">
              Now in development — join the waitlist for early access
            </span>
          </div>
          <h1
            className="canary-fade-up m-0 text-[44.4px] font-medium leading-[50.6px] tracking-[-0.02em] text-foreground"
            style={{ animationDelay: "80ms" }}
          >
            monitor your vehicle
            <br />
            in real-time.
          </h1>
          <p
            className="canary-fade-up mt-5 max-w-[600px] text-[17px] leading-[27px] text-foreground/61"
            style={{ animationDelay: "160ms" }}
          >
            Built for fleets, rentals and owners who need to know. Canary Core reads
            the CAN bus and catches abuse the instant it happens — not minutes later.
          </p>
          <div
            className="canary-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex h-10 items-center gap-1 rounded-full border border-foreground/14 bg-background py-0.5 pl-4 pr-0.5 transition-shadow focus-within:ring-2 focus-within:ring-primary/30">
              <input
                placeholder="what's your work email?"
                className="w-[190px] border-none bg-transparent font-sans text-sm text-foreground outline-none placeholder:text-foreground/40"
              />
              <WaitlistModalButton />
            </div>
            <Link
              href="/product"
              className="group flex h-9 items-center gap-2.5 rounded-full border-none bg-transparent py-1 pl-1 pr-3.5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/6 text-[10px] text-foreground transition-transform group-hover:scale-110">
                →
              </span>
              <span className="text-[13.5px] font-medium text-foreground/55 group-hover:text-foreground/80">
                See how it works
              </span>
            </Link>
          </div>

          {/* Dashboard mock */}
          <div
            className="canary-fade-up mt-14"
            style={{ animationDelay: "340ms" }}
          >
            <DashboardMock />
          </div>

          {/* Readout strip */}
          <div className="flex flex-wrap gap-12 border-b border-foreground/8 py-7">
            <span className="font-mono text-[13px] text-foreground/64">
              CAN 2.0 + CAN-FD · UP TO 8 MBPS
            </span>
            <span className="font-mono text-[13px] text-foreground/64">
              ABUSE DETECTION · EDGE-COMPUTED ON CORE
            </span>
            <span className="font-mono text-[13px] text-foreground/64">
              SECURE ELEMENT · ON EVERY DEVICE
            </span>
          </div>
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
            <Link
              key={f.t}
              href="/product"
              className="flex flex-col gap-3 rounded-2xl border border-foreground/8 bg-background p-5 transition-colors hover:border-foreground/16"
            >
              <div className="flex items-center justify-center rounded-[10px] border border-foreground/6 bg-background-alt px-3.5 py-4.5">
                <span className="font-mono text-[11px] tracking-[0.02em] text-foreground/64">
                  {f.r}
                </span>
              </div>
              <div className="text-[15.1px] font-medium text-foreground">{f.t}</div>
              <p className="m-0 text-[13.2px] leading-5 text-foreground/45">{f.d}</p>
              <span className="text-xs font-semibold tracking-[0.04em] text-primary">
                EXPLORE →
              </span>
            </Link>
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
            <Link
              href="/security"
              className="inline-flex h-9 items-center rounded-full bg-white px-4.5 text-xs font-medium uppercase tracking-[0.04em] text-[#0c0a09]"
            >
              Security at Canary
            </Link>
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
            <Link
              href="/product"
              className="text-[13.5px] font-medium text-[#fafafa]/60 hover:text-[#fafafa]/80 transition-colors"
            >
              See how Canary Core works →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
