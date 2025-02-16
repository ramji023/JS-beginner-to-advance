// Task --> today we will discuss about higher-order function (functions using functions),forEach,filter,map and reduce functions

// Higher-Order functions
/**
 * a higher-order functions is a function  that follow at least one property :
 * 1. take one or more functions as a parameter
 * 2. return a function
 */


import { postData } from "./sample.js";

// forEach()
postData.forEach((post, index) => console.log(`index : ${index} title : ${post.title}`))
console.clear();


// filter method
const filteredPost = postData.filter((post) => {
    return post.userId === 2;
})

console.log(filteredPost);


// map method
const mappedPost = filteredPost.map((post) => {
    return post.id * 100;
})

const mappedPost01 = filteredPost.map((post) => {
    return { ...post, id: post.id * 10 };
})
console.log(mappedPost);
console.log(mappedPost01);


// reduce method
const reducedPost = mappedPost.reduce((sum, post) => {
    return sum + post;
})

console.log(reducedPost);


// implement filter without using buit-in map() method
function callback_01(post) {
    return post.id * 1000;
}
function myMap(callback_01, posts) {
    const returnedResult = [];
    posts.forEach((post) => {
        const result = callback_01(post);
        returnedResult.push(result);
    })
    return returnedResult
}
const mappedData = myMap(callback_01, postData)
console.log("mapped data is : ", mappedData)
// implement filter without using buit-in map() method
function callback(post) {
    return post.userId === 2;
}
function myFilter(callback, posts) {
    const returnedResult = []
    posts.forEach((post) => {
        if (callback(post)) {
            returnedResult.push(post);
        }
    })
    console.log("filtered result : ", returnedResult);
    return returnedResult;
}
myFilter(callback, postData);



// implement filter without using buit-in map() method
function callback02(sum, data) {
    console.log(sum + data);
    return sum + data;
}
function myReduce(callback02, mappedData, initialValue) {
    let acc = initialValue === undefined ? mappedData[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < mappedData.length; i++) {
        acc = callback02(acc, mappedData[i]);
    }
    console.log("accumulator is : ", acc);
    return acc;
}
myReduce(callback02, mappedData, 10);




// function func1(callback) {
//     console.log("task 1 is started")
//     callback()
// }

// function func2() {
//     console.log("task 1 is completed")
// }

// func1(func2);


// function func1(callback) {
//     console.log("task 1 is started")
//     callback()
// }

// function func2(callback) {
//     console.log("task 1 is completed")
//     callback()
// }

// func1(()=>func2(()=>console.log("task 2 started..")));

 