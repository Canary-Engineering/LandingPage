import { Card } from "@/components/ui/card"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioToggle() {
  return (
    <Card className="p-2 max-w-md mx-auto rounded-full">
      <TooltipProvider delayDuration={0}>
        <RadioGroup defaultValue="system" aria-label="Appearance" className="flex items-center justify-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="light" className="flex flex-col items-center gap-2 cursor-pointer">
                <RadioGroupItem id="light" value="light" className="peer sr-only" />
                <div className="p-2 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <SunIcon className="w-6 h-6" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>Light Mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="dark" className="flex flex-col items-center gap-2 cursor-pointer">
                <RadioGroupItem id="dark" value="dark" className="peer sr-only" />
                <div className="p-2 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <MoonIcon className="w-6 h-6" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>Dark Mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="system" className="flex flex-col items-center gap-2 cursor-pointer">
                <RadioGroupItem id="system" value="system" className="peer sr-only" />
                <div className="p-2 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <MonitorIcon className="w-6 h-6" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>System</TooltipContent>
          </Tooltip>
        </RadioGroup>
      </TooltipProvider>
    </Card>
  )
}

function MonitorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
