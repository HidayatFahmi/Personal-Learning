const array = [1,2,3,4,5,6,7,8,9];
const objek = {
    nama : 'fahmi',
    asal : 'bangka belitung',
    usia : 24
}

for(let a=0;a<10;a++){
    for(let b=0;b<10;b++){
        console.log(`b : ${b}`);
        if(b==5){
        // console.log(`b : ${b}`);
        break;
    }
    }
    console.log(`a : ${a}`);
    }
   
for(const a of array){
    console.log(a);
}

for (const z in objek){
    console.log(z);
}