// function vowelsAndConsonants(s) {
//     let vowel = ["a","i","u","e","o"];
//     let tampung = "";

//     for(let a=0;a<s.length;a++){
//         if(vowel.includes(s[a])){
//             console.log(s[a]);
//             tampung+=s[a];
//         }
//     }
//     return tampung;
// }


// console.log(vowelsAndConsonants("javascriptloops"));


// ============================
function reverseString(s) {
    try {
        // Mencoba untuk membalikkan string menggunakan split, reverse, dan join
        let reversed = s.split('').reverse().join('');
        console.log(reversed);
        
    } catch (e) {
        // Menangkap exception jika terjadi kesalahan
        console.log(e.message);
    } finally {
        // Menampilkan string awal baik ada exception atau tidak
        console.log(s);
    }
}

reverseString("1234");