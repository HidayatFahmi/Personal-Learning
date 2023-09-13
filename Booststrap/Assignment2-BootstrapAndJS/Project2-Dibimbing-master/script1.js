let imageCover = ['img/avenger','img/spiderman','img/fastX'];
let tambah=0;
let judulBanner = ['Avengers : End Game','Spider-Man: Across the Spider-Verse','Fast X']
let releaseData = ['2019  |  13+  |  3h 1m','2023  |  SU  |  2h 20m','2023 | 13+ | 2h 21m']

const banner1 = document.querySelector('.banner1 img')
const judul = document.querySelector('.judulBanner h3');
const release = document.querySelector('.judulBanner h6');
const cNext = document.querySelector('.carousel-control-next');
const cPrev = document.querySelector('.carousel-control-prev-icon');

cNext.addEventListener('click', function(){
    tambah++;
    if(tambah>2)tambah=0;
    banner1.setAttribute('src',imageCover[tambah]+'.jpg');
    judul.innerHTML=judulBanner[tambah];
    release.innerHTML=releaseData[tambah];
});

cPrev.addEventListener('click',function(){
    tambah--;
    if(tambah<0)tambah=2;
    banner1.setAttribute('src',imageCover[tambah]+'.jpg');
    judul.innerHTML=judulBanner[tambah];
    release.innerHTML=releaseData[tambah];
});


// Top cast Part
let topCText = ['Robert Downey Jr','Chris Evans','Mark Ruffalo','Chris Hemsworth','Jeremy Renner','Tom Holland','Scarlett Johansson','Paul Rudd','Fahmi Hidayat'];
let topCAlias = ['Tony Stark','Steve Rogers','Bruce Banner','Thor','Clint Barton','Peter Parker','Natasha Romanoff','Scott Lang','Dreamer']

const topCastImage = document.querySelector('.topCast img');
const topCastText = document.querySelector('.topCastText');
let topCastAlias =  document.querySelector('.topCastAlias');
let tambah2=0;

setInterval(function(){
    tambah2++;
    if(tambah2>9)tambah2=1;
    topCastImage.setAttribute('src','img/avengerTC'+tambah2+'.jpg');
    topCastText.innerHTML = topCText[tambah2-1];
    topCastAlias.innerHTML = topCAlias[tambah2-1];
    

},1000);

// Versi Indonesia
const english = document.querySelector('.english');
const indo = document.querySelector('.indo');

let language = document.querySelector('.language');
const watchlist = document.querySelector('.collapse li .watchlist');
const search1 = document.querySelector('.search input');
const search2 = document.querySelector('.search .btn');
const login = document.querySelector('.collapse .login');
const add = document.querySelector('.banner2 .nav-link');
const detailText =  document.querySelector('.detailText');
const directors = document.querySelector('.accordion .directorDetail');
const writers = document.querySelector('.accordion .writersDetail');
const stars = document.querySelector('.accordion .starsDetail');
const views = document.querySelector('.views');
const topCast = document.querySelector('.topCastJudul');
const photos = document.querySelector('.breadcrumb-item a');
const storyline1 = document.querySelector('.storyline h3');
const storyline2 = document.querySelector('.storyline strong');
const moreFilms = document.getElementsByClassName('moreFilms')[0];
const watchlist2 = document.querySelectorAll('.blockCard .w2');
const judulFooter = document.querySelector('.footer .judulFooter h5');
const endFooter1 = document.querySelector('.footer .endFooter h5');
const endFooter2 = document.querySelector('.footer .endFooter h6');
const menu = document.querySelectorAll('.collapse .dropdown-menu li a');

let count=0;
let menuIdn = ['Profil','Suka','Daftar','Riwayat tontonan','Tonton nanti','Pengaturan','berlangganan','keluar'];
let menuEnglish = ['Profile','Likes','Watch List','History','Watch Later','Setting','Subscribe','Log Out'];

indo.addEventListener('click',function(){
indonesia();
});

english.addEventListener('click',function(){
inggris();
});

