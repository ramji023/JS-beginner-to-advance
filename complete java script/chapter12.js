/**
 * going loopy over arrays
 * 
 * spreading strings
 array iteration
 JavaScript array iteration methods:forEach ,
 map ,
 reduce ,
 filter ,
 find ,
 every ,
 some
 iterating over objects
 */



//Spreading Strings

var arr = ["hello"]
console.log(arr);
console.log([..."hello"])

arr = ["h", "e", "l", "l", "o"]
console.log(arr.join(''));

//Array Iteration Methods
arr = ["bob", "john", "ceno", "deposir", "ram"]
arr.forEach((item, index) => console.log(`${index} : ${item}`));


// map() method
arr.map((item, index) => { console.log(`${index} ==> ${item}`) })

// reduce() method
arr = [1, 2, 3, 4, 5]

console.log(arr.reduce((sum, value) => { return (sum + value) }))
console.log([1, 2, 3].reduce(
    (acc, value) => acc + value
));
//The main difference is that, instead of returning an array, it combines each result from the callback into a single value.


// filter method
var newArr = arr.filter((num) => num < 4)  //the callback returns true and the value is left in the new array that’s returned
console.log(newArr)  // it returns an array 


// find method
var newArr = arr.find((num) => num > 2)  //The find() method works in a similar way to the filter() method, but it returns the first value that matches the criteria defined in the callback
console.log(typeof (newArr))  // it returns the element not an array


// some method
/**
 *  The
 some() method is very similar to the
 every() method. It also iterates
 over each item in an array until a given condition defined in the callback
 returns
 true . Once this happens, the iteration stops and the method returns
 true . If it reaches the end of the array without any of the items returning
 true , it returns
 false 
 */
var arr = ['C', 'C++', 'Ruby', 'Python', 'JavaScript', 'Swift', 'Java']
const value = arr.some((item) => { return (item.length > 7) })
console.log(value)  // it return boolen value



// Iterating over Objects

// using for-in loop
const rectangle = {
    height: 4,
    length: 5,
    perimeter() { return 2 * (this.height + this.length); },
    area() { return this.length * this.height; }
}

for(const item in rectangle){
     console.log(`${item} ===> ${rectangle[item]}`)   // it console key-value pair
    // console.log(`${item}`)   // it console key value
}


// Object.keys() method
console.log(Object.keys(rectangle));  //returns an array of all the keys of the object

//Object.entries() method returns an array of key–value pairs
console.log(Object.entries(rectangle));
