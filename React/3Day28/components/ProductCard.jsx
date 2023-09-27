export default function Product(){

    const blog = {
        id : "id",
        title : "Back to your mom",
        name : "fahmi hidayat",
        age : 24,
        nationality : "Indonesia"
    }

    const {title} = blog;

    return(
        <h1>{title}</h1>
    )
}