import Link from "next/link";

import { Canary } from "@/components/ui/icons";

type LinkGroup = { heading: string; items: { title: string; href: string }[] };

/* Two rows of four, matching warp.co's footer: the grid flows in order, so
   groups 1-4 land on the top row and 5-8 on the bottom. */
const groups: LinkGroup[] = [
  {
    heading: "Products",
    items: [
      { title: "Canary Core", href: "/drivesense" },
      { title: "CAN Harness", href: "#" },
      { title: "Starter Immobilizer", href: "#" },
      { title: "Canary Fleet", href: "/fleet" },
      { title: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { title: "For Fleets", href: "#" },
      { title: "For Rentals", href: "#" },
      { title: "For Owners", href: "#" },
      { title: "For Businesses", href: "#" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { title: "API & Docs", href: "#" },
      { title: "Roadmap", href: "/roadmap" },
      { title: "Security", href: "#" },
      { title: "Support", href: "/contact" },
      { title: "Status", href: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Branding", href: "/branding" },
      { title: "Careers", href: "#" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Compare",
    items: [
      { title: "vs. GPS trackers", href: "#" },
      { title: "vs. OBD dongles", href: "#" },
      { title: "vs. OEM telematics", href: "#" },
      { title: "vs. Dashcams", href: "#" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Acceptable Use", href: "#" },
    ],
  },
  {
    heading: "Social",
    items: [
      { title: "LinkedIn", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-6 md:gap-8">
        {/* Brand column: mark pinned top, copyright pinned bottom. */}
        <div className="flex flex-col justify-between gap-10 md:col-span-2">
          <Link href="/" aria-label="Canary" className="inline-flex">
            <Canary className="h-20 w-auto fill-primary" />
          </Link>
          <span className="text-[13px] text-muted-foreground">
            Copyright © Halvex Inc 2025, All rights reserved
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:col-span-4 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.heading}>
              <div className="mb-5 text-[15px] font-medium text-foreground">{g.heading}</div>
              <ul className="space-y-4">
                {g.items.map((i) => (
                  <li key={i.title}>
                    <Link
                      href={i.href}
                      className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Brand signature: the wordmark oversized until it overflows the viewport and
          crops, line-hatched and fading out toward the base of the letters. Drawn
          from vector outlines rather than live text — see `.canary-signature`. */}
      <div className="canary-signature-wrap relative overflow-hidden">
        <Link
          href="/"
          aria-label="Canary"
          tabIndex={-1}
          className="canary-signature absolute left-1/2 top-0 block -translate-x-1/2 transition-opacity hover:opacity-80"
        />
      </div>
    </footer>
  );
}
