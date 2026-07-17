import Link from "next/link";

import { CanaryWordmarkText } from "@/components/branding/canary-wordmark-text";
import { Canary } from "@/components/ui/icons";

/* Both halves of the lockup are vector outlines with tight boxes — the mark's
   viewBox is its artwork, and the wordmark's is cropped to the x-height band it
   actually occupies. That means `items-center` centres ink against ink, with no
   font metrics or line-box half-leading in the way. */
export function Wordmark({
  className = "",
  textHeight = 20,
  markScale = 1.3,
}: {
  className?: string;
  /** Visual height of the word, in px (its x-height band). */
  textHeight?: number;
  /** Mark height as a multiple of textHeight — >1 lets the mark stand taller. */
  markScale?: number;
}) {
  return (
    <Link
      href="/"
      aria-label="Canary"
      className={`inline-flex shrink-0 items-center gap-2 ${className}`}
    >
      <Canary
        style={{ height: textHeight * markScale }}
        className="w-auto shrink-0 fill-primary"
      />
      <CanaryWordmarkText
        style={{ height: textHeight }}
        className="w-auto shrink-0 fill-primary"
      />
    </Link>
  );
}
