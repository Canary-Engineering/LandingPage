"use client";
import React from "react";

import { Canary } from "@/components/ui/icons";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Car, Menu, ShieldCheck } from "lucide-react";

import { WaitlistModalButton } from "../ui/waitlistmodal";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GlareCard } from "@/components/ui/glare-card";

const company: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/about",
    description: "Why we're building Canary.",
  },
  {
    title: "Security",
    href: "/security",
    description: "How Canary keeps every device and byte authenticated.",
  },
  {
    title: "Branding",
    href: "/branding",
    description: "Logo, wordmark and color guidelines.",
  },
];

const navTriggerClass =
  "!h-auto !bg-transparent !px-0 text-[15px] font-medium text-foreground/70 hover:!bg-transparent hover:text-primary data-[state=open]:!bg-transparent data-[state=open]:text-primary";

function NavigationFrame() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-6 py-5 md:px-8 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-1.5">
          <Canary className="h-6 w-auto fill-primary" />
          <span
            className="text-xl text-primary"
            style={{ fontFamily: "var(--font-wordmark)", fontWeight: "var(--font-wordmark-weight)" }}
          >
            canary
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                <NavigationMenu>
                  <NavigationMenuList className="gap-9">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={navTriggerClass}>Product</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid grid-cols-4 gap-3 p-6 md:w-[900px] lg:w-[800px]">
                          <li className="col-span-2 row-span-3">
                            <NavigationMenuLink asChild>
                              <Link href="/product">
                                <GlareCard className="flex select-none flex-col justify-end rounded-md p-6">
                                  <Car
                                    className="h-8 w-8 text-muted-foreground"
                                    strokeWidth={1.5}
                                  />
                                  <div className="mb-2 mt-4 text-lg font-medium text-white">
                                    Canary Core
                                  </div>
                                  <p className="text-sm leading-tight text-muted dark:text-muted-foreground">
                                    Plug-in vehicle telematics &amp; abuse detection system
                                  </p>
                                </GlareCard>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem href="/product#fleets" title="For fleets &amp; rentals">
                              Accountability with evidence, not opinion — every claim ships
                              with the data behind it.
                            </ListItem>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem href="/product#owners" title="For owners">
                              Know the instant something happens to your vehicle, not after
                              the fact.
                            </ListItem>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem href="/security" title="Security">
                              <span className="inline-flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                Hardware root of trust on every device
                              </span>
                            </ListItem>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={navTriggerClass}>Company</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {company.map((company) => (
                            <ListItem
                              key={company.title}
                              title={company.title}
                              href={company.href}
                            >
                              {company.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navTriggerClass}
                        >
                          Contact us
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
        </div>
            <div className="lg:hidden flex justify-end space-x-2">
              <Sheet>
                <SheetTrigger
                  asChild
                  className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
                >
                  <Menu className="h-4 w-4" />
                </SheetTrigger>
                <SheetContent>
                  <Link href="/" className="inline-flex items-center gap-2">
                    <Canary className="h-7 w-auto fill-primary" />
                    <span
                      className="text-3xl text-primary"
                      style={{ fontFamily: "var(--font-wordmark)", fontWeight: "var(--font-wordmark-weight)" }}
                    >
                      canary
                    </span>
                  </Link>
                  <div className="py-2">
                    <h1 className="font-display font-bold text-xl">Product</h1>
                    <ul className="px-2 py-2">
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="/product">
                            Canary Core
                          </Link>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="/security">
                            Security
                          </Link>
                        </SheetClose>
                      </li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <h1 className="font-display font-bold text-xl">Company</h1>
                    <ul className="px-2 py-2">
                      {company.map((company) => (
                        <li key={company.title}>
                          <SheetClose asChild>
                            <Link prefetch href={company.href}>
                              {company.title}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="/contact">
                            Contact us
                          </Link>
                        </SheetClose>
                      </li>
                    </ul>
                  </div>
                  <div className="flex space-x-2 pt-1">
                    <WaitlistModalButton />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:flex justify-end items-center gap-6">
              <WaitlistModalButton />
            </div>
      </nav>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          prefetch={true}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href} // Ensure href is required
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default NavigationFrame;
