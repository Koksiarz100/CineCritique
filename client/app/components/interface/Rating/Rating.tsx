import React from 'react'
import Image from 'next/image'

import './rating.scss'

export default function Rating() {
  return (
    <div className='stars-wrapper'>
      Stars
      <Image src='/stars/starFull.png' alt='rating' width={32} height={32} />
      <Image src='/stars/starFull.png' alt='rating' width={32} height={32} />
      <Image src='/stars/starFull.png' alt='rating' width={32} height={32} />
      <Image src='/stars/starFull.png' alt='rating' width={32} height={32} />
      <Image src='/stars/starFull.png' alt='rating' width={32} height={32} />
    </div>
  )
}