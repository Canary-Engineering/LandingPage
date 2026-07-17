import type { Metadata } from "next";

import { CTA } from "@/components/home/sections";
import { PricingCompare, PricingFaq, PricingHero, PricingPlans } from "@/components/pricing/sections";

export const metadata: Metadata = {
  title: "Pricing — Canary",
  description:
    "Canary Core pricing for individual owners and for fleets — the same hardware, priced for one vehicle or a thousand.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingCompare />
      <PricingFaq />
      <CTA />
    </>
  );
}
