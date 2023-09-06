///////////////// -- Jawaban No.1 (rest) -- //////////////////

// function sum(...number){
//     let hasil=0;
//      for(let a=0;a<number.length;a++){
//      hasil+=number[a];
//      }
//      return hasil;
//     };
    
//     let output=sum(1,2,3,4,5,6,7,8,9);
//     console.log(output);

///////////////// -- Jawaban No.2 (spread) -- //////////////////

// const a = {nama:'fahmi',umur:24};
// const b = {golonganDarah:'O',tempatLahir:'Bangka Belitung',tanggalLahir:'22 Desember 1998'};

// function mergedObject(obj1,obj2,obj3)
// {
// const data = {...obj1,...obj2};
// const{[obj3]:awal,...sisa}=data;
// console.log(sisa);
// }

// mergedObject(a,b,'golonganDarah');

///////////////// -- Jawaban No.3 (Spread and Rest) -- //////////////////

// function mergeInfiniteObject(a,b,c,d){
//     return({...a,...b,...c,...d});
// }
// let output=mergeInfiniteObject(
//     {a:'a'},
//     {b:'b',c:'c',d:'d'},
//     {e:'e',f:'f',g:'g',h:'h'},
//     {i:'i',j:'j'}
// );
// console.log(output);

///////////////// -- Jawaban No.4 -- //////////////////

import {MALL_HH} from './constants.js';
const {
diskonHarga500 : diskon1, 
diskonHarga700 : diskon2, 
diskonHarga1000 : diskon3}=MALL_HH.mall.toko.transaksi.penjualan.harga.diskon;

const{pajak}=MALL_HH.mall.toko.transaksi.penjualan.pembelian;
const{diskon}=MALL_HH.mall.toko.transaksi.penjualan.pembelian.member;

function beliBarang(harga){
    let diskonBarang = 0;
    let diskonMember = 0;
    let totalDenganDiskon = 0;
    const pajak1=harga*pajak;
    let potongan='';

if(harga>=500000){
    if(harga>=1000000){
    diskonBarang=harga*diskon3;
    potongan='satu juta';
    }
    else if(harga>=700000){
    diskonBarang=harga*diskon2;
    potongan='tujuh ratus ribu';
    }
    else if(harga>=500000){
    diskonBarang=harga*diskon1;
    potongan='lima ratus ribu';
    }
    totalDenganDiskon=harga-diskonBarang;
    if(totalDenganDiskon>=500000)diskonMember=diskon*totalDenganDiskon;
}
else{
    diskonBarang=0;
    diskonMember=0;
}
let total = harga+pajak1-diskonBarang-diskonMember;
if(harga>=500000)console.log(`potongan diskon pembelian Rp ${potongan} : -Rp ${diskonBarang}`);
if(diskonMember!==0)console.log(`potongan member : -Rp ${diskonMember}`);
console.log(`besar pajak : +Rp ${pajak1}`);
console.log(`jumlah yang harus dibayar : Rp ${total}\n\n`);

return total;    
}

 beliBarang(1500000);
 beliBarang(800000);
 beliBarang(600000);
 beliBarang(500000);
 beliBarang(400000);




