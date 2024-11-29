"use client"

import React from 'react'
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
import { useLanguage } from '@/app/context/LanguageContext';
  
  
  

const BenefitsWeb = () => {
  const { language } = useLanguage();


  let benefits = [ 
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

  return (
    <div className='max-lg:hidden w-full 2xl:w-[90%] mx-auto flex flex-wrap justify-center gap-4 px-2 mt-12'>
        {
            benefits.map((data) => (
                <div key={data.name} className='p4 rounded-xl bgDark max-w-[250px] max-h-[200px] 2xl:h-[200px] flex flex-col justify-center gap-4 items-center text-center p-4 hover:scale-105 transition-all'>
                    {data.icon}
                    <p className='textSoft font-medium text-xl'>{data.name}</p>
                </div>
            ))
        }

    </div>
  )
}

export default BenefitsWeb