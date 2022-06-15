// for loop

for(let i=0; i<=10; i++) {
    // console.log(i);
}

// for loop using an array
let arr = ['apple', 'mango', 'orange', 'kiwi'];

for (var i=0; i<= arr.length; i++) {
    //   console.log(i);
    //   console.log(arr[i]);
}

// for of loop
for(let ele of arr) {
    // console.log(ele);
}

// for in loop
var person = {
    name : 'XXX',
    age: 20,
    email: 'xx@gmail.com'
}
for(let key in person) {
   // console.log(`Key is ${key} value is ${person[key]}`); // Template Literal
}

// JSON data : Javascript Object Notation
let personJSON = JSON.stringify(person);
// console.log(personJSON);
let personObj = JSON.parse(personJSON);
// console.log(personObj);


let arrJSON = JSON.stringify(arr);
// console.log(arrJSON);
let arrEle = JSON.parse(arrJSON);
// console.log(arrEle);

var students = [
    {id: 1, name: 'xxx', age: 20},
    {id: 2, name: 'yyy', age: 21},
    {id: 3, name: 'zzz', age: 20},
]
for (let ele of students) {
   // console.log(ele.name[2]);
}
