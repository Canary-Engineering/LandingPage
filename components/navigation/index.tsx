"use client";
import React from 'react'

import { GamepadIcon, HamburgerIcon, CloudIcon, HalvexLogoBWSmall, HalvexLogoBW, ConvoyLogo, ServerIcon } from '@/components/icons';
import { Canary, CanaryFull } from '@/components/ui/icons';

import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Button } from '@/components/ui/button';

import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/pro-regular-svg-icons';

import { Globe } from '@geist-ui/icons';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GlareCard } from '@/components/ui/glare-card';

const helpandsupport: { title: string; href: string; description: string }[] = [
    {
        title: "Network Status",
        href: "https://status.halvex.net/",
        description:
        "View Network Status and check live issues.",
    },
    {
        title: "Documentation",
        href: "https://docs.halvex.net/",
            description:
            "Need help? Visit our documentation page for various tutorials.",
    },
    {
      title: "Our Team",
      href: "/team",
      description:
        "Meet the team behind Halvex and learn more about us.",
    },
      {
          title: "Careers",
          href: "/careers",
          description:
            "Join our team and help us build the future of the internet.",
        },
  ]
const resources: { title: string; href: string; description: string }[] = [
    {
        title: "Contact Us",
        href: "/contact",
        description:
            "Have a question? Reach out to us and we'll get back to you as soon as possible.",
    },
    {
        title: "Open a Ticket",
        href: "https://billing.halvex.net/submitticket.php",
        description:
          "Need help? Open a ticket and our team will assist you.",
    }
  ]



