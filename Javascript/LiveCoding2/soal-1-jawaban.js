/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - menggunakan infinite looping, mulai dari 0 sampai tak hingga
  - di setiap looping cek apakah ada array di index tersebut?
      - jika ada, count++
      - jika tidak ada, stop looping menggunakan break
*/

const countManual = (arr) => {
  let count = 0;
  for (let i = 0; i >= 0; i++) {
    if (arr[i]) {
      count++;
    }
    else {
      break;
    }
  }
  return count;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countManual(data_array));