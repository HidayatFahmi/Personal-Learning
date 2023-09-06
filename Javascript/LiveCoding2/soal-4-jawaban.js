/*
  Pada array, dapat dilakukan pengambilan sebagaian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/

const customSlice = (arr, start, end) => {
  // tulis code di sini
  if (start < 0 || end<start) {
    return [];
  }
  
  let newArr = [];
  for (let i = start; i <= end; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
    else {
      // there is no arr[i]
      break;
    }
  }
  return newArr;
}

let data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
