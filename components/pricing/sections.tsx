import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
          Pricing
        </div>
        <h1 className="max-w-4xl text-5xl font-medium tracking-tight md:text-6xl">
          one Core.{" "}
          <span className="font-normal italic text-muted-foreground">
            priced for a single car or a thousand of them.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
          Canary Core is the same hardware whether it&apos;s watching a garage-kept
          weekend car or a hundred-vehicle fleet. What changes is the roles, the
          access, and who&apos;s on the other end of the API.
        </p>
      </div>
    </section>
  );
}

type Plan = {
  tag: string;
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  featured?: boolean;
  features: string[];
  cta: ReactNode;
};

const plans: Plan[] = [
  {
    tag: "Personal",
    name: "For individual owners",
    audience: "One car, one owner, full visibility.",
    price: "$24",
    priceNote: "/mo per vehicle · $299 hardware kit one-time",
    features: [
      "Canary Core + CAN Harness, shipped and ready to pair",
      "Real-time abuse & tamper alerts",
      "Live GPS + speed tracking, fused with CAN-bus speed",
      "OBD-II fault code reader (read DTCs)",
      "Starter immobilizer control, with the Node installed",
      "72-hour offline buffering — nothing lost without signal",
      "Owner-only mobile app access",
      "Incident evidence export — CAN frames, GPS trace, g-force",
    ],
    cta: <WaitlistModalButton className="w-full justify-center" label="Get early access" />,
  },
  {
    tag: "Enterprise",
    name: "For fleets & rental hosts",
    audience: "Every vehicle, every driver, one dashboard.",
    price: "Custom",
    priceNote: "volume hardware pricing · per-vehicle subscription",
    featured: true,
    features: [
      "Everything in Personal, on every vehicle in the fleet",
      "Unlimited vehicles and Nodes",
      "Fleet-admin roles & scoped permissions",
      "Canary Fleet API — REST + webhooks",
      "Centralized fleet dashboard across all vehicles",
      "Bulk telemetry export & extended data retention",
      "Priority support & white-glove onboarding",
      "Custom integrations — dispatch, billing, rental ops",
    ],
    cta: (
      <Button asChild size="lg" className="w-full rounded-lg">
        <Link href="/contact">Talk to sales →</Link>
      </Button>
    ),
  },
];

export function PricingPlans() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.tag}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-primary/40 bg-card shadow-[0_20px_60px_-30px_rgba(255,0,73,0.25)]"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
                {p.featured && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    For fleets
                  </span>
                )}
              </div>
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-1 text-[14px] text-muted-foreground">{p.audience}</p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-mono text-5xl font-medium tracking-tight">{p.price}</span>
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground">{p.priceNote}</p>

              <div className="mt-8">{p.cta}</div>

              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const compareRows: [string, string, string][] = [
  ["Vehicles per account", "1", "Unlimited"],
  ["Roles", "Owner", "Owner + Fleet-admin"],
  ["Abuse & tamper alerts", "Included", "Included"],
  ["Live GPS + speed tracking", "Included", "Included"],
  ["OBD-II fault code reader", "Included", "Included"],
  ["Starter immobilizer control", "Included", "Included"],
  ["Dashboard", "Single-vehicle", "Fleet-wide"],
  ["Fleet API (REST + webhooks)", "—", "Included"],
  ["Data retention & bulk export", "Standard", "Extended"],
  ["Support", "Community + email", "Priority, white-glove"],
];

export function PricingCompare() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
          compare plans.{" "}
          <span className="font-normal italic text-muted-foreground">
            same hardware, different scale.
          </span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 font-normal text-muted-foreground">Feature</th>
                <th className="w-40 py-4 px-4 font-mono text-[12px] uppercase tracking-widest text-primary">
                  Personal
                </th>
                <th className="w-40 py-4 pl-4 font-mono text-[12px] uppercase tracking-widest text-primary">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([feature, personal, enterprise]) => (
                <tr key={feature} className="border-b border-border last:border-0">
                  <td className="py-4 pr-4 text-foreground/80">{feature}</td>
                  <td className="px-4 py-4 text-muted-foreground">{personal}</td>
                  <td className="pl-4 py-4 text-muted-foreground">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const faqs: [string, string][] = [
  [
    "Do I need the CAN Harness, or does Core work on its own?",
    "Canary Core is the hub — it handles security, module pairing and cloud connectivity. The CAN Harness Node is what taps the vehicle bus, so it ships together in both plans. Additional Nodes, like the Starter Immobilizer, pair over the same connector whenever you add them.",
  ],
  [
    "Can I start on Personal and move to Enterprise later?",
    "Yes. The hardware doesn't change — moving a vehicle from a Personal account into a fleet just changes its role and which dashboard it reports to. Reach out and we'll handle the migration.",
  ],
  [
    "What does Enterprise pricing actually depend on?",
    "Fleet size, hardware volume, and how much of the Fleet API you need. Talk to sales and we'll quote per-vehicle pricing plus any bulk hardware discount.",
  ],
  [
    "Is there a contract, or is it month-to-month?",
    "Personal is month-to-month, cancel any time. Enterprise agreements are typically annual, with terms scoped to fleet size during the sales conversation.",
  ],
];

export function PricingFaq() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-medium tracking-tight md:text-5xl">
          questions,{" "}
          <span className="font-normal italic text-muted-foreground">answered.</span>
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left text-[16px]">{q}</AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
