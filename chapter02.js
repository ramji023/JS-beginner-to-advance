// in this chapter learn about data types ,variables and pop-up boxes


// Data types

console.log(typeof ("ram ji mishra"))    // String
console.log(typeof ("a"))    //String
console.log(typeof (11))  //Number
console.log(typeof (11.3))  //Number
console.log(typeof ({ username: "john doe" }))  //Object
console.log(typeof (["apple", "banana", "orange"]))   //object
console.log(typeof (function print() {           // function
    console.log("Good Morning !!!")
}))
console.log(typeof ([{ name: "bob" }, { age: 24 }, { phoneNumber: "91XXXXXXXXXX" }]))  //Object



// variables

var num1 = 11
var num1 = 22
console.log(num1)   // 22

let name = "bob"
name = "john"
console.log(name)     // Uncaught SyntaxError: Identifier 'name' has already been declared

const a = 5;
const change_a = 8;
console.log(a);     // Uncaught SyntaxError: Identifier 'a' has already been declared



// pop-up interaction

// alert("welcome to my site")   // define alert box

// const age = prompt("enter your age : ")   // define prompt box
// console.log(age)
// if (age <= 18) {
//     alert("you can not vote")
// } else {
//     alert("you can vote")
// }

// const permission = confirm("Hey, Are you a developer ? ")   // define confirm box
// console.log(permission);


/*
key points -->
--> JavaScript doesn’t have a char primitive data type, but it does have “strings”
--> JavaScript is a weakly typed language, so you don’t need to specify the type of
 a variable
*/
