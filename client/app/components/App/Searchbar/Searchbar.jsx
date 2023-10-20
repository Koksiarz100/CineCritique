import React from 'react'

export default function Searchbar() {
  return (
    <div className='app-searchbar'>
      <div></div>
      <div className='app-searchbar-buttons'>
        <button>Polecane</button>
        <button>Filmy</button>
        <button>Seriale</button>
        <button>Wszystko</button>
      </div>
      <input type='text' placeholder='Szukaj' />
    </div>
  )
}