"use client";
import React from "react";

import {
  ConvoyLogo,
  GamepadIcon,
  HalvexLogoBWSmall,
} from "@/components/icons";
import { Canary, CanaryFull } from "@/components/ui/icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/pro-regular-svg-icons";

import { faCar } from "@fortawesome/pro-regular-svg-icons";

import { Globe } from "@geist-ui/icons";

import { WaitlistModalButton } from "../ui/waitlistmodal";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import { GlareCard } from "@/components/ui/glare-card";

const company: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/about",
    description: "Learn about our story and our mission.",
  },
  {
    title: "Branding",
    href: "/branding",
    description: "View our branding guidelines.",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    description: "View our Roadmap",
  },
];
const support: { title: string; href: string; description: string }[] = [
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "Have a question? Reach out to us and we'll get back to you as soon as possible.",
  },
];

function NavigationFrame() {
  return (
    <div className="fixed w-full p-6 z-50 ">
      <nav className="nav bg-background/80 backdrop-blur-sm rounded-3xl">
        <div className="nav-section py-[1rem] md:px-0 lg:px-[1rem] px-3">
          <div className="grid grid-cols-2 gap-2 mx-4 md:mx-12 xl:mx-32 2xl:mx-60=">
            <div className="flex gap-x-4">
              <div className="inline-block">
                <Link href="/" className="inline-flex gap-2">
                  <Canary className="w-32 h-10 px-1 pt-2 fill-primary" />
                </Link>
              </div>
              <div className="hidden lg:grid lg:justify-items-start">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid grid-cols-4 gap-3 p-6 md:w-[900px] lg:w-[800px]">
                          <li className="col-span-2 row-span-3">
                            <NavigationMenuLink asChild>
                              <Link href="/drivesense">
                                <GlareCard className="flex select-none flex-col justify-end rounded-md p-6">
                                  <FontAwesomeIcon
                                    icon={faCar}
                                    className="w-8 h-8 text-muted-foreground font-thin"
                                  />
                                  <div className="mb-2 mt-4 text-lg font-medium text-white">
                                    DriveSense
                                  </div>
                                  <p className="text-sm leading-tight text-muted dark:text-muted-foreground">
                                    Plug-In Vehicle Telematics Monitoring &
                                    Abuse Detection System
                                  </p>
                                </GlareCard>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem href="/fleet" title="DriveSense Fleet">
                              Centralized Monitoring & Management for Multiple
                              Vehicles
                            </ListItem>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem
                              href="/teens"
                              title="DriveSense for Teens"
                            >
                              Real-Time Driving Insights and Safety Monitoring
                              for Young Drivers
                            </ListItem>
                          </li>
                          <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                            <ListItem
                              href="/businesses"
                              title="DriveSense for Businesses"
                            >
                              Advanced Vehicle Monitoring and Management for
                              Fleet Operations
                            </ListItem>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>COMPANY</NavigationMenuTrigger>
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
                          className={navigationMenuTriggerStyle()}
                        >
                          CONTACT US
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="lg:hidden flex justify-end space-x-2 pt-1">
              <Sheet>
                <SheetTrigger
                  asChild
                  className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
                >
                  <FontAwesomeIcon icon={faBars} className="py-3" />
                </SheetTrigger>
                <SheetContent>
                  <Link href="/">
                    <CanaryFull className="h-16 w-48 fill-primary" />
                  </Link>
                  <div className="py-2">
                    <h1 className="font-display font-bold text-xl">Products</h1>
                    <ul className="px-2 py-2">
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="drivesense">
                            DriveSense
                          </Link>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="#e">
                            DriveSense Fleet
                          </Link>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="#">
                            DriveSense for Teens
                          </Link>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <Link prefetch href="#">
                            DriveSense for Businesses
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
                    </ul>
                  </div>
                  <div className="py-2">
                    <h1 className="font-display font-bold text-xl">Support</h1>
                    <ul className="px-2 py-2">
                      {support.map((companyItems) => (
                        <li key={companyItems.title}>
                          <SheetClose asChild>
                            <Link prefetch href={companyItems.href}>
                              {companyItems.title}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2 pt-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="font-bold hidden">
                          Sign In
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Sign In</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <Link href="#">
                            <DropdownMenuItem>
                              <HalvexLogoBWSmall className="mr-2 h-4 w-4 fill-primary" />
                              <span>Halvex Dashboard</span>
                            </DropdownMenuItem>
                          </Link>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <Link href="#">
                          <DropdownMenuItem>
                            <ConvoyLogo className="mr-2 h-4 w-4 fill-primary" />
                            <span>Halvex Console</span>
                          </DropdownMenuItem>
                        </Link>
                        <Link href="#">
                          <DropdownMenuItem>
                            <GamepadIcon className="mr-2 h-4 w-4 fill-primary" />
                            <span>Game Dashboard</span>
                          </DropdownMenuItem>
                        </Link>
                        <Link href="#">
                          <DropdownMenuItem>
                            <Globe className="mr-2 h-4 w-4" />
                            <span>Web Dashboard</span>
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <WaitlistModalButton/>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:flex justify-end space-x-2 pt-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="font-bold hidden">
                    Sign In
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sign In</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="https://billing.halvex.net/">
                      <DropdownMenuItem>
                        <HalvexLogoBWSmall className="mr-2 h-4 w-4 fill-primary" />
                        <span>Halvex Dashboard</span>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <Link href="https://console.halvex.net/">
                    <DropdownMenuItem>
                      <ConvoyLogo className="mr-2 h-4 w-4 fill-primary" />
                      <span>Halvex Console</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="https://panel.halvex.net/">
                    <DropdownMenuItem>
                      <GamepadIcon className="mr-2 h-4 w-4 fill-primary" />
                      <span>Game Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="https://cpanel.halvex.net/">
                    <DropdownMenuItem>
                      <Globe className="mr-2 h-4 w-4" />
                      <span>Web Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <WaitlistModalButton />
            </div>
          </div>
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
