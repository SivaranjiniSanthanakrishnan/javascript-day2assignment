// Prototype Property
let obj1 = {
    name : 'sss'
}

var obj2 = {
    age : 23
}

// obj1.__proto__ = obj2;
// or
Object.setPrototypeOf(obj1, {age: 23});
// console.log(Object.getPrototypeOf(obj1));

// console.log(obj1.name); // sss
// console.log(obj1.__proto__.age); // 23
// console.log(obj1.age); // 23
// console.log(obj2.age);


function data() {
    let a = 6;
    return function data1() {
        return a
    }
}
var output = data();
console.log(output)
console.log(output());
// console.log(a)


// This keyword accessibility
// Example 1
let obj = {
    a : 10,
    b: {
        a: 100,
        inA: 5,
        inB: () => {
            let a = 8
            console.log("Instde arrow fn in inB")
            console.log(this.a); 
            console.log(this.inA); 
        },
        inC() {
            console.log("Instde normal fn inC")
            console.log(this.a) 
            console.log(this.inA); 
        }
    },
    c: () => {
        console.log("Instde arrow fn in c")
        console.log(this.a);  
    },
    d() {
        console.log("Instde arrow fn in d")
        console.log(this.a);  
    }
}

obj.c();
obj.d();
obj.b.inB();
obj.b.inC();


// Example 2

let ob1 = {
    a : 10,
    b : () => {
        a = 5; // Makes an entry in window object 
        console.log(this.a); // 5 Consoles from window object
    }
}
ob1.b();


// Example 3
var person = {
    names : "Mosh1",
    walk () {
        names = "XXX"
        console.log(this.names); // XXX
        return 0;
    }
}
person.walk();


// Class

class Person {
    // Constructor
    // Class Function or Class Methods
    constructor(name, age, height) {
        this.personName = name;
        this.personAge = age
        this.personHeight = height
    }
    name () {
        console.log('Person Name is '+this.personName);
    }
    age () {
        console.log(`Person Age is ${this.personAge}`); // Template literals
    }
    idealWeight() {
        if (this.personHeight > 150 && this.personAge >=20)
            console.log(`Ideal Weight is ${50} Kg`);
        else 
            console.log('came else')
    }
}

// Class Object
const personObj1 = new Person('XXX', 45, 150);
personObj1.name();
personObj1.age();
personObj1.idealWeight();

const personObj2 = new Person('YYY', 55);
personObj2.name();

// Example 2
class Shapes {
    constructor(radius, length, breadth) {
        this.radius = radius;
        this.length = length
        this.breadth = breadth
    }
}

class Circle extends Shapes{
    constructor(r){
        super(r)
    }
    circumference () {
        return 2*3.14*this.radius
    }
}


const c = new Circle(6, 10, 15);
console.log(`Circumference is ${c.circumference()}`);

