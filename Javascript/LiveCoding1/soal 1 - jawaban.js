/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

const students = [
    {name:"Andi",grade:7.5},
    {name:"Ardi",grade:9},
    {name:"Ahmad",grade:7},
    {name:"Anang",grade:6},
    {name:"Amir",grade:8}
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade7 = (data) => {
  // sesuaikan
  let filtered = [];
  let length = data.length;
  for (let i = 0; i < length; i++) {
    if (data[i].grade > 7) {
      filtered.push(data[i]);
    }
  }
  return filtered;
};

let filteredStudents = filterGrade7(students);
console.log(filteredStudents);