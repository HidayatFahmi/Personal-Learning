import { useState } from "react"

export default function Konter(){
    const [nilai, setNilai] = useState(0);
    const [show, setShow] = useState(false);

    const Tambahin = () =>{
        setNilai(x => x+1)
    }

    const Kurangin = () =>{
        setNilai(y => y-1)
    }

    return(
        <div>
            {show? 
            <div>
                <button onClick={Kurangin}>-</button>
                <span>{nilai}</span>
                <button onClick={Tambahin}>+</button>
            </div> :
            <div>
                {null}
            </div>}
            
            <br />
            <button onClick={()=>setShow(tampil => !tampil)}>{show? "Hide":"Show"}</button>
        </div>
    )
}