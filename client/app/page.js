import './page.scss'

export default function Home() {
  return (
    <div className='app-wrapper'>
      <div className='app-window'>
        <div className='app-searchbar'>
          Searchbar
        </div>
        <div className='app-content'>
          Content
        </div>
      </div>
      <div className='app-sidebar'>
        Tagi
      </div>
    </div>
  )
}