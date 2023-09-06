//================================== Spread Operator
const dataFahmi = {
    nama: "fahmi",
    usia : 24,
    asal : "bangka belitung"
}

const dataHidayat = {
    namaBelakang : "hidayat",
    hobby : "sepak bola",
    aalamat : "Batam",
}

const dataFahmiHidayat = {
    ...dataFahmi, ...dataHidayat
}

console.log(dataFahmiHidayat);

const buah = ["apel","belimbing","cherry"];
const arrayBuah = [...buah];
console.log(arrayBuah);


//================================== Destructuring
const dataMessi = {
    nama : "lionel messi",
    club :"inter miami",
    usia : 37,
    national : 'argentina',
    married : true
}

let {married} = dataMessi;
console.log(married);
console.log(dataMessi.married);


let club = ["barcelona","liverpool","manchester united","psg"];

let [spain,eng1,eng2,france]= club;
console.log(spain);

//================================== Rest
const dataHakimi = {
    nama : "achraf hakimi",
    asal : "maroko",
    club : "psg",
    usia : 25,
    married : true,
    golonganDarah : "O"
}
const {nama, asal, ...sisanya} = dataHakimi;
console.log(nama);
console.log(sisanya);

const buatArray = (...isiData) => {
    console.log(isiData);
}

buatArray(1,2,3,4,"fahmi", true, [6,8,9]);