"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LanguageIcon } from "@heroicons/react/20/solid"
import EnglishIcon from "./icons/EnglishIcon"
import GermanIcon from "./icons/GermanIcon"

const languages = [
  {
    value: "en",
    label: "English",
    icon: <EnglishIcon/>
  },
  {
    value: "de",
    label: "Deutsche",
    icon: <GermanIcon/>
  },
]

export default function TranslationButtons() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("en") // Default to English

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bgGeneral rounded-xl border-[#bfc197] hover:bg-[#bfc197] hover:text-[#3c3f1d] text-[#3c3f1d]"
        >
        <div className="flex items-center gap-2">
        <LanguageIcon/>
        {languages.find((lang) => lang.value === value)?.label}
        </div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bgGeneral rounded-xl">
        <Command>
          <CommandList>
            <CommandGroup className="cursor-pointer">
              {languages.map((lang) => (
                  <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                      setValue(currentValue)
                      setOpen(false)
                    }}
                    >
                  {lang.icon}
                  {lang.label}
                  <Check
                    className={cn(
                        "ml-auto",
                        value === lang.value ? "opacity-100" : "opacity-0"
                    )}
                    />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}