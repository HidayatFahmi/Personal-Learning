import axios from "axios";
import { useState } from "react"
import { onToken } from "../Action/authAction";
import { useDispatch } from "react-redux";

export default function Login(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const dispatch =  useDispatch();

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const getToken = async() => {
        try{
            const res = await axios.post("https://reqres.in/api/login", {
                email : email,
                password : pass,
            })
            const data = res.data.token;
            console.log(`Token = ${data}`);
            dispatch(onToken(data));
        }
        catch(error){
            console.error(error)
        }
      }  

    return(
        <div>
            <div className="form-login">
                <input className="d-flex" type="text" placeholder="Email" value={email} onChange={handleEmail}/>
                <input className="d-flex" type="text" placeholder="Password" value={pass} onChange={handlePass}/>
                <br />
                <button className="btn btn-primary" onClick={getToken}>Submit</button>
            </div>
        </div>
    )
}