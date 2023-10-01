import { useEffect } from "react";
import { useState } from "react";


export default function TarikAPI(){

    const [data, setData] =  useState(null);
    const [hitung, setHitung] = useState(0);
    const [input, setInput] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))

        console.log("use effect counter : ", hitung);
        if(hitung >= 10) alert('kebanyakan')
    },[hitung, input])

    return(
        <div>

            <div>
                <p>{JSON.stringify(data)}</p>
            </div>

            <div>
                <h3>Coba dependency</h3>
                <button onClick={()=> setHitung(x => x-1)}>-</button>
                <span style={{marginInline : '20px'}}>{hitung}</span>
                <button onClick={()=> setHitung(x => x+1)}>+</button>
            </div>

            <div>
                <h3>Input Dependency</h3>
                <input type="text" value={input} onChange={(y)=> setInput(y.target.value)}/>
            </div>
        </div>
    )
}