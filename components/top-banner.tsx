"use client";

import { useState } from "react";

export function TopBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="w-full bg-foreground text-[12px] text-background sm:text-[13px]">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 sm:gap-3 sm:px-6">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground sm:text-[11px]">
          New
        </span>
        <span className="truncate opacity-90">Canary Core is in bench bring-up</span>
        <a
          href="#news"
          className="hidden shrink-0 underline decoration-background/40 underline-offset-4 opacity-90 hover:opacity-100 sm:inline"
        >
          Follow the build →
        </a>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss"
          className="ml-auto shrink-0 opacity-60 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
