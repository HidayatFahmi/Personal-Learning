// doxument.getElementById();
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "aqua";
judul.innerHTML = "Halo Dunia!!"


// document.getElementsByTagName();
const p = document.getElementsByTagName("p");
for(paragraf of p){
    paragraf.style.backgroundColor = "lightblue"
}
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px"

// document.getElementByClassName();
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "Diubah dari javascript";
