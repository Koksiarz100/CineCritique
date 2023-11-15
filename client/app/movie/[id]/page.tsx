import React from 'react'

import './styles/move.scss'

export default function page({ params }: { params: { id: string } }) {
  console.log(params)
  return (
    <div className='movie-wrapper'>
      <h1>Movie: {params.id}</h1>
    </div>
  )
}