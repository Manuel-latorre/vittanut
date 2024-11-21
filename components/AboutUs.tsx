import Image from 'next/image'
import React from 'react'
import campo from '../public/campo.jpg'
import escarapela from '../public/escarapela1.png'

const AboutUs = () => {
  return (
    <div className='w-[90%] mx-auto h-full flex flex-col items-center justify-between pt-4' data-aos="zoom-in">
        <h1 className='titles'>NUEZ PECAN <br />
            ORGÁNICA AL MUNDO
        </h1>
        <p className='subtitle'>Buenaventura es el nombre de nuestro campo y hogar</p>
        <Image src={campo} alt='campo' height={1000} className='rounded-xl w-full h-[450px]'/>
        <p className='subtitle'>Ubicado en la Ruta Provincial 47, Luján, Provincia de Buenos Aires, Argentina.</p>

        <div className='historyContainer'>
            <p>NUESTRA HISTORIA</p>
        </div>
        <div className='flex justify-center'>
            <Image src={escarapela} alt='escarapela' width={50} height={50}/>
        </div>
    </div>
  )
}

export default AboutUs