import { useState } from "react"

export default function User(){

    const [users, setUsers] = useState([{
        username : "andi",
        email : "xxx@gmail.com"
    }]);

    const user = {
        username : "User",
        email : "User"
    }

    const handleUser = (account) => {
        const addAccount = [...users,account]
        setUsers(addAccount)
    }

    const handleDelete = (deleteUser) => {
        const updateUsers = users.filter(users => users !== deleteUser);
        return setUsers(updateUsers);
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={()=>handleUser(user)}>Add</button>
            <div className="user">
                {users?.map((userx, index) => (
                    <div key={index}>
                        <h4>Username : {userx.username+index}</h4>
                        <h4>Email : {userx.email+index}@gmail.com</h4>
                        <button className="btn btn-warning">Edit</button>
                        <button className="btn btn-secondary" onClick={()=>handleDelete(userx)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}