import { BatteryCharging, BellRing, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    t: "Hardware root of trust",
    d: "An ATECC608A secure element signs every message end to end — evidence you can't spoof or forge.",
  },
  {
    icon: BatteryCharging,
    t: "Backup power path",
    d: "Its own cell keeps the Core reporting the moment the vehicle's 12V is cut.",
  },
  {
    icon: BellRing,
    t: "Tamper alerts",
    d: "Harness pulls, disconnects and power loss are flagged instantly with a reason code.",
  },
  {
    icon: Cpu,
    t: "Signed firmware",
    d: "Only verified, signed firmware ever runs on the Core. Nothing else boots.",
  },
];

function TamperEvidence() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono text-[12px] text-white/70">
      <div className="mb-4 flex items-center justify-between">
        <span className="uppercase tracking-widest text-white/50">Tamper log</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-amber-400">POWER_LOSS · 0x02</span>
        </span>
      </div>
      <div className="space-y-2 rounded-lg bg-black/40 p-4 leading-5">
        <p>09:41:07 · vehicle 12V below threshold</p>
        <p>09:41:07 · switched to backup cell</p>
        <p>09:41:07 · alert sent · last fix 39.0438°N</p>
        <p className="text-white/40">09:41:08 · logging continues offline…</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-white/50">signed · ATECC608A</span>
        <span className="text-emerald-400">verified ✓</span>
      </div>
    </div>
  );
}

export function Security() {
  return (
    <section
      id="security"
      className="canary-noise relative overflow-hidden border-b border-border bg-[#0c0a09] text-white"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <div>
          <div className="mb-4 font-mono text-[12px] uppercase tracking-widest text-primary">
            Tamper &amp; security
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            cut the power.{" "}
            <span className="font-normal italic text-white/60">it still reports.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            Pull the harness or drop the battery and the Core switches to its own backup
            cell, fires one alert with a last-known fix, then keeps logging. Every message
            is signed by a hardware secure element — proof you can&apos;t spoof or strip.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t}>
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="mb-1 text-[15px] font-medium">{t}</div>
                <p className="text-[13.5px] leading-relaxed text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <TamperEvidence />
      </div>
    </section>
  );
}
