"use client";

import { useRef, useState } from "react";

type Abuse = {
  tag: string;
  title: string;
  body: string;
  code: string;
  stat: string;
  video: string;
  poster: string;
};

/* One card per abuse category. Clips live in /public/abuse/<name>.mp4, converted from
   source GIFs (ffmpeg, libx264) with a matching /public/abuse/<name>.jpg poster pulled
   from the first frame.

   Held-back categories (add when we have footage): overspeed, impact / curb strike,
   tamper / power-loss, money shift / over-rev, cold-start revving (no warm-up),
   harsh cornering / drift, geofence breach, excessive idling. */
const abuse: Abuse[] = [
  {
    tag: "Donuts / burnouts",
    title: "cars doing donuts",
    body: "Sustained yaw with wheel-spin and no forward progress — the signature of someone treating a parking lot like a skidpad.",
    code: "DONUTS",
    stat: "yaw 47°/s · wheel-spin",
    video: "/abuse/donuts.mp4",
    poster: "/abuse/donuts.jpg",
  },
  {
    tag: "Redline launches",
    title: "launched off the line",
    body: "Full-throttle from a standstill against a redline RPM read straight off the bus. No launch-control excuse survives the data.",
    code: "REDLINE_LAUNCH",
    stat: "6800 RPM from stop",
    video: "/abuse/redline-launch.mp4",
    poster: "/abuse/redline-launch.jpg",
  },
  {
    tag: "Harsh braking / accel",
    title: "standing on the brakes",
    body: "A hard deceleration spike the IMU catches and the CAN-bus speed drop confirms — cross-checked, not guessed.",
    code: "HARSH_BRAKE",
    stat: "-0.82g sustained",
    video: "/abuse/harsh-brake.mp4",
    poster: "/abuse/harsh-brake.jpg",
  },
];

function AbuseVideoCard({ tag, title, body, code, stat, video, poster }: Abuse) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "playing" | "ended">("idle");

  // Only advance to "playing" once playback actually starts. If the source is missing
  // (placeholder cards) or the codec is unsupported, play() rejects and we leave the
  // overlay button in place instead of hiding it over a blank well.
  const start = () => {
    ref.current?.play().then(() => setState("playing")).catch(() => {});
  };
  const play = () => start();
  const replay = () => {
    if (ref.current) ref.current.currentTime = 0;
    start();
  };

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-muted/50">
        <video
          ref={ref}
          muted
          playsInline
          preload="none"
          poster={poster}
          src={video}
          className="h-full w-full object-cover"
          onEnded={() => setState("ended")}
        />

        <div className="pointer-events-none absolute left-3 top-3 rounded bg-card/80 px-2 py-1 font-mono text-[11px] uppercase text-primary backdrop-blur">
          {code}
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-card/80 px-2 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
          {stat}
        </div>

        {state !== "playing" && (
          <button
            type="button"
            onClick={state === "ended" ? replay : play}
            aria-label={state === "ended" ? `Replay ${tag} clip` : `Play ${tag} clip`}
            className="absolute inset-0 grid place-items-center transition-colors hover:bg-foreground/5"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-[18px] text-background shadow-lg">
              {state === "ended" ? "↻" : "▶"}
            </span>
          </button>
        )}
      </div>

      <div className="mb-2 font-mono text-[12px] uppercase tracking-widest text-primary">
        {tag}
      </div>
      <h3 className="mb-2 text-[22px] leading-tight">{title}</h3>
      <p className="text-[14px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function AbuseCards() {
  return (
    <section id="abuse" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-24 text-center">
        <h2 className="mx-auto max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          watch the abuse{" "}
          <span className="font-normal italic text-muted-foreground">as it happens.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] text-muted-foreground">
          Replay each clip to see exactly what the Core flagged on the bus — and the
          signal that gave it away.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 pt-16 md:grid-cols-3">
        {abuse.map((a) => (
          <AbuseVideoCard key={a.code} {...a} />
        ))}
      </div>
    </section>
  );
}
