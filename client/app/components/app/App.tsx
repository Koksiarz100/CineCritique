'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'

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
    title: 'test1',
    description: 'test1',
    image: 'test1'
  },
  test2: {
    title: 'test2',
    description: 'test2',
    image: 'test2'
  },
  test3: {
    title: 'test3',
    description: 'test3',
    image: 'test3'
  },
  test4: {
    title: 'test4',
    description: 'test4',
    image: 'test4'
  },
  test5: {
    title: 'test5',
    description: 'test5',
    image: 'test5'
  },
}

function Card(title: string, description: string, image: string) {
  return(
    <div className='card-wrapper'>
      <div className='card-image'>
        {image}
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
  const { info } = props;
  const category = props.title;
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-title'>
        <h2>{category}</h2>
      </div>
      <div className='carousel-content'>
        {Object.keys(info).map((key) => {
          return (
            <div key={key}>
              {Card(info[key].title, info[key].description, info[key].image)}
            </div>
          )
        })}
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