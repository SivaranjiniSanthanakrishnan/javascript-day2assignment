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

// This keyword accessibility
let obj = {
    a : 10,
    b : () => {
        a = 5,
        console.log(this.a); 
    }
}
obj.b();

// Example 2
var person = {
    names : "Mosh1",
    walk () {
        names = "XXX"
        console.log(this.name);
        return 0;
    }
}

person.walk();

// Class
class Person {
    // Constructor
    // Class Function or Class Methods
    constructor(name){
        this.personName = name;
    }
    walk (age) {
        this.personAge = age;
        console.log('Person Name is '+this.personName);
    }
    sit () {
        console.log(`Person Age is ${this.personAge}`); // Template literals
    }
}

// Class Object
const personObj1 = new Person('XXX');
personObj1.walk(35);
personObj1.sit();

const personObj2 = new Person('YYY');
personObj2.walk();