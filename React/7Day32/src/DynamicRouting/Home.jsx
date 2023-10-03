import { Link, useNavigate} from "react-router-dom"
// import { useContext } from "react";
// import { FahmiContext } from "./App";

export default function Home(){
    const navigate =  useNavigate();
    // const {setNavigate} = useContext(FahmiContext)

    const handleNavigate = () => {
        navigate("/about")
    }

    const navigateTo = () => {
        navigate(+1)
        // setNavigate(navigate)
    }

    const navigateBack = () => {
        navigate(-1)
        // setNavigate(navigate)
    }

    return(
        <div>
            <Link to="/about">About</Link>
            <button onClick={handleNavigate}>About navigate</button>
            <br />
            <button onClick={navigateTo}>Next</button>
            <button onClick={navigateBack}>Back</button>

            <p>Halaman Home</p>
            <Link to="product/Botol Minum">
                <h1>Botol Minum</h1>
                <h2>Rp 75.000</h2>
            </Link>
        </div>
    )
}