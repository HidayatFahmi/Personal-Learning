import Home from './components/Home'
import Film from './components/Film'
import Vehicles from './Vehicles'
import {Link, useNavigate} from "react-router-dom"
import {Routes, Route} from "react-router"
import { useState, useEffect, createContext, useContext } from 'react'
import "./App.css"


export const starwarsContext = createContext();

export const useStarwarsContext = () => {
  return useContext(starwarsContext);
}

function App() {

    const [starshipsList, setStarshipsList] = useState([]);
    const [vehiclesList, setVehiclesList] = useState([]);
    const [charactersList, setCharactersList] = useState([]);
    const [planetsList, setPlanetsList] = useState([]);
    const [speciesList, setSpeciesList] = useState([]);
    const [clickFilm, setClickFilm] = useState(false)
    const [idFilm, setIdFilm] = useState(0);

    const navigate = useNavigate();

      useEffect(()=> {
        const fetchingDataFilm = async() => {  
        console.log(idFilm);
       try{
            const resp = await fetch(`https://swapi.dev/api/films/${idFilm}/`);
            const respJson = await resp.json();
            const starships = respJson.starships;
            const vehicles = respJson.vehicles;
            const characters = respJson.characters;
            const planets = respJson.planets;
            const species = respJson.species;

            const starshipPromises = starships.map(async(starship) => {
                const resp = await fetch(`${starship}`);
                return resp.json();
            });
    
            const vehiclePromises = vehicles.map(async(vehicle)=> {
                const resp = await fetch(`${vehicle}`);
                return resp.json();
            });

            const characterPromises = characters.map(async(character)=>{
                const resp = await fetch(`${character}`);
                return resp.json();
            })
            const planetPromises = planets.map(async(planet)=>{
                const resp = await fetch(`${planet}`);
                return resp.json();
            })

            const speciesPromises = species.map(async(species)=>{
                const resp = await fetch(`${species}`);
                return resp.json();
            })
    
            const [starshipData, vehicleData, characterData, planetData,speciesData]= await Promise.all([
                Promise.all(starshipPromises),
                Promise.all(vehiclePromises),
                Promise.all(characterPromises),
                Promise.all(planetPromises),
                Promise.all(speciesPromises)
            ])
    
            setStarshipsList(starshipData);
            setVehiclesList(vehicleData);
            setCharactersList(characterData);
            setPlanetsList(planetData);
            setSpeciesList(speciesData)
        }
   
       catch(error){
        console.error(error);
       }
    }
        console.log('click film', clickFilm)
       if(clickFilm){
         fetchingDataFilm();
         navigate(`./film/${idFilm}`);
       }

    },[clickFilm])

    const backData = () => {
      setVehiclesList([]);
      setCharactersList([]);
      setSpeciesList([]);
      setPlanetsList([]);
      setStarshipsList([]);
      setClickFilm(false);
    }


  return (
    <>
    <starwarsContext.Provider value={{starshipsList, vehiclesList, charactersList, speciesList, planetsList}}>
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
                              <Link className="nav-link" aria-current="page" to="/" onClick={backData}>Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/starships/all">Starships</Link>
                            </li>
                            <li className='nav-item'>
                              <Link className="nav-link" to="/vehicles/all">Vehicles</Link>
                            </li>
                            <li className='nav-item'>
                              <Link className="nav-link" to="/characters/all">Characters</Link>
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
        <Routes>
            <Route path="/" element={<Home  setIdFilm={setIdFilm} setClickFilm={setClickFilm}/>}/>
            <Route path="/film/:filmId" element={<Film />}/>
            <Route path="/vehicles/all" element={<Vehicles/>}/>
        </Routes>
        </div>                  
    </starwarsContext.Provider>         
    </>
  )
}

export default App

