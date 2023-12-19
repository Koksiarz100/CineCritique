'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import './rating.scss'

export default function Rating() {

  return (
    <div className='stars-wrapper'>
      <form>
        <div className='star-main'>
          <input type='radio' id='one' name='stars' value={10} className='star-button' />
          <input type='radio' id='oneHalf' name='stars' value={20} className='star-button' />
          <Image src='/stars/starEmpty.png' alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='two' name='stars' value={30} className='star-button' />
          <input type='radio' id='twoHalf' name='stars' value={40} className='star-button' />
          <Image src='/stars/starEmpty.png' alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='three' name='stars' value={50} className='star-button' />
          <input type='radio' id='threeHalf' name='stars' value={60} className='star-button' />
          <Image src='/stars/starEmpty.png' alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='four' name='stars' value={70} className='star-button' />
          <input type='radio' id='fourHalf' name='stars' value={80} className='star-button' />
          <Image src='/stars/starEmpty.png' alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='five' name='stars' value={90} className='star-button' />
          <input type='radio' id='fiveHalf' name='stars' value={100} className='star-button' />
          <Image src='/stars/starEmpty.png' alt='rating' className='star-img' width={32} height={32} />
        </div>
      </form>
    </div>
  )
}