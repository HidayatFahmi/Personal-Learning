// const cards= document.querySelectorAll(".card");
// cards.forEach(card => {
//     card.addEventListener("click", function(){
//         alert("Okehhh")
//     })
// })


// const tutup =  document.querySelectorAll(".close");
// tutup.forEach(x =>{
//     x.addEventListener("click", function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// })


const container = document.querySelector(".container");

container.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.className = "close"){
        e.target.parentElement.style.display = "none";
    }
})