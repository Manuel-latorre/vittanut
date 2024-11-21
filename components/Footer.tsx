import Image from 'next/image'
import React from 'react'
import escarapela from './icons/escarapela.png'
import { InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bgDark rounded-t-3xl p-6 flex flex-col justify-between h-[400px]'>
        <div className='flex items-center justify-between'>
            <p className='text-2xl textSoft font-bold'>CONTACTO</p>
            <Image src={escarapela} alt='Escarapela' width={40} height={40}/>
        </div>

        <div className='flex flex-col gap-6 px-4'>
            <div className='flex items-center gap-4 textSoft'>
                <PhoneIcon width={20} height={20}/>
                <Link href={"https://wa.me/541159388926"} target='_blank'>
                    <p className='textSoft font-semibold'>+541159388926</p>
                </Link>
            </div>
            <div className='flex items-center gap-4 textSoft'>
                <InstagramIcon width={20} height={20}/>
                <Link href={"https://www.instagram.com/vittanut/"} target='_blank'>
                    <p className='textSoft font-semibold'>@vittanut</p>
                </Link>
            </div>
            <div className='flex items-center gap-4 textSoft'>
                <MailIcon width={20} height={20}/>
                <Link href={"mailto:Somosvittanut@gmail.com"} target='_blank'>
                    <p className='textSoft font-semibold'>Somosvittanut@gmail.com</p>
                </Link>
            </div>
        </div>

        <div className='flex justify-center text-center'>
            <p className='textSoft font-light text-sm'>© Copyright Vanguard IA. Todos los derechos reservados.</p>
        </div>
    </div>
  )
}

export default Footer