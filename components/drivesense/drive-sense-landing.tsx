"use client"

import { useState, useEffect } from "react"
import { Car, Gauge, RotateCw, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const words = ["vehicle", "fleet", "driver"]

export default function DriveSenseLanding() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-4">
      <Card className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900 p-6 lg:p-12">
        <p className="mb-6 text-sm font-medium text-zinc-400/50">With DriveSense, you can...</p>
        <div className="flex flex-col gap-2 tracking-tight whitespace-pre">
          <div className="-mb-2 font-serif text-4xl leading-tight font-light sm:text-[3.75rem]">
            Focus on your{" "}
            <div
              className="relative inline-flex items-center justify-center will-change-transform"
              style={{ width: "180px" }}
            >
              <div
                className="flex justify-center whitespace-pre will-change-transform"
                style={{ width: "180px", opacity: 1 }}
              >
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  {words[wordIndex]}
                </span>
              </div>
            </div>
          </div>
          <div className="font-serif text-4xl leading-tight font-light sm:text-[3.75rem]">
            Not your <span className="text-red-500">performance</span>
          </div>
        </div>
        <h2 className="mt-6 max-w-lg leading-[180%] text-zinc-400/50">
          DriveSense keeps you focused on managing your fleet efficiently. Advanced telematics and real-time monitoring
          ensure your vehicles are always performing at their best. For the first time, you can have complete control.
        </h2>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full fill-white stroke-zinc-500/20 opacity-5"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 48V.5H48" fill="none" strokeDasharray="0"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)"></rect>
        </svg>
        <Car className="absolute -top-32 -right-16 z-0 size-[36rem] text-zinc-800/20" />
        <div className="z-10 mt-6 flex w-full flex-col justify-end gap-4 lg:absolute lg:right-12 lg:bottom-12 lg:mt-0 lg:w-fit lg:flex-row">
          <Button variant="outline" size="lg" className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700">
            Get a demo
          </Button>
          <Button size="lg" className="bg-red-500 text-white hover:bg-red-600">
            <Activity className="mr-2 h-4 w-4" /> Try DriveSense
          </Button>
        </div>
      </Card>

      <div className="relative mx-auto w-full">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 rounded-3xl border border-zinc-700 bg-zinc-900 p-2">
          <div className="relative flex h-[24rem] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
            {/* Placeholder for the map or vehicle visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Car className="h-32 w-32 text-zinc-600" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 lg:grid-cols-4 w-full">
            {[
              {
                icon: Gauge,
                title: "Speed Monitoring",
                description: "Real-time tracking of vehicle speed and acceleration patterns",
              },
              {
                icon: RotateCw,
                title: "Traction Control",
                description: "Detection of wheel spin and loss of traction events",
              },
              { icon: Activity, title: "Engine Analytics", description: "Monitor engine RPM and performance metrics" },
              {
                icon: Car,
                title: "Fleet Management",
                description: "Comprehensive overview of your entire vehicle fleet",
              },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex flex-col items-start gap-2 p-4 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                <item.icon className="h-6 w-6" />
                <h3 className="text-left font-medium">{item.title}</h3>
                <p className="text-left text-sm text-zinc-400">{item.description}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

