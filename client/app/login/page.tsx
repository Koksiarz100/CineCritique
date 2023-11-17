'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import axios from 'axios'

import './styles/login.scss'

function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', { username, password })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='login-form'>
      <span className='login-form-title'>Zaloguj się</span>
      <form onSubmit={handleSubmit}>
      <input 
          type='text' 
          placeholder='Login' 
          className='login-form-input' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type='password' 
          placeholder='Hasło' 
          className='login-form-input' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
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