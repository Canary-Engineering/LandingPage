"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    title: "Edge Abuse Detection",
    desc: "Harsh braking, overspeed and tamper events are thresholded on the Core itself — known in seconds, not after a cellular round-trip.",
  },
  {
    title: "CAN + GNSS Fusion",
    desc: "The CAN bus is authoritative for speed, GNSS for location — cross-checked continuously.",
  },
  {
    title: "Node Ecosystem",
    desc: "Core, Harness, and accessory modules pair over a sealed DEUTSCH DT/DTM connector with mutual authentication.",
  },
  {
    title: "Offline-Safe",
    desc: "Abuse events are never dropped for buffer pressure; bulk telemetry queues locally until reconnect.",
  },
];

export default function Page() {
  const [active, setActive] = useState(0);
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-20 pt-[200px]">
      <div className="canary-noise canary-grid-bg-dark overflow-hidden rounded-3xl bg-[#0c0a09] p-8 text-[#fafafa] md:p-16">
        <p className="mb-4 font-mono text-sm text-[#fafafa]/60">
          WITH CANARY CORE, YOU CAN...
        </p>
        <div className="text-4xl font-medium leading-tight md:text-6xl">
          Focus on your fleet
        </div>
        <div className="text-4xl font-medium leading-tight md:text-6xl">
          Not your <span className="text-primary">abuse claims</span>
        </div>
        <p className="mt-6 max-w-[480px] leading-relaxed text-[#fafafa]/60">
          Canary Core keeps your fleet accountable in real time — a full CAN
          mirror, edge-detected abuse events, and a live GPS/speed stream, all
          authenticated end to end.
        </p>
        <div className="mt-8 flex gap-3">
          <Button
            size="lg"
            className="rounded-full bg-white/10 text-white hover:bg-white/15"
          >
            Get a demo
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Try Canary Core
          </Button>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-foreground/8 bg-background p-2 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
        <div className="flex h-80 items-center justify-center rounded-2xl border border-foreground/8 bg-background-alt font-mono text-sm text-foreground/40">
          live CAN telemetry / abuse-event feed
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {tabs.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setActive(i)}
              className={`rounded-2xl border p-4 text-left transition-colors ${
                active === i
                  ? "border-primary bg-background-alt"
                  : "border-foreground/8 bg-background"
              }`}
            >
              <div className="text-sm font-semibold text-foreground">{f.title}</div>
              <div className="mt-1.5 text-xs text-foreground/40">{f.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
