import { useEffect, useState } from "react";

export default function Users(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const FetchingUsersAPI = async () => {
            try{
            await fetch("https://jsonplaceholder.typicode.com/users")
            .then(xx => xx.json())
            .then(yy => setData(yy))
            setLoading(true)
            }catch(error){
                console.log(error.message)
            }finally{
                setLoading(false);
            }
        }

        FetchingUsersAPI();
    },[])

    return(
        <div>
            {/* { JSON.stringify(data)} */}
            {loading? <div>Loading...</div>: <h1>Success</h1> }
            <div className="container">
                        <table border={1} cellPadding={3} >
                            <thead>
                                <th style={{width:"40px"}}>ID</th>
                                <th style={{width:"150px"}}>Name</th>
                                <th style={{width:"150px"}}>Username</th>
                                <th style={{width:"200px"}}>Email</th>
                                <th style={{width:"150px"}}>Address</th>
                                <th style={{width:"200px"}}>Phone</th>
                                <th style={{width:"150px"}}>Website</th>
                                <th style={{width:"150px"}}>Company</th>
                            </thead>
                            <tbody>
                                {data.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
    )
}