import { useEffect, useState } from "react";
import gaya from "./ReadAPI.module.css"

export default function UpdateAPI(){


    const [data, setData] = useState(null);

   useEffect(()=>{
    const FetchData = async()=>{
        try{
            const resp = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods",{
                method:"GET",
                headers : new Headers({
                    apiKey : "w05KkI9AWhKxzvPFtXotUva-"
                })
            })
            const respJson = await resp.json();
            setData(respJson.data);
            // alert("Sukses")
        }catch(errorX){
            console.log(errorX)
        }
    };

    FetchData();

   },[])

   const AddFood = async()=>{
    try{
        await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/create-food", {
            method : "POST",
            headers : new Headers({
                apiKey : "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type" : "application/json",
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
            }),
            body : JSON.stringify({
                name : "Pempek Palembang",
                description : "Pempek Kapal selam gurih",
                imageUrl : "",
                ingredients : [],
            })
        })
    }catch(err){
        console.error(err);
    }
   }

   const UpdateFood = async(foodId)=>{
    await fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${foodId}`,{
        method:"POST",
        headers:new Headers({
            apiKey : "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type" : "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
        }),
        body : JSON.stringify({
            name : "gangan",
            description : "gangan telah diupdate",
            imageUrl : "-",
            ingredients : [],
        })
    })
   }

   return(
    <div>
        <button onClick={AddFood}>Add </button>
        {/* <button onClick={UpdateFood}>Update</button> */}
        {data?.map(food => (
            <div key={food.id} className={gaya.borderIn}>
                <button onClick={()=>UpdateFood(food.id)}>Update</button>
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
   )


}