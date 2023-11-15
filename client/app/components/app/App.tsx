'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

interface Movie {
  title: string,
  description: string,
  image: string,
  id: string
}

type Movies = Record<string, Movie>;

const movies: Movies = {
  test1: {
    title: 'Five nights at freddys: Pięć nocy',
    description: 'Rating:',
    image: '/fnaf1.jpg',
    id: 'test1'
  },
  test2: {
    title: 'W głowie się nie mieści',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test2'
  },
  test3: {
    title: 'Zaklinacz koni',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test3'
  },
  test4: {
    title: 'Matrix',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test4'
  },
  test5: {
    title: 'Resident Evil',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test5'
  },
  test6: {
    title: 'Noc oczyszczenia',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test6'
  },
  test7: {
    title: 'Kung Fu Panda 2',
    description: 'Rating:',
    image: '/placeholder.png',
    id: 'test7'
  },
  test8: {
    title: 'test8',
    description: 'test8',
    image: '/placeholder.png',
    id: 'test8'
  },
  test9: {
    title: 'test9',
    description: 'test9',
    image: '/placeholder.png',
    id: 'test9'
  },
  test10: {
    title: 'test10',
    description: 'test10',
    image: '/placeholder.png',
    id: 'test10'
  },
  test11: {
    title: 'test11',
    description: 'test11',
    image: '/placeholder.png',
    id: 'test11'
  },
}

function Card(title: string, description: string, image: string, id: string, animationClass: string = '', key: string) {
  var ID = `/movie/${id}`;
  return(
    <Link href={ID}>
      <div key={key} className={`card-wrapper ${animationClass}`}>
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
  const [animationClass, setAnimationClass] = useState('');
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { info } = props;
  const category = props.title;

  const cards: any = Object.values(info);

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
      let uniqueKey = `${cardIndex}-${i}`;
      renderedCards.push(Card(cards[cardIndex].title, cards[cardIndex].description, cards[cardIndex].image,cards[cardIndex].id , animationClass, uniqueKey));
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
  return (
    <>
      <Searchbar/>
      <div className='app-window'>
        <div className='app-wrapper'>
          <Carousel info={movies} title='Nowości'/>
          <Carousel info={movies} title='Akcja'/>
          <Carousel info={movies} title='Przygodowe'/>
          <Carousel info={movies} title='Horror'/>
          <Carousel info={movies} title='Dramat'/>
        </div>
      </div>
    </>
  )
}