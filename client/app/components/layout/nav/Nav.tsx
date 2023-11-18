'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import './nav.scss'

async function getUserData(token: string) {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error getting user data', error);
    return null;
  }
}

function UserData() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (token) {
      getUserData(token).then(data => {
        setUserData(data);
      });
    }
  }, []);

  return (
    <div>
      {userData && (
        <div className='nav-user-data'>
          <div className='nav-user-data-username'>
            <span>{userData.username}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <div className='nav-logo-container'>
        <Link href="/"><span className='logo-green'>Cine</span>Critique</Link>
      </div>
      <div className='nav-links-container'>
        {UserData()}
        <Link href='/login'>
          <Image src='/layout/nav/user_light.png' className='profile-button' alt='login' width={32} height={32}/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav