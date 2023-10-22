import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './nav.scss'

function Nav() {
  return (
    <nav>
      <div className='nav-logo-container'>
        <Link href="/"><span className='logo-green'>Cine</span>Critique</Link>
      </div>
      <div className='nav-links-container'>
        <Link href='/login'>
          <Image src='/user_light.png' className='profile-button' alt='login' width={32} height={32}/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav