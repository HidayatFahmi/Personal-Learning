import { useState, useEffect} from "react";



export default function Latihan1(){

    const [hitung, setHitung] =  useState(0);
    const [teks, setTeks] = useState("");

    useEffect(() => {
      if(teks.length == hitung && teks.length !== 0){
        alert("isi teks :", teks)
      }

    }, [hitung, teks])
    

    return(
        <div>
            <div>
                <h3>Input</h3>
                <input type="text"  value={teks} placeholder="Input Teks" onChange={(e)=>setTeks(e.target.value)}/>
            </div>

            <div>
                <button onClick={()=>setHitung(x => x-1)}>-</button>
                 <span style={{marginInline : "10px"}}>{hitung}</span>
                <button onClick={()=>setHitung(x => x+1)}>+</button>
            </div>
        </div>
    )
}