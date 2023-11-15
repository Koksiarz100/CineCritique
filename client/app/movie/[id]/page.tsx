import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './styles/move.scss'

export default function page({ params }: { params: { id: string } }) {
  console.log(params)
  return (
    <div className='movie-site-wrapper'>
      <div className='movie-nav'>
        <Link href='#info'>Dane</Link>
        <Link href='#description'>Opis</Link>
        <Link href='#cast'>Obsada</Link>
        <Link href='#reviews'>Recenzje</Link>
      </div>
      <div className='movie-wrapper'>
        <div className='movie-main-info' id='info'>
          <div className='movie-image'>
            <Image src='/placeholder.png' quality={100} alt='test' width={200} height={300} className='card-image'/>
          </div>
          <div className='movie-description'>
            <span className='movie-title-text'>
              Test
            </span>
            <span className='movie-description-text'>
              Test
            </span>
          </div>
        </div>
        <div className='movie-info' id='description'>
          <div className='movie-info-title'>
            Informacje
          </div>
          <div className='movie-info-main'>
            <span>Id filmu: {params.id}</span>
          </div>
        </div>
        <div className='movie-cast' id='cast'>
          <div className='movie-cast-title'>
            Obsada
          </div>
          <div className='movie-cast-description'>
            Test
          </div>
        </div>
        <div className='movie-reviews' id='reviews'>
          <div className='movie-reviews-title'>
            Recenzje
          </div>
          <div className='movie-reviews-description'>
            Test
          </div>
        </div>
      </div>
    </div>
  )
}