// <--------------  Asynchronous Programming ------------------->

// example 01
// console.log("program start");
// setTimeout(()=>console.log("file download successfully"),5000)
// console.log("program ended successfully")

// console.log("2nd process is started")
// console.log("2nd process is ended successfully")

// console.log("3rd process is starting");
// setTimeout(()=>console.log("data fetch successfull"),0);
// console.log("3rd process is ended successfully")

// **** JavaScript is single-threaded, so only one task can be processed at a time


// <----------------   intervals ---------------->
// setInterval()

const id = setInterval(() => console.log("i am running continuously..."), 1000);

setTimeout(() => {
    clearInterval(id)   // clear the interval using refrenece of setInterval
    console.log("oops!!! i am tired now.");

}, 5000)

