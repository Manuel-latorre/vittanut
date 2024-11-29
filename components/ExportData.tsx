"use client"

import React from 'react'
import Link from 'next/link'
import logo from './icons/logo.svg'
import Image from 'next/image'
import oia from './icons/oia.svg'
import { useLanguage } from '@/app/context/LanguageContext'

const ExportData = () => {
  const { language } = useLanguage();

  return (
    <div className='h-full w-[90%] mx-auto flex flex-col gap-8 justify-center items-center'>
      {
        language === "es" ? 
        <h2 className='titles'>DATOS DE <br className='lg:hidden'/> EXPORTACIÓN</h2>
        :
        language === "en" ? 
        <h2 className='titles'>EXPORT <br className='lg:hidden'/> DATA</h2>
        :
        <h2 className='titles'>EXPORTDATEN</h2>


      }
        <Image src={oia} alt='OIA' width={200} height={200}/>
        <Link href={"https://drive.google.com/file/d/1t5g09qRhpwWulbSIYqvPG-Qei-TOfUB5/view"} target='_blank'>
            <p className='underline leading-3 subtitle'>{language === "es" ? "Certificado por Organización Internacional Agropecuaria (OIA)" : language === "en" ? "Certified by International Agricultural Organization (OIA)" : "Zertifiziert durch die Internationale Agrarorganisation (OIA)"}</p>
        </Link>
        <div className='mt-8'>
            <Image src={logo} alt="logo" width={250} height={250} />
        </div>
    </div>
  )
}

export default ExportData