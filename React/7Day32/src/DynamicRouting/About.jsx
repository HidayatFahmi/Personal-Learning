
import { useNavigate } from "react-router"

export default function About(){
    const navigate = useNavigate();

    const backTo = ()=> {
        navigate(-1);
    }

    return(
        <div>
            <button onClick={backTo}>Back</button>
            <p>Halaman About</p>
        </div>
    )
}