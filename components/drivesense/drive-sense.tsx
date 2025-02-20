"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Car, Gauge, Activity, RotateCw } from "lucide-react"

type CardType = {
  icon: typeof Car
  title: string
  description: string
  mainContent?: React.ReactNode
}

export default function DriveSense() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  const cards: CardType[] = [
    {
      icon: Gauge,
      title: "Speed Monitoring",
      description: "Real-time tracking of vehicle speed and acceleration patterns.",
      mainContent: (
        <div className="flex items-center justify-between w-full h-full p-4">
          <div className="relative w-1/2 h-full bg-mocha-500 rounded-lg overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-cream-400/10 rounded-t-lg"></div>
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-cream-400/80 rounded-lg transition-all duration-500 ease-in-out"
              style={{
                animation: "carMove 5s infinite",
              }}
            >
              <div className="absolute top-1 left-1 right-1 h-2 bg-mocha-500 rounded"></div>
            </div>
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-cream-400/30"></div>
            <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-cream-400/30"></div>
          </div>
          <div className="w-1/2 h-full ml-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-cream-400 mb-2">Event Log</h3>
            <div className="space-y-2 overflow-y-auto h-[calc(100%-2rem)]" id="eventLog">
              {/* Event log items will be dynamically added here */}
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: RotateCw,
      title: "Traction Control",
      description: "Detection of wheel spin and loss of traction events.",
      mainContent: (
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center">
            <RotateCw className="h-24 w-24 text-cream-400/20 animate-spin-slow" />
            <div className="mt-4 text-cream-400/50 text-lg">Traction Monitoring Active</div>
          </div>
        </div>
      ),
    },
    {
      icon: Activity,
      title: "Engine Analytics",
      description: "Monitor engine RPM and performance metrics in real-time.",
      mainContent: (
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center">
            <Activity className="h-24 w-24 text-cream-400/20" />
            <div className="mt-4 text-cream-400/50 text-lg">Engine Performance Data</div>
          </div>
        </div>
      ),
    },
    {
      icon: Car,
      title: "Fleet Management",
      description: "Comprehensive overview of your entire vehicle fleet.",
      mainContent: (
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center">
            <Car className="h-24 w-24 text-cream-400/20" />
            <div className="mt-4 text-cream-400/50 text-lg">Fleet Overview</div>
          </div>
        </div>
      ),
    },
  ]

  const nextCard = useCallback(() => {
    setActiveCard((prevCard) => (prevCard + 1) % cards.length)
    setProgress(0)
  }, [cards.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextCard()
          return 0
        }
        return prevProgress + 1
      })
    }, 50) // 5 seconds total duration (50ms * 100)

    return () => clearInterval(timer)
  }, [nextCard])

  useEffect(() => {
    if (activeCard === 0) {
      // Speed Monitoring card
      const events = [
        "High speed detected",
        "Rapid acceleration",
        "Rapid braking",
        "Normal driving",
        "Smooth cornering",
      ]
      const eventLog = document.getElementById("eventLog")

      const addEvent = () => {
        if (eventLog) {
          const event = document.createElement("div")
          event.className = "text-sm text-cream-400/70 bg-mocha-500 p-2 rounded animate-fade-in"
          event.textContent = events[Math.floor(Math.random() * events.length)]
          eventLog.prepend(event)

          if (eventLog.childNodes.length > 5) {
            eventLog.removeChild(eventLog.lastChild as Node)
          }
        }
      }

      const intervalId = setInterval(addEvent, 2000)
      return () => clearInterval(intervalId)
    }
  }, [activeCard])

  return (
    <div className="w-full space-y-4">
      <div className="relative flex flex-col overflow-hidden rounded-3xl border border-mocha-400 bg-bg-lowered p-6 lg:p-12">
        <p className="mb-6 text-sm font-medium text-cream-400/50">With DriveSense, you can...</p>
        <div className="flex flex-col gap-2 tracking-tight whitespace-pre">
          <div className="-mb-2 font-editorial text-4xl leading-tight font-light sm:text-[3.75rem]">
            Focus on your{" "}
            <div
              className="relative inline-flex items-center justify-center will-change-transform"
              style={{ width: "108px" }}
            >
              <div aria-hidden="true" style={{ visibility: "hidden", position: "absolute", whiteSpace: "nowrap" }}>
                <div style={{ display: "inline-block" }}>fleet</div>
              </div>
              <div
                className="flex justify-center whitespace-pre will-change-transform"
                style={{ width: "108px", opacity: 1 }}
              >
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  f
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  l
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  e
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  e
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  t
                </span>
              </div>
            </div>
          </div>
          <div className="font-editorial text-4xl leading-tight font-light sm:text-[3.75rem]">
            Not your{" "}
            <div
              className="relative inline-flex items-center justify-center will-change-transform"
              style={{ width: "174px" }}
            >
              <div aria-hidden="true" style={{ visibility: "hidden", position: "absolute", whiteSpace: "nowrap" }}>
                <div style={{ display: "inline-block" }}>performance</div>
              </div>
              <div
                className="flex justify-center whitespace-pre will-change-transform"
                style={{ width: "174px", opacity: 1 }}
              >
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  p
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  e
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  r
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  f
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  o
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  r
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  m
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  a
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  n
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  c
                </span>
                <span
                  className="will-change-transform"
                  style={{ display: "inline-block", opacity: 1, transform: "none" }}
                >
                  e
                </span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-6 max-w-lg leading-[180%] text-cream-400/50">
          DriveSense keeps you focused on managing your fleet efficiently. Advanced telematics and real-time monitoring
          ensure your vehicles are always performing at their best. For the first time, you can have complete control.
        </h2>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full fill-black stroke-cream-500/20 opacity-50 [mask-image:linear-gradient(to_bottom,_#ffffff70,_transparent)]"
        >
          <defs>
            <pattern id=":gridproducts:" width="48" height="48" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 48V.5H48" fill="none" strokeDasharray="0"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#:gridproducts:)"></rect>
        </svg>
        <Car className="absolute -top-32 -right-16 -z-10 size-[36rem] opacity-5" />
        <div className="z-10 mt-6 flex w-full flex-col justify-end gap-4 lg:absolute lg:right-12 lg:bottom-12 lg:mt-0 lg:w-fit lg:flex-row">
          <button className="select-none border-solid inline-flex items-center transition justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:active:translate-y-0.5 hover:active:scale-[0.98] bg-mocha-400 border border-mocha-300 text-cream-400 shadow-sm hover:bg-mocha-300 hover:active:bg-mocha-300/50 h-14 text-md px-6 rounded-xl gap-2">
            Get a demo
          </button>
          <button className="select-none border border-solid border-transparent inline-flex items-center transition justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:active:translate-y-0.5 hover:active:scale-[0.98] bg-cream-400 text-mocha-500 shadow-sm hover:bg-cream-500/80 hover:active:bg-cream-500/70 h-14 text-md px-6 rounded-xl gap-2">
            <Car className="size-4" />
            Try DriveSense
          </button>
        </div>
        <div className="absolute right-2 bottom-2 hidden h-[9rem] w-[23.4rem] rounded-tl-3xl rounded-tr-3xl rounded-br-2xl rounded-bl-3xl border border-mocha-400 bg-mocha-600 lg:block"></div>
      </div>

      <section className="relative mx-auto mt-4 w-full">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 rounded-3xl border border-mocha-400 bg-bg-lowered p-2">
          <div className="relative flex h-[24rem] w-full overflow-hidden rounded-2xl border border-mocha-400 bg-mocha-600">
            <div className="absolute inset-0" style={{ opacity: 1 }}>
              <div className="relative flex h-full w-full items-center justify-center">
                <div
                  className="absolute border border-mocha-400 shadow-lg backdrop-blur-sm bg-mocha-500/20 rounded-3xl"
                  style={{ zIndex: 30, transform: "none", opacity: 1, inset: 0 }}
                >
                  {cards[activeCard].mainContent}
                </div>
                <div
                  className="absolute border border-mocha-400 shadow-lg backdrop-blur-sm bg-mocha-500/20 rounded-2xl"
                  style={{ zIndex: 29, transform: "none", opacity: 1, inset: "3rem 3rem -3rem" }}
                ></div>
              </div>
            </div>
          </div>
          <div data-product-chooser="true" className="grid grid-cols-2 items-center gap-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index)
                  setProgress(0)
                }}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border transition-colors p-4 text-left ${
                  activeCard === index
                    ? "border-cream-400/50 bg-mocha-500"
                    : "border-mocha-400 bg-mocha-600 hover:bg-mocha-500"
                }`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <h2 className="flex items-center gap-1 font-medium text-cream-400">
                    <card.icon className="h-4 w-4" />
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm text-cream-400/50 lg:text-base flex-1">{card.description}</p>
                </div>
                {activeCard === index && (
                  <div
                    className="absolute top-0 left-0 h-[4px] rounded-full bg-cream-400/50 will-change-transform"
                    style={{
                      transition: "width 50ms linear",
                      width: `${progress}%`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

