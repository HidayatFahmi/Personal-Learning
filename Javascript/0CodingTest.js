// =================================== Soal No. 1 ==================================
// let array = [4,23,2,6,44,3];

// function findMin(array){
//     let arrayTerkecil = array;

//     for(let a=0;a<arrayTerkecil.length;a++){
//         for(let b=0;b<arrayTerkecil.length;b++){
//             let elementKiri = arrayTerkecil[b];
//             let elementKanan = arrayTerkecil[b+1];

//             if(elementKiri>elementKanan){
//                 arrayTerkecil[b] = elementKanan;
//                 arrayTerkecil[b+1] = elementKiri;
//             }
//         }
//     }
//     return parseInt(arrayTerkecil.join(""));
// }


// function findMax(array){
//     let arrayTerbesar = array;

//     for(let a=0;a<arrayTerbesar.length;a++){
//         for(let b=0;b<arrayTerbesar.length;b++){
//             let elementKiri = arrayTerbesar[b];
//             let elementKanan = arrayTerbesar[b+1];

//             if(elementKiri<elementKanan){
//                 arrayTerbesar[b] = elementKanan;
//                 arrayTerbesar[b+1] = elementKiri;
//             }
//         }
//     }
//     return parseInt(arrayTerbesar.join(""));
// }


// let result = findMax(array) - findMin(array);


// console.log(findMax(array));
// console.log(findMin(array));

// console.log(result);

// =================================== Soal No. 2 ==================================


// let input = [1, -3, 2, 1, -1];

// function maxSum(arr){
//     for(let a=0;a<arr.length;a++){
//         for(let b=1;b<arr.length;b++){
//             let slice = arr.slice(a, a+1);
//             console.log(slice);
//             let sum = null;

//             for(let c=0;c<slice.length;c++){
//                 if(sum === null){
//                     sum = slice[c];
//                 }
//                 else{
//                     sum += slice[c];
//                 }
//             }
//         }
//     }
// }

// =================================== Soal No. 3 ==================================

function log(stringNum) {
    if (stringNum.length === 1) {
      console.log(stringNum)
    }
    else {
      let num = "";
      let setelahnya = "";
      for (let i = 0; i < stringNum.length; i++) {
        if (i === 0) {
          num += stringNum[i];
        }
        else {
          setelahnya += stringNum[i];
          num += 0
        }
      }
  
      console.log(num);
      log(setelahnya);
    }
  }
  
  log("1225441");