"use client";

import { useEffect, useState } from "react";

import { MiniMap, eventFeed } from "@/components/home/widgets";

function CanFrameStream() {
  const frames = [
    ["0x0C1", "RPM", "3120"],
    ["0x0D0", "THROTTLE", "34%"],
    ["0x1A2", "BRAKE", "OFF"],
    ["0x3F0", "DOOR_FL", "CLOSED"],
    ["0x0C1", "RPM", "3184"],
    ["0x2B8", "WHEEL_SPD", "71"],
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % frames.length), 800);
    return () => clearInterval(id);
  }, [frames.length]);
  return (
    <div className="flex h-full flex-col justify-center gap-1 p-4 font-mono text-[11px]">
      {frames.map((f, i) => (
        <div
          key={i}
          className={`flex items-center justify-between rounded px-2 py-1 transition-colors ${
            active === i ? "bg-card text-foreground" : "text-muted-foreground"
          }`}
        >
          <span>{f[0]}</span>
          <span>{f[1]}</span>
          <span>{f[2]}</span>
        </div>
      ))}
    </div>
  );
}

function AbuseEvents() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-4">
      {eventFeed.map((e) => (
        <div key={e.label} className="flex items-center justify-between rounded-lg bg-card px-3 py-2">
          <span className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
            <span className="font-mono text-[11.5px]">{e.label}</span>
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">{e.meta}</span>
        </div>
      ))}
    </div>
  );
}

function GpsVisual() {
  return (
    <div className="h-full p-4">
      <MiniMap className="h-full" />
    </div>
  );
}

function ImmobilizerState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
      <div className="grid h-20 w-20 place-items-center rounded-full border border-primary bg-primary/10 text-primary">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider">Armed</span>
      </div>
      <div className="font-mono text-[11px] text-muted-foreground">NODE 02 · STARTER DISABLE</div>
      <div className="font-mono text-[10px] text-muted-foreground/70">session verified · never mid-drive</div>
    </div>
  );
}

function TamperLog() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
        </span>
        <span className="font-mono text-[11.5px]">POWER_LOSS · REASON 0x02</span>
      </div>
      <div className="rounded-lg bg-card p-3 font-mono text-[10.5px] leading-5 text-muted-foreground">
        09:41:07 · vehicle 12V below threshold
        <br />
        09:41:07 · switched to backup battery
        <br />
        09:41:07 · alert sent · last fix 39.0438°N
      </div>
    </div>
  );
}

function ApiCalls() {
  const calls = [
    "GET /v1/fleet/events",
    "GET /v1/vehicles/{id}/trips",
    "POST /v1/commands/immobilize",
    "GET /v1/fleet/telemetry",
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % calls.length), 1100);
    return () => clearInterval(id);
  }, [calls.length]);
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 p-4 font-mono text-[11px]">
      {calls.map((c, i) => (
        <div
          key={c}
          className={`flex items-center justify-between rounded px-2 py-1.5 transition-colors ${
            active === i ? "bg-card text-foreground" : "text-muted-foreground"
          }`}
        >
          <span>{c}</span>
          <span className={active === i ? "text-emerald-600" : ""}>200</span>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    tag: "CAN Mirror",
    title: "Every frame on the bus, mirrored in real time.",
    body: "RPM, throttle, brake, faults — forwarded off the vehicle with no node-side filtering. The Core sees the complete picture, not a pre-filtered subset.",
    visual: <CanFrameStream />,
  },
  {
    tag: "Abuse Detection",
    title: "Detected at the edge, not minutes later.",
    body: "Harsh braking, overspeed and redline launches classified on the Core itself against IMU, CAN speed and GNSS. Detection never waits on cell coverage.",
    visual: <AbuseEvents />,
  },
  {
    tag: "Live GPS + Speed",
    title: "Position and velocity you can trust.",
    body: "GNSS fused with CAN-bus wheel speed. The bus stays authoritative for speed, so it keeps working in tunnels and parking garages where GPS won't.",
    visual: <GpsVisual />,
  },
  {
    tag: "Starter Immobilizer",
    title: "Blocks restart. Never mid-drive.",
    body: "A pluggable Node that safely disables the starter after a verified event or an expired rental window — gated by a session handshake with the Core.",
    visual: <ImmobilizerState />,
  },
  {
    tag: "Tamper Alerts",
    title: "Cut the power and it still reports.",
    body: "Pull the harness or disconnect the battery and the Core switches to its own backup cell, fires one alert with a last-known fix, then logs the rest.",
    visual: <TamperLog />,
  },
  {
    tag: "Fleet API",
    title: "Authenticated end to end, queryable from your stack.",
    body: "Trips, telemetry and abuse events land where your team already works — dispatch boards, rental management, billing.",
    visual: <ApiCalls />,
  },
];

export function ProductGrid() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-24 md:grid-cols-2">
        {cards.map((c) => (
          <a
            key={c.tag}
            href="#"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <div className="relative mb-6 h-56 overflow-hidden rounded-xl border border-border bg-muted/50">
              {c.visual}
            </div>
            <div className="mb-2 font-mono text-[12px] uppercase tracking-widest text-primary">
              {c.tag}
            </div>
            <h3 className="mb-2 text-[22px] leading-tight">{c.title}</h3>
            <p className="text-[14px] leading-relaxed text-muted-foreground">{c.body}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-[14px] transition-all group-hover:gap-2">
              Explore →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
