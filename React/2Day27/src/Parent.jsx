import Description from "./Child";
import { useState } from "react";
import TeksAja from "./Teks";
import Teks2 from "./Teks2";

export default function Parent(){
    const [nilai, setNilai] = useState(0);
    const [teks, setTeks]= useState('');

    const InputTeks = (event)=>{
        setTeks(event.target.value);
    }

    return(
        <div>
            <button onClick={()=> setNilai(x => x+1)}>count parent: {nilai}</button>
            <br/>
            <input type="teks" value={teks} onChange={InputTeks}/>
            <div>
                Input parent : {teks}
            </div>
            {/* <Description counterFromParent={nilai} setterParent={setNilai}/> */}
            <TeksAja teksing={teks} setTeksing={setTeks}/>
            <Teks2 teksing={teks}/>
        </div>
    )
}