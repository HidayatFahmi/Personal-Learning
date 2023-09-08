let arrayAngka = [2, 3, 4, 5, 6, 7, 3, 1, 2, 4, 6, 9, 0, 7];

// let array =arrayAngka.sort();

let array = [...arrayAngka]; 
array.sort((a, b) => a - b); 
console.log(array);
console.log(arrayAngka);

function searchNumber(data, find) {
    let indexAwal = 0;
    let indexAkhir = data.length - 1;

    while (indexAwal <= indexAkhir) {
        let indexTengah = Math.floor((indexAwal + indexAkhir) / 2);

        if (data[indexTengah] === find) {
            return indexTengah;
        } else if (data[indexTengah] < find) {
            indexAwal = indexTengah + 1;
        } else {
            indexAkhir = indexTengah - 1;
        }
    }

    return indexTengah; // Return -1 jika tidak ditemukan
}

console.log(searchNumber(array, 9));

