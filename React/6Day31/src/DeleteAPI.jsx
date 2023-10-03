import { useEffect, useState } from "react";
import gaya from "./ReadAPI.module.css"


export default function DeleteAPI(){

    const [data, setData] = useState(null);
    const [pictUrl, setPictUrl] = useState([]);

    useEffect(()=>{
        const fetchingData = async()=>{
            try{
                const resp = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods",{
                    method : 'GET',
                    headers : new Headers({
                        apiKey : "w05KkI9AWhKxzvPFtXotUva-",
                    }),
                });
                const respJson = await resp.json();
                setData(respJson.data);
            }catch(err){
                console.error(err);
            }
        }
        fetchingData();
    },[])

    const AddFood = async()=>{
        await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/create-food",{
            method : 'POST',
            headers : new Headers({
                apiKey : "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type" : "application/json",
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
            }),
            body : JSON.stringify({
                name : "Nasi Padang",
                description : "Masakan autentik jawa",
                imageUrl : "-",
                ingredients : [],
            })
        })
    }

    const UpdateFood = async(Idnya)=>{
        try{
            await fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${Idnya}`,{
                method : 'POST',
                headers : new Headers({
                    apiKey : "w05KkI9AWhKxzvPFtXotUva-",
                    "Content-Type":"application/json",
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
                }),
                body : JSON.stringify({
                    name : "Bika Ambon",
                    description : "Makanan khas ambon yang dibawa ke medan",
                    imageUrl : "-",
                    ingredients : []
                }),
            })
            alert("Updated")
        }catch(error){
            console.error(error);
        }
    }

    const DeleteFood = async (idnya) => {
        try{
            await fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${idnya}`, {
            method : 'DELETE',
            headers : new Headers({
                apiKey : "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type":"application/json",
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
            }),
        })
        alert("DELETED")
        }catch(err){
            console.error(err);
        }
    }

    const sortingImageUrl = (url) => {
        const validImageUrls = url?.filter(x => x.imageUrl.length > 5).map(x => x.imageUrl);
        setPictUrl(validImageUrls);
    }

    useEffect(()=>{
        sortingImageUrl(data);
    },[data])
    
    

    return(
        <div>
            <button onClick={AddFood}>Create</button>
            {/* {JSON.stringify(data)} */}
            {data?.map(food => (
                <div key={food.id} className={gaya.borderIn}>
                    <button onClick={()=>UpdateFood(food.id)}>Update</button>
                    <button onClick={()=>DeleteFood(food.id)}>Delete</button>
                    <h2>{food.name}</h2>
                    <h4>{food.description}</h4>
                    <img src={food.imageUrl} alt="" />
                    <h5>{food.ingredients}</h5>
                    <p>{food.rating}</p>
                    <p>{food.totalLikes}</p>
                </div>
            ))}
            <ul>
                <h4>Image URL</h4>
                {pictUrl?.map(pict => (
                    <li key={pict}>
                        {pict}
                    </li>
                ))}
            </ul>
        </div>
    )
}