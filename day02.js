// Task ---> today we will cover JavaScript Callbacks with exercise

// exercise 01 - simple callback 

// function func_01(callback) {
//     setTimeout(() => {
//         callback();
//     }, 2000)
//     console.log("func_01 is running...")
// }
// function func_02() {
//     console.log("func_02 is running..")
// }
// func_01(func_02);


// exercise 02 - callback with array

// const array_ = [12, 2, 45, 6, 7, 8, 4, 3, 6, 7, 24, 6, 7, 9, 8, 7, 76];

// function func(callback) {
//     let resultArray = [];
//     array_.forEach((element) => {
//         resultArray.push(callback(element));
//     })
//     return resultArray;
// }
// function func_(element) {
//     return element ** 2
// }
// console.log(func(func_));



// exercise 03 - Asynchronous Series Executor

// <----triggers all tasks simultaneously---->
const tasks = [
    (cb) => setTimeout(() => cb('Task 1 complete'), 3000),
    (cb) => setTimeout(() => cb('Task 2 complete'), 2000),
    (cb) => setTimeout(() => cb('Task 3 complete'), 1000),
]
console.log(tasks);

function executeInSeries(tasks, callback) {
    tasks.forEach((task) => {
        task(callback);
    })
}
function results(data) {
    console.log(data);
}
executeInSeries(tasks, results);

// <------ execute the tasks in series   ------>

