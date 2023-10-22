import { useSelector } from "react-redux"

export default function List(){

    const carsList = useSelector(store => store.cars);

    return(
        <div>
            <h3>List of cars</h3>
            <ul style={{listStyleType : "none"}}>
                {carsList?.map((car, index) => (
                    <li key={index}>{car.name}</li>
                ))}
            </ul>
        </div>
    )
}