import Image from 'next/image'
import React from 'react'
import campo from '../public/campo.jpg'
import escarapela from './icons/escarapela.png'
import { LayoutGridImages } from './AboutUsGridImages'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className='w-[90%] mx-auto h-full flex flex-col items-center gap-8 pt-4 lg:pt-16 lg:gap-4' data-aos="zoom-in">
        <h1 className='titles'>NUEZ PECAN <br className='lg:hidden'/>
            ORGÁNICA AL MUNDO
        </h1>
        <p className='subtitle'>Buenaventura es el nombre de nuestro campo y hogar</p>
        <Image src={campo} alt='campo' height={1000} className='rounded-xl w-full h-[300px] lg:hidden'/>
        <LayoutGridImages/>
        <p className='subtitle'>Ubicado en la Ruta Provincial 47, Luján, Provincia de Buenos Aires, Argentina.</p>

        <div className='historyContainer'>
            <Link href={"https://drive.google.com/file/d/1nBoTz5WTyQhFvbtMmzxBk4DyQesCKnr7/view"} target='_blank'>NUESTRA HISTORIA</Link>
        </div>
        <div className='flex justify-center'>
            <Image src={escarapela} alt='escarapela' width={50} height={50}/>
        </div>
    </div>
  )
}

export default AboutUs