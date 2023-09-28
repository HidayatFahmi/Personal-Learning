import { useState } from "react";


export default function EventReact(){
    const [bahaya, setBahaya] = useState("");
    const [teks, setTeks] = useState(["salad"]);

    const  SomeTeks =(e)=>{
        setBahaya(e.target.value);
    }

    const Warn =()=>{
        bahaya == "bahaya"?
        console.log("bahaya tadi bohong saja") :
        console.log("salah Intruksi")
    }

    const TambahkanMenu = () => {
        const makananBaru = [...teks, `makanan baru ${teks.length}`];
        setTeks(makananBaru);
    }

    const hapusMakanan =(eventTerpilih)=>{
        const makananAfterDelete = teks.filter(makananTampil => makananTampil !== eventTerpilih);
        setTeks(makananAfterDelete);
    }

    return(
        <div>
            <div>
                <input type="text" onChange={SomeTeks} placeholder="Input teks"/>
                {bahaya=="bahaya" && alert("Bahaya Bahaya....")}
            </div>
            <button onClick={Warn}>Click Me</button>

            <div>
                <button onClick={TambahkanMenu}>Tambah Menu</button>
                <ul>{teks.map(makanan => (
                    <li key={makanan}>
                        {makanan}
                        <button onClick={()=>hapusMakanan(makanan)}>Hapus Menu</button>
                    </li>
                ))}</ul>
            </div>
        </div>
    )
}