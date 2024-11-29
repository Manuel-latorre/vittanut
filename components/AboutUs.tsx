"use client"

import Image from 'next/image'
import React from 'react'
import campo from '../public/campo.jpg'
import escarapela from './icons/escarapela.png'
import { LayoutGridImages } from './AboutUsGridImages'
import Link from 'next/link'
import { useLanguage } from '@/app/context/LanguageContext'

const AboutUs = () => {

  const { language } = useLanguage();

  return (
    <div className='w-[90%] mx-auto h-full flex flex-col items-center gap-8 pt-4 lg:pt-16 lg:gap-4' data-aos="zoom-in">
        {
          language === "es" ? (
            <h1 className='titles'>NUEZ PECAN <br className='lg:hidden'/>
              ORGÁNICA AL MUNDO
            </h1>
          )
          :
          language === "en" ? (
            <h1 className='titles'>ORGANIC PECAN <br className='lg:hidden'/>
              NUTS TO THE WORLD
            </h1>
          )
          : (
            <h1 className='titles'>BIO-PECANNÜSSE <br className='lg:hidden'/>
              FÜR DIE WELT
            </h1>
          )
        }
        <p className='subtitle'>{language === "es" ? "Buenaventura es el nombre de nuestro campo y hogar" : language === "en" ? "Buenaventura is the name of our farm and home" : "Buenaventura ist der Name unseres Hofes und Zuhauses"}</p>
        <Image src={campo} alt='campo' height={1000} className='rounded-xl w-full h-[300px] lg:hidden'/>
        <LayoutGridImages/>
        <p className='subtitle'>{language === "es" ?  "Ubicado en la Ruta Provincial 47, Luján, Provincia de Buenos Aires, Argentina." : language === "en" ? "Located on Provincial Route 47, Luján, Buenos Aires Province, Argentina." : "Gelegen an der Provinzroute 47, Luján, Provinz Buenos Aires, Argentinien."}</p>

        <div className='historyContainer'>
            <Link href={language === "es" ? "https://drive.google.com/file/d/1nBoTz5WTyQhFvbtMmzxBk4DyQesCKnr7/view" : language === "en" ? "https://drive.google.com/file/d/1-hWTCyJ4cKAD0JGEfVjVUEPul00w7KU0/view" : "https://drive.google.com/file/d/1JrI0Zph-INy5eGMMprZvQHIDqENVqrTJ/view"} target='_blank'>{language === "es" ? "NUESTRA HISTORIA" : language === "en" ? "OUR HISTORY" : "UNSERE GESCHICHTE"}</Link>
        </div>
        <div className='flex justify-center'>
            <Image src={escarapela} alt='escarapela' width={50} height={50}/>
        </div>
    </div>
  )
}

export default AboutUs