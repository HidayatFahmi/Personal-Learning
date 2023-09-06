// import { globalVar } from "./15ScopeVariable.js";
export const namaPerusahaan = "FahmiTech";

// console.log(globalVar);

// latihan

function periksaNamaLJK(nama){
    let panjangMaks = 10;

    if(nama.length>panjangMaks){
        console.log(`panjang nama maksimal adalah ${panjangMaks}, halo nama ${nama} adalah nama yang melebihii batas maksimum`)
    }
    else{
        console.log(`halo ${nama} adalah nama yang memenuhi kriteria panjang maks yaitu kurang dari ${panjangMaks}`);
    }
}

periksaNamaLJK("fahmi hidayat");