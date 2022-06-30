// Copy by reference 
var obj1 = {
    name : 'XXX',
    age : 20
}
var obj2 = {...obj1};
obj2.name = 'yyy'
console.log(obj1);
console.log(obj2);

// Scope of variables
{
    if(5>4) {
        let str;
        {
            str = 'HTC Global'
            console.log(str); 
        }
        console.log(str); 
    }
    console.log(str); 
}


{
    if(5>4) {
       let str = "Test"
        {
            let str = 'Interview'
            console.log(str); 
        }
        console.log(str);
    }
    console.log(str); 
}


// Variable Hoisting
x = "xxx";
console.log(x);
let x;

// IIFE : Ask purpose
(() => {
    console.log("Execute")
})()

// Scope
var fnExe =  () => {
    for(var i=0; i<10; i++) {
        console.log(i)
    }
    console.log(i)
}
// console.log(i)
fnExe();


// Callstack, webAPI
setTimeout(() => {
    for(i=0; i<10; i++) {
        console.log(i)
    }
},0)

if(1==1) {
    console.log("In condition")
}


// Spread Operator
const emp1 = {name:"Test", age:25};
const prop = "name";
const emp2 = {...student, age:24, [prop]:"HTC"}
// console.log(student2);