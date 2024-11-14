import Image from 'next/image'
import React from 'react'
import nuez from "../public/nuez.jpg"
import Benefits from './Benefits'

const NutBenefits = () => {
  return (
    <div className='flex max-md:flex-col bg-[#7a8130]/30 rounded-b-3xl shadow-lg h-screen'>
      <h3 className='titles' data-aos="fade-right">Beneficios de la Nuez Pecán</h3>
      <Benefits/>
    </div>
  )
}

export default NutBenefits