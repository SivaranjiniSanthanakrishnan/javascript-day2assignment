// Example 1:
const checkNumber = (n1) => {
    const PromiseData = new Promise((resoved, rejected) => {
        if(typeof(n1) === 'number' && n1>10) {
            resoved("Resolved : Number is greater than 10")
        } else {
            rejected(`Rejected : Number ${n1} is less 10`)
        }
    })
    return PromiseData;
}


// checkNumber(5)
// .then((datum) => console.log(datum))
// .catch((err) => console.log(err))


// Example 2:

const checkData = () => {
    return new Promise((resolved, rejected)=> {
        setTimeout(()=>{
            const data = ["React", "Node"];
            if(data.length > 0) {
                resolved(data)
            } else {
                rejected("Length is zero")
            }
        }, 3000)
    })
}

// checkData()
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Promise Chain
const promiseChain = new Promise((resolve, reject) =>{
    // (1===1) ? resolve(10) : reject("Not true")
    if (1===2) {
        resolve(10)
    } else {
        reject("Not true")
    }
})

promiseChain
    .then(data => {
        console.log(data);
        return data
    })
    .then(data=> {
        console.log(data)
        return 5
    })
    .then((data)=> {
        console.log(data);
        return 4
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(()=> {
        console.log("Finally block will execute either the promise is resolved or rejected ")
    })

// Promsie.all

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        (1===1) ? resolve({
            value: 10
        }) : reject("First Promise rejected");
    }, 1000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        (1===3) ? resolve({
            value: 10
        }) : reject("Second Promise rejected");
    }, 2000)
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (1===1) {
            resolve({
                value : 10
            })
        } else {
            reject("Third Promise rejected")
        }
    }, 3000)
})

Promise.all([promise1, promise2, promise3])
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })