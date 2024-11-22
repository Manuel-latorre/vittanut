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
  
  
  let benefits = [
    {
      name: `Aumenta el colesterol bueno`,
      icon: <ShieldPlusIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Evita enfermedades degenerativas`,
      icon: <ShieldAlertIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Aumenta la capacidad cerebral`,
      icon: <BrainIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Mejora el estado de ánimo`,
      icon: <SmileIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Es fuente de ácidos grasos saludables`,
      icon: <SaladIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Tiene alto contenido de antioxidantes`,
      icon: <BoltIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Ayuda a controlar el azúcar en sangre`,
      icon: <CandyIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Previene de anemia`,
      icon: <HeartHandshakeIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Fortalece huesos y dientes`,
      icon: <BoneIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Previene la degradación ocular`,
      icon: <EyeIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
    {
      name: `Previene la hiper tensión y trombosis`,
      icon: <ZapIcon width={50} height={50} color="#3c3f1d" />,
      color: "",
    },
  ];

const BenefitsWeb = () => {
  return (
    <div className='max-lg:hidden w-full 2xl:w-[60%] mx-auto flex flex-wrap justify-center gap-4 px-2 mt-12'>
        {
            benefits.map((data) => (
                <div className='p4 rounded-xl bgDark max-w-[250px] max-h-[200px] 2xl:h-[200px] flex flex-col justify-center gap-4 items-center text-center p-4 hover:scale-105 transition-all'>
                    {data.icon}
                    <p className='textSoft font-medium text-xl'>{data.name}</p>
                </div>
            ))
        }

    </div>
  )
}

export default BenefitsWeb