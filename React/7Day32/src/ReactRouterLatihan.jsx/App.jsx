import {BrowserRouter, Link} from "react-router-dom"
import {Routes, Route} from "react-router"
import Home from "./Home"
import Shop from "./Shop"
import Product from "./Product"
import "../App.css"


export default function App(){

    return(
        <div>
            <BrowserRouter>
                <nav>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/shop">Shop</Link></button>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop/" element={<Shop/>}/>
                    <Route path="/shop/:idNya" element={<Product/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}