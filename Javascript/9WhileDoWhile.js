let perulangan1 = 10 ;
let perulangan2 = 10;

while(perulangan1>0){
    perulangan1--;
    console.log(`perulanngan : ${perulangan1}`);
}

do{
    console.log(`perulangan2 ${perulangan2}`);
}while(perulangan2<8){
    console.log(`perulangan2 ${perulangan2}`);
}


let dadu = Math.trunc(Math.random() * 6) + 1;

while(dadu!==5){
    console.log(`dadu ${dadu}`);
    dadu = Math.trunc(Math.random() * 5)+1;
    if(dadu == 5){
        console.log("you got it");
    }
}
