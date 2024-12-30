// <---------    learn about throw() expression   ----------->


// example 01
function checkAge(age) {
    if (age < 18) {
        throw "you can not vote";
    }

    console.log("Task completed !!");

}

try {
    //    checkAge(19)
    checkAge(12)
} catch (error) {
    console.log(error);

}


// example 02

function fetchData(url) {
    if (url === undefined) {
        throw "please enter the url"
    }
    console.log("the url is : ", url)
}
try {
    // fetchData()
    fetchData("localhost:5000")
} catch (error) {
    console.log(error)
}


/**
 * The throw statement in JavaScript is used to create and throw custom errors, exceptions, or other values. This interrupts the flow of the program unless the error is caught using a try...catch block
 */