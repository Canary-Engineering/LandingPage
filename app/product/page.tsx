"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, Radio, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

const tabs = [
  {
    title: "Edge Abuse Detection",
    desc: "Harsh braking, overspeed and tamper events are thresholded on the Core itself — known in seconds, not after a cellular round-trip.",
  },
  {
    title: "CAN + GNSS Fusion",
    desc: "The CAN bus is authoritative for speed, GNSS for location — cross-checked continuously, so it keeps working in tunnels and parking garages.",
  },
  {
    title: "Node Ecosystem",
    desc: "Core, Harness, and accessory modules pair over a single sealed connector with mutual authentication before any data flows.",
  },
  {
    title: "Offline-Safe",
    desc: "Abuse events are never dropped for buffer pressure; bulk telemetry queues locally until reconnect.",
  },
];

const hardware = [
  {
    icon: Cpu,
    name: "Canary Core",
    desc: "The hub that lives in the vehicle. It powers every Node, manages pairing and encryption, and bridges everything to the cloud over Wi-Fi or LTE.",
  },
  {
    icon: Radio,
    name: "CAN Harness Node",
    desc: "Taps into the vehicle's CAN bus and mirrors every frame to the Core in real time — engine, brakes, doors and more — with nothing pre-filtered before it's analyzed.",
  },
  {
    icon: Lock,
    name: "Starter Immobilizer Node",
    desc: "Blocks the starter circuit on command. It only acts on encrypted, authenticated instructions from the Core — and never mid-drive.",
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
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full bg-white/10 text-white hover:bg-white/15"
            >
              Talk to us
            </Button>
          </Link>
          <WaitlistModalButton />
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-foreground/8 bg-background p-2 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
        <div className="flex h-80 items-center justify-center rounded-2xl border border-foreground/8 bg-background-alt font-mono text-sm text-foreground/40">
          product preview — CAN telemetry / abuse-event feed
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

      {/* Hardware */}
      <section className="mt-24">
        <h2 className="max-w-[560px] text-3xl font-medium leading-tight text-foreground md:text-4xl">
          meet the hardware
        </h2>
        <p className="mt-3 max-w-[560px] text-foreground/61">
          One Core, a family of plug-in Nodes. Everything speaks over a
          single sealed connector — no splicing, no dealer visit.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {hardware.map((h) => (
            <div
              key={h.name}
              className="rounded-2xl border border-foreground/8 bg-background p-6"
            >
              <h.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <div className="mt-4 text-[15.1px] font-medium text-foreground">
                {h.name}
              </div>
              <p className="mt-2 text-[13.2px] leading-5 text-foreground/45">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-[13.2px] text-foreground/45">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Every Core and Node ships with a hardware secure element as its
          root of trust —{" "}
          <Link href="/security" className="text-primary hover:underline">
            see how that works
          </Link>
          .
        </div>
      </section>

      {/* Use cases */}
      <section className="mt-24 grid grid-cols-1 gap-10 border-t border-foreground/8 pt-14 md:grid-cols-2">
        <div id="fleets" className="scroll-mt-28">
          <div className="mb-3.5 font-mono text-[11px] text-foreground/64">01</div>
          <h3 className="mb-2.5 text-xl font-medium text-foreground">
            Built for fleets &amp; rentals
          </h3>
          <p className="text-[14px] leading-6 text-foreground/45">
            Every abuse claim ships with the CAN frames, GPS trace and
            g-force curve behind it. Disputes end at the data instead of
            he-said-she-said, and the Starter Immobilizer lets you gate
            restart after a verified event or an expired rental window.
          </p>
        </div>
        <div id="owners" className="scroll-mt-28">
          <div className="mb-3.5 font-mono text-[11px] text-foreground/64">02</div>
          <h3 className="mb-2.5 text-xl font-medium text-foreground">
            Built for owners
          </h3>
          <p className="text-[14px] leading-6 text-foreground/45">
            Pull the harness, cut power, jam GNSS — Canary notices, logs it,
            and tells you within seconds instead of after the fact. Know
            what happened to your vehicle without waiting on a dealer visit
            or a subpoena.
          </p>
        </div>
      </section>
    </main>
  );
}
