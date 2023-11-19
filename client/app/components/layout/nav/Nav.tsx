'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { UserData } from '../../../essentials/getUserData'

function Nav() {
  return (
    <nav>
      <div className='nav-logo-container'>
        <Link href="/"><span className='logo-green'>Cine</span>Critique</Link>
      </div>
      <div className='nav-links-container'>
        <UserData/>
        <Link href='/login'>
          <Image src='/layout/nav/user_light.png' className='profile-button' alt='login' width={32} height={32}/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav