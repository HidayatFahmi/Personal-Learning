// const tombol = document.getElementById("ubahWarna");
// const body = document.getElementsByTagName('body')[0];

// tombol.onclick = function() {
//     // document.body.style.backgroundColor = "lightblue";
//     document.body.classList.toggle("biru-muda")
// };


// const tAcakWarna = document.createElement("button");
// const teksTombol = document.createTextNode("Acak Warna");
// tAcakWarna.appendChild(teksTombol);
// tAcakWarna.setAttribute("type","button");
// tombol.after(tAcakWarna);

// const randomColor = () => {
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);  
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// }
// tAcakWarna.addEventListener("click", randomColor)

// const sMerah =  document.querySelector("input[name=sliderMerah]");
// const sHijau =  document.querySelector("input[name=sliderHijau]");
// const sBiru =  document.querySelector("input[name=sliderBiru]");
// const kotakCek = document.querySelector("input[name=check]")

// function sliderWarna(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;

//     console.log(r, g, b);

//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

// function checkValue(){
//     console.log(kotakCek.value);
// }

// kotakCek.addEventListener("click",checkValue);
// sMerah.addEventListener("input", sliderWarna);
// sHijau.addEventListener("input", sliderWarna);
// sBiru.addEventListener("input", sliderWarna);



/////////////////////////////////////////////// Bermain wanra dengan mouse

document.body.addEventListener('mousemove',function(event){
    // posisi mouse
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerHeight)*255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;

    console.log('client x = ',xPos);
    console.log('client y = ',yPos);


});
