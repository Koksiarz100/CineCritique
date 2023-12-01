'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { UserDataComponent } from '../essentials/getUserData'

function Nav() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return (
    <nav>
      <div className='nav-logo-container'>
        <Link href="/#body"><span className='logo-green'>Cine</span>Critique</Link>
      </div>
      <div className='nav-links-container'>
        <UserDataComponent/>
        <Link href={token ? '/profile' : '/login#login'}>
          <Image src='/layout/nav/user_light.png' className='profile-button' alt='login' width={32} height={32}/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav