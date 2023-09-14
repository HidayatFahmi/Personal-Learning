// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = "Halo Dunia, manipulastion of JS </em>";
judul.style.backgroundColor = "salmon";


// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML="remove other tags"

//element.setAttribute()
judul.setAttribute("name","fahmi");

const a =  document.querySelector('section#a a');
a.setAttribute("class","hidayat");
a.removeAttribute("href");

const p2 = document.querySelector(".p2");
p2.setAttribute("class","label");

// element.classList
p2.classList.add("label2");
p2.classList.remove("label");
p2.classList.toggle("biru-muda");
p2.classList.item(2);
// p2.classList.replace("biru-muda","biru-tua")