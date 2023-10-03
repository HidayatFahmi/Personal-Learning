import {Link } from "react-router-dom"

export default function Shop(){

    return(
        <div>
                <div>
                    <div><Link to="/shop/gelas">Product Gelas</Link></div>
                    <div><Link to="/shop/topi">Product Topi</Link></div>
                    <div><Link to="/shop/sepatu">Product Sepatu</Link></div>
                </div>    
        </div>
    )
}

// function Gelas(){

//     return(
//         <div>
//            <p> Product Gelas</p>
//         </div>
//     )
// }

// function Topi(){

//     return(
//         <div>
//            <p> Product Topi</p>
//         </div>
//     )
// }

// function Sepatu(){

//     return(
//         <div>
//            <p> Product Sepatu</p>
//         </div>
//     )
// }

