import React from 'react'
import nuez from "../public/nuez.jpg"
import Image from 'next/image'
import ProductProduction from './ProductProduction'
import AboutUs from './AboutUs'
import Footer from './Footer'


const Products = () => {
  return (
    <div className='flex max-md:flex-col items-center justify-center gap-6 mt-16'>
        <h3 className='titles mb-4' data-aos="fade-right">Nuestros productos</h3>
        <div className='flex flex-col items-center gap-8 w-[90%] mx-auto bg-[#7a8130]/30 p-4 rounded-xl'>
            <Image src={nuez} alt='Nuez pecan' className='rounded-xl shadow-xl w-full max-h-[450px]' />

            <div className='flex items-center justify-between w-full px-2 mx-auto'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-[#7a8130]' data-aos="fade-right">5kg</p>
                    <p className='text-[#7a8130]/70 text-lg font-medium' data-aos="zoom-in">40X40</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-[#7a8130]' data-aos="fade-right">1kg</p>
                    <p className='text-[#7a8130]/70 text-lg font-medium' data-aos="zoom-in">40X40</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-[#7a8130]' data-aos="fade-right">500gr</p>
                    <p className='text-[#7a8130]/70 text-lg font-medium' data-aos="zoom-in">20X20</p>
                </div>
            </div>

            <p className='subtitle' data-aos="fade-right">Empaquetado con Polietileno de 80 micrones, termosellado al vacío</p>
        </div>
      
        
        <ProductProduction/>

        
        
        <Footer/>
    </div>
  )
}

export default Products