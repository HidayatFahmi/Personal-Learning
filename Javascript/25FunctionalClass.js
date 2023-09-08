function Person(name, usia, asal){
    this.name = name;
    this.usia = usia;
    this.asal = asal;

    this.callMe = function(){
        return `hello my name is ${this.name} I'm ${this.usia} years old`
    }
}

function Fahmi(name, usia, hobby){
    Person.call(this, name, usia)

    this.hobby = hobby;
}

const fahmi = new Fahmi("fahmi",24,"Sepak Bola");

console.log(fahmi.name, fahmi.usia, fahmi.usia, fahmi.hobby);
