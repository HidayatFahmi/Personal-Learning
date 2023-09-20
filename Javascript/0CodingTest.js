
// https://drive.google.com/drive/folders/1jpu1mER-5tcWLO6wNm_wsYj4Upg9EvGC : kuncijawaban

/////////////////////////////////////////////////////////////////////////////////////// soal No. 1 kombinasi angka
// let array1 = [2,3,1,4,7,5,6];
// let array2 = [3,20,6];


// const toMax = (data) => {
//   let terbesar =  data;
//   console.log(terbesar);
//   console.log(data);

//   for(let a=0;a<terbesar.length;a++){
//     for(let b=a+1;b<terbesar.length;b++){
//       if(terbesar[a]>terbesar[b]){
//         let simpan = terbesar[b];
//         terbesar[b] = terbesar[a];
//         terbesar[a] = simpan;
//       }
//     }
//   }
//   return terbesar.join("");
// }

// const toMin =  (data) =>{
//   let terkecil = data;

//   for(let a=0;a<data.length;a++){
//     for(let b=a+1;b<data.length;b++){
//       if(terkecil[a]<terkecil[b]){
//         let simpan = terkecil[b];
//         terkecil[b]=terkecil[a];
//         terkecil[a]=simpan;
//       }
//     }
//   }
//   return terkecil.join("");
// }

// let toMax2 = array1.sort((a,b)=>{return a-b});
// console.log(toMax2);
// let toMin2 = array1.sort((a,b)=>{return b-a});
// console.log(toMin2);

// let hasil = toMin2.join("") - toMax2.join("");
// console.log(toMin2.join(""));
// console.log(toMax2.join(""));

// console.log(hasil);

// console.log(toMax(array1));
// console.log(toMin(array1));

// let result = toMin(array1)-toMax(array1);
// console.log(result);


//////////////////////////////////////////////////////////////////////////////////// Soal No 2

// const rekursip = (data) => {
//   if(data == 1){
//     return data;
//   }
//   else{
//     return data + rekursip(Math.floor(data/2)) + rekursip(Math.floor(Math.sqrt(data)));
//   }
// }

// console.log(rekursip(6));

////////////////////////////////////////////////////////////////////////////////////// No. 3

// let arrAngka1 = [1, -3, 2, 1, -1];
// let arrAngka2 = [-2, -3, 4, -1, -2, 1, 5, -3];
// let arrAngka3 = [1,2,3,4,5];
// let arrAngka4 = [-1,-2,-3,-4,-5];
// let arrAngka5 = [0,0,0,0,0];



// function biggestSum(data){

//   let currentValue = data[0];
//   let nilaiMax =data[0];

//   for(let a=1;a<data.length;a++){
//     currentValue = Math.max(data[a],currentValue+data[a]);
//     console.log(currentValue);
//     nilaiMax = Math.max(nilaiMax, currentValue);
//     console.log(nilaiMax); 
//     }

//     return nilaiMax;
// }

// console.log(biggestSum(arrAngka4));

////////////////////////////////////////////////////////////////////////////////////// No. 4
console.log(" ================== Soal No 4");

function sumDeep(arr, char) {
  // The variable "s" is can be anything, it's only use for separate the node level
  const tempArr = [[...arr], "s"];
  console.log(tempArr);
  

  let countersChar = [0];
  let counter = 0;
  let step = 0;

  // Tree method using breadth first traversal1
  while (tempArr.length > 1) {
    const node = tempArr.shift();

    console.log(`node, step ${step} = `, node);

    if (node === "s") {
      countersChar.push(0);
      tempArr.push("s");
    } else {
      tempArr.push(...node.slice(1));
      let currentChar = node[0];
      if (currentChar.includes(char)) {
        countersChar[countersChar.length - 1] += 1;
        counter += countersChar.length;
      }
    }
    console.log(`countersChar =`,countersChar);
    console.log(`tempArr setelah kondisi= `, tempArr);
    console.log(`counter = ${counter}`)
    console.log(`tempArr sebelum kondisi= `, tempArr)
    console.log("===============");


    step++;
  }

  return counter;
}

module.exports = sumDeep;

// console.log(sumDeep(["AB", ["XY"], ["YP"]], "Y"));
// console.log(sumDeep(["", ["", ["XXXXX"]]], "X"));
// console.log(sumDeep(["X"], "X"));
console.log(sumDeep(["X", ["", ["", ["Y"], ["X"]]], ["X", ["", ["Y"], ["Z"]]]], "X"));
// console.log(sumDeep(["X", [""], ["X"], ["X"], ["Y", [""]], ["X"]], "X"));
// console.log(sumDeep(["XY", ["AB", ["YP"]]], "X"));


////////////////////////////////////////////////////////////////////////////////////// coba sendiri

// console.log("coba sendiri =======================================");

// function sumDeep(arr, char){
  
//   const tempArr = [[...arr], "s"];
//   let hitungKarakter=0;
//   let counterChar=[0];

//   while(tempArr.length>1){

//     let takeSample = tempArr.shift();

//     console.log(`tempArr sebelum kondisi= `, tempArr);
//     console.log(`takeSample = `, takeSample);

//     if(takeSample === 's'){
//       tempArr.push('s');
//       counterChar.push(0);
//       console.log(`counterChar1= ${counterChar}`);
//     }
//     else{
//       tempArr.push(...takeSample.slice(1));
//       if(takeSample[0].includes(char)){
//         // counterChar[counterChar.length-1]+=1;
//         hitungKarakter+=counterChar.length;
//       }
//     }
//     console.log(`countersChar =`,counterChar);
//     console.log(`tempArr setelah kondisi= `, tempArr);
//     console.log(`hitungKarakter = ${hitungKarakter}`)
//     console.log("===============");

//   }

//   return hitungKarakter;
// }

// console.log(sumDeep(["AB", ["XY"], ["YP"]], "Y"));
// console.log(sumDeep(["", ["", ["XXXXX"]]], "X"));
// console.log(sumDeep(["X"], "X"));
// console.log(sumDeep(["X", ["", ["", ["Y"], ["X"]]], ["X", ["", ["Y"], ["Z"]]]], "X"));
// console.log(sumDeep(["X", [""], ["X"], ["X"], ["Y", [""]], ["X"]], "X"));
// console.log(sumDeep(["XY", ["AB", ["YP"]]], "X"));

////////////////////////////////////////////////////////////////////////////////////// No. 5

// function matriks(n){
//   let startRow = 0;
//   let endRow = n-1;
//   let startColumn = 0;
//   let endColumn = n-1;
//   let counter = 1;
//   let matriksNya = [];

//   for(let a=0;a<n;a++){
//     matriksNya.push([]);
//   }

//   while(startRow<=endRow && startColumn<=endColumn){

//     // top
//     for(let a=startColumn;a<=endColumn;a++){
//       matriksNya[startRow][a] = counter;
//       counter++;
//     }
//     startRow++;

//     for(let b=startRow;b<=endRow;b++){
//       matriksNya[b][endColumn] = counter;
//       counter++;
//     }
//     endColumn --;

//     for(let c=endColumn;c>=startColumn;c--){
//       matriksNya[endRow][c]=counter;
//       counter++;
//     }
//     endRow--;

//     for(let d=endRow;d>=startRow;d--){
//       matriksNya[d][startColumn]=counter;
//       counter++;
//     }
//     startColumn++
//   }
//   return matriksNya;
// }

// console.log(matriks(5));