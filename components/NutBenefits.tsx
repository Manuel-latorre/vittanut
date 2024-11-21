import React from 'react'
import Benefits from './Benefits'
import Image from 'next/image'
import escarapela from "../public/escarapela1.png"

const NutBenefits = () => {
  return (
    <div className='flex max-md:flex-col bgGeneral'>
      <div className='flex justify-center rotate-180'>
            <Image src={escarapela} alt='escarapela' width={50} height={50}/>
      </div>
      <div className='pt-8'>
        <h3 className='titles' data-aos="zoom-in">BENEFICIOS DE <br /> LA NUEZ PECÁN</h3>
        <Benefits/>

      </div>
    </div>
  )
}

export default NutBenefits