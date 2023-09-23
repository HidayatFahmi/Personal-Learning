
function getPilihanKomputer(){
    const comp = Math.random();

    if( comp < 0.34 ) {return 'gajah';} 
    if( comp >= 0.34 && comp < 0.67 ) {return 'orang';}
    return 'semut';
}

function getHasil(comp, player){
    if( player == comp ) {return 'SERI!';}
    if(player == 'gajah' ) {return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';}
    if(player == 'orang' ) {return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';}
    if(player == 'semut' ) {return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';} 
    return'memasukkan pilihan yang salah!';
}

const pGajah = document.querySelector(".gajah");
const pSemut = document.querySelector(".semut");
const pOrang = document.querySelector(".orang");

// pGajah.addEventListener('click',function(){
//     const pilihanPlayer = pGajah.className;
//     const pilihanKomputer = getPilihanKomputer();
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src","suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanKomputer +".png");

//     const info=document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// pOrang.addEventListener('click',function(){
//     const pilihanPlayer = pOrang.className;
//     const pilihanKomputer = getPilihanKomputer();
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src","suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanKomputer +".png");

//     const info=document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// pSemut.addEventListener('click',function(){
//     const pilihanPlayer = pSemut.className;
//     const pilihanKomputer = getPilihanKomputer();
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src","suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanKomputer +".png");

//     const info=document.querySelector(".info");
//     info.innerHTML = hasil;
// })

//////////////////////////////////////// Simplify Code

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
    const pilihanKomputer =  getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();
    setTimeout(function(){
    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute("src","suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanKomputer +".png");

    const info = document.querySelector(".info");
    info.innerHTML=hasil;
    },1000)
    })
})

function putar(){
    const imgkomputer = document.querySelector(".img-komputer");
    const gambar = ['gajah','semut','orang']
    let i=0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
    if(new Date().getTime() - waktuMulai > 1000){
        clearInterval;
        return;
    }
    if(i == gambar.length)i=0
    imgkomputer.setAttribute("src","suwit-jawa-2.0/img-suwit-jawa/img/"+gambar[i++]+".png")
    }, 100)
}