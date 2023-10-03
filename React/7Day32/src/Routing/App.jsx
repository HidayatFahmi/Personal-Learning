import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import "../App.css"

export default function App(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>Dashboard</p>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}