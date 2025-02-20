"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Car,
  Shield,
  Gauge,
  MapPin,
  Bell,
  Users,
  Activity,
  Cpu,
  BarChart,
  PenTool,
  ShieldAlert,
  ClipboardCheck,
  Thermometer,
  AlertTriangle,
  Code,
  Server,
  Settings,
  Signal,
  Globe,
  Wifi,
  Router,
  ShieldCheck,
  Fingerprint,
  Box,
  Zap,
  Feather,
  Wrench,
  Lock,
} from "lucide-react";
import DriveSenseLanding from "@/components/drivesense/drive-sense-landing";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      {/* Background Pattern */}

      <div className="relative mx-auto max-w-[1300px] px-4 py-28 mt-16">
        {/* Subtle text */}
        <div className="text-cream/50">With DriveSense, you can...</div>

        {/* Hero Section */}
        <div className="relative mt-4 space-y-6">
          {/* Background Cards */}
          <h1 className=" text-5xl font-bold leading-tight tracking-wide md:text-6xl lg:text-7xl">
            focus on life
            <br />
            not your vehicles
          </h1>
          <p className="max-w-[600px] text-lg text-cream">
            DriveSense keeps you focused on growing your business, not worrying
            about your fleet. Beautiful software built to last, with
            breathtakingly simple vehicle monitoring that just works.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="h-12 rounded-full border-neutral-800 bg-neutral-900 px-6 text-cream hover:bg-neutral-800 hover:text-white"
            >
              Get a demo
            </Button>
            <Button className="h-12 rounded-full bg-[#FF0049]/10 px-6 text-[#FF0049]/60 hover:bg-[#FF0049]/40">
              Try DriveSense
            </Button>
          </div>
        </div>

        <div className="mt-16 relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
          <Image
            src="/gtr.png"
            alt="Coverage Map"
            width={1200}
            height={400}
            className="rounded-3xl object-cover mb-2"
          />
          <div className=" grid gap-6 lg:grid-cols-2">
            <div className="my-4 col-span-2 overflow-hidden rounded-3xl border border-neutral-800 bg-background/50">
              <div className="relative p-6 ">
                <div className="absolute rounded-3xl right-0 top-0 h-full w-[300px] " />
                <div className="font-mono text-lg">
                  <div className="text-cream/50">Live Monitor</div>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <div className="text-xs text-cream/500">
                        Vehicle Health
                      </div>
                      <div className="text-2xl font-medium text-white">96%</div>
                      <div className="flex items-center gap-1 text-xs text-yellow-500">
                        <Bell className="h-5 w-5" />
                        Requires attention
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-cream/500">
                        Driving Events
                      </div>
                      <div className="text-2xl font-medium text-white">
                        2 Warnings
                      </div>
                      <div className="flex items-center gap-1 text-xs text-yellow-500">
                        <Bell className="h-5 w-5" />
                        Requires attention
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-cream/500">Fleet Health</div>
                      <div className="text-2xl font-medium text-white">98%</div>
                      <div className="flex items-center gap-1 text-xs text-green-500">
                        <Gauge className="h-5 w-5" />
                        Optimal performance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DriveSense for Fleets */}

            {/* DriveSense for Teens */}
            <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
              <h2 className="mb-4 text-3xl font-medium">
                real-time abuse detection
              </h2>
              <p className="mb-6 text-cream font-light">
                DriveSense continuously monitors driving behavior, detecting
                critical events that may indicate reckless or unsafe usage. With
                real-time AI analysis, it helps prevent vehicle abuse and
                ensures safer driving conditions.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-amber-400" />
                  <div className="text-sm font-light text-cream">
                    Rapid acceleration and hard braking, indicating aggressive
                    driving behavior
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-400" />
                  <div className="text-sm font-light text-cream">
                    Loss of traction or wheelspin, detecting potential oversteer
                    or hazardous road conditions
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="h-5 w-5 text-amber-400" />
                  <div className="text-sm font-light text-cream">
                    Excessive engine RPM, identifying over-revving and potential
                    mechanical strain
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-amber-400" />
                  <div className="text-sm font-light text-cream">
                    Harsh cornering, detecting rapid directional changes and
                    potential loss of control
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
              <h2 className="mb-4 text-3xl font-medium">
                real-time vehicle telemetry
              </h2>
              <p className="mb-6 font-light text-cream">
                Gain real-time insights into your vehicle’s performance with
                live telemetry monitoring. Track key metrics like speed, engine
                RPM, boost levels, and fuel efficiency to optimize driving and
                vehicle health.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Gauge className="h-5 w-5 text-blue-400" />
                  <div className="text-sm font-light text-cream">
                    Live speed, acceleration, and engine RPM tracking
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 font-light text-blue-400" />
                  <div className="text-sm text-cream">
                    Real-time boost pressure and fuel efficiency monitoring
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Thermometer className="h-5 w-5 font-light text-blue-400" />
                  <div className="text-sm text-cream">
                    Temperature and sensor diagnostics to prevent overheating
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 font-light text-blue-400" />
                  <div className="text-sm text-cream">
                    AI-powered anomaly detection and predictive alerts
                  </div>
                </div>
              </div>
            </div>

            {/* DriveSense for Teens */}
            <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8 col-span-2">
              <h2 className="mb-4 text-3xl font-medium">
                AI-powered vehicle maintenance
              </h2>
              <p className="mb-6 font-light text-cream">
                Intelligent vehicle maintenance system leveraging AI-driven
                diagnostics. Automatically detects issues, analyzes sensor data,
                and provides predictive insights for proactive repairs.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-blue-400" />
                  <div className="text-sm font-light text-cream">
                    AI-driven diagnostics to detect root causes of issues
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart className="h-5 w-5 text-blue-400" />
                  <div className="text-sm font-light text-cream">
                    Real-time analysis of sensor data for anomaly detection
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bell className="h-5 w-5 text-blue-400" />
                  <div className="text-sm font-light text-cream">
                    Automated alerts for critical issues and maintenance needs
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PenTool className="h-5 w-5 text-blue-400" />
                  <div className="text-sm font-light text-cream">
                    Predictive maintenance scheduling to prevent failures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
          <h2 className="mb-6 text-4xl font-bold">connectivity</h2>
          <p className="mb-8 text-lg font-light text-cream">
            DriveSense keeps you connected on the road with real-time vehicle
            insights and monitoring. With built-in cellular connectivity, you
            can access live telemetry, receive instant alerts, and ensure
            seamless tracking—no matter where you are.
          </p>
          <Image
            src="/cellular.jpg"
            alt="Coverage Map"
            width={1200}
            height={400}
            className="rounded-3xl object-cover mb-6"
          />

          <div className="grid gap-6">
            {/* Cellular Connectivity */}
            <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
              <h2 className="mb-4 text-3xl font-medium">
                4G LTE cellular
              </h2>
              <p className="mb-6 font-light text-cream">
                Stay connected with built-in cellular functionality, ensuring secure
                and fast LTE connectivity anywhere.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Signal className="h-5 w-5 text-green-400" />
                  <div className="text-sm font-light text-cream">
                    No physical SIM card, eSIM only for enhanced security and seamless connectivity
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-green-400" />
                  <div className="text-sm font-light text-cream">
                  Nationwide coverage with partner carriers, plus connectivity plans for Mexico and Canada
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-green-400" />
                  <div className="text-sm font-light text-cream">
                    Secure fallback Wi-Fi for continuous operation
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Router className="h-5 w-5 text-green-400" />
                  <div className="text-sm font-light text-cream">
                    Want to use your own carrier? Bring your own eSIM and pay a one-time fee
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Encryption */}
            
          </div>
        </div>

        {/* Product Sections */}
        <div className="mt-24 grid gap-12 ">
          {/* DriveSense for Fleets */}
          <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
            <div className="absolute rounded-3xl right-0 top-0 h-full w-[300px] bg-gradient-to-l from-blue-500/5 to-transparent" />
            <div className="mb-6 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              FOR BUSINESSES
            </div>
            <h2 className="mb-4  text-3xl font-bold">
              enterprise fleet management
            </h2>
            <p className="mb-6 text-cream">
              Complete fleet management solution for businesses operating large
              vehicle fleets. Real-time monitoring, analytics, and automated
              reporting.
            </p>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-cream">
                  Multi-user access control and role management
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-cream">
                  Real-time fleet location tracking and routing
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-cream">
                  Advanced analytics and performance metrics
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gauge className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-cream">
                  Comprehensive maintenance scheduling
                </div>
              </div>
            </div>
            <Button className="group flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* DriveSense for Teens */}
          <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
            <div className="absolute rounded-3xl right-0 top-0 h-full w-[300px] bg-gradient-to-l from-amber-500/5 to-transparent" />
            <div className="mb-6 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
              FOR FAMILIES
            </div>
            <h2 className="mb-4 text-3xl font-bold">teen driver protection</h2>
            <p className="mb-6 text-cream">
              Keep your young drivers safe with real-time monitoring, custom
              alerts, and comprehensive driving behavior analysis.
            </p>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-amber-400" />
                <div className="text-sm text-cream">
                  Real-time speed and location monitoring
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-amber-400" />
                <div className="text-sm text-cream">
                  Instant notifications for unsafe driving
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="h-5 w-5 text-amber-400" />
                <div className="text-sm text-cream">
                  Vehicle health and maintenance alerts
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="h-5 w-5 text-amber-400" />
                <div className="text-sm text-cream">
                  Detailed driving behavior reports
                </div>
              </div>
            </div>
            <Button className="group flex items-center gap-2 rounded-full bg-amber-500/10 text-amber-400 hover:bg-amber-500/20">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative rounded-3xl border border-neutral-800 bg-background/50 p-8">
            <div className="absolute rounded-3xl right-0 top-0 h-full w-[300px] bg-gradient-to-l from-green-500/5 to-transparent" />
            <div className="mb-6 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
              FOR DEVELOPERS
            </div>
            <h2 className="mb-4 text-3xl font-bold">DriveSense API</h2>
            <p className="mb-6 text-cream">
              A powerful API for real-time vehicle telemetry monitoring. Access
              speed, RPM, boost pressure, MPG, and all sensor data to build
              custom applications.
            </p>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Gauge className="h-5 w-5 text-green-400" />
                <div className="text-sm text-cream">
                  Real-time speed, RPM, and engine diagnostics
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-green-400" />
                <div className="text-sm text-cream">
                  Developer-friendly RESTful API with WebSocket support
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Server className="h-5 w-5 text-green-400" />
                <div className="text-sm text-cream">
                  Scalable cloud infrastructure for real-time data processing
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-green-400" />
                <div className="text-sm text-cream">
                  Customizable alerts and automation based on sensor data
                </div>
              </div>
            </div>
            <Button className="group flex items-center gap-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
