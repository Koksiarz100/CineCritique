'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';

import './styles/move.scss'

async function fetchMovie(id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/movie/${id}`);
    const movie = response.data;
    console.log(movie);
    return movie;
  } catch (error) {
    console.error('Błąd sieci', error);
    throw error;
  }
}

export default function page({ params }: { params: { id: string } }) {
  
  fetchMovie(params.id);
  
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