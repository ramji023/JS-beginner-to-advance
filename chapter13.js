/**
 *  Let’s Get Functional
 *  named parameters
 the rest operator
 hoisting
 scope
 recursive functions
 closures
 functional programming
 pure functions
 */


// <---------  Named Parameters  -------------->
function printDetails(name, age, subject, color) {
    console.log(`the student name is ${name} . his age is ${age}. ${subject} is a favourite subject of ${name}. Also his favourite color is ${color}`)
}

printDetails("boby", 24, "operating system", "purple")
// here is case 1 . how to pass parameters
printDetails("operating system", 24, "purple", "boby")

// avoid this issue we use named parameters
function printData({ name, age, subject, color }) {
    console.log(`the student name is ${name} . his age is ${age}. ${subject} is a favourite subject of ${name}. Also his favourite color is ${color}`)
}
printData({ subject: "operating system", age: 24, color: "purple", name: "boby" })




//  <-------------  Rest parameters  --------------->
function add(...numbers) {    // if dont know how many parameters should we passed
    return numbers.reduce((acc, n) => acc + n);
}
console.log(add(2, 3, 4))
console.log(add(2, 3, 4, 5, 6, 7))
console.log(add(1))




// <------------ Recursive Functions ----------------->
var n = 4
function fact(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    else {
        return n * fact(n - 1)
    }
}
console.log(`the factorial of ${n} is ${fact(n)}`);


// <-----------  Hoisting   ----------->
//that they can be called before they’ve been defined
hello()
function hello() {
    console.log("hello")
}


// <----------- function that return function  ----------->
function name() {
    return function () {
        console.log("hello world");
    };
}
const innerFunc = name();
innerFunc();



// <------------   Closures  --------------->
function countdown(start) {
    let i = start;
    return function () {
        return i--;
    }
}
const innerFunction = countdown(10)
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())


function createCounter() {
    let count = 0; // `count` is private to the closure

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
console.log(counter.getCount()); // Output: 1















// <------------ pure & impure function  ---------->
// its a impure function bcoz it relies on outside variable list
var list = []
function addtask(task) {
    return list.push(task)  //referencing the list variable from outside the function,
}
// its a pure function because it doesnot relies on any outside variable
function addTask(task, list) {
    return [...list, task];
}













// <-------------     Higher-order Functions        ------------->

//functions that accept another function as an argument, or return another function as result, or both

function sum(a) {
    return function (b) {
        return a + b
    }
}
const value1 = sum(5)
console.log(value1(3))

console.log(sum(3)(5));
