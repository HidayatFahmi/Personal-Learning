import { useState } from "react";

export default function HideShowValue(){
    const [showString,setShowString] = useState(false);

    const HideShowString = () => {
        const stringvalue = !showString;
        setShowString(stringvalue);
    }
    return(
    <div>
        <button onClick={HideShowString}>{showString? "hide" : "Show"}</button>
        <br />
        {showString? 
        <div>
            nama saya fahmi hidayat
        </div> :
        <div>
            {null}
        </div>}
    </div>
    )
}