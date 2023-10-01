import { useEffect, useState } from "react";


export default function CobaAPI1(){

    const [data, setData] = useState([]);
    const [error, setError] = useState("")

    useEffect(()=>{
        const fetchJSONPlaceholder = async () => {
            try{
                const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
                const jsonResp = await resp.json();
                setData(jsonResp);
            }catch(xx){
                setError(xx.message)
            }
        };

        fetchJSONPlaceholder();
    },[])

    return(
        <div>
            {error? 
            (<p>
                {error}
            </p>):
            (
                <ul>
                {data.map((post) => (
                    <li key={post.id} style={{listStyleType:"none"}}>
                        <div>{post.userId}. {post.title}</div>
                    </li>
                ))}
            </ul>
            )}     
        </div>
    )
}


// import { useEffect, useState } from "react";

// export default function CobaAPI1() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJSONPlaceholder = async () => {
//       try {
//         const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!resp.ok) {
//           throw new Error("Gagal mengambil data dari JSONPlaceholder");
//         }
//         const jsonResp = await resp.json();
//         setData(jsonResp);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchJSONPlaceholder();
//   }, []);

//   return (
//     <div>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
