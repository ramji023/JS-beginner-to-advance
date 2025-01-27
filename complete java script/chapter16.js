/**
 * we will be discussing these topics in this chapter : 
 * times and dates
 timing functions
 asynchronous programming
 */




//<---------------- Times and Dates --------->

var today = new Date()
console.log(today)
console.log(today.toString());


today = new Date("28 November 2019")  //It’s possible to create Date objects for any date by supplying it as an argument to the constructor function
console.log(today);


// <----------  Getter Methods  -------------->
console.log(today.getFullYear())
console.log(today.getDay());
console.log(today.getMilliseconds());






// <----------------- Timing Functions  --------------->

//setTimeout
const id_1 = setTimeout(() => {   // id_1 used to reference that particular timeout
    console.log("run again.......01")
}, 1000);
console.log(id_1)

const id_2 = setTimeout(() => {
    console.log("run again.....02")
}, 1000);
console.log(id_2)


// <--------------  Asynchronous Programming ------------------->


