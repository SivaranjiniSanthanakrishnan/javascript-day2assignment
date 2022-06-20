function sum (m1 , m2) {
    if(m1 === undefined || m2 === undefined) {
        return 0
    } else {
        let op = m1+m2;
        return op;
    }
}

// Find the average
let scoredMark = sum(98,99);
let average = scoredMark/2;
// console.log(scoredMark);
// console.log(average);

// Return odd numbers from an array 

function oddNumbersReturn () {
    let oddArray = []
    let evenArray = []
    for(i=1;i<=50;i++) {
        if(i % 2 !== 0) {
            oddArray.push(i);
        } else {
            evenArray.push(i)
        }
    }
    // console.log(oddArray)
    // console.log(evenArray)
}
// console.log(oddNumbersReturn());

// Normal Function
function add(n1,n2) {
    return n1+n2
}
// console.log(add(4,5))

// Anonymous
let anoFn = (function(n1, n2) {
    return n1+n2;
});
// console.log(anoFn(4,5));

// Arrow Function
let arrFn = (n1,n2) => {
    return n1+n2;
}
// console.log(arrFn(4,5));

// IIFE
(() => {
    let sum = 4+5;
    // console.log(sum)
})()


// Find array function
let fruitsArr = ['apple', 'orange', 'mango'];

let marksArr = [88, 59, 58, 89, 100];

let mangoFruit = fruitsArr.find((ele) => { 
   return ele === 'mango'; 
});

let markAbove55 = marksArr.find((ele)=>{
    return ele > 55;
})

// console.log(markAbove55);


// Logic to find max element in an array
var largestEle = 0;

for (i=0; i< marksArr.length ; i++) {
    if (marksArr[i] > largestEle) { 
        var largestEle = marksArr[i];
    }
}

// console.log(largestEle);

let marksJSON = JSON.stringify(marksArr);
console.log(marksJSON);
let marksArray = JSON.parse(marksJSON)
console.log(marksArray);