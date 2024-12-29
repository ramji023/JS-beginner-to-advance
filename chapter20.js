/**
 * Async/Await: A modern way to write asynchronous code in a more readable and synchronous-like manner.
 */


// Basic uses of async and await

function printName(name, callback) {
    console.log("Name:", name);
    callback();
}

function printAge(age, callback) {
    console.log("Age:", age);
    callback();
}

setTimeout((name, age, callback) => {
    console.log("setTimeout run..");
    printName(name, () => {
        printAge(age, () => {
            console.log("Finished printing name and age.");
            callback();
        });
    });
}, 2000, "ram ji", 25, () => {
    console.log("Callback function executed!");
});
