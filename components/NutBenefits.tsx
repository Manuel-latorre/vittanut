import Image from 'next/image'
import React from 'react'
import nuez from "../public/nuez.jpg"
import Benefits from './Benefits'

const NutBenefits = () => {
  return (
    <div className='flex max-md:flex-col items-center justify-center'>
      {/* <Image src={nuez} width={200} height={100} alt='Imagen' className='w-full h-full rounded-xl'/> */}
      <h3 className='text-blue-900 font-semibold text-2xl text-center px-4 mb-4'>Beneficios de la Nuez Pecán</h3>
      <Benefits/>
    </div>
  )
}

export default NutBenefits