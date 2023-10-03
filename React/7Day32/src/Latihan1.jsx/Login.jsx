import { useContext } from "react"
import { UserContext } from "./Main";

export default function Login(){
    const {setLogin} = useContext(UserContext);

    const HandleLogin = () => {
        setLogin(true);
        alert("Login Berhasil")
    }

    return(
        <div>
            <button onClick={HandleLogin}>Login</button>
            <button onClick={()=> setLogin(false)}>Logout</button>
        </div>
    )
}