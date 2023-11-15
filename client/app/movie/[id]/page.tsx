import React from 'react'
import Link from 'next/link'

import './styles/move.scss'

export default function page({ params }: { params: { id: string } }) {
  console.log(params)
  return (
    <div className='movie-site-wrapper'>
      <div className='movie-nav'>
        <Link href='/'>Dane</Link>
        <Link href='/'>Opis</Link>
        <Link href='/'>Obsada</Link>
        <Link href='/'>Recenzje</Link>
      </div>
      <div className='movie-wrapper'>
        <div className='movie-info'>

        </div>
        <div className='movie-description'>

        </div>
        <div className='movie-cast'>

        </div>
        <div className='movie-reviews'>

        </div>
      </div>
      <h1>Movie: {params.id}</h1>
    </div>
  )
}