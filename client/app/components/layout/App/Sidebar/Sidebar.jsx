'use client'

import React, { useState } from 'react'
import { get } from '../actions'

const tags = {
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

export default function Sidebar() {
  const [checked, setChecked] = useState({
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

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    get(checked);
  };

  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-wrapper'>
        <div className='app-sidebar-title'>
          Tagi
        </div>
        <div className='app-sidebar-tags'>
          <form className='app-sidebar-tags-wrapper' onSubmit={handleSubmit}>
            {Object.keys(tags).map((tag) => (
              <div className='tag-wrapper' key={tags[tag].id}>
                <div className='tag-title'>
                  {tags[tag].name}
                </div>
                <div className='tag-button'>
                  <input
                    type='checkbox' 
                    id={tags[tag].id} 
                    name={tags[tag].name} 
                    value={tags[tag].id}
                    checked={checked[tag.name]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
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