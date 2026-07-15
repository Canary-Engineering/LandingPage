import Link from "next/link";
import { ShieldCheck, KeyRound, RefreshCw, FileCheck2, Radio, Lock } from "lucide-react";

const pillars = [
  {
    icon: KeyRound,
    title: "Hardware root of trust",
    desc: "Every Canary device — the Core and every Node — ships with a dedicated secure element that generates and guards its own private keys in tamper-resistant hardware. Sensitive key material never sits in ordinary flash.",
  },
  {
    icon: ShieldCheck,
    title: "Mutual authentication before anything talks",
    desc: "When a Node is plugged in, the Core challenges it with a fresh random number, and the Node proves its identity by signing that challenge with its private key. Only after that handshake succeeds does the Core start trusting data from it.",
  },
  {
    icon: RefreshCw,
    title: "A fresh encrypted session, every time",
    desc: "Core and Node negotiate a new session key using elliptic-curve Diffie-Hellman for every session, so traffic between them is encrypted and authenticated end to end — not just wrapped in one shared static secret.",
  },
  {
    icon: FileCheck2,
    title: "Signed firmware, one direction only",
    desc: "Firmware updates are cryptographically signed, and every device verifies that signature before it will install one. Updates only ever flow one way — from our servers, through the Core, out to the Nodes — never the reverse, and never from anywhere else.",
  },
  {
    icon: Radio,
    title: "Tamper-aware by default",
    desc: "Every module watches its own enclosure and wiring. If something is disturbed — the harness pulled, a case opened — it reports the event to the Core immediately, encrypted like everything else.",
  },
  {
    icon: Lock,
    title: "Protected in transit to the cloud",
    desc: "Telemetry and commands between the Core and our servers travel over TLS, so the link off the vehicle is protected the same way your banking traffic is.",
  },
];

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 pt-[200px]">
      <h1 className="mx-auto max-w-3xl text-5xl font-medium leading-tight tracking-[-0.02em] text-foreground md:text-6xl">
        security at canary
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/61">
        Canary sits between your vehicle and your cloud, so we built the
        security model first, not last. Every device authenticates before
        it&apos;s trusted, and every update is signed before it&apos;s installed.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]"
          >
            <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-medium text-foreground">{p.title}</h2>
            <p className="mt-2 leading-relaxed text-foreground/61">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-[#0c0a09] p-10 text-[#fafafa] md:p-14">
        <h2 className="text-2xl font-medium md:text-3xl">
          Have a security question?
        </h2>
        <p className="mt-3 max-w-xl text-[#fafafa]/60">
          If you&apos;re evaluating Canary for a fleet deployment or want more
          detail on how the system is built, we&apos;re happy to talk it through.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-10 items-center rounded-full bg-white px-5 text-[13px] font-medium uppercase tracking-[0.04em] text-[#0c0a09]"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
