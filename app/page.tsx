"use client"

import HometText from "@/components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from "next/image";
import { useEffect } from "react";
import logo from '../components/icons/logo.svg'

// app/page.tsx

const description = `Productos de alta calidad y sustentabilidad para alimentar al mundo`

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="p-4 flex flex-col justify-between mx-4 rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pb-24" data-aos="zoom-in">
          <Image src={logo} alt="logo" width={400} height={400} className="lg:w-[600px] "/>
          <p className="font-semibold text-lg text-[#90b14e] lg:text-4xl">Tu alimento de vida</p>
        </div>
        
        <HometText words={description}/>
      </div>
      <div>
      </div>
    </div>
  );
}
