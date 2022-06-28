// Getter and Setter 

var address = {
    area : 'XYZ Street',
    city : 'Chennnai',
    pin: 609452,
    get fullAddress() {
        return `Address is ${this.area}, ${this.city}. PIN: ${this.pin}`
    },
    set setFullAddress(address) {
        this.area = address.streetName;
        this.city = address.area;
        this.pin = address.pin;
    }
}

console.log(address.fullAddress); // Calling get property
address.setFullAddress = {
    streetName : 'XYZ',
    area : 'Anna Nagar',
    pin: 809213
}; // Setting set property
console.log(address.fullAddress); // Calling get property

// Map in Array
var arr = [1,2,3,4,5];

var multipliedArr = arr.map((ele) => {
    return ele * 2;
})

console.log(multipliedArr);
console.log(arr);


// forEach in array
var arr1 = [1,2,3,4,5];
var output = [];

arr1.forEach((ele) => {
    output.push(ele *2);
});

console.log(output);
console.log(arr1);


// filter in array
// Example 1
var arr2 = [1,2,3,4,5,6,7,8,9,10];

var filteredArr = arr2.filter((ele) => {
    return ele % 2 === 0;
});

console.log(filteredArr)
console.log(arr2)

// Example 2
var arr = ['apple', 'orange', 'mango', 'pineapple'];
var output =  arr.filter(ele => {
    let letters = ele.split("");
    return (letters [0] === 'a' || letters [0] === 'e' || letters [0] === 'i' || letters [0] === 'o' || letters [0] === 'u') 
})
console.log(output)
console.log(arr)

// Reduce function

var arr = [1,2,3,4,5];
var sum = 0;
arr.forEach((ele) => {
    sum = sum + ele;
})
console.log(sum);


var arr = [1,2,3,4,5];
var output = arr.reduce((sum, ele) => {
    // ....
    return sum * ele;
}, 1);
console.log(output)