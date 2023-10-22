import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Carousel from './Carousel/Carousel'

const movies = {
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

export default function App() {
  return (
    <div className='app-window'>
      <div className='app-content'>
        <div className='app-wrapper'>
          <Carousel info={movies} title='Akcja'/>
        </div>
      </div>
      <Sidebar/>
    </div>
  )
}