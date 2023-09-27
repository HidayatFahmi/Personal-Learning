import { useState } from "react";

export default function EventReact(){

    const [teks, setTeks] = useState("");
    const [tampil, setTampil] = useState(false);

    const InputTeks =(event) => {
        setTeks(event.target.value);
    }

    const Tampilkan = () => {
        setTampil(x => !x)
    }

    return(
        <div>
            <input type="text" onChange={InputTeks}  placeholder="teks something" value={teks}/>
            <br />
            <button onClick={Tampilkan}>{tampil? "Hide":"Show"}</button>
            <br />
            {tampil && teks}
        </div>
    )
}