import React from 'react'
import Link from 'next/link'
import './nav.scss'

function Nav() {
  return (
    <nav>
      <div className='nav-logo-container'>
        <Link href="/">CineCritique</Link>
      </div>
      <div className='nav-links-container'>
        <Link href='/'>Home</Link>
        <Link href='/movies'>Movies</Link>
        <Link href='/series'>TV Shows</Link>
        <Link href='/login'>Login</Link>
      </div>
    </nav>
  )
}

export default Nav