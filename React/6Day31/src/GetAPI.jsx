import { useState } from "react";
import { useEffect } from "react"


export default function CobaAPI1(){

    const[data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchingData = async () => {
            try{
                const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
                const respJson = await resp.json();
                setData(respJson);

            } catch(errorX){
               setError(errorX.message);
               alert("Failed")
            }
        }

        fetchingData();
    },[])

    return(
        <div>
            {error? <div>{error}</div> : <h1>Success</h1>}
            {data.map(x => (
                <div key={x.title}>{x.title}</div>
            ))}
        </div>
    )
}