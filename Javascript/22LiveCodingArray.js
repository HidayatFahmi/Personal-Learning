// soal 1
// menghitung panjang arrray dengan infinite looping

import { indexOf } from "lodash";

let dataArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(dataArray);

function panjangaArray(dataArray){
    let counter = 0;
    for(let a=0;a>=0;a++){
        if(dataArray[a]){
        counter++;
        console.log(counter);

        }
        else{
            break;
        }
    }
    return counter;
}

console.log(panjangaArray(dataArray));

// soal 2
// mencri erpa jumlah bilangan yang sama pada sebuah array

let array2 = [1,2,2,1,2,3,4,4,5,6,7,8,9,9,6,4,3,5,6,7,5,3,5,6,7,6,4,2,2];

const mencariBanyakArray = (data, searchValue) =>{
    console.log(data[6]);
    let count = 0;
    let index=0;
    for(let a=0;a<data.length;a++){
    if(data[a] == searchValue){
        console.log(index);
        count++;
    }
    index++;
    }
    return count;
}

console.log(mencariBanyakArray(array2, 2));

// soal no.3
// mengambil ur;

const getUuid = (url) => {
    let splitByProduct = url.split("product/");
    let splitByslash = splitByProduct[1].split('/');
    console.log(splitByProduct);
    console.log(splitByslash)
    return splitByslash[0];
}

let url = "http://localhost:3000/product/b710890-47fe-b3ff-4969-b3ff-64j5i45i45/edit";
console.log(getUuid(url));


// soal no.4

const customSlice = (arr, start, end) => {
let penampung = [];
for(let a=start;a<end+1;a++){
    if(a>arr.length-1){
        break;
    }

    if(arr[a]){
    console.log(arr[a]);
    penampung.push(arr[a]);
    }
}
return penampung;
}

let data = ["nol","satu","dua","tiga","empat","lima","enam","tujuh", "delapan","sembilan","sepuluh"];

console.log(customSlice(data,1,5));
console.log(customSlice(data,3,20))
// console.log(customSlice(data,0,3))


// soal no.5
// mwnukar hruruf kapital dan huruf kecil

// cara1
const tukarHuruf = (dataHuruf) => {
    let penampungKata = [];
    for(let a=0;a<dataHuruf.length;a++){
        if(dataHuruf[a] === dataHuruf[a].toLowerCase()) {
            penampungKata.push(dataHuruf[a].toUpperCase());
        }
        else{
            penampungKata.push(dataHuruf[a].toLowerCase());
        }
    }
    return penampungKata;
}

console.log(tukarHuruf("fAHhhJkjhKKLL"));

// cara2

const tukarHuruf2 = (dataHuruf) => {
    let result = "";
    for(let a=0 ; a<dataHuruf.length ; a++){
        result += dataHuruf[a] === dataHuruf[a].toLowerCase() ? dataHuruf[a].toUpperCase() : dataHuruf[a].toLowerCase();
    }
    return result;
}

console.log(tukarHuruf2("fahKKShhshsskkkalslkdjKKLJL"));