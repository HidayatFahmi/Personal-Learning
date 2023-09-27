
export default function Drivers(){
    
    const aplikasi = {
        name : "Ojek Gendong",
        drivers : [
            {name : "budi", verified : true, rating: 4},
            {name : "anwar", verified : true, rating : 5},
            {name : "joko", verified : false, rating : 3}
        ]
    }

    const generateRating =(driver)=>{
        return "⭐".repeat(driver.rating);
    }

    return(
        <div>
            <h3>{aplikasi.name}</h3>
            <h4>List Drivers</h4>
            <div>
               {aplikasi.drivers.map(driver => (
                <div key={driver}>{driver.name}, {driver.verified && "(V)"}, Rating : {generateRating(driver)}</div>
               ))}
            </div>

            <div>
                <h3>Coba</h3>
                {Object.keys(aplikasi.drivers[0]).map(driver => (
                    <div key="driver">{driver} : {aplikasi.drivers[0][driver]}</div>
                ))}
            </div>
        </div>
    )
}