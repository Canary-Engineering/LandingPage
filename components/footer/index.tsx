import { RadioToggle } from "@/components/dark-mode/toggle";
import { Canary } from "@/components/ui/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/8 bg-background">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-10 pt-16 md:px-9 lg:px-[72px]">
        <div className="grid grid-cols-1 gap-12 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Logo Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <Canary className="h-6 w-auto fill-primary" />
              <span
                className="text-xl text-primary"
                style={{ fontFamily: "var(--font-wordmark)", fontWeight: "var(--font-wordmark-weight)" }}
              >
                canary
              </span>
            </Link>
            <p className="max-w-[220px] text-sm leading-[1.8] text-foreground/64">
              Vehicle telematics and abuse detection, engineered for fleets and
              owners who need to know.
            </p>
            <div className="pt-2">
              <RadioToggle />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-[13.2px] font-medium text-foreground">Product</h3>
            <ul className="flex flex-col gap-3 text-[13.2px] text-foreground/45">
              <li>
                <Link href="/product" className="hover:text-primary transition-colors">
                  Canary Core
                </Link>
              </li>
              <li>
                <Link href="/product#fleets" className="hover:text-primary transition-colors">
                  Fleets &amp; Rentals
                </Link>
              </li>
              <li>
                <Link href="/product#owners" className="hover:text-primary transition-colors">
                  Individual Owners
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[13.2px] font-medium text-foreground">Company</h3>
            <ul className="flex flex-col gap-3 text-[13.2px] text-foreground/45">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-primary transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[13.2px] font-medium text-foreground">Legal</h3>
            <ul className="flex flex-col gap-3 text-[13.2px] text-foreground/45">
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-foreground/8 pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-xs text-foreground/40">
            © 2026 Canary Engineering. All rights reserved.
          </span>
          <span className="text-xs text-foreground/40">
            Engineered by Canary in Ashburn, est. 2025
          </span>
        </div>
      </div>

      {/* Huge wordmark, oversized so it overflows the viewport and cropped —
          warp.co-style brand signature at the very bottom of the footer.
          Filled with a horizontal line-hatch that fades out toward the base
          of the letters instead of a solid color fill. */}
      <div className="relative h-56 overflow-hidden sm:h-80 md:h-96 lg:h-[32rem]">
        <Link
          href="/"
          aria-label="Canary"
          tabIndex={-1}
          className="absolute inset-x-0 top-0 block select-none whitespace-nowrap text-center leading-none transition-opacity hover:opacity-80"
          style={{
            fontFamily: "var(--font-wordmark)",
            fontWeight: "var(--font-wordmark-weight)",
            fontSize: "clamp(7rem, 36vw, 32rem)",
            letterSpacing: "-0.02em",
            transform: "translateX(-0.01em)",
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--canary-pink) 0px, var(--canary-pink) 2px, transparent 2px, transparent 6px)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 94%)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 94%)",
          }}
        >
          canary
        </Link>
      </div>
    </footer>
  );
}
