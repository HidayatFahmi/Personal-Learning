// ======================== Scope Variables
import { namaPerusahaan } from "./16ScopeVariable2.js";

let globalVar = "variable global";
const kecap = "bango";

console.log("variable :",globalVar);

const cekVariable = (parameter) => {
    const kecap = "burung merak";
    // var penjagaToko2 = "bulik";
    console.log(kecap);

    if(parameter === true){
        var penjagaToko = "bagat";
        console.log(`${penjagaToko}: ${kecap} ada nihh!`);
    }
    console.log(penjagaToko);
};

cekVariable(true);
console.log(`kecap luar ${kecap}`);
console.log(namaPerusahaan);
// console.log(`${penjagaToko}`);
// console.log(`${penjagaToko2}`);
