export default function ArrayRendering(){

    const makanan = ["nasi", "gandum", "Roti", "Jagung", "⭐⭐🌟🌟⭐"];

    return(
        <div>
            <ul>
                {makanan.map(makan => 
                <li key="makan">makanan : {makan}</li>  
                )}
            </ul>

        </div>
    )
}