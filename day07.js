// day 07 today we will discuss about Closure

// A closure function is a function having access to parent scope,even after the parent function is closed



 
// global scope
// let x = 1;

// const parent = () => {
//     // local scope
//     let y = 2;
//     console.log(x); // 1
//     console.log(y);  //2

//     // define a child function 
//     const childFunction = () => {
//         // local scope
//         let z = 3;
//         console.log(x += 5); //6
//         console.log(y += 2);  //4
//         console.log(z += 1); //4
//     }
//     childFunction();
// }
// parent();

// <-------------- above example if not a closure  ------------------------->




let x = 1;

const parent = () => {
    // local scope
    let y = 2;
    console.log(x); // 1
    console.log(y);  //2

    // define a child function 
    const childFunction = () => {
        // local scope
        let z = 3;
        console.log(x += 5); //6
        console.log(y += 2);  //4
        console.log(z += 1); //4
    }
    return childFunction;
}
let result = parent()
console.log(result);

result();  // it is a pure closure; closure means access parent function scope after parent function is closed;
// console.log(y);  // reference error

