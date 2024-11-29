"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "de";

interface LanguageContextType {
  language: Language;
  switchToEnglish: () => void;
  switchToSpanish: () => void;
  switchToGerman: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const switchToEnglish = () => setLanguage("en");
  const switchToSpanish = () => setLanguage("es");
  const switchToGerman = () => setLanguage("de");

  return (
    <LanguageContext.Provider
      value={{ language, switchToEnglish, switchToSpanish, switchToGerman }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
