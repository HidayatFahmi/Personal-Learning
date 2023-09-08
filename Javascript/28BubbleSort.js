const array = [1,5,2,3,6,7,8,5,64,3,4,33,5,564,3,44,34,0];

function searchMaks(data){
    let arrayBaru = data;
    
    for(let forLuar = 0;forLuar<array.length;forLuar++){
        let BatasForDalam = data.length - forLuar;
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