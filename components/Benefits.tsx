"use client";
import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";
import {
  ActivityIcon,
  BoltIcon,
  BoneIcon,
  BrainIcon,
  CandyIcon,
  CrossIcon,
  EyeIcon,
  HeartHandshakeIcon,
  HeartIcon,
  OmegaIcon,
  PanelTopCloseIcon,
  PillBottleIcon,
  SaladIcon,
  ShieldAlertIcon,
  ShieldBan,
  ShieldBanIcon,
  ShieldPlusIcon,
  SmileIcon,
  WeightIcon,
  ZapIcon,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface Item {
  name: string;
  icon: JSX.Element;
  color: string;
}

const Notification = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bgBenefit [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-base sm:text-lg font-semibold text-[#d7d9c0] whitespace-normal break-words">
              {name}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function Benefits({ className }: { className?: string }) {

  const { language } = useLanguage();


  let notifications = [ 
    {
      name: `${language === "es" ? `Aumenta el colesterol bueno` : language === "en" ? `Increases good cholesterol` : `Erhöht das gute Cholesterin` }`,
      icon: <ShieldPlusIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Evita enfermedades degenerativas` : language === "en" ? `Prevents degenerative diseases` : `Verhindert degenerative Erkrankungen` }`,
      icon: <ShieldAlertIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Aumenta la capacidad cerebral` : language === "en" ? `Boosts brain capacity` : `Steigert die Gehirnleistung` }`,
      icon: <BrainIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Mejora el estado de ánimo` : language === "en" ? `Improves mood` : `Verbessert die Stimmung` }`,
      icon: <SmileIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Es fuente de ácidos grasos saludables` : language === "en" ? `Is a source of healthy fatty acids` : `Ist eine Quelle gesunder Fettsäuren` }`,
      icon: <SaladIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Tiene alto contenido de antioxidantes` : language === "en" ? `Contains high levels of antioxidants` : `Hat einen hohen Gehalt an Antioxidantien` }`,
      icon: <BoltIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Ayuda a controlar el azúcar en sangre` : language === "en" ? `Helps control blood sugar` : `Hilft, den Blutzucker zu kontrollieren` }`,
      icon: <CandyIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Previene de anemia` : language === "en" ? `Prevents anemia` : `Beugt Anämie vor` }`,
      icon: <HeartHandshakeIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Fortalece huesos y dientes` : language === "en" ? `Strengthens bones and teeth` : `Stärkt Knochen und Zähne` }`,
      icon: <BoneIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Previene la degradación ocular` : language === "en" ? `Prevents eye degradation` : `Verhindert Augendegeneration` }`,
      icon: <EyeIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `${language === "es" ? `Previene la hiper tensión y trombosis` : language === "en" ? `Prevents hypertension and thrombosis` : `Verhindert Bluthochdruck und Thrombose` }`,
      icon: <ZapIcon width={25} height={25} color="#3c3f1d" />,
      color: "",
    },
  ];

notifications = Array.from({ length: 10 }, () => notifications).flat();
  return (
    <div
      className={cn(
        "relative flex max-h-[650px] mx-auto w-full flex-col pt-6 overflow-hidden rounded-xl border-b border-[#6f7640] lg:hidden",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification
            name={item.name}
            color={item.color}
            icon={item.icon as JSX.Element}
            key={idx}
          />
        ))}
      </AnimatedList>
    </div>
  );
}
