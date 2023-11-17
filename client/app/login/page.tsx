'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import axios from 'axios'

import './styles/login.scss'

interface AuthFormProps {
  formType: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      let response
      if (formType === 'login') {
        response = await axios.post('http://127.0.0.1:5000/api/login', { username, password })
        console.log('Sending request');
      } else if (formType === 'register') {
        if (password !== repeatPassword) {
          console.error('Passwords do not match')
          return
        }
        response = await axios.post('http://127.0.0.1:5000/api/register', { username, password })
      }
      const token = response.data.token
      localStorage.setItem('token', token)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={`${formType}-form`}>
      <span className={`${formType}-form-title`}>{formType === 'login' ? 'Zaloguj się' : 'Zarejestruj się'}</span>
      <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Login' 
            className={`${formType}-form-input`} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type='password' 
            placeholder='Hasło' 
            className={`${formType}-form-input`} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {formType === 'register' && (
            <input 
              type='password' 
              placeholder='Powtórz hasło' 
              className={`${formType}-form-input`} 
              value={repeatPassword} 
              onChange={(e) => setRepeatPassword(e.target.value)} 
            />
          )}
          <button type='submit' className={`${formType}-form-button`}>{formType === 'login' ? 'Zaloguj' : 'Zarejestruj'}</button>
      </form>
    </div>
  )
}

export default function Page() {
  const [formState, setFormstate] = useState<'login' | 'register'>('login')

  return (
    <div className='login-wrapper' id='login'>
      <div className='login-nav'>
        <Link href='#login' onClick={
          () => setFormstate('login')
        } 
        className={formState === 'login' ? 'active' : ''}>Login</Link>
        <Link href='#register' onClick={
          () => setFormstate('register')
        }
        className={formState === 'register' ? 'active' : ''}>Rejestracja</Link>
      </div>
      <div className='login-main'>
        <AuthForm formType={formState} />
      </div>
    </div>
  )
}