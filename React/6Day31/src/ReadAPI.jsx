// https://api-bootcamp.do.dibimbbing.id/api/v1/foods
import gaya from "./ReadAPI.module.css"
import { useEffect, useState } from "react";

export default function ReadAPI(){

    const [data, setData] =  useState(null);

    useEffect(()=>{
     
        const ReadData = async()=>{
        try{
            const resp = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods",{
            method : 'GET',
            headers : new Headers({apiKey : 'w05KkI9AWhKxzvPFtXotUva-'}),
            })
            const respJson = await resp.json();
            setData(respJson.data);

            }catch(errorX){
            console.error(errorX);
        }
        };

        ReadData();
    },[])

    return(
        <div>
            {/* {JSON.stringify(data)} */}
            <div>
                {data.map(food=>(
                    <div key={food.id} className={gaya.borderIn}>
                        <h2>{food.name}</h2>
                        <h4>{food.description}</h4>
                        <img src={food.imageUrl} alt="" />
                        <h5>{food.ingredients}</h5>
                        <p>{food.rating}</p>
                        <p>{food.totalLikes}</p>
                        <p>{food.id}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}