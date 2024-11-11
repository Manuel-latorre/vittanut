import React from 'react'
import nuez from "../public/nuez.jpg"
import Image from 'next/image'


const Products = () => {
  return (
    <div className='flex max-md:flex-col items-center justify-center gap-6'>
        <h3 className='text-blue-900 font-semibold text-2xl text-center px-4 mb-4'>Nuestros productos</h3>
        <div className='flex flex-col items-center gap-8'>
            <Image src={nuez} alt='Nuez pecan' width={320} height={430} className='rounded-xl shadow-xl' />

            <div className='flex items-center justify-between w-full max-md:w-[85%] mx-auto'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-green-900'>5kg</p>
                    <p className='text-green-900 text-lg font-medium'>40X40</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-green-900'>1kg</p>
                    <p className='text-green-900 text-lg font-medium'>40X40</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-bold text-green-900'>500gr</p>
                    <p className='text-green-900 text-lg font-medium'>20X20</p>
                </div>
            </div>

            <p className='text-center text-green-950 px-2'>Empaquetado con Polietileno de 80 micrones, termosellado al vacío</p>
        </div>
    </div>
  )
}

export default Products