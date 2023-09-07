class Mahasiswa{
    constructor(namaAsli, ipkNya){
    this.nama = namaAsli;
    let ipk = ipkNya; //dideklarasikans sebagai private

    this.lanjutKelas = function(){
        if(this.ipk>2){
            console.log(`nama : ${this.nama}, ipk : ${this.ipk}, lanjut Kelas`)
        }
        else{
            console.log(`Tinggal kelas kamu ${this.nama}`);
        }
    }

        this.getIpk = function(){
            console.log(`ipk dari ${this.nama} adlah ${ipk}`);
        }
    }

    belajar(){
        console.log(`${this.nama} sedang belajar`);
    }

}

const andi =  new Mahasiswa("andi", 4.0);
andi.lanjutKelas();
console.log(andi.nama);
console.log(andi.ipk);
andi.getIpk();

// ======================== Latihan Soal

class Person{
    constructor(nama, umur, jenisKelamin){
        this.nama = nama;
        this.umur = umur,
        this.jenisKelamin = jenisKelamin
        let alamat;

        this.setAlamat = function(setAlamat){
            alamat = setAlamat;
        }

        this.getAlamat = function(){
            console.log(`alamat ${nama} : ${alamat}`);
        }
    }
}

const fahmi = new Person("fahmi",24,"laki-laki");
console.log(fahmi.nama);
fahmi.setAlamat("Bandung");
fahmi.getAlamat();