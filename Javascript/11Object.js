let users = {
    name : "fahmi hidayat",
    age : 24,
    asal : "bangka belitung",
}

users.address = "batam";
delete(users.age);
console.log(users);


for(x in users){
    console.log(x);
}
for(key in users){
    console.log(users[key]);
}

let club1 = {
    messi : "barcelona",
    ronaldo : "madrid",
    neymar : "psg",
}
console.log(club1["messi"]);
console.log(typeof(club1["messi"]));
console.log(typeof(club1.messi));



let club2 = Object.assign({}, club1);
club2.muller = "bayern";
console.log(club1);
console.log(club2);


/////////////////////////

let mySalaries = {
    january : 1000,
    february : 2000,
    maret : 1500,
    april : 2200,
    mei : 2500,
    juni : 10000,
    juli : 5000,
    agustus : 2000,
    september : 1200,
    oktober : 3100,
    november : 75000,
    desember : 120000
}


function calculateSallaries(){
    let sum=0
    for( let gaji in mySalaries){
        console.log(gaji);
        console.log(mySalaries[gaji]);
        sum += mySalaries[gaji];
    }
    // console.log(sum);
    return sum;
}

console.log(calculateSallaries());


//////////////////////////////////// assignment

const buah = ["avocado", "apple", "banana", "cheery"];

function letterA(fruits){
let result = [];
for(let a=0;a<fruits.length;a++){
    if(fruits[a].charAt(0)==='a'){
    result.push(fruits[a]);
    }
}
return result;
}

console.log(letterA(buah));