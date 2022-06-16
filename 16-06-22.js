// Variable Hoisting

// Example 1
console.log(names); // undefined
// xyz code
// for loop
var names = "guvi";
console.log(names); // guvi

// Example 2
x = "xxx";
console.log(x);
var x;

// Example 3
callFun();
function callFun() {
    console.log('hello')
};

// Example 4
var x1 = 1;
console.log(`X value is ${x1} , Y value is ${y}`);  // Template literals
var y = 2;


// XML HTTP Request
// 1. Create request Object
var request = new XMLHttpRequest();

// 2. Open a request Connection
request.open('GET', 'https://62aacc2d371180affbdaa974.mockapi.io/students');

// 3. Sennd a request
request.send();

// 4. Data after request send, response data is stored in this.response
request.onload = function(){
    var studentData = JSON.parse(this.responseText);
    console.log(studentData);
}
