/////////// Conditional statement if else
const age = 24;

if(age >= 18){
    console.log("anda sudah boleh menonton romance 💘");
}
else{
    console.log("nonton doraemon aja ya")
}

const birthDay = 1998;
let century;

if(birthDay <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);

// ==================================

const calculatorType = "kali";
// const calculatorType = "bagi";
// const calculatorType = "kurang";
// const calculatorType = "tambah";

const a = 8;
const b = 8;

if(calculatorType ===  "tambah"){
    console.log(a+b);
}
else if(calculatorType === "bagi"){
    console.log(a/b);
}
else if (calculatorType === "kali"){
    console.log(a*b);
}
else{
    console.log(a-b);
}

// ================================== ternary operator

const Booleans = "";

const status = true;
console.log(status ? "single" : "jomblo");
console.log(1=="1");
console.log(null == 0);//false
console.log(!!null == 0); //true
console.log("5"+ 9); //convert to string
console.log("9"- 5); //convert to integer
if(Booleans){
    console.log("sudah diisi");
}else{
    console.log("belum diisi");
}


// ================================== Switch statement
const hari = "minggu";
const calculatorX = "tambah";
const x = 35;
const y = 60;

switch(hari){
    case "minggu":
    console.log("main futsal");

    case "senin":
    console.log("masuk kerja");
    break;

    case "selasa":
    case "rabu":
    console.log("party");
    console.log("foya-foya");
    break;
    
    case "kamis":
    console.log("senam");

    default:
    console.log("tidur");

}

switch (calculatorX){
    case "tambah":
    console.log(x+y);
    break;
}

// ================================== Loops and iterations

let langkah=10;
let step = 10;
for(let a=0;a<10;a++){
    console.log(`langkah ke=${a}`);
}


for(second =3;second>=1;second --){
    console.log(`tahun baru dalam ${second}`)
    if(second ===1){
        console.log(`Hore...🎉`);
    }
}

for(bilangan =0;bilangan<=10;bilangan++){
    if(bilangan%2==0){
    console.log("lompat")
    continue;
    console.log(`bilangan ${bilangan}`)
    }
    console.log(`bilangan ${bilangan}`)
}

for(let menit=1;menit<=5;menit++){
    for(let detik=0;detik<60;detik++){
        console.log(`${detik}`)
    }
    console.log(`menit ke- ${menit}`);
}