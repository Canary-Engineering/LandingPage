"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { toast } from "sonner"

interface ColorSwatchProps {
  name: string
  hex: string
  rgb: string
  className: string
}

function ColorSwatch({ name, hex, rgb, className }: ColorSwatchProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex)
    toast.success(`Copied ${hex} to clipboard`)
  }

  return (
    <div
      className={`aspect-square rounded-2xl p-8 flex flex-col justify-end cursor-pointer transition-transform hover:scale-95 ${className}`}
      onClick={copyToClipboard}
    >
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <p className="text-sm opacity-80 font-mono">RGB {rgb}</p>
      <p className="text-sm opacity-80 font-mono">{hex}</p>
    </div>
  )
}

function DownloadCard() {
  const handleRequest = () => {
    toast.success("Copied hello@canary.engineering to clipboard")
    navigator.clipboard.writeText("hello@canary.engineering")
  }

  return (
    <div className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)] h-full flex flex-col">
      <h2 className="text-foreground text-2xl font-medium mb-4">brand assets</h2>
      <p className="text-foreground/61 leading-relaxed mb-8 flex-grow">
        Need logos, icons, or the full guidelines as files? Email us and
        we&apos;ll send over the asset pack.
      </p>
      <Button onClick={handleRequest} className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
        <Download className="w-4 h-4 mr-2" />
        Email hello@canary.engineering
      </Button>
    </div>
  )
}

export function BrandColors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
    <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
      <h2 className="text-foreground text-4xl font-medium mb-4">brand colors</h2>
      <p className="text-foreground/61 leading-relaxed mb-8">
        Our brand colors are Canary Pink, Stealth Grey, and Ghost Black.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <ColorSwatch name="Canary Pink" hex="#ff0049" rgb="255, 0, 73" className="bg-[#ff0049] text-white" />
        <ColorSwatch name="Stealth Grey" hex="#cdcbcb" rgb="205, 203, 203" className="bg-[#cdcbcb] text-[#0c0a09]" />
        <ColorSwatch name="Ghost Black" hex="#0c0a09" rgb="12, 10, 9" className="bg-[#0c0a09] text-white" />
      </div>
    </section>
    </div>
      <div className="md:col-span-1">
        <DownloadCard />
      </div>
    </div>
  )
}

