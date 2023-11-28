'use client'

import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import axios from 'axios';

import { api, images } from '../../API';

interface Movie {
  title: string,
  description: string,
  image: string,
  id: string
}

type Movies = Record<string, Movie>;

function Card(title: string, description: string, image: string, id: string, animationClass: string = '', key: string) {
  var ID = `/movie/${id}`;
  return(
    <Link href={ID} key={key}>
      <div className={`card-wrapper ${animationClass}`}>
        <div className='card-image-wrapper'>
          <Image src={image} quality={100} alt={title} width={200} height={300} className='card-image'/>
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3>{title}</h3>
          </div>
          <div className='card-description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Carousel(props: any) {
  //throw Promise.resolve('test'); // test suspense

  const [animationClass, setAnimationClass] = useState('');
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { info } = props;
  const category = props.title;

  const cards: any = info ? Object.values(info) : [];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass('slide-out-left');
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      setAnimationClass('none');
      setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, 200);
    }, 200);
  }, [index, isAnimating, cards.length]);
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass('slide-out-right');
    setTimeout(() => {
      setIndex((index - 1 + cards.length) % cards.length);
      setAnimationClass('none');
      setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, 200);
    }, 200);
  }

  useEffect(() => {
    if (index === cards.length) {
      setIndex(0);
    }
  }, [index, cards.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const renderCards = () => {
    let renderedCards = [];
    for (let i = 0; i < 21; i++) {
      let cardIndex = (index + i) % cards.length;
      if (cards[cardIndex]) {
        let uniqueKey = `${cardIndex}-${i}`;
        renderedCards.push(Card(cards[cardIndex].title, cards[cardIndex].description, images + cards[cardIndex].image,cards[cardIndex].id , animationClass, uniqueKey));
      }
    }
    return renderedCards;
  }

  return (
    <div className='carousel-wrapper'>
      <div className='carousel-title'>
        <h2>{category}</h2>
      </div>
      <div className='carousel-content' {...swipeHandlers}>
        <button className='carousel-button left' onClick={handlePrev}>
          <Image src='/carousel/arrow-left.png' quality={100} alt='arrow-left' width={72} height={72} className='carousel-button-image'/>
        </button>
        {renderCards()}
        <button className='carousel-button right' onClick={handleNext}>
          <Image src='/carousel/arrow-right.png' quality={100} alt='arrow-right' width={72} height={72} className='carousel-button-image'/>
        </button>
      </div>
    </div>
  )
}

function Searchbar() {
  return (
    <div className='app-searchbar'>
      <div className='app-searchbar-margin'></div>
      <div className='app-searchbar-buttons'>
        <button>Polecane</button>
        <button>Filmy</button>
        <button>Seriale</button>
        <button>Wszystko</button>
      </div>
      <div className='app-searchbar-input'>
        <input type='text' placeholder='Szukaj' />
      </div>
    </div>
  )
}

export default function App() {
  const [movies, setMovies] = useState<Movies>({});
  const categories = ['new_films', 'action', 'adventure', 'horror', 'fantasy']
  const categoriesTitles = ['Nowości', 'Akcja', 'Przygodowe', 'Horror', 'Fantasy']

  async function fetchData(category: string) {
    try {
      const response = await axios.get(`${api}/api`, {
        params: {
          categories: category
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  useEffect(() => {
    categories.forEach(category => {
      fetchData(category).then(data => {
        setMovies(prevMovies => ({...prevMovies, [category]: data}));
      });
    });
  }, []);

  return (
    <>
      <Searchbar/>
      <div className='app-window'>
        <div className='app-wrapper'>
        <Suspense fallback={<div>Loading...</div>}>
          {categories.map(category => (
            <Carousel key={category} info={movies[category]} title={categoriesTitles[categories.indexOf(category)]}/>
          ))}
        </Suspense>
        </div>
      </div>
    </>
  )
}