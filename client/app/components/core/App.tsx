'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Rating from '../interface/Rating/Rating';

import { useFetchData } from '../api/carouselData';
import { IMAGES_DIR } from '../../config/API';

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
  const [animationClass, setAnimationClass] = useState('');
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { info } = props;
  const category = props.title;
  const cards: any = info ? Object.values(info) : [];
  const [isHovered, setIsHovered] = useState(false);

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
      if (!isHovered) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  const renderCards = () => {
    let renderedCards = [];
    for (let i = 0; i < 21; i++) {
      let cardIndex = (index + i) % cards.length;
      if (cards[cardIndex]) {
        let uniqueKey = `${cardIndex}-${i}`;
        let imageSrc = cards[cardIndex].image === 'loading' ? '/carousel/loading.png' : IMAGES_DIR + cards[cardIndex].image;
        renderedCards.push(Card(cards[cardIndex].title, cards[cardIndex].description, imageSrc, cards[cardIndex].id , animationClass, uniqueKey));
      }
    }
    return renderedCards;
  }

  return (
    <div className='carousel-wrapper' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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

function Searchbar({ onSearch }: { onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
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
        <input type='text' placeholder='Szukaj' onChange={onSearch}/>
      </div>
    </div>
  )
}

function MovieCard(props: any) {
  const { info } = props;
  const cards: any = info ? Object.values(info) : [];

  console.log(cards[2]);

  let imageSrc = cards[2] === 'loading' ? '/carousel/loading.png' : IMAGES_DIR + cards[2];

  return (
    <div className='movie-card-wrapper' id='0'>
      <div className='movie-card-image-wrapper'>
        <Image src={imageSrc} quality={100} alt='xd' width={200} height={300} className='movie-card-image'/>
      </div>
      <div className='movie-card-content'>
        <div className='movie-card-nav'>
          <button className='movie-card-nav-button'>Odtwórz</button>
          <button className='movie-card-nav-button'>Dodaj do listy</button>
        </div>
        <div className='movie-card-title'>
          <h3>{cards[0]}</h3>
        </div>
        <div className='movie-card-description'>
          <p>{cards[1]}</p>
          <Rating />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const categoriesTitles = ['Nowości', 'Akcja', 'Przygodowe', 'Horror', 'Fantasy']
  const categories = useMemo(() => ['new_films', 'action', 'adventure', 'horror', 'fantasy'], []);
  const { data: movies, loading } = useFetchData(categories);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value === '') {
      setIsSearching(false);
      return;
    }
    else {
      setSearchTerm(e.target.value);
      setIsSearching(true);
      return;
    }
  }

  if (loading) {
    const loadingData = {
      1: {
        title: 'Loading',
        description: '',
        image: 'loading',
        id: 'loading',
      }
    }

    return (
      <>
        <Searchbar onSearch={handleSearch} />
        <div className='app-window'>
          <div className='app-wrapper'>
            {categories.map(category => (
              <div className="overflow" key={category}>
                <div data-aos="fade-right">
                <Carousel key={category} info={loadingData} title={categoriesTitles[categories.indexOf(category)]}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <div className='app-window'>
        <div className='app-wrapper'>
          <TransitionGroup>
            <CSSTransition
              key={isSearching ? 'search' : 'carousel'}
              timeout={500}
              classNames="fade"
            >
              {
              isSearching ? (
                <div className='app-search'>
                  <span className='app-search-term'>Wyszukiwanie: {searchTerm}</span>
                  <MovieCard info={movies['action'][1]}/>
                  <MovieCard info={movies['action'][2]}/>
                  <MovieCard info={movies['action'][3]}/>
                  <MovieCard info={movies['action'][4]}/>
                  <MovieCard info={movies['action'][5]}/>
                </div>
              ) : (
                <>
                  {categories.map(category => (
                    <div className="overflow" key={category}>
                      <div data-aos="fade-right">
                        <Carousel key={category} info={movies[category]} title={categoriesTitles[categories.indexOf(category)]}/>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
}