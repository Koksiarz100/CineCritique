import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-up-button-wrapper'>
        <Link className='footer-up-button' href='#body'>Do góry</Link>
      </div>
      <div className='footer-content'>
        <div className='footer-info'>
          <div className='footer-info-box'><Image src='/layout/footer/email.png' alt='emial' width={32} height={32} />test.email@gmail.com</div>
          <div className='footer-info-box'><Image src='/layout/footer/tel.png' alt='tel' width={32} height={32} />111 222 333</div>
        </div>
        <div className='footer-socials'>
          <div className='footer-socials-wrapper'>
            <Image src='/layout/footer/facebook.png' alt='facebook' width={32} height={32}/>
            <Image src='/layout/footer/youtube.png' alt='twitter' width={32} height={32}/>
            <Image src='/layout/footer/twitter.png' alt='youtube' width={32} height={32}/>
            <Image src='/layout/footer/instagram.png' alt='instagram' width={32} height={32}/>
          </div>
        </div>
        <div className='footer-nav'>
          <Link href='/'>Strona główna</Link>
          <Link href='/'>O nas</Link>
          <Link href='/'>Regulamin</Link>
          <Link href='/'>Kontakt</Link>
        </div>
      </div>
    </div>
  )
}