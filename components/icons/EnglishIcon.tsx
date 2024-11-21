import Image from 'next/image'
import React from 'react'
import en from './english.png'

const EnglishIcon = () => {
  return (
    <Image src={en} width={28} height={28} alt="English"/>
  )
}

export default EnglishIcon