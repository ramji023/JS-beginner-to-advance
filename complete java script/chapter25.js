// leetcode prectice


// Question -> To Be or Not To Be
// var expect = function (val) {
//     function toBe(value) {
//         if (val === value) {
//             return true
//         }
//         throw "Not Equal";
//     }

//     function notToBe(value) {
//         if (val !== value) {
//             return true
//         } else {
//             throw "Equal";

//         }
//     }

//     const obj = {
//         toBe,
//         notToBe
//     }
//     return obj;
// };
// expect(5).toBe(null)
// expect(5).notToBe(5)


// Question 2 Counter ||
// var createCounter = function (init) {
//     let result = init
//     function increment() {
//      result ++;
//       return result;
//     }
//     function decrement() {
//       result --;
//       return result;
//     }
//     function reset() {
//         result =init;
//         return init
//     }

//     return { increment, decrement, reset }
// };

// const counter = createCounter(0)
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());



// Question 3 Apply Transform Over Each Element in Array
// var map = function(arr, fn) {
//     let returnedArray = [];   // create a returned array
//     arr.forEach((item,i)=>{    // loop on every element in arr
//         returnedArray.push(fn(item,i))  // and push the updated elemenet in returned array 
//     })

//     return returnedArray;
// };



//Question 4 filter elements from array
// var filter = function (arr, fn) {
//     // create empty returned array
//     let returnedArray = []
//     // loop on every element on arr and push the element
//     // in returned array which return true from function fn(arr[i],i)
//     arr.forEach((item, i) => {
//         if (fn(item, i)) {
//             returnedArray.push(item)
//         }
//     })

//     return returnedArray
// };

// Question 5 : Array reduce transformation
// var reduce = function (nums, fn, init) {
//     if (nums.length === 0) return init;  // if length of the array is 0 return init

//     // let result = 0;
//     nums.forEach((item, i) => {
//         init = fn(init, item)
//     })

//     return init;
// };


// Question 6 : function composition
// functions = [x => x + 1, x => x * x, x => 2 * x]
// var compose = function(functions) {

//     return function (x) {
//         let size = functions.length
//         console.log(size);

//         if (size === 0) return x;
//         for (let i = size-1; i >= 0; i--) {
//             let func = functions[i]           
//             x = func(x)
//             console.log(`the value of x is after ${i} iteration`,x);

//         }
//         return x
//     }

// };
// const fn = compose([x => x + 1, x => 2 * x])
// fn(4)


// Question 7 : return length of arguments passed
// var argumentsLength = function(...args) {
//     console.log(`${args.length}`);

//      return args.length
// };

// argumentsLength(5,true,false);


// Question 8 : Allow one function call
// var once = function (fn) {
//     let called = false;
//     let result;
//     return function (...args) {
//         if (!called) {
//             called = true
//             result = fn(...args)
//             return result;
//         }
//         return undefined;
//     }
// };

// let fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn)

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn



// Question 9 Add two Promises
// var addTwoPromises = async function(promise1, promise2) {
//     let num1 = await promise1
//     let num2 = await promise2

//     return num1+num2;
// };

// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//   .then(console.log); 




// Question 10 Sleep
// async function sleep(millis) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, millis)
//     })
// }

// let t = Date.now()

// sleep(100).then(() => console.log(Date.now() - t))


// Question 11 Is Object Empty
// var obj = { "x": 4, "y": 5 }
// var isEmpty = function (obj) {
//     // apply for-in loop to iterate through the object
//     var flag = true;
//     for (const item in obj) {
//         console.log(`${item} : ${obj[item]}`);
//         flag = false;
//     }

//     return flag
// };
// console.log(isEmpty(obj));


//Question 12 chunk Array
// arr = [1, 2, 3, 4, 5]    //output = [[1,2,3],[4,5]]
// size = 1
// var chunk = function (arr, size) {
//     let result = [];
//     let length = arr.length;

//     let temp = [];
//     for (let i = 0; i < length; i++) {  
//         console.log(`element pushed in to temp array : ${arr[i]}`);         
//         temp.push(arr[i])
//         if (temp.length === size) {
//             result.push(temp)
//             temp = [];
//         }
//     };
//     if(temp.length!==0){
//         result.push(temp)
//     }

//     console.log(result);

// };
// chunk(arr,size)


//Question 13 Array Prototype Last
// Array.prototype.last = function () {
//     if (this.length === 0) {
//         return -1;
//     }

//     return this[this.length - 1];
// };


//  const arr = [1, 2, 3];
//  console.log(arr.last());


// Question 14 Grouped By

// Array.prototype.groupBy = function (fn) {
//     let result = {};
//     this.forEach((item) => {
//         let id = fn(item)
//         if (!result[id]) {
//             result[id] = []
//         }
//         result[id].push(item)
//     })

//     console.log(result);

// };

// [1, 2, 3].groupBy(String)   // {"1":[1],"2":[2],"3":[3]}


// Question 15 Join Two Array by ID
// arr1 = [
//     { "id": 1, "x": 2, "y": 3 },
//     { "id": 2, "x": 3, "y": 6 }
// ],
//     arr2 = [
//         { "id": 2, "x": 10, "y": 20 },
//         { "id": 3, "x": 0, "y": 0 }
//     ]
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// var join = function (arr1, arr2) {
//     let joinedArray = [];
//     joinedArray = [...arr1]
//     console.log(joinedArray);
//     arr2.forEach((item) => {
//         console.log(item);
//         const existIndex = joinedArray.findIndex((ele) => ele.id === item.id)
//         console.log(existIndex);
//         if (existIndex !== -1) {
//             joinedArray[existIndex] = { ...item }
//         }
//         else {
//             joinedArray.push({ ...item })
//         }
//         console.log(joinedArray);
//     });

// };
// join(arr1, arr2);