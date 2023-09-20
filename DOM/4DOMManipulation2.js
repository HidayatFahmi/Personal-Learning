////////////////// document.createElement()

// buat element baru
const pBaru = document.createElement('p'); //masih disimpan didalam memori
const textPBaru = document.createTextNode("Paragraf Baru");

// simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);
// simpan pBaru dinode yang diinginkin
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// node.insertBefore();
// buat variael baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// parentNode.removeChild();  //pakai sectionA diatas
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// parentNode.replaceNode();
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// buat element baru
const hBaru = document.createElement('h4');
const teksH2baru = document.createTextNode("Hbaru from javascript");
hBaru.appendChild(teksH2baru);

sectionB.replaceChild(hBaru, p4);
pBaru.style.backgroundColor = "green";
hBaru.style.backgroundColor = 'aqua';