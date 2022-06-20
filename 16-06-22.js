// Variable Hoisting

console.log(_.isEqual({a:1, b:2}, {b:2, a:1}));
// Example 1
console.log(names); // undefined
var names = "guvi";
console.log(names); // guvi

// Example 2
x = "xxx";
console.log(x);
let x;

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
request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=577d33d6475394a06a5759e4576c0658');

// 3. Sennd a request
request.send();

// 4. Data after request send, response data is stored in this.response
request.onload = function(){
    var countryData = JSON.parse(this.responseText);
    for(let country of countryData) {
        console.log(country.name)
    }
}