"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Wordmark } from "@/components/branding/wordmark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavLink = { title: string; href: string };

const navLinks: NavLink[] = [
  { title: "How it works", href: "#abuse" },
  { title: "Product", href: "/drivesense" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

const contactButtonClass =
  "inline-flex items-center justify-center rounded-lg bg-primary px-4 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/90";

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

export default function NavigationFrame() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
      {/* `relative` + an absolutely-centered menu pins the links to the middle of the
          viewport itself. In a plain flex row the wordmark and the actions have
          different widths, so the menu would sit wherever the leftover space put it. */}
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className="text-[14px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link href="/contact" className={cn(contactButtonClass, "hidden h-9 sm:inline-flex")}>
            Contact
          </Link>

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
                {navLinks.map((l) => (
                  <SheetClose asChild key={l.title}>
                    <Link
                      href={l.href}
                      className="flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] hover:bg-accent"
                    >
                      <span>{l.title}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="flex flex-col gap-2 border-t border-border p-4">
                <SheetClose asChild>
                  <Link href="/contact" className={cn(contactButtonClass, "h-10 w-full")}>
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
