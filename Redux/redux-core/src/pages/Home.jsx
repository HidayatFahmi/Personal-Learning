
import Card from "../components/Card";
import List from "../components/List";
import { useSelector } from "react-redux";


export default function Home(){

    const state = useSelector(state => state.cars);
    console.log("store", state)


    return(
        <div className="border border-3 border-dark">
            <p>Home</p>
            <button>Login</button>
            <Card/>
            <List/>
        </div>
    )
}