function indonesia(){
count=0;
menu.forEach(function(a){
    if(count>a.length)return; 
    a.innerHTML=menuIdn[count];
    count++;
});

language.innerHTML='IDN';
english.innerHTML='Inggris';
indo.innerHTML='Indonesia';
watchlist.innerHTML='List Tontonan';
search1.setAttribute('placeholder','Cari');
search2.innerHTML='Cari';
login.innerHTML='Masuk';
add.innerHTML='+ tambahkan';
detailText.innerHTML='Setelah peristiwa yang menghancurkan dari Avengers: Infinity War (2018), alam semesta hancur. Dengan bantuan sekutu yang tersisa, Avengers berkumpul sekali lagi untuk membalikkan tindakan Thanos dan memulihkan keseimbangan alam semesta.';
directors.innerHTML='pengarah';
writers.innerHTML='Penulis';
stars.innerHTML='Bintang';
views.innerHTML='9.5K Ulasan &nbsp; &nbsp; | &nbsp; &nbsp; 604 Komentar';
topCast.innerHTML='Pemeran';
photos.innerHTML='Foto';
storyline1.innerHTML='| Alur Cerita';
storyline2.innerHTML='Setelah peristiwa dahsyat Avengers: Perang Infinity (2018), alam semesta hancur karena upaya Titan Gila, Thanos. Dengan bantuan sekutu yang tersisa, Avengers harus berkumpul sekali lagi untuk membatalkan tindakan Thanos dan membatalkan kekacauan di alam semesta, apa pun konsekuensi yang mungkin terjadi, dan siapa pun yang mereka hadapi...';
moreFilms.innerHTML='| Film Lainnya';

for(let a=0;a<watchlist2.length;a++){
    watchlist2[a].innerHTML='Tonton nanti';
}
judulFooter.innerHTML='Mari bergabung unutk akses lebih';
endFooter1.innerHTML='Tontonan dengan list pilihan hanya di Fahmily Films';
endFooter2.innerHTML='Mari jadi bagian Fahmili Films dengan berlangganan';
};



// Inggris Mode
function inggris(){
count=0;
menu.forEach(function(b){
    if(count>b.length)return;
    b.innerHTML=menuEnglish[count];
    count++;
});
    
language.innerHTML='EN';
english.innerHTML='English';
indo.innerHTML='Indonesia';
watchlist.innerHTML='Watch List';
search1.setAttribute('placeholder','Search');
search2.innerHTML='Search';
login.innerHTML='Login';
add.innerHTML='+ Add';
detailText.innerHTML='After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.';
directors.innerHTML='Directors';
writers.innerHTML='Writers';
stars.innerHTML='Stars';
views.innerHTML='9.5K Users Reviews &nbsp; &nbsp; | &nbsp; &nbsp; 604 Comments';
topCast.innerHTML='Top Cast';
photos.innerHTML='Photos';
storyline1.innerHTML='| Storyline';
storyline2.innerHTML='After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...';
moreFilms.innerHTML='| More Films';

for(let a=0;a<watchlist2.length;a++){
    watchlist2[a].innerHTML='Watch Later';
}
judulFooter.innerHTML='Sign in for more access';
endFooter1.innerHTML='Watch with a list of choices only at Fahmily Films';
endFooter2.innerHTML='Be a part of Fahmily Film by Subscribing';
};


// modal
const modal=document.querySelector('.modal');
const close = document.querySelectorAll('.modal button');
const login2 = document.querySelectorAll('.modal button')[2];
const xLogin = document.querySelector('.alert button');
const signOut = document.querySelector('.collapse .dropdown-menu li:nth-child(9)');

signOut.addEventListener('click',function(){
    login.style.display='block';
});

xLogin.addEventListener('click',function(){
    login.style.display='none';
});

login2.addEventListener('click', function(){
    myFunction();
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
})

  var myAlert = document.getElementById('myAlert');
  myAlert.style.display = 'none';

  function myFunction(){
    myAlert.style.display = 'block';
  }