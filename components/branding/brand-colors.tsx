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
      className={`aspect-square rounded-3xl p-8 flex flex-col justify-end cursor-pointer transition-transform hover:scale-95 ${className}`}
      onClick={copyToClipboard}
    >
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <p className="text-sm opacity-80">RGB {rgb}</p>
      <p className="text-sm opacity-80">{hex}</p>
    </div>
  )
}

function DownloadCard() {
  const handleDownload = () => {
    // Simulated download - replace with actual download logic
    toast.success("Starting download...", {
      description: "Your Canary assets will begin downloading shortly.",
    })
  }


  return (
    <div className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10 h-full flex flex-col">
      <h2 className="text-cream text-2xl mb-4">download assets</h2>
      <p className="text-cream/60 leading-relaxed mb-8 flex-grow">
        Get all Canary brand assets, including logos, icons, and guidelines in a single ZIP file.
      </p>
      <Button onClick={handleDownload} className="w-full bg-[#ff0049] hover:bg-[#ff0049]/90 text-white">
        <Download className="w-4 h-4 mr-2" />
        Download ZIP
      </Button>
    </div>
  )
}

export function BrandColors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
    <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
      <h2 className="text-cream text-4xl mb-4">brand colors</h2>
      <p className="text-cream/60 leading-relaxed mb-8">
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

