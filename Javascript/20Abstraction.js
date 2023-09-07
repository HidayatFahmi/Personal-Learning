class smartPhone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    makeCall(number){
        throw new Error("this method must beimplemented");
    }

    sendMessage(number, message){
        throw new Error("this method must be implemented");
    }
}

class samsung extends smartPhone{
    constructor(x,y){
        super(x,y)
    }

    makeCall(number){
        return `Calling ${number} from your ${this.brand} ${this.model}`
    }

    sendMessage(number, message){
        return `send ${message} form yout ${brand} ${model}`
    }
}

const myPhone = new smartPhone("samsung","galaxy");
console.log(myPhone.brand);
console.log(myPhone.model);


// console.log(myPhone.makeCall());

const mePhone = new samsung("samsungxx","S10",100);
console.log(mePhone.brand);
console.log(mePhone.model);
console.log(mePhone.makeCall("099090"));


const xPhone = new samsung();
console.log(xPhone.brand);