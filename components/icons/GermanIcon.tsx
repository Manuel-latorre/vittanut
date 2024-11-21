import Image from 'next/image'
import React from 'react'
import germany from './germany.png'

const GermanIcon = () => {
  return (
    <Image src={germany} width={28} height={28} alt="Germnay"/>
  )
}

export default GermanIcon