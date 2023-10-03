import Home from './components/Home'
import "./App.css"

function App() {

  return (
    <>
               <div className="section">
                <div className="row">
                    <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Starwars</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                                      <li className="nav-item">
                                      <a className="nav-link" aria-current="page" href="#">Home</a>
                                      </li>
                                      <li className="nav-item">
                                      <a className="nav-link" href="#">Starships</a>
                                      </li>
                                      <li className='nav-item'>
                                        <a href="#" className='nav-link'>Vehicle</a>
                                      </li>
                                      <li className='nav-item'>
                                        <a href="#" className='nav-link'>Characters</a>
                                      </li>
                                  </ul>
                                  <form className="d-flex w-50 ms-5" role="search">
                                      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                                      <button className="btn btn-outline-success" type="submit">Search</button>
                                  </form>
                                </div>
                        </div>
                    </nav>
                    </div>
                </div>

                {/* Navbar end */}

                <div className='home'>
                  <Home/>
                </div>
            </div>          
    </>
  )
}

export default App
