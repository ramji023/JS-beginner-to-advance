// day 10 - today we will learn about JSON JavaScript Object Notation

/**
 * JSON is used to send and receive data
 * JSON is a text format that is completely language independent
 * 
 */

const object = {
    name: "ram ji mishra",
    hobbies: ["watching porn", "masterbating", "sleep"],
    hello: function () {
        console.log("Hello developers!!");
    }
}

console.log(object);
object.hello();


// convert into JSON.stringify 
const sendJSON = JSON.stringify(object);   // lost the method
console.log("json string : ",sendJSON);
console.log("json string : ",typeof sendJSON); // string
console.log("json string : ",sendJSON.name);  // undefined


// parse the JSON string into object
const receiveJSON = JSON.parse(sendJSON);
console.log("json object : ",receiveJSON);
console.log("json object : ",typeof receiveJSON);  // object
console.log("json object : ",receiveJSON.name);  // ram ji mishra