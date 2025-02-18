// day 08 - today we are going to discuss about IIFE(Immediately Invoked function expression)


// first method to define iife
(() => {
   // do stuff
})();


//second method to define iife
(function () {
   // do stuff
})();


// (function myIIFE() {
//    num++;
//    console.log("value of num is : ", num);

//    return num != 5 ? myIIFE(num) : console.log('finished!!');

// })(num = 0);



//isolate declarations within the function
// const x = "Hello, Mr. President"

// const greet = () => console.log("Good  Morning");

// (() => {
//    const x = "Hello,";
//    const greet = () => console.log("Good  Morning president");
//    console.log(x)
//    greet();
// })();

// console.log(x)
// greet();




// private variable and methods from closures

// const privateCounter = (() => {
//    let count = 0;
//    console.log(`initial value : ${count}`)
//    return () => {
//       count += 1;
//       console.log(count);
//    }
// })();

// privateCounter();
// privateCounter();
// privateCounter();




// the module pattern
const result = (() => {
   let counter = 0;

   return {
      current: () => { console.log(`counter value is : ${counter}`) },
      count: () => { counter++ },
      reset: () => { counter = 0 },
   }
})();

result.count();
result.count();
result.current();