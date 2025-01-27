// in this chapter learn about collections ( learn more about arrays and their methods)



// all arrays are valid
var arr = [1, 2, 4]
var arr2 = ["banana", "orange"]
var arr3 = [true, false, false]
var arr4 = [1, "banana", true]


// create array literal
var arr = ["bob", "john", "markos"]
console.log(arr[0])
console.log(arr[5])


// add element in array
arr[4] = "cenos"
console.log(arr)

// delete element in array
delete arr[2]
console.log(arr)
console.log(arr[2])


// find the length of the array
console.log(arr.length)   //positions that contain undefined are also counted when calculating the length of the array

arr.length = 7
console.log(arr)  // can dynamically change the length of an array by adding or removing items

/*
Once you make an array shorter by editing its length property, any
 items that are removed are lost for good. If you try to change the
 length back to 8, it will just add
 undefined into all the extra spaces
 rather than ;lling them with the values that were there before

*/


//popping and pushing
arr.length = 2
console.log(arr)

console.log(arr.pop())  // can remove the last item in the array using the pop() method
arr.push("noa")
arr.push("shipensi")
console.log(arr)
console.log(arr.shift()) //The shift() method it returns the value of the first item that has been removed from the array
// thi unshift() is same as push() method





//spread operator
var arrA = [1, 2, 3, 4, 5, 6]
console.log(arrA)
var arrB = [arrA]
console.log(arrB)
var arrB = [...arrA] // it will unpack all the elements out and treat them as separate values
console.log(arrB)

arrB = [...arrA, 7]  //The spread operator can also be used to add new items to an array
console.log(arrB)


//Slicing and Splicing
var food = ['Coconut', 'Pineapple', 'Melon', 'Burger', 'Fries', 'Cookie', 'Popcorn', 'Coffee']
console.log(food.slice(2, 5))   // The slice() method creates a subarray, effectively chopping out a slice of an original array starting at one position and finishing at another
console.log(food.splice(2, 1, "Apple"))
console.log(food)


//Finding If a Value Is in an Array
console.log(food.indexOf("Apple"))
console.log(food.includes("Fries")) // Arrays also have the includes() method  This returns a Boolean value depending on whether the array contains a particular element or not


// Joining Array Items into a String
console.log(food.join('--->'));  // The join() method can be used to turn the array into a string that comprises all the items in the array, separated by commas


//Reversing the Order of Array Items
console.log(food.reverse())


// Sorting Array Values
console.log(food.sort())
/*
 Strings are sorted in alphabetical order by default, but so are
 numbers! This means that numbers are sorted by their ;rst digit,
 rather than numerically
 */


// flatten the array
console.log([['Jun', 'Jul', 'Aug'], ['Dec', 'Jan', 'Feb']].flat());