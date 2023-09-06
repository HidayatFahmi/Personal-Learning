const _ = require("lodash");
const version = _.VERSION;
console.log(version);

// ===================== lodash first and last

const array1 = [1,2,3,4,5,6,7];
const pertama = _.first(array1);
const terakhir = _.last(array1);

console.log(` array index-0 = ${pertama}, array index terkahir = ${terakhir}`);
console.log(array1.indexOf(7));

// ===================== lodash nth index
const array2 = [1,3,5,7,9,2,4,6,8];

let cari = _.nth(array2, 1);
console.log(cari);


// ===================== lodash chunking
const array3 = [1,2,3,4,5,6,7,8,9];

const chunking = _.chunk(array3, 2);
console.log(chunking);


// ===================== lodash slice, index and element
const array4 = [1,2,3,4,5,6,7,8,9];

const slicing = _.slice(array4, -4, 9);
console.log(slicing);


// ===================== lodash random, upper and lower
const array5 = [1,2,3,4,5,6,7,8,9];

const randoming1 = _.random(70);
const randoming2 = _.random(65, 70);

console.log(randoming1);
console.log(randoming2);

// ===================== lodash random for array
const array6 = [1,2,3,4,5,6,7,8,9];

let sampling = _.sample(array6);
console.log(sampling);

// ===================== lodash shuffle/acak
const array7 = [1,2,3,4,5,6,7,8,9];

let acak = _.shuffle(array7);
console.log(acak);

// ===================== lodash times
let times = _.times(8, ()=> {
    console.log("print")
})

// ===================== lodash delay

console.log("first message");
function message(){
    console.log("last message");
}

// _.delay(message, 5000);

// ===================== lodash range
const array8 = [1,2,3,4,5,6,7,8,9];

let ranging1 = _.range(5,15);
let ranging2 = _.range(5,15,3);

console.log(ranging1);
console.log(ranging2);
