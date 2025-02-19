// day -12 today we are going to learn about local storage and and session storage

// window.alert(window.location)
// alert(location);  // we dont have to type window it's implied 

const myObj = {
    name: "ram ji mishra",
    age: 23,
    subject: "computer science",
    email: "test@gmail.com"
}

console.log(myObj);

const myArray = ["code", "error", "watch porn", "masterbate", "sleep", "code"];
console.log(myArray)


// use session storage
// sessionStorage.setItem('myData',JSON.stringify(myObj));
// const getData = sessionStorage.getItem('myData');
// console.log(JSON.parse(getData));

// sessionStorage.setItem('myArray',JSON.stringify(myArray));
// const getArrayData = sessionStorage.getItem('myArray');
// console.log(JSON.parse(getArrayData));




// use local storage
localStorage.setItem('myData', JSON.stringify(myObj));
const getData = localStorage.getItem('myData');
console.log(JSON.parse(getData));
localStorage.clear();  // remove all the key-value pair ; present in local storage

localStorage.setItem('myArray', JSON.stringify(myArray));
const getArrayData = localStorage.getItem('myArray');
console.log(JSON.parse(getArrayData));
