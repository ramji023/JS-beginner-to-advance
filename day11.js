// day-11 -today we are going to learn about error handling in java script

"use strict"



// variable = "Ram ji mishra";   // reference error
// console.log(variable)
// console.log(typeof variable);


// let age === 43;  // syntax error
// console.log(age);


// const name = "ram mishra"  // Type error
// name = "deepak mishra"



// 1st method : Use try catch method
const doError = () => {
    try {
        throw new Error("this is a custom error")
        // const name = "ram ji mishra";
        // name = "deepak mishra";
    } catch (error) {
        // console.log(error)
        // console.error(error.name)
        // console.error(error.message)
        console.error(error.stack)
    } finally {
        console.log("task completed")
    }
}
doError();

// function customError(message) {
//     this.message = message
//     this.name = "customError"
//     this.stack = `${this.name} : ${this.message}`
// }