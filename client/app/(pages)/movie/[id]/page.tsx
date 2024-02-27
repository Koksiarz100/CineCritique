'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

import './styles/move.scss';

import { API } from '@/config/API';
import { IMAGES_DIR } from '@/config/API';
import  SmallNav  from '@/shared/interface/SmallNav'; 

interface MovieType {
  title: string;
  description: string;
  image: string;
  id: string;
  rating: number;
}

async function fetchMovie(id: string) {
  try {
    const response = await axios.get(`${API}/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Błąd sieci', error);
    throw error;
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const [Movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    console.log(params.id);
    async function fetchData() {
      const result = await fetchMovie(params.id);
      setMovie(result);
      console.log(result);
    }

    fetchData();
  }, [params.id]);

  let imageSrc = Movie ? (Movie.image === 'loading' ? '/carousel/loading.png' : IMAGES_DIR + Movie.image) : '/carousel/loading.png';
  
  const Titles = ['Informacje', 'Obsada', 'Recenzje'];
  const Ids = ['info', 'cast', 'reviews'];

  return (
    <div className='movie-site-wrapper'>
      {SmallNav(Titles, Ids)}
      <div className='movie-wrapper'>
        <div className='movie-main-info' id='info'>
          <div className='movie-image'>
            <Image src={imageSrc} quality={100} alt='test' width={200} height={300} className='card-image'/>
          </div>
          <div className='movie-description'>
            <span className='movie-title-text'>
              {Movie ? Movie.title : 'loading'}
            </span>
            <span className='movie-description-text'>
              {Movie ? Movie.description : 'loading'}
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
            {Movie ? Movie.rating : 'loading'}
          </div>
        </div>
      </div>
    </div>
  )
}