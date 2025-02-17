// day 06 - today we will learn about everything about Date object


// creating a date new Date 
// var date = new Date();
// console.log("date is : ",date);


// create specific date
// let specificDate = new Date("2025-11-19"); 
// console.log(specificDate); 


// let date = new Date();
// console.log(date.getFullYear());   // 2025
// console.log(date.getMonth());      // 1 (Feb)
// console.log(date.getDate());       // 17
// console.log(date.getDay());        // 1 (Monday)
// console.log(date.getHours());      // 10
// console.log(date.getMinutes());    // 30
// console.log(date.getSeconds());    // 45
// console.log(date.getMilliseconds());// 123
// console.log(date.getTime());       // Timestamp
// console.log(date.getTimezoneOffset()); // Offset from UTC


// let date = new Date();
// console.log(date.toLocaleString());       // "2/17/2025, 10:30:00 AM"
// console.log(date.toLocaleDateString());   // "2/17/2025"
// console.log(date.toLocaleTimeString());   // "10:30:00 AM"




// date.setDate =date.getDate()+5  // after 5 days
// console.log(date.toLocaleDateString());  


var date_01 = new Date();         // Current date
var date_02 = new Date("2025-11-19"); // Future date

var diff = date_02 - date_01;  // Subtracting two Date objects directly works!

console.log(diff);  // Output in milliseconds
