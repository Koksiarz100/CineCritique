import React from 'react'
import './banner.scss'

export default function Banner() {
  return (
    <div className='banner-wrapper'>
      <div className='banner-background'>
        <div className='banner-text'>
          <span className='banner-title'>CineCritique</span>
          <h2>Recenzje filmów i seriali</h2>
        </div>
      </div>
    </div>
  )
}