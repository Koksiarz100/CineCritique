import Link from 'next/link'

import './styles/notfound.scss'

export default function NotFound() {
  return (
    <main>
      <div className='error404'>
        Hmm... Looks like you shouldn&apos;t be here
      </div>
    <div className='notfound-content'>
      <h2 className='notfound'>Page Not Found</h2>
      <p className='message'>We are so sorry. It seems like we don&apos;t have the page you&apos;re looking for yet. Keep calm and return to our <b><Link href="/">Home Page</Link></b>.</p>
      <p className='niceday'>Have a nice day!</p>
    </div>
    </main>
  )
}