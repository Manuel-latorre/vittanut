import React from 'react'
import Link from 'next/link'
import logo from './icons/logo.svg'
import Image from 'next/image'
import oia from './icons/oia.svg'

const ExportData = () => {
  return (
    <div className='h-full w-[90%] mx-auto flex flex-col gap-8 justify-center items-center'>
        <h2 className='titles'>DATOS DE <br className='lg:hidden'/> EXPORTACIÓN</h2>
        <Image src={oia} alt='OIA' width={200} height={200}/>
        <Link href={"https://drive.google.com/file/d/1t5g09qRhpwWulbSIYqvPG-Qei-TOfUB5/view"} target='_blank'>
            <p className='underline leading-3 subtitle'>Certificado por Organización Internacional Agropecuaria (OIA)</p>
        </Link>
        <div className='my-8 lg:hidden'>
            <Image src={logo} alt="logo" width={250} height={250} />
        </div>
    </div>
  )
}

export default ExportData