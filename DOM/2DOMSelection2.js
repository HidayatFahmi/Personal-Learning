// // document.querySelector()
// const p4 = document.querySelector("#b p");
// p4.style.color = 'green';
// p4.style.fontSize = '20px';

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";


// // document.querySelectorAll();
// const p = document.querySelectorAll("p");
// for(paragraf of p){
//     paragraf.style.backgroundColor = "green";
// }

// mengubah node root
const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';