function NavigationFrame() {

    return  (
        <div className='fixed w-full p-6'>
            <nav className='nav bg-background rounded-3xl'>
                <div className='nav-section py-[1rem] md:px-0 lg:px-[1rem] px-3'>
                    <div className="grid grid-cols-2 gap-2 mx-4 md:mx-12 xl:mx-32 2xl:mx-60=">
                        <div className="flex gap-x-4">
                        <div className="inline-block">
                            <Link href='/' className="inline-flex gap-2">
                                <Canary className='w-32 h-10 px-1 pt-2 fill-primary'/>
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
                                                    
                                                    <Link href="/servers/cloud-vps">
                                                        <GlareCard
                                                        className="flex select-none flex-col justify-end rounded-md p-6"
                                                        >
                                                        <CloudIcon className="w-8 h-8 text-muted-foreground font-thin" />
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            DriveSense
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted dark:text-muted-foreground">
                                                        Plug-In Vehicle Telematics Monitoring & Abuse Detection System








                                                        </p>
                                                        </GlareCard>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                                                <ListItem href="/servers/web" title="DriveSense Fleet">
                                                Centralized Monitoring & Management for Multiple Vehicles
                                                </ListItem>
                                            </li>
                                            <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                                                <ListItem href="/servers/dedicated" title="DriveSense for Teens">
                                                Real-Time Driving Insights and Safety Monitoring for Young Drivers
                                                </ListItem>
                                            </li>
                                            <li className="col-span-2 row-span-1 inline-flex gap-x-1">
                                                <ListItem href="#" title="DriveSense for Businesses">
                                                Advanced Vehicle Monitoring and Management for Fleet Operations
                                                </ListItem>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                    <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {helpandsupport.map((helpandsupport) => (
                                            <ListItem
                                            key={helpandsupport.title}
                                            title={helpandsupport.title}
                                            href={helpandsupport.href}
                                            >
                                            {helpandsupport.description}
                                            </ListItem>
                                        ))}
                                        </ul>
                                    </NavigationMenuContent>
                                    
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                    <NavigationMenuTrigger>COMPANY</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {resources.map((resources) => (
                                            <ListItem
                                            key={resources.title}
                                            title={resources.title}
                                            href={resources.href}
                                            >
                                            {resources.description}
                                            </ListItem>
                                        ))}
                                        </ul>
                                    </NavigationMenuContent>
                                    
                                    </NavigationMenuItem>
                                    {/* <NavigationMenuItem>
                                    <Link href="/Docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                    </NavigationMenuItem> */}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        </div>
                        <div className="lg:hidden flex justify-end space-x-2 pt-1">
                            <Sheet>
                                <SheetTrigger asChild className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2">
                                    <FontAwesomeIcon icon={faBars} className="py-3"/>
                                </SheetTrigger>
                                <SheetContent>
                                    <Link href="/">
                                        <HalvexLogoBW className="h-16 w-32 fill-primary"/>
                                    </Link>
                                    <div className="py-2">
                                       <h1 className="font-display font-bold text-xl">
                                            Servers
                                       </h1>
                                       <ul className="px-2 py-2">
                                            <li>
                                                <SheetClose asChild>
                                                    <Link prefetch href="/servers/cloud-vps">
                                                        Cloud
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link prefetch href="/servers/game">
                                                        Games
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link prefetch href="/servers/web">
                                                        Web servers
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                            <li>
                                                <SheetClose asChild>
                                                    <Link prefetch href="/servers/dedicated">
                                                        Dedicated servers
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                       </ul>
                                    </div>
                                    <div className="py-2">
                                        <h1 className="font-display font-bold text-xl">
                                            Resources
                                        </h1>
                                        <ul className="px-2 py-2">
                                            {helpandsupport.map((resources) => (
                                                <li key={resources.title}>
                                                    <SheetClose asChild>
                                                        <Link prefetch href={resources.href}>
                                                            {resources.title}
                                                        </Link>
                                                    </SheetClose>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="py-2">
                                        <h1 className="font-display font-bold text-xl">
                                            Help &amp; Support
                                        </h1>
                                        <ul className="px-2 py-2">
                                            {resources.map((helpandsupportItems) => (
                                                <li key={helpandsupportItems.title}>
                                                    <SheetClose asChild>
                                                        <Link prefetch href={helpandsupportItems.href}>
                                                            {helpandsupportItems.title}
                                                        </Link>
                                                    </SheetClose>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex space-x-2 pt-1'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="font-bold">Sign In</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Sign In</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                <Link href='https://billing.halvex.net/' >
                                <DropdownMenuItem>
                                    <HalvexLogoBWSmall className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Halvex Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <Link href='https://console.halvex.net/' >
                                <DropdownMenuItem> 
                                    <ConvoyLogo className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Halvex Console</span>
                                </DropdownMenuItem>
                                </Link>
                                <Link href='https://panel.halvex.net/' >
                                <DropdownMenuItem>
                                    <GamepadIcon className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Game Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                <Link href='https://cpanel.halvex.net/' >
                                <DropdownMenuItem >
                                    <Globe className="mr-2 h-4 w-4"/>
                                    <span>Web Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem disabled>
                                    <ServerIcon className="mr-2 h-4 w-4 fill-primary" />
                                    <span>Halvex Metal</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                            <Link href='https://billing.halvex.net/register.php'>
                                <Button className="font-bold">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>

                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className='hidden lg:flex justify-end space-x-2 pt-1'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="font-bold">Sign In</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Sign In</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                <Link href='https://billing.halvex.net/' >
                                <DropdownMenuItem>
                                    <HalvexLogoBWSmall className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Halvex Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <Link href='https://console.halvex.net/' >
                                <DropdownMenuItem> 
                                    <ConvoyLogo className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Halvex Console</span>
                                </DropdownMenuItem>
                                </Link>
                                <Link href='https://panel.halvex.net/' >
                                <DropdownMenuItem>
                                    <GamepadIcon className="mr-2 h-4 w-4 fill-primary"/>
                                    <span>Game Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                <Link href='https://cpanel.halvex.net/' >
                                <DropdownMenuItem >
                                    <Globe className="mr-2 h-4 w-4"/>
                                    <span>Web Dashboard</span>
                                </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem disabled>
                                    <ServerIcon className="mr-2 h-4 w-4 fill-primary" />
                                    <span>Halvex Metal</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                            <Link href='https://billing.halvex.net/register.php'>
                                <Button className="font-bold">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
                <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
            </nav>
        </div>
    )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
            prefetch={true}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default NavigationFrame
