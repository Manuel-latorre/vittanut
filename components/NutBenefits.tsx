import React from 'react'
import Benefits from './Benefits'
import BenefitsWeb from './BenefitsWeb'


const NutBenefits = () => {
  return (
    <div className='flex flex-col bgGeneral w-[90%] items-center justify-center mx-auto lg:pt-16'>
      <div className='pt-8'>
        <h3 className='titles' data-aos="zoom-in">BENEFICIOS DE <br className='lg:hidden'/> LA NUEZ PECÁN</h3>
        <Benefits/>
        <BenefitsWeb/>

      </div>
    </div>
  )
}

export default NutBenefits