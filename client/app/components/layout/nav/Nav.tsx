'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios, { AxiosResponse } from 'axios'

import './nav.scss'

interface UserData {
  id: string;
  username: string;
}

async function checkToken(token: string): Promise<boolean> {
  try {
    const response: AxiosResponse<UserData> = await axios.get('http://127.0.0.1:5000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      return true;
    }
  } catch (error: any) {
    if (error.response && error.response.data === 'Token expired') {
      console.error('Token expired');      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      return false;
    } else {
      console.error('Error checking token', error);
    }
  }
  return false;
}

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

const UserData: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (token) {
      Promise.all([checkToken(token), getUserData(token)])
        .then(([isValid, data]) => {
          if (isValid && data) {
            setUserData(data);
          }
        })
        .catch(error => {
          console.error('Error checking token or getting user data', error);
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
        <UserData/>
        <Link href='/login'>
          <Image src='/layout/nav/user_light.png' className='profile-button' alt='login' width={32} height={32}/>
        </Link>
      </div>
    </nav>
  )
}

export default Nav