const thumbs = document.querySelectorAll(".thumb");
const container = document.querySelector(".container");
const banner = document.querySelector(".banner");

container.addEventListener("click",function(e){
    console.log(e.target.className == 'thumb');

    banner.src = e.target.src;
    banner.classList.add("fade");
    setTimeout(function(){
        banner.classList.remove("fade");
    },500);

    thumbs.forEach(thumb =>{
        // if(thumb.classList.contains('active'){
        //     thumbs.classList.remove("active");
        // })

        thumb.className = "thumb";
    })
    e.target.classList.add('active');
})

