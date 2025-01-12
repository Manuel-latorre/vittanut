import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";
import logo from "../components/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import TranslationButtons from "./TranslateButtons";
import { useCallback } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function MobileMenu() {
  const handleScroll = useCallback((targetId:any) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const MenuItem = ({ href, children }:any) => (
    <SheetClose asChild>
      <button
        onClick={() => {
          // Pequeño timeout para asegurar que el cierre del menú no interfiera con el scroll
          setTimeout(() => handleScroll(href), 100);
        }}
        className="text-blue-950 font-semibold text-lg text-left w-full"
      >
        {children}
      </button>
    </SheetClose>
  );

  const { language } = useLanguage();


  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button className="text-white">
          <Bars3Icon width={30} height={30} />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-[#D7D9C0] h-full flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle className="mb-5">
              <Image src={logo} alt="logo" width={200} height={200} />
            </SheetTitle>
          </SheetHeader>

          <SheetFooter className="flex flex-col gap-4 mt-4">
            <MenuItem href="#nosotros">
              {language === "es" ? "Nosotros" : language === "de" ? "Über uns" : "About us"}
            </MenuItem>
            <MenuItem href="#beneficios">
              {language === "es" ? "Beneficios" : language === "de" ? "Vorteile" : "Benefits"}
            </MenuItem>
            <MenuItem href="#productos">
              {language === "es" ? "Productos" : language === "de" ? "Produkte" : "Products"}
            </MenuItem>
            <MenuItem href="#trazabilidad">
              {language === "es" ? "Trazabilidad" : language === "de" ? "Rückverfolgbarkeit" : "Traceability"}
            </MenuItem>
          </SheetFooter>
        </div>

        <div className="flex flex-col">
          <TranslationButtons />
        </div>
      </SheetContent>
    </Sheet>
  );
}