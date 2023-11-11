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
    title: 'Five nights at freddys: Pięć nocy',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test2: {
    title: 'W głowie się nie mieści',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test3: {
    title: 'Zaklinacz koni',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test4: {
    title: 'Matrix',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test5: {
    title: 'Resident Evil',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test6: {
    title: 'Noc oczyszczenia',
    description: 'Rating:',
    image: '/fnaf1.jpg'
  },
  test7: {
    title: 'Kung Fu Panda 2',
    description: 'Rating:',
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
  const category = props.title;

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
    for (let i = 0; i < 7; i++) {
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

function Sidebar() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    akcja: false,
    komedia: false,
    dramat: false,
    horror: false,
    thriller: false,
    fantasy: false,
    sciFi: false,
    romans: false,
    animacja: false,
    familijny: false,
    przygodowy: false,
    sensacyjny: false,
    kryminal: false,
    dokumentalny: false,
    historyczny: false,
    wojenny: false,
    sportowy: false,
    biograficzny: false,
    western: false,
    filmNoir: false,
    musical: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    get(checked); // Wysyłanie do funkcji get() z actions.jsx (serverside)
  };

  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-wrapper'>
        <div className='app-sidebar-title'>
          Tagi
        </div>
        <div className='app-sidebar-tags'>
          <form className='app-sidebar-tags-wrapper' onSubmit={handleSubmit}>
          {Object.keys(tags).map((tagKey) => { // Mapowanie tagów
            const tag = tags[tagKey];
            return (
              <div className='tag-wrapper' key={tag.id}>
                <div className='tag-title'>
                  {tag.name}
                  <span className='tag-howmuch'>
                    {tag.howmuch}
                  </span>
                </div>
                <div className='tag-button'>
                  <label className='button-wrapper'>
                    <div className='switch-wrap'>
                      <input 
                      type='checkbox'
                      id={String(tag.id)} 
                      name={tag.name} 
                      value={String(tag.id)}
                      checked={checked[tagKey]}
                      onChange={handleChange}
                      />
                      <div className='switch'></div>
                    </div>
                  </label>
                </div>
              </div>
            )
          })}
            <div className='app-sidebar-submit-button'>
              <button type='submit'>
                Szukaj
              </button>
            </div>
          </form>
        </div>
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
          <Carousel info={movies} title='Nowości'/>
          <Carousel info={movies} title='Akcja'/>
          <Carousel info={movies} title='Akcja'/>
        </div>
        <Sidebar/>
      </div>
    </>
  )
}