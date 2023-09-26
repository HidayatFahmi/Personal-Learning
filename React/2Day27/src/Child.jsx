export default function Description({counterFromParent, setterParent}){

    return(
        <div>
       <div> Counter child: {counterFromParent+10}</div>
       <button onClick={()=>setterParent(counterFromParent-10)}>Kurang 10, child : {counterFromParent}</button>
        </div>
    )
}