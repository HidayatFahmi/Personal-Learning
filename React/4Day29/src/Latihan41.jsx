

export default function Latihan41({teksing, showing, setShowing}){

    const Tampilkan = () => {
        setShowing(tampil => !tampil)
    }

    return(
        <div>
            <button onClick={Tampilkan}>{showing? "Hide" : "Show"}</button>
            <div>
                {showing && 
                <div>Child : {teksing}</div>}
            </div>
        </div>
    )
}