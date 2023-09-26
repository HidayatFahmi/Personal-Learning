import "./Identitas.css";
import gaya from "./Styling.module.css"

export default function Identitas(){
    return(
        <div className={gaya.biruAja}>
            <img src="foto1.png" alt="gambar tidak tampil"  className="profile-pict"/>
            <div className="nama">
                <div style={
                    {
                        backgroundColor : "lightBlue",
                        fontSize : "30px",
                    }
                }>Nama : Fahmi Hidayat</div>
                <div>TTL : Bukit Jaya, 22 Desember 1998</div>
                <div>Domisili : Batam</div>
            </div>
        </div>
    )
}