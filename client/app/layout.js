import Nav from "./components//layout/Nav/Nav"
import Banner from "./components/layout/Banner/Banner"
import './styles/layout.scss'

export const metadata = {
  title: 'CineCritique',
  description: 'Recenzje filmów i seriali',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Nav/>
        <Banner/>
        {children}
        <footer></footer> {/* Roboczy footer */}
      </body>
    </html>
  )
}