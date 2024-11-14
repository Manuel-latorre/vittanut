"use client"

import HometText from "@/components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

// app/page.tsx

const title = `ALIMENTOS SANOS PARA UNA VIDA ACTIVA`
const description = `Nuestro compromiso asegura un producto de alta calidad y sustentabilidad para alimentar de la mejor manera posible a la población mundial`

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="p-4 flex flex-col gap-4 mx-4 rounded-2xl">
        <p className="text-5xl font-bold mb-4 text-[#7a8130] leading-[1.1]" data-aos="fade-right">
          ALIMENTOS SANOS <br />
          PARA UNA VIDA ACTIVA
        </p>
        
        <HometText words={description}/>
      </div>
      <div>
      </div>
    </div>
  );
}
