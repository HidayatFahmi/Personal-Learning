// event handler
// event onClick();

const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

function ubahWarna(){
    p2.style.backgroundColor ='lightblue'
}

p2.onclick = ubahWarna;

const pFahmi = document.querySelector('section#a .p1');

function ubahWarnaFahmi(){
    pFahmi.classList.toggle('classFahmi');
}

pFahmi.onclick = ubahWarnaFahmi;

// addEventListener()
// menambakan items baru

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    // alert('ok');
    const ul = document.querySelector("section#b ul");
    const li = document.createElement("li");
    const teksLi = document.createTextNode("Baru ditambahkan");
    
    li.appendChild(teksLi);
    ul.appendChild(li);
})



