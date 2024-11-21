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

interface Item {
  name: string;
  icon: JSX.Element;
  color: string;
}



let notifications = [
  {
    name: `Aumenta el colesterol bueno`,
    icon: <ShieldPlusIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Evita la aparición de enfermedades degenerativas`,
    icon: <ShieldAlertIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Aumenta la capacidad cerebral`,
    icon: <BrainIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Mejora el estado de ánimo`,
    icon: <SmileIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Es fuente de ácidos grasos saludables`,
    icon: <SaladIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Tiene alto contenido de antioxidantes`,
    //icon: <HeartIcon width={25} height={25} color="#3c3f1d"/>,
    icon: <BoltIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Ayuda a controlar el azúcar en sangre`,
    icon: <CandyIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Previene de anemia`,
    icon: <HeartHandshakeIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Fortalece huesos y dientes`,
    icon: <BoneIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Previene la degradación ocular`,
    icon: <EyeIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
  {
    name: `Previene la hiper tensión y trombosis`,
    icon: <ZapIcon width={25} height={25} color="#3c3f1d" />,
    color: "",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

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
