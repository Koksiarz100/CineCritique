import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from './components/layout/nav/Nav'
import Banner from './components/layout/banner/Banner'
import Footer from './components/layout/footer/Footer'

import './styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CineCritique',
  description: 'Recenzje filmów i seriali',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body suppressHydrationWarning={true} id='body'>
        <Nav />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  )
}
