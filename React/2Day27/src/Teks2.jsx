import { useState } from "react";

export default function Teks2({teksing}){

const[show, setShow] = useState(false);

return(
    <div>
        <button onClick={()=>setShow(tampil => !tampil)}>{show? "Hide" : "Show"}</button>
        {show?
        <div>
            tampil : {teksing}
        </div>:
        <div>
          {null}  
        </div>}
    </div>
)
}