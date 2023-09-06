/*
  Normalnya, programmer bisa memperoleh data seperti id atau uuid berdasarkan url parameternya, 
  misalnya dari http://localhost:3000/product/:uuid/edit. 
  
  Cobalah untuk mengambil nilai uuid secara manual dari url web
  
  Sebagai contoh 
  url = "http://localhost:3000/product/b710890f-4f7e-4946-b3ff-6be7a58d04f0/edit";
  maka uuid nya adalah b710890f-4f7e-4946-b3ff-6be7a58d04f0

  Konsep penyelesaian:
  - salah satu cara bisa menggunakan split
  - split ('product/');
  - ambil index 1;
  - lanjut split('/');
  - ambil index 0;

*/

const getUuid = (url) => {
  let split1 = url.split('product/');
  let split2 = split1[1].split('/');

  return split2[0]
}

let url = "http://localhost:3000/product/b710890f-4f7e-4946-b3ff-6be7a58d04f0/edit";
console.log(getUuid(url));