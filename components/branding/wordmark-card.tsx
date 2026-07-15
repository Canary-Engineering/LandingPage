import { CanaryFull } from "../ui/icons"

interface LogoCardProps {
  bgColor: string
  fillColor: string
}

export function WordmarkCard({ bgColor, fillColor }: LogoCardProps) {
  return (
    <div
      className={`${bgColor} rounded-3xl p-8 flex items-center justify-center border border-foreground/10`}
      style={{ aspectRatio: "16/9" }}
    >
      <CanaryFull fill={fillColor} />
    </div>
  )
}

