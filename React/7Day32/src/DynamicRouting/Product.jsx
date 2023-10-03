import { useParams } from "react-router"

export default function Product(){
    const {apaAja} = useParams()

    return(
        <div>
            <p>Product dengan nama {apaAja}</p>
        </div>
    )
}