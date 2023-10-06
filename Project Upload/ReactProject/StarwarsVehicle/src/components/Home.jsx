import { useEffect, useState } from "react"
import "./Home.css"

export default function Home({setIdFilm, setClickFilm}){

    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchingData = async()=>{
           try{
            const resp = await fetch("https://swapi.dev/api/films/");
            const respJson = await resp.json();
            setData(respJson.results)
           }catch(error){
            console.error(error)
           }
        }

        fetchingData();
    },[])

    const handleFilm = (id) => {
        setIdFilm(id);
        setClickFilm(true);
    }

    return(
        <div className="section main-container">
            <div className="container banner text-white ">
            <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="slides-with-controls">
                    <div className="carousel-indicators">
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="0" aria-current="true" aria-label="Slides 1"></button>
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="1" aria-current="true" aria-label="Slides 2"></button>
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="2" aria-current="true" aria-label="Slides 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="banner.jpg" alt="mana" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="banner2.jpg" alt="mana" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="banner3.jpg" alt="mana" className="d-block w-100"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#slides-with-controls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#slides-with-controls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </div>
            </div>
            </div>
            </div>
            {/* End of banner */}
            <div className="container-fluid card-container films-list mt-5">
                <div className="row justify-content-center">
                    {data?.map(film => (
                    <div className="col-md-2" key={film.episode_id} onClick={()=>handleFilm(film.episode_id)}>
                    <div className="card text-bg-dark">
                        <h6 className="card-header">{film.title}</h6>
                        <img src="./banner.jpg" alt="" />
                        <div className="card-body card-img-overlay">
                    
                        </div>
                        <div className="card-footer">Director : {film.director}</div>
                        <a href="#" className="btn btn-warning btn-sm">Detail</a>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* end of card */}


        </div>
    )
}

