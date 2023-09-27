export default function Objek(){

    const dataDiri = {
        nama : "fahmi hidayat",
        asal : "bangka belitung",
        umur : 24,
        TTL : "22 Des 1998"
    }
    const {umur, TTL} = dataDiri;

    const arrayOfRockets = [1,2,3];

    const generateStars = (banyakRocket) => {
        return "🚀".repeat(banyakRocket);
    }

    return(
        <div>
            <div>{dataDiri.nama}</div>
            <div>{dataDiri.asal}</div>
            <div>{umur}</div>
            <div>{TTL}</div>

            <div>
                <h2>Render Object Iteratif</h2>
                {Object.keys(dataDiri).map(kunci =>(
                    <div key={kunci}>{kunci} : {dataDiri[kunci]}</div>
                ))}
            </div>
            
            <div>
                <h2>Generate function</h2>
                {arrayOfRockets.map(rocket => (
                    <div>{generateStars(rocket)}</div>
                ))}
            </div>
        </div>
    )
}