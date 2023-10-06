import "./Film.css"
import { useContext } from "react"
import { starwarsContext } from "../App"

export default function Film(){

    const{starshipsList, vehiclesList, charactersList, planetsList, speciesList} = useContext(starwarsContext);
    const starshipsImage1 = [
        "https://i.pinimg.com/originals/f0/91/fb/f091fb79387d4273782dae34348d9d49.jpg",
        "https://i.pinimg.com/originals/8d/4a/d0/8d4ad0c62060073bfdc50e71d15e825b.jpg",
        "https://i.pinimg.com/originals/74/bc/f2/74bcf26e2206768969782144da978635.png",
        "https://i.pinimg.com/originals/4d/5e/4a/4d5e4a6e5a5d8ab464af148afd741912.png",
        "https://i.pinimg.com/originals/3e/fe/ad/3efead857a095a7851a0a05f5bdb603b.jpg",
        "https://i.pinimg.com/originals/14/73/5e/14735ed368503c5600cdfd5cd494f30b.jpg",
        "https://i.pinimg.com/originals/2b/06/57/2b0657538d31c5172e3502f364882f8b.jpg",
        "https://i.pinimg.com/originals/31/a8/97/31a8974f696336436868fe7e8a8e283f.jpg"
    ];

    const vehiclesImage1 = [
        "https://i.pinimg.com/originals/97/ac/3b/97ac3b51756d4d41ef26bed8e37dda2f.jpg",
        "https://i.pinimg.com/originals/ea/1b/37/ea1b375e13f5b41203895d873acdc648.jpg",
        "https://i.pinimg.com/originals/f5/e7/17/f5e717a4bfd2a19a5da2ffcc22e6775c.jpg",
        "https://i.pinimg.com/originals/da/fb/39/dafb395d626771b9ef4da742e4cc8502.jpg",


    ];

    const charactersImage1 = [
        "https://i.pinimg.com/originals/23/fe/f1/23fef1c6386fa5865042984890ef28bd.jpg",
        "https://i.pinimg.com/originals/10/83/ac/1083acedd829fa3d5d8757147fd3950b.jpg",
        "https://i.pinimg.com/originals/ce/13/8e/ce138ea7e52e45e6a52a11d3a1334a02.jpg",
        "https://i.pinimg.com/originals/30/f2/6b/30f26b130eaebe58226e388960a1af9a.jpg",
        "https://i.pinimg.com/originals/be/c8/fb/bec8fbee31db24db3073fa63c5f0ab52.jpg",
        "https://i.pinimg.com/originals/21/43/84/214384242fe58a3b4e52c6de9d3721de.jpg",
        "https://i.pinimg.com/originals/f5/b8/ca/f5b8ca268a10a6d32c8e27631f69800f.jpg",
        "https://i.pinimg.com/originals/34/52/6b/34526beba0154203fb8299e32c62e089.jpg",
        "https://i.pinimg.com/originals/0c/09/5e/0c095eb155aa2eabe8cd89682860d482.jpg",
        "https://i.pinimg.com/originals/40/e3/e1/40e3e14ae4d08e81d7e1ef3feeca9ca2.jpg",
        "https://i.pinimg.com/originals/ec/77/01/ec7701e07ca3221cd4b72925c23f2877.jpg",
        "https://i.pinimg.com/originals/b9/12/46/b91246168d24dbc2181fccb0634be234.jpg",
        "https://i.pinimg.com/originals/90/2c/b2/902cb28ea329e1dcabd6e8e0e768f94f.jpg",
        "https://i.pinimg.com/originals/18/69/6c/18696c485971c35b47b26c1c3b3d2818.jpg",
        "https://i.pinimg.com/originals/ee/c7/57/eec75720f048dedbf5900ee091ed3be6.jpg",
        "https://i.pinimg.com/originals/47/06/25/4706252bb9eb30b8c0195bfac82f8dc9.jpg",
        "https://i.pinimg.com/originals/79/91/3b/79913bc8285fe62d719196f705951b86.png",
        "https://i.pinimg.com/originals/52/b0/09/52b00954d2fb0e62a10ba9523a6e59ff.jpg",

    ]

    const planetsImage1 = [
        "https://i.pinimg.com/originals/05/5b/2f/055b2f3e23150b436f0ba6fc395f29dd.jpg",
        "https://i.pinimg.com/originals/21/b5/92/21b592c4448534cbc2268b6bec70f085.jpg",
        "https://i.pinimg.com/originals/b5/74/6c/b5746c4274dbf93e69b7e900396c1ff4.jpg",
    ]

    const speciesImages1 = [
        "https://i.pinimg.com/originals/7f/5c/7e/7f5c7e697a4c50c8b29df852a3778734.jpg",
        "https://i.pinimg.com/originals/ce/13/8e/ce138ea7e52e45e6a52a11d3a1334a02.jpg",
        "https://i.pinimg.com/originals/53/24/7d/53247d6559f478fc5aa286cd4cbb71f0.jpg",
        "https://i.pinimg.com/originals/43/91/64/43916429c0aa454cd91221853636e227.jpg",
        "https://i.pinimg.com/originals/54/7b/f1/547bf168e305dfacb0865a49feb7c84b.png",
    ]

    return(
        <>
            <div className="section">
                <div className="container banner-film1">
                </div>
                {/* end of banner */}
                <div className="container starships">
                    <div className="title"><h2>Starships</h2></div>
                    <hr />
                    <div className="row justify-content-center">
                    {starshipsList.map((starship, index) => (
                        <div className="col-md-3 mb-3" key={starship.name}>
                            <div className="card">
                                <div className="card-header"><h5>{starship.name}</h5></div>
                                <div className="card-body">
                                    <img  className="w-100" src={starshipsImage1[index]} alt="mana??" />
                                </div>
                                <button className="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                {/* End of starships */}
                <div className="container vehicles">
                    <div className="title"><h2>vehicle</h2></div>
                    <hr />
                    <div className="row justify-content-center">
                    {vehiclesList.map((vehicle,index) => (
                        <div className="col-md-3 mb-3" key={vehicle.name}>
                            <div className="card">
                                <div className="card-header"><h5>{vehicle.name}</h5></div>
                                <div className="card-body">
                                    <img className="w-100" src={vehiclesImage1[index]} alt="mana??" />
                                </div>
                                <button className="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                {/* End of Vehicle */}
                <div className="container characters">
                    <div className="title"><h2>Characters</h2></div>
                    <hr />
                    <div className="row justify-content-center">
                    {charactersList.map((character, index) => (
                        <div className="col-md-3 mb-3" key={character.name}>
                            <div className="card">
                                <div className="card-header"><h5>{character.name}</h5></div>
                                <div className="card-body">
                                    <img className="w-100" src={charactersImage1[index]} alt="mana??" />
                                </div>
                                    <div className="btn btn-primary">Details</div> 
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* End of characters */}
                <div className="container planets">
                    <h2>Planets</h2>
                    <hr />
                    <div className="row justify-content-center">
                        {planetsList.map((planet, index) => (
                            <div className="col-md-3 mb-3" key={planet.name}>
                                <div className="card">
                                    <div className="card-header"><h5>{planet.name}</h5></div>
                                    <div className="card-body">
                                        <img className="w-100" src={planetsImage1[index]} alt="mana??" />
                                    </div>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* end of planet */}
                <div className="container species">
                    <div className="title"><h2>Species</h2></div>
                    <hr />
                    <div className="row jsutify-content-center">
                        {speciesList.map((spesies, index) => (
                            <div className="col-md-3 mb-3" key={spesies.name}>
                                <div className="card">
                                    <div className="card-header"><h5>{spesies.name}</h5></div>
                                    <div className="card-body">
                                        <img className="w-100" src={speciesImages1[index]} alt="mana??" />
                                    </div>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End of species */}
            </div>
        </>
    )
}
