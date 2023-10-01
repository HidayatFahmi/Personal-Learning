import { useEffect } from "react";
import { useState } from "react";


export default function UseEffectCleanup(){

    const [hitung, setHitung] = useState(0);
    const [input, setInput] = useState('');
    const [data, setData] =  useState(null);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json));

        return () => {
            alert('komponen akan dihilangkan');
        };
    },[hitung, input])

    return(
        <div>
            <div>
                <h3>Coba dependency</h3>
                <button onClick={()=> setHitung(x => x-1)}>-</button>
                <span style={{marginInline : '20px'}}>{hitung}</span>
                <button onClick={()=> setHitung(x => x+1)}>+</button>
            </div>

            <div>

                <div>
                    <h3>Fetch</h3>
                    <p>{JSON.stringify(data)}</p>
                </div>

                <h3>Input Dependency</h3>
                <input type="text" value={input} onChange={(y)=> setInput(y.target.value)}/>
            </div>
        </div>
    )
}