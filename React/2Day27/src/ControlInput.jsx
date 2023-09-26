import { useState } from "react";

export default function Input(){
    const [inputVal, setInputVal] = useState("");
    const [input, setInput] = useState([]);

    function KetikAja(event){
        setInputVal(event.target.value);
        console.log(event);
    }

    const tambahArray = ()=>{
        const arrayBaru = [...input, inputVal];
        setInput(arrayBaru)
    }
    return(
        <div>
            <input type="text" value={inputVal} onChange={KetikAja} placeholder="Masukkan pesan"/>
            <h1>{inputVal}</h1>
            <button onClick={tambahArray}>Submit</button>
            <ul>
                {input.map(item => (
                    <li key="item">{item}</li>
                ))}
            </ul>
        </div>
    )
}