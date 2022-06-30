// Snippet 1
var fnExe =  () => {
    for(var i=0; i<10; i++) {
        console.log(i)
    }
    console.log(i)
}
// console.log(i)
fnExe();


// Spread Operator
let arr1 = [1,5,9];
let arr2 = [2,4,8];
let arr3 = [...arr1, ...arr2];
console.log(arr3);


let obj1 = {
    name: 'XXX',
    age: 25
}
let obj2 = {
    email: 'xx@gmail.com',
    address: 'Chennai'
}
let obj3 = {...obj1, ...obj2};
console.log(obj3);


const ob1 = {name: "Test", age: 25};
const ob2 = {...ob1, age: 24, address: "Chennai"};
console.log(ob2);


let o1 = {name: "Test", age: 25};
const prop = "name";
const o2 = {...o1, age: 24, [prop]: "Guvi"};
console.log(o2);


// Rest Parameter

let sumNumbers = (...nos) => {
    let sum=0;
    for (let i of nos) {
        sum = sum+i;
    }
    return sum;
}

let sum = sumNumbers(2,4,6,7,9,10,45,26,19, 57, 36, 17);
console.log(sum);


// Object Destructure
const address = {
    street: 'Nehru Street',
    area: 'Radha Nagar',
    city: 'Chennai',
    pin: 609190
}
// let st = address.street;
// let ar = address.area;
// let cty = address.city;
// let pn = address.pin;


const {city, pin} = address;
console.log(city, pin);

const {street : st, area : areaNew} = address;
console.log(st, areaNew);

// Array Destructuring
const x = [1,2,3,4,5];
const [c,d] = x;
console.log(`${c}, ${d}`);

// Object Shorthand property

const createWardrobe = () => {
    let hat = 1;
    let shorts = 2;
    let jumper = 5;
    let myWardrobe = {
        hat,
        shorts,
        jumper
    }
    return myWardrobe;
}

let wardrobe = createWardrobe();
console.log(wardrobe);
