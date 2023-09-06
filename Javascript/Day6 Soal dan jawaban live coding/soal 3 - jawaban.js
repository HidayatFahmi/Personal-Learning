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

/*
Expected output
[
  {
    store: 'toko oke',
    items: [ 'pulpen', 'buku tulis', 'sapu', 'gelas keramik', 'kursi lipat' ]
  },
  {
    store: 'amanah elektronik',
    items: [ 'tv', 'laptop', 'gurita hp' ]
  },
  {
    store: 'yes store',
    items: [ 'casing hp', 'gantungan kunci lucu' ]
  }
]
*/

const groupItemByStore = (items) => {
  // lengkapi kode berikut
  let group = [];
  items.forEach(item=> {
    let itemAdded = false;
    for (let i = 0; i < group.length; i++) {
      if (group[i].store === item.store) {
        group[i].items.push(item.item);
        itemAdded = true;
        break;
      }
    }
    if (itemAdded === false) {
      group.push({
        store : item.store,
        items : [item.item]
      })
    }
  });

  return group;
}

let resultGroup = groupItemByStore(cart);
console.log(resultGroup);