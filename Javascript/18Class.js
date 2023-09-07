class smartPhone {
    constructor(brand = "samsung", model = "balok"){
        this.brand=brand;
        this.model=model;
        this.batteryLife = 100;
    }

    makeCall(number){
        this.batteryLife -= 5;
        return `calling ${number}...`;
    }

    charge(){
        this.batteryLife += 100;
        return `your brand ${this.brand} ${this.model} is now fully charged`
    }
}

const myPhone = new smartPhone("apple","iPhone15");
console.log(myPhone.makeCall(00988));
console.log(myPhone.brand);
console.log(myPhone.batteryLife);
console.log(typeof(myPhone));


// ===================== Latihans soal

class Person{
    constructor(nama, umur, jenisKelamin){
    this.nama = nama;
    this.umur = umur;
    this.jenisKelamin = jenisKelamin;
    }

    kenalan(){
    return `halo nama saya ${this.nama}, umur saya ${this.umur} tahun dan saya seorang ${this.jenisKelamin}`;
    }
}

const fahmi = new Person("Fahmi",24,"Pria");
console.log(fahmi);
console.log(fahmi.kenalan());