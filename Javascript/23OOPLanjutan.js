const GOOD_STATUS = {
    VAILABLE : "AVAILABLE",
    BOUGHT : "BOUGHT"
}

class Goods{
    constructor(name, seller){
        this.name = name;
        this.seller = seller;

        let status = GOOD_STATUS.AVAILABLE;
        let buyer;

        this.buy = function(goodsBuyer){
            buyer = goodsBuyer;
            status = GOOD_STATUS.BOUGHT;
        }

        this.getBuyer = function(){
            return buyer;
        };

        this.getStatus = function(){
            return status;
        }
    }
}

const PERSON_STATUS = {
    USER : "USER",
    SELLER : "SELLER",
};

class Person{
    constructor(name, inputtedType){
        this.name = name;
        const type = inputtedType;

        this.getType = function (){
            return type;
        };
    }
}

class Buyer extends Person{
    constructor(name){
        super(name, PERSON_STATUS.USER);
    }

    buyGoods(goods){
        goods.buy(this);
    }
}


class Seller extends Person {
    constructor(name){
        super(name, PERSON_STATUS.SELLER);
    }
}

const hidayat = new Seller("hidayat");
console.log(hidayat.name);
console.log(hidayat.getType());

const fahmi = new Buyer("fahmi");
console.log(fahmi.name);

const samsung = new Goods("Ibna",hidayat);
console.log(samsung.name);
console.log(samsung.seller);

fahmi.buyGoods(samsung);