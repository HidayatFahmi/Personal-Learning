// const tutup =  document.getElementsByClassName("close")[0];
// const kartu = document.querySelector(".card");

// tutup.addEventListener("click",function(){
//     kartu.style.display = "none";
// })

/////////////////////////// DOM traversal

const tutup =  document.querySelectorAll(".close");


// for(let a=0;a<tutup.length;a++){
//     tutup[a].addEventListener("click",function(e){
//         // tutup[a].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//         console.log("e = ",e.target.parentElement);
//     })
// }

tutup.forEach(x =>{
    x.addEventListener("click", function(e){
        e.target.parentElement.style.display = 'none';
    })
})

///////////////////////// DOM traversal method

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling);
console.log(nama.nextSibling);
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);


