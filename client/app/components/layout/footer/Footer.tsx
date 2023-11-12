import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './footer.scss'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-up-button-wrapper'>
        <Link className='footer-up-button' href='#nav'>Do góry</Link>
      </div>
      <div className='footer-content'>
        <div className='footer-info'>
          <span className='footer-title'>Kontakt</span>
          <div className='footer-info-box'><Image src='/email.png' alt='emial' width={32} height={32} />test.email@gmail.com</div>
          <div className='footer-info-box'><Image src='/tel.png' alt='tel' width={32} height={32} />111 222 333</div>
        </div>
        <div className='footer-socials'>
          <span className='footer-title'>Social Media</span>
          <div className='footer-socials-wrapper'>
            <Image src='/facebook.png' alt='facebook' width={32} height={32}/>
            <Image src='/youtube.png' alt='twitter' width={32} height={32}/>
            <Image src='/twitter.png' alt='youtube' width={32} height={32}/>
            <Image src='/instagram.png' alt='instagram' width={32} height={32}/>
          </div>
        </div>
        <div className='footer-nav'>
          <span className='footer-title'>Nawigacja</span>
          <Link href='/'>Strona główna</Link>
          <Link href='/'>O nas</Link>
          <Link href='/'>Regulamin</Link>
          <Link href='/'>Kontakt</Link>
        </div>
      </div>
    </div>
  )
}