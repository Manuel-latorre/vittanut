"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LanguageIcon } from "@heroicons/react/20/solid";
import EnglishIcon from "./icons/EnglishIcon";
import GermanIcon from "./icons/GermanIcon";
import EspanaIcon from "./icons/EspanaIcon";
import { useLanguage } from "@/app/context/LanguageContext";

const languages = [
  {
    value: "en",
    label: "English",
    icon: <EnglishIcon />,
    switch: "switchToEnglish", // Key for switching
  },
  {
    value: "de",
    label: "Deutsche",
    icon: <GermanIcon />,
    switch: "switchToGerman", // Key for switching
  },
  {
    value: "es",
    label: "Español",
    icon: <EspanaIcon />,
    switch: "switchToSpanish", // Key for switching
  },
];

export default function TranslationButtons() {
  const [open, setOpen] = React.useState(false);
  const { language, switchToEnglish, switchToSpanish, switchToGerman } = useLanguage();

  // Map switch functions
  const switchFunctions: { [key: string]: () => void } = {
    switchToEnglish,
    switchToSpanish,
    switchToGerman,
  };

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
            <LanguageIcon />
            {languages.find((lang) => lang.value === language)?.label || "Select Language"}
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
                  onSelect={() => {
                    const switchFunction = switchFunctions[lang.switch];
                    if (switchFunction) switchFunction();
                    setOpen(false);
                  }}
                >
                  {lang.icon}
                  {lang.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      language === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
