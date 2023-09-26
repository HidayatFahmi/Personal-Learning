import './App.css'
import { useState } from 'react'

function App() {
  let hitungAja = 0;
  const [hitung1, setHitung1] = useState(0);
  const [hitung2, setHitung2] = useState(-3);
  const [reactiveString, setReactiveString] = useState("Woiiii");
  const [reactiveBoolean, setReactiveBoolean] = useState(false);

  const hitungAjaFunct=()=>{
    hitungAja++;
    console.log("hitung aja value = ",hitungAja);
  }

  const Tambahin=()=>{
    const tambahSatu = hitung2 +1;
    setHitung2(tambahSatu);
  }

  function generateKata(){
    const kata = "fahmi" + reactiveString;
    setReactiveString(kata);
  }

  const ubahBoolean =()=>{
    setReactiveBoolean(valueSebelumnya => !valueSebelumnya)
  }
  return (
    <>
      <button onClick={hitungAjaFunct}>Counter Biasa : {hitungAja}</button>
      <br />
      <button onClick={()=>setHitung1(count => count + 1)}>Counter1 : {hitung1} </button>
      <br />
      <button onClick={Tambahin}>Counter2 : {hitung2}</button>
      <br />
      <button onClick={generateKata}>String : {reactiveString}</button>
      <br />
      <button onClick={ubahBoolean}>Boolean : {String(reactiveBoolean)}</button>
    </>
  )
}

export default App
