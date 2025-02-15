import Link from "next/link";
import { Flame, Instagram, Linkedin, Twitter, Sun, Globe } from "lucide-react";
import { Discord, CanaryFull } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ModeToggle, RadioToggle } from "@/components/dark-mode/toggle";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full rounded-t-3xl bg-background p-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr_auto]">
          {/* Logo Section */}
          <div className="space-y-4 justify-items-start">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <CanaryFull className="h-12 w-auto" fill="#FF0049" />
              </div>
            </Link>
            <div className="space-y-1 text-base font-bold">
              <p>COPYRIGHT © 2025 HALVEX INC.</p>
              <p>ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex ">
              <RadioToggle />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-between gap-8">
            <div className="min-w-[150px]">
              <h3 className="font-bold text-[#FF0049] mb-4 text-lg">CANARY</h3>
              <ul className="space-y-2 text-sm space-y-4">
                <li>
                  <Link
                    href="/drivesense"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    DriveSense
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    DriveSense Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-[150px]">
              <h3 className="font-bold text-[#FF0049] mb-4 text-lg">
                SERVICES
              </h3>
              <ul className="space-y-2 text-sm space-y-4">
                <li>
                  <Link
                    href="/drivesense-teens"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    DriveSense for Teens
                  </Link>
                </li>
                <li>
                  <Link
                    href="drivesense-business"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    DriveSense for Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/drivesense-api"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    DriveSense API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-[150px]">
              <h3 className="font-bold text-[#FF0049] mb-4 text-lg">COMPANY</h3>
              <ul className="space-y-2 text-sm space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roadmap"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/branding"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Branding
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-[150px]">
              <h3 className="font-bold text-[#FF0049] mb-4 text-lg">LEGAL</h3>
              <ul className="space-y-2 text-sm space-y-4">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#FF0049] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 text-right justify-items-end">
            <div className="text-xl font-bold">
              <p>ENGINEERED BY CANARY IN ASHBURN</p>
              <p>EST. 2025</p>
            </div>
            <div className="flex justify-end gap-4">
              <Link href="#" className="hover:text-[#FF0049] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#FF0049] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Discord className="h-5 w-5" />
              </Link> */}
            </div>
            {/* <div className="flex justify-end gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Sun className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Globe className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
