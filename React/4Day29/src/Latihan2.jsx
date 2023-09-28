import { useState } from "react";
import Children from "./Latihan3Props";

export default function Latihan2 (){

    const [show, setShow] = useState(false);
    const [nilai, setNilai] = useState(0);

    const Kali2 = () => {
        setNilai(nilai*2);
    }

    return(
        <div>
            <div>
              {show && 
                <><button onClick={()=>setNilai(x => x-1)}>-</button>
                {nilai}
                <button onClick={()=>setNilai(x => x+1)}>+</button></>
              }
            </div>
            <div>
                <button onClick={()=>setShow(y => y = !y)}>{show? "Hide" : "Show"}</button>
                <Children nilai = {nilai} Kali2 = {Kali2}/>
            </div>
        </div>
    )
}