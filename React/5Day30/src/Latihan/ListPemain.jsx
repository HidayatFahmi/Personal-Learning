import { useState } from "react";
import gaya from "./ListPemain.module.css"
// import col,row, Container from "react-bootstrap"

export default function ListPlayer(){

    const [player, setPlayer] = useState("");
    const [playerList, setPlayerList] = useState([]);

    const InputPlayer =(e)=>{
        setPlayer(e.target.value)
    }

    const AddPlayer =()=>{
        const playerArray = [...playerList, player]
        setPlayerList(playerArray);
    }

    const DeletePlayer = (eventTerpilih) => {
        const updatePlayer = playerList.filter(player => player != eventTerpilih)
        setPlayerList(updatePlayer)
    }

    return(
        <div>
           <div className="container">
            <p>List Player Senior Team</p>
            <div className="row">
                <div className="col">
                    <img src="mine.jpeg" alt="" className={gaya.gambarUtama}/>
                </div>
            </div>
            <div className="row" style={{textAlign:"left"}}>
                <div className="col">
                    <input type="text" value={player} placeholder="Input Player" onChange={InputPlayer}/><br />
                    <button onClick={AddPlayer}>Enter</button>
                </div>
                <div className="col" style={{textAlign:"center"}}>
                    <p>List Pemain</p>
                    <ul >
                        {playerList.map(player => (
                            <li key={player} className="d-flex justify-content-between">
                                {player}
                                <span><button onClick={()=>DeletePlayer(player)}>X</button></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
           </div>
        </div>
    )
}