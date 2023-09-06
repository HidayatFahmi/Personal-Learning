/////////////////////// Soal 1

const gradeMahasiswa = [
    {nama : "fahmi", grade : 8.8},
    {nama : "hidayat", grade : 9.8},
    {nama : "fahmi", grade : 6.8},
    {nama : "dennis", grade : 7.7},
    {nama : "dimas", grade : 6.5},
    {nama : "anton", grade : 9.8}

];

console.log(gradeMahasiswa[0].nama);

const rangking = (data) => {
    let lulus = [];
    for(let a=0;a<data.length;a++){
    if(data[a].grade>7){
        lulus.push(data[a]);
    }
    }
    return lulus;
 }

const filterRangking = gradeMahasiswa.filter(x=>x.grade>7);
console.log(filterRangking);

console.log(rangking(gradeMahasiswa));

/////////////////////// Soal 2

const checkAnagram = (kata1, kata2) => {
    let kataBaru1 = kata1.split('').sort().join();
    let kataBaru2 = kata2.split('').sort().join();
    console.log(kataBaru1);
    console.log(kataBaru2);
   if(kataBaru1.toLowerCase() == kataBaru2.toLowerCase()){
    return true;
   }
   else{
    return false;
   }
  }

  const checkAnagramSamuel = (kata1, kata2) => {
    let kataCounter={
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0,
    t:0,
    u:0,
    v:0,
    w:0,
    x:0,
    y:0,
    z:0,
    };

    for(let a=0;a<kata1.length;a++){
        kataCounter[kata1[a]]++;
    }

    for(let b=0; b<kata2.length; b++){
        kataCounter[kata2[b]]--;
    }
    for(key in kataCounter){
        if(kataCounter[key] !==0) return false;
    }
    return true;

  }
  
  let kata_1 = "kamu";
  let kata_2 = "muka";
  let kata_3 = "maka";
  let kata_4 = "kaum";
  
  console.log(checkAnagram(kata_1, kata_2)); // true
  console.log(checkAnagram(kata_1, kata_3)); // false
  console.log(checkAnagram(kata_2, kata_3)); // false
  console.log(checkAnagram(kata_1, kata_4)); // true

  console.log(checkAnagramSamuel(kata_1, kata_2)); // true
  console.log(checkAnagramSamuel(kata_1, kata_3)); // false
  console.log(checkAnagramSamuel(kata_2, kata_3)); // false
  console.log(checkAnagramSamuel(kata_1, kata_4));

  const kata3 = "fahmi hidayat, ferdi, nabil, fauzan, ertho";
    let kataBaru3 = kata3.split(', ');
    console.log(kataBaru3[2]);


/////////////////////// Soal 3
/*

Pernah menggunakan online store? 
Sadarkah bahwa item barang dikelompokkan berdasarkan toko yang menjualnya? 
Hal ini berlaku di banyak bagian pada online store, 
mulai dari daftar barang favorit, keranjang, order, hingga checkout. 
Lengkapilah kode di bawah ini untuk mengelompokkan barang berdasarkan nama toko!

*/

let cart = [
    {store:"toko oke", item: "pulpen"},
    {store:"amanah elektronik", item: "tv"},
    {store:"yes store", item: "casing hp"},
    {store:"amanah elektronik", item: "laptop"},
    {store:"toko oke", item: "buku tulis"},
    {store:"amanah elektronik", item: "gurita hp"},
    {store:"toko oke", item: "sapu"},
    {store:"toko oke", item: "gelas keramik"},
    {store:"yes store", item: "gantungan kunci lucu"},
    {store:"toko oke", item: "kursi lipat"},
  ];

  
  const groupItemByStore = (items) => {
    let resultGroup = [];
    for(let a=0;a<items.length;a++){
    let added = false;
        for(let idxGroup=0;idxGroup<resultGroup.length;idxGroup++){
        console.log("masuk for 2")
        console.log(`nilai dari for 1 = ${a}, nilai dari for2 = ${idxGroup}`)
        if(items[a].store === resultGroup[idxGroup].store){
            console.log("masuk if 1")
            resultGroup[idxGroup].items.push(items[a].item);
            added = true;
            break;
        }
        }
    

        if( added === false){
            console.log("masuk if 2");
            resultGroup.push({
            store : items[a].store, 
            items : [items[a].item]
        });
        }
    }
    return resultGroup;
  }
  
  let resultGroup = groupItemByStore(cart);
  console.log(resultGroup);