///////////////////shallow copy
const a = ["f","o","o"];

console.log(`nilai a sebelum di copy = ${a}`);
b=a;
b[0]="b"
console.log(`nilai b = ${b}`);
console.log(`nilai a setelah propses assignment = ${a}`);

/////////////////// deep copy
const x = ["f","a","h","m","i"];

console.log(`array x sebelum deep copy = ${x}`);
y = Array.from(x);
y[0]="R";
console.log(`array y = ${y}`);
console.log(`array x after deep copy = ${x}`);

//==================== Multidimension array

let multArray = [[1, [2,[3]]]]
console.log(multArray [0][1]);

let multArray2 = [1,2,3,[4,5,6,[7,8,9]],10];
console.log(multArray2[3][3][0]);


//==================== array method
// push
const arrayPush = [1,2,3,4,5,6];
arrayPush.push("fahmi");
console.log(arrayPush);

// pop
let arrayPop = [5,4,3,2,1];
arrayPop.pop();
console.log(arrayPop);

// shift
let arrayShift = ["a","b","c","d","e"];
arrayShift.shift();
console.log(arrayShift);

// unshift
let arrayUnshift = ["a","b","c","d","e"];
arrayUnshift.unshift("x");
console.log(arrayUnshift);

// slice
let arraySlice = [1,2,3,4,5,6];
arraySlice2 = arraySlice.slice(2,5);
console.log(arraySlice2);

// concat
let arrayConcat1 = [1,2,3,4,5];
let arrayConcat2 = arrayConcat1.concat([6,7,8]);
console.log(arrayConcat2);

// reverse
let arrayReverse = [1,2,3,4,5,6,7];
let arrayReverse2 = arrayReverse.reverse();
console.log(arrayReverse2);

//  sort
let arraySort = [1,2,3,4,5,6,7];
arraySort.sort((a,b)=> a-b);
console.log(arraySort)

// indef of
let arrayIndexof = [1,2,3,4,5,6];
console.log(arrayIndexof.indexOf(3));

// find
let arrayFind = [6,5,4,3,2,1];
console.log(arrayFind.find(x => x==5))
console.log(arrayFind);

// filter
let arrayFilter = [1,2,3,4,5,6,7,8,9,10,11];
console.log(arrayFilter.filter(x => x%2==0));

// map
let arrayMap = [1,2,3,4,5,6,7,8,9,10,11];
console.log(arrayMap.filter(x => x%2==0));

// reduce
let arrayReduce = [1,2,3,4,5,6,7];
console.log(arrayReduce.reduce((acc, num)=>acc+num,0));

//  latihan soal 

let numbers = [1,2,3,4,9,5,6];

const findMaxValue = (angka) => {
    let max = angka[0];
    for(let a=0;a<numbers.length;a++){
    if(angka[a]>max){
        max=angka[a];
    }
    }
    return max;
}

console.log(findMaxValue(numbers));