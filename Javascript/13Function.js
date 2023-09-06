// nested function

function addX(x){
    function addY(y){
        return x+y;
    }
    return addY;
}

let tambahX = addX(7);
let result = tambahX(9);
console.log(result);

const result2 = addX(9)(9);
console.log(result2);

/////////////////////////////////

function multiply (num1, num2=10){
    return num1*num2;
}

console.log(multiply(5));
console.log(multiply(7,8));

///////////////////////////// nested function

var num1 = 10;
var num2 = 30;
memberName = "aldo";

function getScore(){
    var num1=50;
    var num2=50;
    memberName = "ardi"

    return `${num1+num2} is ${memberName}`;
}

console.log(getScore());

console.log(num1, num2, memberName);


///////////////////////// function expression

let getSquare = function square(number){
    return number*number;
}

console.log(getSquare(8));

//////////////////////// rekursif 

function loopX(x){
    if(x>=10){
        return;
    }
    console.log(x);
    loopX(x+1);
}

loopX(0);

//////////////////////// fibonacci

function fibonacci1(num){
    console.log("num = "+ num);
    if(num<2){
        return num
    }
    else{
    return (fibonacci1(num-1) + fibonacci1(num-2));
    }
}
console.log(fibonacci1(10));

////////////

function fibonacci2(num){
    console.log(num);
    if(num>=10){
        return num;
    }
    
    return fibonacci2(num+1)+fibonacci2(num+2);
}

console.log(fibonacci2(0));