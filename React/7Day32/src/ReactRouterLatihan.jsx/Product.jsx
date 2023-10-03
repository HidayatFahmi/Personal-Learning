import { useParams } from "react-router"

export default function Product(){

    const {idNya} = useParams();

    return(
        <div>
            <div>Product {idNya}</div>
        </div>
    )
}