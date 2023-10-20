'use client'

import React, { useState, createContext } from 'react'
import Sidebar from './Sidebar/Sidebar'

const CheckedTagsContext = createContext([]);

export default async function App() {
  const [checkedTags, setCheckedTags] = useState([]);

  return (
    <div className='app-window'>
      <div className='app-content'>
        <div className='app-warpper'>
          <CheckedTagsContext.Consumer>
            {(checkedTags) => (
              <div className='app-title'>
                {checkedTags.length > 0 ? `Tagi: ${checkedTags.join(', ')}` : 'Content'}
              </div>
            )}
          </CheckedTagsContext.Consumer>
        </div>
      </div>
      <Sidebar checkedTags={checkedTags}/>
    </div>
  )
}