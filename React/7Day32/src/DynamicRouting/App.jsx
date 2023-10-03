import {BrowserRouter} from "react-router-dom"
import { createContext, useState } from "react"
import {Routes, Route} from "react-router"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import "../App.css"

export const FahmiContext = createContext();

const Providernya = ({children}) => {
    const [navigate, setNavigate] = useState(0);

   return(
    <FahmiContext.Provider value={{navigate, setNavigate}}>
    {children}
    <p>navigate = {navigate}</p>
    </FahmiContext.Provider>
   );
}

export default function App(){
    
    return(
        <div>
        <Providernya>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:apaAja" element={<Product/>}/>
                <Route path="/About" element={<About/>}/>
            
                <Route path="/shop/ticket" element={<Ticket/>}/>
                <Route path="/shop/ewallet" element={<Ewallet/>}/>
                <Route path="/shop/pln" element={<PLN/>}/>
            </Routes>
        </BrowserRouter>
        </Providernya>
        </div>
    )
}

function Ticket(){
    return(
        <h1>Halaman Ticket</h1>
    )
}

function Ewallet(){
    return(
        <h1>Halaman Ewallet</h1>
    )
}

function PLN(){
    return(
        <h1>Halaman PLN</h1>
    )
}