import { useContext } from "react"
import { UserContext } from "./Main";
import PromoDetail from "./PromoDetail";

export default function ProductCard(){
    const{login} = useContext(UserContext);

    return(
        <div>
            <div>
                <h3>Botol Minum Kantor</h3>
                <p>Rp 230.000</p>
                <p>⭐⭐⭐⭐⭐</p>
            </div>
            {login&& 
            <PromoDetail/>
            }
        </div>
    )
}