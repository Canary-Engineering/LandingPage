import { Canary } from "../ui/icons"

interface LogoCardProps {
  bgColor: string
  fillColor: string
}

export function LogomarkCard({ bgColor, fillColor }: LogoCardProps) {
  return (
    <div
      className={`${bgColor} rounded-3xl p-8 flex items-center justify-center border border-foreground/10`}
      style={{ aspectRatio: "1/1" }}
    >
      <Canary fill={fillColor} className="w-full h-48 " />
    </div>
  )
}

