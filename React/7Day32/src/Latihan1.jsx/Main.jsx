import { createContext, useState } from "react"
import Login from "./Login";
import "../App.css"
import ProductCard from "./ProductCard";


export default function App(){

    return(
        <div>
            <Providernya>
                <Login/>
                <ProductCard/>
            </Providernya>
        </div>
    )
}

const UserContext = createContext();

const Providernya = ({children}) => {
    const [login, setLogin] = useState(false);

    return(
    <UserContext.Provider value={{login, setLogin}}>
        {children}
    </UserContext.Provider>
    )
}