'use client'

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Image from 'next/image';

import { get } from './actions'

interface Tag {
  id: number;
  name: string;
  howmuch: number;
}

type Tags = Record<string, Tag>;

const tags: Tags = {
  akcja: {id: 1, name: 'akcja', howmuch: 0},
  komedia: {id: 2, name: 'komedia', howmuch: 0},
  dramat: {id: 3, name: 'dramat', howmuch: 0},
  horror: {id: 4, name: 'horror', howmuch: 0},
  thriller: {id: 5, name: 'thriller', howmuch: 0},
  fantasy: {id: 6, name: 'fantasy', howmuch: 0},
  sciFi: {id: 7, name: 'sci-fi', howmuch: 0},
  romans: {id: 8, name: 'romans', howmuch: 0},
  animacja: {id: 9, name: 'animacja', howmuch: 0},
  familijny: {id: 10, name: 'familijny', howmuch: 0},
  przygodowy: {id: 11, name: 'przygodowy', howmuch: 0},
  sensacyjny: {id: 12, name: 'sensacyjny', howmuch: 0},
  kryminal: {id: 13, name: 'kryminal', howmuch: 0},
  dokumentalny: {id: 14, name: 'dokumentalny', howmuch: 0},
  historyczny: {id: 15, name: 'historyczny', howmuch: 0},
  wojenny: {id: 16, name: 'wojenny', howmuch: 0},
  sportowy: {id: 17, name: 'sportowy', howmuch: 0},
  biograficzny: {id: 18, name: 'biograficzny', howmuch: 0},
  western: {id: 19, name: 'western', howmuch: 0},
  filmNoir: {id: 20, name: 'film-noir', howmuch: 0},
  musical: {id: 21, name: 'musical', howmuch: 0},
}

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
    image: '/fnaf1.jpg'
  },
  test3: {
    title: 'test3',
    description: 'test3',
    image: '/fnaf1.jpg'
  },
  test4: {
    title: 'test4',
    description: 'test4',
    image: '/fnaf1.jpg'
  },
  test5: {
    title: 'test5',
    description: 'test5',
    image: '/fnaf1.jpg'
  },
  test6: {
    title: 'test6',
    description: 'test6',
    image: '/fnaf1.jpg'
  },
  test7: {
    title: 'test7',
    description: 'test7',
    image: '/fnaf1.jpg'
  },
  test8: {
    title: 'test8',
    description: 'test8',
    image: '/fnaf1.jpg'
  },
  test9: {
    title: 'test9',
    description: 'test9',
    image: '/fnaf1.jpg'
  },
  test10: {
    title: 'test10',
    description: 'test10',
    image: '/fnaf1.jpg'
  },
  test11: {
    title: 'test11',
    description: 'test11',
    image: '/fnaf1.jpg'
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
        {renderCards()}
      </div>
      <div className='carousel-buttons'>
        <button className='carousel-button left' onClick={handlePrev}>Poprzedni</button>
        <button className='carousel-button right' onClick={handleNext}>Następny</button>
      </div>
    </div>
  )
}

function Searchbar() {
  return (
    <div className='app-searchbar'>
      <div></div>
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