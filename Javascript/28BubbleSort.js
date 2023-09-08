const array = [1,5,2,3,6,7,8,5,64,3,4,33,5,564,3,44,34,0];

function searchMaks(data){
    let arrayBaru = data;
    
    for(let forLuar = 0;forLuar<array.length;forLuar++){
        let BatasForDalam = data.length - forLuar;
        console.log(BatasForDalam);
        for(let forDalam=0;forDalam<BatasForDalam;forDalam++){
            let itemKiri = arrayBaru[forDalam];
            let itemKanan = arrayBaru[forDalam+1];

            if(itemKiri>itemKanan){
                let simpan = itemKiri
                arrayBaru[forDalam] = itemKanan;
                arrayBaru[forDalam+1] = itemKiri
            }
        }
    }
    return arrayBaru;
}

console.log(searchMaks(array));

// ================================================= sort besar - kecil
console.log("hi");

const array2 = [2,3,2,4,6,8,6,4,33,23,34,2,3,4,5,6];

function toSmallArray(data){
    let arrayBaru2 = data;
    for(let indexLuar = 0;indexLuar<arrayBaru2.length;indexLuar++){
        for(let indexDalam=0;indexDalam<arrayBaru2.length;indexDalam++){
            let elementKiri = arrayBaru2[indexDalam];
            let elementKanan = arrayBaru2[indexDalam+1];

            if(elementKiri<elementKanan){
                arrayBaru2[indexDalam] = elementKanan;
                arrayBaru2[indexDalam+1] = elementKiri;
            }
        }
    }
    return arrayBaru2;
}

console.log(toSmallArray(array2));

