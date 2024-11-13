import Image from 'next/image'
import React from 'react'
import nuez from "../public/nuez.jpg"
import Benefits from './Benefits'

const NutBenefits = () => {
  return (
    <div className='flex max-md:flex-col items-center justify-center'>
      {/* <Image src={nuez} width={200} height={100} alt='Imagen' className='w-full h-full rounded-xl'/> */}
      <h3 className='titles' data-aos="fade-right">Beneficios de la Nuez Pecán</h3>
      <Benefits/>
    </div>
  )
}

export default NutBenefits