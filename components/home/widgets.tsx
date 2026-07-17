"use client";

import { memo, useEffect, useRef, useState } from "react";

export function useCountUp(target: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = 0;
    function tick(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

export function LivePulse({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-1.5 w-1.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
    </span>
  );
}

/* Decorative field of raw vehicle data behind the hero — real-shaped CAN frames,
   PIDs and fixes packed edge to edge, in place of warp.co's currency glyphs.

   Two stacked layers share one monospace metric so they line up exactly:
     · base  — the whole field, near-invisible
     · glow  — the same rows with only the "hot" characters kept and the rest
               blanked to spaces, drawn in Canary Pink
   The glow layer carries a soft radial mask that drifts across it in CSS
   (`.canary-can-glow`), so the lit characters change smoothly as it passes.
   Rows are whole strings rather than per-character spans — a 52x260 field would
   otherwise be ~13k DOM nodes per layer. Built in an effect, so the server
   renders nothing and hydration can't mismatch on the random values. */
const CAN_TOKENS = [
  "0C1#3120", "0D0#22FF", "1A2#00FF3C", "2B8#0047", "3F0#01", "7E8#410C1F40",
  "RPM:3184", "SPD:71", "THR:34%", "BRK:00", "GEAR:4", "TEMP:92C",
  "39.0438N", "77.4874W", "-0.82g", "+0.31g", "FD:8M", "STB:0",
  "DTC:P0301", "VIN:4471", "SEQ:0x1F", "LEN:8", "CRC:OK", "09:41:07",
  "IMU:OK", "GNSS:FIX", "TAMPER:0", "V12:13.8", "LAMBDA:0.98", "0x7DF",
];
const FIELD_ROWS = 52;
const FIELD_COLS = 260;

type FieldRow = { base: string; glow: string };

function buildRow(): FieldRow {
  let base = "";
  while (base.length < FIELD_COLS) {
    base += CAN_TOKENS[Math.floor(Math.random() * CAN_TOKENS.length)] + "·";
  }
  base = base.slice(0, FIELD_COLS);

  // Keep a sparse ~8% of characters for the glow layer; everything else becomes
  // a space so the two layers stay character-aligned.
  let glow = "";
  for (const ch of base) glow += ch !== " " && Math.random() > 0.92 ? ch : " ";

  return { base, glow };
}

const FieldLine = memo(function FieldLine({ text }: { text: string }) {
  return <div className="whitespace-pre">{text}</div>;
});

export function CanDataField() {
  const [rows, setRows] = useState<FieldRow[]>([]);

  useEffect(() => {
    setRows(Array.from({ length: FIELD_ROWS }, buildRow));
    // Light churn so the data reads as live; the drifting glow carries the rest
    // of the motion.
    const id = setInterval(() => {
      setRows((prev) => {
        if (!prev.length) return prev;
        const next = prev.slice();
        for (let k = 0; k < 3; k++) next[Math.floor(Math.random() * FIELD_ROWS)] = buildRow();
        return next;
      });
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[11px] leading-[14px]"
    >
      {/* Static mask opens a clearing behind the headline. */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse at 30% 40%, transparent 0%, transparent 30%, black 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, transparent 0%, transparent 30%, black 75%)",
        }}
      >
        <div className="absolute inset-0 text-foreground/[0.09]">
          {rows.map((r, i) => (
            <FieldLine key={i} text={r.base} />
          ))}
        </div>
        <div className="canary-can-glow absolute inset-0">
          {rows.map((r, i) => (
            <FieldLine key={i} text={r.glow} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CHART_POINTS = [18, 32, 24, 44, 30, 52, 38, 60, 46, 68, 52, 72, 58, 78];

export function TelemetryChart() {
  const w = 280;
  const h = 84;
  const step = w / (CHART_POINTS.length - 1);
  const coords = CHART_POINTS.map((p, i) => [i * step, h - (p / 84) * h] as const);
  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(1000);
  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[84px] w-full overflow-visible">
      <defs>
        <linearGradient id="telemetry-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--canary-pink)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--canary-pink)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#telemetry-fill)" />
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="var(--canary-pink)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: length,
          strokeDashoffset: 0,
          animation: "canary-draw-line 1.6s cubic-bezier(0.16,1,0.3,1) both",
          ["--line-length" as string]: length,
        }}
      />
      <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="3" fill="var(--canary-pink)" />
    </svg>
  );
}

export function GaugeRing({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(var(--canary-pink) ${value * 3.6}deg, rgba(12,10,9,0.08) 0deg)`,
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-[10px] font-semibold text-foreground">
          {value}%
        </div>
      </div>
      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
          {label}
        </div>
        <div className="text-[13px] font-medium text-foreground">Nominal</div>
      </div>
    </div>
  );
}

export function MiniMap({ className = "h-[84px]" }: { className?: string }) {
  return (
    <div
      className={`canary-grid-bg relative w-full overflow-hidden rounded-xl border border-border bg-muted/40 ${className}`}
      style={{ backgroundSize: "16px 16px" }}
    >
      <div className="absolute left-[58%] top-[42%] -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
          <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-background bg-primary" />
        </span>
      </div>
      <div className="absolute bottom-1.5 left-2 font-mono text-[9.5px] text-muted-foreground">
        39.0438°N 77.4874°W
      </div>
    </div>
  );
}

export const eventFeed = [
  { color: "bg-primary", label: "HARSH_BRAKE", meta: "-0.82g · 2s ago" },
  { color: "bg-amber-500", label: "OVERSPEED", meta: "84 MPH · 41s ago" },
  { color: "bg-foreground/25", label: "TRIP_START", meta: "09:12:04" },
];
