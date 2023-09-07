class smartPhone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    makeCall(number){
        return `okay i'm good, ${number}`;
    }

    sendMessage(number, message){
        return `send ${message} form yout ${brand} ${model}`
    }

    videoCall(){
        return `I'm just video call`
    }
}

class samsung extends smartPhone{
    constructor(x,y){
        super(x,y)
    }

    unlock(){
        return `face Id authentification succesfull`
    }

    
    videoCall(){
        return `I'm just video call with ${this.brand}`
    }
}

const myPhone = new smartPhone("samsung","galaxy");
console.log(myPhone.brand);
console.log(myPhone.model);
console.log(myPhone.makeCall("23232"));


// console.log(myPhone.makeCall());

const mePhone = new samsung("samsungxx","S10");
console.log(mePhone.brand);
console.log(mePhone.model);
mePhone.Id = true;
console.log(mePhone.makeCall("099090"));
console.log(mePhone.Id);
console.log(mePhone.videoCall());



const xPhone = new samsung();
console.log(xPhone.brand);
console.log(xPhone.unlock());


// ============================================================================== case2

class playerFootball{
    constructor(nama,usia,asal){
        this.nama = nama;
        this.usia = usia;
        this.asal = asal;
    }

    Kick(footSide){
        return `${this.nama} kick using ${footSide} side`
    }

    Heading(){
       throw new Error("yout not implemented")
    }

    Run(){
        console.log(`${this.nama} just running`);
    }
}

class Messi extends playerFootball{
    constructor(nama,asal,usia){
        super(nama,asal,usia)
    }

    // Heading(){
    //     console.log("messi can't heading")
    // }

    Dribble(){
        return `${this.nama} is king of dribble`;
    }

    Run(){
        console.log(`messi just running`);
    }
}


class Cristiano extends playerFootball{
    constructor(nama,asal,usia){
        super(nama,asal,usia)
    }

    Skill(){
        return `${this.nama} is king of skill`
    }

    Run(){
        console.log(`cristiano just running`);
    }

    Heading(){
        console.log("Ronaldo great header");
    }
}

const lionel = new Messi('lionel',24,"argentina");
console.log(lionel.nama);
console.log(lionel.usia);
console.log(lionel.asal);
lionel.Run();
lionel.Heading();
console.log(lionel.Kick("left"));
console.log(lionel.Dribble());

const ronaldo = new Cristiano('ronaldo',25,"portugal");
console.log(ronaldo.nama);
console.log(ronaldo.usia);
console.log(ronaldo.asal);
console.log(ronaldo.Kick("left"));
ronaldo.Run();
ronaldo.Heading();
console.log(ronaldo.Skill());