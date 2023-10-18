// import './App.css'

import { useState } from "react"
import { useQuery} from 'react-query'

function App() {

  const [result, setResult] = useState(null);

  const {data, isLoading, error} = useQuery('films', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const resp = await fetch("https://swapi.dev/api/films/");
    const respJson = await resp.json();
    return respJson.results;
   })

   setResult(data);
  

   if(isLoading){
    return <div>Loading</div>
   }

   if(error){
    return <div>Error : {error.message}</div>
   }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* enf og navbar */}
      <div className="content">
        {result?.map((film, index) => 
          <div key={index}>
            {film.title}
            {JSON.stringify(data)}
          </div>)}
      </div>
      <div className="container-fluid film-footer bg-dark text-white d-flex justify-content-center">
        <h4>Youre welcome to explore...</h4>
        <div className="icon">
            <div className="instagram"><i className="bi bi-instagram"></i></div>
        </div>
      </div>
    </>
  )
}

export default App
