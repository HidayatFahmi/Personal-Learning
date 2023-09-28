import { useEffect, useState } from "react";


export default function UseEffect1(){

    const [tulisan, setTulisan] = useState("");

    const InputTulisan = (event) => {
    setTulisan(event.target.value);
    }

    useEffect(()=>{
        const isTulisan = localStorage.getItem('tulisan');
        if(isTulisan) setTulisan(isTulisan)
    }, [])

    return(
        <div>
            <input type="text" value={tulisan} placeholder="text something" onChange={InputTulisan}/>
            <div>
                {tulisan}
            </div>
            <button onClick={()=>localStorage.setItem("tulisan", tulisan)}>save in local storage</button>
        </div>
    )
}