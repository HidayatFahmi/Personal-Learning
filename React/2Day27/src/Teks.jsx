export default function TeksAja({teksing, setTeksing}){

    function ubahTeks(){
    setTeksing("");
    }

    return(
        <div>
            Teks child : {teksing}
            <br />
            <button onClick={ubahTeks}>Hapus Teks</button>
            <div>hasil setelah diubah : {teksing}</div>
        </div>
    )
}