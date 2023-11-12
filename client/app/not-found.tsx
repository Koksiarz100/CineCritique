import Link from 'next/link'

import './styles/notfound.scss'

export default function NotFound() {
  return (
    <main>
      <div className='error404'>
        Hmm... Looks like you shouldn't be here
      </div>
    <div>
      <h2 className='notfound'>Page Not Found</h2>
      <p className='message'>We are so sorry. It seems like we don't have the page you're looking for yet. Keep calm and return to our <b><Link href="/">Home Page</Link></b>.</p>
      <p className='niceday'>Have a nice day!</p>
    </div>
    </main>
  )
}