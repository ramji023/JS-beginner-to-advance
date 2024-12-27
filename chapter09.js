// in this chapter we will discuss about objects
/**
 properties and methods
 creating object literals
 object properties
 object methods
 nested objects
 this
 */

// create a object
const myObj = {
    name: "ram ji mishra",
    age: 24,
    subject: "java script",
    getName: () => {
        console.log("name is : ", name)
    }

}
console.log(myObj)
console.log(myObj.name)
console.log(myObj['name'])



const studentName = "bob"
const subject = "computer network"
const printName = () => {
    console.log("student name is : ", studentName)
}
// printName()
const myObj2 = { studentName, subject, printName }
// myObj2.printName()

console.log(myObj2)
myObj2.rollNumber = 2345
console.log(myObj2)
myObj2.studentName = "john cena"
console.log(myObj2)





//Nested Objects
const yourData = {
    professional: {
        jobtitle: "software developer"
    },
    personal: {
        fatherName: "cisen"
    }
}
console.log(yourData)
console.log(yourData.personal.fatherName)


// "this" keyword
const square = {
    sides: 4,
    length: 5,
    perimeter: function () { return this.sides * this.length },
    area: function () { return this.length * this.length }
}

console.log(square.area())
console.log(square.perimeter())