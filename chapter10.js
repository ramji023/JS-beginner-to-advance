/**
 * in this chapter we will cover the document object model (DOM)
 */



// Getting an Element
var greet = document.getElementById("greeting")
console.log(greet)
console.log(greet.innerHTML)

// Updating the HTML
//  var element = element.innerHTML = "<h1>welcome to my site</h1>"
// console.log(element);


//Getting Multiple Elements


// Getting Elements by Tag Name 
var element = document.getElementsByTagName("li")
console.log(element)
console.log(element[2])


//Getting Elements by Their Class Name
element = document.getElementsByClassName("fruit")
console.log(element)


// Query Selectors
element = document.querySelector('#food')
console.log(element)
element  = document.querySelectorAll('.fruit');
console.log(element)


// access child element
console.log(food.children.length)
console.log(food.children[2])






// Creating Dynamic Markup

// create a element
const name = document.createElement('h1')
name.innerHTML="My Name Is John"

//Adding Elements to the Page
greet.appendChild(name);
console.log(name)



// Getting an Element’s Attributes
// console.log(.getAttribute('class'))
