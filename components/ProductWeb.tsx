import React from 'react'
import Image from 'next/image'
import SmallPackIcon from './icons/SmallPackIcon'
import BigPackIcon from './icons/BigPack'
import nuez from "../public/nuez.jpg";

const ProductWeb = () => {
  return (
    <div className='max-lg:hidden flex w-full mx-auto rounded-xl h-[400px] bgDark'>
      {/* Contenedor de imagen - 40% del ancho */}
      <div className='w-[40%] h-full'>
        <Image 
          src={nuez} 
          alt="Front pack" 
          className="rounded-l-xl h-full w-full object-cover"
        />
      </div>
      
      {/* Contenedor del contenido - 60% del ancho */}
      <div className='w-[60%] h-full p-8'>
        <div className='flex flex-col items-center justify-around h-full'>
          <div className="flex items-center justify-center w-full gap-12">
            <div className="flex flex-col gap-6 items-center">
              <p className="text-5xl lg:text-7xl font-bold textSoft" data-aos="fade-right">
                5kg
              </p>
              <div className="flex flex-col gap-4 items-center">
                <div className='bgDark p-2 rounded-xl'>
                  <SmallPackIcon />
                </div>
                <p className="textSoft text-2xl lg:text-3xl font-medium" data-aos="zoom-in">
                  40X60
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 items-center">
              <p className="text-5xl lg:text-7xl font-bold textSoft" data-aos="fade-right">
                1kg
              </p>
              <div className="flex flex-col gap-4 items-center">
                <div className='bgDark p-2 rounded-xl'>
                  <BigPackIcon />
                </div>
                <p className="textSoft text-2xl lg:text-3xl font-medium" data-aos="zoom-in">
                  40X40
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 items-center">
              <p className="text-5xl lg:text-7xl font-bold textSoft" data-aos="fade-right">
                500g
              </p>
              <div className="flex flex-col gap-4 items-center">
                <div className='bgDark p-2 rounded-xl'>
                  <BigPackIcon />
                </div>
                <p className="textSoft text-2xl lg:text-3xl font-medium" data-aos="zoom-in">
                  20X20
                </p>
              </div>
            </div>
          </div>
          
          <p className="textSoft text-center text-xl lg:text-2xl font-medium" data-aos="zoom-in">
            Empaquetado con Polietileno de 80 micrones termosellado al vacío
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductWeb