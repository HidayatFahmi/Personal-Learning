///////////////////////// string
let nama =  "fahmi hidayat";
var asal = "bangka belitung"
const region = "batam";
console.log(`tipe data =  ${typeof(nama)}, ${typeof asal}, ${typeof(region)}`);

///////////////////////// number
let umur = 24;
console.log("umur "+typeof umur);

///////////////////////// boolean
let single = true;
let javanese = false;
console.log("umur "+typeof single);

///////////////////////// null dan undefined
let marriage;
let chid = null;
console.log(marriage, 'tipe data ' + typeof marriage);
// console.log(`${child}, tipe data + ${typeof child}`);

///////////////////////// object adn array
let dataDiri = {
    nama : 'fahmi hidayat',
    'asal' : 'bangka belitung',
    umur : 24,
    hobby : 'football'
}

dataDiri.single=true;

let family = ['lina','lofi','fiqri','fahmi', 60, 40, 28, 25];
family.push('vivi','adibba');

console.log(dataDiri, typeof dataDiri);
console.log(dataDiri.nama);
console.log(dataDiri.asal);
console.log(family, typeof family);
console.log(family[3]);

///////////////////////// function

const fungsi1 = () => {
    console.log('function 1');
}

function fungsi2(){
    console.log("function 2");
}

fungsi1();
fungsi2();
console.log(typeof (fungsi1, fungsi2));



