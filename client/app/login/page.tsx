'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import './styles/login.scss'

function Login() {
  return (
    <div className='login-form'>
      <span className='login-form-title'>Zaloguj się</span>
      <form>
        <input type='text' placeholder='Login' className='login-form-input' />
        <input type='password' placeholder='Hasło' className='login-form-input' />
        <button type='submit' className='login-form-button'>Zaloguj</button>
      </form>
    </div>
  )
}

function Register() {
  return (
    <div className='register-form'>
      <span className='register-form-title'>Zarejestruj się</span>
      <form>
        <input type='text' placeholder='Login' className='register-form-input' />
        <input type='password' placeholder='Hasło' className='register-form-input' />
        <input type='password' placeholder='Powtórz hasło' className='register-form-input' />
        <button type='submit' className='register-form-button'>Zarejestruj</button>
      </form>
    </div>
  )
}

export default function Page() {
  const [formstate, setFormstate] = useState<'login' | 'register'>('login')

  return (
    <div className='login-wrapper' id='login'>
      <div className='login-nav'>
        <Link href='#login' onClick={
          () => setFormstate('login')
        } 
        className={formstate === 'login' ? 'active' : ''}>Login</Link>
        <Link href='#register' onClick={
          () => setFormstate('register')
        }
        className={formstate === 'register' ? 'active' : ''}>Rejestracja</Link>
      </div>
      <div className='login-main'>
        {formstate === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  )
}