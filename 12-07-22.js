// Example 1:

const compute = (tamil, english, maths, physics, chemistry, avgFn, cutoff_Fn) => {

    let sum = tamil + english + maths + physics + chemistry;
    let mathsMark = maths / 2;
    let physicsMark = physics / 4;
    let chemistryMark = chemistry / 4;

    let avgMark = avgFn(sum);
    let cutoffMark = cutoff_Fn(mathsMark, physicsMark, chemistryMark);

    console.log(avgMark, cutoffMark);
}

const avg = (sum) => sum / 5;
const cutoff = (mathsMark, physicsMark, chemistryMark) => mathsMark + physicsMark + chemistryMark

compute(90, 80, 60, 84, 76, avg, cutoff);

 
// Example 2:

setTimeout(()=> {
    console.log('Execute after 3 seconds')
}, 3000);

setInterval(()=>{
    console.log('Execute in the interval of one second');
}, 2000);


// Example 3
let arr = [1,2,3,4,5];

let output = arr.map((ele) => {
    console.log(ele)
    return ele*2;
});

// console.log(output);
// console.log(arr);

// Example 4
let arrOfObjects = [
    {keys: 1},
    {keys: 2},
    {keys: 3},
]

let outputObject = arrOfObjects.map(e => {
    console.log(e)
    e.keys = e.keys * 2;
    return e.keys;
})

console.log(outputObject);



// 




let sum = 0;
for(i=0; i<10; i++) {
    sum = sum + i;
}
console.log(sum);

setTimeout(() => {
    console.log('Timed out')
}, 5000);

let sum1 = 0;
for(i=0; i<10; i++) {
    sum = sum + i;
}
console.log(sum);

setTimeout(() => {
    console.log('Timed out')
}, 10000);

let sum2 = 0;
for(i=0; i<10; i++) {
    sum = sum + i;
}
console.log(sum);

setTimeout(() => {
    console.log('Timed out')
}, 3000);


// Countdown function

setTimeout(() => {
    document.getElementById("timer").innerHTML = 10;
    setTimeout(()=>{
        document.getElementById("timer").innerHTML = 9;
        setTimeout(()=>{
            document.getElementById("timer").innerHTML = 8;
            setTimeout(()=>{
                document.getElementById("timer").innerHTML = 7;
                setTimeout(()=>{
                    document.getElementById("timer").innerHTML = 6;
                    setTimeout(()=>{
                        document.getElementById("timer").innerHTML = 5;
                        setTimeout(()=>{
                            document.getElementById("timer").innerHTML = 4;
                            setTimeout(()=>{
                                document.getElementById("timer").innerHTML = 3;
                                setTimeout(()=>{
                                    document.getElementById("timer").innerHTML = 2;
                                    setTimeout(()=>{
                                        document.getElementById("timer").innerHTML = 1;
                                        setTimeout(()=>{
                                            document.getElementById("timer").innerHTML = "<b> Happy Birthday!!! </b>";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}, 1000)
