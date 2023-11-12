import Link from 'next/link'

import './styles/notfound.scss'

export default function NotFound() {
  return (
    <main>
    <div>
      <h2 className='notfound'>Not Found</h2>
      <p className='message'>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
    </main>
  )
}