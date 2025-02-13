import Link from "next/link"
import { CanaryFull } from "./ui/icons"

interface LogoCardProps {
  href: string
  bgColor: string
  fillColor: string
}

export function WordmarkCard({ href, bgColor, fillColor }: LogoCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className={`${bgColor} rounded-3xl p-8 flex items-center justify-center transition-transform duration-300 hover:scale-95`}
        style={{ aspectRatio: "16/9" }}
      >
        <CanaryFull fill={fillColor}/>
      </div>
    </Link>
  )
}

