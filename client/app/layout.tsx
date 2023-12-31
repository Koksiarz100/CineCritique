import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from './components/layout/Nav'
import Banner from './components/layout/Banner'
import Footer from './components/layout/Footer'

import './styles/globals.scss'
import './styles/layout.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CineCritique',
  description: 'Recenzje filmów i seriali',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} id='body'>
        <Nav />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  )
}
