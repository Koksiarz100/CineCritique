'use client'

//Need a lot of more work to make it work properly

import React, { useState } from 'react'
import Image from 'next/image'

import './rating.scss'

export default function Rating(value: number = 0, isStatic: boolean = false) {
  const [rating, setRating] = useState(value);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (e: any) => {
    if (isStatic === true) {
      return;
    }
    else {
      setRating(e.target.value);
    }
  }

  const handleMouseOver = (value: number) => {
    if (isStatic) {
      return;
    }
    setHoverRating(value);
  }

  const handleMouseOut = () => {
    setHoverRating(0);
  }

  const getImageSrc = (value: number) => {
    const currentRating = hoverRating > 0 ? hoverRating : rating;
    if (currentRating >= value) {
      return '/stars/starFull.png';
    } else if (currentRating >= value - 10) {
      return '/stars/starHalf.png';
    } else {
      return '/stars/starEmpty.png';
    }
  } 

  return (
    <div className='stars-wrapper'>
      <form>
        <div className='star-main'>
          <input type='radio' id='one' name='stars' value={10} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(10)} onMouseOut={handleMouseOut}/>
          <input type='radio' id='oneHalf' name='stars' value={20} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(20)} onMouseOut={handleMouseOut}/>
          <Image src={getImageSrc(20)} quality={100} alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='two' name='stars' value={30} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(30)} onMouseOut={handleMouseOut}/>
          <input type='radio' id='twoHalf' name='stars' value={40} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(40)} onMouseOut={handleMouseOut}/>
          <Image src={getImageSrc(40)} quality={100} alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='three' name='stars' value={50} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(50)} onMouseOut={handleMouseOut}/>
          <input type='radio' id='threeHalf' name='stars' value={60} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(60)} onMouseOut={handleMouseOut}/>
          <Image src={getImageSrc(60)} quality={100} alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='four' name='stars' value={70} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(70)} onMouseOut={handleMouseOut}/>
          <input type='radio' id='fourHalf' name='stars' value={80} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(80)} onMouseOut={handleMouseOut}/>
          <Image src={getImageSrc(80)} quality={100} alt='rating' className='star-img' width={32} height={32} />
        </div>
        <div className='star-main'>
          <input type='radio' id='five' name='stars' value={90} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(90)} onMouseOut={handleMouseOut}/>
          <input type='radio' id='fiveHalf' name='stars' value={100} className='star-button' onClick={handleRating} onMouseOver={() => handleMouseOver(100)} onMouseOut={handleMouseOut}/>
          <Image src={getImageSrc(100)} quality={100} alt='rating' className='star-img' width={32} height={32} />
        </div>
      </form>
    </div>
  )
}