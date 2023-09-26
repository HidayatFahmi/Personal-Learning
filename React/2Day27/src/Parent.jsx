import Description from "./Child";
import { useState } from "react";

export default function Parent(){
    const [nilai, setNilai] = useState(0);

    return(
        <div>
            <button onClick={()=> setNilai(x => x+1)}>count parent: {nilai}</button>
            <Description 
            counterFromParent={nilai} 
            setterParent={setNilai}/>
        </div>
    )
}