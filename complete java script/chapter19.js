/**
 * Promises: Understanding how to work with promises to handle asynchronous operations and avoid callback hell.

Event Loop and Call Stack: Understanding the JavaScript execution model, the event loop, call stack, and how asynchronous code works behind the scenes.
Error Handling and Debugging
 */




// callback example 01
// function success(result) {
//     console.log(result)
// }
// function printError(err) {
//     console.log(err)
// }
// function sum(s1, success, setError) {
//     if (s1 === undefined) {
//         return setError("string is undefined..")
//     }
//     const result = [...s1].reverse().join('');
//     if (result) {
//         return success(result)
//     }
// }
// sum("hello", success, printError)
// sum(undefined, success, printError)


// Promise
// const sum = (s1) => {
//     return new Promise((resolve, reject) => {
//         if (s1 === undefined) {
//             reject("string is not iterable")
//         }
//         const result = [...s1].reverse().join('');
//         if (result) {
//             resolve(`reversed string is :  ${result}`)
//         }
//     })
// }

// sum("hello").then(result => console.log(result)).catch(err => console.log(err))
// sum(undefined).then(result => console.log(result)).catch(err => console.log(err))

// Promise methods : Promise.resolve & Promise.reject
const sum = (s1) => {
    if (s1 === undefined) {
        return Promise.reject("string is not iterable");
    }

    const result = [...s1].reverse().join('');

    if (result) {
        return Promise.resolve(`reversed string is : ${result}`);
    }
};

sum("hello")
    .then(result => console.log(result))
    .catch(err => console.log(err));

sum(undefined)
    .then(result => console.log(result))
    .catch(err => console.log(err));
