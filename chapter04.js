// in this chapter learn about Number data types

console.log(typeof(-43.7))

//Exponential Notation
console.log(1e7)
console.log(-2.4E-5)


// NaN ( not a number)
console.log("hello" * 6)
console.log(typeof(NaN))


// Exponentiation
console.log(4**4) // it treat as  4 to the power of 4

// type coercion
console.log(2+"hlw")
console.log("hlw"*4)



//Converting Between Strings and Numbers
console.log(typeof(Number('45')))
console.log(typeof('45'))
console.log((Number("hlw")))
console.log(typeof(String(456)))


// random number using Math.random() method
var num = 8*Math.random()
console.log(num)

console.log(Math.ceil(num))    // Math.ceil() & Math.floor method to get rid of the decimal part
console.log(Math.floor(num))   