import React from 'react';

import App from './components/App/App';
import Searchbar from './components/App/Searchbar/Searchbar';

import './styles/page.scss'

export default function Home() {
  return (
    <div className='app-wrapper'>
      <Searchbar />
      <App />
    </div>
  )
}