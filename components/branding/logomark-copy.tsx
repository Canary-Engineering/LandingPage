import Link from "next/link"
import { Canary } from "../ui/icons"

interface LogoCardProps {
  href: string
  bgColor: string
  fillColor: string
}

export function LogomarkCard({ href, bgColor, fillColor }: LogoCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className={`${bgColor} rounded-3xl p-8 flex items-center justify-center transition-transform duration-300 hover:scale-95`}
        style={{ aspectRatio: "1/1" }}
      >
        <Canary fill={fillColor} className="w-full h-48 " />
      </div>
    </Link>
  )
}

