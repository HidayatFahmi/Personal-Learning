import { useEffect, useState } from "react"


export default function Home(){

    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchingData = async()=>{
           try{
            const resp = await fetch("https://swapi.dev/api/vehicles/");
            const respJson = await resp.json();
            setData(respJson)
           }catch(error){
            console.error(error)
           }
        }

        fetchingData();
    },[])

    return(
        <div>
            
            {JSON.stringify(data)}
        </div>
    )
}