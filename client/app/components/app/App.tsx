'use client'

import React, { Suspense ,useState, useEffect } from 'react'
import Image from 'next/image';

interface Movie {
  title: string,
  description: string,
  image: string
}

type Movies = Record<string, Movie>;

const movies: Movies = {
  test1: {
    title: 'Five nights at freddys',
    description: 'Pięć nocy',
    image: '/fnaf1.jpg'
  },
  test2: {
    title: 'test2',
    description: 'test2',
    image: '/placeholder.png'
  },
  test3: {
    title: 'test3',
    description: 'test3',
    image: '/placeholder.png'
  },
  test4: {
    title: 'test4',
    description: 'test4',
    image: '/placeholder.png'
  },
  test5: {
    title: 'test5',
    description: 'test5',
    image: '/placeholder.png'
  },
  test6: {
    title: 'test6',
    description: 'test6',
    image: '/placeholder.png'
  },
  test7: {
    title: 'test7',
    description: 'test7',
    image: '/placeholder.png'
  },
  test8: {
    title: 'test8',
    description: 'test8',
    image: '/placeholder.png'
  },
  test9: {
    title: 'test9',
    description: 'test9',
    image: '/placeholder.png'
  },
  test10: {
    title: 'test10',
    description: 'test10',
    image: '/placeholder.png'
  },
  test11: {
    title: 'test11',
    description: 'test11',
    image: '/placeholder.png'
  },
}

function Card(title: string, description: string, image: string, animationClass: string = '', key: number) {
  return(
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
  );
}

function Carousel(props: any) {
  const [animationClass, setAnimationClass] = useState('');
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { info } = props;
  const start = props.start;
  const category = props.title;

  useEffect(() => {
    setIndex(Number(start));
  }, [start]);

  const cards: any = Object.values(info);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass('slide-out-left');
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      setAnimationClass('none');
      setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  }
  
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
      }, 300);
    }, 300);
  }

  useEffect(() => {
    if (index === cards.length) {
      setIndex(0);
    }
  }, [index, cards.length]);

  const renderCards = () => {
    let renderedCards = [];
    for (let i = 0; i < 11; i++) {
      let cardIndex = (index + i) % cards.length;
      renderedCards.push(Card(cards[cardIndex].title, cards[cardIndex].description, cards[cardIndex].image, animationClass, cardIndex));
    }
    return renderedCards;
  }

  return (
    <div className='carousel-wrapper'>
      <div className='carousel-title'>
        <h2>{category}</h2>
      </div>
      <div className='carousel-content'>
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
          <Carousel info={movies} title='Nowości' start='0'/>
          <Carousel info={movies} title='Akcja' start='1'/>
          <Carousel info={movies} title='Akcja' start='3'/>
        </div>
      </div>
    </>
  )
}