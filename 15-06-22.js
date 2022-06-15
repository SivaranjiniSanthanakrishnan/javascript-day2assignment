// Copy by Value
// Example 1
var a = 1;
var b = a;
b = 2;
// console.log(a);
// console.log(b);

// Copy by reference
// Example 1
var obj1 = {
    name : 'XXX',
    age : 20
}
var obj2 = {...obj1};
obj2.name = 'yyy'
// console.log(obj1);
// console.log(obj2);


// Example 2
var arr1 = [1,2,3];
var arr2 = arr1;
arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// Scope of Variables
// Example 1
{
    if(5>4) {
        let str;
        {
            str = 'guvi geek'
            console.log(str); // guvi geek
        }
        console.log(str); // guvi geek
    }
    console.log(str); // Reference Error
}

// Example 2
{
    if(5>4) {
        {
            let str = "guvi geek"
        }
        console.log(str);
    }
    console.log(str);
}

// Example 3
{
    if(5>4) {
        var str = 'guvi';
        var str = 'hello';
        {
            let str = 'geek'
            console.log(str); // geek
        }
        console.log(str); // hello
    }
    console.log(str); // hello
}

// Example 4
{
    if(5>4) {
       let str = "guvi"
        {
            let str = 'geek'
            console.log(str); // geek
        }
        console.log(str); // guvi
    }
    console.log(str); // ReferenceError
}

// Example 5
const a = 'Hello';
a = 'How are you';
console.log(a);

// Example 6
const eg6;
eg6 = '123'
console.log(eg6);