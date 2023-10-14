import './styles/page.scss'

export default function Home() {
  return (
    <div className='app-wrapper'>
      <div className='app-searchbar'>
        <input type='text' placeholder='Szukaj' />
      </div>
      <div className='app-window'>
        <div className='app-content'>
          Content
        </div>
        <div className='app-sidebar'>
          <div className='app-sidebar-wrapper'>
            <div className='app-sidebar-title'>
              Tagi
            </div>
            <div className='app-sidebar-tags'>
              <form>
                <label>
                  Akcja
                  <input type='checkbox' id='sidebar' name='akcja' value={1}/>
                </label>
                <label>
                  Komedia
                  <input type='checkbox' id='sidebar' name='komedia' value={2}/>
                </label>
                <label>
                  Dramat
                  <input type='checkbox' id='sidebar' name='dramat' value={3}/>
                </label>
                <label>
                  Horror
                  <input type='checkbox' id='sidebar' name='horror' value={4}/>
                </label>
                <label>
                  Thriller
                  <input type='checkbox' id='sidebar' name='thriller' value={5}/>
                </label>
                <label>
                  Fantasy
                  <input type='checkbox' id='sidebar' name='fantasy' value={6}/>
                </label>
                <label>
                  Sci-Fi
                  <input type='checkbox' id='sidebar' name='sci-fi' value={7}/>
                </label>
                <label>
                  Romans
                  <input type='checkbox' id='sidebar' name='romans' value={8}/>
                </label>
                <label>
                  Animacja
                  <input type='checkbox' id='sidebar' name='animacja' value={9}/>
                </label>
                <label>
                  Familijny
                  <input type='checkbox' id='sidebar' name='familijny' value={10}/>
                </label>
                <label>
                  Przygodowy
                  <input type='checkbox' id='sidebar' name='przygodowy' value={11}/>
                </label>
                <label>
                  Sensacyjny
                  <input type='checkbox' id='sidebar' name='sensacyjny' value={12}/>
                </label>
                <label>
                  Kryminał
                  <input type='checkbox' id='sidebar' name='kryminał' value={13}/>
                </label>
                <label>
                  Dokumentalny
                  <input type='checkbox' id='sidebar' name='dokumentalny' value={14}/>
                </label>
                <label>
                  Historyczny
                  <input type='checkbox' id='sidebar' name='historyczny' value={15}/>
                </label>
                <label>
                  Wojenny
                  <input type='checkbox' id='sidebar' name='wojenny' value={16}/>
                </label>
                <label>
                  Sportowy
                  <input type='checkbox' id='sidebar' name='sportowy' value={17}/>
                </label>
                <label>
                  Biograficzny
                  <input type='checkbox' id='sidebar' name='biograficzny' value={18}/>
                </label>
                <label>
                  Western
                  <input type='checkbox' id='sidebar' name='western' value={19}/>
                </label>
                <label>
                  Film-Noir
                  <input type='checkbox' id='sidebar' name='film-noir' value={20}/>
                </label>
                <label>
                  Musical
                  <input type='checkbox' id='sidebar' name='musical' value={21}/>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}