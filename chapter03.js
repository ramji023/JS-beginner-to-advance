// in this chapter learn about diff between letters and words and some basic string methods


const name = "Welcome to my house"
console.log(name);
console.log(name[0]);
console.log(name.charAt(5))
console.log(name.indexOf('o'))    //return the position of the first occurrence of a character in the string
console.log(name.lastIndexOf('o'))
console.log(name.includes('z'))   //if a string contains a certain character
console.log(name.length)




// add the string
const str1 = "hello"
const str2 = "World"
console.log(str1 + str2)
console.log(str1 + " " + str2)
console.log(str1.concat(str2))


console.log(str1.toUpperCase())
console.log(str2.toLowerCase())


// use trim() method
const str = "   WEl come   "
console.log(str.trim())


// use template literal
const name1 = "world"
const name2 = `Hello ${name1}`
console.log(name2)