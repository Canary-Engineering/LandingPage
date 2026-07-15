import type { Metadata } from "next";
import React from "react";
import { ReactLenis } from "lenis/react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationFrame from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Canary — Vehicle telematics & abuse detection",
  description:
    "Canary Core reads the CAN bus and catches vehicle abuse the instant it happens — built for fleets, rentals and owners who need to know.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-background-alt flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <NavigationFrame />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
