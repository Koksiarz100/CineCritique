import React from 'react'
import Link from 'next/link'

import './styles/dashboard.scss'


export default function page() {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard-nav'>
        <Link href='#info'>Dane</Link>
        <Link href='#description'>Opis</Link>
        <Link href='#cast'>Obsada</Link>
        <Link href='#reviews'>Recenzje</Link>
      </div>
      Dashboard
    </div>
  )
}