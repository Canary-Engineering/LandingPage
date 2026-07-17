"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Wordmark } from "@/components/branding/wordmark";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WaitlistModalButton } from "@/components/ui/waitlistmodal";
import { cn } from "@/lib/utils";

type NavLink = { title: string; desc: string; href: string };

const productItems: NavLink[] = [
  { title: "Canary Core", desc: "The hub. Reads the bus, detects abuse, talks to the cloud.", href: "/drivesense" },
  { title: "CAN Harness", desc: "Taps the vehicle bus. Full raw mirror, no filtering.", href: "#" },
  { title: "Starter Immobilizer", desc: "Blocks restart safely. Never mid-drive.", href: "#" },
  { title: "Canary Fleet", desc: "Centralized monitoring across every vehicle.", href: "/fleet" },
  { title: "Canary for Teens", desc: "Real-time insight for young drivers.", href: "/teens" },
  { title: "Canary for Businesses", desc: "Monitoring built for fleet operations.", href: "/businesses" },
];

const solutionItems: NavLink[] = [
  { title: "For Fleets", desc: "Know which vehicle, which driver, which second." },
  { title: "For Rentals", desc: "End disputes with evidence, not opinion." },
  { title: "For Owners", desc: "Your car, your data, finally yours." },
  { title: "For Businesses", desc: "Dispatch, billing and ops on one stream." },
].map((i) => ({ ...i, href: "#" }));

const companyItems: NavLink[] = [
  { title: "About", desc: "Our story and our mission.", href: "/about" },
  { title: "Branding", desc: "Logos, colors and guidelines.", href: "/branding" },
  { title: "Roadmap", desc: "What's shipping next.", href: "/roadmap" },
  { title: "Security", desc: "Root of trust, signed firmware, audit logs.", href: "#" },
];

const flatItems: { title: string; href: string }[] = [
  { title: "Pricing", href: "/pricing" },
  { title: "Contact us", href: "/contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="h-9 w-9 rounded-full"
    >
      {/* Render nothing until mounted — resolvedTheme is undefined on the server
          and would otherwise hydrate with the wrong icon. */}
      {mounted && (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
    </Button>
  );
}

function ListItem({ title, desc, href }: NavLink) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent"
        >
          <div className="text-[14px] font-medium">{title}</div>
          <p className="mt-1 line-clamp-2 text-[13px] text-muted-foreground">{desc}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationFrame() {
  const mobileGroups: [string, NavLink[]][] = [
    ["Products", productItems],
    ["Solutions", solutionItems],
    ["Company", companyItems],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
      {/* `relative` + an absolutely-centered menu pins the links to the middle of the
          viewport itself. In a plain flex row the wordmark and the actions have
          different widths, so the menu would sit wherever the leftover space put it. */}
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <NavigationMenu className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px]">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[520px] grid-cols-2 gap-2 p-3">
                  {productItems.map((i) => (
                    <ListItem key={i.title} {...i} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px]">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] grid-cols-2 gap-2 p-3">
                  {solutionItems.map((i) => (
                    <ListItem key={i.title} {...i} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {flatItems.map((i) => (
              <NavigationMenuItem key={i.title}>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px]")}>
                  <Link href={i.href}>{i.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px]">Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] grid-cols-2 gap-2 p-3">
                  {companyItems.map((i) => (
                    <ListItem key={i.title} {...i} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link href="https://billing.halvex.net/" className="hidden px-2 text-[14px] sm:inline">
            Log in
          </Link>
          <div className="hidden sm:inline-flex">
            <WaitlistModalButton className="h-9 px-4" />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85vw] flex-col p-0 sm:w-96">
              <SheetHeader className="border-b border-border px-5 py-4">
                <SheetTitle className="text-left">
                  <Wordmark />
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-2 py-3">
                {mobileGroups.map(([label, items]) => (
                  <div key={label} className="mb-2">
                    <div className="px-3 pb-1 pt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    {items.map((it) => (
                      <SheetClose asChild key={it.title}>
                        <Link
                          href={it.href}
                          className="flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] hover:bg-accent"
                        >
                          <span>{it.title}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}
                <div className="mt-2 border-t border-border pt-2">
                  {flatItems.map((i) => (
                    <SheetClose asChild key={i.title}>
                      <Link
                        href={i.href}
                        className="flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] hover:bg-accent"
                      >
                        <span>{i.title}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-border p-4">
                <Link
                  href="https://billing.halvex.net/"
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-[14px]"
                >
                  Log in
                </Link>
                <WaitlistModalButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
