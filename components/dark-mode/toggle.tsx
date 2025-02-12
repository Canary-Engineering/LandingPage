"use client"
import { Card } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";


import * as React from "react"
import { Moon, Sun, Cpu } from "@geist-ui/icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="h-4 w-4 mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="h-4 w-4 mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
            <Cpu className="h-4 w-4 mr-2" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function RadioToggle() {
    const { setTheme } = useTheme();

    return (
        <Card className="p-1 max-w-sm mx-auto rounded-full -pb-[60%]">
      <TooltipProvider delayDuration={0}>
        <RadioGroup defaultValue={"system"} aria-label="Appearance" className="flex items-center justify-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="light" className="flex flex-col items-center gap-1 cursor-pointer">
              <RadioGroupItem id="light" value="light" className="peer sr-only" />
                <div onClick={() => setTheme("light")} className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <Sun className="w-4 h-4" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>Light Mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="dark" className="flex flex-col items-center gap-1 cursor-pointer">
                <RadioGroupItem id="dark" value="dark" className="peer sr-only" />
                <div onClick={() => setTheme("dark")} className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <Moon className="w-4 h-4" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>Dark Mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="system" className="flex flex-col items-center gap-1 cursor-pointer">
                <RadioGroupItem id="system" value="system" className="peer sr-only" />
                <div onClick={() => setTheme("system")} className="p-1 rounded-full bg-card text-card-foreground transition-colors peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground">
                  <Cpu className="w-4 h-4" />
                </div>
              </Label>
            </TooltipTrigger>
            <TooltipContent>System</TooltipContent>
          </Tooltip>
        </RadioGroup>
      </TooltipProvider>
      </Card>
    );
}
