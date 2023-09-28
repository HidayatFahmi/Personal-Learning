import Latihan41 from "./Latihan41";
import { useState } from "react";

export default function Latihan4(){

    const [teks, setTeks] = useState("");
    const [show, setShow] = useState(false);

    const InputTeks = (event) => {
        setTeks(event.target.value);
    }

    return(
        <div>
            <input type="text" value={teks} placeholder="text" onChange={InputTeks}/>
            <Latihan41 teksing={teks} showing={show} setShowing={setShow}/>
        </div>
    )
}