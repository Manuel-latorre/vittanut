import React from 'react'
import OIAIcon from './icons/OIAIcon'
import Link from 'next/link'
import logo from './icons/logo.svg'
import Image from 'next/image'

const ExportData = () => {
  return (
    <div className='h-full w-[90%] mx-auto flex flex-col gap-8 justify-center items-center'>
        <h2 className='titles'>DATOS DE EXPORTACIÓN</h2>
        <OIAIcon/>
        <Link href={""}>
            <p className='underline leading-3 subtitle'>Certificado por Organización Internacional Agropecuaria (OIA)</p>
        </Link>
        <div className='my-8'>
            <Image src={logo} alt="logo" width={250} height={250} />
        </div>
    </div>
  )
}

export default ExportData