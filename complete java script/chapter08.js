// in this chapter we will cover functions in java script




// create a simple function
var name = "ram ji mishra"
function greeting(name) {
    alert(`Good morning , ${name}`)
}
greeting(name)  // call the function



// arrow function
const greet = (name) => {
    console.log(`good morning ${name}`)
}
greet(name)



// example 01
const sum = (a) => {
    return a * a;
}
console.log(sum(2))



// example 02
function hello(value = "ram ji") {        // pass default parameters
    console.log(`namste , ${value}`)
}
hello()


// callbacks
function func1() {
    console.log("this is the function 1")
}
function func2() {
    console.log("this is the function 2")
}
func2(func1())  // pass a function as  a parameter into another function

/*
  A function that’s passed as an argument to another function is known as a
 callback. The callback can then be called from within the body of the function
 that it’s an argument of.
 */