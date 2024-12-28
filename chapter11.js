/**
 *  In this chapter, we’ll cover the following topics:
 event-based programming
 event listeners
 click events
 the event object
 submitting forms
 mouse events
 keyboard events
 removing event listeners
 event delegation
 */

// click event 

function bang() {
    document.body.style.background = 'red';
    document.body.innerText = "Hey, I am aladinnn....";
}

// document.addEventListener('click',bang)
const form = document.forms.myForm
function sayName(e) {
    var element = document.getElementById('hello')
    e.preventDefault()
    element.textContent = `Hello, ${form.myName.value}!`;
}
form.addEventListener('submit', sayName)



/**
 * Referencing a Form Element
 Any elements inside a form can be referenced as a property of the
 form element using their
 name attribute. In the example above,
 form.myName is a reference to the
 <input> element inside the
 form, because it has a name attribute of
 myName .
 */