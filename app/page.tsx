"use client";

import HometText from "@/components/Home";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from "next/image";
import { useEffect } from "react";
import logo from "../components/icons/logo.svg";
import { useLanguage } from "./context/LanguageContext";

const translations: Record<"en" | "es" | "de", { description: string; tagline: string }> = {
  en: {
    description: "High-quality and sustainable products to feed the world.",
    tagline: "Your food for life",
  },
  es: {
    description: "Productos de alta calidad y sustentabilidad para alimentar al mundo",
    tagline: "Tu alimento de vida",
  },
  de: {
    description: "Hochwertige und nachhaltige Produkte, um die Welt zu ernähren",
    tagline: "Deine Nahrung fürs Leben",
  },
};

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { language } = useLanguage();

  // Obtener traducciones basadas en el idioma seleccionado
  const { description, tagline } = translations[language];

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="p-4 flex flex-col justify-between mx-4 rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pb-24" data-aos="zoom-in">
          <Image src={logo} alt="logo" width={400} height={400} className="lg:w-[600px]" />
          <p className="font-semibold text-lg text-[#90b14e] lg:text-4xl">{tagline}</p>
        </div>

        <HometText words={description} />
      </div>
    </div>
  );
}
