const rl = require('readline-sync');

const registeredUsername = 'hidayat';
const registeredPassword = 123456;

let username = rl.question('masukan username : ');
let password = rl.question("masukkan password : ",{
    hideEchoBack:true,
});

let usia = rl.questionInt('masukkan usia : ',{
    limitMessage:"input harus angka",
});

console.log(username);

if(username == registeredUsername){
    console.log('username sesuai');
}

if(password == registeredPassword){
    console.log('password sesuai');
}