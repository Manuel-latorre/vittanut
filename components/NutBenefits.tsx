"use client"

import React from 'react'
import Benefits from './Benefits'
import BenefitsWeb from './BenefitsWeb'
import { useLanguage } from '@/app/context/LanguageContext';


const NutBenefits = () => {

  const { language } = useLanguage();


  return (
    <div className='flex flex-col bgGeneral w-[90%] items-center justify-center mx-auto lg:pt-16'>
      <div className='pt-8'>
        {
          language == "es" ? 
          <h3 className='titles' data-aos="zoom-in">BENEFICIOS DE <br className='lg:hidden'/> LA NUEZ PECÁN</h3>
          :
          language === "en" ? 
          <h3 className='titles' data-aos="zoom-in">BENEFITS OF <br className='lg:hidden'/> PECAN NUTS</h3>
          :
          <h3 className='titles' data-aos="zoom-in">VORTEILE DER <br className='lg:hidden'/> PECANNUSS</h3>
        }
        <Benefits/>
        <BenefitsWeb/>

      </div>
    </div>
  )
}

export default NutBenefits