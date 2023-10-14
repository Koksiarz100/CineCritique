import React from 'react'

import Sidebar from './Sidebar/Sidebar'

export default function App() {
  return (
    <div className='app-window'>
      <div className='app-content'>
        <div className='app-warpper'>
          <div className='app-title'>
            Content
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}